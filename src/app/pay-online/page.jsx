"use client";

import { useState } from "react";

import {
  Smartphone,
  Landmark,
  WalletCards,
  Copy,
  Check,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import qr from '@/assets/images/Home/qr.jpeg'
import Footer from "@/components/sections/Footer";

import gpayLogo from "@/assets/images/Home/googlepay.webp";
import phonepeLogo from "@/assets/images/Home/phonepe.webp";
import paytmLogo from "@/assets/images/Home/paytm.webp";

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const el = document.createElement("textarea");
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <button
      onClick={handleCopy}
      className={`flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-extrabold px-3 py-2 rounded-xl border transition-all duration-200 ${
        copied
          ? "bg-green-500 border-green-500 text-white"
          : "bg-orange-500 border-orange-500 text-white hover:bg-orange-600 hover:border-orange-600"
      }`}
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

// ── Bank detail row ───────────────────────────────────────────────────────────
function BankRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 py-4 border-b border-slate-100 last:border-0">
      <div>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">
          {label}
        </p>

        <p className="text-sm sm:text-base font-extrabold text-slate-900">
          {value}
        </p>
      </div>

      <CopyButton text={value} />
    </div>
  );
}

// ── QR placeholder ────────────────────────────────────────────────────────────
function QRSection() {
  return (
    <div className="flex flex-col items-center justify-center h-full">

      {/* QR code */}
<div className="relative w-57 h-57 sm:w-68 sm:h-68 rounded-2xl overflow-hidden border-4 border-orange-500 shadow-xl shadow-orange-200 mb-5 hover:scale-[1.02] transition-transform duration-300 bg-white">

  <Image
    src={qr} // your local image path
    alt="UPI QR Code"
    fill
    className="object-cover"
    priority
  />
</div>

      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
        Scan &amp; Pay via UPI
      </p>

      {/* UPI apps */}
      {/* UPI apps */}
<div className="flex items-center gap-3 flex-wrap justify-center">

  {[
    {
      label: "Google Pay",
      logo: gpayLogo,
    },
    {
      label: "PhonePe",
      logo: phonepeLogo,
    },
    {
      label: "Paytm",
      logo: paytmLogo,
    },
  ].map(({ label, logo }) => (
    <div
      key={label}
      title={label}
      className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center p-2"
    >
      <Image
      width={100}
                  height={100}
        src={logo}
        alt={label}
        className="object-contain w-full h-full"
      />
    </div>
  ))}
</div>

      <div className="mt-4 flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

        <span className="text-xs font-bold text-green-700">
          UPI Accepted
        </span>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function PaymentPage() {
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
          <Link
            href="/"
            className="hover:text-orange-400 transition-colors"
          >
            Home
          </Link>
        </li>

        <li aria-hidden="true" className="text-slate-600">
          /
        </li>

        <li className="text-orange-400 font-semibold">
          Payment Details
        </li>
      </ol>
    </nav>

    <div className="flex items-start gap-5">

      {/* Icon */}
      <span
        aria-hidden="true"
        className="flex-shrink-0 mt-1 flex items-center justify-center"
      >
        <WalletCards size={55} className="text-orange-500" />
      </span>

      {/* Content */}
      <div>

        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500 mb-3 flex items-center gap-2">
          <span className="w-8 h-px bg-orange-500 inline-block" />

          Secure Payment

          <span className="w-8 h-px bg-orange-500 inline-block" />
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tighter leading-tight">
          PAYMENT{" "}
          <span className="text-orange-400">
            DETAILS
          </span>
        </h1>

        <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
          Pay securely via UPI scan or direct bank transfer.
          All transactions are verified and processed
          exclusively from our head office.
        </p>
      </div>
    </div>
  </div>
</header>

    

      {/* Main */}
      <main className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-14 py-12 md:py-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

          {/* LEFT — Scan & Pay */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-[0_10px_40px_rgba(15,23,42,0.04)] flex flex-col">

            <div className="flex items-center gap-3 mb-8">

              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-lg flex-shrink-0">
                <Smartphone size={18} className="text-orange-500" />
              </div>

              <div>
                <h2 className="text-lg font-extrabold text-slate-900 tracking-tight">
                  Scan &amp; Pay
                </h2>

                <p className="text-xs text-slate-400">
                  Use any UPI app to scan
                </p>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <QRSection />
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-6">

            {/* Bank payment */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-[0_10px_40px_rgba(15,23,42,0.04)] flex-1">

              <div className="flex items-center gap-3 mb-6">

                <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-lg flex-shrink-0">
                  <Landmark size={18} className="text-slate-900" />
                </div>

                <div>
                  <h2 className="text-lg font-extrabold text-slate-900 tracking-tight">
                    Bank Payment
                  </h2>

                  <p className="text-xs text-slate-400">
                    Direct bank transfer
                  </p>
                </div>
              </div>

              {/* Bank badge */}
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-xl px-4 py-2 mb-6">

                <span className="w-2 h-2 rounded-full bg-red-500" />

                <span className="text-red-600 font-extrabold text-sm tracking-tight">
                  Punjab National Bank
                </span>
              </div>

              <div className="divide-y divide-slate-100">

                <BankRow
                  label="Beneficiary Name"
                  value="PARMOD KUMAR SO MUKESH"
                />

                <BankRow
                  label="Account Number"
                  value="1219000100643959"
                />

                <BankRow
                  label="IFSC Code"
                  value="PUNB0121900"
                />

                <BankRow
                  label="Account Type"
                  value="Saving Account"
                />
              </div>
            </div>

          </div>
        </div>

      
      </main>
            <Footer/>
     
    </div>
  );
}
