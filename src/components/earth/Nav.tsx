import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Resources", href: "#resources" },
  { label: "Trade", href: "#trade" },
  { label: "Markets", href: "#markets" },
  { label: "Vision", href: "#vision" },
  { label: "Enquiries", href: "#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute top-0 left-1/2 z-50 -translate-x-1/2">
      <div className="rounded-b-2xl bg-black px-4 py-2 md:rounded-b-3xl md:px-8">
        <nav className="hidden items-center gap-3 sm:flex sm:gap-6 md:gap-12 lg:gap-14">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[10px] transition-colors sm:text-xs md:text-sm"
              style={{ color: "rgba(225, 224, 204, 0.8)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#E1E0CC")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(225, 224, 204, 0.8)")}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex items-center gap-2 px-2 py-1 text-xs sm:hidden"
          style={{ color: "#E1E0CC" }}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          Menu
        </button>
      </div>

      {open && (
        <div className="mt-2 rounded-2xl bg-black px-6 py-4 sm:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm"
                style={{ color: "#E1E0CC" }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
