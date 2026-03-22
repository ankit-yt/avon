'use client'
import { PRICING_DATA } from '@/lib/data';
import {React , useMemo, useState} from 'react'
import { HiOutlineCalculator } from 'react-icons/hi'



const DISTANCE_OPTIONS = [
  { value: "d50",   label: "Up to 50 KM" },
  { value: "d500",  label: "Up to 500 KM" },
  { value: "d1000", label: "Up to 1,000 KM" },
  { value: "d1500", label: "Up to 1,500 KM" },
  { value: "d2500", label: "Up to 2,500 KM" },
  { value: "d3000", label: "Up to 3,000 KM" },
];


function Calculator() {
     const [shiftType, setShiftType] = useState("2 BHK Home");
  const [distance, setDistance] = useState("d500");

   // Derive estimate synchronously — no useEffect needed
  const estimate = useMemo(() => {
    const row = PRICING_DATA.find((r) => r.type === shiftType);
    return row ? row[distance] ?? "—" : "—";
  }, [shiftType, distance]);

  return (
  <div className="lg:col-span-7 bg-slate-900 rounded-4xl p-8 md:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-orange-600/20 transition-colors duration-700" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-orange-500 text-2xl backdrop-blur-md border border-white/10">
                  <HiOutlineCalculator />
                </div>
                <div>
                  <h4 className="text-white font-black text-xl tracking-tight">Cost Calculator</h4>
                  <p className="text-slate-400 text-xs font-medium tracking-wide">Estimated Charges</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Shifting type */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                    Select Shifting Type
                  </label>
                  <select
                    value={shiftType}
                    onChange={(e) => setShiftType(e.target.value)}
                    className="w-full bg-slate-800/50 border border-slate-700 text-white text-sm rounded-xl px-4 py-3.5 outline-none focus:border-orange-500 transition-colors appearance-none cursor-pointer"
                  >
                    {PRICING_DATA.map((row) => (
                      <option key={row.type} value={row.type}>{row.type}</option>
                    ))}
                  </select>
                </div>

                {/* Distance */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                    Select Distance
                  </label>
                  <select
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                    className="w-full bg-slate-800/50 border border-slate-700 text-white text-sm rounded-xl px-4 py-3.5 outline-none focus:border-orange-500 transition-colors appearance-none cursor-pointer"
                  >
                    {DISTANCE_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Estimate display */}
            <div className="relative z-10 mt-10 pt-8 border-t border-slate-800">
              <p className="text-[10px] font-bold text-orange-500 uppercase tracking-widest mb-1">
                Estimated Range
              </p>
              <div className="text-4xl font-black text-white tracking-tighter mb-4">
                {estimate}
              </div>
              <p className="text-[10px] text-slate-400 font-medium leading-relaxed">
                *Get an instant preliminary estimate for your relocation. The final quotation may vary based on the type of service, volume of goods, floor level, labor requirements, pickup and delivery locations, necessary packing materials, and transportation charges. Inquire directly to receive a final quotation with no hidden fees..
              </p>
            </div>
          </div>
  )
}

export default Calculator
