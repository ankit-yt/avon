
import React from "react";
const text = "India's Most Awarded Packers and Movers Now in PAN india Present";
const repeated = Array(3).fill(text);
function Hero() {
  return (
    <div id="hero" className="tp-banner-container h-[80vh] sliderWraper flex flex-col relative overflow-hidden">

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

      <div className="relative w-full overflow-hidden py-10 bg-[#fafafa]">
 

  <div className="marquee-track flex items-center">
    {repeated.map((t, i) => (
      <div key={i} className="flex items-center group cursor-default">
        {/* The Text: Minimalist, Bold, and Spaced */}
        <span className="text-md font-black tracking-widest uppercase text-slate-600 group-hover:text-orange-600 transition-all duration-700 px-12">
          {t}
        </span>
        
        {/* Next-Gen Divider: Vertical Progress Bar style */}
        <div className="w-10 h-4 bg-slate-200 rotate-25 group-hover:bg-orange-600 group-hover:rotate-0 transition-all duration-700" />
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