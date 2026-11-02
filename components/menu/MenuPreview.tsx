"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Play } from "lucide-react";
import { useState } from "react";

const drinks = [
  {
    name: "VANILLA",
    note: "Classic matcha",
    price: 345,
    video: "https://cdn.coverr.co/videos/coverr-coffee-pour-1355/1080p.mp4",
  },
  {
    name: "HONEY SEA SALT",
    note: "Sweet and savoury",
    price: 345,
    video: "https://cdn.coverr.co/videos/coverr-night-city-from-the-window-3934/1080p.mp4",
  },
  {
    name: "STRAWBERRY",
    note: "Fruity",
    price: 360,
    video: "https://cdn.coverr.co/videos/coverr-coffee-pour-1355/1080p.mp4",
  },
  {
    name: "BLACK SESAME",
    note: "Rich and toasty",
    price: 360,
    video: "https://cdn.coverr.co/videos/coverr-night-city-from-the-window-3934/1080p.mp4",
  },
] as const;

export function MenuPreview() {
  const [active, setActive] = useState(0);

  return (
    <section id="menu" className="bg-[var(--cream)] px-5 py-20 text-[var(--charcoal)] md:px-10 md:py-28">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.3em] opacity-55">Matcha selection</p>
            <h2 className="brand-display text-[16vw] leading-[.74] md:text-[9vw]">WHAT'S<br />YOUR MATCHA?</h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-black/55 lg:justify-self-end">
            Hover through a few house favourites. The media changes with the drink so this section feels more like a campaign than a menu board.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-14">
          <div className="order-2 lg:order-1">
            {drinks.map((drink, index) => (
              <button
                key={drink.name}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                className="group grid w-full grid-cols-[1fr_auto] items-baseline gap-3 border-b border-[var(--monsoon)]/14 py-5 text-left md:py-7"
              >
                <span>
                  <span className={`brand-display block text-[10vw] leading-[.82] transition-opacity duration-300 md:text-[5vw] ${active === index ? "opacity-100" : "opacity-35 group-hover:opacity-100"}`}>
                    {drink.name}
                  </span>
                  <span className="mt-2 block text-[10px] uppercase tracking-[0.2em] opacity-50">{drink.note}</span>
                </span>
                <span className="text-xs tracking-[0.12em]">₹{drink.price}</span>
              </button>
            ))}
            <a href="#visit" className="mt-8 inline-flex items-center gap-2 border-b border-current pb-1 text-xs uppercase tracking-[0.22em]">
              See full menu <ArrowUpRight size={16} strokeWidth={1.85} />
            </a>
          </div>

          <div className="order-1 lg:order-2 lg:sticky lg:top-24 lg:h-[72vh]">
            <div className="relative h-[58vh] overflow-hidden bg-[var(--monsoon)] md:h-[68vh] lg:h-full">
              <AnimatePresence mode="wait">
                <motion.video
                  key={drinks[active].video + active}
                  src={drinks[active].video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  initial={{ opacity: 0, scale: 1.06, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1.02, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.04 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-black/10" />
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-white/76">
                <Play size={13} strokeWidth={1.6} />
                Moving menu preview
              </div>
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="text-[10px] uppercase tracking-[0.22em] text-white/68">{drinks[active].note}</p>
                <p className="brand-display mt-3 text-[11vw] leading-[.78] md:text-[6vw] lg:text-[4vw]">{drinks[active].name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
