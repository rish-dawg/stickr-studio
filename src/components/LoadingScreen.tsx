"use client";

import { useState, useEffect } from "react";

const stickers = [
  { gradient: "from-purple-500 to-indigo-600", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>, top: "12%", left: "8%", size: "w-16 h-16", rotate: "rotate-12", radius: "rounded-2xl" },
  { gradient: "from-amber-400 to-orange-500", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>, top: "8%", left: "75%", size: "w-14 h-14", rotate: "-rotate-12", radius: "rounded-full" },
  { gradient: "from-cyan-400 to-blue-500", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M6 3h12l4 6-10 13L2 9z"/></svg>, top: "35%", left: "85%", size: "w-12 h-12", rotate: "rotate-6", radius: "rounded-xl" },
  { gradient: "from-green-400 to-emerald-500", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z"/></svg>, top: "65%", left: "80%", size: "w-14 h-14", rotate: "-rotate-6", radius: "rounded-2xl" },
  { gradient: "from-violet-500 to-purple-600", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><circle cx="12" cy="12" r="10"/></svg>, top: "75%", left: "12%", size: "w-12 h-12", rotate: "rotate-12", radius: "rounded-full" },
  { gradient: "from-rose-400 to-red-500", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M12 1l3.22 6.966 7.78.94-5.72 5.288L18.68 22 12 18.27 5.32 22l1.4-7.806L1 8.906l7.78-.94z"/></svg>, top: "22%", left: "20%", size: "w-10 h-10", rotate: "-rotate-12", radius: "rounded-xl" },
  { gradient: "from-indigo-400 to-blue-600", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>, top: "55%", left: "5%", size: "w-14 h-14", rotate: "rotate-6", radius: "rounded-2xl" },
  { gradient: "from-yellow-400 to-amber-500", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>, top: "42%", left: "45%", size: "w-10 h-10", rotate: "-rotate-6", radius: "rounded-full" },
];

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const [poppedIn, setPoppedIn] = useState(false);

  useEffect(() => {
    // All stickers finish popping in after ~1.2s (8 stickers * 150ms)
    const popTimer = setTimeout(() => setPoppedIn(true), 1400);
    // Start fade out
    const fadeTimer = setTimeout(() => setFading(true), 2500);
    // Remove from DOM
    const removeTimer = setTimeout(() => setVisible(false), 3000);

    return () => {
      clearTimeout(popTimer);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-white flex items-center justify-center overflow-hidden ${
        fading ? "animate-loader-fade-out" : ""
      }`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-violet-50" />

      {/* Stickers */}
      {stickers.map((sticker, i) => (
        <div
          key={i}
          className={`absolute ${sticker.size} ${sticker.radius} bg-gradient-to-br ${sticker.gradient} shadow-xl flex items-center justify-center ${sticker.rotate} ${
            poppedIn ? "animate-float" : ""
          }`}
          style={{
            top: sticker.top,
            left: sticker.left,
            animation: poppedIn
              ? `float 6s ease-in-out infinite ${i * 0.3}s`
              : `sticker-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.15}s both`,
          }}
        >
          {sticker.icon}
        </div>
      ))}

      {/* Center logo */}
      <div
        className="relative z-10 text-center"
        style={{
          animation: "sticker-pop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s both",
        }}
      >
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-500 shadow-xl shadow-purple-500/30 flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="4" />
            <path d="M12 8v8" />
            <path d="M8 12h8" />
          </svg>
        </div>
        <h2 className="text-2xl font-black text-gray-900 tracking-tight">
          Stickr{" "}
          <span className="bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
            Studio
          </span>
        </h2>
        <p className="text-sm text-gray-400 mt-1 font-medium">Creating your stickers...</p>
      </div>
    </div>
  );
}
