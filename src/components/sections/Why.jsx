import React from "react";
import Image from "next/image";
import IBAlogo from "@/assets/Images/Home/IBA-APPROVED-LOGO.png"
import logo from "@/assets/Images/Home/Round-Logo.png"

import whyPhoto from "@/assets/Images/Home/Why.png";

function Why() {
  return (
    <section className="py-20 bg-white overflow-hidden border-t border-slate-400">
      {/* hrlllo */}
      {/* 🔥 CENTERED CONTAINER */}
      <div className="max-w-[1200px] mx-auto px-4 lg:px-10">

        {/* 🔥 PERFECTLY CENTERED GRID */}
        <div className="grid lg:grid-cols-6 gap-14 place-items-center items-start">

          {/* ── LEFT: IMAGE ───────────────────────── */}
          <div className="lg:col-span-3 relative w-full">

            {/* Decorative Orbs */}
            <div className="absolute -z-10 -top-10 -left-10 w-72 h-72 bg-orange-50 rounded-full blur-3xl opacity-80" />
            <div className="absolute -z-10 -bottom-10 -right-6 w-52 h-52 bg-slate-100 rounded-full blur-3xl opacity-60" />

            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 group aspect-[4/5]">
              <Image
                src={whyPhoto}
                alt="Why choose Avon Express"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            </div>

            {/* Badge */}
            <div className="mt-4 flex items-center gap-3 px-5 py-3 bg-slate-50 border border-slate-100 rounded-2xl">
              <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                Trusted by Thousand families across India
              </p>
            </div>
          </div>

          {/* ── RIGHT: CONTENT ─────────────────────── */}
          <div className="lg:col-span-3 w-full space-y-8 text-center lg:text-left">

            {/* Heading */}
            <div className="space-y-5">
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-orange-600">
                Our Strengths
              </p>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-[0.93]">
                WHY CHOOSE
                <span className="text-slate-300"> AVON EXPRESS.</span>
              </h2>

              <div className="h-[2px] w-14 bg-orange-500 mx-auto lg:mx-0" />

              <p className="text-sm text-slate-500 leading-relaxed font-medium max-w-lg mx-auto lg:mx-0">
                The primary reason we have become the top choice for thousands of people is that, 
                while delivering our moving services, we embrace a spirit of "care" at every moment 
                and uphold the highest standards of "safety." We clarify every detail before starting 
                the work; if everything is clear before the work begins, it benefits both the client 
                and the moving company. We have just one concern—"you," for whom your belongings hold 
                deep emotional significance. That is why, to further strengthen our bond with you, 
                we always prefer to go the extra mile.
              </p>
            </div>
          <div className="flex justify-center items-center gap-12 pt-8">

  {/* IBA LOGO */}
  <div className="relative flex items-center justify-center">
    
    {/* 🔥 Pulse Ring */}
    <span className="absolute h-28 w-28 rounded-full border-10 border-blue-400 animate-ping [animation-delay:7.6s]" />

    {/* LOGO */}
    <Image
      src={IBAlogo}
      alt="IBA Approved"
      className="relative w-32 md:w-40 lg:w-48 h-auto object-contain"
    />
  </div>

  {/* COMPANY LOGO */}
  <div className="relative flex items-center justify-center">
    
    {/* 🔥 Pulse Ring (delayed) */}
    <span className="absolute h-28 w-28 rounded-full border-10 border-orange-400 animate-ping [animation-delay:7.6s]" />

    {/* LOGO */}
    <Image
      src={logo}
      alt="Company Logo"
      className="relative w-32 md:w-46 lg:w-52 h-auto object-contain"
    />
  </div>

</div>
           

          </div>
        </div>
      </div>
    </section>
  );
}

export default Why;