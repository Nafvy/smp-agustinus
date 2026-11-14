import { motion } from 'motion/react';

interface AnimatedTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
  immediate?: boolean;
  delay?: number;
}

const EASE_CURVE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function AnimatedText({
  text,
  as = 'h2',
  className = '',
  immediate = false,
  delay = 0,
}: AnimatedTextProps) {
  const words = text.split(' ');
  const MotionTag = motion[as];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 16,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: EASE_CURVE,
      },
    },
  };

  return (
    <MotionTag
      aria-label={text}
      className={`text-balance ${className}`}
      variants={containerVariants}
      initial="hidden"
      {...(immediate
        ? { animate: 'visible' }
        : { whileInView: 'visible', viewport: { once: true, amount: 0.25 } })}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden align-top"
          aria-hidden="true"
        >
          <motion.span className="inline-block" variants={wordVariants}>
            {word}
          </motion.span>
          {index < words.length - 1 ? <span>&nbsp;</span> : null}
        </span>
      ))}
    </MotionTag>
  );
}
