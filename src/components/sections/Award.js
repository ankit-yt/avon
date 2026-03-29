import React from 'react';
import Image from 'next/image';
import awardPhoto from "@/assets/images/Home/Award.png"; // Ensure this path is correct
import { HiOutlineLightBulb, HiOutlineShieldCheck, HiOutlineGlobe } from "react-icons/hi";

const getPreviousYear = () => {
  return new Date().getFullYear() - 1;
};


function Award() {
  return (
    <section className="p-10  bg-white overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-orange-600 mb-4">
              Our Legacy and Excellence
            </h2>
            <h3 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.95]">
              EVENTS AND 
              <span className="text-slate-300"> AWARDS.</span>
            </h3>
          </div>
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
                  Recognized for Excellence in Logistics and Safety
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
                <span className="text-[10px] font-black text-orange-600 tracking-widest uppercase">Best packers and movers india</span>
                <h4 className="text-xl font-black text-slate-900">WINNER {getPreviousYear()} TOP 3 PRIZE PACKERS AND MOVERS</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
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