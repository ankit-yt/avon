
import {
  HiOutlineChatAlt2,
  HiOutlineArchive,
  HiOutlineTruck,
  HiOutlineHome,
  HiOutlineEmojiHappy,
  HiOutlineInboxIn,
} from "react-icons/hi";

import DiscussAndQuotation from "@/assets/images/Work/Discuss-and-Quotation.png";
import PremiumPacking from "@/assets/images/Work/Premium-Packing.png";
import SafeLoading from "@/assets/images/Work/Safe-Loading.png";
import SecureTransportation from "@/assets/images/Work/Secure-Transportation.png";
import PrecisionUnloading from "@/assets/images/Work/Precision-Unloading.png";
import UnpackingAndSetup from "@/assets/images/Work/Unpacking-and-Setup.png";
import HappyClient from "@/assets/images/Work/Happy-Client.png";

import StepsTabs from "./StepsTabs";
const DETAIL_TEXT = "avon express packers and movers";
const STEPS = [
  {
    id: "step-01",
    phase: "01",
    shortTitle: "Quotation",
    title: "Discuss and Quotation",
    desc: "Once You Are Satisfied  With Our Quotation, You Proceed To Reserve Our Services.",
    detail: DETAIL_TEXT,
    icon: <HiOutlineChatAlt2 className="w-5 h-5" />,
    image: DiscussAndQuotation,
  },
  {
    id: "step-02",
    phase: "02",
    shortTitle: "Packing",
    title: "Premium Packing",
    desc: "After That We Will Pack All Your Belongings Carefully so That They Are Safe.",
    detail: DETAIL_TEXT,
    icon: <HiOutlineArchive className="w-5 h-5" />,
    image: PremiumPacking,
  },
  {
    id: "step-03",
    phase: "03",
    shortTitle: "Loading",
    title: "Safe Loading",
    desc: "We Will Then Safely Load Them Into Our Vehicle, Which Will Be A Lockable Truck.",
    detail: DETAIL_TEXT,
    icon: <HiOutlineInboxIn className="w-5 h-5" />,
    image: SafeLoading,
  },
  {
    id: "step-04",
    phase: "04",
    shortTitle: "Transportation",
    title: "Secure Transportation",
    desc: "Your Goods Will Be Delivered To Your Destination By Our Reliable Vehicle.",
    detail: DETAIL_TEXT,
    icon: <HiOutlineTruck className="w-5 h-5" />,
    image: SecureTransportation,
  },
  {
    id: "step-05",
    phase: "05",
    shortTitle: "Unloading",
    title: "Precision Unloading",
    desc: "We Will Handle The Unloading and Deliver The Luggage Safely To Your Destination.",
    detail: DETAIL_TEXT,
    icon: <HiOutlineTruck className="w-5 h-5" />,
    image: PrecisionUnloading,
  },
  {
    id: "step-06",
    phase: "06",
    shortTitle: "Unpacking",
    title: "Unpacking and Setup",
    desc: "We Unpack Your Belongings Properly At Your New Home and Set Them Up At Your Specified Location Without Any Damage.",
    detail: DETAIL_TEXT,
    icon: <HiOutlineHome className="w-5 h-5" />,
    image: UnpackingAndSetup,
  },
  {
    id: "step-07",
    phase: "07",
    shortTitle: "Happy Client",
    title: "Happy Client",
    desc: "Complete Satisfaction and Stress Free Shifting.",
    detail: DETAIL_TEXT,
    icon: <HiOutlineEmojiHappy className="w-5 h-5" />,
    image: HappyClient,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Avon Express Packers and Movers Works",
  description:
    "The complete 7-step relocation process used by Avon Express Packers and Movers — India's IBA-approved moving company — from initial quotation to final setup at your new home.",
  totalTime: "P1D",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "INR",
    value: "Varies by distance and inventory",
  },
  step: STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.title.replace("\n", " "),
    text: s.desc,
    url: `https://www.avonexpress.in/how-it-works#${s.id}`,
  })),
};

export default function HowItWorks() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section
        aria-labelledby="how-it-works-heading"
        itemScope
        itemType="https://schema.org/HowTo"
        className="bg-white border-t border-slate-100"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 lg:py-5">



          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-4 flex items-center justify-center gap-2">
              <span className="w-8  bg-orange-600" />
              <span className="w-10 h-px bg-orange-600" /> Operational Blueprint <span className="w-10 h-px bg-orange-600" />
              <span className="w-8  bg-orange-600" />
            </h2>
            <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter leading-tight mb-4">
              HOW &nbsp;IT <span className="text-orange-500">&nbsp;WORK.</span>
            </h3>

          </div>

          <StepsTabs steps={STEPS} />

          <ol
            aria-hidden="true"
            className="sr-only"
            itemProp="step"
          >
            {STEPS.map((step, i) => (
              <li
                key={step.id}
                id={step.id}
                itemScope
                itemType="https://schema.org/HowToStep"
              >
                <meta itemProp="position" content={String(i + 1)} />
                <h3 itemProp="name">{step.title.replace("\n", " ")}</h3>
                <p itemProp="text">{step.desc}</p>
              </li>
            ))}
          </ol>



        </div>
      </section>
    </>
  );
}