import { Worker } from 'bullmq';
import IORedis from 'ioredis';
import { sendEmail } from '../mail_service/sendEmail';
import connectDB from '@/components/utils/connectDB';
import { EmailModel } from '../model/email';

connectDB();

const connection = new IORedis({ maxRetriesPerRequest: null });

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
                senderEmail: replyTo || process.env.MAIL_FROM,
                job: job.name
            });
            await createEmail.save();

            const info = await sendEmail(to, subject, text, replyTo);
            if (!info.success) {
                throw new Error(`Email Couldn't Be Sent`);
            }
            createEmail.send_status = "SENT";
            await createEmail.save();
        }
        catch (error) {
            console.log(error);
        }
    },
    { connection },
);