import mongoose from "mongoose";

// Connection Helper
export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error("MONGO_URI environment variable is not defined");
    }
    await mongoose.connect(mongoUri);
    console.log("MongoDB connected successfully inside Admin Portal");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

// Contact Interface & Schema
export interface Contact {
  name: string;
  email: string;
  subject?: string;
  message: string;
  createdAt?: Date;
}

const contactSchema = new mongoose.Schema<Contact>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: false },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

export const ContactModel = mongoose.models.Contact || mongoose.model<Contact>("Contact", contactSchema);

// Registration Interface & Schema
export interface Registration {
  name: string;
  phone: string;
  email: string;
  branch: string | null;
  year: number | null;
  startup: string;
  role: string;
  linkedin: string;
  createdAt?: Date;
}

const registrationSchema = new mongoose.Schema<Registration>(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    branch: { type: String, required: false },
    year: { type: Number, required: false },
    startup: { type: String, required: true },
    role: { type: String, required: true },
    linkedin: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export const RegistrationModel = mongoose.models.Registration || mongoose.model<Registration>("Registration", registrationSchema);

// Alumni Interface & Schema
export interface Alumni {
  name: string;
  phone: string;
  email: string;
  branch: string | null;
  year: number | null;
  startup: string;
  role: string;
  linkedin: string;
  status: "APPROVED" | "REJECTED";
  emailStatus: "SENT" | "FAILED" | "NOT_SENT";
  createdAt?: Date;
}

const alumniSchema = new mongoose.Schema<Alumni>(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    branch: { type: String, required: false },
    year: { type: Number, required: false },
    startup: { type: String, required: true },
    role: { type: String, required: true },
    linkedin: { type: String, required: true, unique: true },
    status: { type: String, enum: ["APPROVED", "REJECTED"], required: true },
    emailStatus: { type: String, enum: ["SENT", "FAILED", "NOT_SENT"], default: "NOT_SENT", required: true },
  },
  { timestamps: true }
);

export const AlumniModel = mongoose.models.Alumni || mongoose.model<Alumni>("Alumni", alumniSchema);
