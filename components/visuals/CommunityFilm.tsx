"use client";

import { motion } from "motion/react";

const videoTiles = [
  "https://cdn.coverr.co/videos/coverr-a-group-of-friends-having-fun-1573/1080p.mp4",
  "https://cdn.coverr.co/videos/coverr-coffee-pour-1355/1080p.mp4",
  "https://cdn.coverr.co/videos/coverr-night-city-from-the-window-3934/1080p.mp4",
];

export function CommunityFilm() {
  return (
    <section id="events" className="overflow-hidden bg-[var(--charcoal)] text-white">
      <div className="relative min-h-[100svh]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          src="https://cdn.coverr.co/videos/coverr-a-group-of-friends-having-fun-1573/1080p.mp4"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,9,11,.18),rgba(4,9,11,.38)_45%,rgba(4,9,11,.86))]" />
        <div className="relative z-10 flex min-h-[100svh] flex-col justify-between px-5 py-24 sm:px-7 md:px-10 md:py-28">
          <div className="max-w-lg">
            <p className="text-[10px] uppercase tracking-[0.28em] text-white/62 md:text-xs">Community, after hours</p>
            <p className="mt-5 text-base leading-relaxed text-white/72 md:text-lg">The room changes with the crowd. Some evenings stay quiet. Some turn into workshops, live sets, stand-up, karaoke, or a small gathering that runs longer than planned.</p>
          </div>
          <h2 className="brand-display max-w-[1350px] text-[17vw] leading-[.72] sm:text-[14vw] md:text-[9vw]">SOMETIMES<br />IT'S NOT A CAFÉ.</h2>
        </div>
      </div>

      <div className="px-5 py-5 sm:px-7 md:px-10 md:py-8">
        <div className="grid gap-3 md:grid-cols-3">
          {videoTiles.map((src, i) => (
            <motion.div key={src + i} whileHover={{ scale: 0.985 }} className={`relative overflow-hidden ${i === 1 ? "md:translate-y-12" : ""}`}>
              <video src={src} autoPlay muted loop playsInline preload="metadata" className="aspect-[4/5] h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/10" />
            </motion.div>
          ))}
        </div>
        <div className="pb-20 pt-24 md:pb-28 md:pt-36">
          <p className="brand-display max-w-6xl text-[11vw] leading-[.78] sm:text-[9vw] md:text-[6vw]">WORK. CHILL. CREATE. SHOW UP. STAY LATE.</p>
        </div>
      </div>
    </section>
  );
}
