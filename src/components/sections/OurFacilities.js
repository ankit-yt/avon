

import React from 'react';
import Image from 'next/image';
import { 
  HiOutlineShieldCheck, 
  HiOutlineTruck, 
  HiOutlineDatabase, 
  HiOutlineVideoCamera 
} from "react-icons/hi";

// Replace these with your actual image imports
import imgFleet from "@/../public/images/vs1.jpeg";
import imgWarehouse from "@/../public/images/vs1.jpeg";
import imgStation from "@/../public/images/vs1.jpeg";
import imgTracking from "@/../public/images/vs1.jpeg";
import imgFleet2 from "@/../public/images/vs1.jpeg";
import imgWarehouse2 from "@/../public/images/vs1.jpeg";

const FACILITIES = [
  {
    title: "Specialized Fleet",
    desc: "A dedicated nationwide fleet of closed-body vehicle carriers and weather-proof containers.",
    icon: <HiOutlineTruck />,
    image: imgFleet
  },
  {
    title: "Secure Warehousing",
    desc: "Climate-controlled, 24/7 monitored storage solutions for short and long-term needs.",
    icon: <HiOutlineDatabase />,
    image: imgWarehouse
  },
  {
    title: "IBA Approved Stations",
    desc: "Certified packing hubs utilizing premium corrugated sheets and zero-impact protocols.",
    icon: <HiOutlineShieldCheck />,
    image: imgStation
  },
  {
    title: "AI Tracking Hub",
    desc: "Real-time telemetry integration for transparent, live movement monitoring of all domestic assets.",
    icon: <HiOutlineVideoCamera />,
    image: imgTracking
  },
  {
    title: "Vehicle Transport Carriers",
    desc: "Specialized double-decker carriers for damage-free car and bike transport across India.",
    icon: <HiOutlineTruck />,
    image: imgFleet2
  },
  {
    title: "Inventory Management",
    desc: "High-density racking systems and cloud-based inventory tracking for absolute transparency.",
    icon: <HiOutlineDatabase />,
    image: imgWarehouse2
  }
];

function OurFacilities() {
  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14 w-full">
        
        {/* --- Minimalist Header Architecture --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-4">
              Infrastructure
            </h2>
            <h3 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.95]">
              OUR <span className="text-slate-300">FACILITIES.</span>
            </h3>
          </div>
          <p className="text-xl text-slate-500 font-medium max-w-sm leading-relaxed pb-2">
            Investing in high-end logistics technology to maintain a 99% safety rating across India.
          </p>
        </div>

        {/* --- 6-Image Technical Bento Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-10 gap-6 auto-rows-[300px]">
          
          {/* Card 01 - Large Featured */}
          <div className="md:col-span-4 lg:col-span-6 row-span-2 group relative overflow-hidden rounded-[32px] bg-slate-900 shadow-xl shadow-slate-200">
             <Image 
                src={FACILITIES[0].image} 
                alt={FACILITIES[0].title}
                className="absolute inset-0 object-cover w-full h-full opacity-60 scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                priority
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
             <div className="absolute inset-0 p-10 flex flex-col justify-end z-10">
                <div className="w-14 h-14 bg-orange-600 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 shadow-lg shadow-orange-900/20">
                    {FACILITIES[0].icon}
                </div>
                <h4 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">
                    {FACILITIES[0].title}
                </h4>
                <p className="text-slate-300 font-medium leading-relaxed text-sm max-w-sm">
                    {FACILITIES[0].desc}
                </p>
             </div>
          </div>

          {/* Card 02 */}
          <div className="md:col-span-2 lg:col-span-4 row-span-1 group relative overflow-hidden rounded-[32px] bg-slate-50 border border-slate-100 hover:border-orange-200 transition-all">
             <Image 
                src={FACILITIES[1].image} 
                alt={FACILITIES[1].title}
                className="absolute inset-0 object-cover w-full h-full opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="absolute inset-x-0 bottom-0 p-8 z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-xl font-black text-white uppercase tracking-tight mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {FACILITIES[1].title}
                </h4>
                <p className="text-[11px] text-slate-100 font-medium opacity-0 group-hover:opacity-100 transition-opacity leading-snug">
                    {FACILITIES[1].desc}
                </p>
             </div>
          </div>

          {/* Card 03 */}
          <div className="md:col-span-2 lg:col-span-4 row-span-1 group relative overflow-hidden rounded-[32px] bg-white border border-slate-100 p-8 flex flex-col justify-between hover:border-orange-200 transition-all">
             <div className="relative z-10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-400 text-2xl flex items-center justify-center border border-slate-100 transition-colors group-hover:bg-orange-600 group-hover:text-white">
                   {FACILITIES[2].icon}
                </div>
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">{FACILITIES[2].title}</h4>
             </div>
             <p className="relative z-10 text-[11px] text-slate-500 font-medium leading-relaxed mt-4 line-clamp-2">
                {FACILITIES[2].desc}
             </p>
             <Image 
                src={FACILITIES[2].image} 
                alt={FACILITIES[2].title}
                className="absolute inset-0 object-cover w-full h-full opacity-20 scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
             />
          </div>

          {/* Cards 04-06 (Bottom Row) */}
          {[FACILITIES[3], FACILITIES[4], FACILITIES[5]].map((f, i) => (
            <div key={i} className={`md:col-span-2 ${i === 2 ? 'lg:col-span-4' : 'lg:col-span-3'} row-span-1 group relative overflow-hidden rounded-[32px] bg-slate-50 border border-slate-100 p-6 transition-all hover:border-orange-200`}>
              <Image 
                src={f.image} 
                alt={f.title}
                className="absolute inset-0 object-cover w-full h-full opacity-20 group-hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 z-10 bg-white shadow-lg rounded-t-3xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-2">
                    <div className="text-slate-300 text-2xl group-hover:text-orange-600 transition-colors">{f.icon}</div>
                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">{f.title}</h4>
                </div>
                <p className="text-[10px] text-slate-500 font-medium leading-snug line-clamp-1 group-hover:line-clamp-none transition-all">
                    {f.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default OurFacilities;