"use client";

import { motion } from "motion/react";
import { RainLayer } from "@/components/visuals/RainLayer";

const coffeePour = "https://cdn.coverr.co/videos/coverr-coffee-pour-1355/1080p.mp4";
const cityWindow = "https://cdn.coverr.co/videos/coverr-night-city-from-the-window-3934/1080p.mp4";
const friends = "https://cdn.coverr.co/videos/coverr-a-group-of-friends-having-fun-1573/1080p.mp4";

export function MediaMoodboard() {
  return (
    <section className="overflow-hidden bg-[var(--charcoal)] px-5 py-20 text-[var(--cream)] sm:px-7 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-10 grid gap-6 md:mb-14 md:grid-cols-2 md:items-end">
          <h2 className="brand-display text-[17vw] leading-[.75] sm:text-[14vw] md:text-[9vw]">THE FEELING,<br />IN MOTION.</h2>
          <p className="max-w-md text-sm leading-relaxed text-white/60 md:justify-self-end md:text-base">Rain outside. Ritual inside. A visual rhythm built around movement, texture and quiet moments.</p>
        </div>

        <div className="grid gap-3 md:grid-cols-12 md:grid-rows-[430px_265px]">
          <motion.figure whileHover={{ scale: 0.995 }} className="relative min-h-[70svh] overflow-hidden bg-black md:col-span-7 md:row-span-2 md:min-h-0">
            <video autoPlay muted loop playsInline preload="metadata" src={coffeePour} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/10" />
          </motion.figure>

          <motion.figure whileHover={{ scale: 0.995 }} className="relative min-h-[58svh] overflow-hidden bg-[var(--monsoon)] md:col-span-5 md:min-h-0">
            <video autoPlay muted loop playsInline preload="metadata" src={friends} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[var(--monsoon)]/14" />
          </motion.figure>

          <motion.figure whileHover={{ scale: 0.995 }} className="relative min-h-[58svh] overflow-hidden md:col-span-5 md:min-h-0">
            <video autoPlay muted loop playsInline preload="metadata" src={cityWindow} className="absolute inset-0 h-full w-full object-cover" />
            <RainLayer intensity={28} interactive={false} />
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
