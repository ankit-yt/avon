import { SITE, STATS } from '@/lib/data'
import React from 'react'

function About() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="h-screen bg-stone-50 overflow-hidden relative"
    >
      {/* Diagonal background shape */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute right-0 top-0 w-[55%] h-full bg-stone-100/60 hidden lg:block"
          style={{ clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-14 relative z-10">
        <div className="grid lg:grid-cols-2 gap-0 items-center min-h-[calc(100vh-108px)]">

          {/* Left content */}
          <div className="py-16 lg:py-24">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-7">
              <span className="bg-accent text-white font-mono text-[9px] tracking-[0.15em] uppercase px-3 py-[5px] clip-chamfer-sm">
                IBA Approved
              </span>
              <span className="tag">Est. Since 1990s</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-[clamp(64px,9vw,120px)] leading-[0.92] tracking-[0.01em] uppercase mb-8">
              Move
              <em className="not-italic text-accent block">Without</em>
              Worry.
            </h1>

            <p className="text-[16px] leading-[1.7] text-stone-400 max-w-[400px] mb-10 font-light">
              India&apos;s trusted packers &amp; movers. We handle your household goods,
              vehicles, and offices with precision — so you don&apos;t have to worry about a thing.
            </p>

            {/* CTAs */}
            <div className="flex gap-4 flex-wrap">
              <a
                href={SITE.whatsapp.quote}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-white font-mono text-[11px] tracking-[0.1em] uppercase px-8 py-4 clip-chamfer hover:bg-accent-dark transition-colors"
                aria-label="Get a free quote"
              >
                Free Quote
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center gap-2 border border-stone-900 text-stone-900 font-mono text-[11px] tracking-[0.1em] uppercase px-8 py-4 hover:bg-stone-900 hover:text-stone-50 transition-colors"
                aria-label="Call us"
              >
                Call Now
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-6 mt-14 pt-8 border-t border-stone-200">
              {STATS.map(({ num, label }) => (
                <div key={label}>
                  <div className="font-display text-[32px] text-stone-900 leading-none">
                    {num}
                  </div>
                  <div className="font-mono text-[9px] tracking-[0.12em] uppercase text-stone-400 mt-1">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        
         
        </div>
      </div>
    </section>
  )
}

export default About
