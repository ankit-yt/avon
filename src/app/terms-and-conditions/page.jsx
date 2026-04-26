import PolicyLayout from "@/components/PolicyLayout";
import {
  Scale,
  Wrench,
  ShieldAlert,
  Package,
  Clock,
  AlertOctagon,
  CreditCard,
} from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | Avon Express Packers & Movers",
  description:
    "Terms and conditions of Avon Express Packers & Movers.",
};

export default function TermsAndConditionsPage() {
  return (
    <PolicyLayout
      title="Terms & Conditions"
      subtitle=""
      icon={<Scale size={26} className="text-red-500" />}
      activeHref="/terms-and-conditions"
    >
      <div className="px-6 py-8 text-sm text-slate-700 leading-relaxed space-y-6">

        {/* Point 1 */}
        <div className="flex items-start gap-3">
          <Scale size={20} className="text-slate-600 mt-1 shrink-0" />
          <p>
            Any legal dispute shall be subject exclusively to the jurisdiction of Chandigarh.
          </p>
        </div>

        {/* Point 2 */}
        <div className="flex items-start gap-3">
          <Wrench size={20} className="text-slate-600 mt-1 shrink-0" />
          <p>
            We do not provide electricians, plumbers, or carpenters.
          </p>
        </div>

        {/* Point 3 */}
        <div className="flex items-start gap-3">
          <ShieldAlert size={20} className="text-slate-600 mt-1 shrink-0" />
          <p>
            We do not take responsibility for cash, jewelry, documents, laptops, or mobile phones.
          </p>
        </div>

        {/* Point 4 */}
        <div className="flex items-start gap-3">
          <Package size={20} className="text-slate-600 mt-1 shrink-0" />
          <p>
            We are not responsible for any damage to goods packed by the customer.
          </p>
        </div>

        {/* Point 5 */}
        <div className="flex items-start gap-3">
          <Clock size={20} className="text-slate-600 mt-1 shrink-0" />
          <p>
            If, for your own convenience, you ask us to return the next day to perform the same task, we will charge an additional fee.
          </p>
        </div>

        {/* Point 6 */}
        <div className="flex items-start gap-3">
          <AlertOctagon size={20} className="text-slate-600 mt-1 shrink-0" />
          <p>
            We accept no responsibility for the breakage of items such as glass, stone, and flower pots.
          </p>
        </div>

        {/* Point 7 */}
        <div className="flex items-start gap-3">
          <Clock size={20} className="text-slate-600 mt-1 shrink-0" />
          <p>
            We do not accept responsibility for any breakage occurring 24 hours after delivery.
          </p>
        </div>

        {/* Point 8 */}
        <div className="flex items-start gap-3">
          <Package size={20} className="text-slate-600 mt-1 shrink-0" />
          <p>
            If the number of items exceeds the specified quantity, an additional charge will be levied.
          </p>
        </div>

        {/* Point 9 */}
        <div className="flex items-start gap-3">
          <ShieldAlert size={20} className="text-slate-600 mt-1 shrink-0" />
          <p>
            We will not assume any responsibility for any of the customer's belongings that go missing 24 hours after the shifting.
          </p>
        </div>

        {/* Point 10 */}
        <div className="flex items-start gap-3">
          <CreditCard size={20} className="text-slate-600 mt-1 shrink-0" />
          <p>
            Full Payment 100% — Loading Point
          </p>
        </div>

      </div>
    </PolicyLayout>
  );
}