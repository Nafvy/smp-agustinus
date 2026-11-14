import type { ReactNode } from 'react';
import { motion } from 'motion/react';

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  immediate?: boolean;
  yOffset?: number;
}

const EASE_CURVE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function SectionReveal({
  children,
  className = '',
  delay = 0,
  immediate = false,
  yOffset = 20,
}: SectionRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      {...(immediate
        ? { animate: { opacity: 1, y: 0 } }
        : {
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.12 },
          })}
      transition={{
        duration: 0.5,
        delay,
        ease: EASE_CURVE,
      }}
    >
      {children}
    </motion.div>
  );
}
