"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

export function StoryFilm() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const mediaY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, -30]);

  return (
    <section ref={ref} id="story" className="relative min-h-[150svh] overflow-hidden bg-[var(--charcoal)] text-white">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.video
          style={{ y: mediaY, scale: 1.1 }}
          src="https://cdn.coverr.co/videos/coverr-night-city-from-the-window-3934/1080p.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-[112%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,17,21,.9)_0%,rgba(9,17,21,.56)_45%,rgba(9,17,21,.16)_78%)]" />

        <motion.div style={{ y: textY }} className="relative z-10 flex h-full flex-col justify-end px-5 pb-8 sm:px-7 md:px-10 md:pb-12">
          <div className="max-w-5xl">
            <p className="text-[10px] uppercase tracking-[0.28em] text-white/58 md:text-xs">Our story</p>
            <h2 className="brand-display mt-5 text-[17vw] leading-[.72] sm:text-[14vw] md:text-[9vw]">BUILT FROM<br />BURNOUT.</h2>
            <div className="mt-8 grid gap-7 md:grid-cols-2 md:items-end">
              <p className="max-w-xl text-lg leading-[1.2] text-white/78 md:text-2xl">
                Two architects spent too long inside demanding workdays and found the same thing every time Bengaluru rained: the city finally felt softer.
              </p>
              <p className="max-w-md text-sm leading-relaxed text-white/58 md:justify-self-end md:text-base">
                Wassup Matcha grew from that feeling — a place to work without rushing, meet without performing, and take a break without needing a reason.
              </p>
            </div>
            <a href="#visit" className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/82">
              See the space <ArrowUpRight size={16} strokeWidth={1.8} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
