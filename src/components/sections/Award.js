import React from 'react';
import Image from 'next/image';
import awardPhoto from "@/../public/images/Home/Award.png"; // Ensure this path is correct
import { HiOutlineLightBulb, HiOutlineShieldCheck, HiOutlineGlobe } from "react-icons/hi";

function Award() {
  return (
    <section className="p-10  bg-white overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-orange-600 mb-4">
              Our Legacy & Excellence
            </h2>
            <h3 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.95]">
              EVENTS & 
              <span className="text-slate-300"> AWARDS.</span>
            </h3>
          </div>
          <p className="text-slate-500 font-medium max-w-xs text-sm leading-relaxed">
            Since our establishment in the 1990s, we have been committed to redefining the standards of relocation in India.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: The Award Photo (7 Columns) */}
          <div className="lg:col-span-7 relative group">
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200">
              <Image 
                src={awardPhoto} 
                alt="Avon Express Award Winning Team"
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              {/* Glassmorphism Caption */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
                <p className="text-white text-xs font-bold tracking-widest uppercase">
                  Recognized for Excellence in Logistics & Safety
                </p>
              </div>
            </div>
            {/* Decorative background element */}
            <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 bg-orange-50 rounded-full blur-3xl opacity-70" />
          </div>

          {/* RIGHT: History Timeline (5 Columns) */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Milestone 1 */}
            <div className="flex gap-6 group">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                <HiOutlineLightBulb className="text-2xl" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-black text-orange-600 tracking-widest uppercase">1990s • The Beginning</span>
                <h4 className="text-xl font-black text-slate-900">Foundation of Trust</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Established with a vision to provide IBA-approved, stress-free moving services across the nation.
                </p>
              </div>
            </div>

            {/* Milestone 2 */}
            <div className="flex gap-6 group">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                <HiOutlineShieldCheck className="text-2xl" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-black text-orange-600 tracking-widest uppercase">2010s • Scaling Heights</span>
                <h4 className="text-xl font-black text-slate-900">Safety First Protocols</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Introduced advanced packing tech and specialized vehicle carriers to ensure 99% damage-free delivery.
                </p>
              </div>
            </div>

            {/* Milestone 3 */}
            <div className="flex gap-6 group">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                <HiOutlineGlobe className="text-2xl" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-black text-orange-600 tracking-widest uppercase">Present • Digital Era</span>
                <h4 className="text-xl font-black text-slate-900">Nationwide Network</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Leveraging a vast network of students and professionals to manage over 1,000 successful moves annually.
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