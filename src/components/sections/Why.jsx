import React from "react";
import Image from "next/image";
import IBAlogo from "@/assets/images/Home/IBA-APPROVED-LOGO.webp";
import logo from "@/assets/images/Home/Round-Logo.webp";
import whyPhoto from "@/assets/images/Home/Why.webp";

function Why() {
  return (
    <section className="relative py-6 md:py-5 bg-[#FAFAF8] overflow-hidden">

      {/* ── Warm blob ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 w-125 h-125 rounded-full bg-orange-200/30 blur-[120px]"
      />
        <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 w-125 h-125 rounded-full bg-orange-200/30 blur-[120px]"
      />

      {/* CENTERED CONTAINER */}
      <div className="max-w-330 mx-auto px-5 sm:px-8 lg:px-14">

        {/* PERFECTLY CENTERED GRID */}
        <div className="grid lg:grid-cols-6 gap-14 place-items-center items-start">

          {/* ── LEFT: IMAGE ── */}
          <div className="lg:col-span-3 relative w-full">

            {/* Decorative Orbs */}
            <div className="absolute -z-10 -top-10 -left-10 w-72 h-72 bg-orange-200/30 rounded-full blur-[120px]" />
            <div className="absolute -z-10 -bottom-10 -right-6 w-52 h-52 bg-slate-100 rounded-full blur-3xl opacity-60" />

            {/* Image */}
            <div className="relative rounded-[28px] overflow-hidden shadow-2xl group aspect-[4/5]">
              <Image
                src={whyPhoto}
                alt="Why choose Avon Express"
                fill
               
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            </div>

            {/* Badge */}
            <div className="mt-4 flex items-center gap-3 px-5 py-3 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse flex-shrink-0" />
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-700">
                Trusted by Thousand families across India
              </p>
            </div>
          </div>

          {/* ── RIGHT: CONTENT ── */}
          <div className="lg:col-span-3 w-full space-y-8 text-center lg:text-left">

            {/* Heading */}
            <div className="space-y-5">

              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 flex items-center justify-center lg:justify-start gap-2">
                <span className="w-10 h-px bg-orange-600" />
                Our Strengths
                <span className="w-10 h-px bg-orange-600" />
              </p>

              <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter leading-tight">
                WHY CHOOSE
                <span className="text-orange-500"> AVON EXPRESS.</span>
              </h2>

              <div className="h-[2px] w-14 bg-orange-500 mx-auto lg:mx-0" />

              <p className="text-sm text-slate-500 leading-relaxed font-medium max-w-lg mx-auto lg:mx-0">
                The primary reason we have become the top choice for thousands of people is that,
                while delivering our moving services, we embrace a spirit of "care" at every moment
                and uphold the highest standards of "safety." We clarify every detail before starting
                the work; if everything is clear before the work begins, it benefits both the customer
                and the moving company. We have just one concern—"you," for whom your belongings hold
                deep emotional significance. That is why, to further strengthen our bond with you,
                we always prefer to go the extra mile.
              </p>
            </div>

            <div className="flex justify-center items-center gap-15 pt-8">

              {/* IBA LOGO */}
              <div className="relative flex items-center justify-center">
                <span className="absolute h-28 w-28 rounded-full border-4 border-blue-400/40 animate-ping [animation-delay:7.6s]" />
                <Image
                  src={IBAlogo}
                  alt="IBA Approved"
                  width={100}
                  height={100}
                  className="relative w-32 md:w-40 lg:w-48 h-auto object-contain"
                />
              </div>

              {/* COMPANY LOGO */}
              <div className="relative flex items-center justify-center">
                <span className="absolute h-28 w-28 rounded-full border-4 border-orange-400/40 animate-ping [animation-delay:7.6s]" />
                <Image
                  src={logo}
                  width={100}
                  height={100}
                  alt="Company Logo"
                  className="relative w-32 md:w-40 lg:w-51 h-auto object-contain"
                />
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Why;