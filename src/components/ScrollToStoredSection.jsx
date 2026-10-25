"use client";

import { useEffect } from "react";

export default function ScrollToStoredSection({ targetId, alwaysScroll = false }) {
  useEffect(() => {
    const shouldScroll = alwaysScroll || sessionStorage.getItem("avon-scroll-target") === targetId;
    if (!shouldScroll) return;

    if (!alwaysScroll) sessionStorage.removeItem("avon-scroll-target");
    requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ block: "start" });
    });
  }, [targetId]);

  return null;
}
