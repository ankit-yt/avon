import { SITE, STATS } from '@/lib/data'
import Image from 'next/image'
import React from 'react'
import camel from "@/assets/images/Home/History.webp"
import { HiOutlineBadgeCheck, HiOutlineArrowRight } from "react-icons/hi";

function About() {
  return (
    <section
      id="about"
      className="relative bg-[#FAFAF8] flex items-center overflow-hidden py-6 md:py-5"
    >
      {/* ── Warm blob ── */}
       <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 w-125 h-125 rounded-full bg-orange-200/30 blur-[120px]"
      />

      <div className="relative z-10 max-w-330 mx-auto w-full px-5 sm:px-8 lg:px-14">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* LEFT SIDE: Visual Powerhouse (5 Columns) */}
          <div className="lg:col-span-5 relative group">
            {/* Artistic Frame */}
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-[28px] shadow-2xl">
              <Image
              fill
                src={camel}
                alt="Professional Moving Service"
                className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-700"
                priority
              />
              {/* Overlay for depth */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white/80 backdrop-blur-xl border border-slate-200 p-6 rounded-[20px] shadow-xl hidden md:block max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white text-xl">
                  <HiOutlineBadgeCheck />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-tight">Registered</span>
              </div>
              <p className="text-[11px] font-bold text-slate-700 leading-relaxed">
                Certified Reliability for all Household and office Relocations.
              </p>
            </div>

            {/* Background Accent Decor */}
            <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-orange-200/30 rounded-full blur-[80px]" />
          </div>

          {/* RIGHT SIDE: Content (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-center lg:pl-10">

            {/* Eyebrow — matches reference label style exactly */}
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-8 flex items-center gap-2">
              <span className="w-10 h-px bg-orange-600" />
              Established Since 2014
              <span className="w-10 h-px bg-orange-600" />
            </h2>

            {/* Main Heading — matches reference h3 style */}
            <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter leading-tight mb-10">
              JOURNEY 
              <span className="text-orange-500"> &&nbsp;</span>
              HISTORY.
            </h3>

            {/* Body Text */}
            <div className="max-w-4xl space-y-6 mb-12">
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                Avon Express Packers and Movers is one of India's largest transport companies. We began our journey in 2014 as a small firm named 'Home Trans Packers and Movers,' specializing primarily in the relocation of household goods. We started in ABC House, Plot No. 30, Workshop Road, Transport Nagar, Industrial Area - A, Ludhiana, Punjab, India – 141003, and our headquarters are now located in Avon House, Plot No. 31, Workshop Road, Transport Nagar, Industrial Area - A, Ludhiana, Punjab, India – 141003. We are a government-registered firm operating within India. Driven by determination, foresight, and hard work—and born from the vision of Home Trans Packers and Movers—this company has achieved continuous growth ever since its inception. Although our beginnings were humble, today we provide top-notch services for the relocation of household goods; with offices established in numerous cities, we extend our services across the entire length and breadth of India. Following this remarkable growth, Avon Express Packers and Movers has emerged as India's leading company in the field of household relocation. Throughout our entire journey of growth, we have consistently strived to stay abreast of technological advancements and have spared no effort in delivering the best possible services to our clients. Avon Express Packers and Movers has always provided its customers with the most modern and superior services. Our enduring objective has always been to provide a systematic relocation service for household goods—one that is both reliable and completely hassle-free for our customers.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default About