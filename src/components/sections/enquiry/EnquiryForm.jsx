"use client";

// ─── EnquiryForm.jsx — CLIENT COMPONENT ──────────────────────────────────────
// All interactivity lives here. Enquiry.jsx (server) renders the static shell.

import { useState } from "react";
import {
  HiOutlineUser,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineCheckCircle,
  HiOutlineShieldCheck,
  HiOutlineTruck,
} from "react-icons/hi";
import { toast } from "sonner";
import EmailVerification from "./EmailVerification";
import MovingFromField from "./MovingFromField";

// ── Constants ────────────────────────────────────────────────────────────────

const EMPTY_FORM = {
  name:       "",
  phone:      "",
  email:      "",
  movingFrom: "",
  movingTo:   "",
  message:    "",
};

// ── Helper: field wrapper ────────────────────────────────────────────────────

function Field({ label, icon: Icon, children, className = "" }) {
  return (
    <div className={`space-y-1.5 ${className}`}>
      <label className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">
        {Icon && <Icon className="text-orange-500 shrink-0" />}
        {label}
      </label>
      {children}
    </div>
  );
}

// ── Main component ───────────────────────────────────────────────────────────

export default function EnquiryForm() {
  const [formData,      setFormData]      = useState({ ...EMPTY_FORM });
  const [emailVerified, setEmailVerified] = useState(false);
  const [formStatus,    setFormStatus]    = useState("idle"); // idle | submitting | success | error
  const [resetKey,      setResetKey]      = useState(0); // increment to force EmailVerification remount

  const patch = (fields) => setFormData((p) => ({ ...p, ...fields }));

  const reset = () => {
    setFormData({ ...EMPTY_FORM });
    setEmailVerified(false);
    setFormStatus("idle");
    setResetKey((k) => k + 1); // remounts EmailVerification, clearing its internal state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailVerified) return;
    setFormStatus("submitting");

    try {
      const res = await fetch("/api/enquiry", {
        method:  "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body:    JSON.stringify(formData),
      });
      const result = await res.json();

      if (result.success) {
        toast.success("Enquiry submitted!", {
          description: "Our relocation expert will contact you shortly.",
        });
        setFormStatus("success");
        setFormData({ ...EMPTY_FORM });
        // After 4s, reset everything including the email OTP UI
        setTimeout(() => {
          setFormStatus("idle");
          setEmailVerified(false);
          setResetKey((k) => k + 1);
        }, 4000);
      } else {
        toast.error("Submission failed", {
          description: "Please try again.",
        });
        setFormStatus("error");
      }
    } catch {
      toast.error("Something went wrong", {
        description: "Please check your connection and try again.",
      });
      setFormStatus("error");
    }
  };

  const isSubmitting = formStatus === "submitting";

  return (
    <div className="bg-white rounded-[28px] border border-slate-200/80 shadow-xl shadow-slate-200/50 p-7 md:p-8 h-full flex flex-col">

      {/* ── Card header ── */}
      <div className="flex items-center gap-3 mb-6">
        <span className="w-9 h-9 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center">
          <HiOutlineTruck className="text-lg" />
        </span>
        <div>
          <h3 className="text-lg font-black text-slate-900 tracking-tight leading-none">
            Request A Free Quotation
          </h3>
          <p className="text-[11px] text-slate-400 font-medium mt-0.5">
            We respond within 60 Seconds
          </p>
        </div>
      </div>

      {/* ── Contact form ── */}
      <form onSubmit={handleSubmit} noValidate className="flex flex-col flex-1 gap-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {/* Name */}
          <Field label="Full Name *" icon={HiOutlineUser}>
            <input
              required
              type="text"
              autoComplete="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => patch({ name: e.target.value })}
              disabled={isSubmitting}
              className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3 outline-none focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/15 transition-all disabled:opacity-60"
            />
          </Field>

          {/* Phone */}
          <Field label="Phone *" icon={HiOutlinePhone}>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 pointer-events-none select-none">
                +91
              </span>
              <input
                required
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                maxLength={10}
                placeholder="98765 43210"
                value={formData.phone}
                onChange={(e) => patch({ phone: e.target.value.replace(/\D/g, "") })}
                disabled={isSubmitting}
                className="w-full pl-11 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 text-slate-900 rounded-xl outline-none focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/15 transition-all disabled:opacity-60"
              />
            </div>
          </Field>

          {/* Email OTP — full width, key forces remount on reset */}
          <div className="sm:col-span-2">
            <EmailVerification
              key={resetKey}
              email={formData.email}
              onEmailChange={(v) => patch({ email: v })}
              onVerified={setEmailVerified}
              disabled={isSubmitting}
            />
          </div>

          {/* Moving From */}
          <MovingFromField
            value={formData.movingFrom}
            onChange={(v) => patch({ movingFrom: v })}
            disabled={isSubmitting}
          />

          {/* Moving To */}
          <Field label="Moving To *" icon={HiOutlineLocationMarker}>
            <input
              required
              type="text"
              placeholder="Destination city"
              value={formData.movingTo}
              onChange={(e) => patch({ movingTo: e.target.value })}
              disabled={isSubmitting}
              className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3 outline-none focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/15 transition-all disabled:opacity-60"
            />
          </Field>

          {/* Message */}
          <div className="sm:col-span-2 space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
              Message / Details
            </label>
            <textarea
              rows={2}
              placeholder="Items to move, preferred dates, special requirements…"
              value={formData.message}
              onChange={(e) => patch({ message: e.target.value })}
              disabled={isSubmitting}
              className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3 outline-none focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/15 transition-all resize-none disabled:opacity-60"
            />
          </div>
        </div>

        {/* ── Email hint ── */}
        {!emailVerified && (
          <p
            role="note"
            className="mt-3 text-[11px] text-orange-600 font-bold flex items-center gap-1.5"
          >
            <HiOutlineShieldCheck className="shrink-0" />
            Verify your email above to enable submission.
          </p>
        )}

        {/* ── Submit row ── */}
        <div className="mt-4 flex gap-3">
          <button
            type="submit"
            disabled={isSubmitting || !emailVerified}
            className="flex-1 bg-slate-900 text-white text-[11px] font-black uppercase tracking-[0.18em] py-3.5 rounded-xl hover:bg-orange-600 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.99]"
          >
            {isSubmitting ? "Sending…" : "Submit Inquiry →"}
          </button>
          <button
            type="button"
            onClick={reset}
            className="px-6 py-3.5 bg-slate-100 text-slate-500 hover:text-slate-900 text-[11px] font-black uppercase tracking-widest rounded-xl transition-colors active:scale-[0.99]"
          >
            Clear
          </button>
        </div>

        {/* ── Status banners ── */}
        {formStatus === "success" && (
          <div
            role="status"
            className="mt-4 flex items-center gap-3 p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-700 text-xs font-bold"
          >
            <HiOutlineCheckCircle className="text-lg shrink-0" />
            Request received! Our team will call you within 60 seconds.
          </div>
        )}
        {formStatus === "error" && (
          <div
            role="alert"
            className="mt-4 p-3.5 bg-red-50 border border-red-200 rounded-xl text-red-600 text-xs font-bold"
          >
            Something went wrong. Please try again or call{" "}
            <a href="tel:9814556375" className="underline underline-offset-2">
              98145-56375
            </a>
            .
          </div>
        )}
      </form>
    </div>
  );
}