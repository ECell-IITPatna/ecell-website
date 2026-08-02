import mongoose from "mongoose";

export interface Contact {
    name: string;
    email: string;
    subject?: string;
    message: string;
}

const contactSchema = new mongoose.Schema<Contact>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: false },
    message: { type: String, required: true },
}, { timestamps: true });

export const ContactModel = mongoose.models.Contact || mongoose.model<Contact>("Contact", contactSchema);
