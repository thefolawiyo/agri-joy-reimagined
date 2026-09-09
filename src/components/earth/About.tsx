import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { WordsPullUpMultiStyle } from "./WordsPullUp";

const body =
  "Earth began in agricultural produce and now works across energy, minerals, metals and materials. We stay close to origin — producers, cooperatives, mines and mills — so supply is verified before it is offered, and documentation is clean before cargo moves.";

function AnimatedLetter({
  char,
  index,
  total,
  progress,
}: {
  char: string;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const charProgress = index / total;
  const opacity = useTransform(progress, [charProgress - 0.1, charProgress + 0.05], [0.2, 1]);
  return <motion.span style={{ opacity }}>{char}</motion.span>;
}

export function About() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.2"] });
  const chars = body.split("");

  return (
    <section id="vision" className="bg-black px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl rounded-2xl bg-[#101010] px-6 py-16 text-center md:rounded-[2rem] md:px-14 md:py-24">
        <p className="text-primary text-[10px] tracking-[0.2em] uppercase sm:text-xs">
          Global trade
        </p>

        <h2 className="mx-auto mt-8 max-w-3xl text-3xl leading-[0.95] sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl">
          <WordsPullUpMultiStyle
            justify="justify-center"
            segments={[
              { text: "We are Earth,", className: "font-normal" },
              { text: "a resource trading house.", className: "font-serif italic" },
              {
                text: "We source, verify and move what the world depends on.",
                className: "font-normal",
              },
            ]}
          />
        </h2>

        <p
          ref={ref}
          className="mx-auto mt-10 max-w-2xl text-xs sm:text-sm md:text-base"
          style={{ color: "#DEDBC8" }}
        >
          {chars.map((c, i) => (
            <AnimatedLetter
              key={i}
              char={c}
              index={i}
              total={chars.length}
              progress={scrollYProgress}
            />
          ))}
        </p>
      </div>
    </section>
  );
}
