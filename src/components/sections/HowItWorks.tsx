const steps = [
  {
    step: "STEP 01",
    title: "Onboard",
    description:
      "Send your authority, COI and W-9. Twenty minutes, one packet, no fee.",
    dark: false,
  },
  {
    step: "STEP 02",
    title: "Search & vet",
    description:
      "We work the boards and our broker list, then check credit and days-to-pay.",
    dark: false,
  },
  {
    step: "STEP 03",
    title: "You approve",
    description:
      "Rate, lane and appointment come to you by text. Nothing books without a yes.",
    dark: false,
  },
  {
    step: "STEP 04",
    title: "We support the move",
    description:
      "Check calls, detention, lumpers and reschedules — we take those calls, not you.",
    dark: false,
  },
  {
    step: "STEP 05",
    title: "You get paid",
    description:
      "We invoice, chase the POD and submit to factoring. Our fee comes after yours.",
    dark: true,
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-[62px] sm:px-7 sm:py-[66px]">
        <div className="mb-8 max-w-[560px]">
          <div className="font-mono text-[11px] font-semibold tracking-[0.16em] text-forest">
            HOW IT WORKS
          </div>
          <h2 className="mt-3 font-sans text-[28px] font-extrabold leading-[1.08] tracking-[-0.03em] text-ink sm:text-[38px]">
            Five steps from first call to deposit.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {steps.map((item) => (
            <div
              key={item.step}
              className={`px-5 pb-6 pt-[22px] ${item.dark ? "bg-ink" : "bg-paper"}`}
            >
              <div
                className={`font-mono text-[10px] font-semibold tracking-[0.14em] ${
                  item.dark ? "text-gold" : "text-forest"
                }`}
              >
                {item.step}
              </div>
              <div
                className={`mt-3.5 font-sans text-[16.5px] font-bold ${
                  item.dark ? "text-paper" : "text-ink"
                }`}
              >
                {item.title}
              </div>
              <div
                className={`mt-2 font-sans text-[13.5px] leading-[1.5] ${
                  item.dark ? "text-body-dark" : "text-muted"
                }`}
              >
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
