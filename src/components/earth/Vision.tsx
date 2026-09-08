import { Reveal } from "./Reveal";
import visionImg from "@/assets/earth-vision.jpg";

export function Vision() {
  return (
    <section id="vision" className="relative">
      <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden md:h-[78vh]">
        <img
          src={visionImg}
          alt="A cargo ship crossing open water at dusk"
          loading="lazy"
          width={1600}
          height={1000}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,11,9,0.35)_0%,rgba(12,11,9,0.75)_100%)]" />
        <div className="text-paper absolute inset-0 mx-auto flex max-w-[1500px] flex-col justify-end px-6 pb-14 md:px-10 md:pb-20">
          <Reveal>
            <p className="label text-paper/60">Our vision</p>
            <p className="display mt-6 max-w-[20ch] text-[clamp(2.2rem,6vw,5.5rem)]">
              Food, fuel, metal, material. Most of it begins in the ground.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-10 px-6 py-20 md:grid-cols-12 md:px-10">
        <Reveal className="md:col-span-5">
          <h3 className="display text-4xl md:text-5xl">Built for the long trade.</h3>
        </Reveal>
        <Reveal delay={0.08} className="md:col-span-6 md:col-start-7">
          <p className="text-ink/70 text-base leading-relaxed md:text-lg">
            Earth exists to connect the places where resources are produced with the industries and
            markets that depend on them. We began in agriculture and now work across energy,
            minerals, metals and materials — with the same insistence on real supply, honest
            grading and clean documentation. No inflated claims, no invented numbers: only trade we
            can stand behind.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
