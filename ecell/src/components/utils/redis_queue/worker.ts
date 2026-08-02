import { Worker } from 'bullmq';
import IORedis from 'ioredis';
import { sendEmail } from '../mail_service/sendEmail';
import connectDB from '@/components/utils/connectDB';
import { EmailModel } from '../model/email';

connectDB();

const connection = new IORedis({
  host: process.env.REDIS_HOST || '127.0.0.1',
  port: parseInt(process.env.REDIS_PORT || '6379'),
  maxRetriesPerRequest: null,
});

const worker = new Worker(
    'email-queue',
    async job => {
        const { to, subject, text, replyTo } = job.data;
        try {
            const createEmail = await EmailModel.create({
                recipientEmail: to,
                subject: subject,
                text: text,
                send_status: "PENDING",
                senderEmail: replyTo || process.env.MAIL_FROM || "entrepreneurship@iitp.ac.in",
                job: job.name as any
            });
            await createEmail.save();

            const info = await sendEmail(to, subject, text, replyTo);
            if (!info.success) {
                createEmail.send_status = "FAILED";
                createEmail.error_message = (info.error as any)?.message || String(info.error);
                await createEmail.save();
                throw new Error(`Email Couldn't Be Sent: ${createEmail.error_message}`);
            }
            createEmail.send_status = "SENT";
            await createEmail.save();
            console.log(`Email job ${job.id} (${job.name}) successfully processed!`);
        }
        catch (error) {
            console.error(`Error processing email job ${job.id}:`, error);
        }
    },
    { connection },
);