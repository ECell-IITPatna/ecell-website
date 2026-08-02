import mongoose from "mongoose";
export interface Email {
    recipientEmail:string;
    subject:string;
    text:string;
    send_status:"PENDING"|"SENT"|"FAILED";
    senderEmail:string;
    job:"REGISTRATION"|"CONTACT";
};

const emailSchema = new mongoose.Schema<Email>({
    recipientEmail: { type: String, required: true },
    subject: { type: String, required: true },
    text: { type: String, required: true },
    send_status: { type: String, required: true },
    senderEmail: { type: String, required: true },
    job: { type: String, required: true},
}, { timestamps: true });

export const EmailModel = mongoose.models.Email || mongoose.model<Email>("Email", emailSchema);

