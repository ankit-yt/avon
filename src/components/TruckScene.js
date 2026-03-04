// Can be a Server Component — pure CSS animations
export default function TruckScene() {
  return (
    <div
      className="w-full h-[420px] relative overflow-hidden"
      aria-hidden="true"
      role="img"
      aria-label="Animated truck driving scene"
    >
      {/* Sky */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg,#d8e8f0 0%,#eaf3f7 55%,#f4f2ee 100%)" }}
      />

      {/* Sun */}
      <div
        className="absolute top-10 right-20 w-12 h-12 rounded-full"
        style={{
          background: "radial-gradient(circle at 35% 35%,#ffe080,#ffb830)",
          boxShadow: "0 0 0 14px rgba(255,184,48,0.1),0 0 0 28px rgba(255,184,48,0.05)",
        }}
      />

      {/* Clouds */}
      <div className="absolute top-14 left-[15%] flex items-end gap-[-4px] opacity-70">
        <div className="w-12 h-8 rounded-full bg-white/80" />
        <div className="w-20 h-12 rounded-full bg-white/90 -ml-4" />
        <div className="w-10 h-7 rounded-full bg-white/80 -ml-3" />
      </div>
      <div className="absolute top-8 left-[45%] flex items-end gap-[-4px] opacity-50">
        <div className="w-8 h-6 rounded-full bg-white/80" />
        <div className="w-14 h-9 rounded-full bg-white/90 -ml-3" />
        <div className="w-8 h-5 rounded-full bg-white/70 -ml-2" />
      </div>

      {/* Mountains (SVG for precision) */}
      <svg
        className="absolute bottom-[118px] left-0 w-full"
        viewBox="0 0 800 160"
        preserveAspectRatio="none"
        style={{ height: "160px" }}
      >
        {/* Far mountains */}
        <polygon points="0,160 180,20 360,160" fill="#d4c8be" />
        <polygon points="120,160 340,0 560,160" fill="#e0d4ca" />
        <polygon points="380,160 560,30 740,160" fill="#d0c4b8" />
        <polygon points="600,160 740,50 900,160" fill="#d8ccbf" />
        {/* Snow caps */}
        <polygon points="340,0 320,40 360,40" fill="white" opacity="0.7" />
        <polygon points="180,20 163,55 197,55" fill="white" opacity="0.5" />
      </svg>

      {/* Grass strip */}
      <div
        className="absolute left-0 w-full"
        style={{
          bottom: "80px",
          height: "42px",
          background: "linear-gradient(180deg,#b8c878 0%,#a8ba68 100%)",
        }}
      />
      {/* Grass tufts */}
      <div
        className="absolute left-0 w-full"
        style={{
          bottom: "118px",
          height: "10px",
          background: "repeating-linear-gradient(90deg,transparent 0,transparent 14px,#b4c870 14px,#b4c870 16px,transparent 16px,transparent 20px,#a8bc68 20px,#a8bc68 23px,transparent 23px,transparent 30px)",
        }}
      />

      {/* Road */}
      <div
        className="absolute bottom-0 left-0 w-full"
        style={{
          height: "80px",
          background: "linear-gradient(180deg,#3a3632 0%,#2c2a26 100%)",
        }}
      >
        {/* Yellow edge line */}
        <div
          className="absolute top-0 left-0 w-full"
          style={{ height: "3px", background: "#f4c842" }}
        />
        {/* Road dashes */}
        <div
          className="absolute road-dash-anim"
          style={{
            top: "34px",
            left: 0,
            height: "8px",
            width: "200%",
            background: "repeating-linear-gradient(90deg,#f4f2ee 0,#f4f2ee 60px,transparent 60px,transparent 100px)",
          }}
        />
        {/* Road bottom edge */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-stone-700" />
      </div>

      {/* Road side posts */}
      {[10, 25, 42, 58, 75, 90].map((pct) => (
        <div
          key={pct}
          className="absolute"
          style={{ bottom: "80px", left: `${pct}%` }}
        >
          <div className="w-[5px] h-8 bg-stone-400 rounded-t-sm relative">
            <div className="absolute -top-1 -left-1 w-[7px] h-2 bg-accent rounded-sm" />
          </div>
        </div>
      ))}

      {/* Roadside trees */}
      {[8, 22, 68, 82].map((pct) => (
        <div
          key={pct}
          className="absolute flex flex-col items-center"
          style={{ bottom: "118px", left: `${pct}%` }}
        >
          <div
            className="rounded-full"
            style={{ width: "28px", height: "36px", background: "#7aaa48" }}
          />
          <div className="w-[4px] h-5 bg-stone-600" />
        </div>
      ))}

      {/* ── Truck SVG ── */}
      <div className="truck-anim" style={{ width: "340px", height: "130px" }}>
        <svg viewBox="0 0 340 130" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
          {/* Trailer body */}
          <rect x="0" y="18" width="215" height="86" rx="3" fill="#252220" />
          <rect x="2" y="20" width="211" height="82" rx="2" fill="#1a1816" />
          {/* Door split */}
          <line x1="107" y1="20" x2="107" y2="102" stroke="#333" strokeWidth="1.5" />
          {/* Handles */}
          <rect x="96" y="57" width="6" height="8" rx="2" fill="#4a4a4a" />
          <rect x="110" y="57" width="6" height="8" rx="2" fill="#4a4a4a" />
          {/* Accent stripe */}
          <rect x="0" y="38" width="215" height="5" fill="#e8380d" opacity="0.85" />
          {/* AVON branding */}
          <text x="28" y="78" fontFamily="Arial Black,sans-serif" fontSize="20" fontWeight="900" fill="#e8380d" letterSpacing="5" opacity="0.9">AVON</text>
          {/* Bottom rail */}
          <rect x="0" y="99" width="215" height="7" rx="2" fill="#333" />
          {/* Trailer–cab connector */}
          <rect x="211" y="90" width="12" height="12" rx="1" fill="#3a3632" />

          {/* Cab */}
          <path d="M218 28 L218 105 L308 105 L308 56 L288 28 Z" fill="#252220" />
          {/* Cab window */}
          <path d="M226 37 L258 37 L285 56 L226 56 Z" fill="#a8cce0" opacity="0.88" />
          {/* Window frame */}
          <path d="M226 37 L258 37 L285 56 L226 56 Z" fill="none" stroke="#2a2826" strokeWidth="1.5" />
          {/* Cab door panel */}
          <rect x="226" y="59" width="52" height="38" rx="2" fill="#1e1c1a" />
          {/* Door handle */}
          <rect x="268" y="73" width="6" height="7" rx="2" fill="#4a4640" />
          {/* Hood */}
          <rect x="285" y="82" width="23" height="23" rx="2" fill="#1a1816" />
          {/* Grille slats */}
          {[87, 92, 97, 102].map((y, i) => (
            <rect key={i} x="289" y={y} width="15" height="2" rx="1" fill="#3a3632" />
          ))}
          {/* Headlight */}
          <rect x="288" y="99" width="14" height="7" rx="1" fill="#ffe080" opacity="0.95" />
          {/* Light cone */}
          <path d="M302 103 L340 96 L340 110 Z" fill="#ffe080" opacity="0.1" />
          {/* Bumper */}
          <rect x="285" y="103" width="23" height="4" rx="1" fill="#333" />
          {/* Side mirror */}
          <rect x="216" y="44" width="7" height="10" rx="1" fill="#2a2826" />
          {/* Cab stripe */}
          <rect x="218" y="78" width="90" height="3" fill="#e8380d" opacity="0.65" />
          {/* Exhaust */}
          <rect x="244" y="16" width="5" height="16" rx="2" fill="#2a2826" />
          <rect x="245" y="12" width="4" height="6" rx="1" fill="#1a1816" />
          {/* Smoke puffs */}
          <circle cx="247" cy="10" r="5" fill="#bbb" className="smoke-1" />
          <circle cx="251" cy="5" r="4" fill="#ccc" className="smoke-2" />
          <circle cx="245" cy="1" r="3.5" fill="#ddd" className="smoke-3" />

          {/* ── Wheel group (reusable) ── */}
          {/* Front wheel */}
          <g transform="translate(270,108)" style={{ transformOrigin: "270px 108px" }}>
            <circle r="18" fill="#1a1816" style={{ animation: "wheel-spin 0.5s linear infinite", transformOrigin: "0 0" }} />
            <circle r="18" fill="none" stroke="#e8380d" strokeWidth="2" style={{ animation: "wheel-spin 0.5s linear infinite", transformOrigin: "0 0" }} />
            <circle r="11" fill="#252220" style={{ animation: "wheel-spin 0.5s linear infinite", transformOrigin: "0 0" }} />
            <circle r="4" fill="#4a4a4a" style={{ animation: "wheel-spin 0.5s linear infinite", transformOrigin: "0 0" }} />
            <line x1="-11" y1="0" x2="11" y2="0" stroke="#3a3a3a" strokeWidth="1.5" style={{ animation: "wheel-spin 0.5s linear infinite", transformOrigin: "0 0" }} />
            <line x1="0" y1="-11" x2="0" y2="11" stroke="#3a3a3a" strokeWidth="1.5" style={{ animation: "wheel-spin 0.5s linear infinite", transformOrigin: "0 0" }} />
          </g>

          {/* Rear wheel pair 1 */}
          <g transform="translate(42,108)" style={{ transformOrigin: "42px 108px" }}>
            <circle r="18" fill="#1a1816" style={{ animation: "wheel-spin 0.5s linear infinite", transformOrigin: "0 0" }} />
            <circle r="18" fill="none" stroke="#e8380d" strokeWidth="2" style={{ animation: "wheel-spin 0.5s linear infinite", transformOrigin: "0 0" }} />
            <circle r="11" fill="#252220" style={{ animation: "wheel-spin 0.5s linear infinite", transformOrigin: "0 0" }} />
            <circle r="4" fill="#4a4a4a" style={{ animation: "wheel-spin 0.5s linear infinite", transformOrigin: "0 0" }} />
            <line x1="-11" y1="0" x2="11" y2="0" stroke="#3a3a3a" strokeWidth="1.5" style={{ animation: "wheel-spin 0.5s linear infinite", transformOrigin: "0 0" }} />
            <line x1="0" y1="-11" x2="0" y2="11" stroke="#3a3a3a" strokeWidth="1.5" style={{ animation: "wheel-spin 0.5s linear infinite", transformOrigin: "0 0" }} />
          </g>

          {/* Rear wheel pair 2 */}
          <g transform="translate(174,108)" style={{ transformOrigin: "174px 108px" }}>
            <circle r="18" fill="#1a1816" style={{ animation: "wheel-spin 0.5s linear infinite", transformOrigin: "0 0" }} />
            <circle r="18" fill="none" stroke="#e8380d" strokeWidth="2" style={{ animation: "wheel-spin 0.5s linear infinite", transformOrigin: "0 0" }} />
            <circle r="11" fill="#252220" style={{ animation: "wheel-spin 0.5s linear infinite", transformOrigin: "0 0" }} />
            <circle r="4" fill="#4a4a4a" style={{ animation: "wheel-spin 0.5s linear infinite", transformOrigin: "0 0" }} />
            <line x1="-11" y1="0" x2="11" y2="0" stroke="#3a3a3a" strokeWidth="1.5" style={{ animation: "wheel-spin 0.5s linear infinite", transformOrigin: "0 0" }} />
            <line x1="0" y1="-11" x2="0" y2="11" stroke="#3a3a3a" strokeWidth="1.5" style={{ animation: "wheel-spin 0.5s linear infinite", transformOrigin: "0 0" }} />
          </g>
        </svg>
      </div>

      {/* Side gradient fade */}
      <div
        className="absolute inset-0 pointer-events-none z-20"
        style={{ background: "linear-gradient(90deg, #f4f2ee 0%, transparent 18%, transparent 80%, #f4f2ee 100%)" }}
      />
    </div>
  );
}
