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
    <section className="bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 min-h-[600px]">

          <div className="flex flex-col justify-center px-10 lg:px-16 py-16 bg-white space-y-10">

            {/* HEADER */}
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-orange-600 mb-3">
                Our Purpose
              </p>
              <h2 className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[0.95]">
                VISION & <span className="text-slate-300">MISSION</span>
              </h2>
            </div>

            {/* VISION */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <HiOutlineEye className="text-orange-600 text-2xl" />
                <h3 className="text-xl font-black text-slate-900">Our Vision</h3>
              </div>

              <p className="text-slate-500 text-sm leading-relaxed">
                Why We Are Popular in our Industry?
We are renowned for our customer-centric operational strategies. We prioritize customer satisfaction above all else. Our business mission is to provide the most innovative services as movers and packers. Guided by this core business objective, we are helping to drive this industry forward while enabling customers to receive the services they desire.
              </p>
            </div>

            {/* MISSION */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <HiOutlineLightBulb className="text-orange-600 text-2xl" />
                <h3 className="text-xl font-black text-slate-900">Our Mission</h3>
              </div>

              <p className="text-slate-500 text-sm leading-relaxed">
                Avon Express Packers and Movers is one of the finest packers and movers service providers across India. Our mission is to provide our customers with quality, safety, prompt service, insurance coverage, and excellent relocation services.Avon Express Packers and Movers is one of the finest packers and movers service providers across India. Our goal is to provide the highest level of service and complete customer satisfaction.
              </p>
            </div>

            {/* VALUES */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
              {VALUES.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 text-sm font-semibold text-slate-700"
                >
                  <Icon className="text-orange-600 text-lg" />
                  {label}
                </div>
              ))}
            </div>

          </div>

           <div className="relative rounded-3xl overflow-hidden h-full min-h-[400px]">
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