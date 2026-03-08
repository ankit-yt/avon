

import React from "react";

const CORNERS = [
  { top: 0,    left:  0,    flipX: false, flipY: false },
  { top: 0,    right: 0,    flipX: true,  flipY: false },
  { bottom: 0, left:  0,    flipX: false, flipY: true  },
  { bottom: 0, right: 0,    flipX: true,  flipY: true  },
];

function CornerAccents({ size = 72, thick = 2, color = "rgba(249,115,22,0.1)", glowColor = "#f97316" }) {
  return (
    <>
      <style>{`
        /* Horizontal arm shimmer — travels left → right */
        @keyframes marqueeH {
          0%   { transform: translateX(-110%); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateX(110%);  opacity: 0; }
        }

        /* Vertical arm shimmer — travels top → bottom */
        @keyframes marqueeV {
          0%   { transform: translateY(-110%); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateY(110%);  opacity: 0; }
        }

        .ca-shimH { animation: marqueeH 2.4s ease-in-out infinite; }
        .ca-shimV { animation: marqueeV 2.4s ease-in-out infinite; }
      `}</style>

      {CORNERS.map((c, i) => {
        const pos = {};
        if (c.top    !== undefined) pos.top    = c.top;
        if (c.bottom !== undefined) pos.bottom = c.bottom;
        if (c.left   !== undefined) pos.left   = c.left;
        if (c.right  !== undefined) pos.right  = c.right;

        /* 
          Shimmer direction mirrors with the bracket.
          flipX corners → horizontal shimmer goes right→left
          flipY corners → vertical shimmer goes bottom→top
        */
        const hDir = c.flipX ? "marqueeH_rev" : "marqueeH";
        const vDir = c.flipY ? "marqueeV_rev" : "marqueeV";

        /* stagger each corner */
        const stagger = `${i * 0.55}s`;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              ...pos,
              width:  size,
              height: size,
              pointerEvents: "none",
              zIndex: 5,
            }}
          >
            {/* ── Horizontal arm ── */}
            <div
              style={{
                position: "absolute",
                top:    c.flipY ? "auto" : 0,
                bottom: c.flipY ? 0      : "auto",
                left:   c.flipX ? "auto" : 0,
                right:  c.flipX ? 0      : "auto",
                width:  size,
                height: thick,
                background: color,
                overflow: "hidden",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(90deg, transparent 0%, ${glowColor} 50%, transparent 100%)`,
                  width: "60%",
                  animation: `marqueeH 2.4s ease-in-out infinite`,
                  animationDelay: stagger,
                  animationDirection: c.flipX ? "reverse" : "normal",
                }}
              />
            </div>

            {/* ── Vertical arm ── */}
            <div
              style={{
                position: "absolute",
                top:    c.flipY ? "auto" : 0,
                bottom: c.flipY ? 0      : "auto",
                left:   c.flipX ? "auto" : 0,
                right:  c.flipX ? 0      : "auto",
                width:  thick,
                height: size,
                background: color,
                overflow: "hidden",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(180deg, transparent 0%, ${glowColor} 50%, transparent 100%)`,
                  height: "60%",
                  width: "100%",
                  animation: `marqueeV 2.4s ease-in-out infinite`,
                  animationDelay: stagger,
                  animationDirection: c.flipY ? "reverse" : "normal",
                }}
              />
            </div>

          </div>
        );
      })}
    </>
  );
}

export default CornerAccents;