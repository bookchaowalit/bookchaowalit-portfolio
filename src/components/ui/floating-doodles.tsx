"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Floating doodle shapes for background decoration
export function FloatingDoodles() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const doodleShapes = [
    // Squiggle lines
    <motion.svg key="squiggle1" width="40" height="20" viewBox="0 0 40 20" className="text-primary/20">
      <motion.path 
        d="M2 10c4-3 8 3 12-2 4-3 8 2 12-1 4-2 8 3 10 0" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.svg>,
    
    // Small stars
    <motion.svg key="star1" width="16" height="16" viewBox="0 0 16 16" className="text-secondary/30">
      <motion.path 
        d="M8 1l1.5 4.5H14l-3.5 2.5 1.5 4.5L8 10l-3.5 2.5L6 8l-3.5-2.5h4.5L8 1z" 
        fill="currentColor"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
    </motion.svg>,

    // Circle with dots
    <motion.svg key="circle1" width="24" height="24" viewBox="0 0 24 24" className="text-accent/25">
      <motion.circle 
        cx="12" 
        cy="12" 
        r="8" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none"
        strokeDasharray="3 2"
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </motion.svg>,

    // Triangle outline
    <motion.svg key="triangle1" width="20" height="18" viewBox="0 0 20 18" className="text-primary/20">
      <motion.path 
        d="M10 2l8 14H2L10 2z" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none"
        strokeLinecap="round" 
        strokeLinejoin="round"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.svg>,

    // Heart doodle
    <motion.svg key="heart1" width="20" height="18" viewBox="0 0 20 18" className="text-accent/20">
      <motion.path 
        d="M10 16s-8-4-8-10c0-3 2-5 5-5 2 0 3 1 3 1s1-1 3-1c3 0 5 2 5 5 0 6-8 10-8 10z" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none"
        strokeLinecap="round"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.svg>
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {Array.from({ length: 12 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute overflow-visible p-4"
          style={{
            left: `${Math.random() * 95}%`,
            top: `${Math.random() * 95}%`,
          }}
          animate={{
            x: [0, Math.random() * 30 - 15, 0],
            y: [0, Math.random() * 30 - 15, 0],
            rotate: [0, Math.random() * 20 - 10, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        >
          {doodleShapes[i % doodleShapes.length]}
        </motion.div>
      ))}
    </div>
  );
}