"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useMemo, useState } from "react";

type Drop = { left: number; delay: number; duration: number; height: number; opacity: number };

export function RainLayer({ intensity = 46, interactive = true }: { intensity?: number; interactive?: boolean }) {
  const drops = useMemo<Drop[]>(
    () => Array.from({ length: intensity }, (_, i) => ({
      left: (i * 37.7) % 100,
      delay: -((i * 0.29) % 3.6),
      duration: 1.45 + ((i * 0.17) % 1.7),
      height: 45 + ((i * 19) % 90),
      opacity: 0.13 + ((i % 5) * 0.045),
    })),
    [intensity],
  );

  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const sx = useSpring(mx, { stiffness: 100, damping: 28, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 100, damping: 28, mass: 0.5 });
  const mask = useTransform([sx, sy], ([x, y]) => `radial-gradient(circle 135px at ${x}% ${y}%, transparent 0%, rgba(0,0,0,.16) 46%, rgba(0,0,0,.78) 100%)`);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const hover = window.matchMedia("(hover:hover) and (pointer:fine)").matches;
    setCanHover(hover);
    if (!interactive || !hover) return;
    const move = (e: PointerEvent) => {
      mx.set((e.clientX / window.innerWidth) * 100);
      my.set((e.clientY / window.innerHeight) * 100);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [interactive, mx, my]);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[3] overflow-hidden">
      <div className="absolute inset-0 rain-haze" />
      {drops.map((drop, i) => (
        <span
          key={i}
          className="rain-drop absolute -top-32 w-px bg-white"
          style={{
            left: `${drop.left}%`,
            height: `${drop.height}px`,
            opacity: drop.opacity,
            animationDelay: `${drop.delay}s`,
            animationDuration: `${drop.duration}s`,
          }}
        />
      ))}
      <div className="absolute inset-0 rain-glass opacity-65" />
      {interactive && canHover && (
        <motion.div
          className="absolute inset-0 bg-white/[0.025] backdrop-blur-[2px]"
          style={{ WebkitMaskImage: mask, maskImage: mask }}
        />
      )}
    </div>
  );
}
