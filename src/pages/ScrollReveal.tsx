import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
}

export default function ScrollReveal({ children, delay = 0 }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} // Starts hidden and 30px lower
      whileInView={{ opacity: 1, y: 0 }} // Animates to normal when scrolled into view
      viewport={{ once: true, margin: "-100px" }} // Triggers once when 100px inside viewport
      transition={{ 
        duration: 0.6, 
        delay: delay, 
        ease: [0.21, 1.02, 0.43, 1.01] // Smooth cinematic curve
      }}
    >
      {children}
    </motion.div>
  );
}