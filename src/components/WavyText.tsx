import type { FC } from "react";
import { motion } from "framer-motion";

interface Props {
  text: string;
  delay?: number;
  replay: boolean;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

const WavyText: FC<Props> = ({
  text,
  delay = 0,
  duration = 0.05,
  replay,
  className,
  style,
  ...props
}: Props) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: i * delay }
    })
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 200
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 200
      }
    }
  };

  return (
    <motion.h1
      style={{
        display: "flex",
        flexWrap: "wrap",
        overflow: "hidden",
        whiteSpace: "normal",
        wordBreak: "normal",
        ...style
      }}
      variants={container}
      initial="hidden"
      animate={replay ? "visible" : "hidden"}
      className={className}
      {...props}
    >
      {words.map((word, wordIdx) => (
        <motion.span
          key={wordIdx}
          style={{ display: "inline-block", marginRight: "0.25em", whiteSpace: "nowrap" }}
          initial={{ opacity: 0, y: 60 }}
          animate={replay ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{
            type: "spring",
            damping: 12,
            stiffness: 200,
            delay: delay + wordIdx * duration
          }}
        >
          {Array.from(word).map((letter, letterIdx) => (
            <span key={letterIdx}>{letter}</span>
          ))}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default WavyText; 