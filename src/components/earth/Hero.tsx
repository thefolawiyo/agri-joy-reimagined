import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/earth-hero.jpg";
import { Nav } from "./Nav";
import { WordsPullUp } from "./WordsPullUp";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section id="top" className="h-screen w-full bg-black p-4 md:p-6">
      <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-[2rem]">
        <motion.img
          src={heroImg}
          alt="Aerial view of an open-pit mine meeting a river delta at golden hour"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.6, ease }}
        />
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />

        <Nav />

        <div className="absolute right-0 bottom-0 left-0 px-4 pb-4 md:px-8 md:pb-8">
          <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12">
            <h1
              className="col-span-1 text-[26vw] leading-[0.85] font-medium tracking-[-0.07em] sm:text-[24vw] md:text-[22vw] lg:col-span-8 lg:text-[20vw] xl:text-[19vw]"
              style={{ color: "#E1E0CC" }}
            >
              <WordsPullUp text="Earth" showAsterisk />
            </h1>

            <div className="col-span-1 flex flex-col gap-6 pb-4 lg:col-span-4">
              <motion.p
                className="text-primary/70 text-xs sm:text-sm md:text-base"
                style={{ lineHeight: 1.2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.5, ease }}
              >
                Earth is an import and export business moving products and natural resources —
                agriculture, energy, minerals, metals, timber and raw materials — from where they
                are produced to the markets that need them.
              </motion.p>

              <motion.a
                href="#resources"
                className="bg-primary group flex w-fit items-center gap-2 rounded-full py-1.5 pr-1.5 pl-6 text-sm font-medium text-black transition-all hover:gap-3 sm:text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.7, ease }}
              >
                Explore resources
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                  <ArrowRight className="h-4 w-4" style={{ color: "#E1E0CC" }} />
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
