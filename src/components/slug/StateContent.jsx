import Link from "next/link";

function formatStateName(state) {
  return state
    .split("-")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

const CARDS = [
  {
    prefix: "packers-and-movers-in",
    label: (name) => `Packers and Movers in ${name}`,
    eyebrow: "Verified & Trusted",
    desc: (name) =>
      `Find safe, reliable and affordable packers & movers across all cities in ${name}. Transparent pricing, zero hidden costs.`,
    icon: "🚚",
     badge: (name) => `AVON IN ${name.toUpperCase()}`,
  },
  {
    prefix: "iba-approved-packers-and-movers-in",
    label: (name) => `IBA Approved Packers and Movers in ${name}`,
    eyebrow: "IBA Certified",
    desc: (name) =>
      `IBA-certified movers for bank employee relocations across ${name}.`,
    icon: "✅",
    badge: (name) => `AVON IN ${name.toUpperCase()}`,
  },
];

export default function StateContent({ state }) {
  const stateName = formatStateName(state);

  return (
    <section className="relative bg-[#FAFAF8] overflow-hidden py-6 md:py-10">

      {/* Warm blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 w-125 h-125 rounded-full bg-orange-200/30 blur-[120px]"
      />

      <div className="relative z-10 max-w-330 mx-auto px-5 sm:px-8 lg:px-14">

        {/* Header */}
        <header className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-4 flex items-center justify-center gap-2">
            <span className="w-10 h-px bg-orange-600" />
            Choose a Service
            <span className="w-10 h-px bg-orange-600" />
          </h2>
          <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter leading-tight">
            WELCOME IN{" "}
            <span className="text-orange-500">{stateName.toUpperCase()}</span>
          </h3>
        </header>

        {/* Two cards */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {CARDS.map(({ prefix, label, eyebrow, desc, icon, badge }) => (
            <Link
              key={prefix}
              href={`/${prefix}-${state}`}
              className="group relative bg-white border border-slate-200 rounded-[28px] p-8 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all duration-300 overflow-hidden flex flex-col gap-5"
            >
              {/* Hover blob */}
              <div className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 rounded-full bg-orange-100/60 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div className="w-12 h-12 bg-orange-600 rounded-[14px] flex items-center justify-center text-2xl shadow-sm">
                {icon}
              </div>

              {/* Eyebrow */}
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600">
                {eyebrow}
              </p>

              {/* Title */}
              <h4 className="text-xl font-extrabold text-slate-900 tracking-tight leading-snug">
                {label(stateName)}
              </h4>

              {/* Description */}
              <p className="text-sm text-slate-500 font-medium leading-relaxed flex-1">
                {desc(stateName)}
              </p>

              {/* Badge + Arrow */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="inline-flex items-center gap-1.5 bg-orange-50 border border-orange-200 rounded-full px-3 py-1 text-[10px] font-bold text-orange-600">
                  {badge(stateName)}
                </span>
                <span className="text-orange-500 font-black text-lg group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}