import connectDB from "@/components/utils/connectDB";
import { ContactModel } from "@/components/utils/model/contact";
import { addJobs } from "@/components/utils/redis_queue/queue";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const contactData = await request.json();
        
        if (!contactData.name || !contactData.email || !contactData.message) {
            return NextResponse.json({ message: "Name, email, and message are required fields", status: 400 }, { status: 400 });
        }

        await connectDB();
        
        const newContact = new ContactModel(contactData);
        await newContact.save();

        // Add contact enquiry emails to queue
        await addJobs("CONTACT", contactData);

        return NextResponse.json({ message: "Message Sent Successfully!", status: 200 }, { status: 200 });
    } catch (error: any) {
        console.error("Error saving contact message:", error);
        return NextResponse.json({ message: "Error while saving contact message, Try again later", status: 500 }, { status: 500 });
    }
}
