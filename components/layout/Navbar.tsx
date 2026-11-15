"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X, Instagram, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
const links = [["Stories", "#gallery"], ["Perks", "#rewards"], ["Menu", "#menu"], ["Journal", "#blog"], ["Visit", "#visit"]] as const;
export function Navbar() {
 const [open,setOpen]=useState(false);
 const [visible,setVisible]=useState(false);
 useEffect(()=>{
  const observer = new IntersectionObserver(([entry])=>setVisible(!entry.isIntersecting),{threshold:0,rootMargin:"-2px 0px 0px 0px"});
  const hero=document.getElementById('top'); if(hero)observer.observe(hero);
  return ()=>observer.disconnect();
 },[]);
 useEffect(()=>{document.body.style.overflow=open?'hidden':'';return ()=>{document.body.style.overflow=''}},[open]);
 return <>
  <motion.header initial={false} animate={{y:visible?0:-115,opacity:visible?1:0}} transition={{type:'spring',stiffness:205,damping:28}} aria-hidden={!visible} className={`fixed z-50 inset-x-0 top-0 px-3 pt-3 md:px-5 md:pt-4 ${!visible?'pointer-events-none':''}`}>
   <div className="mx-auto flex h-[62px] max-w-[1600px] items-center justify-between rounded-full border border-white/45 bg-[#1a3d4a]/55 px-5 shadow-[0_14px_42px_rgba(0,0,0,.18),inset_0_1px_0_rgba(255,255,255,.18)] backdrop-blur-2xl supports-[backdrop-filter]:bg-[#1a3d4a]/45 md:h-[74px] md:px-8">
    <a href="#top" aria-label="Back to top" className="flex h-full w-[145px] shrink-0 items-center sm:w-[172px] md:w-[190px]"><Image src="/logo/wassup-matcha-navbar.png" width={851} height={452} alt="Wassup Matcha" className="h-[51px] w-auto max-w-full object-contain brightness-0 invert md:h-[64px]"/></a>
    <nav aria-label="Main navigation" className="hidden items-center gap-5 text-[14px] text-[#f9f7f4] lg:flex xl:gap-10">{links.map(([label,href])=><a className="transition-opacity hover:opacity-60" href={href} key={href}>{label}</a>)}</nav>
    <div className="flex items-center gap-2"><a href="https://www.instagram.com/wassupmatcha_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hidden p-2 text-[#f9f7f4] sm:inline-flex"><Instagram size={21}/></a><a href="#visit" className="hidden items-center gap-2 rounded-full bg-[#f9f7f4] px-5 py-3 text-sm font-semibold text-[#1a3d4a] sm:inline-flex"><MapPin size={16}/> Visit us</a><button onClick={()=>setOpen(true)} aria-label="Open navigation" className="rounded-full p-2 text-white lg:hidden"><Menu size={24}/></button></div>
   </div>
  </motion.header>
  <AnimatePresence>{open&&<motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-[80] overflow-y-auto bg-[#1a3d4a] p-6 text-[#f9f7f4]">
   <div className="flex items-center justify-between"><span className="brand-display text-2xl">WASSUP MATCHA</span><button onClick={()=>setOpen(false)} aria-label="Close navigation" className="rounded-full border border-white/40 p-2"><X/></button></div>
   <nav aria-label="Mobile navigation" className="mt-16 flex flex-col gap-5">{links.map(([label,href])=><a key={href} className="brand-display text-[clamp(3rem,13vw,6rem)] leading-[.9]" href={href} onClick={()=>setOpen(false)}>{label}</a>)}</nav>
   <a href="#visit" onClick={()=>setOpen(false)} className="mt-10 inline-flex gap-3 rounded-full bg-[#f9f7f4] px-6 py-3 text-[#1a3d4a]">Get directions <ArrowUpRight/></a>
  </motion.div>}</AnimatePresence>
 </>;
}
