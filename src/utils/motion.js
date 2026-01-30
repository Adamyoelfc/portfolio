export const textVariant = (delay) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay,
    },
  },
});

export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// Deliberate, vintage timing - less bouncy
export const transition = { type: "tween", duration: 1.2, ease: "easeOut" };

export const slideAnimation = (direction, delay = 0) => {
  return {
    initial: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0.5 },
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { ...transition, delay: delay },
    },
    exit: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      transition: { ...transition, delay: 0 },
    },
  };
};

export const fadeAnimation = {
  initial: {
    opacity: 0,
    transition: { ...transition, delay: 0.5 },
  },
  animate: {
    opacity: 1,
    transition: { ...transition, delay: 0, duration: 2 },
  },
  exit: {
    opacity: 0,
    transition: { ...transition, delay: 0 },
  },
};

export const headTextAnimation = (direction, delay = 0) => {
  return {
    initial: {
      x: direction === "right" ? 100 : -100,
      opacity: 0,
    },
    animate: { x: 0, opacity: 1 },
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.8,
      delay: delay,
    },
  };
};

export const headContentAnimation = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    type: "tween",
    ease: "easeOut",
    duration: 0.8,
    delay: 0.2,
    delayChildren: 0.2,
  },
};

export const aboutAnimation = {
  initial: { opacity: 0, y: +100, scale: 0.95 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  transition: {
    type: "tween",
    ease: "easeOut",
    duration: 0.8,
    delay: 0.2,
    delayChildren: 0.2,
  },
  viewport: { once: true, amount: 0.8 },
};

export const headContainerAnimation = {
  initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
  animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
  exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } },
};

// CRT Flicker Animation - subtle opacity fluctuation
export const crtFlicker = {
  initial: { opacity: 1 },
  animate: {
    opacity: [1, 0.97, 1, 0.95, 1, 0.98, 1],
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
    },
  },
};

// Scan Reveal - content appears with scanline effect
export const scanReveal = (delay = 0) => ({
  initial: {
    opacity: 0,
    clipPath: "inset(0 0 100% 0)",
  },
  animate: {
    opacity: 1,
    clipPath: "inset(0 0 0% 0)",
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.8,
      delay: delay,
    },
  },
});

// Glitch Hover - for interactive elements
export const glitchHover = {
  initial: {
    x: 0,
    textShadow: "none",
  },
  hover: {
    x: [0, -2, 2, -1, 1, 0],
    textShadow: [
      "none",
      "2px 0 #39FF14, -2px 0 #7FFF00",
      "-2px 0 #39FF14, 2px 0 #7FFF00",
      "1px 0 #39FF14, -1px 0 #7FFF00",
      "none",
    ],
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

// Power On Animation - for skills/icons
export const powerOn = (delay = 0) => ({
  initial: {
    opacity: 0,
    filter: "brightness(0) saturate(0)",
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    filter: "brightness(1) saturate(1)",
    scale: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.5,
      delay: delay,
    },
  },
});

// Phosphor Glow Pulse - for accent elements
export const glowPulse = {
  animate: {
    textShadow: [
      "0 0 10px rgba(57, 255, 20, 0.5), 0 0 20px rgba(57, 255, 20, 0.3)",
      "0 0 20px rgba(57, 255, 20, 0.8), 0 0 40px rgba(57, 255, 20, 0.5)",
      "0 0 10px rgba(57, 255, 20, 0.5), 0 0 20px rgba(57, 255, 20, 0.3)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Card Hover Animation - vintage feel
export const cardHover = {
  initial: {
    y: 0,
    boxShadow: "0 4px 6px -1px rgba(26, 29, 20, 0.5)",
  },
  hover: {
    y: -5,
    boxShadow: "0 0 20px rgba(57, 255, 20, 0.3), 0 0 40px rgba(57, 255, 20, 0.15)",
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.3,
    },
  },
};
