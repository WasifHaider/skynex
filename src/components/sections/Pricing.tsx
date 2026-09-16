import { site } from "@/content/site";

const checklist = [
  "Load sourcing, vetting and rate negotiation",
  "Carrier setups, rate cons and invoicing",
  "24/7 dispatcher line while you're under load",
  "Factoring and new-authority guidance",
];

export function Pricing() {
  const telHref = `tel:${site.phone}`;

  return (
    <section className="border-t border-ink/10 bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-[62px] sm:px-7 sm:py-[66px]">
        <div className="grid grid-cols-1 items-center gap-11 lg:grid-cols-2">
          <div>
            <div className="font-mono text-[11px] font-semibold tracking-[0.16em] text-forest">
              PRICING
            </div>
            <h2 className="mt-3 font-sans text-[28px] font-extrabold leading-[1.08] tracking-[-0.03em] text-ink sm:text-[38px]">
              You pay us when the load pays you.
            </h2>
            <p className="text-pretty mt-4.5 max-w-[460px] font-sans text-base leading-[1.6] text-muted">
              One percentage of linehaul, invoiced after the load settles. No
              setup fee, no monthly minimum, no long-term contract. If we
              don&apos;t book you freight, you don&apos;t owe us anything.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-[9px] bg-forest px-[25px] py-4 font-sans text-[15px] font-bold text-paper transition hover:bg-forest-dark"
              >
                Get a dispatcher
              </a>
              <a
                href={telHref}
                className="rounded-[9px] border border-ink/16 bg-paper px-[25px] py-4 font-sans text-[15px] font-bold text-ink transition hover:bg-cream"
              >
                Talk it through first
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-ink/12 bg-cream px-7 pb-[26px] pt-7">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <div>
                <div className="font-mono text-[10px] font-semibold tracking-[0.14em] text-muted">
                  DISPATCH FEE
                </div>
                <div className="mt-2.5 flex items-baseline gap-2">
                  <span className="font-sans text-[46px] font-extrabold leading-none tracking-[-0.03em] text-ink">
                    {site.feePercent}%
                  </span>
                  <span className="font-sans text-sm font-semibold text-muted">
                    of linehaul
                  </span>
                </div>
              </div>
              <div className="rounded-md bg-forest/[0.09] px-2.5 py-[7px] font-mono text-[9.5px] font-semibold tracking-[0.1em] text-forest">
                BILLED AFTER PAYOUT
              </div>
            </div>

            <div className="my-[22px] h-px bg-ink/[0.12]" />

            <div className="flex flex-col gap-[11px]">
              {checklist.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[5px] bg-forest/10 font-sans text-[10px] font-bold text-forest">
                    ✓
                  </span>
                  <span className="font-sans text-sm font-medium leading-[1.45] text-ink">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-[22px] flex flex-wrap gap-4.5 border-t border-ink/[0.12] pt-[18px] font-mono text-[10.5px] font-medium tracking-[0.08em] text-muted">
              <span>NO SETUP FEE</span>
              <span>NO MINIMUM</span>
              <span>CANCEL ANY FRIDAY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
