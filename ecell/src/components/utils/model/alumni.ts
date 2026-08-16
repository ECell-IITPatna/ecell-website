import mongoose from "mongoose";

export interface Alumni {
    name: string;
    phone: string;
    email: string;
    branch: string|null;
    year: number|null;
    startup: string;
    role: string;
    linkedin: string;
    status: "APPROVED" | "REJECTED";
    emailStatus: "SENT" | "FAILED" | "NOT_SENT";
};

const alumniSchema = new mongoose.Schema<Alumni>({
    name: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    email: { type: String, required: true ,unique: true},
    branch: { type: String, required: false },
    year: { type: Number, required: false },
    startup: { type: String, required: true },
    role: { type: String, required: true },
    linkedin: { type: String, required: true , unique: true},
    status: { type: String, enum: ["APPROVED", "REJECTED"], required: true },
    emailStatus: { type: String, enum: ["SENT", "FAILED", "NOT_SENT"], default: "NOT_SENT", required: true },
}, { timestamps: true });

export const AlumniModel = mongoose.models.Alumni || mongoose.model<Alumni>("Alumni", alumniSchema);
