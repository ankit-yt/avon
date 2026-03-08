"use client";

import React, { useState, useMemo } from "react";
import {
  HiOutlineCalculator,
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineUser,
  HiOutlineCheckCircle,
  HiOutlineTruck,
} from "react-icons/hi";

// ─── Constants ────────────────────────────────────────────────────────────────

const PRICING_DATA = [
  { type: "1 BHK Home",          d50: "₹4,000–₹10,500",   d500: "₹10,500–₹15,500",  d1000: "₹15,500–₹24,500",  d1500: "₹24,500–₹29,500",  d2500: "₹29,500–₹35,500",  d3000: "₹35,500–₹45,500"  },
  { type: "2 BHK Home",          d50: "₹11,500–₹14,500",  d500: "₹14,500–₹24,500",  d1000: "₹24,500–₹30,500",  d1500: "₹30,500–₹40,500",  d2500: "₹40,500–₹46,500",  d3000: "₹46,500–₹65,500"  },
  { type: "3 BHK Home",          d50: "₹14,500–₹20,500",  d500: "₹20,500–₹29,500",  d1000: "₹29,500–₹38,500",  d1500: "₹38,500–₹51,500",  d2500: "₹51,500–₹65,500",  d3000: "₹65,500–₹85,500"  },
  { type: "4 BHK / Villa",       d50: "₹20,500–₹29,500",  d500: "₹29,500–₹35,500",  d1000: "₹35,500–₹55,500",  d1500: "₹55,500–₹65,500",  d2500: "₹65,500–₹85,500",  d3000: "₹85,500–₹95,500"  },
  { type: "5 BHK / Villa",       d50: "₹29,500–₹35,500",  d500: "₹35,500–₹55,500",  d1000: "₹55,500–₹70,500",  d1500: "₹70,500–₹85,500",  d2500: "₹85,500–₹95,500",  d3000: "₹95,500–₹99,500"  },
  { type: "Car Transportation",  d50: "₹5,000–₹9,000",    d500: "₹9,000–₹12,500",   d1000: "₹12,500–₹18,500",  d1500: "₹18,500–₹24,500",  d2500: "₹24,500–₹30,500",  d3000: "₹30,500–₹35,500"  },
  { type: "Bike Transportation", d50: "₹2,000–₹3,000",    d500: "₹3,000–₹7,000",    d1000: "₹7,000–₹10,000",   d1500: "₹10,000–₹12,000",  d2500: "₹12,000–₹18,500",  d3000: "₹18,500–₹20,500"  },
];

const DISTANCE_OPTIONS = [
  { value: "d50",   label: "Local Move (Up to 50 KM)"       },
  { value: "d500",  label: "Inter-City (Up to 500 KM)"      },
  { value: "d1000", label: "Inter-State (Up to 1,000 KM)"   },
  { value: "d1500", label: "Long Distance (Up to 1,500 KM)" },
  { value: "d2500", label: "Cross Country (Up to 2,500 KM)" },
  { value: "d3000", label: "Extreme Range (Up to 3,000 KM)" },
];

const WEB3FORMS_KEY = "c545abdc-5cd5-4517-b3b2-3055b7f57559";

const EMPTY_FORM = {
  name: "",
  phone: "",
  email: "",
  movingFrom: "Ludhiana, Punjab",
  movingTo: "",
  message: "",
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function Enquiry() {
  // Calculator
  const [shiftType, setShiftType] = useState("2 BHK Home");
  const [distance, setDistance] = useState("d500");

  // Derive estimate synchronously — no useEffect needed
  const estimate = useMemo(() => {
    const row = PRICING_DATA.find((r) => r.type === shiftType);
    return row ? row[distance] ?? "—" : "—";
  }, [shiftType, distance]);

  // Form
  const [formStatus, setFormStatus] = useState("idle"); // idle | submitting | success | error
  const [formData, setFormData] = useState({ ...EMPTY_FORM });

  const patch = (fields) => setFormData((prev) => ({ ...prev, ...fields }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("submitting");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Lead: Move from ${formData.movingFrom} to ${formData.movingTo}`,
          from_name: formData.name,
          ...formData,
          calculated_estimate: estimate,
          inquiry_type: shiftType,
        }),
      });

      const result = await res.json();

      if (result.success) {
        setFormStatus("success");
        setFormData({ ...EMPTY_FORM });
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  // ── Render ──────────────────────────────────────────────────────────────────

  return (
    <section className="py-10 bg-slate-50 border-t border-slate-100 overflow-hidden relative">

      {/* Decorative dot grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-14 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-[1px] bg-orange-600" />
            Start Your Move
            <span className="w-8 h-[1px] bg-orange-600" />
          </h2>
          <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight mb-4">
            CALCULATE & <span className="text-slate-300">CONNECT.</span>
          </h3>
          <p className="text-slate-500 font-medium leading-relaxed max-w-xl mx-auto text-sm">
            Get an instant baseline estimate for your relocation, or send us a direct
            inquiry to receive a finalized, zero-hidden-cost quotation.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* ── LEFT: Calculator ── */}
          <div className="lg:col-span-5 bg-slate-900 rounded-[32px] p-8 md:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-orange-600/20 transition-colors duration-700" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-orange-500 text-2xl backdrop-blur-md border border-white/10">
                  <HiOutlineCalculator />
                </div>
                <div>
                  <h4 className="text-white font-black text-xl tracking-tight">Cost Estimator</h4>
                  <p className="text-slate-400 text-xs font-medium tracking-wide">Ludhiana Base Tariffs</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Shifting type */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                    Select Shifting Type
                  </label>
                  <select
                    value={shiftType}
                    onChange={(e) => setShiftType(e.target.value)}
                    className="w-full bg-slate-800/50 border border-slate-700 text-white text-sm rounded-xl px-4 py-3.5 outline-none focus:border-orange-500 transition-colors appearance-none cursor-pointer"
                  >
                    {PRICING_DATA.map((row) => (
                      <option key={row.type} value={row.type}>{row.type}</option>
                    ))}
                  </select>
                </div>

                {/* Distance */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                    Select Distance
                  </label>
                  <select
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                    className="w-full bg-slate-800/50 border border-slate-700 text-white text-sm rounded-xl px-4 py-3.5 outline-none focus:border-orange-500 transition-colors appearance-none cursor-pointer"
                  >
                    {DISTANCE_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Estimate display */}
            <div className="relative z-10 mt-10 pt-8 border-t border-slate-800">
              <p className="text-[10px] font-bold text-orange-500 uppercase tracking-widest mb-1">
                Estimated Range
              </p>
              <div className="text-4xl font-black text-white tracking-tighter mb-4">
                {estimate}
              </div>
              <p className="text-[10px] text-slate-400 font-medium leading-relaxed">
                *Baseline estimate only. Final cost varies based on exact inventory, floor
                level, and equipment required. Submit the form to lock in a quote.
              </p>
            </div>
          </div>

          {/* ── RIGHT: Contact Form ── */}
          <div className="lg:col-span-7 bg-white rounded-[32px] p-8 md:p-10 border border-slate-200 shadow-xl shadow-slate-200/50">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center text-xl">
                <HiOutlineTruck />
              </div>
              <h4 className="text-2xl font-black text-slate-900 tracking-tight">Request Exact Quote</h4>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Name */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-1">
                    <HiOutlineUser className="text-orange-500" /> Full Name *
                  </label>
                  <input
                    required type="text" placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => patch({ name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3.5 outline-none focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-1">
                    <HiOutlinePhone className="text-orange-500" /> Phone Number *
                  </label>
                  <input
                    required type="tel" placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => patch({ phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3.5 outline-none focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-1">
                    <HiOutlineMail className="text-orange-500" /> Email Address *
                  </label>
                  <input
                    required type="email" placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => patch({ email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3.5 outline-none focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"
                  />
                </div>

                {/* Moving From */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-1">
                    <HiOutlineLocationMarker className="text-orange-500" /> Moving From *
                  </label>
                  <input
                    required type="text"
                    value={formData.movingFrom}
                    onChange={(e) => patch({ movingFrom: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 font-bold text-sm rounded-xl px-4 py-3.5 outline-none focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"
                  />
                </div>

                {/* Moving To */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-1">
                    <HiOutlineLocationMarker className="text-orange-500" /> Moving To *
                  </label>
                  <input
                    required type="text" placeholder="Destination City"
                    value={formData.movingTo}
                    onChange={(e) => patch({ movingTo: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3.5 outline-none focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">
                    Message / Inventory Details
                  </label>
                  <textarea
                    rows={3} placeholder="Tell us about the items you are moving..."
                    value={formData.message}
                    onChange={(e) => patch({ message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3.5 outline-none focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all resize-none"
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 flex items-center gap-4">
                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="flex-1 bg-slate-900 text-white text-[11px] font-black uppercase tracking-[0.2em] py-4 rounded-xl hover:bg-orange-600 transition-colors shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus === "submitting" ? "Sending…" : "Submit Inquiry"}
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...EMPTY_FORM })}
                  className="px-8 py-4 bg-slate-100 text-slate-500 hover:text-slate-900 text-[11px] font-black uppercase tracking-[0.2em] rounded-xl transition-colors"
                >
                  Clear
                </button>
              </div>

              {/* Status banners */}
              {formStatus === "success" && (
                <div className="mt-4 p-4 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl flex items-center gap-3 text-sm font-bold">
                  <HiOutlineCheckCircle className="text-xl shrink-0" />
                  Request sent! Our team will contact you shortly.
                </div>
              )}
              {formStatus === "error" && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm font-bold">
                  Something went wrong. Please check your connection or call us at{" "}
                  <a href="tel:9737977001" className="underline">9737977001</a>.
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}