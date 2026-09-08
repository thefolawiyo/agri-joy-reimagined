import { motion } from "motion/react";
import { Reveal } from "./Reveal";

const nodes = [
  { name: "West Africa", x: 46, y: 56, role: "Origin" },
  { name: "South America", x: 30, y: 68, role: "Origin" },
  { name: "Middle East", x: 60, y: 47, role: "Origin & market" },
  { name: "Europe", x: 51, y: 33, role: "Market" },
  { name: "North America", x: 21, y: 36, role: "Market" },
  { name: "Asia", x: 74, y: 44, role: "Market" },
  { name: "Australia", x: 83, y: 74, role: "Origin" },
];

const routes: Array<[number, number]> = [
  [0, 3],
  [0, 5],
  [1, 4],
  [2, 5],
  [6, 5],
  [0, 2],
];

export function GlobalReach() {
  return (
    <section className="bg-sand/50">
      <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-36">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="display max-w-[15ch] text-[clamp(2.4rem,6vw,5rem)]">
            Where supply meets demand
          </h2>
          <p className="text-ink/60 max-w-[38ch] text-sm leading-relaxed">
            A conceptual view of the corridors Earth works across. Routes shown are indicative of
            regional focus, not confirmed shipping lanes.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border-ink/12 mt-14 border">
            <svg viewBox="0 0 100 82" className="h-auto w-full" role="img" aria-label="Conceptual map of Earth's trade corridors">
              <defs>
                <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
                  <path d="M4 0H0V4" fill="none" stroke="currentColor" strokeWidth="0.1" className="text-ink/15" />
                </pattern>
              </defs>
              <rect width="100" height="82" fill="url(#grid)" />

              {routes.map(([a, b], i) => {
                const from = nodes[a];
                const to = nodes[b];
                const mx = (from.x + to.x) / 2;
                const my = Math.min(from.y, to.y) - 10;
                return (
                  <motion.path
                    key={i}
                    d={`M${from.x} ${from.y} Q${mx} ${my} ${to.x} ${to.y}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.28"
                    className="text-clay"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.85 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.6, delay: 0.2 + i * 0.14, ease: "easeInOut" }}
                  />
                );
              })}

              {nodes.map((n) => (
                <g key={n.name}>
                  <circle cx={n.x} cy={n.y} r="0.9" className="fill-ink" />
                  <circle cx={n.x} cy={n.y} r="2.4" className="fill-none stroke-ink/25" strokeWidth="0.15" />
                  <text
                    x={n.x + 3.4}
                    y={n.y + 1}
                    className="fill-ink/70"
                    style={{ fontSize: "2.1px", letterSpacing: "0.12px" }}
                  >
                    {n.name}
                  </text>
                  <text
                    x={n.x + 3.4}
                    y={n.y + 3.6}
                    className="fill-ink/40"
                    style={{ fontSize: "1.6px", letterSpacing: "0.18px", textTransform: "uppercase" }}
                  >
                    {n.role}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">
            {["Source", "Export", "Destination", "Market"].map((s, i) => (
              <div key={s} className="rule pt-4">
                <span className="label text-ink/40">{String(i + 1).padStart(2, "0")}</span>
                <p className="display mt-2 text-3xl">{s}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
