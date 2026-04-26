import PolicyLayout from "@/components/PolicyLayout";
import { ReceiptText, Truck, Package } from "lucide-react";

export const metadata = {
  title: "GST Information | Avon Express Packers & Movers",
  description: "GST charges applicable on services.",
};

export default function GstInformationPage() {
  return (
    <PolicyLayout
      title="GST Information"
      subtitle=""
      icon={<ReceiptText size={26} className="text-green-500" />}
      activeHref="/gst-information"
    >
      <div className="px-6 py-8 text-sm text-slate-700 leading-relaxed space-y-6">

        {/* Point 1 */}
        <div className="flex items-start gap-3">
          <Truck size={20} className="text-blue-500 mt-1 shrink-0" />
          <p>
            Transportation = 5%
          </p>
        </div>

        {/* Point 2 */}
        <div className="flex items-start gap-3">
          <Package size={20} className="text-purple-500 mt-1 shrink-0" />
          <p>
            Packing Material+Packing+Loading+Transportation+Unloading+Unpacking = 18%
          </p>
        </div>

      </div>
    </PolicyLayout>
  );
}