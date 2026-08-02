import mongoose from "mongoose";
export interface Email {
    recipientEmail:string;
    subject:string;
    text:string;
    send_status:"PENDING"|"SENT"|"FAILED";
    senderEmail:string;
    job:"REGISTRATION"|"CONTACT"|"REGISTRATION_ECELL"|"REGISTRATION_USER"|"CONTACT_ECELL"|"CONTACT_USER";
    error_message?:string;
};

const emailSchema = new mongoose.Schema<Email>({
    recipientEmail: { type: String, required: true },
    subject: { type: String, required: true },
    text: { type: String, required: true },
    send_status: { type: String, required: true },
    senderEmail: { type: String, required: true },
    job: { type: String, required: true},
    error_message: { type: String, required: false },
}, { timestamps: true });

export const EmailModel = mongoose.models.Email || mongoose.model<Email>("Email", emailSchema);

