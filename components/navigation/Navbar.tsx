"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Menu", "#menu"],
  ["Story", "#story"],
  ["Events", "#events"],
  ["Visit", "#visit"],
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-4 text-[var(--cream)] md:px-10 md:py-5">
        <a href="#top" aria-label="Wassup Matcha home" className="block w-[118px] sm:w-[138px]">
          <Image
            src="/logo/wassup-matcha-combination.png"
            alt="Wassup Matcha"
            width={1701}
            height={1106}
            priority
            className="h-auto w-full brightness-0 invert drop-shadow-[0_2px_16px_rgba(0,0,0,.18)]"
          />
        </a>

        <nav className="hidden items-center gap-8 text-sm tracking-[0.05em] md:flex">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          <a href="#visit" className="inline-flex items-center gap-2 border-b border-current pb-1">
            Get directions <ArrowUpRight size={14} strokeWidth={1.8} />
          </a>
        </nav>

        <button className="md:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu size={26} />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[80] bg-[var(--monsoon)] p-6 text-[var(--cream)]"
          >
            <div className="flex items-start justify-between">
              <div className="w-[145px]">
                <Image
                  src="/logo/wassup-matcha-combination.png"
                  alt="Wassup Matcha"
                  width={1701}
                  height={1106}
                  className="h-auto w-full brightness-0 invert"
                />
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close menu"><X size={30} /></button>
            </div>

            <div className="mt-20 flex flex-col gap-3">
              {links.map(([label, href]) => (
                <a key={href} href={href} onClick={() => setOpen(false)} className="brand-display text-[18vw] leading-[.84] uppercase">
                  {label}
                </a>
              ))}
            </div>

            <div className="absolute bottom-7 left-6 right-6 flex items-center justify-between text-sm tracking-[0.05em] opacity-70">
              <p>HSR · Bengaluru</p>
              <a href="#visit" onClick={() => setOpen(false)} className="inline-flex items-center gap-2">
                Directions <ArrowUpRight size={15} strokeWidth={1.8} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
