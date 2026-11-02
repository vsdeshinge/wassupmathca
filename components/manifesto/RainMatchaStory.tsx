"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const rainVideo = "https://cdn.coverr.co/videos/coverr-night-city-from-the-window-3934/1080p.mp4";
const ritualVideo = "https://cdn.coverr.co/videos/coverr-coffee-pour-1355/1080p.mp4";

function FilmPanel({
  eyebrow,
  word,
  ending,
  copy,
  video,
}: {
  eyebrow: string;
  word: string;
  ending: string;
  copy: string;
  video: string;
}) {
  return (
    <section className="relative min-h-[115svh] overflow-hidden text-white">
      <video autoPlay muted loop playsInline preload="metadata" src={video} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,15,19,.22),rgba(7,15,19,.34)_45%,rgba(7,15,19,.82))]" />
      <div className="wet-glass absolute inset-0 opacity-20" />

      <div className="relative z-10 flex min-h-[115svh] flex-col justify-between px-5 py-24 sm:px-7 md:px-10 md:py-28">
        <div className="max-w-lg">
          <p className="text-[10px] uppercase tracking-[0.28em] text-white/65 md:text-xs">{eyebrow}</p>
          <p className="mt-5 text-base leading-relaxed text-white/72 md:text-lg">{copy}</p>
        </div>

        <div>
          <h2 className="brand-display text-[28vw] leading-[.68] sm:text-[23vw] md:text-[16vw]">{word}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-[0.6fr_1fr] md:items-end">
            <p className="max-w-xs text-xs uppercase tracking-[0.22em] text-white/58">not a theme. a physical feeling.</p>
            <p className="brand-display text-[15vw] leading-[.74] sm:text-[11vw] md:text-[7.5vw]">{ending}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function RainMatchaStory() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [70, -30]);

  return (
    <div id="manifesto">
      <FilmPanel
        eyebrow="The monsoon effect"
        word="RAIN"
        ending="IT'S SAFE."
        copy="Bangalore rain changes the pace of the whole city. Sound softens. Light drops. People stop rushing for a second. That pause is the atmosphere we bring indoors."
        video={rainVideo}
      />
      <FilmPanel
        eyebrow="The daily ritual"
        word="MATCHA"
        ending="TO CALM DOWN."
        copy="Whisked slowly, poured deliberately, and made to be watched. Matcha gives the café its ritual — something small enough to repeat, and calm enough to change the mood."
        video={ritualVideo}
      />

      <section ref={ref} className="relative min-h-[120svh] overflow-hidden text-white">
        <motion.video
          style={{ scale, y }}
          src={ritualVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(58,11,11,.18),rgba(71,16,16,.5)_45%,rgba(71,16,16,.9))]" />
        <div className="relative z-10 flex min-h-[120svh] flex-col justify-between px-5 py-24 sm:px-7 md:px-10 md:py-28">
          <div className="max-w-xl">
            <p className="text-[10px] uppercase tracking-[0.28em] text-white/66 md:text-xs">Where both meet</p>
            <p className="mt-5 text-base leading-relaxed text-white/72 md:text-lg">
              Rain gives us the feeling. Matcha gives us the ritual. The café is simply the room where they happen at the same time.
            </p>
          </div>
          <div>
            <h2 className="brand-display max-w-[1450px] text-[18vw] leading-[.71] sm:text-[15vw] md:text-[10.5vw]">
              SO WE PUT<br />BOTH IN<br />ONE ROOM.
            </h2>
            <p className="mt-7 max-w-md text-lg leading-tight text-white/72 md:text-2xl">Come for the matcha. Stay for the feeling.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
