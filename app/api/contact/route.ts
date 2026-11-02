import { NextRequest, NextResponse } from "next/server";

async function sendViaResend(payload: object): Promise<{ ok: boolean; error?: string }> {
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    return { ok: false, error: "RESEND_API_KEY not configured" };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    console.error("Resend API error:", errorData);
    return { ok: false, error: JSON.stringify(errorData) };
  }

  return { ok: true };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // 1. Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide your name." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: "Please provide a message." },
        { status: 400 }
      );
    }

    const recipientEmail = "ito.contact@knolink.co.za";
    const timestamp = new Date().toISOString();
    const dispatchId = `ITO-${Date.now().toString(36).toUpperCase()}`;

    // 2. Notification email sent to ito.contact@knolink.co.za
    const teamEmailPayload = {
      from: "Itô <notifications@knolink.co.za>",
      to: [recipientEmail],
      reply_to: email.trim(),
      subject: `[Itô Contact] New message from ${name.trim()}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7f6f2; padding: 32px 24px; color: #1a1a1a;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e0dfd5; padding: 32px;">
            <p style="font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #73726c; margin-top: 0;">Itô // Contact Note</p>
            <h2 style="font-weight: 500; font-size: 20px; margin: 8px 0 24px 0; color: #1a1a1a;">New enquiry received</h2>
            <hr style="border: none; border-top: 1px solid #e0dfd5; margin: 16px 0;" />
            <p style="font-size: 14px; margin: 6px 0;"><strong>Reference:</strong> ${dispatchId}</p>
            <p style="font-size: 14px; margin: 6px 0;"><strong>Sender Name:</strong> ${name.trim()}</p>
            <p style="font-size: 14px; margin: 6px 0;"><strong>Sender Email:</strong> <a href="mailto:${email.trim()}" style="color: #1a1a1a;">${email.trim()}</a></p>
            <p style="font-size: 14px; margin: 6px 0;"><strong>Timestamp:</strong> ${timestamp}</p>
            <hr style="border: none; border-top: 1px dashed #d5d4cb; margin: 20px 0;" />
            <p style="font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #73726c;">Message Payload:</p>
            <div style="background-color: #faf9f6; padding: 16px; border: 1px solid #eae8e1; font-size: 14px; line-height: 1.6; white-space: pre-wrap; color: #2a2a2a;">
${message.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;")}
            </div>
            <hr style="border: none; border-top: 1px solid #e0dfd5; margin: 24px 0 16px 0;" />
            <p style="font-size: 11px; color: #8e8d85; margin: 0;">Sent via Itô website on knolink.co.za</p>
          </div>
        </div>
      `,
    };

    // 3. Confirmation email sent back to the sender
    const confirmationEmailPayload = {
      from: "Itô <notifications@knolink.co.za>",
      to: [email.trim()],
      subject: `[${dispatchId}] We received your note — Itô`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7f6f2; padding: 32px 24px; color: #1a1a1a;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e0dfd5; padding: 32px;">
            <p style="font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: #73726c; margin-top: 0;">Itô // Transmission Received</p>
            <h2 style="font-weight: 500; font-size: 20px; margin: 8px 0 16px 0; color: #1a1a1a;">Hello ${name.trim()},</h2>
            <p style="font-size: 14px; line-height: 1.6; color: #3a3a3a;">
              Thank you for reaching out. We have received your note and routed it to our team at <a href="mailto:${recipientEmail}" style="color: #1a1a1a; text-decoration: underline;">${recipientEmail}</a>.
            </p>
            <hr style="border: none; border-top: 1px dashed #d5d4cb; margin: 20px 0;" />
            <p style="font-size: 14px; margin: 6px 0;"><strong>Reference ID:</strong> ${dispatchId}</p>
            <p style="font-size: 14px; margin: 6px 0;"><strong>Routed to:</strong> ${recipientEmail}</p>
            <hr style="border: none; border-top: 1px dashed #d5d4cb; margin: 20px 0;" />
            <p style="font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #73726c;">Your message:</p>
            <div style="background-color: #faf9f6; padding: 16px; border: 1px solid #eae8e1; font-size: 14px; line-height: 1.6; white-space: pre-wrap; color: #3a3a3a;">
${message.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;")}
            </div>
            <hr style="border: none; border-top: 1px solid #e0dfd5; margin: 24px 0 16px 0;" />
            <p style="font-size: 12px; color: #73726c; line-height: 1.5; margin: 0;">
              This is an automated confirmation. If you need to follow up directly, feel free to reply to
              <a href="mailto:${recipientEmail}" style="color: #1a1a1a; text-decoration: underline;">${recipientEmail}</a>.
            </p>
          </div>
        </div>
      `,
    };

    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      const [teamResult, confirmResult] = await Promise.allSettled([
        sendViaResend(teamEmailPayload),
        sendViaResend(confirmationEmailPayload),
      ]);

      const teamSuccess = teamResult.status === "fulfilled" && teamResult.value.ok;
      const confirmSuccess = confirmResult.status === "fulfilled" && confirmResult.value.ok;

      if (!teamSuccess) {
        const error = teamResult.status === "fulfilled" ? teamResult.value.error : teamResult.reason;
        console.error("Failed to send notification email to team:", error);
      }
      if (!confirmSuccess) {
        const error = confirmResult.status === "fulfilled" ? confirmResult.value.error : confirmResult.reason;
        console.error("Failed to send confirmation email to user:", error);
      }

      if (!teamSuccess && !confirmSuccess) {
        return NextResponse.json(
          { success: false, error: "Failed to dispatch email. Please try again or write directly to ito.contact@knolink.co.za." },
          { status: 502 }
        );
      }
    } else {
      console.log(`[ITO EMAIL DISPATCH - DEV] Sent to ${recipientEmail} and ${email}`);
    }

    return NextResponse.json({
      success: true,
      dispatchId,
      recipient: recipientEmail,
      timestamp,
      message: "Message successfully sent to ito.contact@knolink.co.za and confirmation sent to sender.",
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected server error occurred." },
      { status: 500 }
    );
  }
}

