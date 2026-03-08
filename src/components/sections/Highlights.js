import {
  HiOutlineCreditCard,
  HiOutlineDocumentText,
  HiOutlineLocationMarker,
  HiOutlineBell,
  HiOutlineVideoCamera,
  HiOutlineStar,
} from "react-icons/hi";
import { MdOutlineRateReview, MdOutlinePayment } from "react-icons/md";
import { GiClick } from "react-icons/gi";

import CornerAccents from "./CornerAccents";

const HIGHLIGHTS = [
  {
    title: "Write a Reviews",
    desc: "Secure, cashless UPI and card transactions.",
    icon: <MdOutlineRateReview />,
    floatDelay: "0s",
    pulseDelay: "0s",
    orbitDuration: "18s",
    orbitReverseDuration: "28s",
  },
  {
    title: "Bill For Claim",
    desc: "Authentic GST invoices for fast HR reimbursements.",
    icon: <HiOutlineDocumentText />,
    floatDelay: "0.4s",
    pulseDelay: "0.4s",
    orbitDuration: "20s",
    orbitReverseDuration: "30s",
  },
  {
    title: "Real Time Tracking",
    desc: "Real-time telemetry of your goods in transit.",
    icon: <HiOutlineLocationMarker />,
    floatDelay: "0.8s",
    pulseDelay: "0.8s",
    orbitDuration: "22s",
    orbitReverseDuration: "32s",
  },
  {
    title: "Regular Updates",
    desc: "Automated SMS & WhatsApp milestone alerts.",
    icon: <HiOutlineBell />,
    floatDelay: "1.2s",
    pulseDelay: "1.2s",
    orbitDuration: "17s",
    orbitReverseDuration: "26s",
  },
  {
    title: "Video Call Survey",
    desc: "Instant, accurate quotes via smartphone camera.",
    icon: <HiOutlineVideoCamera />,
    floatDelay: "1.6s",
    pulseDelay: "1.6s",
    orbitDuration: "19s",
    orbitReverseDuration: "29s",
  },
  {
    title: "Check Reviews",
    desc: "Uncensored feedback from 10,000+ happy clients.",
    icon: <HiOutlineStar />,
    floatDelay: "2s",
    pulseDelay: "2s",
    orbitDuration: "21s",
    orbitReverseDuration: "31s",
  },
  {
    title: "Online Payment",
    desc: "Secure and fast digital payments.",
    icon: <MdOutlinePayment />,
    floatDelay: "2.4s",
    pulseDelay: "2.4s",
    orbitDuration: "16s",
    orbitReverseDuration: "25s",
  },
  {
    title: "Book Us",
    desc: "Quick and easy service booking.",
    icon: <GiClick />,
    floatDelay: "2.8s",
    pulseDelay: "2.8s",
    orbitDuration: "23s",
    orbitReverseDuration: "33s",
  },
];

function Highlights() {
  return (
    <section
      style={{
        position: "relative",
        padding: "100px 0 120px",
        overflow: "hidden",
        fontFamily: "'Syne', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        /* ── Keyframes ── */
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }

        @keyframes scanLine {
          0%   { transform: translateY(-100%); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }

        @keyframes rotateDash {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        @keyframes rotateDashReverse {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }

        @keyframes nodePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(249,115,22,0.5), 0 0 0 0 rgba(249,115,22,0.2); }
          50%       { box-shadow: 0 0 0 10px rgba(249,115,22,0), 0 0 0 20px rgba(249,115,22,0); }
        }

        @keyframes gridPulse {
          0%, 100% { opacity: 0.04; }
          50%       { opacity: 0.09; }
        }

        @keyframes centralGlow {
          0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
          50%       { opacity: 0.8; transform: translate(-50%, -50%) scale(1.1); }
        }

        /* CSS-only floating particles using pseudo-elements + box-shadow trick */
        @keyframes particleDrift {
          0%   { transform: translate(0, 0); }
          25%  { transform: translate(30px, -20px); }
          50%  { transform: translate(-20px, -40px); }
          75%  { transform: translate(-40px, 10px); }
          100% { transform: translate(0, 0); }
        }

        .hl-particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }

        /* Generate 12 particle dots using pseudo-elements on sibling spans */
        .hl-particle {
          position: absolute;
          border-radius: 50%;
          background: rgba(249, 115, 22, 0.25);
          animation: particleDrift linear infinite;
        }

        /* ── Card ── */
        .hl-card {
          animation: floatCard 4s ease-in-out infinite;
          cursor: default;
        }

        .hl-card:hover .hl-icon-wrap {
          background: #f97316 !important;
          color: white !important;
          box-shadow: 0 4px 20px rgba(249,115,22,0.5) !important;
        }

        .hl-card:hover .hl-title {
          color: #ea580c !important;
        }

        .hl-card:hover .hl-orbit-outer {
          border-color: rgba(249,115,22,0.5) !important;
        }

        .hl-card:hover .hl-orbit-inner {
          border-color: rgba(249,115,22,0.3) !important;
        }

        .hl-card:hover .hl-scan {
          animation: scanLine 1.8s linear infinite !important;
        }
      `}</style>

      {/* CSS-only particles */}
      <div className="hl-particles" aria-hidden="true">
        {[
          { w:3, h:3, top:"10%", left:"5%",  dur:"9s",  delay:"0s" },
          { w:2, h:2, top:"20%", left:"80%", dur:"12s", delay:"1s" },
          { w:4, h:4, top:"35%", left:"15%", dur:"8s",  delay:"2s" },
          { w:2, h:2, top:"60%", left:"90%", dur:"14s", delay:"0.5s" },
          { w:3, h:3, top:"75%", left:"40%", dur:"10s", delay:"3s" },
          { w:2, h:2, top:"85%", left:"65%", dur:"11s", delay:"1.5s" },
          { w:3, h:3, top:"50%", left:"50%", dur:"13s", delay:"2.5s" },
          { w:2, h:2, top:"15%", left:"60%", dur:"7s",  delay:"4s" },
          { w:4, h:4, top:"45%", left:"25%", dur:"15s", delay:"0.8s" },
          { w:2, h:2, top:"90%", left:"10%", dur:"9s",  delay:"3.5s" },
          { w:3, h:3, top:"5%",  left:"45%", dur:"11s", delay:"1.2s" },
          { w:2, h:2, top:"70%", left:"75%", dur:"8s",  delay:"2.2s" },
        ].map((p, i) => (
          <span
            key={i}
            className="hl-particle"
            style={{
              width: p.w,
              height: p.h,
              top: p.top,
              left: p.left,
              animationDuration: p.dur,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(249,115,22,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          animation: "gridPulse 4s ease-in-out infinite",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Central radial glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "900px",
          height: "900px",
          background:
            "radial-gradient(circle, rgba(251,146,60,0.18) 0%, rgba(249,115,22,0.07) 40%, transparent 70%)",
          borderRadius: "50%",
          animation: "centralGlow 5s ease-in-out infinite",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <CornerAccents size={800} thick={1} />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 40,
            justifyItems: "center",
          }}
        >
          {HIGHLIGHTS.map((item, index) => (
            <div
              key={index}
              className="hl-card"
              style={{
                position: "relative",
                width: 240,
                height: 240,
                animationDelay: `${index * 0.4}s`,
              }}
            >
              {/* Outer orbit ring */}
              <div
                className="hl-orbit-outer"
                style={{
                  position: "absolute",
                  inset: -16,
                  borderRadius: "50%",
                  border: "1px dashed rgba(249,115,22,0.2)",
                  animation: `rotateDash ${item.orbitDuration} linear infinite`,
                  transition: "border-color 0.4s",
                }}
              >
                {/* Orbiting dot */}
                <span
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "100%",
                    marginLeft: -5,
                    marginTop: -5,
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "#f97316",
                    boxShadow: "0 0 8px rgba(249,115,22,0.8)",
                  }}
                />
              </div>

              {/* Inner orbit ring */}
              <div
                className="hl-orbit-inner"
                style={{
                  position: "absolute",
                  inset: -32,
                  borderRadius: "50%",
                  border: "1px dashed rgba(249,115,22,0.1)",
                  animation: `rotateDashReverse ${item.orbitReverseDuration} linear infinite`,
                  transition: "border-color 0.4s",
                }}
              />

              {/* Main card */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.85)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(249,115,22,0.15)",
                  boxShadow:
                    "0 8px 40px rgba(249,115,22,0.08), 0 2px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: "28px",
                  overflow: "hidden",
                  zIndex: 2,
                  transition: "box-shadow 0.4s, border-color 0.4s",
                }}
              >
                {/* Scan line effect (activated on hover via CSS class) */}
                <div
                  className="hl-scan"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "30%",
                    background:
                      "linear-gradient(to bottom, transparent, rgba(249,115,22,0.06), transparent)",
                    animation: "none",
                    pointerEvents: "none",
                    zIndex: 1,
                  }}
                />

                {/* Inner shimmer highlight */}
                <div
                  style={{
                    position: "absolute",
                    top: "-30%",
                    left: "10%",
                    width: "80%",
                    height: "60%",
                    background:
                      "radial-gradient(ellipse, rgba(255,255,255,0.8) 0%, transparent 70%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Icon */}
                <div style={{ position: "relative", marginBottom: 16, zIndex: 2 }}>
                  {/* Node pulse */}
                  <div
                    style={{
                      position: "absolute",
                      inset: -4,
                      borderRadius: "50%",
                      animation: `nodePulse 2s ease-in-out infinite`,
                      animationDelay: item.pulseDelay,
                    }}
                  />
                  <div
                    className="hl-icon-wrap"
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background: "rgba(254,237,220,0.9)",
                      border: "1.5px solid rgba(249,115,22,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 24,
                      color: "#f97316",
                      transition: "background 0.4s, color 0.4s, box-shadow 0.4s",
                      boxShadow: "0 4px 12px rgba(249,115,22,0.15)",
                    }}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Text */}
                <h4
                  className="hl-title"
                  style={{
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#1c1917",
                    margin: "0 0 8px",
                    transition: "color 0.4s",
                    fontFamily: "'Syne', sans-serif",
                    zIndex: 2,
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    fontSize: 11,
                    color: "#a8a29e",
                    lineHeight: 1.6,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 400,
                    margin: 0,
                    padding: "0 4px",
                    zIndex: 2,
                  }}
                >
                  {item.desc}
                </p>

                {/* Cross-hair tick marks */}
                {[0, 90, 180, 270].map((deg) => (
                  <span
                    key={deg}
                    style={{
                      position: "absolute",
                      width: 8,
                      height: 1.5,
                      background: "rgba(249,115,22,0.3)",
                      borderRadius: 2,
                      top: "50%",
                      left: "50%",
                      transform: `rotate(${deg}deg) translateX(${240 / 2 - 16}px)`,
                      transformOrigin: "left center",
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Highlights;