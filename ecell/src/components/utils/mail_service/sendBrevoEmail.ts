const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Sends a single email using Brevo's HTTP SMTP API.
 * Retries up to 5 times with exponential backoff on server errors/timeouts.
 */
export const sendBrevoEmail = async (
  to: string,
  subject: string,
  text: string,
  replyTo?: string
): Promise<{ success: boolean; messageId?: string; error?: any }> => {
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  const senderName = process.env.BREVO_SENDER_NAME || "E-Cell IIT Patna";

  if (!apiKey || !senderEmail) {
    console.error("Missing Brevo environment configuration keys.");
    return { success: false, error: new Error("Brevo environment variables are missing") };
  }

  const payload = {
    sender: { name: senderName, email: senderEmail },
    to: [{ email: to }],
    replyTo: replyTo ? { email: replyTo } : undefined,
    subject: subject,
    textContent: text,
  };

  const maxAttempts = 5;
  let attempt = 0;
  let delay = 500; // Initial delay of 500ms

  while (attempt < maxAttempts) {
    attempt++;
    try {
      const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "accept": "application/json",
          "content-type": "application/json",
          "api-key": apiKey,
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(`Email successfully sent to ${to} on attempt #${attempt}. MessageId: ${data.messageId}`);
        return { success: true, messageId: data.messageId };
      } else {
        const errText = await response.text();
        console.warn(`Attempt #${attempt} failed with status ${response.status}: ${errText}`);
        
        // If it's a client error (except 429), retrying won't help (e.g. invalid sender or recipient format)
        if (response.status >= 400 && response.status < 500 && response.status !== 429) {
          return { success: false, error: new Error(`Brevo Client Error ${response.status}: ${errText}`) };
        }
      }
    } catch (err: any) {
      console.error(`Attempt #${attempt} threw network error:`, err.message || err);
    }

    if (attempt < maxAttempts) {
      console.log(`Retrying in ${delay}ms...`);
      await sleep(delay);
      delay *= 2; // Exponentially double the delay
    }
  }

  return { success: false, error: new Error(`Failed to send email after ${maxAttempts} attempts.`) };
};

/**
 * Sends both the confirmation email to the User and the notification email to the E-Cell Team.
 * If either email fails to send, returns success: false to enable database rollback.
 */
export const sendBrevoNotification = async (
  userEmail: string,
  userSubject: string,
  userText: string,
  ecellSubject: string,
  ecellText: string,
  userReplyTo?: string
): Promise<{ success: boolean; error?: string }> => {
  const ecellRecipient = process.env.SMTP_USER || "entrepreneurship@iitp.ac.in";

  // 1. Send User Confirmation
  const userResult = await sendBrevoEmail(userEmail, userSubject, userText);
  if (!userResult.success) {
    return { success: false, error: `Failed to deliver user confirmation email: ${userResult.error?.message || userResult.error}` };
  }

  // 2. Send E-Cell Admin Notification
  const ecellResult = await sendBrevoEmail(ecellRecipient, ecellSubject, ecellText, userReplyTo || userEmail);
  if (!ecellResult.success) {
    return { success: false, error: `Failed to deliver E-Cell team notification email: ${ecellResult.error?.message || ecellResult.error}` };
  }

  return { success: true };
};
