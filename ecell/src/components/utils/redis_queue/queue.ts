import { Queue } from 'bullmq';
import IORedis from 'ioredis';
import { emailTemplates } from '@/constants/emailTemplates';

let globalQueue: Queue | null = null;
let redisConnection: IORedis | null = null;

const getRedisConnection = () => {
  if (typeof window !== 'undefined') return null; // Avoid running on client side if imported
  
  if (!redisConnection) {
    redisConnection = new IORedis({
      host: process.env.REDIS_HOST || '127.0.0.1',
      port: parseInt(process.env.REDIS_PORT || '6379'),
      maxRetriesPerRequest: null,
      lazyConnect: true, // Prevents eager connection on import
    });

    redisConnection.on('error', (err) => {
      // Suppress connection logs during production builds
      if (process.env.NEXT_PHASE !== 'phase-production-build') {
        console.error('Redis connection error:', err.message);
      }
    });
  }
  return redisConnection;
};

export const getQueue = () => {
  if (globalQueue) return globalQueue;
  
  const connection = getRedisConnection();
  if (!connection) throw new Error("Redis connection cannot be created");

  if (!(global as any).myQueue) {
    (global as any).myQueue = new Queue('email-queue', { connection });
  }
  globalQueue = (global as any).myQueue;
  return globalQueue!;
};

export async function addJobs(job: "REGISTRATION" | "CONTACT", data: any) {
    const queue = getQueue();
    
    if (job === "REGISTRATION") {
        const detailsText = `
Details of the Candidate:
- Name: ${data.name}
- Email: ${data.email}
- Phone: ${data.phone}
- Branch/Department: ${data.branch || 'N/A'}
- Year of Graduation: ${data.year || 'N/A'}
- Organization/Startup: ${data.startup}
- Current Role: ${data.role}
- LinkedIn: ${data.linkedin}
`;
        // 1. Notify E-Cell team
        await queue.add("REGISTRATION_ECELL", {
            to: process.env.SMTP_USER || "entrepreneurship@iitp.ac.in",
            subject: emailTemplates.alumniRegistrationConfirmation.subject_ecell,
            text: emailTemplates.alumniRegistrationConfirmation.text_ecell + detailsText,
            replyTo: data.email
        }, { 
            attempts: 3, 
            backoff: { type: "exponential", delay: 1000 } 
        });

        // 2. Confirm to registered Candidate
        await queue.add("REGISTRATION_USER", {
            to: data.email,
            subject: emailTemplates.alumniRegistrationConfirmation.subject_user,
            text: emailTemplates.alumniRegistrationConfirmation.text_user,
            replyTo: ""
        }, { 
            attempts: 3, 
            backoff: { type: "exponential", delay: 1000 } 
        });
    }

    if (job === "CONTACT") {
        const detailsText = `
Details of the Enquiry:
- Name: ${data.name}
- Email: ${data.email}
- Subject: ${data.subject || 'No Subject'}
- Message: ${data.message}
`;
        // 1. Notify E-Cell team
        await queue.add("CONTACT_ECELL", {
            to: process.env.SMTP_USER || "entrepreneurship@iitp.ac.in",
            subject: `${emailTemplates.contact.subject_ecell} - ${data.subject || 'No Subject'}`,
            text: emailTemplates.contact.text_ecell + detailsText,
            replyTo: data.email
        }, { 
            attempts: 3, 
            backoff: { type: "exponential", delay: 1000 } 
        });

        // 2. Thank User
        await queue.add("CONTACT_USER", {
            to: data.email,
            subject: emailTemplates.contact.subject_user,
            text: emailTemplates.contact.text_user,
            replyTo: ""
        }, { 
            attempts: 3, 
            backoff: { type: "exponential", delay: 1000 } 
        });
    }
}