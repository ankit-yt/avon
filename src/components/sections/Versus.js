import React from 'react';
import Image from 'next/image';
import { HiOutlineBadgeCheck, HiOutlineBan } from "react-icons/hi";
import usPhoto from "@/assets/images/Home/VS1.png";
import othersPhoto from "@/assets/images/Home/VS2.png";

function Versus() {
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

        {/* --- Compact Header --- */}
        <header className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-4 flex items-center justify-center gap-2">
            <span className="w-10 h-px bg-orange-600" />
            The Gold Standard
            <span className="w-10 h-px bg-orange-600" />
          </h2>
          <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter leading-tight">
            AVON <span className="text-orange-500">VS</span> OTHER
          </h3>
        </header>

        {/* --- Split Container --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* THE AVON WAY (Left) */}
          <div className="relative group overflow-hidden rounded-[28px] bg-white border border-slate-200 p-3 shadow-sm transition-all hover:shadow-2xl hover:shadow-orange-100">
            <div className="relative aspect-[16/10] rounded-[20px] overflow-hidden mb-6">
              <Image
                src={usPhoto}
                alt="Professional Team"
                fill
                quality={100}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.4em] flex items-center gap-2">
                <HiOutlineBadgeCheck className="text-sm" /> Avon Express
              </div>
            </div>

            <div className="px-4 pb-4 space-y-3">
              <h3 className="text-lg font-extrabold text-slate-900 tracking-tighter uppercase italic">
                Professional and Registered Brand: Reality
              </h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                Background-verified staff who adhere to the philosophy that "the customer is God." No substance abuse, no misconduct.
              </p>
              <ul className="grid grid-cols-2 gap-2 pt-2">
                {["Sober Staff", "Polite Conduct", "Uniformed Team", "Zero Damage"].map((item) => (
                  <li key={item} className="text-[10px] font-black text-slate-700 uppercase flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* THE COMPETITION (Right) */}
          <div className="relative group overflow-hidden rounded-[28px] bg-white border border-slate-200 p-3 shadow-sm transition-all grayscale hover:grayscale-0">
            <div className="relative aspect-[16/10] rounded-[20px] overflow-hidden mb-6 opacity-40 group-hover:opacity-100 transition-opacity">
              <Image
                src={othersPhoto}
                alt="Competitor Conduct"
                fill
                quality={100}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-slate-900 text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.4em] flex items-center gap-2">
                <HiOutlineBan className="text-sm" /> Market Reality
              </div>
            </div>

            <div className="px-4 pb-4 space-y-3">
              <h3 className="text-lg font-extrabold text-slate-400 tracking-tighter uppercase italic">
                Local and Unregistered: Reality
              </h3>
              <p className="text-sm text-slate-400 font-medium leading-relaxed">
                Untrained daily-wage laborers are known for damaging property, using abusive language, and being intoxicated at the workplace.
              </p>
              <ul className="grid grid-cols-2 gap-2 pt-2">
                {["Theft of Goods", "Hostile Entry", "Goods Damage", "Hidden Costs"].map((item) => (
                  <li key={item} className="text-[10px] font-black text-slate-400 uppercase  flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-slate-200 rounded-full flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* --- Professional Footnote --- */}
        <div className="mt-10 text-center">
          <p className="text-[10px] font-black text-slate-700 uppercase tracking-[0.4em] inline-flex items-center gap-3 bg-white px-6 py-2.5 rounded-full border border-slate-200 shadow-sm">
            Certified Safety Rating <span className="text-orange-600">100%</span>
          </p>
        </div>

      </div>
    </section>
  );
}

export default Versus;