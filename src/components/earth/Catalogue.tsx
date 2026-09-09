import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { WordsPullUpMultiStyle } from "./WordsPullUp";

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
    <section id="markets" className="bg-black px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="max-w-3xl text-xl font-normal sm:text-2xl md:text-3xl lg:text-4xl">
          <WordsPullUpMultiStyle
            segments={[
              { text: "Products we source and move.", className: "text-primary" },
              {
                text: "Origins, markets and availability confirmed per enquiry.",
                className: "text-gray-500",
              },
            ]}
          />
        </h2>

        <div className="mt-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={`rounded-full px-4 py-2 text-xs transition-colors sm:text-sm ${
                active === f
                  ? "bg-primary text-black"
                  : "bg-[#212121] text-gray-400 hover:text-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl bg-[#101010]">
          <div className="hidden grid-cols-12 gap-6 px-6 py-4 text-[10px] tracking-[0.2em] text-gray-500 uppercase md:grid">
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
              className="group grid grid-cols-1 items-baseline gap-1 border-t border-white/10 px-6 py-5 transition-colors hover:bg-[#181818] md:grid-cols-12 md:gap-6"
            >
              <span
                className="col-span-3 text-xl md:text-2xl"
                style={{ color: "#E1E0CC" }}
              >
                {r.product}
              </span>
              <span className="col-span-2 text-xs text-gray-400 sm:text-sm">{r.category}</span>
              <span className="col-span-3 text-xs text-gray-400 sm:text-sm">{r.origin}</span>
              <span className="col-span-3 text-xs text-gray-400 sm:text-sm">{r.market}</span>
              <span className="text-primary/70 col-span-1 flex items-center gap-1 text-[10px] tracking-[0.15em] uppercase md:justify-end">
                {r.status}
                <ArrowRight className="h-3.5 w-3.5 -rotate-45 opacity-0 transition-opacity group-hover:opacity-100" />
              </span>
            </a>
          ))}
        </div>

        <p className="mt-4 text-[11px] text-gray-500">
          Illustrative catalogue — not a live market quote.
        </p>
      </div>
    </section>
  );
}
