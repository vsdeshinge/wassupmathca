"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { Droplets } from "lucide-react";
import { RainLayer } from "@/components/visuals/RainLayer";

export function RainWindowExperience() {
  const x = useMotionValue(50);
  const y = useMotionValue(50);
  const sx = useSpring(x, { stiffness: 105, damping: 24 });
  const sy = useSpring(y, { stiffness: 105, damping: 24 });
  const mask = useTransform([sx, sy], ([mx, my]) => `radial-gradient(circle 150px at ${mx}% ${my}%, transparent 0%, rgba(0,0,0,.02) 48%, black 72%)`);
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    setDesktop(window.matchMedia("(hover:hover) and (pointer:fine)").matches);
  }, []);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[var(--monsoon)] text-white">
      <video autoPlay muted loop playsInline preload="metadata" src="https://cdn.coverr.co/videos/coverr-night-city-from-the-window-3934/1080p.mp4" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[var(--monsoon)]/34" />
      <RainLayer intensity={50} interactive={false} />

      <motion.div
        className="absolute inset-0 z-[5] bg-[rgba(218,230,230,.20)] backdrop-blur-[4px]"
        style={desktop ? { WebkitMaskImage: mask, maskImage: mask } : undefined}
        animate={!desktop ? { opacity: [0.68, 0.42, 0.68] } : undefined}
        transition={!desktop ? { duration: 6, repeat: Infinity, ease: "easeInOut" } : undefined}
      />

      {desktop && (
        <div
          className="absolute inset-0 z-10"
          onPointerMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            x.set(((e.clientX - rect.left) / rect.width) * 100);
            y.set(((e.clientY - rect.top) / rect.height) * 100);
          }}
        />
      )}

      <div className="pointer-events-none relative z-20 flex min-h-[100svh] flex-col justify-between p-5 sm:p-7 md:p-10">
        <div className="inline-flex w-fit items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-white/72">
          <Droplets size={15} strokeWidth={1.7} />
          Bangalore weather, all year
        </div>
        <div className="max-w-[1100px]">
          <h2 className="brand-display text-[18vw] leading-[.72] sm:text-[14vw] md:text-[10vw]">COME<br />INSIDE.</h2>
          <p className="mt-6 max-w-md text-lg leading-tight text-white/76 sm:text-xl">The weather is better in here.</p>
          <p className="mt-3 hidden text-[10px] uppercase tracking-[0.24em] text-white/55 md:block">Move your cursor across the glass</p>
        </div>
      </div>
    </section>
  );
}
