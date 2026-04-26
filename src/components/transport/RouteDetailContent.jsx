import { formatName } from "@/app/transport/[slug]/page";
import { MapPin, ShieldCheck, Wallet, Zap } from "lucide-react";
import Link from "next/link";

function RouteDetailContent({ from, to }) {
    const formattedFrom = formatName(from);
    const formattedTo = formatName(to);

    return (
        <div className="relative bg-[#FAFAF8] overflow-hidden">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-orange-200/30 blur-[120px]"
            />

            <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-14 py-10 md:py-16 space-y-16">

                {/* Hero banner */}
                <section>
                    <header className="text-center max-w-4xl mx-auto mb-10">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-4 flex items-center justify-center gap-2">
                            <span className="w-10 h-px bg-orange-600" />
                            Transport Route
                            <span className="w-10 h-px bg-orange-600" />
                        </h2>

                        {/* Route display */}
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <div className="bg-white border border-slate-200 rounded-[16px] px-6 py-3 shadow-sm">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">From</p>
                                <p className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">{formattedFrom}</p>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">via road</span>
                            </div>
                            <div className="bg-orange-500 rounded-[16px] px-6 py-3 shadow-sm">
                                <p className="text-xs font-bold text-orange-100 uppercase tracking-widest mb-1">To</p>
                                <p className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">{formattedTo}</p>
                            </div>
                        </div>

                        <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
                            Safe, affordable, and reliable goods transport from {formattedFrom} to {formattedTo}.
                            GPS-tracked vehicles, trained staff, and zero hidden charges.
                        </p>
                        <div className="inline-flex items-center gap-2 mt-5 bg-white border border-slate-200 rounded-full px-5 py-2 shadow-sm">
                            <span className="text-orange-500 text-base">📞</span>
                            <span className="text-xs font-bold text-slate-700">Call us: +91 98145-56375</span>
                        </div>
                    </header>

                    {/* Highlights */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                        {[
                            { icon: ShieldCheck, label: "100% Safe Delivery", color: "text-green-500" },
                            { icon: MapPin, label: "GPS Tracked", color: "text-blue-500" },
                            { icon: Wallet, label: "No Hidden Charges", color: "text-orange-500" },
                            { icon: Zap, label: "On-Time Guarantee", color: "text-yellow-500" },
                        ].map(({ icon: Icon, label, color }) => (
                            <div
                                key={label}
                                className="bg-white border border-slate-200 rounded-[16px] p-5 text-center shadow-sm"
                            >
                                <div className="flex justify-center mb-4">
                                    <Icon size={22} className={`${color}`} />
                                </div>
                                <p className="text-[10px] font-bold text-slate-700 uppercase tracking-wide">
                                    {label}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Main content */}
                <section>
                    <div className="bg-white border border-slate-200 rounded-[28px] p-8 shadow-sm space-y-6">

                        <p className="text-sm text-slate-700 leading-relaxed">
                            {formattedFrom} To {formattedTo} Transport Services - Avon Express provides full-load and part-load transport services from {formattedFrom} to {formattedTo}, available 24 hours a day. We offer fixed rates with absolutely no hidden costs. Call us to receive a free quotation. We provide daily transport services from {formattedFrom} to {formattedTo}, available 24 hours a day, seven days a week. Transporter from {formattedFrom} to {formattedTo}: Are you looking for transport services from {formattedFrom} to {formattedTo}? Avon Express offers on-demand transport solutions to fulfill all your freight requirements—whether for full-loads or part-loads. Are you in search of a reliable transport service from {formattedFrom} to {formattedTo}? We provide professional logistics and freight solutions for businesses and individuals across India. As {formattedFrom}'s leading logistics company, we guarantee safe, hassle-free, and on-time delivery for our clients. This is precisely why we have established a strong foothold within {formattedFrom}'s transport industry.
                        </p>

                        <p className="text-sm text-slate-700 leading-relaxed">
                            {formattedFrom} to {formattedTo} 24x7 Available Tempo/Truck Rental Services – Are you looking to rent a tempo in your vicinity? Avon Express Packers and Movers offers reliable transportation services featuring a wide range of GPS-enabled and lockable vehicles. Available options include pickup trucks, Tata 407s, and trucks in sizes ranging from 14ft, 17ft, 19ft, 20ft, 22ft, 24ft, to 32ft. Both closed-body and open-body vehicle types are available.
                        </p>

                        <p className="text-sm text-slate-700 leading-relaxed">
                            {formattedFrom} To {formattedTo} Packers and Movers Services - If you are planning to shift your household belongings from {formattedFrom} to {formattedTo}, availing the services of professional packers and movers can make your relocation experience easy, secure, and hassle-free. Our moving company is highly popular among those seeking reliable packing and moving services for the {formattedFrom}-to-{formattedTo} route. We understand the value of your hard-earned money invested in your belongings. We would never want you to receive your items in a damaged condition; therefore, we take extra precautions to ensure their safety by employing the most modern security measures. When you utilize our services, you need not worry about the security of your essential belongings, as we handle your items with the same care and attention as if they were our own. Our team has established a secure environment for the transportation of your goods; to guarantee their safety, we have adopted innovative methods and equipment. With years of experience in this industry, we are dedicated to providing exceptional transport services from {formattedFrom} to {formattedTo}, catering to all your shipping-related requirements. Behind every shipment lies our unwavering commitment to utilizing the latest technology and delivering outstanding customer service.
                        </p>

                        <p className="text-sm text-slate-700 leading-relaxed">
                            {formattedFrom} To {formattedTo} Car/Bike/Activa Transport Services - Avon Express Packers and Movers is a trusted company in the field of car, bike, and Activa transportation. Our priority is to ensure that your car, bike, and Activa reach their destination safely, on time, and without any damage, via a suitable carrier.
                        </p>

                        <p className="text-sm text-slate-700 leading-relaxed">
                            {formattedFrom} To {formattedTo} Courier Services - Are you looking for courier services for deliveries? We provide fast, secure, and reliable courier solutions for documents, parcels, and large shipments.
                        </p>

                        <p className="text-sm text-slate-700 leading-relaxed">
                            When you partner with our company, Avon Express Packers & Movers, you will find all these services in one place. This will save you both time and money.
                        </p>

                    </div>
                </section>


                {/* Back link */}
                <div className="text-center">
                    <Link
                        href={`/transport/${from}`}
                        className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-6 py-2.5 shadow-sm hover:border-orange-300 hover:bg-orange-50 transition-all duration-200"
                    >
                        <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                        <span className="text-xs font-bold text-slate-700">All routes from {formattedFrom}</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default RouteDetailContent