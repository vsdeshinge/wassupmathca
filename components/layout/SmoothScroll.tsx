"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.05,
      smoothWheel: true,
    });

    return () => lenis.destroy();
  }, []);

  return null;
}
