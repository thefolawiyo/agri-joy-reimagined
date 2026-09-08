import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Wordmark } from "./Wordmark";

const links = [
  { label: "Resources", href: "#resources" },
  { label: "Trade", href: "#trade" },
  { label: "Markets", href: "#markets" },
  { label: "About", href: "#vision" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-paper/92 text-ink backdrop-blur-md" : "bg-transparent text-paper"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1500px] items-center justify-between px-6 transition-all duration-500 md:px-10 ${
          scrolled ? "h-16" : "h-24"
        }`}
      >
        <a href="#top" aria-label="Earth home">
          <Wordmark />
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="label opacity-70 transition-opacity hover:opacity-100"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className={`label hidden border px-5 py-2.5 transition-colors md:inline-block ${
              scrolled
                ? "border-ink/25 hover:bg-ink hover:text-paper"
                : "border-paper/40 hover:bg-paper hover:text-ink"
            }`}
          >
            Explore resources
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="bg-paper text-ink md:hidden">
          <div className="flex flex-col gap-1 px-6 pt-2 pb-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="display border-ink/10 border-b py-4 text-3xl"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="label bg-ink text-paper mt-6 px-5 py-4 text-center"
            >
              Explore resources
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
