"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ClipboardList,
  User,
  Phone,
  Mail,
  CalendarDays,
  MapPin,
  ArrowRight,
  RotateCcw,
  CheckCircle,
  ShieldCheck,
  Clock,
  Home,
} from "lucide-react";
import { toast } from "sonner";
import Footer from "@/components/sections/Footer";
import surveryImage from "@/assets/images/Home/Survey.webp"
import Image from "next/image";
// ── Constants ─────────────────────────────────────────────────────────────────

const EMPTY_FORM = {
  fullName: "",
  phone: "",
  email: "",
  surveyDate: "",
  address: "",
};

// ── Validation ────────────────────────────────────────────────────────────────

function validate(formData) {
  const errors = {};

  if (!formData.fullName.trim()) {
    errors.fullName = "Full name is required.";
  }

  const phoneClean = formData.phone.replace(/\D/g, "");
  if (!phoneClean) {
    errors.phone = "Phone number is required.";
  } else if (phoneClean.length !== 10) {
    errors.phone = "Enter a valid 10-digit phone number.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!emailRegex.test(formData.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!formData.surveyDate) {
    errors.surveyDate = "Please select a survey date.";
  } else {
    const selected = new Date(formData.surveyDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selected < today) {
      errors.surveyDate = "Survey date cannot be in the past.";
    }
  }

  if (!formData.address.trim()) {
    errors.address = "Address is required.";
  }

  return errors;
}

// ── Field wrapper ─────────────────────────────────────────────────────────────

function Field({ label, icon: Icon, error, children, className = "" }) {
  return (
    <div className={`space-y-1.5 ${className}`}>
      <label className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-500">
        {Icon && <Icon size={11} className="text-orange-500 shrink-0" />}
        {label}
      </label>
      {children}
      {error && (
        <p className="text-[11px] font-semibold text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
}

// ── Input class ───────────────────────────────────────────────────────────────

const inputCls = (hasError) =>
  `w-full bg-slate-50 border text-slate-900 text-sm rounded-xl px-4 py-3 outline-none focus:bg-white focus:ring-2 transition-all disabled:opacity-60 placeholder:text-slate-400 ${
    hasError
      ? "border-red-400 focus:border-red-500 focus:ring-red-500/15"
      : "border-slate-200 focus:border-orange-500 focus:ring-orange-500/15"
  }`;

// ── Benefits ──────────────────────────────────────────────────────────────────

const BENEFITS = [
  { icon: Home,       text: "On-site survey at your doorstep" },
  { icon: ClipboardList, text: "Accurate moving estimate provided" },
  { icon: Clock,      text: "Flexible scheduling, 7 days a week" },
  { icon: ShieldCheck, text: "100% free, no obligation survey" },
];

// ── Today's min date for date input ──────────────────────────────────────────

function getTodayString() {
  const d = new Date();
  return d.toISOString().split("T")[0];
}

// ── Survey Form ───────────────────────────────────────────────────────────────

function SurveyForm() {
  const [formData, setFormData] = useState({ ...EMPTY_FORM });
  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState("idle"); // idle | submitting | success | error

  const patch = (fields) => {
    setFormData((p) => ({ ...p, ...fields }));
    // Clear related errors on change
    const keys = Object.keys(fields);
    setErrors((prev) => {
      const next = { ...prev };
      keys.forEach((k) => delete next[k]);
      return next;
    });
  };

  const reset = () => {
    setFormData({ ...EMPTY_FORM });
    setErrors({});
    setFormStatus("idle");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFormStatus("submitting");

    try {
      const res = await fetch("/api/physical-survey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Survey request submitted!", {
          description: "Our team will contact you within 60 seconds.",
        });
        setFormStatus("success");
        reset();
        setTimeout(() => setFormStatus("idle"), 6000);
      } else {
        toast.error("Failed to submit request", {
          description: "Please try again in a moment.",
        });
        setFormStatus("error");
      }
    } catch {
      toast.error("Something went wrong", {
        description: "Please try again later.",
      });
      setFormStatus("error");
    }
  };

  const isSubmitting = formStatus === "submitting";

  return (
    <div className="bg-white rounded-[28px] border border-slate-200/80 shadow-xl shadow-slate-200/50 p-7 md:p-8 flex flex-col h-full">
      {/* Card header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="w-9 h-9 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center shrink-0">
          <ClipboardList size={18} />
        </span>
        <div>
          <h3 className="text-lg font-black text-slate-900 tracking-tight leading-none">
            Book a Physical Survey
          </h3>
          <p className="text-[11px] text-slate-400 font-medium mt-0.5">
            We respond within 60 seconds
          </p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} noValidate className="flex flex-col flex-1 gap-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {/* Full Name */}
          <Field label="Full Name *" icon={User} error={errors.fullName}>
            <input
              type="text"
              autoComplete="name"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={(e) => patch({ fullName: e.target.value })}
              disabled={isSubmitting}
              className={inputCls(!!errors.fullName)}
            />
          </Field>

          {/* Phone */}
          <Field label="Phone *" icon={Phone} error={errors.phone}>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 pointer-events-none select-none">
                +91
              </span>
              <input
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                maxLength={10}
                placeholder="98765 43210"
                value={formData.phone}
                onChange={(e) =>
                  patch({ phone: e.target.value.replace(/\D/g, "") })
                }
                disabled={isSubmitting}
                className={`${inputCls(!!errors.phone)} pl-11`}
              />
            </div>
          </Field>

          {/* Email — full width */}
          <Field label="Email Address *" icon={Mail} error={errors.email} className="sm:col-span-2">
            <input
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => patch({ email: e.target.value })}
              disabled={isSubmitting}
              className={inputCls(!!errors.email)}
            />
          </Field>

          {/* Survey Date */}
          <Field label="Preferred Survey Date *" icon={CalendarDays} error={errors.surveyDate} className="sm:col-span-2">
            <input
              type="date"
              min={getTodayString()}
              value={formData.surveyDate}
              onChange={(e) => patch({ surveyDate: e.target.value })}
              disabled={isSubmitting}
              className={inputCls(!!errors.surveyDate)}
            />
          </Field>

          {/* Address — full width */}
          <Field label="Survey Address *" icon={MapPin} error={errors.address} className="sm:col-span-2">
            <textarea
              rows={3}
              placeholder="Full address with city, state & PIN code…"
              value={formData.address}
              onChange={(e) => patch({ address: e.target.value })}
              disabled={isSubmitting}
              className={`${inputCls(!!errors.address)} resize-none`}
            />
          </Field>
        </div>

        {/* Submit row */}
        <div className="mt-5 flex gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 flex items-center justify-center gap-2 bg-slate-900 text-white text-[11px] font-black uppercase tracking-[0.18em] py-3.5 rounded-xl hover:bg-orange-600 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.99]"
          >
            {isSubmitting ? (
              "Sending…"
            ) : (
              <>
                Book Survey
                <ArrowRight size={13} />
              </>
            )}
          </button>

          <button
            type="button"
            onClick={reset}
            className="px-5 py-3.5 bg-slate-100 text-slate-500 hover:text-slate-900 text-[11px] font-black uppercase tracking-widest rounded-xl transition-colors active:scale-[0.99] flex items-center gap-1.5"
          >
            <RotateCcw size={12} />
            Clear
          </button>
        </div>

        {/* Status banners */}
        {formStatus === "success" && (
          <div
            role="status"
            className="mt-4 flex items-center gap-3 p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-700 text-xs font-bold"
          >
            <CheckCircle size={18} className="shrink-0" />
            Survey request received! Our team will reach out within 60 seconds.
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

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PhysicalSurveyPage() {
  return (
    <div className="min-h-screen bg-[#FCFCFB] font-sans">

      {/* Top accent */}
      <div className="h-1 w-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600" />

      {/* Hero header */}
      <header className="relative bg-slate-900 overflow-hidden">

        {/* Warm blobs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 -right-20 w-96 h-96 rounded-full bg-orange-500/20 blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 w-64 h-64 rounded-full bg-orange-600/10 blur-[80px]"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 lg:px-14 py-14 md:py-20">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-slate-400 flex-wrap">
              <li>
                <Link href="/" className="hover:text-orange-400 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-600">/</li>
              <li className="text-orange-400 font-semibold">Physical Survey</li>
            </ol>
          </nav>

          <div className="flex items-start gap-5">

            {/* Icon */}
            <span aria-hidden="true" className="flex-shrink-0 mt-1">
              <ClipboardList size={55} className="text-orange-500" />
            </span>

            {/* Content */}
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500 mb-3 flex items-center gap-2">
                <span className="w-8 h-px bg-orange-500 inline-block" />
                Physical Survey
                <span className="w-8 h-px bg-orange-500 inline-block" />
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tighter leading-tight">
                Physical{" "}
                <span className="text-orange-400">Survey</span>
              </h1>

              <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
               Get a Physical Survey by our expert team. We assess your requirements and provide an accurate, no-obligation estimate for your move.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
     {/* Main */}
 <main className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14 py-12 md:py-16">

   {/* Changed from lg:grid-cols-2 to lg:grid-cols-[3fr_2fr] */}
   <div className="grid grid-cols-1 lg:grid-cols-[6fr_3fr] gap-6 items-start">

     {/* LEFT — Benefits */}
     <div className="flex flex-col gap-6 w-full">
       <div className="relative w-full rounded-3xl overflow-hidden border border-slate-200 shadow-[0_10px_40px_rgba(15,23,42,0.06)] h-[400px] md:h-[550px] lg:h-full min-h-[700px]">
         <Image
           src={surveryImage} 
           alt="Packers and movers team loading a truck"
           fill
           className="object-cover"
           priority
         />
       </div>
     </div>

     {/* RIGHT — Form */}
     <div className="w-full">
       <SurveyForm />
     </div>
     
   </div>
 </main>

      <Footer />
    </div>
  );
}