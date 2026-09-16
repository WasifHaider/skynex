import Link from "next/link";
import { site } from "@/content/site";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "How it works", href: "/#how" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const telHref = `tel:${site.phone}`;

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between gap-4 px-5 sm:px-7">
        <div className="flex items-center gap-9">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="box-border h-[26px] w-[26px] rounded-full border-4 border-forest" />
            <span className="font-sans text-[19px] font-extrabold tracking-tight text-ink">
              {site.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-6 whitespace-nowrap md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-[13.5px] font-semibold text-muted hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={telHref}
            className="hidden font-sans text-[13.5px] font-semibold text-ink md:inline"
          >
            {site.phoneDisplay}
          </a>
          <a
            href="#contact"
            className="rounded-lg bg-forest px-[17px] py-[11px] font-sans text-[13px] font-bold text-paper transition hover:bg-forest-dark"
          >
            Get a dispatcher
          </a>
        </div>
      </div>
    </header>
  );
}
