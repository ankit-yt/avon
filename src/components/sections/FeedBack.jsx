import { FaStar } from "react-icons/fa";
import { HiCheckBadge } from "react-icons/hi2";

const reviews = [
  {
    name: "Deepak Sharma",
    location: "Power Grid",
    avatar: "DS",
    avatarBg: "#4285F4",
    rating: 5,
    date: "Recently",
    review:
      "Avon Express Packers and Movers Jammu provided me with excellent packing services at a very reasonable price. They arrived on time and packed all my belongings so efficiently that I didn't have to worry about a thing. Their entire staff was also very friendly and helpful. I highly recommend their services!",
  },
  {
    name: "Priyanka Saha",
    location: "Reserve Bank of India",
    avatar: "PS",
    avatarBg: "#EA4335",
    rating: 5,
    date: "Recently",
    review:
      "Recently, I availed the services of Avon Express Packers and Movers to shift my household goods and car, and I received excellent service from them. They also provided me with an IBA-approved bill for my claim.",
  },
  {
    name: "Asif Basra",
    location: "Actor",
    avatar: "AB",
    avatarBg: "#34A853",
    rating: 5,
    date: "Recently",
    review:
      "I had my household belongings shifted from Mumbai to Dharamshala. I hired Avon Express Packers and Movers for this task. I was pleased with the work done by Avon Express Packers.",
  },
  {
    name: "Gaurav Kuthiala",
    location: "Doctor",
    avatar: "GK",
    avatarBg: "#FBBC04",
    rating: 5,
    date: "Recently",
    review:
      "I shifted my household belongings from Delhi to Bangalore. My experience with 'Avon Express Packers and Movers' from Chandigarh was excellent. Their team members were extremely efficient.",
  },
  {
    name: "Ajay Jain",
    location: "Army",
    avatar: "VC",
    avatarBg: "#FF6D00",
    rating: 5,
    date: "Recently",
    review:
      "I shifted my household belongings from Pune to Hyderabad. I would like to thank Avon Express Packers and Movers for their excellent services. They packed my belongings in a superb manner and made the entire shifting experience incredibly smooth. Their customer service is also top-notch—always reassuring—which is something I highly appreciate.",
  },
  {
    name: "Deepak Agarwal",
    location: "Judge",
    avatar: "DA",
    avatarBg: "#7B1FA2",
    rating: 5,
    date: "Recently",
    review:
      "I recently used Avon Express Packers and Movers to shift my household goods, and I am very satisfied with their service. The team was professional, courteous and handled everything with care. The packing was neat and all my stuff arrived on time without any damage. Highly recommended for anyone looking for reliable and trustworthy packers and movers!",
  },
];

/* ── Google multicolour G icon ── */
const GoogleColorLogo = ({ size = 18 }) => (
  <svg height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

/* ── Google text wordmark ── */
const GoogleWordmark = () => (
  <svg viewBox="0 0 74 24" className="h-[12px] w-auto" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.24 8.19v2.46h5.88c-.18 1.38-.64 2.39-1.34 3.1-.86.86-2.2 1.8-4.54 1.8-3.62 0-6.45-2.92-6.45-6.54s2.83-6.54 6.45-6.54c1.95 0 3.38.77 4.43 1.76L15.4 2.5C13.94 1.08 11.98 0 9.24 0 4.28 0 .11 4.04.11 9s4.17 9 9.13 9c2.68 0 4.7-.88 6.28-2.52 1.62-1.62 2.13-3.91 2.13-5.75 0-.57-.04-1.1-.13-1.54H9.24z" fill="#4285F4"/>
    <path d="M25 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.28-3.52s3.28 1.43 3.28 3.52c0 2.07-1.52 3.52-3.28 3.52z" fill="#EA4335"/>
    <path d="M53.58 7.49h-.09c-.57-.68-1.67-1.3-3.06-1.3C47.53 6.19 45 8.72 45 12c0 3.26 2.53 5.81 5.43 5.81 1.39 0 2.49-.62 3.06-1.32h.09v.83c0 2.22-1.19 3.41-3.1 3.41-1.56 0-2.53-1.12-2.93-2.07l-2.22.92c.64 1.54 2.33 3.43 5.15 3.43 2.99 0 5.52-1.76 5.52-6.05V6.49h-2.42v1zm-2.93 8.03c-1.76 0-3.1-1.5-3.1-3.52 0-2.05 1.34-3.52 3.1-3.52 1.74 0 3.1 1.49 3.1 3.54.01 2.03-1.36 3.5-3.1 3.5z" fill="#4285F4"/>
    <path d="M38 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.28-3.52s3.28 1.43 3.28 3.52c0 2.07-1.52 3.52-3.28 3.52z" fill="#FBBC05"/>
    <path d="M58.93 1h2.42v16.57h-2.42z" fill="#34A853"/>
    <path d="M63.89 11.77c.05-2.22 1.81-3.58 3.17-3.58 1.06 0 1.95.53 2.25 1.28l-5.42 2.3zm8.07-1.99C71.29 7.7 69.52 6.19 67.11 6.19c-2.39 0-4.96 1.89-4.96 5.81 0 3.26 1.88 5.81 5.22 5.81 2.41 0 3.8-1.47 4.38-2.33l-1.79-1.19c-.6.88-1.41 1.46-2.59 1.46-1.17 0-2-.54-2.54-1.6l7.03-2.9-.9-2.17z" fill="#EA4335"/>
  </svg>
);

/* ── Star row ── */
function StarRow({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <FaStar
          key={s}
          size={14}
          className={s <= rating ? "text-[#FBBC04]" : "text-slate-200"}
        />
      ))}
    </div>
  );
}

/* ── Single Google-style review card ── */
function GoogleReviewCard({ review }) {
  return (
    <div className="bg-white rounded-[28px] border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 p-5 flex flex-col gap-3">

      {/* Row 1 — avatar + name + Google G */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 select-none"
            style={{ backgroundColor: review.avatarBg }}
          >
            {review.avatar}
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="text-[13.5px] font-black text-slate-900 leading-none">
                {review.name}
              </span>
              <HiCheckBadge size={14} className="text-[#4285F4] flex-shrink-0" />
            </div>
            <span className="text-[11px] text-slate-500 block mt-0.5">
              {review.location}
            </span>
          </div>
        </div>
        <GoogleColorLogo size={22} />
      </div>

      {/* Row 2 — stars + date */}
      <div className="flex items-center gap-2">
        <StarRow rating={review.rating} />
        <span className="text-[11px] text-slate-400">{review.date}</span>
      </div>

      {/* Row 3 — review body */}
      <p className="text-xs text-slate-600 leading-relaxed flex-1">
        {review.review}
      </p>

      {/* Row 4 — "Posted on Google" footer */}
      <div className="flex items-center gap-1.5 pt-3 border-t border-slate-100">
        <span className="text-[11px] text-slate-400">Posted on</span>
        <GoogleWordmark />
      </div>
    </div>
  );
}

/* ── Main server component ── */
export default function FeedBack() {
  const avg = (
    reviews.reduce((a, r) => a + r.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <section className="relative py-6 md:py-5 bg-[#FAFAF8] overflow-hidden">

      {/* Background blobs */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-125 h-125 rounded-full bg-orange-200/30 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 -right-32 w-125 h-125 rounded-full bg-orange-200/20 blur-[120px]" />

      <div className="relative z-10 max-w-330 mx-auto px-5 sm:px-8 lg:px-14">

        {/* Header */}
        <header className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-4 flex items-center justify-center gap-2">
            <span className="w-10 h-px bg-orange-600" />
            Customer Reviews
            <span className="w-10 h-px bg-orange-600" />
          </h2>

          <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter leading-tight mb-4 uppercase">
            What Our Clients <span className="text-orange-500">Say</span>
          </h3>

          <p className="text-xs text-slate-500">
            Real experiences from real customers — verified on Google.
          </p>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <GoogleReviewCard key={i} review={r} />
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex  flex-wrap justify-center gap-4 mt-10">

          <a
          target="_blank"
            href="https://g.page/r/CaHrilU1AntZEBM/review"
            className="inline-flex items-center gap-2.5 text-xs text-slate-500 hover:text-slate-800 transition border border-slate-200 bg-white rounded-full px-5 py-2.5 shadow-sm hover:shadow-md"
          >
            <GoogleColorLogo size={16} />
            <span className="font-medium">Write a Review • Share your Experience</span>
          </a>
        </div>
         <div className="flex justify-center mt-10">
          <a
          target="_blank"
            href="https://g.page/r/CaHrilU1AntZEBM"
            className="inline-flex items-center gap-2.5 text-xs text-slate-500 hover:text-slate-800 transition border border-slate-200 bg-white rounded-full px-5 py-2.5 shadow-sm hover:shadow-md"
          >
            <GoogleColorLogo size={16} />
            <span className="font-medium">View all reviews on Google</span>
          </a>

        </div>

      </div>
    </section>
  );
}
 
