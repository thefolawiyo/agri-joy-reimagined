import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import heroImg from "@/assets/earth-hero.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section id="top" className="text-paper relative min-h-[100svh] w-full overflow-hidden">
      <motion.img
        src={heroImg}
        alt="Aerial view of an open-pit mine meeting a river delta at golden hour"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,11,9,0.62)_0%,rgba(12,11,9,0.25)_38%,rgba(12,11,9,0.88)_100%)]" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1500px] flex-col justify-end px-6 pt-32 pb-12 md:px-10 md:pb-16">
        <motion.p
          className="label text-paper/70 mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
        >
          Global sourcing · Import & export
        </motion.p>

        <h1 className="display max-w-[16ch] text-[clamp(3.2rem,10.5vw,10rem)]">
          {["From Earth", "to market."].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.4 + i * 0.12, ease }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          className="mt-10 flex flex-col gap-8 border-paper/20 border-t pt-8 md:flex-row md:items-end md:justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9, ease }}
        >
          <p className="text-paper/80 max-w-[46ch] text-base leading-relaxed md:text-lg">
            Earth sources, buys and moves products and natural resources — agriculture, energy,
            minerals, metals and raw materials — from where they are produced to the markets that
            need them.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#resources"
              className="label bg-paper text-ink hover:bg-gold px-7 py-4 transition-colors"
            >
              Explore resources
            </a>
            <a
              href="#trade"
              className="label border-paper/40 hover:bg-paper/10 border px-7 py-4 transition-colors"
            >
              How trade works
            </a>
          </div>
        </motion.div>

        <motion.div
          className="text-paper/50 mt-12 hidden items-center gap-3 md:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <ArrowDown className="h-4 w-4" />
          <span className="label">Scroll</span>
        </motion.div>
      </div>
    </section>
  );
}
