import { motion } from "framer-motion";
import type { ReactNode } from "react";

export const EASE = [0.2, 0.7, 0.2, 1] as const;

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/** Fades content up once when it scrolls into view. */
const Reveal = ({ children, delay = 0, className }: RevealProps) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.7, ease: EASE, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default Reveal;
