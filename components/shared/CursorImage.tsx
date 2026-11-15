"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

export function CursorImage({ src, alt, className = "", children }: { src: string; alt: string; className?: string; children?: ReactNode }) {
  const [hoverable, setHoverable] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 110, damping: 24, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 110, damping: 24, mass: 0.5 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-5, 5]);
  const imageX = useTransform(sx, [-0.5, 0.5], ["-2.5%", "2.5%"]);
  const imageY = useTransform(sy, [-0.5, 0.5], ["-2%", "2%"]);

  useEffect(() => {
    setHoverable(window.matchMedia("(hover:hover) and (pointer:fine)").matches);
  }, []);

  return (
    <motion.div
      className={`group relative overflow-hidden ${className}`}
      style={hoverable ? { rotateX, rotateY, transformPerspective: 900 } : undefined}
      onPointerMove={hoverable ? (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
      } : undefined}
      onPointerLeave={() => { x.set(0); y.set(0); }}
      whileHover={hoverable ? { scale: 0.99 } : undefined}
      transition={{ duration: 0.35 }}
    >
      <motion.img
        src={src}
        alt={alt}
        className="absolute -inset-[4%] h-[108%] w-[108%] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.055]"
        style={hoverable ? { x: imageX, y: imageY } : undefined}
      />
      {children}
    </motion.div>
  );
}
