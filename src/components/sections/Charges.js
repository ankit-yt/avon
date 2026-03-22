

import { PRICING_DATA } from '@/lib/data';
import React from 'react';
import { HiOutlineInformationCircle, HiOutlineDownload } from "react-icons/hi";

// Data extracted exactly from your provided pricing image

export default function Charges() {
  return (
    <section className="py-10 bg-white overflow-hidden border-t border-slate-50">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-10">
        
        {/* --- Minimalist High-End Header --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-3 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-orange-600" /> Packers and Movers Charges Estimated Range
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
        <div className="mt-6 flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100 ">
           <HiOutlineInformationCircle className="text-orange-500 text-xl flex-shrink-0 mt-0.5" />
           <p className="text-xs text-slate-500 leading-relaxed font-medium">
             <strong className="text-slate-900">Disclaimer:</strong> Get an instant preliminary estimate for your relocation. The final quotation may vary based on the type of service, volume of goods, floor level, labor requirements, pickup and delivery locations, necessary packing materials, and transportation charges. Inquire directly to receive a final quotation with no hidden fees.
           </p>
        </div>

      </div>
    </section>
  );
}