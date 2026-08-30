import PolicyLayout from "@/components/PolicyLayout";
import { CreditCard, FileText, Globe, BadgeCheck, Lock } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Avon Express Packers & Movers",
  description:
    "Avon Express Packers & Movers privacy policy.",
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      subtitle=""
      icon={<Lock size={26} className="text-blue-500" />}
      activeHref="/privacy-policy"
    >
      <div className="px-6 py-8 text-sm text-slate-700 leading-relaxed space-y-6">

        {/* Point 1 */}
        <div className="flex items-start gap-3">
          <CreditCard size={20} className="text-red-500 mt-1 shrink-0" />
          <p>
            Currently, we do not accept payments by check.
          </p>
        </div>

        {/* Point 2 */}
        <div className="flex items-start gap-3">
          <FileText size={20} className="text-blue-500 mt-1 shrink-0" />
          <p>
            Please do not share our quotation/document with any other moving company.
          </p>
        </div>

        {/* Point 3 */}
        <div className="flex items-start gap-3">
          <Globe size={20} className="text-green-500 mt-1 shrink-0" />
          <p>
            Our service is available across India; however, we finalize every deal exclusively from our head office to ensure that all operations remain under our direct supervision and to prevent any errors.
          </p>
        </div>

        {/* Point 4 */}
        <div className="flex items-start gap-3">
          <BadgeCheck size={20} className="text-purple-500 mt-1 shrink-0" />
          <p>
            Our computer-generated documents do not require a signature.
          </p>
        </div>
{/* Point 5 */}
<div className="flex items-start gap-3">
  <FileText size={20} className="text-orange-500 mt-1 shrink-0" />
  <p>
    We do not have IBA approval; we provide third-party billing facilities.
  </p>
</div>
      </div>
    </PolicyLayout>
  );
}