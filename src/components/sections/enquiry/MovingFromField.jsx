"use client";
// components/enquiry/MovingFromField.jsx
// Text input with a "detect my location" button.
// Uses OpenStreetMap Nominatim — zero API key needed.

import { useState, useCallback } from "react";
import { HiOutlineLocationMarker, HiOutlineRefresh } from "react-icons/hi";
import { HiOutlineMapPin } from "react-icons/hi2";

function useReverseGeocode(onResult) {
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState(null);

  const fetchLocation = useCallback(() => {
    if (!navigator?.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }
    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        try {
          const res  = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${coords.latitude}&lon=${coords.longitude}&format=json&addressdetails=1`,
            { headers: { "Accept-Language": "en" } }
          );
          const data = await res.json();
          const a    = data.address ?? {};
          const city = a.city || a.town || a.village || a.county || a.state_district || "";
          const state= a.state || "";
          onResult([city, state].filter(Boolean).join(", ") || data.display_name || "");
        } catch {
          setError("Could not determine your location. Please type it manually.");
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        setLoading(false);
        setError(
          err.code === 1 ? "Location access denied. Please type your city manually."
          : err.code === 2 ? "Location unavailable. Please type manually."
          : "Location timed out. Please type manually."
        );
      },
      { timeout: 10000, maximumAge: 60000 }
    );
  }, [onResult]);

  return { fetchLocation, loading, error };
}

export default function MovingFromField({ value, onChange, disabled }) {
  const handleResult = useCallback((loc) => onChange(loc), [onChange]);
  const { fetchLocation, loading, error } = useReverseGeocode(handleResult);

  return (
    <div className="space-y-2">
      <label
        htmlFor="moving-from"
        className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-1"
      >
        <HiOutlineLocationMarker className="text-orange-500" aria-hidden="true" />
        Moving From *
      </label>

      <div className="flex gap-2">
        <input
          id="moving-from"
          required
          type="text"
          autoComplete="address-level2"
          placeholder="Your city, e.g. Ludhiana, Punjab"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          aria-describedby={error ? "moving-from-err" : undefined}
          className="flex-1 bg-slate-50 border border-slate-200 text-slate-900 font-bold text-sm rounded-xl px-4 py-3.5 outline-none focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        />

        <button
          type="button"
          onClick={fetchLocation}
          disabled={disabled || loading}
          title="Auto-detect my current location"
          aria-label="Detect my current city automatically"
          className={[
            "shrink-0 w-12.5 h-12.5 flex items-center justify-center rounded-xl border transition-all",
            loading
              ? "border-orange-300 bg-orange-50 text-orange-400 cursor-wait"
              : "border-slate-200 bg-slate-50 text-slate-500 hover:bg-orange-50 hover:border-orange-400 hover:text-orange-600 active:scale-95",
          ].join(" ")}
        >
          {loading
            ? <HiOutlineRefresh className="animate-spin text-lg" aria-hidden="true" />
            : <HiOutlineMapPin  className="text-lg"              aria-hidden="true" />
          }
        </button>
      </div>

      {loading && (
        <p className="text-xs text-orange-500 font-bold ml-1 animate-pulse" aria-live="polite">
          Detecting your location…
        </p>
      )}
      {error && (
        <p id="moving-from-err" role="alert" className="text-xs text-red-500 font-bold ml-1">
          ✕ {error}
        </p>
      )}
    </div>
  );
}