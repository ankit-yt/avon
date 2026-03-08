

import React from "react";
import { GoArrowUpRight } from "react-icons/go";


const galleryItems = [
  {
    img: "https://www.avonexpresspackersandmovers.co.in/images/services/Household-Goods-Shifting-Services-All-India.jpg",
    label: "Household Shifting",
    tag: "Packing",
  },
  {
    img: "https://www.avonexpresspackersandmovers.co.in/images/services/Car-Transport-Services-All-India.jpg",
    label: "Car Transport",
    tag: "Vehicle",
  },
  {
    img: "https://www.avonexpresspackersandmovers.co.in/images/services/Bike-Transport-Services-All-India.jpg",
    label: "Bike Transport",
    tag: "Vehicle",
  },
  {
    img: "https://www.avonexpresspackersandmovers.co.in/images/services/Activa-Transport-Services-All-India.jpg",
    label: "Safe Delivery",
    tag: "Express",
  },
  {
    img: "https://www.avonexpresspackersandmovers.co.in/images/services/Office-Shifting-Services-All-India.jpg",
    label: "Office Moving",
    tag: "Corporate",
  },
  {
    img: "https://www.avonexpresspackersandmovers.co.in/images/services/Truck-and-Tempo-Hire-Services-All-India.png",
    label: "Truck & Tempo Hire",
    tag: "Fleet",
  },
  {
    img: "https://www.avonexpresspackersandmovers.co.in/images/services/Packers-and-Movers-Bill-For-Claim.jpg",
    label: "Bill For Claim",
    tag: "Verified",
  },
  {
    img: "https://www.avonexpresspackersandmovers.co.in/images/services/IBA-Approved-Packers-and-Movers-All-India.jpg",
    label: "IBA Approved",
    tag: "Certified",
  },
  {
    img: "https://www.avonexpresspackersandmovers.co.in/images/services/IBA-Approved-Packers-and-Movers-All-India.jpg",
    label: "Global Standards",
    tag: "Certified",
  },
  {
    img: "https://www.avonexpresspackersandmovers.co.in/images/services/Truck-and-Tempo-Hire-Services-All-India.png",
    label: "Truck & Tempo Hire",
    tag: "Fleet",
  },
  {
    img: "https://www.avonexpresspackersandmovers.co.in/images/services/Packers-and-Movers-Bill-For-Claim.jpg",
    label: "Bill For Claim",
    tag: "Verified",
  },
  {
    img: "https://www.avonexpresspackersandmovers.co.in/images/services/IBA-Approved-Packers-and-Movers-All-India.jpg",
    label: "IBA Approved",
    tag: "Certified",
  },
  {
    img: "https://www.avonexpresspackersandmovers.co.in/images/services/IBA-Approved-Packers-and-Movers-All-India.jpg",
    label: "Global Standards",
    tag: "Certified",
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
              <span className="w-8 h-[1px] bg-orange-600" /> Visual Portfolio
            </h2>
            <h3 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.95]">
              OUR <span className="text-slate-300">GALLERY.</span>
            </h3>
          </div>
          <p className="text-sm font-medium text-slate-500 max-w-sm leading-relaxed md:text-right pb-2">
            A transparent look into our operational excellence—from premium packing to safe, nationwide delivery.
          </p>
        </div>

        {/* --- High-End Bento Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-[280px]">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-[32px] bg-slate-100 cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-orange-900/10 transition-all duration-500
                ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}
              
              `}
            >
              {/* Image Layer with Slow-Zoom */}
              <img
                src={item.img}
                alt={item.label}
                className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[1s] ease-[cubic-bezier(0.19,1,0.22,1)]"
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