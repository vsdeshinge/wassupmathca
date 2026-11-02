"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { easeOut } from "@/lib/motion";

export function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem("wm-intro-seen-v3");
    if (seen) {
      setVisible(false);
      return;
    }
    const timer = window.setTimeout(() => {
      sessionStorage.setItem("wm-intro-seen-v3", "1");
      setVisible(false);
    }, 1700);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="fixed inset-0 z-[100] overflow-hidden bg-[var(--cream)] text-[var(--monsoon)]"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.25, ease: easeOut }}
            className="absolute left-0 top-0 h-[3px] w-full origin-left bg-[var(--monsoon)]"
          />

          <div className="flex h-full flex-col justify-between p-5 md:p-10">
            <div className="flex items-center justify-between text-[10px] tracking-[0.12em] opacity-60 md:text-xs">
              <span>Bengaluru</span>
              <span>Since 2026</span>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: easeOut }}
              className="mx-auto w-[min(78vw,760px)]"
            >
              <Image
                src="/logo/wassup-matcha-combination.png"
                alt="Wassup Matcha"
                width={1701}
                height={1106}
                priority
                className="h-auto w-full"
              />
            </motion.div>

            <div className="flex items-end justify-between gap-4 text-[11px] tracking-[0.08em] opacity-60 md:text-sm">
              <span>Rainy days, everyday.</span>
              <span className="text-right">HSR Layout<br />Bengaluru</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
