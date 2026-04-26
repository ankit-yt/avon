import PolicyLayout from "@/components/PolicyLayout";
import { AlertTriangle, FileText, Phone, Scale } from "lucide-react";

export const metadata = {
  title: "Disclaimer | Avon Express Packers & Movers",
  description:
    "Read the official disclaimer of Avon Express Packers & Movers.",
};

export default function DisclaimerPage() {
  return (
    <PolicyLayout
      title="Disclaimer"
      subtitle=""
       icon={<FileText size={26} className="text-white" />}
      activeHref="/disclaimer"
    >
      <div className="px-6 py-8 text-sm text-slate-700 leading-relaxed space-y-6">

        {/* Point 1 */}
        <div className="flex items-start gap-3">
          <AlertTriangle size={20} className="text-yellow-500 mt-1 shrink-0" />
          <p>
            If a customer uses our services without reviewing our Terms and Conditions and Privacy Policy, we shall not be held responsible for any issues that may arise subsequently.
          </p>
        </div>

        {/* Point 2 */}
        <div className="flex items-start gap-3">
          <Phone size={20} className="text-blue-500 mt-1 shrink-0" />
          <p>
            There is only one official number: 98145-56375.
          </p>
        </div>

        {/* Point 3 */}
        <div className="flex items-start gap-3">
          <Scale size={20} className="text-red-500 mt-1 shrink-0" />
          <p>
            Taking any material from our website is illegal.
          </p>
        </div>

      </div>
      
    </PolicyLayout>
  );
}