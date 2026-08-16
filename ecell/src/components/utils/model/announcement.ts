import mongoose from "mongoose";

export interface Announcement {
  headline: string;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const announcementSchema = new mongoose.Schema<Announcement>(
  {
    headline: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

export const AnnouncementModel =
  mongoose.models.Announcement || mongoose.model<Announcement>("Announcement", announcementSchema);
