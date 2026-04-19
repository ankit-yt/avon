/* ─────────────────────────────────────────────
   Site-wide constants & data
────────────────────────────────────────────── */

export const SITE = {
  name: "Avon Express Packers & Movers",
  tagline: "India's Trusted IBA Approved Moving Company",
  phone: "+919814556375",
  phoneDisplay: "+91 981-455-6375",
  email: "avonexpresspackersandmovers@gmail.com",
  address: {
    street: "Avon House, Transport Area, Sector 26 East",
    city: "Chandigarh",
    state: "Chandigarh",
    pin: "160019",
    country: "India",
  },
  mapUrl: "https://goo.gl/maps/SjG9QUfT6J1qD8L69",
  whatsapp: {
    base: "https://wa.me/919814556375",
    quote: "https://wa.me/919814556375",
    track: "https://api.whatsapp.com/send/?phone=919814556375&text=Track+My+Consignment+%28Please+Send+Your+Consignment+Number%29",
    pay: "https://api.whatsapp.com/send/?phone=%2B919814556375&text=I+Want+To+Pay+Online%21",
    bill: "https://api.whatsapp.com/send/?phone=%2B919814556375&text=Bill+For+Claim%21",
    video: "https://api.whatsapp.com/send/?phone=%2B919814556375&text=Please+Share+Your+Video+Call+Link%21",
    update: "https://api.whatsapp.com/send/?phone=%2B919814556375&text=Regular+Notifications%21",
  },
  social: {
    facebook: "https://www.facebook.com/avonexpresspackersandmovers",
    twitter: "https://www.twitter.com/avon_express",
    instagram: "https://www.instagram.com/avonexpresspackers",
    linkedin: "https://www.linkedin.com/in/avon-express-packers-and-movers",
    youtube: "https://www.youtube.com/channel/UC6Gns5u4bvtOosZHMzoep9g",
    pinterest: "https://www.pinterest.com/avonexpresspackers",
  },
  playStore: "https://play.google.com/store/apps/details?id=com.company.avonexpresspackersandmovers.app",
  iba: "https://www.ibaapprovedpackersandmovers.in",
};

export const STATS = [
  { num: "32K+", label: "Happy Clients" },
  { num: "4.8★", label: "Average Rating" },
  { num: "25+", label: "Years Experience" },
  { num: "100+", label: "Cities Covered" },
];

export const SERVICES = [
  {
    num: "01",
    title: "Household Shifting",
    desc: "Expert relocation of all household items with professional packing, secure loading, and careful delivery to your new home across India.",
    href: "https://www.youtube.com/channel/UC6Gns5u4bvtOosZHMzoep9g",
    icon: "home",
  },
  {
    num: "02",
    title: "Car Transport",
    desc: "Safe door-to-door car carrier services across all major cities. Fully insured with GPS tracking for your peace of mind.",
    href: "https://www.youtube.com/watch?v=rkrrscxlfNg",
    icon: "car",
  },
  {
    num: "03",
    title: "Bike Transport",
    desc: "Specialized two-wheeler transport with custom crating for motorcycles and scooters. Delivered damage-free, on time.",
    href: "https://www.youtube.com/watch?v=QvY_BmH_EUY",
    icon: "bike",
  },
  {
    num: "04",
    title: "Activa Transport",
    desc: "Dedicated Activa and scooter transport with secure packaging and prompt delivery nationwide, handled by experts.",
    href: "https://www.youtube.com/watch?v=QvY_BmH_EUY",
    icon: "scooter",
  },
  {
    num: "05",
    title: "Office Shifting",
    desc: "Minimal disruption office relocation. We manage desks, servers, and equipment with corporate-grade care.",
    href: "https://www.youtube.com/watch?v=j6VXDfIp86w",
    icon: "office",
  },
  {
    num: "06",
    title: "Truck & Tempo Hire",
    desc: "Full fleet: Pickup, Tata 407, 14ft to 32ft. Closed & open body. Book by hour or long-distance — your choice.",
    href: "https://www.youtube.com/watch?v=h3ENG3ZxZrQ",
    icon: "truck",
  },
];

export const WHY_POINTS = [
  {
    title: "IBA Approved",
    desc: "Officially approved by the Indian Banks' Association for employee relocations nationwide.",
    icon: "shield",
  },
  {
    title: "On-Time Delivery",
    desc: "Committed schedules with real-time consignment tracking via WhatsApp.",
    icon: "clock",
  },
  {
    title: "Zero Damage Guarantee",
    desc: "Professional packing materials and trained handlers ensure goods arrive intact.",
    icon: "check",
  },
  {
    title: "24/7 Support",
    desc: "Our team is available round the clock, 365 days a year — always here for you.",
    icon: "chat",
  },
];

export const WHY_STATS = [
  { num: "32K", suffix: "+", label: "Satisfied Customers" },
  { num: "4.8", suffix: "★", label: "Google Rating" },
  { num: "25", suffix: "+", label: "Years Operating" },
  { num: "100", suffix: "%", label: "Insured Moves" },
];

export const TESTIMONIALS = [
  {
    text: "Avon Express provided excellent packing services at a very reasonable rate. They arrived on time, packed everything efficiently. All staff were friendly and professional. Highly recommend!",
    name: "Deepak Sharma",
    org: "Power Grid Corporation",
    initials: "DS",
    from: "Gurgaon",
  },
  {
    text: "Shifted household goods from Pune to Hyderabad. Brilliant packing and a smooth moving experience. Their customer service is always reassuring. Truly grateful for the impeccable service.",
    name: "Priyanka Saha",
    org: "Reserve Bank of India",
    initials: "PS",
    from: "Pune → Hyderabad",
  },
  {
    text: "Moved from Mumbai to Dharamshala. Found Avon Express to be excellent. The entire process was smooth and stress-free. Very happy with the quality of their work.",
    name: "Asif Basra",
    org: "Film Industry Professional",
    initials: "AB",
    from: "Mumbai → Dharamshala",
  },
  {
    text: "Shifted from Jalandhar to Delhi and had a great experience. The team members were highly skilled and handled everything with care. Avon Express lives up to its reputation.",
    name: "Gaurav Kuthiala",
    org: "Medical Professional",
    initials: "GK",
    from: "Jalandhar → Delhi",
  },
];

export const CLIENTS = [
  "SBI Bank", "PNB", "Bank of Baroda", "HDFC Bank", "ICICI Bank",
  "Axis Bank", "Power Grid", "BSNL", "RBI", "Canara Bank",
  "Union Bank", "LIC", "NIC", "OBC", "Bank of India",
  "Central Bank", "Indian Bank", "UCO Bank", "Syndicate Bank", "Allahabad Bank",
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact us", href: "#contact" },
];

export const FOOTER_QUICK = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Pay Online", href: SITE.whatsapp.pay },
  { label: "Track Shipment", href: SITE.whatsapp.track },
  { label: "Bill For Claim", href: SITE.whatsapp.bill },
  { label: "Video Survey", href: SITE.whatsapp.video },
  { label: "Booking Process", href: "https://www.ibaapprovedpackersandmovers.in/packers-and-movers-booking-process" },
  { label: "Cost Calculator", href: "https://www.ibaapprovedpackersandmovers.in/packers-and-movers-charges" },
];

export const FOOTER_SERVICES = [
  { label: "Household Shifting", href: "https://www.youtube.com/channel/UC6Gns5u4bvtOosZHMzoep9g" },
  { label: "Car Transport", href: "https://www.youtube.com/watch?v=rkrrscxlfNg" },
  { label: "Bike Transport", href: "https://www.youtube.com/watch?v=QvY_BmH_EUY" },
  { label: "Activa Transport", href: "https://www.youtube.com/watch?v=QvY_BmH_EUY" },
  { label: "Office Shifting", href: "https://www.youtube.com/watch?v=j6VXDfIp86w" },
  { label: "Truck & Tempo Hire", href: "https://www.youtube.com/watch?v=h3ENG3ZxZrQ" },
  { label: "IBA Approved", href: "https://www.ibaapprovedpackersandmovers.in" },
  { label: "Gallery & Testimonials", href: "https://www.youtube.com/channel/UC6Gns5u4bvtOosZHMzoep9g" },
];


export const PRICING_DATA = [
  { type: "1 BHK", d50: "₹ 6000 - ₹ 12500", d500: "₹ 12500 - ₹ 17500", d1000: "₹ 17500 - ₹ 26500", d1500: "₹ 26500 - ₹ 31500", d2500: "₹ 31500 - ₹ 37500", d3000: "₹ 37500 - ₹ 47500", warehouse: "₹ 2500/Month" },

  { type: "2 BHK", d50: "₹ 13500 - ₹ 16500", d500: "₹ 16500 - ₹ 26500", d1000: "₹ 26500 - ₹ 32500", d1500: "₹ 32500 - ₹ 42500", d2500: "₹ 42500 - ₹ 48500", d3000: "₹ 48500 - ₹ 67500", warehouse: "₹ 3500/Month" },

  { type: "3 BHK", d50: "₹ 16500 - ₹ 22500", d500: "₹ 22500 - ₹ 31500", d1000: "₹ 31500 - ₹ 40500", d1500: "₹ 40500 - ₹ 53500", d2500: "₹ 53500 - ₹ 67500", d3000: "₹ 67500 - ₹ 87500", warehouse: "₹ 5000/Month" },

  { type: "4 BHK", d50: "₹ 22500 - ₹ 31500", d500: "₹ 31500 - ₹ 37500", d1000: "₹ 37500 - ₹ 57500", d1500: "₹ 57500 - ₹ 67500", d2500: "₹ 67500 - ₹ 87500", d3000: "₹ 87500 - ₹ 97500", warehouse: "₹ 6000/Month" },

  { type: "5 BHK", d50: "₹ 31500 - ₹ 37500", d500: "₹ 37500 - ₹ 57500", d1000: "₹ 57500 - ₹ 72500", d1500: "₹ 72500 - ₹ 87500", d2500: "₹ 87500 - ₹ 97500", d3000: "₹ 97500 - ₹ 101500", warehouse: "₹ 7000/Month" },

  { type: "Car Transport", d50: "₹ 5000 - ₹ 9000", d500: "₹ 9000 - ₹ 12500", d1000: "₹ 12500 - ₹ 18500", d1500: "₹ 18500 - ₹ 24500", d2500: "₹ 24500 - ₹ 30500", d3000: "₹ 30500 - ₹ 35500", warehouse: "₹ 2000/Month" },

  { type: "Bike Transport", d50: "₹ 2000 - ₹ 3000", d500: "₹ 3000 - ₹ 7000", d1000: "₹ 7000 - ₹ 10000", d1500: "₹ 10000 - ₹ 12000", d2500: "₹ 12000 - ₹ 18500", d3000: "₹ 18500 - ₹ 20500", warehouse: "₹ 1500/Month" },

  { type: "Activa Transport", d50: "₹ 1500 - ₹ 2500", d500: "₹ 2500 - ₹ 6500", d1000: "₹ 6500 - ₹ 9500", d1500: "₹ 9500 - ₹ 11500", d2500: "₹ 11500 - ₹ 18000", d3000: "₹ 18000 - ₹ 20000", warehouse: "₹ 1000/Month" },
];
