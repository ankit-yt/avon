"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Truck, Phone, MapPin, ArrowRight, Satellite } from "lucide-react";
import Footer from "@/components/sections/Footer";

// ── Empty / Coming Soon State ─────────────────────────────────────────────────

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center px-4">
      {/* Animated illustration */}
      <div className="relative mb-10">
        {/* Outer ring */}
        <div className="absolute inset-0 w-32 h-32 rounded-full border-2 border-dashed border-orange-200 animate-[spin_12s_linear_infinite]" />
        {/* Inner ring */}
        <div className="absolute inset-4 w-24 h-24 rounded-full border border-slate-100 animate-[spin_8s_linear_infinite_reverse]" />
        {/* Core */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          <div className="w-20 h-20 bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200/80 rounded-[28px] flex items-center justify-center shadow-[0_8px_32px_rgba(249,115,22,0.12)]">
            <Satellite size={32} className="text-orange-500" strokeWidth={1.5} />
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-3">
        Live Tracking on the Way
      </h2>
      <p className="text-sm text-slate-500 leading-relaxed max-w-xs font-medium">
        We&apos;re building real-time GPS tracking for every shipment. It&apos;ll be ready soon.
      </p>

      {/* Divider */}
      <div className="flex items-center gap-3 my-8 w-full max-w-xs">
        <div className="flex-1 h-px bg-slate-100" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">
          meanwhile
        </span>
        <div className="flex-1 h-px bg-slate-100" />
      </div>

      {/* Contact card */}
      <div className="w-full max-w-sm bg-white border border-slate-200 rounded-2xl p-5 shadow-[0_2px_20px_rgba(15,23,42,0.06)] text-left">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">
          Get a live update
        </p>
        <a
          href="tel:+919814556375"
          className="flex items-center justify-between group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
              <Phone size={15} className="text-orange-500" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Call us directly</p>
              <p className="text-sm font-black text-slate-900 tracking-tight">
                +91 98145-56375
              </p>
            </div>
          </div>
          <ArrowRight
            size={16}
            className="text-slate-300 group-hover:text-orange-500 group-hover:translate-x-1 transition-all"
          />
        </a>
      </div>

      {/* Subtle note */}
      <p className="text-[11px] text-slate-400 mt-6 max-w-xs leading-relaxed">
        Our team can confirm pickup status, current location, and estimated delivery time.
      </p>
    </div>
  );
}

// ── No Results State (searched but nothing found) ─────────────────────────────

function NotFoundState({ trackingId }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center px-4">
      <div className="w-20 h-20 bg-slate-50 border border-slate-200 rounded-[24px] flex items-center justify-center mb-6">
        <Search size={28} className="text-slate-300" strokeWidth={1.5} />
      </div>
      <h2 className="text-xl font-black text-slate-900 tracking-tight mb-2">
        No results for &ldquo;{trackingId}&rdquo;
      </h2>
      <p className="text-sm text-slate-500 leading-relaxed max-w-xs font-medium mb-8">
        We couldn&apos;t find a shipment with that ID. Double-check the number on your booking confirmation.
      </p>

      <div className="w-full max-w-sm bg-white border border-slate-200 rounded-2xl p-5 shadow-[0_2px_20px_rgba(15,23,42,0.06)] text-left">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">
          Need help?
        </p>
        <a
          href="tel:+919814556375"
          className="flex items-center justify-between group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
              <Phone size={15} className="text-orange-500" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Speak to our team</p>
              <p className="text-sm font-black text-slate-900 tracking-tight">
                +91 98145-56375
              </p>
            </div>
          </div>
          <ArrowRight
            size={16}
            className="text-slate-300 group-hover:text-orange-500 group-hover:translate-x-1 transition-all"
          />
        </a>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function TrackingPage() {
  const [input, setInput] = useState("");
  const [searched, setSearched] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim()) setSearched(input.trim());
  };

  const handleClear = () => {
    setInput("");
    setSearched("");
  };

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
              <li aria-hidden="true" className="text-slate-600">/</li>
              <li className="text-orange-400 font-semibold">Track Shipment</li>
            </ol>
          </nav>

          <div className="flex items-start gap-5">
            <span aria-hidden="true" className="flex-shrink-0 mt-1">
              <Truck size={55} className="text-orange-500" strokeWidth={1.5} />
            </span>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500 mb-3 flex items-center gap-2">
                <span className="w-8 h-px bg-orange-500 inline-block" />
                Shipment Tracking
                <span className="w-8 h-px bg-orange-500 inline-block" />
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tighter leading-tight">
                Track your{" "}
                <span className="text-orange-400">Shipment</span>
              </h1>
              <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
                Enter your booking or tracking ID to get the latest status of your goods.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-14 py-12 md:py-16">

        {/* Search bar */}
        <form onSubmit={handleSearch} className="flex gap-3 mb-10">
          <div className="flex-1 relative">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
            <input
              type="text"
              placeholder="Enter your Tracking / Booking ID…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 text-slate-900 text-sm rounded-2xl outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/15 transition-all shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="flex-shrink-0 flex items-center gap-2 bg-slate-900 text-white text-[11px] font-black uppercase tracking-[0.18em] px-6 py-3.5 rounded-2xl hover:bg-orange-600 transition-colors shadow-lg active:scale-[0.99]"
          >
            <Search size={14} />
            Track
          </button>
        </form>

        {/* Result area */}
        {!searched ? (
          <EmptyState />
        ) : (
          <>
            <NotFoundState trackingId={searched} />
            <div className="flex justify-center mt-2">
              <button
                onClick={handleClear}
                className="text-xs text-slate-400 hover:text-orange-500 transition-colors font-semibold underline underline-offset-2"
              >
                Clear search
              </button>
            </div>
          </>
        )}
      </main>
      <Footer/>
    </div>
  );
}