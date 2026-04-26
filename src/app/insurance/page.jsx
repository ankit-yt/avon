import PolicyLayout from "@/components/PolicyLayout";
import {
  ShieldOff,
  Truck,
  ShieldCheck,
  PackageCheck,
  Clock,
  FileWarning,
  Shield,
} from "lucide-react";

export const metadata = {
  title: "Insurance Policy | Avon Express Packers & Movers",
  description:
    "Insurance policy of Avon Express Packers & Movers.",
};

export default function InsurancePage() {
  return (
    <PolicyLayout
      title="Insurance"
      subtitle=""
      icon={<Shield size={26} className="text-orange-500" />}
      activeHref="/insurance"
    >
      <div className="px-6 py-8 text-sm text-slate-700 leading-relaxed space-y-6">

        {/* Top Disclaimer */}
        <div className="flex items-start gap-3">
          <ShieldOff size={20} className="text-red-500 mt-1 shrink-0" />
          <p>
            No liability for damaged goods without insurance.
          </p>
        </div>

        {/* 1 */}
        <div className="flex items-start gap-3">
          <Truck size={20} className="text-blue-500 mt-1 shrink-0" />
          <p>
            1. Transit Insurance
          </p>
        </div>

        <div className="pl-8">
          <p>
            Without transit insurance, we assume no responsibility for any loss or damage caused by accidents, theft, fire, rain, collision, or any other hazards associated with road or river transport. Transit Insurance (covering only accidents, theft, fire, rain, collision, or any other hazards associated with road or river transport) — The final value will be determined by the insurance company's representatives, based on the bills for your goods.
          </p>
        </div>

        {/* 2 */}
        <div className="flex items-start gap-3">
          <ShieldCheck size={20} className="text-green-500 mt-1 shrink-0" />
          <p>
            2. Full Coverage Insurance
          </p>
        </div>

        <div className="pl-8">
          <p>
            Full Coverage Insurance (in case goods are damaged during transit) — The final value will be determined by representatives of the insurance company, based on the bills for your goods.
          </p>
        </div>

        {/* 3 */}
        <div className="flex items-start gap-3">
          <PackageCheck size={20} className="text-purple-500 mt-1 shrink-0" />
          <p>
            3. Our Own Insurance Policy (Avon Premium Protection)
          </p>
        </div>

        <div className="pl-8 space-y-4">

          <div className="flex items-start gap-3">
            <Clock size={20} className="text-slate-600 mt-1 shrink-0" />
            <p>
              In the event of any damage occurring during transportation, customers must notify us within 24 hours of delivery.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <FileWarning size={20} className="text-slate-600 mt-1 shrink-0" />
            <p>
              Claims will be investigated, and the refund or repair amount will be processed within 7–10 business days of the investigation's completion.
            </p>
          </div>

        </div>

        {/* Note */}
        <div className="flex items-start gap-3">
          <FileWarning size={20} className="text-orange-500 mt-1 shrink-0" />
          <p>
            Note: If an incident occurs, the person in whose name the insurance policy is held will contact the insurance company to file a claim.
          </p>
        </div>

      </div>
    </PolicyLayout>
  );
}