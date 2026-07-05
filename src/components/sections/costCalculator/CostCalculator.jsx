// ─── Enquiry.jsx — SERVER COMPONENT ──────────────────────────────────────────
// All static markup lives here for maximum SEO / RSC streaming.
// Interactive parts are delegated to EnquiryForm (client).

import Calculator from "./Calculator";


// ── Structured data (JSON-LD) for rich results ──────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Packers & Movers – Free Quotation",
  description:
    "Get an instant estimate and a free quotation for home, office or vehicle relocation anywhere in India. Verified movers, transparent pricing, zero hidden costs.",
  provider: {
    "@type": "MovingCompany",
    name: "Your Moving Company",           // ← replace with real name
    telephone: "+919737977001",
    areaServed: "IN",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    description: "Free, no-obligation relocation quote",
  },
};


export const metadata = {
  title: "Get a Free Moving Quote | Instant Relocation Estimate",
  description:
    "Calculate your moving cost instantly and connect with verified packers & movers. Home shifting, office relocation, vehicle transport — transparent pricing, no hidden fees.",
  keywords: [
    "packers and movers",
    "free moving quote",
    "relocation estimate",
    "home shifting cost",
    "office moving india",
  ],
  openGraph: {
    title: "Free Moving Quote — Instant Estimate",
    description:
      "Get a transparent, no-obligation moving estimate in seconds. Verified packers, insured moves.",
    type: "website",
  },
};

export default function Enquiry() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section
        id="get-quote"
        aria-labelledby="enquiry-heading"
        className="relative py-6 md:py-5 bg-[#FAFAF8] overflow-hidden"
      >
        {/* ── Subtle grid texture ── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"

        />

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

          <header className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-4 flex items-center justify-center gap-2">
              <span className="w-8  bg-orange-600" />
              <span className="w-10 h-px bg-orange-600" /> Get instant Enquiry <span className="w-10 h-px bg-orange-600" />
              <span className="w-8  bg-orange-600" />
            </h2>
            <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter leading-tight mb-4">
              ESTIMATED <span className="text-orange-500">&nbsp;COST</span>
            </h3>

          </header>

          {/* ── Two-column layout ── */}
          <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 items-stretch">
            
            {/* Calculator panel */}
            <div className="lg:col-span-4">
              <Calculator />
            </div>

            {/* video panel */}
            <aside
              aria-hidden="true"
              className="lg:col-span-7 relative p-3 bg-slate-900 rounded-[28px] overflow-hidden min-h-70 lg:min-h-0 shadow-2xl"
            >
            <video
  src="/videos/10-compressed.mp4"
  autoPlay
  loop
  controls
  muted
  playsInline
  preload="metadata"
  className="w-full h-full object-contain"
/>
            </aside>
           
          </div>
        </div>
      </section>
    </>
  );
}