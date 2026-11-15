"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { drinks } from "./content";
import { ArrowUpRight, ChevronDown } from "lucide-react";

function DrinkVisual({ index, compact = false }: { index: number; compact?: boolean }) {
  const d = drinks[index];
  return <div className={`relative overflow-hidden bg-[var(--monsoon)] ${compact ? "aspect-[16/10] rounded-xl" : "h-full"}`}>
    <AnimatePresence mode="wait" initial={false}>
      <motion.img key={d.image} src={d.image} alt={d.name} loading={index===0 ? "eager" : "lazy"}
        initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
        transition={{ duration: .35 }} className="absolute inset-0 h-full w-full object-cover" />
    </AnimatePresence>
    <div className="absolute inset-0 bg-gradient-to-t from-[#1a3d4a]/65 via-transparent to-transparent"/>
    <span className="brand-display absolute bottom-4 left-4 text-[clamp(1.7rem,5vw,3.5rem)] leading-none text-[#f9f7f4]">{d.name}</span>
  </div>;
}

export function MenuPreview() {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);
  return <section id="menu" className="bg-[var(--cream)] px-5 py-20 text-[var(--monsoon)] md:px-10 md:py-28">
    <div className="mx-auto max-w-[1600px]">
      <header className="mb-12"><h2 className="brand-display text-[clamp(3.24rem,10vw,8.47rem)] leading-[.85]">THE<br/>MENU.</h2></header>
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-14">
        <div>
          {drinks.map((d,i)=><div key={d.name} className="border-b border-[#1a3d4a]/20">
            <button type="button" aria-controls={`drink-preview-${i}`} aria-expanded={expanded === i}
              aria-label={`Preview ${d.name}`} onMouseEnter={()=>setActive(i)} onFocus={()=>setActive(i)}
              onClick={()=>{setActive(i);setExpanded(current=>current===i?null:i);}}
              className="group grid w-full grid-cols-[1fr_auto] items-center gap-3 py-4 text-left md:py-7 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a3d4a]">
              <span><span className={`brand-display block text-[clamp(2rem,6.18vw,4rem)] leading-[1] transition-opacity ${active===i ? "opacity-100":"opacity-40 group-hover:opacity-100"}`}>{d.name}</span><span className="brand-secondary mt-1 block text-[clamp(.8rem,1vw,1rem)] opacity-60">{d.category}</span></span>
              <ChevronDown size={22} strokeWidth={1.8} aria-hidden="true" className={`transition-transform duration-300 lg:hidden ${expanded===i?'rotate-180':''}`}/>
              <ArrowUpRight size={22} strokeWidth={1.8} aria-hidden="true" className="hidden lg:block"/>
            </button>
            <AnimatePresence initial={false}>{expanded===i && <motion.div id={`drink-preview-${i}`} initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} transition={{duration:.28}} className="overflow-hidden lg:hidden"><div className="pb-4 pt-1"><DrinkVisual index={i} compact/><a href={`/stories/${d.slug}`} className="mt-3 inline-flex items-center gap-2 text-sm underline underline-offset-4">Read the story <ArrowUpRight size={16}/></a></div></motion.div>}</AnimatePresence>
          </div>)}
        </div>
        <div className="hidden lg:sticky lg:top-24 lg:block lg:h-[72vh]"><DrinkVisual index={active}/><a href={`/stories/${drinks[active].slug}`} className="absolute bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-[#f9f7f4] px-4 py-2 text-[#1a3d4a]">Discover story <ArrowUpRight size={17}/></a></div>
      </div>
      <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-[#1a3d4a]/20 pt-7 md:flex-row md:items-center"><p className="text-lg">Something caught your eye? Come find us.</p><a className="inline-flex items-center gap-2 rounded-full bg-[#1a3d4a] px-6 py-3 text-[#f9f7f4]" href="#visit">Get directions <ArrowUpRight size={18}/></a></div>
    </div>
  </section>;
}
