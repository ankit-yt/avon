"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  User,
  Phone,
  Building2,
  MapPin,
  CheckCircle,
  ShieldCheck,
  Truck,
  ArrowRight,
  RotateCcw,
} from "lucide-react";
import joinImage from '@/assets/images/Home/Join-Avon.webp'
import { toast } from "sonner";
import Footer from "@/components/sections/Footer";
// ── Constants ─────────────────────────────────────────────────────────────────

const WEB3FORMS_KEY = "c545abdc-5cd5-4517-b3b2-3055b7f57559"; // same key as enquiry

const EMPTY_FORM = {
  fullName: "",
  phone: "",
  companyName: "",
  companyAddress: "",
};

// ── Field wrapper ─────────────────────────────────────────────────────────────

function Field({ label, icon: Icon, children, className = "" }) {
  return (
    <div className={`space-y-1.5 ${className}`}>
      <label className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-500">
        {Icon && <Icon size={11} className="text-orange-500 shrink-0" />}
        {label}
      </label>
      {children}
    </div>
  );
}

// ── Input shared styles ───────────────────────────────────────────────────────

const inputCls =
  "w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3 outline-none focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/15 transition-all disabled:opacity-60 placeholder:text-slate-400";

// ── Form ──────────────────────────────────────────────────────────────────────

function PartnerForm() {
  const [formData, setFormData] = useState({ ...EMPTY_FORM });
  const [formStatus, setFormStatus] = useState("idle"); // idle | submitting | success | error

  const patch = (fields) => setFormData((p) => ({ ...p, ...fields }));
  const reset = () => {
    setFormData({ ...EMPTY_FORM });
    setFormStatus("idle");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("submitting");

    try {
      const res = await fetch("/api/join-team", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

     if (result.success) {

  toast.success("Application submitted successfully!", {
    description: "Our team will contact you within 60 seconds.",
  });

  setFormStatus("success");
  reset();

  setTimeout(() => setFormStatus("idle"), 6000);

} else {

  toast.error("Failed to submit application", {
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
          <Truck size={18} />
        </span>
        <div>
          <h3 className="text-lg font-black text-slate-900 tracking-tight leading-none">
            Partner With Us
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
          <Field label="Full Name *" icon={User}>
            <input
              required
              type="text"
              autoComplete="name"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={(e) => patch({ fullName: e.target.value })}
              disabled={isSubmitting}
              className={inputCls}
            />
          </Field>

          {/* Phone */}
          <Field label="Phone *" icon={Phone}>
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
                onChange={(e) =>
                  patch({ phone: e.target.value.replace(/\D/g, "") })
                }
                disabled={isSubmitting}
                className={`${inputCls} pl-11`}
              />
            </div>
          </Field>

          {/* Company Name — full width */}
          <Field label="Company Name *" icon={Building2} className="sm:col-span-2">
            <input
              required
              type="text"
              placeholder="Your Packers & Movers company name"
              value={formData.companyName}
              onChange={(e) => patch({ companyName: e.target.value })}
              disabled={isSubmitting}
              className={inputCls}
            />
          </Field>

          {/* Company Address — full width */}
          <Field label="Company Address *" icon={MapPin} className="sm:col-span-2">
            <textarea
              required
              rows={3}
              placeholder="Full address with city, state & PIN code…"
              value={formData.companyAddress}
              onChange={(e) => patch({ companyAddress: e.target.value })}
              disabled={isSubmitting}
              className={`${inputCls} resize-none`}
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
                Submit Application
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
            Application received! Our team will reach out within 60 seconds.
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

// ── Benefits sidebar ─────────────────────────────────────────────────────────

const BENEFITS = [
  { icon: Truck,        text: "Pan-India network access" },
  { icon: ShieldCheck,  text: "Verified & trusted partners" },
  { icon: Users,        text: "Dedicated partner support team" },
  { icon: Building2,    text: "Grow your business with us" },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function JoinOurTeamPage() {
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
              <li className="text-orange-400 font-semibold">Join Our Team</li>
            </ol>
          </nav>

          <div className="flex items-start gap-5">

            {/* Icon */}
            <span aria-hidden="true" className="flex-shrink-0 mt-1">
              <Users size={55} className="text-orange-500" />
            </span>

            {/* Content */}
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500 mb-3 flex items-center gap-2">
                <span className="w-8 h-px bg-orange-500 inline-block" />
                Partner Network
                <span className="w-8 h-px bg-orange-500 inline-block" />
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tighter leading-tight">
                JOIN OUR{" "}
                <span className="text-orange-400">TEAM</span>
              </h1>

              <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
                Are you a Packers &amp; Movers company? Partner with us to expand
                your reach across India. Fill in the form and our team will
                connect with you shortly.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-14 py-12 md:py-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

          {/* LEFT — Image + benefits */}
          <div className="flex flex-col gap-6">

            {/* Image card */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-[0_10px_40px_rgba(15,23,42,0.06)] min-h-70 sm:min-h-[340px] flex-1">
              <Image
                src={joinImage} 
                alt="Packers and movers team loading a truck"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay badge */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="inline-flex items-center gap-2 bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-2xl px-4 py-2.5">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse shrink-0" />
                  <span className="text-xs font-bold text-white">
                    Now accepting new partners across India
                  </span>
                </div>
              </div>
            </div>

         
          </div>

          <PartnerForm />
          
        </div>
      </main>
      <Footer/>
    </div>
  );
}