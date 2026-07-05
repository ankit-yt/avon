import { FaLeaf, FaRecycle, FaTruck, FaHome, FaCheckCircle, FaCircle } from "react-icons/fa";
import { MdSanitizer, MdEco } from "react-icons/md";

const sections = [
  {
    icon: <MdSanitizer size={20} />,
    title: "Our Clean and Hygienic Packing Process",
    accent: "orange",
    type: "check",
    items: [
      "Use of new, dust-free packing materials",
      "Sanitized cartons and wrapping sheets",
      "Clean gloves and uniforms for staff",
      "No reuse of dirty or damaged materials",
      "Proper disposal of packing waste",
    ],
    note: "Your goods are handled with maximum care and cleanliness, ensuring a safe relocation experience.",
  },
  {
    icon: <MdEco size={20} />,
    title: "Eco-Friendly Moving Approach",
    accent: "green",
    type: "check",
    items: [
      "Recyclable packing materials",
      "Minimal plastic usage",
      "Waste segregation during packing",
      "Responsible disposal of unwanted items",
    ],
    note: "Our goal is to reduce environmental impact while delivering top-quality service.",
  },
  {
    icon: <FaTruck size={18} />,
    title: "Clean Loading and Transportation",
    accent: "orange",
    type: "bullet",
    items: [
      "Clean and well-maintained trucks",
      "Dust-free loading process",
      "Covered vehicles to protect from dirt and pollution",
      "Regular sanitization of transport vehicles",
    ],
    note: "We ensure your goods remain clean from origin to destination.",
  },
  {
    icon: <FaHome size={18} />,
    title: "Clean Unloading and Setup",
    accent: "green",
    type: "bullet",
    items: [
      "Clean unloading area before placing items",
      "Organized placement of goods",
      "Removal of packing waste after delivery",
      "Optional cleaning support after shifting",
    ],
    note: "We leave your new home or office clean and ready to use.",
  },
];

export default function SwachhBharat() {
  return (
    <section
      id="swachh-bharat"
      className="relative py-6 md:py-5 bg-[#FAFAF8] overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute -top-32 -left-32 w-125 h-125 rounded-full bg-orange-200/30 blur-[120px] pointer-events-none" />
       <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-32 w-125 h-125 rounded-full bg-orange-200/30 blur-[120px]"
      />

      <div className="relative z-10 max-w-330 mx-auto px-5 sm:px-8 lg:px-14">

        {/* ── HEADER ── */}
        <header className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-10 bg-orange-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600">
              Swachh Bharat Initiative
            </span>
            <span className="h-px w-10 bg-orange-600" />
          </div>

          <h2 className="text-4xl md:text-6xl uppercase font-extrabold text-slate-900 tracking-tighter leading-tight mb-4">
            Clean &amp;{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-orange-500">Hygienic</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-orange-100 rounded -z-0" />
            </span>{" "}
            Moving
          </h2>

          <p className="text-sm text-slate-500 leading-relaxed max-w-xl mx-auto font-medium">
            We believe relocation should be safe, clean, and eco-friendly — designed in the spirit of{" "}
            <span className="font-semibold text-slate-700">Swachh Bharat</span>, maintaining hygiene at
            every step of the moving process.
          </p>
        </header>

        {/* ── MAIN GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 items-stretch">

          {/* ── LEFT CONTENT ── */}
          <div className="lg:col-span-4 space-y-5 h-120 overflow-y-auto pr-2 custom-scroll">

            {sections.map((sec, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Card header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      sec.accent === "orange"
                        ? "bg-orange-100 text-orange-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {sec.icon}
                  </div>
                  <h4 className="text-sm font-bold text-slate-800 leading-tight">
                    {sec.title}
                  </h4>
                </div>

                {/* Items */}
                <ul className="space-y-2">
                  {sec.items.map((item, i) =>
                    sec.type === "check" ? (
                      <li key={i} className="flex items-start gap-2.5">
                        <FaCheckCircle
                          size={13}
                          className={`mt-0.5 flex-shrink-0 ${
                            sec.accent === "orange" ? "text-orange-400" : "text-green-500"
                          }`}
                        />
                        <span className="text-xs text-slate-600 leading-relaxed">{item}</span>
                      </li>
                    ) : (
                      <li key={i} className="flex items-start gap-2.5">
                        <FaCircle
                          size={5}
                          className="mt-1.5 flex-shrink-0 text-slate-300"
                        />
                        <span className="text-xs text-slate-600 leading-relaxed">{item}</span>
                      </li>
                    )
                  )}
                </ul>

                {/* Note */}
                {sec.note && (
                  <p className="mt-3 text-[11px] text-slate-400 leading-relaxed border-t border-slate-100 pt-3">
                    {sec.note}
                  </p>
                )}
              </div>
            ))}

            {/* CTA Banner */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 p-5 shadow-lg shadow-orange-200">
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10" />
              <div className="absolute bottom-2 -left-4 w-16 h-16 rounded-full bg-white/5" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <FaLeaf size={14} className="text-white/80" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/70">
                    Our Commitment
                  </span>
                </div>
                <p className="text-sm font-semibold text-white leading-snug">
                  Choose Avon Express Packers and Movers for a safe, hygienic, and eco-conscious relocation.
                </p>
                <p className="text-xs text-orange-100 mt-2 font-medium">
                  Together, let's move homes and keep India clean.
                </p>
              </div>
            </div>

          </div>

          {/* ── RIGHT VIDEO ── */}
          <aside className="lg:col-span-7 relative rounded-[28px] overflow-hidden shadow-2xl bg-slate-900 min-h-[440px]">

            {/* Subtle top label */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[10px] font-black text-white/80 uppercase tracking-[0.4em]">
                AVON EXPRESS
              </span>
            </div>

            {/* Corner accent */}
            <div className="absolute bottom-4 right-4 z-20">
              <div className="flex items-center gap-2 bg-orange-500/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <FaRecycle size={10} className="text-white" />
                <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">
                  Eco-Friendly
                </span>
              </div>
            </div>

            <video
              src="/videos/15_compressed.mp4"
              autoPlay
              loop
              muted
              controls
              playsInline
              className="w-full h-full object-cover"
            />

          </aside>
        </div>

      </div>
    </section>
  );
}