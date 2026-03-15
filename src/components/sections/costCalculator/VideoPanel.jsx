// components/cost-calculator/VideoPanel.jsx
// SERVER COMPONENT — no hooks, no "use client"
// Renders the right-side video panel with trust signals and overlay content.

const TRUST_POINTS = [
  { emoji: "🏆", stat: "12,000+", label: "Happy Families Moved" },
  { emoji: "⭐", stat: "4.9 / 5",  label: "Average Google Rating" },
  { emoji: "🛡️", stat: "100%",     label: "Goods Insured in Transit" },
  { emoji: "⚡", stat: "30 min",   label: "Response Guarantee" },
];

const BADGES = [
  "Licensed & Verified",
  "No Hidden Charges",
  "GPS-Tracked Trucks",
  "Pan-India Network",
];

export default function VideoPanel() {
  return (
    <div className="relative h-full min-h-[520px] lg:min-h-0 flex flex-col rounded-[28px] overflow-hidden bg-slate-900">

      {/* ── Video ── */}
      <div className="absolute inset-0">
        <video
          src="/videos/moving-showcase.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="@/assets/images/moving-poster.jpg"
          className="w-full h-full object-cover"
          aria-label="Professional movers carefully packing and transporting household goods"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/30 to-transparent" />
      </div>

      {/* ── Top badge row ── */}
      <div className="relative z-10 p-6 flex flex-wrap gap-2">
        {BADGES.map((b) => (
          <span
            key={b}
            className="text-[10px] font-bold uppercase tracking-wider text-white/70 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1"
          >
            {b}
          </span>
        ))}
      </div>

      {/* ── Spacer ── */}
      <div className="flex-1" />

      {/* ── Bottom content ── */}
      <div className="relative z-10 p-6 space-y-5">

        {/* Headline */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-orange-400 mb-2">
            Why choose us
          </p>
          <h2 className="text-2xl font-black text-white leading-tight tracking-tight">
            Moving made<br />
            <span className="text-orange-400">effortless.</span>
          </h2>
          <p className="text-slate-400 text-xs mt-2 leading-relaxed max-w-xs">
            Trusted by thousands of families across India — transparent pricing, zero surprises.
          </p>
        </div>

        {/* Trust grid */}
        <div className="grid grid-cols-2 gap-2.5">
          {TRUST_POINTS.map((tp) => (
            <div
              key={tp.stat}
              className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-xl px-3.5 py-3"
            >
              <p className="text-base mb-0.5">{tp.emoji}</p>
              <p className="text-sm font-black text-white leading-none">{tp.stat}</p>
              <p className="text-[10px] text-slate-400 mt-0.5 font-medium leading-tight">{tp.label}</p>
            </div>
          ))}
        </div>

        {/* CTA nudge */}
        <div className="flex items-center gap-2.5 bg-orange-500/15 border border-orange-500/30 rounded-xl px-4 py-3">
          <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse shrink-0" />
          <p className="text-xs text-orange-200 font-bold">
            <span className="text-orange-400">23 enquiries</span> submitted in the last hour
          </p>
        </div>
      </div>
    </div>
  );
}