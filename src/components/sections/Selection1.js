import Image from 'next/image';
import React from 'react';
import { HiOutlineBadgeCheck, HiOutlineGlobe, HiOutlineUsers, HiOutlineCheckCircle, HiOutlineScale, HiOutlineSparkles, HiOutlineTruck, HiOutlineClock, HiOutlineSupport, HiOutlineThumbUp, HiOutlineMap, HiOutlineShieldCheck } from "react-icons/hi";
import camel from "@/../public/images/camel.jpg"

// Next-Gen 12 Micro-Benefits
const badges = [
  { icon: <HiOutlineBadgeCheck />, title: "IBA Approved", desc: "Certified by the Indian Banks' Association for verified relocation services." },
  { icon: <HiOutlineGlobe />, title: "ISO 9001:2015", desc: "Certified quality management systems that meet global logistics standards." },
  { icon: <HiOutlineUsers />, title: "In-House Team", desc: "We use strictly background-verified, sober, uniformed professionals." },
  { icon: <HiOutlineCheckCircle />, title: "99% Safety Rate", desc: "Precision-engineered packing and handling resulting in minimal goods damage." },
  { icon: <HiOutlineScale />, title: "Transparent Pricing", desc: "No hidden costs. Honest, detailed quotations provided after thorough consultation." },
  { icon: <HiOutlineSparkles />, title: "Premium Materials", desc: "Utilizing high-grade bubble wraps and corrugated sheets." },
  { icon: <HiOutlineTruck />, title: "Dedicated Fleet", desc: "Operating specialized vehicle carriers for efficient, damage-free transport." },
  { icon: <HiOutlineClock />, title: "Punctual Delivery", desc: "Real-time tracked moving with a guaranteed on-time arrival promise." },
  { icon: <HiOutlineSupport />, title: "24/7 Live Support", desc: "Always available experts to guide you through every stage of your move." },
  { icon: <HiOutlineThumbUp />, title: "10,000+ Moves", desc: "Over 10k families and corporate offices trusted us with their possessions." },
  { icon: <HiOutlineMap />, title: "Nationwide Network", desc: "Seamless logistics managing moves across 200+ Indian cities successfully." },
  { icon: <HiOutlineShieldCheck />, title: "Full Insurance", desc: "Providing total peace of mind with comprehensive transit insurance coverage." }
];

export default function Selection1() {
  return (
    <section className="bg-white py-10 px-6 lg:px-14 overflow-hidden">
      <div className="max-w-360 mx-auto">

        {/* --- Next-Gen Header Architecture --- */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-4">
          <p className="text-[11px] font-black tracking-[0.4em] uppercase text-orange-600 flex items-center justify-center gap-3">
            <span className="w-10 h-px bg-orange-600" /> Operational Blueprint <span className="w-10 h-px bg-orange-600" />
          </p>
          
        </div>

        {/* --- 3D 12-Card Interactive Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 perspective-[2000px]">
          {badges.map((b, index) => (
            <div
              key={b.title}
              className="group relative h-full rounded-4xl p-8 bg-white border border-slate-100 flex flex-col items-center justify-center text-center shadow-sm 
                         transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] 
                         hover:transform-[rotateX(20deg)_rotateY(10deg)_translateZ(100px)] 
                         hover:shadow-2xl hover:shadow-orange-100 hover:border-orange-200"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              
              {/* Subtle 3D Depth Card (Glass) */}
              <div className="absolute inset-0 bg-slate-50/10 backdrop-blur-sm rounded-4xl opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* 1. Icon Sphere: Modern, Rotating 3D Object */}
              <div className="overflow-hidden relative z-10 w-24 h-24 mb-6 rounded-full bg-slate-50 flex items-center justify-center text-4xl text-slate-400 border border-slate-100 
                             group-hover:bg-orange-600 group-hover:text-white transition-all duration-700 
                             transform-3d transform-[translateZ(50px)]">
                 <div className=" group-hover:transform-[rotateY(360deg)] scale-150 transition-transform duration-1000">
                    <Image width={100} height={100} alt='camle'  src={camel}/>
                 </div>
                 {/* Decorative outer ring */}
                 <div className="absolute -inset-2 rounded-full border border-orange-100 group-hover:border-orange-300 transition-colors" />
              </div>

              {/* 2. Text Content Layer (Glass on hover) */}
              <div className="relative z-10 space-y-3 transform-[translateZ(30px)]">
                <h3 className="text-lg font-black text-slate-900 tracking-tighter uppercase leading-tight group-hover:text-slate-950">
                  {b.title}
                </h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed group-hover:text-slate-700">
                  {b.desc}
                </p>
              </div>

             
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}