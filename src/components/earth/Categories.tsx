import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { WordsPullUpMultiStyle } from "./WordsPullUp";
import agriculture from "@/assets/cat-agriculture.jpg";
import energy from "@/assets/cat-energy.jpg";
import minerals from "@/assets/cat-minerals.jpg";
import metals from "@/assets/cat-metals.jpg";
import forestry from "@/assets/cat-forestry.jpg";
import raw from "@/assets/cat-raw.jpg";

const categories = [
  { n: "01", title: "Agriculture", copy: "Cocoa, cashew, sesame, grains and food commodities.", img: agriculture, span: "md:col-span-7" },
  { n: "02", title: "Energy", copy: "Crude oil, refined products and natural gas.", img: energy, span: "md:col-span-5" },
  { n: "03", title: "Minerals", copy: "Gold, lithium, iron ore and industrial minerals.", img: minerals, span: "md:col-span-5" },
  { n: "04", title: "Metals", copy: "Copper, aluminium and precious metals.", img: metals, span: "md:col-span-7" },
  { n: "05", title: "Forestry", copy: "Timber, hardwood and processed wood products.", img: forestry, span: "md:col-span-6" },
  { n: "06", title: "Raw materials", copy: "Industrial inputs moving through ports worldwide.", img: raw, span: "md:col-span-6" },
];

export function Categories() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resources" className="bg-black px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="max-w-3xl text-xl font-normal sm:text-2xl md:text-3xl lg:text-4xl">
          <WordsPullUpMultiStyle
            segments={[
              { text: "What we deal in.", className: "text-primary" },
              { text: "Six categories, one operating discipline.", className: "text-gray-500" },
            ]}
          />
        </h2>

        <div ref={ref} className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-12 md:gap-4">
          {categories.map((c, i) => (
            <motion.a
              key={c.n}
              href="#markets"
              className={`group relative block overflow-hidden rounded-2xl ${c.span}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="aspect-[4/3] w-full overflow-hidden md:aspect-[3/2]">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-7">
                <div>
                  <h3 className="text-2xl md:text-3xl" style={{ color: "#E1E0CC" }}>
                    {c.title}
                  </h3>
                  <p className="mt-1.5 max-w-[34ch] text-xs text-gray-400 sm:text-sm">{c.copy}</p>
                </div>
                <span className="text-primary/60 text-[10px] tracking-[0.2em]">{c.n}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
