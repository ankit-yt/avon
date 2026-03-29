

import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import g1 from "@/assets/images/Gallery/Gallery-Images-1.png";
import g2 from "@/assets/images/Gallery/Gallery-Images-2.png";
import g3 from "@/assets/images/Gallery/Gallery-Images-3.png";
import g4 from "@/assets/images/Gallery/Gallery-Images-4.png";
import g5 from "@/assets/images/Gallery/Gallery-Images-5.png";
import g6 from "@/assets/images/Gallery/Gallery-Images-6.png";
import g7 from "@/assets/images/Gallery/Gallery-Images-7.png";
import g8 from "@/assets/images/Gallery/Gallery-Images-8.png";
import g9 from "@/assets/images/Gallery/Gallery-Images-9.png";
import g10 from "@/assets/images/Gallery/Gallery-Images-10.png";
import g11 from "@/assets/images/Gallery/Gallery-Images-11.png";
import g12 from "@/assets/images/Gallery/Gallery-Images-12.png";
import g13 from "@/assets/images/Gallery/Gallery-Images-13.png";
import g14 from "@/assets/images/Gallery/Gallery-Images-14.png";
import g15 from "@/assets/images/Gallery/Gallery-Images-15.png";
import g16 from "@/assets/images/Gallery/Gallery-Images-16.png";
import Image from "next/image";


const galleryItems = [
  {
    img: g1,
    label: "Household Shifting",
    tag: "Packing",
  },
  {
    img: g2,
    label: "Car Transport",
    tag: "Vehicle",
  },
  {
    img: g3,
    label: "Bike Transport",
    tag: "Vehicle",
  },
  {
    img: g4,
    label: "Safe Delivery",
    tag: "Express",
  },
  {
    img: g5,
    label: "Office Shifting",
    tag: "Corporate",
  },
  {
    img: g6,
    label: "Truck & Tempo",
    tag: "Fleet",
  },
  {
    img: g7,
    label: "Bill For Claim",
    tag: "Verified",
  },
  {
    img: g8,
    label: "IBA Approved",
    tag: "Certified",
  },
  {
    img: g9,
    label: "Professional Packing",
    tag: "Quality",
  },
  {
    img: g10,
    label: "Loading & Unloading",
    tag: "Service",
  },
  {
    img: g11,
    label: "Secure Transport",
    tag: "Safety",
  },
  {
    img: g12,
    label: "Expert Packing",
    tag: "Packing",
  },
  {
    img: g13,
    label: "Fast Moving Service",
    tag: "Express",
  },
  {
    img: g14,
    label: "Safe Handling",
    tag: "Safety",
  },
  {
    img: g15,
    label: "Trusted Movers",
    tag: "Verified",
  },
  {
    img: g16,
    label: "Packing Material",
    tag: "Packing Material",
  },
];

export default function Gallery() {
  return (
    <section className="relative py-10 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        
        {/* --- Next-Gen Typographic Header --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-slate-100 pb-12">
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-6 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-orange-600" /> Visual Photo
            </h2>
            <h3 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.95]">
              OUR <span className="text-slate-300">GALLERY.</span>
            </h3>
          </div>
         
        </div>

        {/* --- High-End Bento Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-[280px]">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-[32px] bg-slate-100 cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-orange-900/10 transition-all duration-500
               
              
              `}
            >
              {/* Image Layer with Slow-Zoom */}
              <Image
                src={item.img}
                alt={item.label}
                className="absolute inset-0 w-full h-full object-fit scale-105 group-hover:scale-100 transition-transform duration-[1s] ease-[cubic-bezier(0.19,1,0.22,1)]"
              />

              {/* Seamless Gradient Overlay for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />



              
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}