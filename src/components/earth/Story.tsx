import { Reveal } from "./Reveal";

const chain = [
  { step: "Resource", copy: "It begins in soil, seam, forest or field." },
  { step: "Production", copy: "Farmed, mined, drilled or harvested at origin." },
  { step: "Processing", copy: "Graded, cleaned, refined and certified." },
  { step: "Trade", copy: "Contracted, documented and shipped across borders." },
  { step: "Industry", copy: "Delivered into mills, refineries and factories." },
  { step: "People", copy: "Food, fuel, materials — everyday life." },
];

export function Story() {
  return (
    <section id="trade" className="bg-ink text-paper">
      <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-36">
        <Reveal>
          <p className="label text-paper/50">The chain</p>
          <h2 className="display mt-8 max-w-[18ch] text-[clamp(2.6rem,7.5vw,7rem)]">
            Everything the world builds starts somewhere.
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2">
          {chain.map((c, i) => (
            <Reveal key={c.step} delay={(i % 2) * 0.06}>
              <div className="border-paper/15 flex items-baseline gap-8 border-t py-8 md:py-10">
                <span className="label text-paper/40 w-8 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="display text-4xl md:text-5xl">{c.step}</h3>
                  <p className="text-paper/60 mt-3 max-w-[34ch] text-sm leading-relaxed">
                    {c.copy}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
