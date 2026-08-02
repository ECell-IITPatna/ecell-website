import mongoose from "mongoose";
export interface Registration {
    name: string;
    phone: string;
    email: string;
    branch: string|null;
    year: number|null;
    startup: string;
    role: string;
    linkedin: string;
    send_email:"PENDING"|"SENT"|"FAILED",
};

const registrationSchema = new mongoose.Schema<Registration>({
    name: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    email: { type: String, required: true ,unique: true},
    branch: { type: String, required: false },
    year: { type: Number, required: false },
    startup: { type: String, required: true },
    role: { type: String, required: true },
    linkedin: { type: String, required: true , unique: true},
    send_email: { type: String, enum: ["PENDING", "SENT", "FAILED"], default: "PENDING" },
}, { timestamps: true });

export const RegistrationModel = mongoose.models.Registration || mongoose.model<Registration>("Registration", registrationSchema);

