// app/api/send-otp/route.js
// Sends a 6-digit OTP to the user's email address.
//
// Uses Nodemailer by default (works with any SMTP — Gmail, Outlook, Zoho, etc.)
// To switch to Resend, see the commented block below.
//
// Required .env.local variables:
//   SMTP_HOST=smtp.gmail.com
//   SMTP_PORT=587
//   SMTP_USER=you@gmail.com
//   SMTP_PASS=your_app_password      ← Gmail: use an App Password, not your login password
//   SMTP_FROM="Your Company <you@gmail.com>"
//
// For Resend instead: RESEND_API_KEY=re_xxxxx

import { NextResponse } from "next/server";
import { generateOTP, saveOTP, isOnCooldown, cooldownLeft } from "@/lib/optstore";

const isValidEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

async function sendEmailNodemailer(to, otp) {
  const nodemailer = (await import("nodemailer")).default;

  const transporter = nodemailer.createTransport({
    host:   process.env.SMTP_HOST,
    port:   Number(process.env.SMTP_PORT ?? 587),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from:    process.env.SMTP_FROM ?? process.env.SMTP_USER,
    to,
    subject: "Your verification code",
    text:    `Your OTP is: ${otp}\n\nValid for 10 minutes. Do not share this code.`,
    html: `
      <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px;background:#fff;border-radius:12px;border:1px solid #e2e8f0">
        <h2 style="margin:0 0 8px;font-size:20px;color:#0f172a">Verify your email</h2>
        <p style="margin:0 0 24px;color:#64748b;font-size:14px">Use the code below to complete your enquiry. It expires in 10 minutes.</p>
        <div style="letter-spacing:0.3em;font-size:36px;font-weight:900;color:#ea580c;text-align:center;padding:20px 0;background:#fff7ed;border-radius:8px;margin-bottom:24px">
          ${otp}
        </div>
        <p style="margin:0;font-size:12px;color:#94a3b8">If you did not request this, you can safely ignore this email.</p>
      </div>
    `,
  });
}

// ── Uncomment to use Resend instead of Nodemailer ────────────────────────────
// async function sendEmailResend(to, otp) {
//   const { Resend } = await import("resend");
//   const resend = new Resend(process.env.RESEND_API_KEY);
//   await resend.emails.send({
//     from:    "Your Company <noreply@yourdomain.com>",
//     to,
//     subject: "Your verification code",
//     html:    `<p>Your OTP is <strong>${otp}</strong>. Valid for 10 minutes.</p>`,
//   });
// }
// ────────────────────────────────────────────────────────────────────────────

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Enter a valid email address." },
        { status: 400 }
      );
    }

    if (isOnCooldown(email)) {
      const wait = cooldownLeft(email);
      return NextResponse.json(
        { success: false, message: `Please wait ${wait}s before requesting again.` },
        { status: 429 }
      );
    }

    const otp = generateOTP();
    saveOTP(email, otp);

    // ── DEV: print OTP to console so you can test without SMTP configured ───
    console.log(`[DEV] OTP for ${email} → ${otp}`);
    // ────────────────────────────────────────────────────────────────────────

    // Only attempt real email if SMTP is configured
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      await sendEmailNodemailer(email, otp);
    } else {
      console.warn("[send-otp] SMTP not configured — OTP logged to console only.");
    }

    // Mask email for response: j***@example.com
    const [user, domain] = email.split("@");
    const masked = `${user[0]}${"*".repeat(Math.min(user.length - 1, 4))}@${domain}`;

    return NextResponse.json({ success: true, message: `OTP sent to ${masked}` });
  } catch (err) {
    console.error("send-otp:", err);
    return NextResponse.json({ success: false, message: "Failed to send OTP. Try again." }, { status: 500 });
  }
}