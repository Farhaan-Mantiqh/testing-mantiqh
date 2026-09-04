import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const apiKey = import.meta.env.RESEND_API_KEY || process.env.RESEND_API_KEY;

    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "Resend API key is missing on server configuration." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const resend = new Resend(apiKey);
    const body = await request.json();

    const { name, email, phone, message, introduction, formType } = body;

    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: "Name and Email are required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const recipientEmail = import.meta.env.CONTACT_EMAIL || process.env.CONTACT_EMAIL;

    if (!recipientEmail) {
      return new Response(
        JSON.stringify({ error: "Contact email is missing on server configuration." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
    const userMessage = message || introduction || "No message provided.";
    const isApply = formType === "apply";
    const subjectTitle = isApply ? "New Application Submission" : "New Contact Inquiry";

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f6f8; margin: 0; padding: 24px; color: #1e293b; }
            .card { max-width: 600px; margin: 0 auto; background: #ffffff; padding: 32px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; }
            .badge { display: inline-block; padding: 4px 12px; background: #e0f2fe; color: #0369a1; font-weight: 600; font-size: 12px; border-radius: 100px; text-transform: uppercase; margin-bottom: 12px; }
            .title { margin: 0 0 24px 0; color: #0f172a; font-size: 22px; font-weight: 700; border-bottom: 2px solid #387ec1; padding-bottom: 12px; }
            .field { margin-bottom: 18px; }
            .label { font-weight: 600; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
            .value { font-size: 15px; color: #0f172a; line-height: 1.5; }
            .message-box { background: #f8fafc; border-left: 4px solid #387ec1; padding: 14px; border-radius: 6px; white-space: pre-wrap; font-size: 14px; color: #334155; }
            .footer { margin-top: 32px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center; }
          </style>
        </head>
        <body>
          <div class="card">
            <span class="badge">${isApply ? "Job Application" : "Contact Request"}</span>
            <h2 class="title">${subjectTitle}</h2>
            
            <div class="field">
              <div class="label">Full Name</div>
              <div class="value"><strong>${name}</strong></div>
            </div>

            <div class="field">
              <div class="label">Email Address</div>
              <div class="value"><a href="mailto:${email}" style="color: #387ec1; text-decoration: none;">${email}</a></div>
            </div>

            <div class="field">
              <div class="label">Phone Number</div>
              <div class="value">${phone ? phone : "Not specified"}</div>
            </div>

            <div class="field">
              <div class="label">${isApply ? "Introduction" : "Message"}</div>
              <div class="value message-box">${userMessage}</div>
            </div>

            <div class="footer">
              This message was sent from the Mantiqh website via Resend.
            </div>
          </div>
        </body>
      </html>
    `;

    const data = await resend.emails.send({
      from: "Mantiqh Website <onboarding@resend.dev>",
      to: [recipientEmail],
      replyTo: email,
      subject: `[Mantiqh] ${subjectTitle} from ${name}`,
      html: htmlContent,
    });

    if (data.error) {
      return new Response(
        JSON.stringify({ error: data.error.message }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, id: data.data?.id }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Failed to send email.";
    console.error("Error in send-email API:", err);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
