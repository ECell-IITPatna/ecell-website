import transporter from "./transporter";

export const sendEmail = async (to: string, subject: string, text: string, replyTo: string) => {
    const mailJob = {
        from: process.env.MAIL_FROM,
        replyTo: replyTo || process.env.MAIL_FROM,
        to: to,
        subject: subject,
        text: text
    }
    try {
        await transporter.verify();
        console.log("Server is ready to take our messages");

        const info = await transporter.sendMail(mailJob);

        return { success: true, messageId: info.messageId, accepted: info.accepted, rejected: info.rejected }
    }
    catch (err) {
        console.log(err);
        return { success: false, error: err }
    }
}