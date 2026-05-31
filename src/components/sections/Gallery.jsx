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
   { img: g10, label: "Loading & Unloading",   tag: "Service"          },
  // { img: g2,  label: "Car Transport",         tag: "Vehicle"          },
  { img: g3,  label: "Bike Transport",        tag: "Vehicle"          },
  { img: g4,  label: "Safe Delivery",         tag: "Express"          },
 
  { img: g6,  label: "Truck & Tempo",         tag: "Fleet"            },
   { img: g5,  label: "Office Shifting",       tag: "Corporate"        },
  { img: g7,  label: "Bill For Claim",        tag: "Verified"         },
  { img: g8,  label: "IBA Approved",          tag: "Certified"        },
  // { img: g9,  label: "Professional Packing",  tag: "Quality"          },
 
  { img: g1,  label: "Household Shifting",    tag: "Packing"          },
  // { img: g11, label: "Secure Transport",      tag: "Safety"           },
  { img: g12, label: "Expert Packing",        tag: "Packing"          },
  { img: g13, label: "Fast Moving Service",   tag: "Express"          },
  { img: g14, label: "Safe Handling",         tag: "Safety"           },
  { img: g15, label: "Trusted Movers",        tag: "Verified"         },
  // { img: g16, label: "Packing Material",      tag: "Packing Material" },
];

export default function Gallery() {
  return (
    <section className="relative py-6 md:py-5 bg-[#FAFAF8] overflow-hidden border-t border-slate-200">

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

        {/* --- Header --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-slate-200 pb-6">
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-4 flex items-center gap-2">
              <span className="w-10 h-px bg-orange-600" />
              Visual Photo
              <span className="w-10 h-px bg-orange-600" />
            </h2>
            <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter leading-tight">
              OUR <span className="text-orange-500">GALLERY.</span>
            </h3>
          </div>
        </div>

        {/* --- Bento Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[280px]">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-[20px] bg-slate-900 cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-orange-900/10 transition-all duration-500"
            >
              {/* Image Layer */}
              <Image
                src={item.img}
                alt={item.label}
                fill
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover scale-105 group-hover:scale-100 transition-transform duration-[1s] ease-[cubic-bezier(0.19,1,0.22,1)]"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}