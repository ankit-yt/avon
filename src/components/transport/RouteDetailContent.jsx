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
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-3 flex items-center gap-2">
                                <span className="w-6 h-px bg-orange-600" /> Transport Services from {formattedFrom} to {formattedTo}
                            </h4>
                            <p className="text-xl font-extrabold text-slate-900 tracking-tight">
                                Reliable Goods Transport Services from{" "}
                                <span className="text-orange-500">{formattedFrom} to {formattedTo}</span>
                            </p>
                        </div>

                        <p className="text-sm text-slate-500 font-medium leading-relaxed">
                            Transport Services from {formattedFrom} to {formattedTo} – Avon Express offers full-load and part-load transport services from {formattedFrom} to {formattedTo}, available 24/7. We provide our services at fixed rates with no hidden costs. Call us to get a free quotation. We offer daily transport services from {formattedFrom} to {formattedTo}, available 24 hours a day, seven days a week. Transporter from {formattedFrom} to {formattedTo}: Are you looking for transport services from {formattedFrom} to {formattedTo}? Avon Express provides on-demand transport solutions to meet all your freight requirements—whether for full-load or part-load shipments. Avon Express Transport Company offers full-load and part-load transport services from {formattedFrom} to anywhere in India, 24/7. Whether you need to transport household goods, vehicles (cars, bikes, scooters), office equipment, or commercial cargo, we have GPS-enabled closed and open vehicles to ensure safe and timely delivery. We utilize our own fleet and trained drivers, ensuring complete transparency and accountability throughout the entire journey. Our team manages the entire process—from pickup to final delivery—so that you experience no hassle whatsoever. With same-day booking options and 24/7 customer support, we are your most trusted transport partner in {formattedFrom}. Avon Express Transport Company provides transport services across India and is recognized for its reliable planning, precise timelines, and total accountability. The company began with a clear promise: to deliver every shipment safely and on time. We understand that our clients' reputations and responsibilities are tied to every shipment; therefore, we handle your goods with the utmost care and respect. Our central hub monitors shipments 24/7, allowing us to prevent delays or other issues before they even occur. As a leading logistics company based in {formattedFrom}, we guarantee our clients safe, hassle-free, and timely deliveries. This is why we have established a strong foothold in {formattedFrom}’s transport industry.                        </p>

                        <div className="space-y-0"><h5 className="text-sm font-extrabold text-slate-900 leading-relaxed">India&apos;s 1st Online Trucks Booking Platform {formattedFrom} To {formattedTo}</h5>

                        <p className="text-sm text-slate-500 font-medium leading-relaxed !mt-0">
                            Are you looking for reliable Online Truck Booking {formattedFrom} To {formattedTo}? Avon Express Packers and Movers offers truck rental services tailored to various transportation needs. Businesses can choose from a wide range of trucks based on the size, weight, and type of their goods, as well as the distance to be covered. These trucks can be used to transport goods from one location to another. Avon Express Packers and Movers provide reliable transport services using a variety of GPS-equipped vehicles. These include mini-trucks, Tata Ace, Mahindra Bolero Pickups, Bada Dost, and Tata 407 (available with container sizes of 14ft, 17ft, 19ft, 20ft, 22ft, 24ft, and 32ft), as well as 40ft and 50ft trailers. Both closed-body and open-body vehicles are available here.
                        </p></div>


                        <div className="space-y-0"><h5 className="text-sm font-extrabold text-slate-900 leading-relaxed">{formattedFrom} To {formattedTo} Packers and Movers Services</h5>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed !mt-0">
                            If you are planning to shift your household belongings from {formattedFrom} to {formattedTo}, availing the services of professional packers and movers can make your relocation experience easy, secure, and hassle-free. Our moving company is highly popular among those seeking reliable packing and moving services for the {formattedFrom}-to-{formattedTo} route. We understand the value of your hard-earned money invested in your belongings. We would never want you to receive your items in a damaged condition; therefore, we take extra precautions to ensure their safety by employing the most modern security measures. When you utilize our services, you need not worry about the security of your essential belongings, as we handle your items with the same care and attention as if they were our own. Our team has established a secure environment for the transportation of your goods; to guarantee their safety, we have adopted innovative methods and equipment. With years of experience in this industry, we are dedicated to providing exceptional transport services from {formattedFrom} to {formattedTo}, catering to all your shipping-related requirements. Behind every shipment lies our unwavering commitment to utilizing the latest technology and delivering outstanding customer service.
                        </p></div>


                        <div className="space-y-0"><h5 className="text-sm font-extrabold text-slate-900 leading-relaxed">{formattedFrom} To {formattedTo} Car/Bike/Activa Transport Services</h5>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed !mt-0">
                            Avon Express Packers and Movers is a trusted company in the field of car, bike, and Activa transportation. Our priority is to ensure that your car, bike, and Activa reach their destination safely, on time, and without any damage, via a suitable carrier.
                        </p></div>

                        <div className="space-y-0"><h5 className="text-sm font-extrabold text-slate-900 leading-relaxed">Full-Truck Load Services {formattedFrom} To {formattedTo}</h5>

                        <p className="text-sm text-slate-500 font-medium leading-relaxed !mt-0">
                            Book an entire truck for your large shipments. This option ensures faster delivery, as the truck does not make any stops between your warehouse and the final destination. Your goods remain secure throughout the entire journey.
                        </p></div>

                        <div className="space-y-0"><h5 className="text-sm font-extrabold text-slate-900 leading-relaxed">Part/Sharing Load Services {formattedFrom} To {formattedTo}</h5>

                        <p className="text-sm text-slate-500 font-medium leading-relaxed !mt-0">
                            You only pay for the space you use. We combine your smaller shipments with those of others to transport them to your destination. This helps reduce costs while ensuring that strict safety standards are fully upheld.
                        </p></div>

                        <p className="text-sm text-slate-500 font-medium leading-relaxed">
                            When you partner with our company, Avon Express Packers &amp; Movers, you will find all these services in one place. This will save you both time and money.
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
