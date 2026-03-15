"use client";

// ─── EmailVerification.jsx — CLIENT COMPONENT ────────────────────────────────

import { useState, useRef, useEffect } from "react";
import {
  HiOutlineMail,
  HiOutlineShieldCheck,
  HiOutlineRefresh,
} from "react-icons/hi";
import OTPInput from "./OTPInput";

const OTP_COOLDOWN = 60;
const EMAIL_RE     = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * @param {object}   props
 * @param {string}   props.email
 * @param {Function} props.onEmailChange - (val: string) => void
 * @param {Function} props.onVerified    - (verified: boolean) => void
 * @param {boolean}  [props.disabled]
 */
export default function EmailVerification({
  email,
  onEmailChange,
  onVerified,
  disabled = false,
}) {
  // "idle" | "sent" | "verified"
  const [step,      setStep]      = useState("idle");
  const [otp,       setOtp]       = useState("");
  const [sending,   setSending]   = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [msg,       setMsg]       = useState(null); // { text, ok }
  const [cooldown,  setCooldown]  = useState(0);
  const timerRef = useRef(null);

  useEffect(() => () => clearInterval(timerRef.current), []);

  const isValidEmail = EMAIL_RE.test(email);
  const otpComplete  = otp.replace(/\D/g, "").length === 6;

  const startCooldown = () => {
    clearInterval(timerRef.current);
    setCooldown(OTP_COOLDOWN);
    timerRef.current = setInterval(() => {
      setCooldown((c) => {
        if (c <= 1) { clearInterval(timerRef.current); return 0; }
        return c - 1;
      });
    }, 1000);
  };

  const resetToIdle = () => {
    setStep("idle");
    setOtp("");
    setMsg(null);
    onVerified(false);
    clearInterval(timerRef.current);
    setCooldown(0);
  };

  const handleEmailEdit = (val) => {
    onEmailChange(val);
    if (step !== "idle") resetToIdle();
  };

  const sendOTP = async () => {
    if (!isValidEmail) return;
    setSending(true);
    setMsg(null);
    try {
      const res  = await fetch("/api/send-otp", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStep("sent");
        setOtp("");
        setMsg({ text: data.message || "OTP sent to your inbox.", ok: true });
        startCooldown();
      } else {
        setMsg({ text: data.message || "Failed to send OTP.", ok: false });
      }
    } catch {
      setMsg({ text: "Network error. Please try again.", ok: false });
    } finally {
      setSending(false);
    }
  };

  const verifyOTP = async () => {
    if (!otpComplete) { setMsg({ text: "Enter all 6 digits.", ok: false }); return; }
    setVerifying(true);
    setMsg(null);
    try {
      const res  = await fetch("/api/verify-otp", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ email, otp }),
      });
      const data = await res.json();
      if (data.success) {
        setStep("verified");
        setMsg({ text: "Email verified!", ok: true });
        onVerified(true);
      } else {
        setMsg({ text: data.message || "Invalid OTP.", ok: false });
        const lower = (data.message ?? "").toLowerCase();
        if (lower.includes("expired") || lower.includes("new otp")) {
          setStep("idle");
          setOtp("");
        }
      }
    } catch {
      setMsg({ text: "Network error. Please try again.", ok: false });
    } finally {
      setVerifying(false);
    }
  };

  return (
    <div className="space-y-2">
      <label
        htmlFor="email-input"
        className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1"
      >
        <HiOutlineMail className="text-orange-500" />
        Email Address *
      </label>

      {/* ── Email row ── */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <input
            id="email-input"
            required
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => handleEmailEdit(e.target.value)}
            disabled={disabled || step === "verified"}
            className={[
              "w-full px-4 py-3 text-sm rounded-xl border outline-none transition-all",
              step === "verified"
                ? "bg-emerald-50 border-emerald-400 text-emerald-800 font-semibold pr-10"
                : "bg-slate-50 border-slate-200 text-slate-900 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/15",
              (disabled || step === "verified") && "cursor-not-allowed opacity-80",
            ]
              .filter(Boolean)
              .join(" ")}
          />
          {step === "verified" && (
            <HiOutlineShieldCheck className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500 text-lg" />
          )}
        </div>

        {/* Send / Resend */}
        {step !== "verified" && (
          <button
            type="button"
            onClick={sendOTP}
            disabled={disabled || sending || cooldown > 0 || !isValidEmail}
            className={[
              "shrink-0 min-w-22 px-4 py-3 rounded-xl text-[10px] font-extrabold uppercase tracking-widest transition-all",
              cooldown > 0 || !isValidEmail
                ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                : "bg-orange-500 text-white hover:bg-orange-600 shadow-md shadow-orange-500/20 active:scale-[0.97]",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {sending ? (
              <HiOutlineRefresh className="animate-spin text-sm mx-auto" />
            ) : cooldown > 0 ? (
              `${cooldown}s`
            ) : step === "sent" ? (
              "Resend"
            ) : (
              "Send OTP"
            )}
          </button>
        )}

        {/* Edit (after verified) */}
        {step === "verified" && (
          <button
            type="button"
            onClick={resetToIdle}
            className="shrink-0 px-5 py-3 rounded-xl text-[10px] font-extrabold uppercase tracking-widest bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
          >
            Edit
          </button>
        )}
      </div>

      {/* ── OTP entry panel ── */}
      {step === "sent" && (
        <div className="rounded-xl border border-orange-200 bg-orange-50/60 p-4 space-y-3">
          <p className="text-xs text-orange-800 font-semibold leading-snug">
            We sent a 6-digit code to{" "}
            <span className="font-black underline underline-offset-2">{email}</span>.
            Check your inbox.
          </p>

          <OTPInput value={otp} onChange={setOtp} disabled={verifying} />

          <button
            type="button"
            onClick={verifyOTP}
            disabled={verifying || !otpComplete}
            className="w-full bg-slate-900 text-white text-[11px] font-black uppercase tracking-widest py-3 rounded-xl hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.99]"
          >
            {verifying ? "Verifying…" : "Verify Code →"}
          </button>
        </div>
      )}

      {/* ── Status message ── */}
      {msg && (
        <p
          role="status"
          aria-live="polite"
          className={`text-[11px] font-bold flex items-center gap-1 ${
            msg.ok ? "text-emerald-600" : "text-red-500"
          }`}
        >
          {msg.ok ? "✓" : "✕"} {msg.text}
        </p>
      )}
    </div>
  );
}