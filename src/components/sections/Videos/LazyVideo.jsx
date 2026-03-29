"use client";

import { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

export default function LazyVideo({ src, id,poster, className = "", controls = true }) {
  const videoRef = useRef(null);
  const [loaded,  setLoaded]  = useState(false);
  const [playing, setPlaying] = useState(false);

  // ── Play handler ──────────────────────────────────────────────────────────
  function handlePlay() {
    // Tell every other LazyVideo to stop
    window.dispatchEvent(new CustomEvent("lazyvideo:stop", { detail: { exceptId: id } }));

    const video = videoRef.current;
    if (!video) return;

    if (!loaded) {
      // First click: assign src now (zero bytes before this point)
      video.src = src;
      video.load();
      setLoaded(true);
      video.addEventListener("canplay", () => video.play(), { once: true });
    } else {
      video.play();
    }

    setPlaying(true);
  }

  // ── Listen for stop events from sibling videos ────────────────────────────
  useEffect(() => {
    function onStop(e) {
      if (e.detail.exceptId === id) return; // this video just started — ignore

      const video = videoRef.current;
      if (!video) return;

      video.pause();
      video.currentTime = 0;
      setPlaying(false);
    }

    window.addEventListener("lazyvideo:stop", onStop);
    return () => window.removeEventListener("lazyvideo:stop", onStop);
  }, [id]);

  // ── Sync playing state with native controls (user hits pause in browser UI) ─
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onPause = () => setPlaying(false);
    const onPlay  = () => setPlaying(true);
    video.addEventListener("pause", onPause);
    video.addEventListener("play",  onPlay);
    return () => {
      video.removeEventListener("pause", onPause);
      video.removeEventListener("play",  onPlay);
    };
  }, []);

  return (
    <div className="relative w-full h-full">

      {/*
        Video is ALWAYS mounted so videoRef is always valid.
        src starts empty — assigned only on first click.
      */}
     <video
  ref={videoRef}
  poster={poster?.src} // ✅ FIXED
  preload="none"
  loop
  playsInline
  controls={playing && controls}
  className={className}
/>

      {/* Play overlay — shown whenever not playing */}
      {!playing && (
        <button
          onClick={handlePlay}
          aria-label="Play video"
          className="absolute inset-0 z-10 flex items-center justify-center
                     bg-black/25 hover:bg-black/40 transition-colors duration-200 group"
        >
          <span className="w-12 h-12 rounded-full bg-white/90 shadow-xl
                           flex items-center justify-center
                           group-hover:scale-110 group-hover:bg-white
                           transition-all duration-200">
            <FaPlay size={14} className="text-slate-900 ml-0.5" />
          </span>
        </button>
      )}

    </div>
  );
}