import React from 'react';
import Image from 'next/image';
import { HiOutlineBadgeCheck, HiOutlineBan } from "react-icons/hi";
import usPhoto from "@/../public/images/Home/VS1.png"; 
import othersPhoto from "@/../public/images/Home/VS2.png";


function Versus() {
  return (
    <section className="bg-white p-10 pb-5 px-4 md:px-10 lg:px-20 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* --- Compact Header --- */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600">
            The Gold Standard
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mt-4">
            US <span className="text-slate-300">VS</span> THEM.
          </h2>
        </div>

        {/* --- Next-Gen Split Container --- */}
        <div className="grid lg:grid-cols-2 gap-4">
          
          {/* THE AVON WAY (Left) */}
          <div className="relative group overflow-hidden rounded-[32px] bg-slate-50 border border-slate-100 p-4 transition-all hover:shadow-2xl hover:shadow-orange-100">
            <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden mb-6">
              <Image 
                src={usPhoto} 
                alt="Professional Team"
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest flex items-center gap-2">
                <HiOutlineBadgeCheck className="text-sm" /> Avon Express
              </div>
            </div>
            
            <div className="px-4 pb-4 space-y-3">
              <h3 className="text-xl font-black text-slate-900 uppercase italic">The Professional Reality</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                Background-verified staff with a "Customer is God" philosophy. No intoxication, no abuse—only IBA-approved precision.
              </p>
              <ul className="grid grid-cols-2 gap-2 pt-2">
                {["Sober Staff", "IBA Approved", "Polite Conduct", "Uniformed Team"].map((item) => (
                  <li key={item} className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1 h-1 bg-orange-600 rounded-full" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* THE COMPETITION (Right) */}
          <div className="relative group overflow-hidden rounded-[32px] bg-white border border-slate-100 p-4 transition-all grayscale hover:grayscale-0">
            <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden mb-6 opacity-40 group-hover:opacity-100 transition-opacity">
              <Image 
                src={othersPhoto} 
                alt="Competitor Conduct"
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-slate-900 text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest flex items-center gap-2">
                <HiOutlineBan className="text-sm" /> Market Reality
              </div>
            </div>
            
            <div className="px-4 pb-4 space-y-3">
              <h3 className="text-xl font-black text-slate-400 uppercase italic">The Unorganized Sector</h3>
              <p className="text-sm text-slate-400 font-medium leading-relaxed">
                Untrained daily-wagers known for property damage, abusive language, and workplace intoxication.
              </p>
              <ul className="grid grid-cols-2 gap-2 pt-2 opacity-50">
                {["Intoxication", "Hostile Entry", "Goods Damage", "Hidden Costs"].map((item) => (
                  <li key={item} className="text-[10px] font-bold text-slate-300 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1 h-1 bg-slate-200 rounded-full" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* --- Professional Footnote (Compact Filler) --- */}
        <div className="mt-12 text-center">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] inline-flex items-center gap-3 bg-slate-50 px-6 py-2 rounded-full border border-slate-100">
            Certified Safety Rate <span className="text-orange-600">99%</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Versus;