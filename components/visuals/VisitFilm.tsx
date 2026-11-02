"use client";

import { ArrowUpRight, Clock3, MapPin } from "lucide-react";

export function VisitFilm() {
  return (
    <section id="visit" className="relative min-h-[110svh] overflow-hidden text-white">
      <video
        src="https://cdn.coverr.co/videos/coverr-night-city-from-the-window-3934/1080p.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,14,17,.18),rgba(7,14,17,.4)_45%,rgba(7,14,17,.93))]" />
      <div className="wet-glass absolute inset-0 opacity-18" />

      <div className="relative z-10 flex min-h-[110svh] flex-col justify-between px-5 py-24 sm:px-7 md:px-10 md:py-28">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.26em] text-white/66 md:text-xs">
            <MapPin size={15} strokeWidth={1.7} />
            HSR Layout · Bengaluru
          </div>
          <p className="max-w-md text-base leading-relaxed text-white/68 md:justify-self-end md:text-lg">Upstairs, away from the rush. Matcha, coffee, food, music, laptops, conversations, and enough room to stay longer than you planned.</p>
        </div>

        <div>
          <h2 className="brand-display text-[18vw] leading-[.7] sm:text-[15vw] md:text-[10vw]">COME SAY<br />WASSUP.</h2>
          <div className="mt-8 grid gap-5 text-sm uppercase tracking-[0.18em] text-white/70 md:grid-cols-[1fr_auto_auto] md:items-end">
            <div>
              <p>344, 6th Main Road</p>
              <p className="mt-2 text-white/95">Sector 6, HSR Layout, Bengaluru</p>
            </div>
            <div className="inline-flex items-center gap-2">
              <Clock3 size={16} strokeWidth={1.7} />
              11 AM — 9 PM
            </div>
            <a href="#top" className="inline-flex items-center gap-2 text-white/95">
              Back to top <ArrowUpRight size={16} strokeWidth={1.8} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
