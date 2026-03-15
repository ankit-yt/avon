"use client";

// ─── OTPInput.jsx — CLIENT COMPONENT ─────────────────────────────────────────

import { useRef } from "react";

/**
 * @param {object}   props
 * @param {string}   props.value      - 0-6 digit string
 * @param {Function} props.onChange   - (newValue: string) => void
 * @param {boolean}  [props.disabled]
 */
export default function OTPInput({ value = "", onChange, disabled = false }) {
  const refs = useRef([]);
  const digits = Array.from({ length: 6 }, (_, i) => value[i] ?? "");

  const emit = (arr) => onChange(arr.join(""));

  const handleChange = (i, e) => {
    const ch = e.target.value.replace(/\D/g, "").slice(-1);
    const next = digits.map((d, j) => (j === i ? ch : d));
    emit(next);
    if (ch && i < 5) refs.current[i + 1]?.focus();
  };

  const handleKeyDown = (i, e) => {
    if (e.key === "Backspace") {
      if (digits[i]) {
        emit(digits.map((d, j) => (j === i ? "" : d)));
      } else if (i > 0) {
        refs.current[i - 1]?.focus();
      }
    }
    if (e.key === "ArrowLeft"  && i > 0) refs.current[i - 1]?.focus();
    if (e.key === "ArrowRight" && i < 5) refs.current[i + 1]?.focus();
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    emit(Array.from({ length: 6 }, (_, i) => pasted[i] ?? ""));
    refs.current[Math.min(pasted.length, 5)]?.focus();
  };

  return (
    <div
      role="group"
      aria-label="One-time password input"
      className="flex gap-2"
    >
      {digits.map((d, i) => (
        <input
          key={i}
          ref={(el) => (refs.current[i] = el)}
          type="text"
          inputMode="numeric"
          autoComplete={i === 0 ? "one-time-code" : "off"}
          maxLength={1}
          value={d}
          aria-label={`OTP digit ${i + 1}`}
          disabled={disabled}
          onChange={(e) => handleChange(i, e)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          onPaste={handlePaste}
          className={[
            // base
            "h-11 w-10 sm:h-12 sm:w-11 rounded-xl border-2 text-center text-base font-black",
            "transition-all duration-150 outline-none select-none",
            // disabled
            disabled && "cursor-not-allowed opacity-50 bg-slate-100 text-slate-400",
            // filled
            !disabled && d && "border-orange-500 bg-orange-50 text-orange-700 ring-2 ring-orange-500/20",
            // empty
            !disabled && !d && "border-slate-200 bg-white text-slate-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20",
          ]
            .filter(Boolean)
            .join(" ")}
        />
      ))}
    </div>
  );
}