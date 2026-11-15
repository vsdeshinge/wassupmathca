"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useSpring, type MotionValue } from "motion/react";
import type { GalleryStory } from "./content";

export function StoryVisual({ story, className = "", playVideo = true, priority = false }: { story: GalleryStory; className?: string; playVideo?: boolean; priority?: boolean }) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [story.slug]);
  return (
    <div className={`relative h-full w-full overflow-hidden bg-[var(--cream)] ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={story.media.image} alt={story.media.alt} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} decoding="async" className="absolute inset-0 h-full w-full object-cover" />
      {playVideo && story.media.type === "video" && story.media.video && !failed && (
        <video key={story.slug} src={story.media.video} poster={story.media.image} muted autoPlay loop playsInline preload="metadata"
          onError={() => setFailed(true)} className="absolute inset-0 h-full w-full object-cover" aria-hidden="true" />
      )}
    </div>
  );
}

export function FloatingStoryMedia({ story, x, y, visible }: { story: GalleryStory | null; x: MotionValue<number>; y: MotionValue<number>; visible: boolean }) {
  const springX = useSpring(x, { stiffness: 180, damping: 26, mass: .75 });
  const springY = useSpring(y, { stiffness: 180, damping: 26, mass: .75 });
  return (
    <motion.div aria-hidden="true" className="wm-gallery-cursor pointer-events-none absolute left-0 top-0 z-20 hidden lg:block"
      style={{ x: springX, y: springY }} animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : .96 }}
      transition={{ duration: .22 }}>
      <div className="relative h-[min(37vw,390px)] w-[min(31vw,380px)] overflow-hidden rounded-[12px] shadow-[0_20px_70px_rgba(26,61,74,.16)]">
        <AnimatePresence mode="sync" initial={false}>
          {story && <motion.div key={story.slug} className="absolute inset-0" initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: .32 }}>
            <StoryVisual story={story}/>
          </motion.div>}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
