import React from 'react';
import { HiOutlineExternalLink } from "react-icons/hi";
import mediaImage from "@/assets/images/Home/News.webp";
import Image from 'next/image';

const getCurrentMonthYear = () => {
  const date = new Date();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  return `${month} ${year}`;
};

const NEWS_ITEMS = [
  {
    date: getCurrentMonthYear(),
    category: "Press Media Release",
    title: "🏆 Media Coverage and Brand Presence 📢 Company Highlights",
    description:
      "Avon Express Packers and Movers is a rapidly growing logistics brand, renowned across India for its reliable shifting services. Our company has established a strong presence in the market through its high-quality services, secure deliveries, and unwavering dedication to customer satisfaction. Our services are prominently featured on digital platforms and within local business networks, where our professionalism and punctuality have garnered significant appreciation—thereby ensuring complete transparency and peace of mind throughout the entire shifting process."
  },
  {
    date: getCurrentMonthYear(),
    category: "Corporate",
    title: "⚠️ Beware of Fake Packers and Movers.",
    description:
      "We consistently provide timely updates warning that numerous fraudulent packers and movers companies are currently active in the market, engaging in fraud by luring customers with the promise of low prices. These companies possess neither proper offices nor trained staff, as a result of which customers often suffer heavy losses."
  }
];

function Media() {
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

        {/* --- Section Header --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">

          {/* Button */}
          <div className="order-2 md:order-1">
            <button className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-slate-900 border-b-2 border-slate-900 pb-2 transition-all hover:text-orange-600 hover:border-orange-600">
              View All Updates <HiOutlineExternalLink className="text-base" />
            </button>
          </div>

          {/* Headline */}
          <div className="max-w-3xl text-left md:text-right order-1 md:order-2">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-4 flex items-center justify-start md:justify-end gap-2">
              Newsroom <span className="w-10 h-px bg-orange-600" />
            </h2>
            <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter leading-tight">
              PRESS
              <span className="text-orange-500"> AND MEDIA.</span>
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* --- LEFT: News Feed --- */}
          <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
            {NEWS_ITEMS.map((item, index) => (
              <div key={index} className="group cursor-pointer border-b border-slate-200 pb-6 last:border-0">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
                    {item.date} — {item.category}
                  </span>
                  <HiOutlineArrowRight className="text-slate-300 group-hover:text-orange-600 group-hover:translate-x-2 transition-all" />
                </div>
                <h5 className="text-lg font-extrabold text-slate-900 tracking-tighter mb-3 group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h5>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* --- RIGHT: Featured Press Release --- */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative group cursor-pointer">
              
              <div className="aspect-video overflow-hidden rounded-[28px] bg-slate-900 mb-6 relative border border-slate-200 shadow-2xl">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:24px_24px] z-10" />
                
                <Image
                  className="object-cover w-full h-full scale-110 group-hover:scale-100 transition-transform duration-[1.5s] ease-out"
                  src={mediaImage}
                  alt="Featured News"
                  fill
                 
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>

              <div className="p-6 bg-white border border-slate-200 rounded-[28px] shadow-sm mt-6">
                <h6 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900 mb-2">
                  Media Inquiries
                </h6>

                <p className="text-xs text-slate-500 font-medium mb-4">
                  For interview, official statement, contact our team.
                </p>

                <a
                  href="mailto:media@avonexpresspackersandmovers.co.in"
                  className="text-xs font-black text-orange-600 uppercase tracking-[0.2em] hover:underline"
                >
                  media@avonexpresspackersandmovers.co.in
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function HiOutlineArrowRight({ className }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default Media;