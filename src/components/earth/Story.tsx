import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { WordsPullUpMultiStyle } from "./WordsPullUp";

const chain = [
  { step: "Resource", copy: "It begins in soil, seam, forest or field." },
  { step: "Production", copy: "Farmed, mined, drilled or harvested at origin." },
  { step: "Processing", copy: "Graded, cleaned, refined and certified." },
  { step: "Trade", copy: "Contracted, documented and shipped across borders." },
  { step: "Industry", copy: "Delivered into mills, refineries and factories." },
  { step: "People", copy: "Food, fuel, materials — everyday life." },
];

export function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="trade" className="relative bg-black px-4 py-20 md:px-6 md:py-28">
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" />
      <div className="relative mx-auto max-w-7xl">
        <h2 className="max-w-3xl text-xl font-normal sm:text-2xl md:text-3xl lg:text-4xl">
          <WordsPullUpMultiStyle
            segments={[
              { text: "Everything the world builds starts somewhere.", className: "text-primary" },
              { text: "Source to market, step by step.", className: "text-gray-500" },
            ]}
          />
        </h2>

        <div ref={ref} className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {chain.map((c, i) => (
            <motion.div
              key={c.step}
              className="rounded-2xl bg-[#212121] p-6 md:p-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-primary/50 text-[10px] tracking-[0.2em]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-2xl md:text-3xl" style={{ color: "#E1E0CC" }}>
                {c.step}
              </h3>
              <p className="mt-2 text-xs text-gray-400 sm:text-sm">{c.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
