import { ScrollReveal } from "@/components/ui/ScrollReveal";

const items = [
  {
    num: "01",
    title: "You keep the authority",
    description:
      "Loads run under your MC, your insurance, your name. Nothing to unwind if you leave.",
    dark: false,
  },
  {
    num: "02",
    title: "No upfront risk",
    description:
      "No setup fee, no monthly minimum. We invoice a percentage after the load settles.",
    dark: false,
  },
  {
    num: "03",
    title: "Every broker vetted",
    description:
      "Credit score, days-to-pay and authority checked before we send you a rate con.",
    dark: true,
  },
  {
    num: "04",
    title: "A dispatcher, day or night",
    description:
      "Detention, lumper, breakdown at 2am — one number, and a human answers it.",
    dark: false,
  },
  {
    num: "05",
    title: "We negotiate, you approve",
    description:
      "We read the market daily and push the rate. Nothing books without your yes.",
    dark: false,
  },
  {
    num: "06",
    title: "New authority? Start here",
    description:
      "Packets, carrier setups, factoring intros — we walk first-year carriers through all of it.",
    dark: false,
  },
];

export function WhyUs() {
  return (
    <section className="border-t border-ink/10 bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-[62px] sm:px-7 sm:py-[66px]">
        <div className="max-w-[560px]">
          <div className="font-mono text-[11px] font-semibold tracking-[0.16em] text-forest">
            WHY DRIVERS WORK WITH US
          </div>
          <h2 className="mt-3 font-sans text-[28px] font-extrabold leading-[1.08] tracking-[-0.03em] text-ink sm:text-[38px]">
            Built for the operator, not the brokerage.
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {items.map((item, index) => (
            <ScrollReveal key={item.num} index={index}>
              <div
                className={`h-full rounded-[14px] p-[22px] ${
                  item.dark ? "bg-ink" : "border border-ink/10 bg-cream"
                }`}
              >
                <div
                  className={`font-mono text-[10px] font-semibold tracking-[0.12em] ${
                    item.dark ? "text-gold" : "text-forest"
                  }`}
                >
                  {item.num}
                </div>
                <div
                  className={`mt-3.5 font-sans text-[17px] font-bold ${
                    item.dark ? "text-paper" : "text-ink"
                  }`}
                >
                  {item.title}
                </div>
                <div
                  className={`mt-2 font-sans text-sm leading-[1.5] ${
                    item.dark ? "text-body-dark" : "text-muted"
                  }`}
                >
                  {item.description}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
