import { Reveal } from "./Reveal";
import { Wordmark } from "./Wordmark";

export function Closing() {
  return (
    <>
      <section id="contact" className="bg-ink text-paper">
        <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-36">
          <Reveal>
            <h2 className="display max-w-[16ch] text-[clamp(2.6rem,8vw,7.5rem)]">
              Sourcing, or selling? Start a conversation.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border-paper/15 mt-12 flex flex-col gap-8 border-t pt-8 md:flex-row md:items-end md:justify-between">
              <p className="text-paper/65 max-w-[44ch] text-base leading-relaxed">
                Tell us the product, the volume and the destination. We will come back with what is
                available, from where, and on what terms.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:hello@earth.example"
                  className="label bg-paper text-ink hover:bg-gold px-7 py-4 transition-colors"
                >
                  Make an enquiry
                </a>
                <a
                  href="#resources"
                  className="label border-paper/40 hover:bg-paper/10 border px-7 py-4 transition-colors"
                >
                  Browse categories
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="bg-ink text-paper border-paper/15 border-t">
        <div className="mx-auto grid max-w-[1500px] grid-cols-2 gap-10 px-6 py-16 md:grid-cols-4 md:px-10">
          <div className="col-span-2 md:col-span-1">
            <Wordmark />
            <p className="text-paper/50 mt-5 max-w-[26ch] text-sm leading-relaxed">
              From Earth to market. Import, export and global resource sourcing.
            </p>
          </div>
          <div>
            <p className="label text-paper/40">Resources</p>
            <ul className="text-paper/70 mt-4 space-y-2 text-sm">
              <li><a href="#resources" className="hover:text-paper">Agriculture</a></li>
              <li><a href="#resources" className="hover:text-paper">Energy</a></li>
              <li><a href="#resources" className="hover:text-paper">Minerals & metals</a></li>
              <li><a href="#resources" className="hover:text-paper">Forestry</a></li>
            </ul>
          </div>
          <div>
            <p className="label text-paper/40">Company</p>
            <ul className="text-paper/70 mt-4 space-y-2 text-sm">
              <li><a href="#vision" className="hover:text-paper">Vision</a></li>
              <li><a href="#trade" className="hover:text-paper">How we trade</a></li>
              <li><a href="#markets" className="hover:text-paper">Markets</a></li>
            </ul>
          </div>
          <div>
            <p className="label text-paper/40">Contact</p>
            <ul className="text-paper/70 mt-4 space-y-2 text-sm">
              <li>hello@earth.example</li>
              <li>+000 000 0000</li>
              <li className="text-paper/40">Placeholder details</li>
            </ul>
          </div>
        </div>
        <div className="border-paper/10 text-paper/40 mx-auto flex max-w-[1500px] flex-col gap-2 border-t px-6 py-6 text-xs md:flex-row md:justify-between md:px-10">
          <span>© {new Date().getFullYear()} Earth. All rights reserved.</span>
          <span>Product and market information shown is illustrative.</span>
        </div>
      </footer>
    </>
  );
}
