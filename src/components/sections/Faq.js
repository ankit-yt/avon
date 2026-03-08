import React from 'react';
import { HiOutlinePlus, HiOutlineMinus, HiOutlineChatAlt2, HiOutlineMail } from "react-icons/hi";
import faqPhoto from "@/../public/images/faq.png"
import Image from 'next/image';
const FAQ_DATA = [
  {
    question: "How do you ensure a 99% safety rate for my belongings?",
    answer: "Our operational blueprint relies on premium multi-layer packing (corrugated sheets, heavy-duty bubble wrap) and specialized closed-body vehicle carriers. Every move is handled by our in-house, background-verified staff to ensure zero-impact transit."
  },
  {
    question: "What does 'IBA Approved' mean for my relocation?",
    answer: "Being approved by the Indian Banks' Association means our processes, pricing, and safety standards are federally certified. We provide authentic GST invoices that are 100% claimable for corporate and bank employee reimbursements."
  },
  {
    question: "Can I track my goods while they are in transit?",
    answer: "Absolutely. Our fleet is integrated with a centralized AI Tracking Hub. You will receive real-time telemetry updates, SMS milestones, and 24/7 access to our Ludhiana dispatch center to know exactly where your assets are."
  },
  {
    question: "How does the 'Virtual Video Survey' work?",
    answer: "To save you time, you can schedule a quick smartphone video call with our estimation experts. You simply show us the inventory through your camera, and we provide an instant, accurate, and transparent quotation without needing a physical visit."
  },
  {
    question: "Are there any hidden costs in your quotations?",
    answer: "No. Avon Express operates on a strict zero-hidden-cost policy. Your quotation includes all packing materials, labor, transport, and unloading fees. What is quoted is exactly what you pay."
  }
];

export default function Faq() {
  return (
    <section className="relative p-10 overflow-hidden border-t border-slate-900">
      
      {/* --- Massive Background Image --- */}
      <Image
        src={faqPhoto} 
        alt="Corporate Logistics Facility" 
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Cinematic Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-[2px]" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-14">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-10 items-start">
          
          {/* --- LEFT: Sticky Header & Glass Support Card --- */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-10">
            <div>
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500 mb-6 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-orange-500" /> Knowledge Base
              </h2>
              <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-6">
                FREQUENTLY <br />
                <span className="text-slate-500">ASKED.</span>
              </h3>
              <p className="text-sm font-medium text-slate-400 max-w-sm leading-relaxed">
                Everything you need to know about our next-generation logistics, IBA-certified billing, and nationwide operations.
              </p>
            </div>

            {/* Frosted Glass Support Card */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-[32px] max-w-sm relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               <div className="relative z-10 flex flex-col gap-6">
                 <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center text-orange-500 text-2xl shadow-sm">
                    <HiOutlineChatAlt2 />
                 </div>
                 <div>
                    <h4 className="text-lg font-black text-white tracking-tight mb-2">Still have questions?</h4>
                    <p className="text-xs text-slate-400 font-medium leading-relaxed mb-6">
                      Our Ludhiana-based central dispatch team is available 24/7 to provide personalized assistance.
                    </p>
                    <a href="mailto:support@avonexpress.com" className="inline-flex items-center gap-3 px-6 py-3 bg-orange-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-white hover:text-slate-900 transition-colors shadow-lg shadow-orange-900/20">
                      <HiOutlineMail className="text-sm" /> Contact Support
                    </a>
                 </div>
               </div>
            </div>
          </div>

          {/* --- RIGHT: SEO-Friendly Glassmorphism Accordion --- */}
          <div className="lg:col-span-7 space-y-4">
            {FAQ_DATA.map((faq, index) => (
              <details 
                key={index} 
                className="group border rounded-[24px] bg-white/5 backdrop-blur-md border-white/10 hover:border-white/20 hover:bg-white/10 open:bg-white/10 open:border-orange-500/30 open:shadow-2xl open:shadow-black/50 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* The summary acts as the button. */}
                <summary className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none list-none [&::-webkit-details-marker]:hidden">
                  <span className="text-base md:text-lg font-black tracking-tight text-white group-hover:text-orange-400 group-open:text-orange-500 transition-colors duration-300 pr-6">
                    {faq.question}
                  </span>
                  
                  {/* Glassy Icon Switcher */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-slate-300 group-hover:bg-white/10 group-open:bg-orange-600 group-open:border-orange-500 group-open:text-white transition-all duration-300 shadow-inner">
                    <HiOutlinePlus className="text-lg block group-open:hidden" />
                    <HiOutlineMinus className="text-lg hidden group-open:block" />
                  </div>
                </summary>

                {/* The Answer Content */}
                <div className="px-6 md:px-8 pb-8 text-sm text-slate-300 font-medium leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}