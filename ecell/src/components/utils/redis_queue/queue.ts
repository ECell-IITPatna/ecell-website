import { Queue } from 'bullmq';

export const myQueue = new Queue('email-queue');

export async function addJobs(to: string, subject: string, text: string, replyTo: string, job: "REGISTRATION" | "CONTACT") {
    await myQueue.add(job, { to: to, subject: subject, text: text, replyTo: replyTo }, { attempts: 3, backoff: { type: "exponential", delay: 1000 }, });
}