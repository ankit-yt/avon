"use client";

import { useState } from "react";
import Link from "next/link";
import {
  PackageCheck,
  ShieldCheck,
  Clock,
  Wallet,
  Truck,
  ChevronDown,
  HelpCircle,
} from "lucide-react";
import Footer from "@/components/sections/Footer";


const HIGHLIGHTS = [
  { icon: Clock, label: "Fast Delivery" },
  { icon: ShieldCheck, label: "Secure Handling" },
  { icon: Wallet, label: "Affordable Rates" },
  { icon: Truck, label: "Door-to-Door" },
];

const FAQS = [
  {
    id: 1,
    question: "Does Avon Express offer a tracking facility?",
    answer: "Yes",
  },
];

// ── Single FAQ Row ────────────────────────────────────────────────────────────

function FaqRow({ faq, isOpen, onToggle }) {
  return (
    <div
      className={`rounded-2xl overflow-hidden transition-all duration-200 border ${
        isOpen
          ? "border-orange-400 shadow-lg shadow-orange-500/10"
          : "border-slate-200 hover:border-orange-200"
      }`}
    >
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-200 ${
          isOpen ? "bg-slate-900" : "bg-white hover:bg-slate-50"
        }`}
      >
        <div className="flex items-center gap-3.5 min-w-0">
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 ${
              isOpen ? "bg-orange-500" : "bg-orange-50 border border-orange-100"
            }`}
          >
            <HelpCircle size={15} className={isOpen ? "text-white" : "text-orange-500"} />
          </div>
          <p
            className={`text-sm font-black tracking-tight transition-colors duration-200 ${
              isOpen ? "text-white" : "text-slate-900"
            }`}
          >
            {faq.question}
          </p>
        </div>

        <ChevronDown
          size={16}
          className={`shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-orange-400" : "text-slate-400"
          }`}
        />
      </button>

      <div
        className={`bg-white overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 opacity-100 border-t border-slate-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 py-4">
          <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function CourierServicePage() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

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
              <li className="text-orange-400 font-semibold">Courier Service</li>
            </ol>
          </nav>

          <div className="flex items-start gap-5">
            <span aria-hidden="true" className="flex-shrink-0 mt-1">
              <PackageCheck size={55} className="text-orange-500" />
            </span>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500 mb-3 flex items-center gap-2">
                <span className="w-8 h-px bg-orange-500 inline-block" />
                Ludhiana Courier Service
                <span className="w-8 h-px bg-orange-500 inline-block" />
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tighter leading-tight">
                Reliable Courier Service in{" "}
                <span className="text-orange-400">Ludhiana</span>
              </h1>
              <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
                Fast, Secure, Affordable, and Door-to-Door.
              </p>
            </div>
          </div>

          {/* Highlight badges */}
          <div className="flex flex-wrap gap-2.5 mt-8">
            {HIGHLIGHTS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2"
              >
                <Icon size={14} className="text-orange-400" />
                <span className="text-xs font-bold text-white">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-14 py-12 md:py-16">
        {/* Intro copy */}
        <section className="mb-14">
          <h2 className="text-xl font-black text-slate-900 tracking-tight mb-4">
            Ludhiana Courier Service
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Are you looking for a courier service in Ludhiana? We provide fast,
            secure, and reliable courier services for documents, parcels, and
            large shipments. We offer safe, convenient, and cost-effective
            courier solutions for individuals, businesses, and organizations.
            We understand that every parcel is important; our service focuses
            on security, timely delivery, proper packaging, and reliable
            transportation. Whether you need to send a parcel from Ludhiana to
            another city in India, our team ensures a smooth and hassle-free
            process. Our Ludhiana courier service is ideal for businesses and
            individuals who need to quickly send documents, parcels, samples,
            and packages from Ludhiana to other cities. We offer pickup
            services across various areas of Ludhiana, available 24/7, seven
            days a week.
          </p>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-xl font-black text-slate-900 tracking-tight mb-1">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-slate-400 font-semibold mb-6">
            Click a question to see the answer
          </p>

          <div className="flex flex-col gap-3">
            {FAQS.map((faq) => (
              <FaqRow
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => toggle(faq.id)}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
