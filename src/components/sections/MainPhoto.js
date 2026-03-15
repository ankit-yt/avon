import React from 'react';
import mainPhoto from "@/../public/images/Home/Background.png";
import Image from 'next/image';
import { HiArrowRight } from "react-icons/hi";

function MainPhoto() {
  return (
    <section className="relative h-[45rem] w-full overflow-hidden bg-slate-900">
      {/* 1. The Background Engine */}
      <div className="absolute inset-0 z-0">
        <Image 
          className="object-cover object-center w-full h-full scale-105 animate-slow-zoom transition-transform duration-[10s]" 
          alt="Avon Express Logistics" 
          src={mainPhoto}
          priority
        />
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
      </div>

      {/* 2. Content Layer */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-10 flex flex-col justify-center">
        <div className="max-w-2xl space-y-8">
          
          {/* Tagline with "Glass" effect */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/90">
              Premium Relocation Services
            </span>
          </div>

          {/* Next-Gen Typography */}
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
            MOVE WITHOUT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              THE BOUNDARIES.
            </span>
          </h1>

          <p className="text-lg text-slate-300 font-medium leading-relaxed max-w-lg">
            Experience seamless logistics and packing solutions tailored for the modern world. 
            Safe, swift, and strictly professional.
          </p>

          {/* Interactive Button Group */}
          <div className="flex items-center gap-6 pt-4">
            <button className="group relative px-8 py-4 bg-orange-600 text-white font-bold uppercase tracking-widest text-xs rounded-xl overflow-hidden transition-all hover:bg-orange-500 shadow-2xl shadow-orange-900/20">
              <span className="relative z-10 flex items-center gap-2">
                Start Relocation <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-bold uppercase tracking-widest text-xs rounded-xl border border-white/10 hover:bg-white/10 transition-all">
              Our Fleet
            </button>
          </div>
        </div>
      </div>

      

      {/* Floating Info Card (Next-Gen space filler) */}
      <div className="absolute bottom-20 right-10 z-10 hidden xl:block">
        <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl w-64 space-y-4">
          <div className="flex justify-between items-end">
            <span className="text-4xl font-black text-white">99%</span>
            <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest pb-1">Safety Rate</span>
          </div>
          <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
            <div className="h-full w-[99%] bg-orange-500" />
          </div>
          <p className="text-[10px] text-slate-400 leading-normal">
            Reliable packing & moving across India with certified professionals.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MainPhoto;