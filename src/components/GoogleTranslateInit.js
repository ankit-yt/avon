"use client";

import { useEffect } from "react";

export default function GoogleTranslateInit() {
  useEffect(() => {
    // Init function
    window.googleTranslateElementInit = function () {
      if (!window.google) return;

      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
        },
        "google_translate_element"
      );

      // Init mobile version if exists
      const mobileEl = document.getElementById(
        "google_translate_element_mobile"
      );

      if (mobileEl) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false,
          },
          "google_translate_element_mobile"
        );
      }
    };

    // Load script
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}