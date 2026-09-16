import { site } from "@/content/site";
import { LeadForm } from "@/components/form/LeadForm";

export function GetADispatcher() {
  const telHref = `tel:${site.phone}`;

  return (
    <section id="contact" className="border-t border-ink/10 bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-[62px] sm:px-7 sm:pb-[70px] sm:pt-[62px]">
        <div className="grid grid-cols-1 items-start gap-11 lg:grid-cols-[0.46fr_0.54fr]">
          <div>
            <div className="font-mono text-[11px] font-semibold tracking-[0.16em] text-forest">
              GET A DISPATCHER
            </div>
            <h2 className="mt-3 font-sans text-[28px] font-extrabold leading-[1.08] tracking-[-0.03em] text-ink sm:text-[38px]">
              Tell us what you pull. We&apos;ll tell you what we can book.
            </h2>
            <p className="mt-4.5 max-w-[420px] font-sans text-base leading-[1.6] text-muted">
              Fill this out and a dispatcher calls you back the same day —
              usually within the hour during business hours. No obligation,
              no setup fee.
            </p>

            <div className="mt-7 flex flex-col gap-3.5">
              <a
                href={telHref}
                className="flex items-center gap-3.5 rounded-xl border border-ink/12 bg-cream p-4.5 transition hover:border-forest/45"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[9px] bg-forest font-mono text-[15px] font-semibold text-gold">
                  ☎
                </span>
                <span>
                  <span className="block font-mono text-[9.5px] font-semibold tracking-[0.12em] text-muted">
                    24/7 DISPATCH LINE
                  </span>
                  <span className="mt-1.5 block font-sans text-[19px] font-bold text-ink">
                    {site.phoneDisplay}
                  </span>
                </span>
              </a>

              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3.5 rounded-xl border border-ink/12 bg-cream p-4.5 transition hover:border-forest/45"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[9px] bg-ink font-mono text-[15px] font-semibold text-gold">
                  @
                </span>
                <span>
                  <span className="block font-mono text-[9.5px] font-semibold tracking-[0.12em] text-muted">
                    EMAIL
                  </span>
                  <span className="mt-1.5 block font-sans text-[17px] font-bold text-ink">
                    {site.email}
                  </span>
                </span>
              </a>
            </div>
          </div>

          <LeadForm />
        </div>
      </div>
    </section>
  );
}
