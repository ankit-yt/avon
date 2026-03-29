import { PRICING_DATA } from '@/lib/data';
import React from 'react';
import { HiOutlineInformationCircle, HiOutlineDownload } from "react-icons/hi";

export default function Charges() {
  return (
    <section className="relative py-6 md:py-5 bg-[#FAFAF8] overflow-hidden border-t border-slate-100">

      {/* ── Warm blob ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 w-125 h-125 rounded-full bg-orange-200/30 blur-[120px]"
      />
         <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 w-125 h-125 rounded-full bg-orange-200/30 blur-[120px]"
      />

      <div className="relative z-10 max-w-330 mx-auto px-5 sm:px-8 lg:px-14">

        {/* --- Header --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">

          <div className="max-w-2xl">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-4 flex items-center gap-2">
              <span className="w-10 h-px bg-orange-600" />
              Packers and Movers Charges Estimated Range
            </h2>

            <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter leading-tight">
              ESTIMATED <span className="text-orange-500">&nbsp;CHARGES.</span>
            </h3>
          </div>

          {/* Download Button */}
          <div className="flex items-center gap-4">
            <a
              href="/charges.pdf"
              download="charges.pdf"
              className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-orange-600 transition-colors bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm hover:shadow-md"
            >
              <HiOutlineDownload className="text-sm" />
              Download PDF
            </a>
          </div>

        </div>

        {/* --- Table Wrapper --- */}
        <div className="rounded-[28px] border border-slate-200 bg-white shadow-2xl overflow-auto w-full">

          <table className="w-full text-left border-collapse table-auto">

            {/* --- Table Header --- */}
            <thead>
              <tr className="bg-slate-900 text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] leading-tight">
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
                  className="group border-b border-slate-100 hover:bg-slate-50 transition-colors duration-200"
                >
                  <td className="sticky left-0 z-10 bg-white group-hover:bg-slate-50 p-3 lg:p-4 text-sm font-black text-slate-900 shadow-[4px_0_10px_rgba(0,0,0,0.03)] transition-colors duration-200">
                    {row.type}
                  </td>

                  <td className="p-3 lg:p-4 text-sm tracking-tighter text-slate-500 whitespace-normal leading-snug">
                    {row.d50}
                  </td>

                  <td className="p-3 lg:p-4 text-sm tracking-tighter text-slate-500 whitespace-normal leading-snug">
                    {row.d500}
                  </td>

                  <td className="p-3 lg:p-4 text-sm tracking-tighter text-slate-500 whitespace-normal leading-snug">
                    {row.d1000}
                  </td>

                  <td className="p-3 lg:p-4 text-sm tracking-tighter text-slate-500 whitespace-normal leading-snug">
                    {row.d1500}
                  </td>

                  <td className="p-3 lg:p-4 text-sm tracking-tighter text-slate-500 whitespace-normal leading-snug">
                    {row.d2500}
                  </td>

                  <td className="p-3 lg:p-4 text-sm tracking-tighter text-slate-500 whitespace-normal leading-snug">
                    {row.d3000}
                  </td>

                  <td className="p-3 lg:p-4 text-sm tracking-tighter text-orange-500 font-bold whitespace-normal leading-snug">
                    {row.warehouse}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* --- Disclaimer --- */}
        <div className="mt-6 flex items-start gap-3 bg-white p-4 rounded-[28px] border border-slate-200 shadow-sm">
          <HiOutlineInformationCircle className="text-orange-500 text-xl flex-shrink-0 mt-0.5" />

          <p className="text-xs text-slate-500 leading-relaxed font-medium">
            <strong className="text-slate-900">Disclaimer:</strong> Get an instant preliminary estimate for your relocation. The final quotation may vary based on the type of service, volume of goods, floor level, labor requirements, pickup and delivery locations, necessary packing materials, and transportation charges. Inquire directly to receive a final quotation with no hidden fees.
          </p>
        </div>

      </div>
    </section>
  );
}