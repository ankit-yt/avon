import React from "react";
import Image from "next/image";
import { HiCheckCircle } from "react-icons/hi";

import covidImg1 from "@/assets/images/COVID-19/COVID-19-Images-1.png";
import covidImg2 from "@/assets/images/COVID-19/COVID-19-Images-2.png";
import covidImg3 from "@/assets/images/COVID-19/COVID-19-Images-3.png";
import covidImg4 from "@/assets/images/COVID-19/COVID-19-Images-4.png";
import covidImg5 from "@/assets/images/COVID-19/COVID-19-Images-5.png";
import covidImg6 from "@/assets/images/COVID-19/COVID-19-Images-6.png";

const images = [covidImg1, covidImg2, covidImg3, covidImg4, covidImg5, covidImg6];

const points = [
  "Adhering to guidelines issued by central and local government authorities.",
  "Conduct all discussions or surveys related to your move exclusively through virtual (online) channels.",
  "Ensuring that hand sanitizer is available in both trucks and offices at all times.",
  "Maintaining a device for measuring body temperature (thermometer) on-site.",
  "Ensuring that all employees undergo COVID-19 testing.",
  "Refraining from gathering in groups during the shifting process.",
  "Thoroughly sanitizing your home after the shifting process is complete.",
  "Avoiding contact with any items that have not been sanitized.",
  "Strictly wearing masks and gloves throughout the entire shifting process.",
];

function Covid19() {
  return (
    <section className="p-10 bg-white overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">

        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-4xl">
            <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-orange-600 mb-4">
              Health and Safety Protocols
            </h2>
            <h3 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.95]">
              COVID-19 <span className="text-slate-300 "> PRECAUTIONS.</span>
            </h3>
          </div>
         
        </div>

        {/* ── Main Grid ── */}
        <div className="grid lg:grid-cols-12 gap-14 items-start">

          {/* LEFT: 2×2 Photo Grid — 5 cols */}
          <div className="lg:col-span-5 relative">

            {/* Decorative orbs */}
            <div className="absolute -z-10 -top-10 -left-10 w-64 h-64 bg-orange-50 rounded-full blur-3xl opacity-80 pointer-events-none" />
            <div className="absolute -z-10 -bottom-10 -right-6 w-48 h-48 bg-slate-100 rounded-full blur-3xl opacity-60 pointer-events-none" />

            <div className="grid grid-cols-2 gap-4">
              {images.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-square rounded-2xl overflow-hidden group shadow-md shadow-slate-200"
                >
                  <Image
                    src={img}
                    alt={`COVID-19 safety measure ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-all duration-300" />
                  {/* Number badge */}
                  <div className="absolute top-3 left-3 w-7 h-7 bg-orange-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-[9px] font-black">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Glassmorphism bottom tag */}
            <div className="mt-4 px-5 py-3 bg-slate-50 border border-slate-100 rounded-2xl flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse flex-shrink-0" />
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">
               AVON EXPRESS PACKERS AND MOVERS
              </p>
            </div>
          </div>

          {/* RIGHT: Content — 7 cols */}
          <div className="lg:col-span-7 space-y-8">

            {/* Content heading */}
            <div className="space-y-4">
              <h4 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                Precautions To Observe When Shifting Household Goods
                <span className="text-orange-600"> During COVID-19.</span>
              </h4>

              <div className="h-[2px] w-14 bg-orange-500" />

              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                Avon Express has established its own specific protocols for operating during the
                pandemic; however, you will certainly observe the strict implementation of
                protocols related to physical distancing and sanitization. Your health and
                safety — as well as the health and safety of our employees — remain our utmost
                priority. Transparency is essential to ensure everyone stays safe. If you are
                concerned about your move during this pandemic — particularly if your relocation
                is still pending — rest assured that we are providing our shifting services while
                strictly adhering to sanitization protocols throughout the process, and by wearing
                masks, gloves, and protective footwear.
              </p>
            </div>

            {/* Checklist grid */}
            <div className="grid sm:grid-cols-2 gap-3">
              {points.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-3 p-4 rounded-xl bg-slate-50 hover:bg-orange-50 border border-slate-100 hover:border-orange-200 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <HiCheckCircle className="text-orange-500 text-lg group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Covid19;