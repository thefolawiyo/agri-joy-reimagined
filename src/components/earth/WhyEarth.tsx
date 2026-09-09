import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Check } from "lucide-react";
import { WordsPullUpMultiStyle } from "./WordsPullUp";
import visionImg from "@/assets/earth-vision.jpg";

const cards = [
  {
    n: "01",
    title: "Verified sourcing.",
    items: [
      "Direct relationships at origin",
      "Producer and mine-site checks",
      "Quality graded before offer",
      "Volumes confirmed, not estimated",
    ],
  },
  {
    n: "02",
    title: "Clean documentation.",
    items: [
      "Export permits and certificates",
      "Assay, inspection and weight reports",
      "Contract terms buyers can bank on",
    ],
  },
  {
    n: "03",
    title: "Movement handled.",
    items: [
      "Freight, port and customs coordination",
      "Corridor planning across regions",
      "Delivery tracked to destination",
    ],
  },
];

export function WhyEarth() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative min-h-screen bg-black px-4 py-20 md:px-6 md:py-28">
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" />
      <div className="relative mx-auto max-w-7xl">
        <h2 className="max-w-3xl text-xl font-normal sm:text-2xl md:text-3xl lg:text-4xl">
          <WordsPullUpMultiStyle
            segments={[
              { text: "Trade-grade discipline for global buyers.", className: "text-primary" },
              { text: "Built on real supply. Proven by paperwork.", className: "text-gray-500" },
            ]}
          />
        </h2>

        <div
          ref={ref}
          className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-2 sm:gap-2 lg:h-[480px] lg:grid-cols-4 md:gap-3"
        >
          <motion.div
            className="relative overflow-hidden rounded-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={visionImg}
              alt="Cargo ship crossing open water at dusk"
              loading="lazy"
              className="h-64 w-full object-cover lg:h-full"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
            <p className="absolute bottom-6 left-6 text-lg" style={{ color: "#E1E0CC" }}>
              From source to destination.
            </p>
          </motion.div>

          {cards.map((c, i) => (
            <motion.div
              key={c.n}
              className="flex flex-col rounded-2xl bg-[#212121] p-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: (i + 1) * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-primary/50 text-[10px] tracking-[0.2em]">{c.n}</span>
              <h3 className="mt-4 text-xl sm:text-2xl" style={{ color: "#E1E0CC" }}>
                {c.title}
              </h3>
              <ul className="mt-5 flex-1 space-y-3">
                {c.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="text-primary mt-0.5 h-3.5 w-3.5 shrink-0" />
                    <span className="text-xs text-gray-400 sm:text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="text-primary mt-6 inline-flex items-center gap-2 text-xs sm:text-sm"
              >
                Learn more
                <ArrowRight className="h-3.5 w-3.5 -rotate-45" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
