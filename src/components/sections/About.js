
import { SITE, STATS } from '@/lib/data'
import Image from 'next/image'
import React from 'react'
import camel from "/images/Home/History.png"
import { HiOutlineBadgeCheck, HiOutlineArrowRight } from "react-icons/hi";

function About() {
  return (
    <section
      id="about"
      className="relative  bg-white flex items-center overflow-hidden p-10 lg:py-20"
    >
      <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-14">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT SIDE: Visual Powerhouse (5 Columns) */}
          <div className="lg:col-span-5 relative group">
            {/* Artistic Frame */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-2xl shadow-slate-200">
              <Image 
                src={camel} 
                alt="Professional Moving Service"
                className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-700"
                priority
              />
              {/* Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60" />
            </div>

            {/* Next-Gen Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white/80 backdrop-blur-xl border border-white p-6 rounded-2xl shadow-xl hidden md:block max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white text-xl">
                  <HiOutlineBadgeCheck />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-tight">IBA <br/>Approved</span>
              </div>
              <p className="text-[11px] font-bold text-slate-800 leading-relaxed">
                Certified reliability for all household & office relocations.
              </p>
            </div>
            
            {/* Background Accent Decor */}
            <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-orange-50 rounded-full blur-3xl opacity-60" />
          </div>

          {/* RIGHT SIDE: SaaS-Level Content (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-center lg:pl-10">
            {/* Eyebrow Segment */}
            <div className="flex items-center gap-4 mb-8">
              <span className="h-[1px] w-12 bg-orange-600" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-orange-600">
                Established Since 1990
              </span>
            </div>

            {/* Headline with SaaS-style split weight */}
            <h1 className="text-6xl md:text-[84px] font-black text-slate-900 leading-[0.95] tracking-tighter mb-10">
              OUR JOURNEY <br />
              <span className="text-slate-300">AND </span> 
              HISTORY.
            </h1>

            {/* Body Text: High Legibility */}
            <div className="max-w-xl space-y-6 mb-12">
              <p className="text-lg text-slate-500 font-medium leading-relaxed">
                As India’s premier logistics partner, we don’t just move boxes; we relocate lives. 
                Our precision-engineered process ensures your household goods, luxury vehicles, 
                and corporate assets reach their destination with zero compromise.
              </p>
            </div>

            {/* CTA Interaction Block */}
            <div className="flex flex-wrap items-center gap-6 mb-16">
              <a
                href={SITE.whatsapp.quote}
                className="px-10 py-5 bg-slate-900 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-orange-600 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-slate-200 flex items-center gap-3"
              >
                Get Free Quote <HiOutlineArrowRight className="text-lg" />
              </a>
              <a
                href={`tel:${SITE.phone}`}
                className="px-10 py-5 bg-white text-slate-900 text-[11px] font-black uppercase tracking-[0.2em] rounded-full border border-slate-200 hover:bg-slate-50 transition-all"
              >
                Talk to Expert
              </a>
            </div>

            {/* Stats Grid: Minimalist & Bold */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-slate-100">
              {STATS.map(({ num, label }) => (
                <div key={label} className="group">
                  <div className="text-4xl font-black text-slate-900 mb-1 group-hover:text-orange-600 transition-colors">
                    {num}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About