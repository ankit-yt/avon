import React from 'react';
import Image from 'next/image';
import { 
  HiOutlineChatAlt2, 
  HiOutlineArchive, 
  HiOutlineTruck, 
  HiOutlineHome, 
  HiOutlineEmojiHappy,
  HiOutlineArrowSmDown,
  HiOutlineInboxIn
} from "react-icons/hi";
// Using your provided image imports
import imgConsult from "@/../public/images/vs1.jpeg";
import imgPack from "@/../public/images/vs1.jpeg";
import imgLoad from "@/../public/images/vs1.jpeg";
import imgTransit from "@/../public/images/vs1.jpeg";
import imgUnload from "@/../public/images/vs1.jpeg";
import imgUnpack from "@/../public/images/vs1.jpeg";
import imgHappy from "@/../public/images/vs1.jpeg";

const PROCESS_STEPS = [
  {
    title: "Consultation",
    desc: "IBA-approved experts provide a transparent, detailed relocation blueprint tailored to your needs.",
    icon: <HiOutlineChatAlt2 />,
    image: imgConsult,
    tag: "Phase 01"
  },
  {
    title: "Premium Packing",
    desc: "Multi-layer protection using corrugated sheets and high-grade bubble wraps for maximum safety.",
    icon: <HiOutlineArchive />,
    image: imgPack,
    tag: "Phase 02"
  },
  {
    title: "Safe Loading",
    desc: "Scientific stacking in specialized carriers to prevent movement and friction during transit.",
    icon: <HiOutlineInboxIn />,
    image: imgLoad,
    tag: "Phase 03"
  },
  {
    title: "Secure Transit",
    desc: "Real-time tracking of your assets with our dedicated nationwide fleet and experienced drivers.",
    icon: <HiOutlineTruck />,
    image: imgTransit,
    tag: "Phase 04"
  },
  {
    title: "Precision Unloading",
    desc: "Trained staff manually offload items with zero-impact protocols at the final destination.",
    icon: <HiOutlineTruck  />,
    image: imgUnload,
    tag: "Phase 05"
  },
  {
    title: "Unpacking & Setup",
    desc: "Careful removal of packing materials and strategic placement of furniture in your new home.",
    icon: <HiOutlineHome />,
    image: imgUnpack,
    tag: "Phase 06"
  },
  {
    title: "Happy Client",
    desc: "A final walkthrough to ensure complete satisfaction and a stress-free transition.",
    icon: <HiOutlineEmojiHappy />,
    image: imgHappy,
    tag: "Success"
  }
];

function HowItWorks() {
  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        
        {/* --- Header Architecture --- */}
        <div className="text-center max-w-3xl mx-auto mb-32">
          <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-orange-600 mb-6 flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-orange-600" /> Operational Blueprint <span className="w-8 h-[1px] bg-orange-600" />
          </h2>
          <h3 className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">
            HOW IT&apos;S 
            <span className="text-slate-300"> WORK.</span>
          </h3>
        </div>

        {/* --- Dynamic Flow Section --- */}
        <div className="relative">
          {/* Vertical Center Line (Desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-slate-100 hidden lg:block -translate-x-1/2" />

          <div className="space-y-32 relative">
            {PROCESS_STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
                  
                  {/* Step Connector Dot */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-orange-600 rounded-full z-20 hidden lg:block" />

                  {/* Image Side */}
                  <div className={`w-full lg:w-[45%] ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden shadow-2xl group">
                      <Image 
                        src={step.image} 
                        alt={step.title}
                        className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-orange-600/10 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={`w-full lg:w-[45%] ${isEven ? 'lg:order-2 lg:text-left' : 'lg:order-1 lg:text-right'} space-y-4`}>
                    <div className={`flex items-center gap-4 ${isEven ? 'justify-start' : 'justify-end'}`}>
                       <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full">
                        {step.tag}
                      </span>
                    </div>
                    <div className={`flex items-center gap-4 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                      <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center text-2xl">
                        {step.icon}
                      </div>
                      <h4 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-slate-500 font-medium leading-relaxed text-lg max-w-md mx-auto lg:mx-0">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- Space-Filling Quote Section --- */}
        <div className="mt-40 p-12 bg-slate-50 rounded-[40px] border border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="space-y-2">
            <h5 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Ready to Relocate?</h5>
            <p className="text-slate-500 font-medium tracking-wide italic">Join our 99% satisfied client base for an IBA-approved move.</p>
          </div>
          <button className="px-12 py-5 bg-orange-600 text-white text-[11px] font-black uppercase tracking-[0.25em] rounded-full hover:bg-slate-900 transition-all duration-500 shadow-xl active:scale-95 shadow-orange-200">
            Book Precision Move
          </button>
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;