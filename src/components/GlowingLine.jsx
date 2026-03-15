export function GlowingLine({ height = 20, speed = "2.8s", className = "" }) {
  return (
    <>
      <style>{`
        @keyframes zen-sweep {
          0%   { transform: translateX(-100%); opacity: 0; }
          10%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { transform: translateX(200%); opacity: 0; }
        }
        @keyframes zen-pulse {
          0%, 100% { opacity: 0.15; }
          50%       { opacity: 0.45; }
        }
        .zen-beam  { animation: zen-sweep ${speed} cubic-bezier(0.4,0,0.2,1) infinite; }
        .zen-beam2 { animation: zen-sweep ${speed} cubic-bezier(0.4,0,0.2,1) infinite; opacity: 0.6; }
        .zen-base  { animation: zen-pulse 3s ease-in-out infinite; }
        .zen-dot   { animation: zen-sweep ${speed} cubic-bezier(0.4,0,0.2,1) infinite; }
        .zen-dot2  { animation: zen-sweep ${speed} cubic-bezier(0.4,0,0.2,1) infinite; animation-delay: 0.4s; }
      `}</style>

      <div
        className={`relative overflow-hidden ${className}`}
        style={{ height, borderRadius: height / 2, background: "rgba(234,88,12,0.08)" }}
      >
        {/* ambient pulse */}
        <div className="zen-base absolute inset-0"
          style={{ background: "linear-gradient(90deg, transparent, rgba(234,88,12,0.18) 50%, transparent)" }} />

        {/* wide soft beam */}
        <div className="zen-beam absolute top-0 left-0 h-full"
          style={{ width: "40%", background: "linear-gradient(90deg, transparent, rgba(251,146,60,0.6) 40%, #f97316 50%, rgba(251,146,60,0.6) 60%, transparent)", filter: "blur(4px)" }} />

        {/* bright core streak */}
        <div className="zen-beam2 absolute left-0"
          style={{ top: "25%", height: "50%", width: "30%", background: "linear-gradient(90deg, transparent, rgba(255,200,100,0.9) 45%, #fff8f0 50%, rgba(255,200,100,0.9) 55%, transparent)" }} />

        {/* leading ember dot */}
        <div className="zen-dot absolute"
          style={{ top: "30%", left: 0, width: 6, height: 6, borderRadius: "50%", background: "#fff", boxShadow: "0 0 6px 3px rgba(251,146,60,0.9)" }} />
        <div className="zen-dot2 absolute"
          style={{ top: "50%", left: 0, width: 4, height: 4, borderRadius: "50%", background: "#fff", boxShadow: "0 0 4px 2px rgba(251,146,60,0.7)" }} />
      </div>
    </>
  );
}