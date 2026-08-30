"use client";

import Link from "next/link";
import {
  Phone,
  FileText,
  ClipboardCheck,
  Calculator,
  CheckCircle2,
  Wallet,
  CalendarDays,
  Truck,
  Star,
} from "lucide-react";
import Footer from "@/components/sections/Footer";

// ── Data ──────────────────────────────────────────────────────────────────────

const STEPS = [
  { id: 1, icon: Phone, title: "Contact us" },
  { id: 2, icon: FileText, title: "Share all the details." },
  { id: 3, icon: ClipboardCheck, title: "Conduct online or physical surveys." },
  { id: 4, icon: Calculator, title: "Get a moving estimate." },
  { id: 5, icon: CheckCircle2, title: "If the estimate seems right to you, confirm the booking." },
  { id: 6, icon: Wallet, title: "Pay the token money." },
  { id: 7, icon: CalendarDays, title: "Provide the date of the move." },
  { id: 8, icon: Truck, title: "Complete the shifting process." },
  { id: 9, icon: Star, title: "Provide feedback." },
];

// ── Single Step Row ───────────────────────────────────────────────────────────

function StepRow({ step, isLast }) {
  const Icon = step.icon;

  return (
    <div className="relative flex gap-5">
      {/* Connector line + icon column */}
      <div className="flex flex-col items-center shrink-0">
        <div className="w-11 h-11 rounded-2xl flex items-center justify-center border border-slate-200 bg-white">
          <Icon size={18} className="text-orange-500" />
        </div>
        {!isLast && (
          <div className="w-px flex-1 bg-gradient-to-b from-slate-200 to-slate-100 my-1" />
        )}
      </div>

      {/* Content column */}
      <div className={`flex-1 ${isLast ? "pb-0" : "pb-6"}`}>
        <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 hover:border-orange-200 transition-colors duration-200">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 shrink-0">
            Step {step.id}
          </span>
          <p className="text-sm font-black text-slate-900 tracking-tight">
            {step.title}
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function BookingProcessPage() {
  return (
    <div className="min-h-screen bg-[#FCFCFB] font-sans">
      {/* Top accent */}
      <div className="h-1 w-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600" />

      {/* Hero header */}
      <header className="relative bg-slate-900 overflow-hidden">
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
              <li aria-hidden="true" className="text-slate-600">
                /
              </li>
              <li className="text-orange-400 font-semibold">Booking Process</li>
            </ol>
          </nav>

          <div className="flex items-start gap-5">
            <span aria-hidden="true" className="flex-shrink-0 mt-1">
              <Truck size={55} className="text-orange-500" />
            </span>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500 mb-3 flex items-center gap-2">
                <span className="w-8 h-px bg-orange-500 inline-block" />
                Simple &amp; Transparent
                <span className="w-8 h-px bg-orange-500 inline-block" />
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tighter leading-tight">
                Our <span className="text-orange-400">Booking Process</span>
              </h1>
              <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
                From your first call to the final feedback — here's exactly how
                we take you through a smooth, hassle-free move.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-14 py-12 md:py-16">
        <div className="mb-8">
          <h2 className="text-xl font-black text-slate-900 tracking-tight">
            9 Steps To Your Move
          </h2>
        </div>

        <div className="flex flex-col">
          {STEPS.map((step, idx) => (
            <StepRow key={step.id} step={step} isLast={idx === STEPS.length - 1} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}