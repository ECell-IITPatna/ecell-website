import { NextResponse } from "next/server";
import connectDB from "@/components/utils/connectDB";
import { AnnouncementModel } from "@/components/utils/model/announcement";

export async function GET() {
  try {
    await connectDB();
    const announcements = await AnnouncementModel.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, announcements });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Failed to fetch announcements" },
      { status: 500 }
    );
  }
}
