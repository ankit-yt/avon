import React from "react";
import Image from "next/image";
import {
  HiOutlineEye,
  HiOutlineLightBulb,
  HiOutlineShieldCheck,
  HiOutlineHeart,
} from "react-icons/hi";

import visionPhoto from "@/assets/images/Home/Our-Purpose-Vision-and-Mission.png";

const VALUES = [
  {
    icon: HiOutlineShieldCheck,
    label: "Integrity",
    desc: "Every move is handled with honesty and transparency.",
  },
  {
    icon: HiOutlineHeart,
    label: "Care",
    desc: "We treat every belonging like our own.",
  },
  {
    icon: HiOutlineLightBulb,
    label: "Innovation",
    desc: "Constantly improving relocation methods.",
  },
];

function VisionMission() {
  return (
    <section className="relative bg-[#FAFAF8] overflow-hidden py-6 md:py-5">

      {/* ── Warm blob ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 w-125 h-125 rounded-full bg-orange-200/30 blur-[120px]"
      />
        <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-32 w-125 h-125 rounded-full bg-orange-200/30 blur-[120px]"
      />

      <div className="relative z-10 max-w-330 mx-auto px-5 sm:px-8 lg:px-14">

        <div className="grid lg:grid-cols-2 min-h-[600px] gap-6 items-stretch">

          {/* LEFT — Content */}
          <div className="flex flex-col justify-center py-16 space-y-10">

            {/* HEADER */}
            <div>
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-4 flex items-center gap-2">
                <span className="w-10 h-px bg-orange-600" />
                Our Purpose
                <span className="w-10 h-px bg-orange-600" />
              </h2>
              <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter leading-tight">
                VISION &amp; <span className="text-orange-500">MISSION.</span>
              </h3>
            </div>

            {/* VISION */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <HiOutlineEye className="text-orange-600 text-2xl" />
                <h4 className="text-xl font-extrabold text-slate-900 tracking-tight">Our Vision</h4>
              </div>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                Why We Are Popular in our Industry?
                We are renowned for our customer-centric operational strategies. We prioritize customer satisfaction above all else. Our business mission is to provide the most innovative services as movers and packers. Guided by this core business objective, we are helping to drive this industry forward while enabling customers to receive the services they desire.
              </p>
            </div>

            {/* MISSION */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <HiOutlineLightBulb className="text-orange-600 text-2xl" />
                <h4 className="text-xl font-extrabold text-slate-900 tracking-tight">Our Mission</h4>
              </div>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                Avon Express Packers and Movers is one of the finest packers and movers service providers across India. Our mission is to provide our customers with quality, safety, prompt service, insurance coverage, and excellent relocation services. Avon Express Packers and Movers is one of the finest packers and movers service providers across India. Our goal is to provide the highest level of service and complete customer satisfaction.
              </p>
            </div>

            {/* VALUES */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200">
              {VALUES.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3"
                >
                  <Icon className="text-orange-600 text-lg" />
                  <span className="text-xs font-bold text-slate-700">{label}</span>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT — Image panel */}
          <div className="relative rounded-[28px] overflow-hidden h-full min-h-[400px] shadow-2xl">
            <Image
              src={visionPhoto}
              alt="Vision and Mission"
              fill
              className="object-fit object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default VisionMission;