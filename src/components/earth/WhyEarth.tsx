import { Reveal } from "./Reveal";

const pillars = [
  {
    title: "Source",
    copy: "We work close to origin — producers, cooperatives, mines and mills — so supply is real before it is offered.",
  },
  {
    title: "Verify",
    copy: "Quality, quantity and documentation are checked at origin and confirmed before cargo moves.",
  },
  {
    title: "Trade",
    copy: "Contracts, terms and logistics handled end to end, across borders and jurisdictions.",
  },
  {
    title: "Opportunity",
    copy: "Buyers gain access to supply they could not reach alone; producers gain access to global demand.",
  },
];

export function WhyEarth() {
  return (
    <section className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-36">
      <Reveal>
        <p className="label text-ink/45">Why Earth</p>
        <h2 className="display mt-6 max-w-[20ch] text-[clamp(2.2rem,5vw,4.2rem)]">
          Trade in resources rewards those who are close to the source and precise about the
          paperwork.
        </h2>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-4">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.07}>
            <div className="rule pt-5">
              <h3 className="display text-3xl">{p.title}</h3>
              <p className="text-ink/60 mt-3 text-sm leading-relaxed">{p.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
