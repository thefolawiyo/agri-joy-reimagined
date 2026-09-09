import { motion, useInView } from "motion/react";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

export function WordsPullUp({
  text,
  className = "",
  showAsterisk = false,
  delayOffset = 0,
}: {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  delayOffset?: number;
}) {
  const words = text.split(" ");
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="relative inline-block pr-[0.22em]"
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: delayOffset + i * 0.08, ease }}
        >
          {word}
          {showAsterisk && i === words.length - 1 && (
            <span className="absolute top-[0.6em] -right-[0.12em] text-[0.31em]">*</span>
          )}
        </motion.span>
      ))}
    </span>
  );
}

export function WordsPullUpMultiStyle({
  segments,
  className = "",
  justify = "justify-start",
}: {
  segments: Array<{ text: string; className?: string }>;
  className?: string;
  justify?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const words = segments.flatMap((s) =>
    s.text.split(" ").map((w) => ({ word: w, className: s.className ?? "" })),
  );

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${justify} ${className}`}>
      {words.map((w, i) => (
        <motion.span
          key={`${w.word}-${i}`}
          className={`inline-block pr-[0.22em] ${w.className}`}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: i * 0.06, ease }}
        >
          {w.word}
        </motion.span>
      ))}
    </span>
  );
}
