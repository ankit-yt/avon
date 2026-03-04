import Image from "next/image";
import Link from "next/link";

const services = [
  {
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    title: "Household Goods Shifting",
    slug: "household-shifting",
    desc: "We offer expert household shifting services, handling all your belongings with care. We relocate all types of household items from one city to another safely and on time.",
  },
  {
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
    title: "Car Transport Services",
    slug: "car-transport",
    desc: "Expert car transportation across India. Your priority is to send your car to its destination without damage, and on time with a suitable carrier.",
  },
  {
    img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80",
    title: "Bike Transport Services",
    slug: "bike-transport",
    desc: "Your bike reaches its destination without any damage. Bike transport service is one of our major services, saving you time and trouble.",
  },
  {
    img: "https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=800&q=80",
    title: "Activa Transport Services",
    slug: "activa-transport",
    desc: "An experienced company that will treat your Activa as its own and provide the most optimal Activa carrier services across India.",
  },
  {
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    title: "Office Shifting Services",
    slug: "office-shifting",
    desc: "Experts in office relocation across all of India. We offer cheap and secure packing and moving services for corporate office shifting from one place to another.",
  },
  {
    img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80",
    title: "Truck & Tempo Hire Services",
    slug: "truck-tempo-hire",
    desc: "Facility to hire trucks & tempos of every type — Tata 407, 14ft, 17ft, 19ft, 20ft, 22ft, 24ft, 32ft. Both closed body and open body available.",
  },
];

export default function Service() {
  return (
    <section className="bg-white py-20 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[11px] font-bold tracking-[0.28em] uppercase text-orange-500 mb-3">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-neutral-950">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <div className="mt-4 mx-auto w-10 h-0.5 bg-orange-400 rounded-full" />
          <p className="mt-5 text-sm text-neutral-400 max-w-lg mx-auto leading-relaxed">
            From household goods to heavy vehicles — we offer end-to-end relocation solutions across India.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.slug}
              className="group flex flex-col rounded-2xl border border-neutral-100 overflow-hidden hover:border-orange-200 hover:shadow-xl hover:shadow-orange-50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/9]">
             
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Index */}
                <span className="absolute top-3 right-3 text-[10px] font-black tracking-widest text-white/60 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Orange tag */}
                <div className="absolute bottom-3 left-3 bg-orange-500 text-white text-[9px] font-black tracking-[0.18em] uppercase px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  View Service
                </div>
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
                  href={`/services/${s.slug}`}
                  className="mt-2 self-start inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white text-[11px] font-black tracking-widest uppercase px-5 py-2.5 rounded-full transition-colors duration-200"
                >
                  Read More
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
            All services include insurance coverage &amp; real-time tracking.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border border-neutral-200 hover:border-orange-400 hover:text-orange-500 text-neutral-600 text-xs font-bold tracking-widest uppercase px-6 py-2.5 rounded-full transition-all duration-200"
          >
            All Services
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}