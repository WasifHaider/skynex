import { site } from "@/content/site";

export function MobileStickyBar() {
  const telHref = `tel:${site.phone}`;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-[1fr_1.25fr] gap-2.5 border-t border-ink/[0.14] bg-paper px-3 py-2.5 shadow-[0_-8px_22px_rgba(20,24,26,0.1)] md:hidden">
      <a
        href={telHref}
        className="rounded-[9px] border border-ink/20 px-4 py-[15px] text-center font-sans text-sm font-bold text-ink"
      >
        Call
      </a>
      <a
        href="#contact"
        className="rounded-[9px] bg-forest px-4 py-[15px] text-center font-sans text-sm font-bold text-paper"
      >
        Get a dispatcher
      </a>
    </div>
  );
}
