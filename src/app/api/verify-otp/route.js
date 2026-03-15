// app/api/verify-otp/route.js
import { NextResponse } from "next/server";
// import { getRecord, deleteRecord, MAX_ATTEMPTS } from "@/lib/optstore";
import {getRecord,deleteRecord , MAX_ATTEMPTS} from "@/lib/optstore"

export async function POST(request) {
  try {
    const { email, otp } = await request.json();

    if (!email || !otp) {
      return NextResponse.json(
        { success: false, message: "Email and OTP are required." },
        { status: 400 }
      );
    }

    const record = getRecord(email);

    if (!record) {
      return NextResponse.json(
        { success: false, message: "No OTP found for this email. Please request a new one." },
        { status: 400 }
      );
    }

    if (Date.now() > record.expiresAt) {
      deleteRecord(email);
      return NextResponse.json(
        { success: false, message: "OTP has expired. Please request a new one." },
        { status: 400 }
      );
    }

    record.attempts += 1;

    if (record.attempts > MAX_ATTEMPTS) {
      deleteRecord(email);
      return NextResponse.json(
        { success: false, message: "Too many wrong attempts. Please request a new OTP." },
        { status: 429 }
      );
    }

    if (record.otp !== otp.trim()) {
      const left = MAX_ATTEMPTS - record.attempts;
      return NextResponse.json(
        { success: false, message: `Incorrect OTP. ${left} attempt${left !== 1 ? "s" : ""} left.` },
        { status: 400 }
      );
    }

    deleteRecord(email);
    return NextResponse.json({ success: true, message: "Email verified!" });
  } catch (err) {
    console.error("verify-otp:", err);
    return NextResponse.json({ success: false, message: "Server error." }, { status: 500 });
  }
}