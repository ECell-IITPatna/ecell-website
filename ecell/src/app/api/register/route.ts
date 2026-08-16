import connectDB from "@/components/utils/connectDB";
import { RegistrationModel } from "@/components/utils/model/registration";
import { sendBrevoNotification } from "@/components/utils/mail_service/sendBrevoEmail";
import { emailTemplates } from "@/constants/emailTemplates";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
    const cookieStore = await cookies();
    const registered = cookieStore.get("registered");

    if (registered?.value === "true") {
        return NextResponse.json({ message: "Already Registered", status: 400 }, { status: 400 });
    }
    
    const registrationData = await request.json();

    if (!registrationData.name || !registrationData.email || !registrationData.phone || !registrationData.startup || !registrationData.role || !registrationData.linkedin) {
        return NextResponse.json({ message: "All required fields must be filled", status: 400 }, { status: 400 });
    }

    try {
        await connectDB();

        // 1. Check for duplicates in DB before sending any email requests
        const existing = await RegistrationModel.findOne({
            $or: [
                { email: registrationData.email },
                { phone: registrationData.phone },
                { linkedin: registrationData.linkedin }
            ]
        });

        if (existing) {
            let field = "email, phone, or LinkedIn link";
            if (existing.email === registrationData.email) field = "email";
            else if (existing.phone === registrationData.phone) field = "phone";
            else if (existing.linkedin === registrationData.linkedin) field = "LinkedIn link";
            return NextResponse.json({ message: `An alumni with this ${field} is already registered!`, status: 400 }, { status: 400 });
        }

        // 2. Prepare Email template text details
        const detailsText = `
Details of the Candidate:
- Name: ${registrationData.name}
- Email: ${registrationData.email}
- Phone: ${registrationData.phone}
- Branch/Department: ${registrationData.branch || 'N/A'}
- Year of Graduation: ${registrationData.year || 'N/A'}
- Organization/Startup: ${registrationData.startup}
- Current Role: ${registrationData.role}
- LinkedIn: ${registrationData.linkedin}
`;

        // 3. Attempt Email Delivery via Brevo (Includes internal retry logic up to 5 times)
        console.log(`Sending registration emails for ${registrationData.email}...`);
        const emailResult = await sendBrevoNotification(
            registrationData.email,
            emailTemplates.alumniRegistrationConfirmation.subject_user,
            emailTemplates.alumniRegistrationConfirmation.text_user,
            emailTemplates.alumniRegistrationConfirmation.subject_ecell,
            emailTemplates.alumniRegistrationConfirmation.text_ecell + detailsText,
            registrationData.email
        );

        if (!emailResult.success) {
            console.error("Email delivery failed after all attempts:", emailResult.error);
            return NextResponse.json({ 
                message: "Email delivery failed, please check your network or try again later.", 
                status: 500 
            }, { status: 500 });
        }

        // 4. Save to DB ONLY if email succeeds
        const newRegistration = new RegistrationModel(registrationData);
        await newRegistration.save();

        // 5. Restrict user from registering again using cookies ONLY if saved successfully
        cookieStore.set("registered", "true", { path: "/", httpOnly: true, sameSite: "strict", secure: true });

        return NextResponse.json({ message: "Registration Successful, We Will Get Back to You Soon", status: 200 }, { status: 200 });

    } catch (error: any) {
        console.error("Error saving registration data:", error);
        return NextResponse.json({ message: "Error while saving registration data, Try again later", status: 500 }, { status: 500 });
    }
}