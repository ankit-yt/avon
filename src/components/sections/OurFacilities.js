import React from 'react';
import Image from 'next/image';
import {
  HiOutlineShieldCheck,
  HiOutlineVideoCamera,
  HiOutlineDatabase,
  HiOutlineCube
} from "react-icons/hi";

import imgBillClaim   from "@/assets/images/Facility/Bill-For-Claim.png";
import imgInsurance   from "@/assets/images/Facility/Insurance.png";
import imgVideoSurvey from "@/assets/images/Facility/Video-Calling-Surveys.png";
import imgWarehouse   from "@/assets/images/Facility/Warehouse.png";
import imgCrates      from "@/assets/images/Facility/Wooden-Crates.png";

const FACILITIES = [
  {
    title: "Bill For Claim",
    icon: <HiOutlineShieldCheck />,
    image: imgBillClaim,
  },
  {
    title: "Insurance",
    icon: <HiOutlineShieldCheck />,
    image: imgInsurance,
  },
  {
    title: "Video Call Survey",
    icon: <HiOutlineVideoCamera />,
    image: imgVideoSurvey,
  },
  {
    title: "CCTV Warehouse",
    icon: <HiOutlineDatabase />,
    image: imgWarehouse,
  },
  {
    title: "Customized Wooden Crates",
    icon: <HiOutlineCube />,
    image: imgCrates,
  },
];

function PhotoCard({ facility, className = "" }) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-slate-100 ${className}`}>
      {/* Full image — always fully visible, no overlay in default state */}
      <Image
        src={facility.image}
        alt={facility.title}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* Hover: subtle dark gradient from bottom only */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      {/* Title — slides up on hover, hidden by default */}
      <div className="absolute inset-x-0 bottom-0 px-5 py-4 z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
        <p className="text-white text-sm font-bold uppercase tracking-wide leading-none">
          {facility.title}
        </p>
      </div>
    </div>
  );
}

export default function OurFacilities() {
  return (
    <section className="py-14 bg-[#FAFAF8] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14 w-full">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-orange-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.45em] text-orange-600">
                Infrastructure
              </span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-[1]">
              OUR <span className="text-slate-300">FACILITIES.</span>
            </h3>
          </div>
          
        </div>

        {/* ── Photo Grid ── */}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* Card 0 — tall hero, spans 2 rows on left */}
          <div className="sm:row-span-2 h-[260px] sm:h-auto">
            <PhotoCard
              facility={FACILITIES[0]}
              className="h-full min-h-[260px] sm:min-h-[420px]"
            />
          </div>

          {/* Card 1 */}
          <PhotoCard
            facility={FACILITIES[1]}
            className="h-[200px] sm:h-auto sm:min-h-[200px]"
          />

          {/* Card 2 */}
          <PhotoCard
            facility={FACILITIES[2]}
            className="h-[200px] sm:h-auto sm:min-h-[200px]"
          />

          {/* Card 3 */}
          <PhotoCard
            facility={FACILITIES[3]}
            className="h-[200px] sm:h-auto sm:min-h-[200px]"
          />

          {/* Card 4 */}
          <PhotoCard
            facility={FACILITIES[4]}
            className="h-[200px] sm:h-auto sm:min-h-[200px]"
          />

        </div>

        {/* ── Caption strip ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
          {FACILITIES.map((f, i) => (
            <div key={i} className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-100 rounded-xl">
              <span className="text-orange-500 text-base flex-shrink-0">{f.icon}</span>
              <span className="text-[11px] font-semibold text-slate-700 leading-tight">{f.title}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}