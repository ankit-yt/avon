"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const languages = [
  { code: "af", name: "Afrikaans" },
  { code: "sq", name: "Albanian" },
  { code: "am", name: "Amharic" },
  { code: "ar", name: "Arabic" },
  { code: "hy", name: "Armenian" },
  { code: "az", name: "Azerbaijani" },
  { code: "eu", name: "Basque" },
  { code: "be", name: "Belarusian" },
  { code: "bn", name: "Bengali" },
  { code: "bs", name: "Bosnian" },
  { code: "bg", name: "Bulgarian" },
  { code: "ca", name: "Catalan" },
  { code: "ceb", name: "Cebuano" },
  { code: "ny", name: "Chichewa" },
  { code: "zh-CN", name: "Chinese (Simplified)" },
  { code: "zh-TW", name: "Chinese (Traditional)" },
  { code: "co", name: "Corsican" },
  { code: "hr", name: "Croatian" },
  { code: "cs", name: "Czech" },
  { code: "da", name: "Danish" },
  { code: "nl", name: "Dutch" },
  { code: "en", name: "English" },
  { code: "eo", name: "Esperanto" },
  { code: "et", name: "Estonian" },
  { code: "tl", name: "Filipino" },
  { code: "fi", name: "Finnish" },
  { code: "fr", name: "French" },
  { code: "fy", name: "Frisian" },
  { code: "gl", name: "Galician" },
  { code: "ka", name: "Georgian" },
  { code: "de", name: "German" },
  { code: "el", name: "Greek" },
  { code: "gu", name: "Gujarati" },
  { code: "ht", name: "Haitian Creole" },
  { code: "ha", name: "Hausa" },
  { code: "haw", name: "Hawaiian" },
  { code: "he", name: "Hebrew" },
  { code: "hi", name: "Hindi" },
  { code: "hmn", name: "Hmong" },
  { code: "hu", name: "Hungarian" },
  { code: "is", name: "Icelandic" },
  { code: "ig", name: "Igbo" },
  { code: "id", name: "Indonesian" },
  { code: "ga", name: "Irish" },
  { code: "it", name: "Italian" },
  { code: "ja", name: "Japanese" },
  { code: "jw", name: "Javanese" },
  { code: "kn", name: "Kannada" },
  { code: "kk", name: "Kazakh" },
  { code: "km", name: "Khmer" },
  { code: "ko", name: "Korean" },
  { code: "ku", name: "Kurdish" },
  { code: "ky", name: "Kyrgyz" },
  { code: "lo", name: "Lao" },
  { code: "la", name: "Latin" },
  { code: "lv", name: "Latvian" },
  { code: "lt", name: "Lithuanian" },
  { code: "lb", name: "Luxembourgish" },
  { code: "mk", name: "Macedonian" },
  { code: "mg", name: "Malagasy" },
  { code: "ms", name: "Malay" },
  { code: "ml", name: "Malayalam" },
  { code: "mt", name: "Maltese" },
  { code: "mi", name: "Maori" },
  { code: "mr", name: "Marathi" },
  { code: "mn", name: "Mongolian" },
  { code: "my", name: "Myanmar (Burmese)" },
  { code: "ne", name: "Nepali" },
  { code: "no", name: "Norwegian" },
  { code: "ps", name: "Pashto" },
  { code: "fa", name: "Persian" },
  { code: "pl", name: "Polish" },
  { code: "pt", name: "Portuguese" },
  { code: "pa", name: "Punjabi" },
  { code: "ro", name: "Romanian" },
  { code: "ru", name: "Russian" },
  { code: "sm", name: "Samoan" },
  { code: "gd", name: "Scots Gaelic" },
  { code: "sr", name: "Serbian" },
  { code: "st", name: "Sesotho" },
  { code: "sn", name: "Shona" },
  { code: "sd", name: "Sindhi" },
  { code: "si", name: "Sinhala" },
  { code: "sk", name: "Slovak" },
  { code: "sl", name: "Slovenian" },
  { code: "so", name: "Somali" },
  { code: "es", name: "Spanish" },
  { code: "su", name: "Sundanese" },
  { code: "sw", name: "Swahili" },
  { code: "sv", name: "Swedish" },
  { code: "tg", name: "Tajik" },
  { code: "ta", name: "Tamil" },
  { code: "te", name: "Telugu" },
  { code: "th", name: "Thai" },
  { code: "tr", name: "Turkish" },
  { code: "uk", name: "Ukrainian" },
  { code: "ur", name: "Urdu" },
  { code: "uz", name: "Uzbek" },
  { code: "vi", name: "Vietnamese" },
  { code: "cy", name: "Welsh" },
  { code: "xh", name: "Xhosa" },
  { code: "yi", name: "Yiddish" },
  { code: "yo", name: "Yoruba" },
  { code: "zu", name: "Zulu" },
];

// ─── helpers ────────────────────────────────────────────────────────────────

/** Remove the googtrans cookie so Google Translate defaults to "no translation". */
function clearTranslateCookie() {
  document.cookie = "googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  document.cookie = "googtrans=; path=/; domain=" + window.location.hostname + "; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}

/** Set the googtrans cookie for a given target language code. */
function setTranslateCookie(langCode) {
  document.cookie = `googtrans=/en/${langCode}; path=/`;
  document.cookie = `googtrans=/en/${langCode}; path=/; domain=${window.location.hostname}`;
}

/**
 * Switch language WITHOUT a page reload.
 * Falls back to a reload if the Google Translate iframe API is unavailable.
 */
function applyTranslation(langCode) {
  try {
    // The GTranslate combo-box lives inside the hidden iframe widget
    const iframe = document.querySelector(".goog-te-menu-frame");
    if (iframe) {
      const innerDoc = iframe.contentDocument || iframe.contentWindow?.document;
      const items = innerDoc?.querySelectorAll(".goog-te-menu2-item span.text");
      if (items) {
        for (const item of items) {
          if (item.closest("[lang]")?.getAttribute("lang") === langCode ||
              item.textContent.trim().toLowerCase() === langCode) {
            item.click();
            return;
          }
        }
      }
    }

    // Preferred no-reload path: use the public JS API if available
    const selectEl = document.querySelector(".goog-te-combo");
    if (selectEl) {
      selectEl.value = langCode;
      selectEl.dispatchEvent(new Event("change"));
      return;
    }
  } catch (_) {
    // silently fall through
  }

  // Last-resort: cookie + reload
  setTranslateCookie(langCode);
  window.location.reload();
}

// ─── component ──────────────────────────────────────────────────────────────

export default function LanguageSwitcher() {
  const [open, setOpen]           = useState(false);
  const [selected, setSelected]   = useState({ code: "en", name: "English" });
  const [search, setSearch]       = useState("");
  const [focusedIdx, setFocusedIdx] = useState(-1);

  const dropdownRef = useRef(null);
  const searchRef   = useRef(null);
  const listRef     = useRef(null);

  // ── Reset to English on every page load ────────────────────────────────
  useEffect(() => {
  const match = document.cookie.match(/googtrans=\/en\/([^;]+)/);
  if (match) {
    const code = match[1];
    const found = languages.find(l => l.code === code);
    if (found) {
      setSelected(found);
    }
  }
}, []);

  // ── Close on outside click ──────────────────────────────────────────────
  useEffect(() => {
    const handler = (e) => {
      if (!dropdownRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // ── Focus search input when dropdown opens ──────────────────────────────
  useEffect(() => {
    if (open) {
      setSearch("");
      setFocusedIdx(-1);
      setTimeout(() => searchRef.current?.focus(), 50);
    }
  }, [open]);

  // ── Filtered list ───────────────────────────────────────────────────────
  const filtered = search.trim()
    ? languages.filter((l) =>
        l.name.toLowerCase().startsWith(search.toLowerCase())
      )
    : languages;

  // ── Keyboard navigation ─────────────────────────────────────────────────
  const handleKeyDown = useCallback(
    (e) => {
      if (!open) return;
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setFocusedIdx((i) => Math.min(i + 1, filtered.length - 1));
          break;
        case "ArrowUp":
          e.preventDefault();
          setFocusedIdx((i) => Math.max(i - 1, 0));
          break;
        case "Enter":
          if (focusedIdx >= 0 && filtered[focusedIdx]) {
            handleSelect(filtered[focusedIdx]);
          }
          break;
        case "Escape":
          setOpen(false);
          break;
      }
    },
    [open, focusedIdx, filtered]
  );

  // Scroll focused item into view
  useEffect(() => {
    if (focusedIdx >= 0 && listRef.current) {
      const item = listRef.current.children[focusedIdx];
      item?.scrollIntoView({ block: "nearest" });
    }
  }, [focusedIdx]);

  // ── Select handler ──────────────────────────────────────────────────────
  const handleSelect = (lang) => {
    setSelected(lang);
    setOpen(false);

    if (lang.code === "en") {
      clearTranslateCookie();
      const selectEl = document.querySelector(".goog-te-combo");
      if (selectEl) {
        selectEl.value = "en";
        selectEl.dispatchEvent(new Event("change"));
      }
    } else {
      setTranslateCookie(lang.code);
      applyTranslation(lang.code);
    }
  };

  // ── Render ──────────────────────────────────────────────────────────────
  return (
    <div
      ref={dropdownRef}
      className="relative font-mono text-sm"
      onKeyDown={handleKeyDown}
    >
      {/* Trigger button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-2 bg-[#1F2933] text-white px-4 py-2 rounded-md border border-[#374151] hover:border-[#F97316] focus:outline-none focus:border-[#F97316] transition-colors duration-150"
      >
        <span aria-hidden>🌍</span>
        <span>{selected.name}</span>
        <svg
          className={`w-3 h-3 ml-1 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          role="listbox"
          aria-label="Select language"
          className="absolute right-0 mt-2 w-52 bg-[#111827] border border-[#1F2933] rounded-md shadow-2xl z-50 flex flex-col"
        >
          {/* Search */}
          <div className="p-2 border-b border-[#1F2933]">
            <input
              ref={searchRef}
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setFocusedIdx(0);
              }}
              placeholder="Search…"
              className="w-full bg-[#1F2933] text-gray-200 placeholder-gray-500 text-xs px-3 py-1.5 rounded focus:outline-none focus:ring-1 focus:ring-[#F97316]"
            />
          </div>

          {/* List */}
          <div ref={listRef} className="max-h-56 overflow-y-auto">
            {filtered.length === 0 ? (
              <p className="px-4 py-3 text-gray-500 text-xs">No results</p>
            ) : (
              filtered.map((lang, idx) => (
                <div
                  key={lang.code}
                  role="option"
                  aria-selected={selected.code === lang.code}
                  onClick={() => handleSelect(lang)}
                  className={`px-4 py-2 cursor-pointer transition-colors duration-100 flex items-center justify-between
                    ${selected.code === lang.code ? "text-[#F97316] bg-[#1F2933]" : "text-gray-300"}
                    ${focusedIdx === idx ? "bg-[#1F2933] text-white" : "hover:bg-[#1F2933] hover:text-white"}
                  `}
                >
                  {lang.name}
                  {selected.code === lang.code && (
                    <svg className="w-3.5 h-3.5 text-[#F97316]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}