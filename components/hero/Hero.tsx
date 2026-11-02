"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, ChevronDown, MapPin, Sparkles } from "lucide-react";
import { useRef } from "react";
import { easeOut } from "@/lib/motion";
import { RainLayer } from "@/components/visuals/RainLayer";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -105]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.12]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.9], [0, 5]);
  const videoFilter = useTransform(blur, (v) => `blur(${v}px)`);

  return (
    <section ref={ref} id="top" className="relative min-h-[152vh] bg-[var(--monsoon)] text-[var(--cream)]">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <motion.video
          style={{ scale: videoScale, filter: videoFilter }}
          autoPlay muted playsInline loop preload="metadata"
          poster="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1800&q=85"
          className="absolute inset-0 h-full w-full object-cover object-center"
        >
          <source src="https://cdn.coverr.co/videos/coverr-coffee-pour-1355/1080p.mp4" type="video/mp4" />
        </motion.video>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,17,21,.34),rgba(6,17,21,.08)_32%,rgba(6,17,21,.56)_72%,rgba(6,17,21,.91))]" />
        <RainLayer intensity={58} />

        <motion.div style={{ y: contentY, opacity: contentOpacity }} className="relative z-20 flex h-full flex-col justify-between px-5 pb-5 pt-24 sm:px-7 md:px-10 md:pb-9 md:pt-28">
          <div className="flex items-center justify-between gap-4 text-[9px] uppercase tracking-[0.24em] text-white/72 sm:text-[10px] md:text-xs">
            <div className="inline-flex items-center gap-2"><Sparkles size={13} strokeWidth={1.6} /><span>Rain-inspired specialty café</span></div>
            <div className="hidden items-center gap-2 sm:inline-flex"><MapPin size={13} strokeWidth={1.6} /><span>HSR Layout · Bengaluru</span></div>
          </div>

          <div className="mt-auto grid gap-7 pb-7 md:gap-9 lg:grid-cols-[1.2fr_.62fr] lg:items-end lg:pb-4">
            <motion.div initial={{ opacity: 0, y: 48 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.05, delay: 1.05, ease: easeOut }}>
              <p className="mb-4 text-[9px] uppercase tracking-[0.35em] text-white/70 sm:text-[10px] md:text-xs">Wassup Matcha</p>
              <h1 className="brand-display max-w-[1200px] text-[20vw] leading-[0.72] sm:text-[16vw] md:text-[13vw] lg:text-[9.2vw] xl:text-[8.4vw]">RAINY DAYS,<br />EVERYDAY.</h1>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.95, delay: 1.25, ease: easeOut }} className="max-w-md lg:justify-self-end">
              <p className="text-[1.3rem] leading-[1.08] tracking-[-0.035em] text-white/95 sm:text-[1.55rem] md:text-[1.8rem] lg:text-[1.9rem]">Come for the matcha.<br />Stay for the feeling.</p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/68 sm:text-[15px] md:mt-5 md:text-base">A Bangalore-born matcha bar shaped by rain, ritual, and an unhurried point of view.</p>
              <div className="mt-6 flex flex-wrap gap-2.5 md:mt-8">
                <a href="#menu" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--monsoon)] sm:px-5 sm:py-3 sm:text-[11px]">View Menu <ArrowUpRight size={15} strokeWidth={1.8} /></a>
                <a href="#visit" className="inline-flex items-center gap-2 rounded-full border border-white/28 bg-white/10 px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm sm:px-5 sm:py-3 sm:text-[11px]">Visit Us <MapPin size={15} strokeWidth={1.8} /></a>
              </div>
            </motion.div>
          </div>

          <div className="flex items-end justify-between gap-4 text-[9px] uppercase tracking-[0.22em] text-white/65 sm:text-[10px] md:text-xs">
            <div><p>Open every day</p><p className="mt-1.5 text-white/92">11 AM — 9 PM</p></div>
            <div className="hidden text-center sm:block"><p>344, 6th Main Road</p><p className="mt-1.5 text-white/92">Sector 6 · HSR</p></div>
            <a href="#manifesto" className="inline-flex items-center gap-2 text-white/88"><span className="hidden sm:inline">Discover</span><ChevronDown size={17} strokeWidth={1.7} /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
