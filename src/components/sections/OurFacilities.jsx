import React from 'react';
import Image from 'next/image';
import {
  HiOutlineShieldCheck,
  HiOutlineVideoCamera,
  HiOutlineDatabase,
  HiOutlineCube
} from "react-icons/hi";

import imgBillClaim   from "@/assets/images/Facility/Bill-For-Claim.webp";
import imgInsurance   from "@/assets/images/Facility/Insurance.webp";
import imgVideoSurvey from "@/assets/images/Facility/Video-Calling-Surveys.webp";
import imgWarehouse   from "@/assets/images/Facility/Warehouse.webp";
import imgCrates      from "@/assets/images/Facility/Wooden-Crates.webp";

const FACILITIES = [
  {
    title: "Bill For Claim",
    icon: <HiOutlineShieldCheck />,
    image: imgBillClaim,
    fit: true, // ✅ FIRST IMAGE → FIT
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
    fit: true, // ✅ LAST IMAGE → FIT
  },
];
function PhotoCard({ facility, className = "" }) {
  return (
    <div className={`group relative overflow-hidden rounded-[20px] bg-slate-900 ${className}`}>
      {/* Full image */}
    <Image
  src={facility.image}
  alt={facility.title}
  fill
 
  className={`
    ${facility.fit ? "object-contain" : "object-cover"}
    transition-transform duration-700 ease-out group-hover:scale-105
  `}
  sizes="(max-width: 768px) 100vw, 50vw"
/>

      {/* Hover: subtle dark gradient from bottom only */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      {/* Title — slides up on hover */}
      <div className="absolute inset-x-0 bottom-0 px-5 py-4 z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
        <p className="text-white text-[10px] font-black uppercase tracking-[0.4em] leading-none">
          {facility.title}
        </p>
      </div>
    </div>
  );
}

export default function OurFacilities() {
  return (
    <section className="relative py-6 md:py-5 bg-[#FAFAF8] overflow-hidden border-t border-slate-200">

      {/* ── Warm blob ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 w-125 h-125 rounded-full bg-orange-200/30 blur-[120px]"
      />
         <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 w-125 h-125 rounded-full bg-orange-200/30 blur-[120px]"
      />


      <div className="relative z-10 max-w-330 mx-auto px-5 sm:px-8 lg:px-14 w-full">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-10 bg-orange-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600">
                Infrastructure
              </span>
              <span className="h-px w-10 bg-orange-600" />
            </div>
            <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter leading-tight">
              OUR <span className="text-orange-500">FACILITIES.</span>
            </h3>
          </div>
        </div>

        {/* ── Photo Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 0 — tall hero, spans 2 rows on left */}
          <div className="sm:row-span-2 h-65 sm:h-auto">
            <PhotoCard
              facility={FACILITIES[0]}
              className="h-full min-h-65 sm:min-h-105"
            />
          </div>

          {/* Card 1 */}
          <PhotoCard
            facility={FACILITIES[1]}
            className="h-[200px] object-cover sm:h-auto  sm:min-h-50"
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
          {FACILITIES.map((f, i) => (
            <div key={i} className="flex items-center gap-2 px-3 py-2.5 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <span className="text-orange-500 text-base shrink-0">{f.icon}</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-700 leading-tight">{f.title}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}