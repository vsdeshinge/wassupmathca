export const easeOut = [0.16, 1, 0.3, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: easeOut },
  },
};

export const lineReveal = {
  hidden: { y: "115%" },
  visible: {
    y: 0,
    transition: { duration: 0.95, ease: easeOut },
  },
};
