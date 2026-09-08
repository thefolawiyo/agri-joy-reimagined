import { Reveal } from "./Reveal";
import agriculture from "@/assets/cat-agriculture.jpg";
import energy from "@/assets/cat-energy.jpg";
import minerals from "@/assets/cat-minerals.jpg";
import metals from "@/assets/cat-metals.jpg";
import forestry from "@/assets/cat-forestry.jpg";
import raw from "@/assets/cat-raw.jpg";

const categories = [
  {
    n: "01",
    title: "Agriculture",
    copy: "Cocoa, cashew, sesame, grains and food commodities.",
    img: agriculture,
    span: "md:col-span-7",
    ratio: "aspect-[16/11]",
  },
  {
    n: "02",
    title: "Energy",
    copy: "Crude oil, refined products and natural gas.",
    img: energy,
    span: "md:col-span-5",
    ratio: "aspect-[4/5]",
  },
  {
    n: "03",
    title: "Minerals",
    copy: "Gold, lithium, iron ore and industrial minerals.",
    img: minerals,
    span: "md:col-span-5",
    ratio: "aspect-[4/5]",
  },
  {
    n: "04",
    title: "Metals",
    copy: "Copper, aluminium and precious metals.",
    img: metals,
    span: "md:col-span-7",
    ratio: "aspect-[16/11]",
  },
  {
    n: "05",
    title: "Forestry",
    copy: "Timber, hardwood and processed wood products.",
    img: forestry,
    span: "md:col-span-6",
    ratio: "aspect-[3/2]",
  },
  {
    n: "06",
    title: "Raw materials",
    copy: "Industrial inputs moving through ports worldwide.",
    img: raw,
    span: "md:col-span-6",
    ratio: "aspect-[3/2]",
  },
];

export function Categories() {
  return (
    <section id="resources" className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-36">
      <Reveal className="rule flex flex-col gap-6 pt-8 md:flex-row md:items-end md:justify-between">
        <h2 className="display max-w-[14ch] text-[clamp(2.4rem,6vw,5rem)]">
          What we deal in
        </h2>
        <p className="text-ink/65 max-w-[42ch] text-base leading-relaxed">
          Six categories, one operating discipline: verified supply, quality at origin, and clean
          documentation across borders.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-12">
        {categories.map((c, i) => (
          <Reveal key={c.n} delay={(i % 2) * 0.08} className={c.span}>
            <a href="#markets" className="group block">
              <div className={`overflow-hidden ${c.ratio}`}>
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                />
              </div>
              <div className="rule mt-5 flex items-start justify-between gap-6 pt-4">
                <div>
                  <h3 className="display text-3xl md:text-4xl">{c.title}</h3>
                  <p className="text-ink/60 mt-2 max-w-[36ch] text-sm leading-relaxed">{c.copy}</p>
                </div>
                <span className="label text-ink/40">{c.n}</span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
