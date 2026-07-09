"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

interface TiltProps {
  children: React.ReactNode;
  className?: string;
  max?: number;
  scale?: number;
}

export default function Tilt({ children, className = "", max = 10, scale = 1.015 }: TiltProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const rotateX = useTransform(ySpring, [0, 1], [max, -max]);
  const rotateY = useTransform(xSpring, [0, 1], [-max, max]);
  const s = useMotionValue(1);
  const sSpring = useSpring(s, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width);
    y.set(mouseY / height);
    s.set(scale);

    cardRef.current.style.setProperty("--x", `${mouseX}px`);
    cardRef.current.style.setProperty("--y", `${mouseY}px`);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
    s.set(1);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        scale: sSpring,
        transformStyle: "preserve-3d",
      }}
      className={`tilt-container ${className}`}
    >
      {children}
    </motion.div>
  );
}
