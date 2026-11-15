"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValue } from "motion/react";
import { galleryStories } from "./content";
import { FloatingStoryMedia, StoryVisual } from "./FloatingStoryMedia";
import "./gallery.css";

export function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const storyRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState<string | null>(null);
  const [hovered, setHovered] = useState(false);
  const [mobileActive, setMobileActive] = useState(0);
  const [tapped, setTapped] = useState<string | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const activeStory = galleryStories.find(s => s.slug === active) ?? null;

  const movePointer = useCallback((e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType === "touch" || !sectionRef.current) return;
    const bounds = sectionRef.current.getBoundingClientRect();
    const w = Math.min(window.innerWidth * .31, 380);
    const h = Math.min(window.innerWidth * .37, 390);
    x.set(Math.max(12, Math.min(e.clientX - bounds.left + 24, bounds.width - w - 12)));
    y.set(Math.max(12, Math.min(e.clientY - bounds.top + 20, bounds.height - h - 12)));
  }, [x, y]);

  useEffect(() => {
    let raf = 0;
    function check() {
      if (window.innerWidth >= 1024) return;
      const target = window.innerHeight * .43;
      let closest = 0, distance = Infinity;
      storyRefs.current.forEach((node, i) => {
        if (!node) return;
        const r = node.getBoundingClientRect();
        const d = Math.abs(r.top + r.height / 2 - target);
        if (d < distance) { distance = d; closest = i; }
      });
      setMobileActive(closest);
    }
    function scroll() { cancelAnimationFrame(raf); raf = requestAnimationFrame(check); }
    check();
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("resize", scroll);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", scroll); window.removeEventListener("resize", scroll); };
  }, []);

  useEffect(() => {
    // Warm the active/next images before the mobile scroll highlight changes.
    if (typeof window === "undefined" || window.innerWidth >= 1024) return;
    [mobileActive, mobileActive + 1].forEach(i => {
      const item = galleryStories[i];
      if (item) { const img = new window.Image(); img.src = item.media.image; }
    });
  }, [mobileActive]);

  return (
    <section id="gallery" ref={sectionRef} aria-label="Matcha stories" className="wm-gallery relative isolate"
      onPointerMove={movePointer} onPointerLeave={() => { setHovered(false); setActive(null); }}>
      <div className="wm-gallery-content relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-10 lg:px-16">
        <h2 className="sr-only">Matcha stories and rituals</h2>
        <div className="wm-story-list flex flex-col items-center justify-center">
          {galleryStories.map((story, i) => {
            const isActive = active === story.slug;
            return <div key={story.slug} ref={node => { storyRefs.current[i] = node; }} className={`wm-story-line ${mobileActive === i ? "wm-mobile-selected" : ""}`}>
              <div className="wm-story-background" aria-hidden="true"><StoryVisual story={story} playVideo={mobileActive === i} priority={i===0}/><div className="wm-story-wash"/></div>
              <Link href={`/stories/${story.slug}`} className={`wm-story-link ${isActive ? "is-active" : ""}`}
                aria-label={`Read ${story.title} story`}
                onPointerEnter={e => { if (e.pointerType !== "touch") { setHovered(true); setActive(story.slug); } }}
                onFocus={() => setActive(story.slug)} onBlur={() => setActive(null)}
                onClick={e => {
                  if (window.matchMedia("(hover: none)").matches && tapped !== story.slug) {
                    e.preventDefault(); setTapped(story.slug);
                    setMobileActive(i);
                  }
                }}>
                <span className="wm-story-title">{story.title}</span>
              </Link>
            </div>;
          })}
        </div>
      </div>
      <FloatingStoryMedia story={activeStory} x={x} y={y} visible={hovered && !!activeStory}/>
    </section>
  );
}
