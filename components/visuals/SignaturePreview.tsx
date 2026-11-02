"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const drinks = [
  {
    kicker: "Cereal Milk Matcha",
    title: "AFTER SCHOOL.",
    copy: "For the little kid who loved rainy days, cereal-filled afternoons, and having nowhere important to be.",
    video: "https://cdn.coverr.co/videos/coverr-coffee-pour-1355/1080p.mp4",
  },
  {
    kicker: "Date Pistachio Matcha",
    title: "NUTTY PROFESSOR.",
    copy: "A little nutty, a little genius — creamy, grounded, and very difficult to order just once.",
    video: "https://cdn.coverr.co/videos/coverr-night-city-from-the-window-3934/1080p.mp4",
  },
];

function DrinkFilm({ drink, align = "left" }: { drink: (typeof drinks)[number]; align?: "left" | "right" }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1.02]);
  const x = useTransform(scrollYProgress, [0, 1], [align === "left" ? -30 : 30, align === "left" ? 18 : -18]);

  return (
    <section ref={ref} className="relative min-h-[110svh] overflow-hidden text-white">
      <motion.video
        style={{ scale, x }}
        src={drink.video}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-[108%] object-cover"
      />
      <div className={`absolute inset-0 ${align === "left" ? "bg-[linear-gradient(90deg,rgba(24,11,11,.82),rgba(24,11,11,.3)_56%,rgba(24,11,11,.08))]" : "bg-[linear-gradient(270deg,rgba(8,20,24,.84),rgba(8,20,24,.3)_56%,rgba(8,20,24,.08))]"}`} />

      <div className={`relative z-10 flex min-h-[110svh] items-end px-5 py-20 sm:px-7 md:px-10 md:py-24 ${align === "right" ? "justify-end text-right" : "justify-start"}`}>
        <div className="max-w-5xl">
          <p className="text-[10px] uppercase tracking-[0.28em] text-white/62 md:text-xs">{drink.kicker}</p>
          <h3 className="brand-display mt-5 text-[18vw] leading-[.7] sm:text-[15vw] md:text-[9vw]">{drink.title}</h3>
          <p className={`mt-7 max-w-xl text-lg leading-tight text-white/76 md:text-2xl ${align === "right" ? "ml-auto" : ""}`}>{drink.copy}</p>
        </div>
      </div>
    </section>
  );
}

export function SignaturePreview() {
  return (
    <section aria-label="House signature drinks">
      <DrinkFilm drink={drinks[0]} />
      <DrinkFilm drink={drinks[1]} align="right" />
    </section>
  );
}
