import { HiOutlineChatAlt2, HiOutlineMail, HiOutlineShieldCheck, HiOutlineTruck } from "react-icons/hi";

const FAQ_DATA = [
  {
    id: "01",
    category: "About Us",
    question: "Who is the No. 1 Packers and Movers Transport Company in India?",
    answer:
      "Avon Express Packers and Movers Company is The Highest Moving Supply in India — Avon Express Packers and Movers is a Famous Name Moving Company in India.",
  },
  {
    id: "02",
    category: "Transport",
    question: "How are Goods Transported From one City To Another?",
    answer:
      "If You Need To Move Household items, Office Equipment, a Car, a Bike, or an Activa From One Place To Another, Packers and Movers are The Best Option. You Can Utilize This Service To Relocate From One City To Another.",
  },
  {
    id: "03",
    category: "Basics",
    question: "What is Packers and Movers?",
    answer:
      "When You Shift Household Goods, Office Goods, Car, Bike, Activa From one Place To Another, So You Need Packers and Movers.",
  },
  {
    id: "04",
    category: "Basics",
    question: "Why Packers and Movers Are Needed?",
    answer:
      "You Cannot Shift Your Household Goods, Office Goods, Car, Bike, Activa Yourself Because it Requires a lot of Facilities, Which You Do Not Have. You Have To Take Help of Packers and Movers To Avoid Any Kind of Loss.",
  },
  {
    id: "05",
    category: "Process",
    question: "How Do Packers and Movers Work?",
    answer:
      "You Only Have To Tell The Name of The Service — Rest You Can Call on Our Number and Talk. 1. Discuss and Quotation  2. Premium Packing  3. Safe Loading  4. Secure Transportation  5. Precision Unloading  6. Unpacking and Setup  7. Happy Client.",
  },
  {
    id: "06",
    category: "Finding Us",
    question: "How To Find Packers and Movers?",
    answer:
      "You Can Get it From Internet, Google, Website, Facebook, Youtube, Instagram, Twitter etc.",
  },
  {
    id: "07",
    category: "Trust",
    question: "How Do I Find a Reliable Company?",
    answer:
      "1. Check The Registration Certificate and Licenses.  2. Online Present Website and Social Media Profile.  3. To Verify The Packers and Movers, it's Crucial To Read Online Reviews Carefully.  4. Nowadays Packers and Movers Services are Available Online. Still, You Should Make a Physical Visit.",
  },
  {
    id: "08",
    category: "Booking",
    question: "How To Book Packers and Movers?",
    answer:
      "You Can Book By Calling The Customer Care Number of Packers and Movers.",
  },
  {
    id: "09",
    category: "Pricing",
    question: "What is The Cost That Packers and Movers Charges?",
    answer:
      "The Cost of Packers and Movers is Calculated By Adding up The Distance The Goods are Transported, The items Being Transported, Packaging Charges, and Labor Costs.",
  },
  {
    id: "10",
    category: "Packing",
    question: "Do Packers and Movers Pack Everything?",
    answer:
      "Avon Express Packers and Movers Can Take Care All of Your Hard Earned Goods While Packing and Moving. Avon Express Packers and Movers Packs All of Your Goods With Safety. They Are Experienced and Professionals To Pack Soft and Glass Items Which Can Crack Easily But They can Packed Them With 100% Safety.",
  },
  {
    id: "11",
    category: "Certification",
    question: "What is IBA Approved Packers and Movers?",
    answer:
      "The Packers and Movers Which Are Approved By The Indian Banks' Association (IBA) Are Known as IBA Approved Packers and Movers.",
  },
  {
    id: "12",
    category: "Insurance",
    question: "Should I Insure My Goods?",
    answer: "Yes, it is Highly Recommended.",
  },
  {
    id: "13",
    category: "Insurance",
    question: "Why Do I Need Insurance if Everything is Packed Professionally?",
    answer:
      "Depend on Customer — Items Can Get Damaged Due To Unforeseen Circumstances Like Accidents or Any Natural Disaster in The Moving Process.",
  },
];

const trustBadges = [
  {
    icon: <HiOutlineShieldCheck className="w-4 h-4" />,
    label: "IBA Certified & Approved",
  },
  {
    icon: <HiOutlineTruck className="w-4 h-4" />,
    label: "Pan-India Network",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: "Zero Hidden Charges",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Background-Verified Staff",
  },
];

export default function Faq() {
  return (
    <section className="bg-white border-t border-slate-100">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-14 lg:py-20">

        {/* ── Section Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 mb-7 pb-8 border-b border-slate-100">
          <div>
            <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.45em] text-orange-500 mb-2.5">
              <span className="w-5 h-px bg-orange-400" />
              Help Center
            </p>
             <h3 className="text-4xl upp md:text-6xl font-black text-slate-900 tracking-tighter leading-tight ">
            Frequently Asked <span className="text-orange-500">Questions.</span>
          </h3>
          
          </div>
         
        </div>

        {/* ── Body: Accordion + Sidebar ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_272px] gap-10 items-start">

          {/* LEFT: Accordion */}
          <div className="divide-y divide-slate-100">
            {FAQ_DATA.map((faq) => (
              <details key={faq.id} className="group">
                <summary className="flex items-start gap-3.5 py-3.5 cursor-pointer outline-none list-none [&::-webkit-details-marker]:hidden select-none">
                  {/* Number */}
                  <span className="flex-shrink-0 mt-[1px] text-[10px] font-black tabular-nums tracking-widest text-slate-300 group-open:text-orange-500 w-5 transition-colors duration-150">
                    {faq.id}
                  </span>

                  {/* Question text */}
                  <span className="flex-1 text-[13.5px] font-semibold text-slate-700 group-hover:text-slate-900 group-open:text-slate-900 leading-snug transition-colors duration-150">
                    {faq.question}
                  </span>

                  {/* Category pill */}
                  <span className="hidden lg:block flex-shrink-0 text-[9px] font-bold uppercase tracking-[0.22em] text-slate-400 group-open:text-orange-500 transition-colors duration-150 mt-[3px] whitespace-nowrap w-[80px] text-right">
                    {faq.category}
                  </span>

                  {/* Toggle icon */}
                  <div className="flex-shrink-0 ml-1 w-5 h-5 rounded-full border border-slate-200 group-open:border-orange-400 group-open:bg-orange-500 flex items-center justify-center transition-all duration-200 mt-[1px]">
                    <svg
                      className="w-2 h-2 text-slate-400 group-open:text-white group-open:rotate-45 transition-transform duration-200"
                      fill="none"
                      viewBox="0 0 10 10"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <line x1="5" y1="1" x2="5" y2="9" />
                      <line x1="1" y1="5" x2="9" y2="5" />
                    </svg>
                  </div>
                </summary>

                {/* Answer */}
                <div className="pl-9 pr-8 pb-4 pt-0.5">
                  <p className="text-[12.5px] text-slate-500 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>

          {/* RIGHT: Sidebar — stacks tightly with no empty space */}
          <aside className="lg:sticky lg:top-24 space-y-3">

            {/* Contact Card */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-7 h-7 rounded-lg bg-orange-100 flex items-center justify-center text-orange-500">
                  <HiOutlineChatAlt2 className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-[13px] font-black text-slate-800 tracking-tight">
                  Still have questions?
                </h3>
              </div>
              <p className="text-[11.5px] text-slate-500 leading-relaxed mb-3.5">
                Our Ludhiana-based team is available 24/7 for personalized assistance.
              </p>
              <a
                href="mailto:support@avonexpress.com"
                className="flex items-center justify-between w-full px-3.5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition-colors duration-200 mb-2"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.18em]">Email Support</span>
                <HiOutlineMail className="w-3.5 h-3.5" />
              </a>
              <a
                href="tel:+911234567890"
                className="flex items-center justify-between w-full px-3.5 py-2.5 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-xl transition-colors duration-200"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.18em]">Call Now — 24/7</span>
                <svg className="w-3.5 h-3.5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>

            {/* Stats 2×2 */}
            <div className="grid grid-cols-2 gap-2">
              {[
                { value: "15K+", label: "Relocations" },
                { value: "99%", label: "Safety Rate" },
                { value: "24/7", label: "Support" },
                { value: "IBA", label: "Approved" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-center"
                >
                  <p className="text-[1.1rem] font-black text-slate-900 tracking-tight leading-none">{s.value}</p>
                  <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-slate-400 mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400 mb-3">
                Why Trust Us
              </p>
              <div className="space-y-2.5">
                {trustBadges.map((item) => (
                  <div key={item.label} className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-500 flex-shrink-0">
                      {item.icon}
                    </span>
                    <span className="text-[11.5px] font-semibold text-slate-600">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ count strip */}
            <div className="rounded-2xl border border-orange-100 bg-orange-50 px-4 py-3 flex items-center justify-between">
              <div>
                <span className="text-xl font-black text-orange-500 leading-none">{FAQ_DATA.length}</span>
                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-orange-400 mt-0.5">Questions Answered</p>
              </div>
              <svg className="w-5 h-5 text-orange-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

          </aside>
        </div>

      
      </div>
    </section>
  );
}