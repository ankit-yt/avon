import Link from "next/link";

function RouteCard({ from, to }) {
  const fromSlug = from.toLowerCase().replace(/\s+/g, "-");
  const toSlug = to.toLowerCase().replace(/\s+/g, "-");
  const href = `/transport/${fromSlug}-to-${toSlug}`;

  return (
    <Link
      href={href}
      className="group relative flex items-center justify-between bg-white border border-slate-200 rounded-[18px] px-5 py-4 shadow-sm hover:shadow-md hover:border-orange-300 hover:bg-orange-50 transition-all duration-200"
    >
      <div className="flex items-center gap-3 min-w-0">
        <span className="shrink-0 w-8 h-8 rounded-full bg-orange-100 group-hover:bg-orange-200 flex items-center justify-center transition-colors duration-200">
          🚚
        </span>
        <div className="min-w-0">
          <p className="text-xs font-black text-slate-900 truncate leading-tight">
            {from}
          </p>
          <p className="text-[10px] font-semibold text-slate-400 leading-tight mt-0.5">Origin</p>
        </div>
      </div>

      {/* Arrow */}
      <div className="flex items-center gap-1 px-3 shrink-0">
        <span className="w-8 h-px bg-slate-300 group-hover:bg-orange-400 transition-colors duration-200" />
        <svg className="w-3 h-3 text-slate-400 group-hover:text-orange-500 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>

      <div className="flex items-center gap-3 min-w-0">
        <div className="min-w-0 text-right">
          <p className="text-xs font-black text-slate-900 truncate leading-tight">
            {to}
          </p>
          <p className="text-[10px] font-semibold text-slate-400 leading-tight mt-0.5">Destination</p>
        </div>
        <span className="shrink-0 w-8 h-8 rounded-full bg-green-100 group-hover:bg-green-200 flex items-center justify-center transition-colors duration-200">
          📍
        </span>
      </div>

      {/* Hover indicator */}
      <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </span>
    </Link>
  );
}

export default RouteCard