import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { connectDB, RegistrationModel, AlumniModel } from '@/lib/models';
import { sendBrevoEmail } from '@/lib/sendBrevoEmail';

async function checkAuth() {
  const cookieStore = await cookies();
  const session = cookieStore.get('admin_session');
  return session && session.value === 'authenticated_token';
}

export async function GET() {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await connectDB();

    // Self-healing database migration: Move any approved/rejected records in Registration to Alumni collection
    const processedRegistrations = await RegistrationModel.find({
      status: { $in: ["APPROVED", "REJECTED"] }
    });

    for (const reg of processedRegistrations) {
      const exists = await AlumniModel.findOne({ email: reg.email });
      if (!exists) {
        await AlumniModel.create({
          name: reg.name,
          phone: reg.phone,
          email: reg.email,
          branch: reg.branch,
          year: reg.year,
          startup: reg.startup,
          role: reg.role,
          linkedin: reg.linkedin,
          status: reg.status,
          emailStatus: reg.emailStatus || "NOT_SENT"
        });
      }
      await RegistrationModel.findByIdAndDelete(reg._id);
    }

    // Fetch pending registrations (all documents remaining in Registration)
    const registrations = await RegistrationModel.find({}).sort({ createdAt: -1 });
    
    // Fetch processed alumni (approved/rejected)
    const alumni = await AlumniModel.find({}).sort({ createdAt: -1 });

    return NextResponse.json({ registrations, alumni });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { id, ...updateData } = body;
    if (!id) {
      return NextResponse.json({ error: 'Missing record ID' }, { status: 400 });
    }

    await connectDB();

    // 1. Try finding in Registration collection (Pending)
    const pendingReg = await RegistrationModel.findById(id);

    if (pendingReg) {
      const targetStatus = updateData.status;
      if (!targetStatus || (targetStatus !== "APPROVED" && targetStatus !== "REJECTED")) {
        return NextResponse.json({ error: 'Invalid or missing target status for approval' }, { status: 400 });
      }

      let emailSent = false;
      let emailError = "";

      if (targetStatus === "APPROVED") {
        const subject = "E-Cell Alumni Registration Approved";
        const text = `Dear ${pendingReg.name},\n\nWe are pleased to inform you that your registration as an alumnus on the E-Cell IIT Patna platform has been approved!\n\nThank you for connecting with us.\n\nBest regards,\nE-Cell IIT Patna`;
        const result = await sendBrevoEmail(pendingReg.email, subject, text);
        emailSent = result.success;
        emailError = result.error?.message || String(result.error);
      } else {
        const subject = "E-Cell Alumni Registration Update";
        const text = `Dear ${pendingReg.name},\n\nThank you for your interest in registering as an alumnus on the E-Cell IIT Patna platform.\n\nAfter reviewing the details provided, we regret to inform you that we are unable to approve your registration at this time.\n\nBest regards,\nE-Cell IIT Patna`;
        const result = await sendBrevoEmail(pendingReg.email, subject, text);
        emailSent = result.success;
        emailError = result.error?.message || String(result.error);
      }

      // Create in Alumni collection
      const alumniData = {
        name: pendingReg.name,
        phone: pendingReg.phone,
        email: pendingReg.email,
        branch: pendingReg.branch,
        year: pendingReg.year,
        startup: pendingReg.startup,
        role: pendingReg.role,
        linkedin: pendingReg.linkedin,
        status: targetStatus,
        emailStatus: emailSent ? "SENT" : "FAILED"
      };

      const newAlumni = await AlumniModel.create(alumniData);

      // Delete from Registration collection
      await RegistrationModel.findByIdAndDelete(id);

      return NextResponse.json({ success: true, registration: newAlumni, migrated: true });
    }

    // 2. Try finding in Alumni collection (already approved/rejected)
    const existingAlumni = await AlumniModel.findById(id);
    if (!existingAlumni) {
      return NextResponse.json({ error: 'Record not found in database' }, { status: 404 });
    }

    const targetStatus = updateData.status || existingAlumni.status;
    const currentEmailStatus = existingAlumni.emailStatus || "NOT_SENT";

    // Trigger email if the status is changing, OR if the status is already APPROVED/REJECTED but previous email failed
    const shouldSendEmail = updateData.status && (
      updateData.status !== existingAlumni.status || 
      (updateData.status === existingAlumni.status && currentEmailStatus === "FAILED")
    );

    if (shouldSendEmail) {
      let emailSent = false;
      let emailError = "";

      if (targetStatus === "APPROVED") {
        const subject = "E-Cell Alumni Registration Approved";
        const text = `Dear ${existingAlumni.name},\n\nWe are pleased to inform you that your registration as an alumnus on the E-Cell IIT Patna platform has been approved!\n\nThank you for connecting with us.\n\nBest regards,\nE-Cell IIT Patna`;
        const result = await sendBrevoEmail(existingAlumni.email, subject, text);
        emailSent = result.success;
        emailError = result.error?.message || String(result.error);
      } else if (targetStatus === "REJECTED") {
        const subject = "E-Cell Alumni Registration Update";
        const text = `Dear ${existingAlumni.name},\n\nThank you for your interest in registering as an alumnus on the E-Cell IIT Patna platform.\n\nAfter reviewing the details provided, we regret to inform you that we are unable to approve your registration at this time.\n\nBest regards,\nE-Cell IIT Patna`;
        const result = await sendBrevoEmail(existingAlumni.email, subject, text);
        emailSent = result.success;
        emailError = result.error?.message || String(result.error);
      }

      updateData.emailStatus = emailSent ? "SENT" : "FAILED";
      updateData.status = targetStatus;
    }

    const updatedAlumni = await AlumniModel.findByIdAndUpdate(id, updateData, { new: true });
    return NextResponse.json({ success: true, registration: updatedAlumni, migrated: false });

  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'Missing registration ID' }, { status: 400 });
    }

    await connectDB();
    
    let deleted = await RegistrationModel.findByIdAndDelete(id);
    if (!deleted) {
      deleted = await AlumniModel.findByIdAndDelete(id);
    }

    if (!deleted) {
      return NextResponse.json({ error: 'Registration not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 });
  }
}
