import connectDB from "@/components/utils/connectDB";
import { ContactModel } from "@/components/utils/model/contact";
import { sendBrevoNotification } from "@/components/utils/mail_service/sendBrevoEmail";
import { emailTemplates } from "@/constants/emailTemplates";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
    const cookieStore = await cookies();
    const contacted = cookieStore.get("contacted");

    if (contacted?.value === "true") {
        return NextResponse.json({ message: "You have sent an enquiry already, wait till we get in touch with you.", status: 400 }, { status: 400 });
    }

    try {
        const contactData = await request.json();
        
        if (!contactData.name || !contactData.email || !contactData.message) {
            return NextResponse.json({ message: "Name, email, and message are required fields", status: 400 }, { status: 400 });
        }

        await connectDB();
        
        // Prepare Email details text
        const detailsText = `
Details of the Enquiry:
- Name: ${contactData.name}
- Email: ${contactData.email}
- Subject: ${contactData.subject || 'No Subject'}
- Message: ${contactData.message}
`;

        // Attempt Email Delivery via Brevo (Includes retry logic up to 5 times)
        console.log(`Sending contact enquiry emails for ${contactData.email}...`);
        const emailResult = await sendBrevoNotification(
            contactData.email,
            emailTemplates.contact.subject_user,
            emailTemplates.contact.text_user,
            `${emailTemplates.contact.subject_ecell} - ${contactData.subject || 'No Subject'}`,
            emailTemplates.contact.text_ecell + detailsText,
            contactData.email
        );

        if (!emailResult.success) {
            console.error("Contact email delivery failed after all attempts:", emailResult.error);
            return NextResponse.json({ 
                message: "Email delivery failed, please check your network or try again later.", 
                status: 500 
            }, { status: 500 });
        }

        // Save to DB ONLY if email succeeds
        const newContact = new ContactModel(contactData);
        await newContact.save();

        // Limit user from submitting again using cookies ONLY if saved successfully
        cookieStore.set("contacted", "true", { 
            path: "/", 
            httpOnly: true, 
            sameSite: "strict", 
            secure: true
        });

        return NextResponse.json({ message: "Message Sent Successfully!", status: 200 }, { status: 200 });
    } catch (error: any) {
        console.error("Error saving contact message:", error);
        return NextResponse.json({ message: "Error while saving contact message, Try again later", status: 500 }, { status: 500 });
    }
}
