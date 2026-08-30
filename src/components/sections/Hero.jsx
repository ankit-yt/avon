import React from "react";

// 1. Define both lines of text
const baseTexts = [
  "India's Most Awarded Avon Express Packers and Movers Now in PAN india Present",
  "Urgent Shifting, Immediate Shifting, Same-Day Shifting"
];

// 2. Repeat the texts enough times to ensure they fill ultra-wide screens.
const halfMarquee = Array(4).fill(baseTexts).flat();

// 3. Double the array. The CSS will translate it to -50%, making the loop perfectly seamless.
const repeated = [...halfMarquee, ...halfMarquee];

function Hero() {
  return (
    <div id="hero" className="tp-banner-container h-[80vh] sliderWraper flex flex-col relative overflow-hidden">
      
      {/* Seamless Marquee CSS injected directly for ease of use */}
      <style>
        {`
          @keyframes seamless-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-seamless-scroll {
            animation: seamless-scroll 80s linear infinite;
            width: max-content;
          }
          /* Optional: Pause the marquee when the user hovers over it */
          .animate-seamless-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* ===== MAIN AREA ===== */}
      <div className="main_body h-5/6 relative">
        <div className="country-wrap h-full relative">
          <div className="mountain-1"></div>
          <div className="mountain-2"></div>
          <div className="sun"></div>
          <div className="grass"></div>

          <div className="street">
            <div className="truck">
              <div className="tyre front_truck_lt"><div className="gap"></div></div>
              <div className="tyre front_truck_tt4"><div className="gap"></div></div>
              <div className="tyre front_truck_tt3"><div className="gap"></div></div>
              <div className="tyre front_truck_tt2"><div className="gap"></div></div>
              <div className="tyre front_truck_ft"><div className="gap"></div></div>
            </div>
          </div>

          <div className="flex bottom-[20px] absolute h-10 w-full">
            <div className="street-stripe"></div>
          </div>

          <div className="hill">
            <div className="tree-1">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MARQUEE AREA ===== */}
      <div className="relative w-full overflow-hidden py-10 bg-[#fafafa]">
        {/* Added the animate-seamless-scroll class here */}
        <div className="animate-seamless-scroll flex items-center">
          {repeated.map((t, i) => (
            <div key={i} className="flex items-center group cursor-default">
              {/* Added whitespace-nowrap so the text never breaks into two lines */}
              <span className="text-md font-black tracking-widest uppercase text-slate-600 group-hover:text-orange-600 transition-all duration-700 px-12 whitespace-nowrap">
                {t}
              </span>
              
              {/* Changed rotate-25 to rotate-[25deg] (Tailwind valid syntax) and added shrink-0 */}
              <div className="w-10 h-4 bg-slate-200 rotate-[25deg] group-hover:bg-orange-600 group-hover:rotate-0 transition-all duration-700 shrink-0" />
            </div>
          ))}
        </div>
        
        {/* Bottom subtle border line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-slate-100" />
      </div>

    </div>
  );
}

export default Hero;