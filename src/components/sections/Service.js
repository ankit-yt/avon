import Image from "next/image";
import Link from "next/link";
import { HiOutlineShieldCheck, HiOutlineTruck } from "react-icons/hi";
import HouseholdGoodsShiftingServices from "@/assets/images/Services/Household Goods Shifting Services.png";
import OfficeShiftingServices from "@/assets/images/Services/Office Shifting Services.png";
import CarTransportServices from "@/assets/images/Services/Car Transport Services.png";
import BikeTransportServices from "@/assets/images/Services/Bike Transport Services.png";
import ActivaTransportServices from "@/assets/images/Services/Activa Transport Services.png";
import TruckAndTempoHireServices from "@/assets/images/Services/Truck and Tempo Hire Services.png";
import ScrollTopButton from "../ScrollTopBtn";

const services = [
  {
    img: HouseholdGoodsShiftingServices,
    title: "Household Goods Shifting Services",
    slug: "household-goods-shifting-services",
    desc: "Avon Express Packers and Movers offer Best Household Goods Shifting Services Handling all Process of Relocation From one Place To Another Places. We Relocate all Type of Household Things From one City To Another City.",
  },
  {
    img: CarTransportServices,
    title: "Car Transport Services",
    slug: "car-transport-services",
    desc: "Avon Express Packers and Movers Best Company Dealing With Car Transportation. Your Priority is To Send Your Car To Your Destination Without Damage, and on Time With a Suitable Carrier.",
  },
  {
    img: BikeTransportServices,
    title: "Bike Transport Services",
    slug: "bike-transport-services",
    desc: "Your Priority is To Reach Your Bike at its Destination Without Any Damage. Due To Which Your Time and Many Troubles Are Saved. Bike Transport Service is one of The Major Services.",
  },
  {
    img: ActivaTransportServices,
    title: "Activa Transport Services",
    slug: "activa-transport-services",
    desc: "An Experienced Company Will Treat Your Activa as its own Activa and Will Do Whatever it can To Provide You The Most Optimal Activa Carrier Services. Activa Transport Service is one of Those Major Services.",
  },
  {
    img: OfficeShiftingServices,
    title: "Office Shifting Services",
    slug: "office-shifting-services",
    desc: "Avon Express Packers and Movers are Expert in office Relocation Services in India. We offer Cheap and Secure Packing and Moving Services From one Place To Another Place.",
  },
  {
    img: TruckAndTempoHireServices,
    title: "Truck and Tempo Hire Services",
    slug: "truck-and-tempo-hire-services",
    desc: "Avon Express Packers and Movers Provide Transportation Service is Actually one of The Most Alleged Companies. Facility To Hire Truck and Tempo Every Type, GPS-Enabled Vehicle. We Have a Pickup, Tata 407, 14ft, 17ft, 19ft, 20ft, 22ft, 24ft, 32ft. Both Closed Body & Open Body Are Available.",
  },
];

export default function Service() {
  return (
    <section className="bg-white py-5 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* --- Minimal Header --- */}
       

        <div className="text-center   max-w-3xl mx-auto mb-10 border-b border-slate-100 pb-5">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-4 flex items-center justify-center gap-2">
              <span className="w-8  bg-orange-600" />
              <span className="w-10 h-px bg-orange-600" /> Our Expertise <span className="w-10 h-px bg-orange-600" />
              <span className="w-8  bg-orange-600" />
            </h2>
            <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter leading-tight ">
              OUR <span className="text-orange-500">&nbsp;SERVICES</span>
            </h3>

          </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.slug}
              className="group flex flex-col rounded-2xl border border-neutral-100 overflow-hidden hover:border-orange-200 hover:shadow-xl hover:shadow-orange-50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
             
                <Image
                width={100}
                height={100}
                  src={s.img}
                  alt={s.title}
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
               

              

               
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 gap-3 p-6">
                {/* Accent line */}
                <div className="w-7 h-0.5 bg-orange-400 rounded-full" />

                <h3 className="text-base font-black text-neutral-900 tracking-tight leading-snug">
                  {s.title}
                </h3>

                <p className="text-sm text-neutral-400 leading-relaxed flex-1">
                  {s.desc}
                </p>

                <Link
                target="_blank"
                  href={`https://wa.me/919814556375`}
                  className="mt-2 self-start inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white text-[11px] font-black tracking-widest uppercase px-5 py-2.5 rounded-full transition-colors duration-200"
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
        <div className="mt-14 pt-10 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-400 tracking-wide">
            Zero Damage Free Shifting and Real-Time Tracking.
          </p>
          <ScrollTopButton className="inline-flex items-center gap-2 border border-neutral-200 hover:border-orange-400 hover:text-orange-500 text-neutral-600 text-xs font-bold tracking-widest uppercase px-6 py-2.5 rounded-full transition-all duration-200">
  All Services
</ScrollTopButton>
        </div>

      </div>
    </section>
  );
}