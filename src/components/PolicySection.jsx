// components/PolicySection.jsx
// Reusable content blocks for policy pages.

export function Section({ title, children, accent = false }) {
  return (
    <section className="mb-10">
      {title && (
        <h2
          className={`text-xl sm:text-2xl font-extrabold tracking-tight mb-5 flex items-center gap-3 ${
            accent ? "text-orange-600" : "text-slate-900"
          }`}
        >
          <span
            aria-hidden="true"
            className="flex-shrink-0 w-1 h-6 rounded-full bg-orange-500 inline-block"
          />
          {title}
        </h2>
      )}
      <div className="space-y-3">{children}</div>
    </section>
  );
}

export function Card({ icon, title, children, highlight = false }) {
  return (
    <div
      className={`rounded-2xl p-5 sm:p-6 border transition-shadow hover:shadow-md ${
        highlight
          ? "bg-orange-50 border-orange-200"
          : "bg-white border-slate-200"
      }`}
    >
      {(icon || title) && (
        <div className="flex items-start gap-3 mb-3">
          {icon && (
            <span
              aria-hidden="true"
              className="text-2xl flex-shrink-0"
            >
              {icon}
            </span>
          )}
          {title && (
            <h3 className="font-bold text-slate-900 text-base sm:text-lg leading-snug">
              {title}
            </h3>
          )}
        </div>
      )}
      <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
}

export function BulletList({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-orange-500"
          />
          <span className="text-slate-700 text-sm sm:text-base leading-relaxed">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function AlertBanner({ icon = "⚠️", children }) {
  return (
    <div className="flex items-start gap-4 bg-amber-50 border border-amber-200 rounded-2xl p-5 sm:p-6">
      <span aria-hidden="true" className="text-2xl flex-shrink-0">{icon}</span>
      <p className="text-amber-900 text-sm sm:text-base font-semibold leading-relaxed">
        {children}
      </p>
    </div>
  );
}

export function RefundRow({ period, refund, noRefund = false }) {
  return (
    <div
      className={`flex items-center justify-between gap-4 rounded-xl px-5 py-4 border ${
        noRefund
          ? "bg-red-50 border-red-200"
          : "bg-green-50 border-green-200"
      }`}
    >
      <span className="font-bold text-slate-800 text-sm sm:text-base">{period}</span>
      <span
        className={`text-sm font-extrabold px-3 py-1 rounded-full ${
          noRefund
            ? "bg-red-100 text-red-700"
            : "bg-green-100 text-green-700"
        }`}
      >
        {refund}
      </span>
    </div>
  );
}