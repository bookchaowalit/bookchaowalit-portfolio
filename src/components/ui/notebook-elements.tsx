"use client";

import { motion } from "framer-motion";

// Hand-drawn highlight marker effect
export function HandDrawnHighlight({ 
  children, 
  color = "yellow", 
  className = "" 
}: { 
  children: React.ReactNode; 
  color?: "yellow" | "pink" | "blue" | "green"; 
  className?: string; 
}) {
  const colors = {
    yellow: "bg-yellow-300/60",
    pink: "bg-pink-300/60", 
    blue: "bg-blue-300/60",
    green: "bg-green-300/60"
  };

  return (
    <span className={`relative ${className}`}>
      <motion.span
        className={`absolute inset-0 ${colors[color]} -m-1 rounded-sm`}
        style={{
          transform: "rotate(-1deg) skew(-2deg)",
          clipPath: "polygon(2% 10%, 98% 5%, 96% 90%, 4% 95%)"
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <span className="relative z-10">{children}</span>
    </span>
  );
}

// Notebook paper background
export function NotebookPaper({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Paper texture background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50/90 rounded-lg" />
      
      {/* Notebook lines */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute left-0 right-0 h-px bg-blue-200/30"
            style={{
              top: `${(i + 1) * 5}%`,
              transform: `rotate(${(Math.random() - 0.5) * 0.5}deg)`
            }}
          />
        ))}
      </div>
      
      {/* Red margin line */}
      <div 
        className="absolute left-12 top-0 bottom-0 w-px bg-red-300/40"
        style={{ transform: "rotate(0.2deg)" }}
      />
      
      {/* Three-ring holes */}
      <div className="absolute left-4 top-1/4 w-3 h-3 rounded-full bg-slate-200 shadow-inner" />
      <div className="absolute left-4 top-1/2 w-3 h-3 rounded-full bg-slate-200 shadow-inner" />
      <div className="absolute left-4 top-3/4 w-3 h-3 rounded-full bg-slate-200 shadow-inner" />
      
      <div className="relative z-10 p-8">{children}</div>
    </div>
  );
}

// Hand-drawn sticky note
export function StickyNote({ 
  children, 
  color = "yellow",
  rotation = 0,
  className = "" 
}: { 
  children: React.ReactNode; 
  color?: "yellow" | "pink" | "blue" | "green";
  rotation?: number;
  className?: string;
}) {
  const colors = {
    yellow: "bg-yellow-100 border-yellow-300",
    pink: "bg-pink-100 border-pink-300",
    blue: "bg-blue-100 border-blue-300", 
    green: "bg-green-100 border-green-300"
  };

  return (
    <motion.div
      className={`${colors[color]} border-2 border-dashed p-4 shadow-md font-[family-name:var(--font-doodle)] ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        clipPath: "polygon(0% 0%, 95% 0%, 100% 8%, 100% 100%, 5% 100%, 0% 92%)"
      }}
      initial={{ scale: 0, rotate: rotation - 45 }}
      animate={{ scale: 1, rotate: rotation }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.05, rotate: rotation + 2 }}
    >
      {children}
    </motion.div>
  );
}

// Hand-drawn arrows with different styles
export function SketchArrow({ 
  direction = "right", 
  style = "straight",
  className = "",
  label = ""
}: { 
  direction?: "up" | "down" | "left" | "right";
  style?: "straight" | "curved" | "zigzag";
  className?: string;
  label?: string;
}) {
  const rotations = { right: 0, down: 90, left: 180, up: 270 };
  
  const paths = {
    straight: "M5 15c10-2 20 2 30-1 8-2 15 1 20-1",
    curved: "M5 20c8-5 15-2 25-8 6-4 12-1 18-5",
    zigzag: "M5 15l8-3 8 6 8-4 8 2 8-3"
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <motion.svg 
        width="80" 
        height="30" 
        viewBox="0 0 80 30"
        style={{ transform: `rotate(${rotations[direction]}deg)` }}
        className="text-primary/60"
      >
        <motion.path 
          d={paths[style]}
          stroke="currentColor" 
          strokeWidth="2.5" 
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.path 
          d="M65 12l8 3-3 3"
          stroke="currentColor" 
          strokeWidth="2.5" 
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1.5, ease: "easeInOut" }}
        />
      </motion.svg>
      {label && (
        <motion.span 
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-[family-name:var(--font-doodle)] text-slate-600 whitespace-nowrap"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          {label}
        </motion.span>
      )}
    </div>
  );
}

// Sketchy border frame
export function SketchyFrame({ 
  children, 
  className = "",
  variant = "dashed" 
}: { 
  children: React.ReactNode; 
  className?: string;
  variant?: "dashed" | "double" | "wavy";
}) {
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
        {variant === "dashed" && (
          <motion.rect
            x="4" y="4" 
            width="calc(100% - 8px)" 
            height="calc(100% - 8px)"
            stroke="currentColor" 
            strokeWidth="2" 
            fill="none"
            strokeDasharray="8 4"
            rx="4"
            className="text-primary/40"
          />
        )}
        {variant === "double" && (
          <>
            <motion.rect x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" stroke="currentColor" strokeWidth="1" fill="none" rx="6" className="text-primary/60" />
            <motion.rect x="6" y="6" width="calc(100% - 12px)" height="calc(100% - 12px)" stroke="currentColor" strokeWidth="1" fill="none" rx="2" className="text-secondary/60" />
          </>
        )}
        {variant === "wavy" && (
          <motion.path 
            d="M8 4 Q12 2 16 4 T24 4 T32 4 T40 4 L92% 4 Q96% 8 92% 12 L92% 88% Q88% 92% 92% 96% L40 96% T32 96% T24 96% T16 96% Q12 94% 8 96% L8% 96% Q4% 92% 8% 88% L8 12 Q4% 8 8 4"
            stroke="currentColor" 
            strokeWidth="2" 
            fill="none"
            className="text-accent/50"
          />
        )}
      </motion.svg>
    </div>
  );
}

// Hand-drawn bracket/brace
export function HandDrawnBracket({ 
  side = "left", 
  height = 100,
  className = ""
}: { 
  side?: "left" | "right";
  height?: number;
  className?: string;
}) {
  const path = side === "left" 
    ? `M15 5 Q5 5 5 ${height/2} Q5 ${height-5} 15 ${height-5}`
    : `M5 5 Q15 5 15 ${height/2} Q15 ${height-5} 5 ${height-5}`;

  return (
    <motion.svg 
      width="20" 
      height={height} 
      viewBox={`0 0 20 ${height}`}
      className={`text-primary/50 ${className}`}
    >
      <motion.path 
        d={path}
        stroke="currentColor" 
        strokeWidth="3" 
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}