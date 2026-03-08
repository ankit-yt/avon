

import React from 'react';
import { HiOutlineInformationCircle, HiOutlineDownload } from "react-icons/hi";

// Data extracted exactly from your provided pricing image
const PRICING_DATA = [
  { type: "1 BHK Home", d50: "₹ 4000 - ₹ 10500", d500: "₹ 10500 - ₹ 15500", d1000: "₹ 15500 - ₹ 24500", d1500: "₹ 24500 - ₹ 29500", d2500: "₹ 29500 - ₹ 35500", d3000: "₹ 35500 - ₹ 45500", warehouse: "₹ 2500/Month" },
  { type: "2 BHK Home", d50: "₹ 11500 - ₹ 14500", d500: "₹ 14500 - ₹ 24500", d1000: "₹ 24500 - ₹ 30500", d1500: "₹ 30500 - ₹ 40500", d2500: "₹ 40500 - ₹ 46500", d3000: "₹ 46500 - ₹ 65500", warehouse: "₹ 3500/Month" },
  { type: "3 BHK Home", d50: "₹ 14500 - ₹ 20500", d500: "₹ 20500 - ₹ 29500", d1000: "₹ 29500 - ₹ 38500", d1500: "₹ 38500 - ₹ 51500", d2500: "₹ 51500 - ₹ 65500", d3000: "₹ 65500 - ₹ 85500", warehouse: "₹ 5000/Month" },
  { type: "4 BHK / Villa", d50: "₹ 20500 - ₹ 29500", d500: "₹ 29500 - ₹ 35500", d1000: "₹ 35500 - ₹ 55500", d1500: "₹ 55500 - ₹ 65500", d2500: "₹ 65500 - ₹ 85500", d3000: "₹ 85500 - ₹ 95500", warehouse: "₹ 6000/Month" },
  { type: "5 BHK / Villa", d50: "₹ 29500 - ₹ 35500", d500: "₹ 35500 - ₹ 55500", d1000: "₹ 55500 - ₹ 70500", d1500: "₹ 70500 - ₹ 85500", d2500: "₹ 85500 - ₹ 95500", d3000: "₹ 95500 - ₹ 99500", warehouse: "₹ 7000/Month" },
  { type: "Car Transport", d50: "₹ 5000 - ₹ 9000", d500: "₹ 9000 - ₹ 12500", d1000: "₹ 12500 - ₹ 18500", d1500: "₹ 18500 - ₹ 24500", d2500: "₹ 24500 - ₹ 30500", d3000: "₹ 30500 - ₹ 35500", warehouse: "₹ 2000/Month" },
  { type: "Bike Transport", d50: "₹ 2000 - ₹ 3000", d500: "₹ 3000 - ₹ 7000", d1000: "₹ 7000 - ₹ 10000", d1500: "₹ 10000 - ₹ 12000", d2500: "₹ 12000 - ₹ 18500", d3000: "₹ 18500 - ₹ 20500", warehouse: "₹ 1500/Month" },
];

export default function Charges() {
  return (
    <section className="py-10 bg-white overflow-hidden border-t border-slate-50">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-10">
        
        {/* --- Minimalist High-End Header --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-3 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-orange-600" /> Transparent Logistics
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-[0.95]">
              ESTIMATED <span className="text-slate-300">CHARGES.</span>
            </h3>
          </div>
          <div className="flex items-center gap-4">
            
             <a 
  href="/charges.pdf"
  download="charges.pdf"
  className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-orange-600 transition-colors bg-slate-50 px-4 py-2 rounded-full border border-slate-100 shadow-sm hover:shadow-md"
>
  <HiOutlineDownload className="text-sm" /> Download PDF
</a>
          </div>
        </div>

        {/* --- Compact, Wrap-Enabled Table Wrapper --- */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-lg overflow-auto w-full">
          <table className="w-full text-left border-collapse table-auto">
            
            {/* --- Table Header --- */}
            <thead>
             <tr className="bg-slate-900 text-white text-[9px] md:text-[10px] font-black uppercase tracking-wider leading-tight">
                <th className="p-3 lg:p-4 border-b border-slate-800 sticky left-0 bg-slate-900 z-10 shadow-[4px_0_10px_rgba(0,0,0,0.2)]">
                  Shifting Type
                </th>
                <th className="p-3 lg:p-4 border-b border-slate-800">Up to 50 KM</th>
                <th className="p-3 lg:p-4 border-b border-slate-800">Up to 500 KM</th>
                <th className="p-3 lg:p-4 border-b border-slate-800">Up to 1000 KM</th>
                <th className="p-3 lg:p-4 border-b border-slate-800">Up to 1500 KM</th>
                <th className="p-3 lg:p-4 border-b border-slate-800">Up to 2500 KM</th>
                <th className="p-3 lg:p-4 border-b border-slate-800">Up to 3000 KM</th>
                <th className="p-3 lg:p-4 border-b border-slate-800 text-orange-400">Warehouse</th>
             </tr>
            </thead>

            {/* --- Table Body --- */}
            <tbody className="font-medium text-slate-600">
              {PRICING_DATA.map((row, index) => (
                <tr 
                  key={index} 
                  className="group border-b border-orange-300 hover:bg-slate-50 transition-colors duration-200"
                >
                  <td className="sticky left-0 z-10 bg-white group-hover:bg-slate-50 p-3 lg:p-4 text-sm font-black text-slate-900 shadow-[4px_0_10px_rgba(0,0,0,0.03)] transition-colors duration-200">
                    {row.type}
                  </td>
                  
                  {/* Text-base applied, whitespace-normal allows tight wrapping */}
                  <td className="p-3 lg:p-4  text-base tracking-tighter text-slate-500 whitespace-normal leading-snug">{row.d50}</td>
                  <td className="p-3 lg:p-4  text-base tracking-tighter text-slate-500 whitespace-normal leading-snug">{row.d500}</td>
                  <td className="p-3 lg:p-4  text-base tracking-tighter text-slate-500 whitespace-normal leading-snug">{row.d1000}</td>
                  <td className="p-3 lg:p-4  text-base tracking-tighter text-slate-500 whitespace-normal leading-snug">{row.d1500}</td>
                  <td className="p-3 lg:p-4  text-base tracking-tighter text-slate-500 whitespace-normal leading-snug">{row.d2500}</td>
                  <td className="p-3 lg:p-4  text-base tracking-tighter text-slate-500 whitespace-normal leading-snug">{row.d3000}</td>
                  <td className="p-3 lg:p-4  text-base tracking-tighter text-orange-600 font-bold whitespace-normal leading-snug">{row.warehouse}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* --- Post-Table Disclaimer --- */}
        <div className="mt-6 flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100 max-w-3xl">
           <HiOutlineInformationCircle className="text-orange-500 text-xl flex-shrink-0 mt-0.5" />
           <p className="text-xs text-slate-500 leading-relaxed font-medium">
             <strong className="text-slate-900">Disclaimer:</strong> The above tariffs are estimated baseline costs. Final quotations may vary based on specific inventory volume, floor level, packing material required, and prevailing fuel surcharges.
           </p>
        </div>

      </div>
    </section>
  );
}