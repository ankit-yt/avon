export function GlowingLine({ height = 20, speed = "2.8s", className = "" }) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        height,
        borderRadius: height / 2,
        background: "rgba(234,88,12,0.08)",
        "--zen-speed": speed,
      }}
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
  );
}
