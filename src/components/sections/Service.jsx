import Image from "next/image";
import Link from "next/link";
import { HiOutlineShieldCheck, HiOutlineTruck } from "react-icons/hi";

import HouseholdGoodsShiftingServices from "@/assets/images/Services/Household-Goods-Shifting-Services.png";
import OfficeShiftingServices from "@/assets/images/Services/Office-Shifting-Services.png";
import CarTransportServices from "@/assets/images/Services/Car-Transport-Services.png";
import BikeTransportServices from "@/assets/images/Services/Bike-Transport-Services.png";
import ActivaTransportServices from "@/assets/images/Services/Activa-Transport-Services.png";
import TruckAndTempoHireServices from "@/assets/images/Services/Truck-and-Tempo-Hire-Services.png";

import ScrollTopButton from "../ScrollTopBtn";

const services = [
  {
    img: HouseholdGoodsShiftingServices,
    title: "Household Goods Shifting Services",
    slug: "household-goods-shifting-services",
    desc: "Avon Express Packers and Movers provide excellent services for shifting household goods from one location to another, handling the entire relocation process with efficiency. We relocate all types of household items from one city to another.",
  },
  {
    img: CarTransportServices,
    title: "Car Transport Services",
    slug: "car-transport-services",
    desc: "Avon Express Packers and Movers is a trusted company in car transportation. Your priority is to ensure that your car reaches its destination safely, on time, and without any damage using a suitable carrier.",
  },
  {
    img: BikeTransportServices,
    title: "Bike Transport Services",
    slug: "bike-transport-services",
    desc: "Your priority is to transport your bike safely to its destination without any damage. This service helps you save time and avoid unnecessary hassles. Bike transport is one of our key services.",
  },
  {
    img: ActivaTransportServices,
    title: "Activa Transport Services",
    slug: "activa-transport-services",
    desc: "An experienced company treats your Activa as its own and makes every effort to provide the best transport services. Activa transport is one of our specialized and reliable services.",
  },
  {
    img: OfficeShiftingServices,
    title: "Office Shifting Services",
    slug: "office-shifting-services",
    desc: "Avon Express Packers and Movers specialize in office relocation services across India. We provide affordable, secure, and efficient packing and moving solutions from one location to another.",
  },
  {
    img: TruckAndTempoHireServices,
    title: "Truck and Tempo Hire Services",
    slug: "truck-and-tempo-hire-services",
    desc: "Avon Express Packers and Movers offer reliable transportation services with a wide range of GPS-enabled vehicles. Options include Pickup, Tata 407, and trucks of 14ft, 17ft, 19ft, 20ft, 22ft, 24ft, and 32ft sizes. Both closed-body and open-body vehicles are available.",
  },
];

export default function Service() {
  return (
    <section
      id="services"
      className="relative py-6 md:py-5 bg-[#FAFAF8] overflow-hidden border-t border-slate-200"
    >

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
        <header className="text-center max-w-3xl mx-auto mb-10 border-b border-slate-200 pb-6">
          <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-4 flex items-center justify-center gap-2">
            <span className="w-10 h-px bg-orange-600" />
            Our Expertise
            <span className="w-10 h-px bg-orange-600" />
          </h2>
          <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter leading-tight">
            OUR <span className="text-orange-500">&nbsp;SERVICES</span>
          </h3>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.slug}
              className="group flex flex-col rounded-[20px] border border-slate-200 bg-white overflow-hidden hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100 transition-all duration-300 shadow-sm"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  quality={100}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 gap-3 p-6">
                {/* Accent line */}
                <div className="w-7 h-0.5 bg-orange-500 rounded-full" />

                <h3 className="text-sm font-extrabold text-slate-900 tracking-tighter leading-snug">
                  {s.title}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed font-medium flex-1">
                  {s.desc}
                </p>

                <Link
                  target="_blank"
                  href="https://wa.me/919814556375"
                  className="mt-2 self-start inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white text-[10px] font-black tracking-[0.1em] uppercase px-5 py-2.5 rounded-full transition-colors duration-200"
                >
                  Get A Free Quotation
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 font-medium tracking-widest uppercase">
            Zero Damage Free Shifting and Real-Time Tracking With Lockable Truck.
          </p>
          <ScrollTopButton className="inline-flex items-center gap-2 border border-slate-200 bg-white shadow-sm hover:border-orange-400 hover:text-orange-500 text-slate-700 text-[10px] font-black tracking-[0.4em] uppercase px-6 py-2.5 rounded-full transition-all duration-200">
            All Services
          </ScrollTopButton>
        </div>

      </div>
    </section>
  );
}