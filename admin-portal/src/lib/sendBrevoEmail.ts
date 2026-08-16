const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Sends an email using Brevo's HTTP API.
 * Retries up to 5 times with exponential backoff on timeouts/server errors.
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
    console.error("Missing Brevo environment configuration in Admin Portal.");
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
  let delay = 500;

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
      delay *= 2;
    }
  }

  return { success: false, error: new Error(`Failed to send email after ${maxAttempts} attempts.`) };
};
