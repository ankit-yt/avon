
import React from "react";
const text = "AVON EXPRESS PACKERS & MOVERS";
const repeated = Array(12).fill(text);
function Hero() {
    return (
        <div className="tp-banner-container h-[84vh] sliderWraper flex flex-col relative overflow-hidden">

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

           <div className="relative overflow-hidden h-1/6 bg-orange-600 border-y border-orange-600">

      
      <div className="marquee-track flex items-center h-full gap-0">
        {repeated.map((t, i) => (
          <span key={i} className="flex items-center gap-4 whitespace-nowrap px-4">

            {/* Capsule */}
            <span className="inline-flex items-center gap-2.5 bg-white/15 border border-white/25 backdrop-blur-sm rounded-full px-5 py-4">
              <span className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
              <span className="text-xs font-black tracking-[0.2em] uppercase text-white">
                {t}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/50 flex-shrink-0" />
            </span>

          </span>
        ))}
      </div>

    </div>

        </div>
    );
}

export default Hero;