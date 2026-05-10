import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO || process.env.SMTP_USER,

      subject: `New Partner Application – ${data.companyName}`,

      html: `
      <div style="background:#f5f7fb;padding:40px 20px;font-family:Arial,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0"
          style="max-width:700px;margin:0 auto;background:#ffffff;border-radius:24px;border:1px solid #e5e7eb;overflow:hidden;box-shadow:0 10px 40px rgba(0,0,0,0.05);">

          <tr>
            <td style="height:6px;background:linear-gradient(to right,#fb923c,#f97316,#ea580c);"></td>
          </tr>

          <tr>
            <td style="padding:40px;">
              
              <div style="display:inline-block;background:#fff7ed;color:#f97316;padding:10px 18px;border-radius:999px;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:20px;">
                New Partner Request
              </div>

              <h1 style="margin:0;font-size:34px;color:#0f172a;font-weight:800;">
                Partner Application Received
              </h1>

              <p style="margin:16px 0 32px;color:#64748b;font-size:16px;line-height:28px;">
                A new packers & movers company has submitted a partnership request.
              </p>

              <table width="100%" cellpadding="0" cellspacing="0">

                <tr>
                  <td style="padding:18px;background:#f8fafc;border-radius:16px;border:1px solid #e2e8f0;">
                    
                    <p style="margin:0 0 14px;font-size:14px;color:#94a3b8;font-weight:600;">
                      FULL NAME
                    </p>

                    <p style="margin:0 0 24px;font-size:18px;color:#0f172a;font-weight:700;">
                      ${data.fullName}
                    </p>

                    <p style="margin:0 0 14px;font-size:14px;color:#94a3b8;font-weight:600;">
                      PHONE NUMBER
                    </p>

                    <p style="margin:0 0 24px;font-size:18px;color:#0f172a;font-weight:700;">
                      +91 ${data.phone}
                    </p>

                    <p style="margin:0 0 14px;font-size:14px;color:#94a3b8;font-weight:600;">
                      COMPANY NAME
                    </p>

                    <p style="margin:0 0 24px;font-size:18px;color:#0f172a;font-weight:700;">
                      ${data.companyName}
                    </p>

                    <p style="margin:0 0 14px;font-size:14px;color:#94a3b8;font-weight:600;">
                      COMPANY ADDRESS
                    </p>

                    <p style="margin:0;font-size:17px;color:#334155;line-height:28px;">
                      ${data.companyAddress}
                    </p>

                  </td>
                </tr>

              </table>

              <div style="margin-top:32px;padding-top:22px;border-top:1px solid #e5e7eb;font-size:13px;color:#94a3b8;">
                © 2026 Avon Packers & Movers
              </div>

            </td>
          </tr>

        </table>
      </div>
      `,
    });

    return NextResponse.json({
      success: true,
    });

  } catch (err) {
    console.log(err);

    return NextResponse.json({
      success: false,
    });
  }
}