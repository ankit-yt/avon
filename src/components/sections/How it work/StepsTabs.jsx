"use client";

import { useState, useEffect, useCallback } from "react";
import Image, { StaticImageData } from "next/image";



const AUTOPLAY_DELAY = 2000;

export default function StepsTabs({ steps }) {
  const [active, setActive] = useState(0);

  const goTo = useCallback((idx) => {
    setActive(idx);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, AUTOPLAY_DELAY);
    return () => clearInterval(timer);
  }, [active, steps.length]); 

  const current = steps[active];

  return (
    <>
      <div
        role="tablist"
        aria-label="Relocation process steps"
        className="flex items-stretch gap-0 mb-4 border border-slate-100 rounded-2xl overflow-hidden bg-slate-50"
      >
        {steps.map((step, i) => (
          <button
            key={step.id}
            role="tab"
            aria-selected={i === active}
            aria-controls={`panel-${step.id}`}
            id={`tab-${step.id}`}
            onClick={() => goTo(i)}
            className={`
              relative flex-1 flex flex-col items-center gap-1 py-3.5 px-1 text-center
              cursor-pointer border-r border-slate-100 last:border-r-0
              transition-colors duration-200 outline-none
              focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-orange-400
              ${i === active
                ? "bg-slate-900 text-white"
                : "bg-white text-slate-400 hover:bg-slate-50"
              }
            `}
          >
            <span
              className={`text-[9px] font-black tracking-widest tabular-nums ${
                i === active ? "text-orange-400" : "text-slate-300"
              }`}
            >
              {step.phase}
            </span>
            <span className="hidden sm:block text-[10px] font-bold uppercase tracking-[0.18em] leading-tight">
              {step.shortTitle}
            </span>
            {i === active && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-500" />
            )}
            {i === active && (
              <span
                key={active}
                className="absolute bottom-0 left-0 h-[2px] bg-orange-300"
                style={{
                  animation: `tabProgress ${AUTOPLAY_DELAY}ms linear forwards`,
                }}
              />
            )}
          </button>
        ))}
      </div>
      <style>{`
        @keyframes tabProgress {
          from { width: 100%; }
          to   { width: 0%; }
        }
      `}</style>

      <div
        role="tabpanel"
        id={`panel-${current.id}`}
        aria-labelledby={`tab-${current.id}`}
        className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-4 mb-4"
      >
        <div
          className="relative rounded-2xl overflow-hidden bg-slate-100"
          style={{ minHeight: "420px" }}
        >
          <Image
            src={current.image}
            alt={current.title.replace("\n", " ")}
            fill
            className="object-cover transition-opacity duration-300"
            priority={active === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
  
          <div className="absolute bottom-0 left-0 p-7">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-400 mb-2">
              Phase {current.phase} / {steps.length}
            </p>
            <h3 className="text-3xl lg:text-4xl font-black text-white tracking-tight leading-[1.1] whitespace-pre-line">
              {current.title}
            </h3>
          </div>
       
          <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm rounded-xl px-3 py-1.5 flex items-center gap-2">
            <span className="text-[11px] font-black text-white tabular-nums">{active + 1}</span>
            <span className="text-white/30 text-[11px]">/</span>
            <span className="text-[11px] font-black text-white/50 tabular-nums">{steps.length}</span>
          </div>
        </div>

 
        <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-slate-50 p-7 lg:p-8">
          <div>
            <div className="w-10 h-10 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-500 mb-5">
              {current.icon}
            </div>
            <p className="text-[9px] font-black uppercase tracking-[0.45em] text-orange-500 mb-2">
              {current.phase} — {current.shortTitle}
            </p>
            <h3 className="text-xl lg:text-2xl font-black text-slate-900 tracking-tight leading-snug mb-4 whitespace-pre-line">
              {current.title}
            </h3>
            <div className="h-px bg-slate-200 mb-5" />
            <p className="text-[13px] text-slate-600 leading-relaxed">
              {current.desc}
            </p>
          </div>

        
          <div className="my-6">
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-4 py-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
              <span className="text-[11px] uppercase font-semibold text-slate-500 tracking-wide">
                {current.detail}
              </span>
            </div>
          </div>


          <div>
            <div className="flex gap-1 mb-1">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to step ${i + 1}`}
                  className={`h-1 rounded-full flex-1 transition-all duration-300 cursor-pointer ${
                    i <= active ? "bg-orange-400" : "bg-slate-200"
                  }`}
                />
              ))}
            </div>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-2">
              Step {active + 1} of {steps.length}
            </p>
          </div>
        </div>
      </div>

      
      <div
        role="tablist"
        aria-label="Step icons"
        className="grid grid-cols-7 gap-2 mb-4"
      >
        {steps.map((step, i) => (
          <button
            key={step.id}
            role="tab"
            aria-selected={i === active}
            onClick={() => goTo(i)}
            className={`rounded-xl border px-2 py-3 text-center cursor-pointer transition-colors duration-150 outline-none
              focus-visible:ring-2 focus-visible:ring-orange-400
              ${i === active
                ? "border-orange-200 bg-orange-50"
                : "border-slate-100 bg-slate-50 hover:border-slate-200 hover:bg-white"
              }`}
          >
            <div
              className={`flex items-center justify-center mb-1.5 mx-auto w-7 h-7 rounded-lg border transition-colors duration-150 ${
                i === active
                  ? "bg-orange-500 border-orange-500 text-white"
                  : "bg-white border-slate-200 text-slate-400"
              }`}
            >
              {step.icon}
            </div>
            <p
              className={`text-[9px] font-black uppercase tracking-[0.18em] leading-tight hidden sm:block transition-colors duration-150 ${
                i === active ? "text-orange-500" : "text-slate-400"
              }`}
            >
              {step.shortTitle}
            </p>
          </button>
        ))}
      </div>
    </>
  );
}