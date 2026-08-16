import mongoose from "mongoose";
import { connectDB, ContactModel, RegistrationModel, AlumniModel } from "../src/lib/models";

const MOCK_CONTACTS = [
  {
    name: "Dilip Kumar",
    email: "dilip@example.com",
    subject: "Sponsorship for E-Summit '26",
    message: "Hello E-Cell Team,\n\nI am reaching out from our tech startup regarding potential sponsorship opportunities for E-Summit '26. We are keen on partnering with you to support student entrepreneurship. Let us know when we can discuss this in detail.\n\nBest regards,\nDilip",
  },
  {
    name: "Aditi Sharma",
    email: "aditi.sharma@example.com",
    subject: "Speaker Invitation Query",
    message: "Respected E-Cell Core Team,\n\nI wanted to ask about the process for proposing a keynote speaker for the upcoming entrepreneurship lecture series. We have a prominent alumnus interested in delivering a session. Please share details.\n\nThanks,\nAditi",
  },
  {
    name: "Rohan Verma",
    email: "rohan.v@example.com",
    subject: "Campus Incubation Process",
    message: "Hi,\n\nCould you please guide me on how students can apply for incubation support at IIT Patna? We have built a prototype for an agritech IoT product and want to seek mentoring.\n\nRegards,\nRohan Verma",
  }
];

const MOCK_ALUMNI = [
  {
    name: "Vaansh Dev",
    email: "developerandstuff@gmail.com",
    phone: "+91 98765 43210",
    branch: "Computer Science and Engineering",
    year: 2022,
    startup: "ByteFlow AI",
    role: "Founder & CTO",
    linkedin: "https://linkedin.com/in/vaansh-dev-demo",
  },
  {
    name: "Priyanshu Gupta",
    email: "developerandstuff+1@gmail.com",
    phone: "+91 87654 32109",
    branch: "Electrical Engineering",
    year: 2020,
    startup: "VoltCharge Networks",
    role: "Co-Founder & CEO",
    linkedin: "https://linkedin.com/in/priyanshu-g-demo",
  },
  {
    name: "Sneha Reddy",
    email: "developerandstuff+2@gmail.com",
    phone: "+91 76543 21098",
    branch: "Mechanical Engineering",
    year: 2021,
    startup: "EcoDrive Logistics",
    role: "Head of Operations",
    linkedin: "https://linkedin.com/in/sneha-r-demo",
  }
];

async function seed() {
  console.log("\x1b[36m%s\x1b[0m", "🌱 Starting database seeding script...\n");

  try {
    // 1. Establish database connection
    await connectDB();

    // 2. Clean existing seed data (Idempotent execution)
    console.log("🧹 Cleaning existing mock data...");
    const contactEmails = MOCK_CONTACTS.map(c => c.email);
    const alumniEmails = MOCK_ALUMNI.map(a => a.email);
    const alumniPhones = MOCK_ALUMNI.map(a => a.phone);
    const alumniLinkedins = MOCK_ALUMNI.map(a => a.linkedin);

    await ContactModel.deleteMany({ email: { $in: contactEmails } });
    await RegistrationModel.deleteMany({
      $or: [
        { email: { $in: alumniEmails } },
        { phone: { $in: alumniPhones } },
        { linkedin: { $in: alumniLinkedins } }
      ]
    });
    await AlumniModel.deleteMany({
      $or: [
        { email: { $in: alumniEmails } },
        { phone: { $in: alumniPhones } },
        { linkedin: { $in: alumniLinkedins } }
      ]
    });

    console.log("✓ Cleanup completed.");

    // 3. Insert mock contact enquiries
    console.log("\n✉️ Seeding contact enquiries...");
    const createdContacts = await ContactModel.insertMany(MOCK_CONTACTS);
    console.log(`✅ Successfully seeded ${createdContacts.length} contact enquiries.`);

    // 4. Insert mock alumni registrations
    console.log("\n🎓 Seeding alumni registrations...");
    const createdAlumni = await RegistrationModel.insertMany(MOCK_ALUMNI);
    console.log(`✅ Successfully seeded ${createdAlumni.length} alumni registrations.`);

    console.log("\x1b[32m%s\x1b[0m", "\n🎉 Database seeded successfully!");

  } catch (error) {
    console.error("\x1b[31m%s\x1b[0m", "❌ Seeding failed with error:");
    console.error(error);
  } finally {
    // 5. Close connection
    await mongoose.connection.close();
    console.log("\n🔌 Database connection closed.");
  }
}

seed().catch(err => {
  console.error("Fatal seeder crash:", err);
  process.exit(1);
});
