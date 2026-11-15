"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { MapPin, Instagram, BookOpen, ChevronDown } from "lucide-react";
import { useRef, useState } from "react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.9, 0]);

  return (
    <section ref={ref} id="top" className="relative h-[112svh] min-h-[570px] bg-[#1a3d4a] text-[#f9f7f4]">
      <div className="sticky top-0 h-[100svh] min-h-[570px] overflow-hidden">
        <div className="absolute inset-0 bg-[#1a3d4a]" />
        <motion.video
          style={{ scale, opacity: videoReady ? 1 : 0 }}
          autoPlay muted playsInline loop preload="metadata"
          poster="/video/hero/wassup-matcha-poster.jpg"
          onCanPlay={() => setVideoReady(true)}
          onError={() => setVideoReady(false)}
          aria-label="Matcha being prepared"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/video/hero/wassup-matcha-hero.mp4" type="video/mp4" />
        </motion.video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#08161b]/30 via-transparent to-[#08161b]/60" />
        <motion.div style={{ opacity }} className="relative z-10 flex h-full flex-col justify-between px-5 pb-[max(26px,env(safe-area-inset-bottom))] pt-8 md:px-12 md:pb-10 md:pt-10">
          {/* The brand mark is anchored at the top-left, without changing the original asset. */}
          <a href="#top" aria-label="Wassup Matcha home" className="absolute left-5 top-6 z-20 flex w-[148px] items-center sm:w-[192px] md:left-12 md:top-10 md:w-[230px]">
            <Image src="/logo/wassup-matcha-navbar.png" alt="Wassup Matcha" width={851} height={452} priority className="h-auto w-full object-contain brightness-0 invert drop-shadow-[0_4px_16px_rgba(0,0,0,.28)]" />
          </a>
          <a href="#gallery" className="absolute bottom-40 right-5 inline-flex items-center gap-1.5 rounded-full border border-white/35 bg-black/10 px-4 py-2 text-sm backdrop-blur-sm md:bottom-10 md:right-12">Discover <ChevronDown size={15} /></a>
          <div className="absolute bottom-[max(26px,env(safe-area-inset-bottom))] left-12 z-20 hidden text-left md:block">
            <p className="text-[11px] tracking-[.09em] text-white/80 sm:text-xs">OPEN EVERY DAY</p>
            <p className="mt-1 text-sm font-semibold tracking-wide text-white sm:text-base">11 AM – 9 PM</p>
          </div>

          <div className="absolute bottom-[max(26px,env(safe-area-inset-bottom))] left-1/2 z-20 flex w-[min(92vw,440px)] -translate-x-1/2 flex-col items-center gap-3 text-center md:bottom-10 md:w-[min(62vw,400px)] md:gap-4">
            <div className="mb-2 text-center md:hidden"><p className="text-[11px] tracking-[.09em] text-white/85">OPEN EVERY DAY</p><p className="mt-1 text-sm font-semibold tracking-wide text-white">11 AM – 9 PM</p></div>
            <a href="#visit" className="flex max-w-full items-center justify-center gap-1.5 text-[10px] leading-tight text-white drop-shadow-md sm:text-xs md:text-sm" aria-label="Visit us at 344, 6th Main Road, Sector 6, HSR Layout, Bengaluru"><MapPin size={18} className="shrink-0" strokeWidth={1.8}/><span>344, 6th Main Road, Sector 6, HSR Layout</span></a>
            <div className="flex items-center justify-center gap-4">
              <a href="https://www.instagram.com/wassupmatcha_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-white/55 bg-white/10 backdrop-blur-md transition-all hover:bg-white/25 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"><Instagram size={19}/></a>
              <a href="#menu" aria-label="View menu" className="grid h-10 w-10 place-items-center rounded-full border border-white/55 bg-white/10 backdrop-blur-md transition-all hover:bg-white/25 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"><BookOpen size={19}/></a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
