"use client";

/**
 * LanguageSwitcher — fully hydration-safe Google Translate integration.
 *
 * ══════════════════════════════════════════════════════════════════════
 * ROOT CAUSE OF THE BUG (and why this fix works)
 * ══════════════════════════════════════════════════════════════════════
 *
 * PROBLEM 1 — useState lazy initializer runs on the server:
 *   useState(getInitialLanguage) passes a function reference.
 *   Next.js SSR *calls* that function during server render.
 *   It reads `document.cookie` → on the server `document` doesn't
 *   exist. The guard returns { code:"en", name:"English" } on server.
 *   On the client, if the cookie says "hi" (Hindi), the button
 *   renders "English" on server but "Hindi" on client → MISMATCH.
 *
 * PROBLEM 2 — Rendered button text differs between server/client:
 *   The button renders `selected.name` inline. When server says
 *   "English" and client says "हिन्दी", React throws:
 *   "Hydration failed because server rendered text didn't match client."
 *
 * PROBLEM 3 — Google Translate DOM mutations after hydration:
 *   GT rewrites every text node on the page after React hydrates.
 *   Components without suppressHydrationWarning mismatch on
 *   subsequent navigations / renders.
 *
 * THE FIX — Mount-gate pattern:
 *   1. Server always renders an identical neutral placeholder
 *      (no text, no cookie-reading). Server === client first paint.
 *   2. After mount (useEffect = client only), read the cookie and
 *      render the real UI. React never sees a server/client diff.
 *   3. suppressHydrationWarning on every text node GT may mutate.
 *   4. notranslate class on language names so GT doesn't translate
 *      them (which would cause secondary mismatches).
 *
 * ══════════════════════════════════════════════════════════════════════
 */

import { useState, useEffect, useRef, useCallback } from "react";

// ─── Language list ─────────────────────────────────────────────────────────────
const languages = [
  { code: "en",    name: "English" },
  { code: "hi",    name: "Hindi" },
  { code: "pa",    name: "Punjabi" },
  { code: "bn",    name: "Bengali" },
  { code: "gu",    name: "Gujarati" },
  { code: "mr",    name: "Marathi" },
  { code: "ta",    name: "Tamil" },
  { code: "te",    name: "Telugu" },
  { code: "kn",    name: "Kannada" },
  { code: "ml",    name: "Malayalam" },
  { code: "ur",    name: "Urdu" },
  { code: "ar",    name: "Arabic" },
  { code: "zh-CN", name: "Chinese (Simplified)" },
  { code: "fr",    name: "French" },
  { code: "de",    name: "German" },
  { code: "es",    name: "Spanish" },
  { code: "it",    name: "Italian" },
  { code: "ja",    name: "Japanese" },
  { code: "ko",    name: "Korean" },
  { code: "pt",    name: "Portuguese" },
  { code: "ru",    name: "Russian" },
  { code: "tr",    name: "Turkish" },
  { code: "nl",    name: "Dutch" },
  { code: "pl",    name: "Polish" },
  { code: "sv",    name: "Swedish" },
  { code: "da",    name: "Danish" },
  { code: "fi",    name: "Finnish" },
  { code: "no",    name: "Norwegian" },
  { code: "id",    name: "Indonesian" },
  { code: "ms",    name: "Malay" },
  { code: "vi",    name: "Vietnamese" },
  { code: "th",    name: "Thai" },
  { code: "fa",    name: "Persian" },
  { code: "he",    name: "Hebrew" },
  { code: "ro",    name: "Romanian" },
  { code: "hu",    name: "Hungarian" },
  { code: "cs",    name: "Czech" },
  { code: "sk",    name: "Slovak" },
  { code: "uk",    name: "Ukrainian" },
  { code: "af",    name: "Afrikaans" },
  { code: "sq",    name: "Albanian" },
  { code: "am",    name: "Amharic" },
  { code: "hy",    name: "Armenian" },
  { code: "az",    name: "Azerbaijani" },
  { code: "eu",    name: "Basque" },
  { code: "be",    name: "Belarusian" },
  { code: "bs",    name: "Bosnian" },
  { code: "bg",    name: "Bulgarian" },
  { code: "ca",    name: "Catalan" },
  { code: "ceb",   name: "Cebuano" },
  { code: "ny",    name: "Chichewa" },
  { code: "zh-TW", name: "Chinese (Traditional)" },
  { code: "co",    name: "Corsican" },
  { code: "hr",    name: "Croatian" },
  { code: "eo",    name: "Esperanto" },
  { code: "et",    name: "Estonian" },
  { code: "tl",    name: "Filipino" },
  { code: "fy",    name: "Frisian" },
  { code: "gl",    name: "Galician" },
  { code: "ka",    name: "Georgian" },
  { code: "el",    name: "Greek" },
  { code: "ht",    name: "Haitian Creole" },
  { code: "ha",    name: "Hausa" },
  { code: "haw",   name: "Hawaiian" },
  { code: "hmn",   name: "Hmong" },
  { code: "is",    name: "Icelandic" },
  { code: "ig",    name: "Igbo" },
  { code: "ga",    name: "Irish" },
  { code: "jw",    name: "Javanese" },
  { code: "kk",    name: "Kazakh" },
  { code: "km",    name: "Khmer" },
  { code: "ku",    name: "Kurdish" },
  { code: "ky",    name: "Kyrgyz" },
  { code: "lo",    name: "Lao" },
  { code: "la",    name: "Latin" },
  { code: "lv",    name: "Latvian" },
  { code: "lt",    name: "Lithuanian" },
  { code: "lb",    name: "Luxembourgish" },
  { code: "mk",    name: "Macedonian" },
  { code: "mg",    name: "Malagasy" },
  { code: "mt",    name: "Maltese" },
  { code: "mi",    name: "Maori" },
  { code: "mn",    name: "Mongolian" },
  { code: "my",    name: "Myanmar (Burmese)" },
  { code: "ne",    name: "Nepali" },
  { code: "ps",    name: "Pashto" },
  { code: "sm",    name: "Samoan" },
  { code: "gd",    name: "Scots Gaelic" },
  { code: "sr",    name: "Serbian" },
  { code: "st",    name: "Sesotho" },
  { code: "sn",    name: "Shona" },
  { code: "sd",    name: "Sindhi" },
  { code: "si",    name: "Sinhala" },
  { code: "sl",    name: "Slovenian" },
  { code: "so",    name: "Somali" },
  { code: "su",    name: "Sundanese" },
  { code: "sw",    name: "Swahili" },
  { code: "tg",    name: "Tajik" },
  { code: "cy",    name: "Welsh" },
  { code: "xh",    name: "Xhosa" },
  { code: "yi",    name: "Yiddish" },
  { code: "yo",    name: "Yoruba" },
  { code: "zu",    name: "Zulu" },
];

// ─── Cookie helpers — CLIENT ONLY (never called during SSR) ──────────────────

/** Read the currently active language from the googtrans cookie. */
function readLangFromCookie() {
  if (typeof document === "undefined") return { code: "en", name: "English" };
  const match = document.cookie.match(/googtrans=\/en\/([^;]+)/);
  if (match) {
    const code = decodeURIComponent(match[1]);
    return languages.find((l) => l.code === code) ?? { code: "en", name: "English" };
  }
  return { code: "en", name: "English" };
}

/** Write the googtrans cookie on all required scopes so GT picks it up. */
function writeGoogTransCookie(langCode) {
  const value  = langCode === "en" ? "" : `/en/${langCode}`;
  const domain = window.location.hostname;

  document.cookie = `googtrans=${value}; path=/`;
  document.cookie = `googtrans=${value}; path=/; domain=${domain}`;
  if (domain.includes(".")) {
    const apex = "." + domain.split(".").slice(-2).join(".");
    document.cookie = `googtrans=${value}; path=/; domain=${apex}`;
  }
}

// ─── Neutral placeholder (server + first client paint) ────────────────────────
// Must be visually inert and produce IDENTICAL HTML on server and client.
function Placeholder() {
  return (
    <div
      suppressHydrationWarning
      aria-hidden="true"
      className="h-9 w-24 rounded-full bg-slate-100 border border-slate-200"
    />
  );
}

// ─── Main component ────────────────────────────────────────────────────────────
export default function LanguageSwitcher() {
  /**
   * KEY FIX 1 — Defer everything to the client.
   * `mounted` starts false on both server and client (useState initial
   * value is always evaluated, but false is a primitive, not a function
   * that reads document). After the first useEffect fires (client only),
   * we flip it to true and also read the actual cookie.
   */
  const [mounted,    setMounted]    = useState(false);

  /**
   * KEY FIX 2 — Never pass a document-reading function as the lazy
   * initializer. Start with the same value the server will render.
   * We update it inside useEffect once we're safely on the client.
   */
  const [selected,   setSelected]   = useState({ code: "en", name: "English" });
  const [open,       setOpen]       = useState(false);
  const [search,     setSearch]     = useState("");
  const [focusedIdx, setFocusedIdx] = useState(-1);

  const dropdownRef = useRef(null);
  const listRef     = useRef(null);

  // ── After mount: read real cookie, show real UI ──────────────────────────
  useEffect(() => {
    setSelected(readLangFromCookie());
    setMounted(true);
  }, []);

  // ── Close on outside click ───────────────────────────────────────────────
  useEffect(() => {
    const handler = (e) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setOpen(false);
        setSearch("");
        setFocusedIdx(-1);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // ── Scroll focused item into view ────────────────────────────────────────
  useEffect(() => {
    if (focusedIdx >= 0 && listRef.current) {
      listRef.current.children[focusedIdx]?.scrollIntoView({ block: "nearest" });
    }
  }, [focusedIdx]);

  // ── Filtered list ────────────────────────────────────────────────────────
  const filtered = search.trim()
    ? languages.filter((l) => l.name.toLowerCase().includes(search.toLowerCase()))
    : languages;

  // ── Select language ──────────────────────────────────────────────────────
  const handleSelect = useCallback((lang) => {
    setSelected(lang);
    setOpen(false);
    setSearch("");
    setFocusedIdx(-1);

    writeGoogTransCookie(lang.code);

    // Drive GT's hidden <select> if it exists — avoids a full page reload.
    const gtSelect = document.querySelector(".goog-te-combo");
    if (gtSelect) {
      gtSelect.value = lang.code;
      gtSelect.dispatchEvent(new Event("change"));
    } else {
      window.location.reload();
    }
  }, []);

  // ── Keyboard nav ─────────────────────────────────────────────────────────
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
          if (focusedIdx >= 0 && filtered[focusedIdx]) handleSelect(filtered[focusedIdx]);
          break;
        case "Escape":
          setOpen(false);
          setSearch("");
          setFocusedIdx(-1);
          break;
      }
    },
    [open, focusedIdx, filtered, handleSelect],
  );

  // ── Server render & first client paint → identical placeholder ───────────
  if (!mounted) return <Placeholder />;

  // ── Real UI (client only, after mount) ───────────────────────────────────
  return (
    <div
      ref={dropdownRef}
      className="relative font-sans text-sm"
      onKeyDown={handleKeyDown}
      // GT may mutate text nodes inside this tree on navigation.
      // suppressHydrationWarning silences false-positive mismatch warnings.
      suppressHydrationWarning
    >
      {/* ── Trigger button ─────────────────────────────────────────────── */}
      <button
        type="button"
        onClick={() => { setOpen((v) => !v); setSearch(""); setFocusedIdx(-1); }}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-2 bg-white text-slate-900 px-4 py-2 rounded-full border border-slate-200 hover:border-orange-500 transition-all shadow-sm"
      >
        {/* SVG globe — GT cannot translate SVG content */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-3.5 h-3.5 text-slate-400 shrink-0"
          fill="none" viewBox="0 0 24 24"
          stroke="currentColor" strokeWidth={2}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
        </svg>

        {/*
          suppressHydrationWarning: GT will translate this text node after
          hydration on the client. On subsequent soft-navigations React
          would see the translated string and throw a mismatch warning.
          This prop silences that warning for this specific text node.
        */}
        <span
          suppressHydrationWarning
          className="notranslate text-xs font-bold uppercase tracking-widest max-w-[80px] truncate"
        >
          {selected.name}
        </span>

        <svg
          className={`w-3 h-3 transition-transform duration-200 shrink-0 ${open ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* ── Dropdown ───────────────────────────────────────────────────── */}
      {open && (
        <div
          role="listbox"
          aria-label="Select language"
          className="absolute right-0 mt-2 w-52 bg-white border border-slate-100 rounded-2xl shadow-2xl shadow-slate-200/60 z-[9999] overflow-hidden"
        >
          {/* Search */}
          <div className="p-2 bg-slate-50 border-b border-slate-100">
            <input
              type="text"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setFocusedIdx(0); }}
              placeholder="Search language…"
              autoFocus
              // notranslate: stop GT from translating the placeholder text,
              // which would cause the `placeholder` attribute to mismatch.
              className="notranslate w-full bg-white text-slate-900 text-xs px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
          </div>

          {/* List */}
          <div
            ref={listRef}
            className="max-h-60 overflow-y-auto"
            style={{ scrollbarWidth: "none" }}
          >
            {filtered.length === 0 ? (
              <p className="px-4 py-3 text-slate-400 text-xs text-center">No results</p>
            ) : (
              filtered.map((lang, idx) => {
                const isSel     = selected.code === lang.code;
                const isFocused = focusedIdx === idx;
                return (
                  <div
                    key={lang.code}
                    role="option"
                    aria-selected={isSel}
                    onClick={() => handleSelect(lang)}
                    className={[
                      "px-4 py-2.5 cursor-pointer text-xs font-medium flex items-center justify-between transition-colors",
                      isSel    ? "text-orange-600 bg-orange-50" : "text-slate-600",
                      isFocused && !isSel ? "bg-slate-100 text-slate-900" : "",
                      !isSel && !isFocused ? "hover:bg-slate-50 hover:text-slate-900" : "",
                    ].filter(Boolean).join(" ")}
                  >
                    {/*
                      notranslate: GT would translate "Hindi" → "हिन्दी"
                      inside this list. That would make `lang.name` in React
                      state ("Hindi") differ from the DOM text ("हिन्दी"),
                      causing a mismatch error on the next render cycle.
                    */}
                    <span className="notranslate">{lang.name}</span>
                    {isSel && <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />}
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}

      {/*
        Hidden Google Translate injection point.
        GT needs a real DOM node to mount its <select> into so that
        handleSelect() can drive it via `.goog-te-combo`.
        We keep it visually hidden — our custom dropdown is the UI.

        suppressHydrationWarning: GT appends children into this div
        after React's first render. Without this prop React would throw
        when it reconciles the newly-appeared child nodes.

        IMPORTANT: the `id` here must match ONE of the ids used in
        googleTranslateElementInit() in your root layout. If you have
        two instances (desktop + mobile), only ONE can own each id.
        The mobile menu's LanguageSwitcher should pass a different
        `elementId` prop — but since we hide the GT container and drive
        it via .goog-te-combo, you only need one real GT instance.
        See the usage note below.
      */}
      <div
        id="google_translate_element"
        suppressHydrationWarning
        aria-hidden="true"
        className="hidden"
      />
    </div>
  );
}

/**
 * USAGE IN HEADER (Doc 1):
 * ─────────────────────────────────────────────────────────────────────
 * Desktop header:
 *   <LanguageSwitcher />
 *
 * Mobile fullscreen menu — reuse the SAME component. Because we hide
 * the GT <div> and drive GT via .goog-te-combo, having two
 * <LanguageSwitcher /> instances is fine. Just make sure only ONE
 * googleTranslateElementInit() call targets "google_translate_element"
 * (the first instance rendered in the DOM wins).
 *
 * ROOT LAYOUT — simplify to a single GT init call:
 * ─────────────────────────────────────────────────────────────────────
 *   function googleTranslateElementInit() {
 *     new google.translate.TranslateElement(
 *       { pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE },
 *       'google_translate_element'   // ← single target
 *     );
 *   }
 *
 * You no longer need 'google_translate_element_mobile'. One GT instance
 * translates the entire page; both LanguageSwitcher dropdowns drive the
 * same .goog-te-combo <select>.
 */