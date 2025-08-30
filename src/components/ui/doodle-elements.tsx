"use client";

import { motion } from "framer-motion";

// Hand-drawn arrow SVG
export function DoodleArrow({ className = "", direction = "right" }: { className?: string; direction?: "right" | "left" | "up" | "down" }) {
  const rotations = {
    right: 0,
    down: 90,
    left: 180,
    up: 270
  };

  return (
    <motion.svg 
      className={className}
      width="60" 
      height="20" 
      viewBox="0 0 60 20" 
      fill="none"
      style={{ transform: `rotate(${rotations[direction]}deg)` }}
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <motion.path 
        d="M2 10c8-3 16 2 24-1 6-2 12 1 18-1 4-1 8 2 12 0" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none"
        strokeLinecap="round"
        strokeDasharray="2 3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.path 
        d="M50 6c2 2 4 2 6 4-2 2-4 2-6 4" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 1.5, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}

// Hand-drawn star
export function DoodleStar({ className = "", size = 24 }: { className?: string; size?: number }) {
  return (
    <motion.svg 
      className={className}
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none"
      animate={{ rotate: [0, 10, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.path 
        d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2L12 17l-6.4 4.2L8 14l-6-4.8h7.6L12 2z" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        fill="none"
        strokeLinecap="round" 
        strokeLinejoin="round"
        initial={{ pathLength: 0, fill: "none" }}
        animate={{ pathLength: 1, fill: "currentColor" }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}

// Hand-drawn underline
export function DoodleUnderline({ className = "", width = 120 }: { className?: string; width?: number }) {
  return (
    <motion.svg 
      className={className}
      width={width} 
      height="8" 
      viewBox={`0 0 ${width} 8`} 
      fill="none"
    >
      <motion.path 
        d={`M2 4c${width/4} 1 ${width/2} -1 ${width-4} 2`}
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}

// Doodle border frame
export function DoodleFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {children}
      <motion.svg 
        className="absolute inset-0 w-full h-full pointer-events-none" 
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <motion.path 
          d="M4 4 Q8 2 12 4 Q16 6 20 4 L96% 4 Q98% 8 96% 12 L96% 88% Q94% 92% 96% 96% L80% 96% Q76% 94% 72% 96% Q68% 98% 64% 96% L8% 96% Q4% 92% 8% 88% L4 12 Q2 8 4 4"
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none"
          strokeLinecap="round"
          strokeDasharray="5 3"
          opacity="0.6"
        />
      </motion.svg>
    </div>
  );
}

// Hand-drawn circle highlight
export function DoodleCircle({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <motion.svg 
      className={className}
      width={size} 
      height={size} 
      viewBox={`0 0 ${size} ${size}`} 
      fill="none"
    >
      <motion.path 
        d={`M${size/2} 4 Q${size-4} 4 ${size-4} ${size/2} Q${size-4} ${size-4} ${size/2} ${size-4} Q4 ${size-4} 4 ${size/2} Q4 4 ${size/2} 4`}
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}