import { HiOutlineChatAlt2, HiOutlineExclamation, HiOutlineMail, HiOutlineShieldCheck, HiOutlineTruck, HiOutlineUserGroup } from "react-icons/hi";

const FAQ_DATA = [
  {
    id: "01",
    category: "About Us",
    question: "Which is the number one packers and movers transport company in India?",
    answer:
      "Avon Express Packers and Movers is the largest provider of moving supplies in India — Avon Express Packers and Movers is a well-known name among moving companies in India.",
  },
  {
    id: "02",
    category: "Transport",
    question: "How are goods transported from one city to another?",
    answer:
      "If you need to move household items, office equipment, a car, a bike, or an Activa from one place to another, packers and movers are the best option. You can utilize this service to relocate from one city to another.",
  },
  {
    id: "03",
    category: "Basics",
    question: "What are Packers and Movers?",
    answer:
      "When you shift household items, office equipment, a car, a bike, or an Activa from one place to another, you need packers and movers.",
  },
  {
    id: "04",
    category: "Basics",
    question: "Why are packers and movers needed?",
    answer:
      "You cannot transport your household items, office equipment, car, bike, or scooter from one place to another on your own, as this requires a wide range of resources and facilities—which you do not possess. To avoid any kind of damage, you will need to enlist the assistance of packers and movers.",
  },
  {
    id: "05",
    category: "Process",
    question: "How do packers and movers work?",
    answer:
      "You simply need to specify the name of the service you require—for everything else, you can speak with us by calling our number. 1. Discussion and Quotation 2. Premium Packing 3. Secure Loading 4. Safe Transportation 5. Precise Unloading 6. Unpacking and Setup 7. Happy Customers.",
  },
  {
    id: "06",
    category: "Finding Us",
    question: "How to find packers and movers?",
    answer:
      "You can obtain this from the internet, Google, websites, Facebook, YouTube, Instagram, Twitter, etc.",
  },
  {
    id: "07",
    category: "Trust",
    question: "How do I find a trustworthy company?",
    answer:
      "1. Check their registration certificate and license. 2. Visit their website and social media profiles. 3. To verify packers and movers, it is essential to carefully read online reviews. 4. Nowadays, packers and movers' services are available online; nevertheless, you should visit them in person.",
  },
  {
    id: "08",
    category: "Booking",
    question: "How to book packers and movers?",
    answer:
      "You can make a booking by calling the packers and movers' customer care number.",
  },
  {
    id: "09",
    category: "Verification",
    question: "How can I find out if the packers and movers I have chosen are the right ones?",
    answer:
      "1. Check their registration certificate and license. 2. Visit their website and social media profiles. 3. To verify packers and movers, it is essential to carefully read online reviews. 4. Nowadays, packers and movers' services are available online; nevertheless, you should visit them in person.",
  },
  {
    id: "10",
    category: "Pricing",
    question: "How much do packers and movers charge?",
    answer:
      "The cost of packers and movers is calculated by adding up the distance of the shipment, the items to be transported, packaging charges, and labor costs.",
  },
  {
    id: "11",
    category: "Packing",
    question: "Do packers and movers pack everything?",
    answer:
      "Avon Express Packers and Movers can take complete care of all your hard-earned belongings during the packing and moving process. Avon Express Packers and Movers pack all your items with absolute safety. They are experienced and professional in packing fragile and glass items—objects that can break easily—and they ensure they are packed with 100% security.",
  },
  {
    id: "12",
    category: "Value",
    question: "Is it Worth Paying For Packers and Movers?",
    answer:
      "If you wish to alleviate the stress associated with shifting your belongings, availing the services of professional packers and movers can prove to be beneficial. Packers and movers provide end-to-end services, including packing, loading, transportation, unloading, and unpacking.",
  },
  {
    id: "13",
    category: "Safety",
    question: "How do packers and movers ensure the safety of goods?",
    answer:
      "To ensure maximum safety during transport, we use high-quality packing materials such as bubble wrap, corrugated sheets, sturdy carton boxes, and protective covers.",
  },
  {
    id: "14",
    category: "Timing",
    question: "Do packers and movers arrive on time?",
    answer:
      "Yes, we do arrive on time; however, the arrival of our packers and movers may be delayed due to traffic or heavy rainfall. Nevertheless, we make every effort to reach the location at the scheduled time, as we monitor weather forecasts in advance and pay close attention to them.",
  },
  {
    id: "15",
    category: "Tips",
    question: "What are some tips for quick packing from a packers and movers company?",
    answer:
      "To pack quickly, you need to ensure exactly which items are to be moved and which ones are not.",
  },
  {
    id: "16",
    category: "Booking",
    question: "What specific points should be kept in mind when booking packers and movers?",
    answer:
      "If you reside in a high-rise building that lacks a service elevator, an additional fee may apply. To obtain an accurate quote, please specify your floor level when making your booking, and indicate whether the truck will have direct access to your residence or if your belongings will need to be hoisted up or lowered down using ropes.",
  },
  {
    id: "17",
    category: "Survey",
    question: "Why is a pre-move survey essential for shifting?",
    answer:
      "Conducting a survey prior to shifting is absolutely essential to address specific challenges—such as staircases, limited parking space, or the necessity of transporting items exclusively via the balcony. This survey assesses packing requirements, determines the necessary number of laborers and trucks, and verifies whether a truck can access the residence.",
  },
  {
    id: "18",
    category: "Damage",
    question: "What happens if the goods are damaged during transport?",
    answer:
      "No liability for damaged goods without insurance.",
  },
  {
    id: "19",
    category: "Certification",
    question: "What are IBA-approved packers and movers?",
    answer:
      "Packers and movers that are approved by the 'Indian Banks Association' (IBA) are known as 'IBA-approved packers and movers'.",
  },
  {
    id: "20",
    category: "Insurance",
    question: "Should I insure my belongings?",
    answer: "Yes, it is highly recommended.",
  },
  {
    id: "21",
    category: "Insurance",
    question: "If everything is packed professionally, why do I need insurance?",
    answer:
      "Customer-Dependent — During the process of transporting goods from one location to another, the items may sustain damage due to unforeseen circumstances, such as accidents or natural disasters.",
  },
];

const trustBadges = [
  {
    icon: <HiOutlineShieldCheck className="w-4 h-4" />,
    label: "Service With Smile and Honestly",
  },
  {
    icon: <HiOutlineTruck className="w-4 h-4" />,
    label: "Enjoy Serenity With Expert",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: "Trusted Budget-Friendly",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Safe and Damage-Free Shifting",
  },
  {
    icon: <HiOutlineUserGroup className="w-4 h-4" />,
    label: "We Have Better Driver, Staff, Labour",
  },
  {
    icon: <HiOutlineExclamation className="w-4 h-4" />,
    label: "⚠️ Don't Drink and Drive 👏",
  },
];
export default function Faq() {
  return (
    <section id="faq" className="bg-white border-t border-slate-100">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-14 lg:py-20">

        {/* ── Section Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 mb-7 pb-8 border-b border-slate-100">
          <div>
            <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.45em] text-orange-500 mb-2.5">
              <span className="w-5 h-px bg-orange-400" />
              Help Center
            </p>
             <h3 className="uppercase text-4xl upp md:text-6xl font-black text-slate-900 tracking-tighter leading-tight ">
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
                  Still Have Questions?
                </h3>
              </div>
              <p className="text-[11.5px] text-slate-500 leading-relaxed mb-3.5">
                If you have any questions, you can let us know.
              </p>
              <a

                className="flex items-center justify-between w-full px-3.5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition-colors duration-200 mb-2"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.18em]">Email Support</span>
                <HiOutlineMail className="w-3.5 h-3.5" />
              </a>
              <a
                
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
                { value: "200+", label: "Daily Happy Customer" },
                { value: "100%", label: "Safety Rate" },
                { value: "24/7", label: "Support" },
                { value: "5.0⭐", label: "Average Rating" },
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