import PolicyLayout from "@/components/PolicyLayout";
import {
  Info,
  UserX,
  Building2,
  RefreshCcw,
  Clock,
  CreditCard,
} from "lucide-react";

export const metadata = {
  title: "Refund & Cancellation Policy | Avon Express Packers & Movers",
  description:
    "Refund and cancellation policy.",
};

export default function RefundAndCancellationPage() {
  return (
    <PolicyLayout
      title="Refund & Cancellation Policy"
      subtitle=""
      icon={<RefreshCcw size={26} className="text-purple-500" />}
      activeHref="/refund-and-cancellation"
    >
      <div className="px-6 py-8 text-sm text-slate-700 leading-relaxed space-y-6">

        {/* Intro */}
        <div className="flex items-start gap-3">
          <Info size={20} className="text-blue-500 mt-1 shrink-0" />
          <p>
            We understand that plans can change. Whether your transfer order arrived late, you received a revised schedule, or there is any other reason—Avon Express Packers and Movers strives to remain fair and transparent regarding cancellations and refunds.
          </p>
        </div>

        {/* 1 */}
        <div className="flex items-start gap-3">
          <UserX size={20} className="text-red-500 mt-1 shrink-0" />
          <p>
            1. Cancellation by the Customer
          </p>
        </div>

        <div className="pl-8 space-y-4">

          <p>
            If you need to cancel your booking, please inform us as soon as possible. Our refund structure is as follows:
          </p>

          <div className="flex items-start gap-3">
            <Clock size={20} className="text-green-500 mt-1 shrink-0" />
            <p>
              5 days prior to shifting: 100% refund of the booking token/advance amount.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <Clock size={20} className="text-yellow-500 mt-1 shrink-0" />
            <p>
              2 Days Prior to Shifting: 50% Refund of the Booking Token/Advance Amount.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <Clock size={20} className="text-red-500 mt-1 shrink-0" />
            <p>
              12 hours or less: No refund will be issued for the booking token (as we will have already booked the labor and vehicles specifically for you).
            </p>
          </div>

        </div>

        {/* 2 */}
        <div className="flex items-start gap-3">
          <Building2 size={20} className="text-slate-600 mt-1 shrink-0" />
          <p>
            2. Cancellation by Us
          </p>
        </div>

        <div className="pl-8">
          <p>
            In very rare instances, if we are unable to fulfill your booking due to operational difficulties or safety reasons (such as adverse weather), we will provide a 100% refund of the full amount you paid, regardless of the timing.
          </p>
        </div>

        {/* 3 */}
        <div className="flex items-start gap-3">
          <RefreshCcw size={20} className="text-purple-500 mt-1 shrink-0" />
          <p>
            3. Refund Process
          </p>
        </div>

        <div className="pl-8 space-y-4">
          <div className="flex items-start gap-3">
            <Clock size={20} className="text-slate-600 mt-1 shrink-0" />
            <p>
              Approved refunds are processed within 1–2 business days.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <CreditCard size={20} className="text-slate-600 mt-1 shrink-0" />
            <p>
              This amount will be credited back to your original payment method (bank account).
            </p>
          </div>
        </div>

      </div>
    </PolicyLayout>
  );
}