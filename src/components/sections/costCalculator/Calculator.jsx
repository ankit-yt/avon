'use client'
import {React , useMemo, useState} from 'react'
import { HiOutlineCalculator } from 'react-icons/hi'


const PRICING_DATA = [
  { type: "1 BHK Home",          d50: "₹4,000–₹10,500",   d500: "₹10,500–₹15,500",  d1000: "₹15,500–₹24,500",  d1500: "₹24,500–₹29,500",  d2500: "₹29,500–₹35,500",  d3000: "₹35,500–₹45,500"  },
  { type: "2 BHK Home",          d50: "₹11,500–₹14,500",  d500: "₹14,500–₹24,500",  d1000: "₹24,500–₹30,500",  d1500: "₹30,500–₹40,500",  d2500: "₹40,500–₹46,500",  d3000: "₹46,500–₹65,500"  },
  { type: "3 BHK Home",          d50: "₹14,500–₹20,500",  d500: "₹20,500–₹29,500",  d1000: "₹29,500–₹38,500",  d1500: "₹38,500–₹51,500",  d2500: "₹51,500–₹65,500",  d3000: "₹65,500–₹85,500"  },
  { type: "4 BHK / Villa",       d50: "₹20,500–₹29,500",  d500: "₹29,500–₹35,500",  d1000: "₹35,500–₹55,500",  d1500: "₹55,500–₹65,500",  d2500: "₹65,500–₹85,500",  d3000: "₹85,500–₹95,500"  },
  { type: "5 BHK / Villa",       d50: "₹29,500–₹35,500",  d500: "₹35,500–₹55,500",  d1000: "₹55,500–₹70,500",  d1500: "₹70,500–₹85,500",  d2500: "₹85,500–₹95,500",  d3000: "₹95,500–₹99,500"  },
  { type: "Car Transportation",  d50: "₹5,000–₹9,000",    d500: "₹9,000–₹12,500",   d1000: "₹12,500–₹18,500",  d1500: "₹18,500–₹24,500",  d2500: "₹24,500–₹30,500",  d3000: "₹30,500–₹35,500"  },
  { type: "Bike Transportation", d50: "₹2,000–₹3,000",    d500: "₹3,000–₹7,000",    d1000: "₹7,000–₹10,000",   d1500: "₹10,000–₹12,000",  d2500: "₹12,000–₹18,500",  d3000: "₹18,500–₹20,500"  },
];

const DISTANCE_OPTIONS = [
  { value: "d50",   label: "Local Move (Up to 50 KM)"       },
  { value: "d500",  label: "Inter-City (Up to 500 KM)"      },
  { value: "d1000", label: "Inter-State (Up to 1,000 KM)"   },
  { value: "d1500", label: "Long Distance (Up to 1,500 KM)" },
  { value: "d2500", label: "Cross Country (Up to 2,500 KM)" },
  { value: "d3000", label: "Extreme Range (Up to 3,000 KM)" },
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
                  <h4 className="text-white font-black text-xl tracking-tight">Cost Estimator</h4>
                  <p className="text-slate-400 text-xs font-medium tracking-wide">Ludhiana Base Tariffs</p>
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
                *Baseline estimate only. Final cost varies based on exact inventory, floor
                level, and equipment required. Submit the form to lock in a quote.
              </p>
            </div>
          </div>
  )
}

export default Calculator
