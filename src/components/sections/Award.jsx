import React from 'react';
import Image from 'next/image';
import awardPhoto from "@/assets/images/Home/Award.webp";
import { HiOutlineLightBulb, HiOutlineShieldCheck, HiOutlineGlobe } from "react-icons/hi";

const getPreviousYear = () => {
  return new Date().getFullYear() - 1;
};

function Award() {
  return (
    <section className="relative py-6 md:py-5 bg-[#FAFAF8] overflow-hidden border-t border-slate-200">

      {/* ── Warm blob ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 w-125 h-125 rounded-full bg-orange-200/30 blur-[120px]"
      />
       <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 w-125 h-125 rounded-full bg-orange-200/30 blur-[120px]"
      />

      <div className="relative z-10 max-w-330 mx-auto px-5 sm:px-8 lg:px-14">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-4 flex items-center gap-2">
              <span className="w-10 h-px bg-orange-600" />
              Our Legacy and Excellence
              <span className="w-10 h-px bg-orange-600" />
            </h2>
            <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter leading-tight">
              EVENTS AND
              <span className="text-orange-500"> AWARDS.</span>
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* LEFT: The Award Photo (7 Columns) */}
          <div className="lg:col-span-7 relative group">
            <div className="relative aspect-[16/9] rounded-[28px] overflow-hidden shadow-2xl bg-slate-900">
              <Image
                src={awardPhoto}
                alt="Avon Express Award Winning Team"
                fill
               
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Glassmorphism Caption */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
                <p className="text-white text-[10px] font-black tracking-[0.4em] uppercase">
                  Recognized for Excellence in Logistics and Safety
                </p>
              </div>
            </div>
            {/* Decorative background element */}
            <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 bg-orange-200/30 rounded-full blur-[120px]" />
          </div>

          {/* RIGHT: History Timeline (5 Columns) */}
          <div className="lg:col-span-5 space-y-8">

            {/* Milestone 1 */}
            <div className="flex gap-5 group">
              <div className="flex-shrink-0 w-11 h-11 bg-white border border-slate-200 shadow-sm rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 transition-all duration-300">
                <HiOutlineLightBulb className="text-xl" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-black text-orange-600 tracking-[0.4em] uppercase">
                  Best packers and movers india
                </span>
                <h4 className="text-lg font-extrabold text-slate-900 tracking-tighter leading-tight">
                  WINNER {getPreviousYear()} TOP 3 PRIZE PACKERS AND MOVERS
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  It was a moment of pride for Avon Express Packers and Movers when they shared the stage as panelists at the 'Bharat Nirman' event held at 'Palace' in Chandigarh. The central theme of this discussion was transportation regulations, emphasizing how these rules can propel our nation to new heights of prosperity while simultaneously ensuring the safety of every citizen. They introduced modern packing techniques and specialized vehicle carriers to ensure 100% damage-free delivery.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Award;