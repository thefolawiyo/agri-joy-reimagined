import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

type Row = {
  product: string;
  category: string;
  origin: string;
  market: string;
  status: string;
};

const rows: Row[] = [
  { product: "Gold", category: "Minerals", origin: "West Africa", market: "UAE · Switzerland", status: "On request" },
  { product: "Crude oil", category: "Energy", origin: "Gulf of Guinea", market: "Europe · Asia", status: "By contract" },
  { product: "Cocoa", category: "Agriculture", origin: "West Africa", market: "Europe", status: "Seasonal" },
  { product: "Cashew", category: "Agriculture", origin: "West Africa", market: "India · Vietnam", status: "Seasonal" },
  { product: "Copper", category: "Metals", origin: "Central Africa", market: "Asia", status: "On request" },
  { product: "Lithium", category: "Minerals", origin: "Africa · South America", market: "Asia · Europe", status: "On request" },
  { product: "Timber", category: "Forestry", origin: "Equatorial belt", market: "Middle East · Asia", status: "Available" },
  { product: "Natural gas", category: "Energy", origin: "Multiple", market: "Europe · Asia", status: "By contract" },
];

const filters = ["All", "Agriculture", "Energy", "Minerals", "Metals", "Forestry"];

export function Catalogue() {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? rows : rows.filter((r) => r.category === active);

  return (
    <section id="markets" className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-36">
      <Reveal className="rule flex flex-col gap-8 pt-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="label text-ink/45">Sourcing catalogue</p>
          <h2 className="display mt-6 max-w-[16ch] text-[clamp(2.4rem,6vw,5rem)]">
            Products we source and move
          </h2>
        </div>
        <p className="text-ink/60 max-w-[38ch] text-sm leading-relaxed">
          An illustrative view of the categories Earth trades in. Origins, markets and availability
          are confirmed per enquiry — nothing here is a live market quote.
        </p>
      </Reveal>

      <div className="mt-12 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            className={`label border px-4 py-2.5 transition-colors ${
              active === f
                ? "bg-ink text-paper border-ink"
                : "border-ink/20 text-ink/60 hover:border-ink/50"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-10">
        <div className="label text-ink/40 rule hidden grid-cols-12 gap-6 py-4 md:grid">
          <span className="col-span-3">Product</span>
          <span className="col-span-2">Category</span>
          <span className="col-span-3">Origin</span>
          <span className="col-span-3">Market</span>
          <span className="col-span-1 text-right">Status</span>
        </div>

        {visible.map((r) => (
          <a
            key={r.product}
            href="#contact"
            className="rule group grid grid-cols-1 items-baseline gap-2 py-6 md:grid-cols-12 md:gap-6"
          >
            <span className="display col-span-3 text-3xl transition-colors group-hover:text-clay">
              {r.product}
            </span>
            <span className="text-ink/55 col-span-2 text-sm">{r.category}</span>
            <span className="text-ink/55 col-span-3 text-sm">{r.origin}</span>
            <span className="text-ink/55 col-span-3 text-sm">{r.market}</span>
            <span className="label text-ink/45 col-span-1 flex items-center justify-start gap-1 md:justify-end">
              {r.status}
              <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
