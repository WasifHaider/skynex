import Image from "next/image";

const items = [
  {
    title: "Load sourcing",
    description:
      "Lanes that fit your home time, not just the biggest number on the board.",
  },
  {
    title: "Broker verification",
    description:
      "Credit, days-to-pay and authority checked before a rate con reaches you.",
  },
  {
    title: "Rate negotiation",
    description: "We track the market daily and push for the top of the range.",
  },
  {
    title: "Paperwork",
    description:
      "Carrier setups, rate cons, BOLs and invoicing — filed and followed up.",
  },
  {
    title: "New authority support",
    description:
      "First-year carriers get the packet, factoring and compliance walkthrough.",
  },
  {
    title: "The 24/7 line",
    description: "Detention, lumpers, breakdowns. A dispatcher, not a ticket queue.",
  },
];

export function WhatWeHandle() {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-6xl px-5 py-[62px] sm:px-7 sm:py-[66px]">
        <div className="grid grid-cols-1 items-center gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="relative h-[280px] overflow-hidden rounded-2xl sm:h-[420px]">
            <Image
              src="/images/handle-photo.jpg"
              alt="Driver at the trailer handling paperwork"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <div className="font-mono text-[11px] font-semibold tracking-[0.16em] text-gold">
              WHAT WE HANDLE
            </div>
            <h2 className="mt-3 font-sans text-[28px] font-extrabold leading-[1.08] tracking-[-0.03em] text-paper sm:text-[38px]">
              Everything between the load board and the deposit.
            </h2>

            <div className="mt-[30px] grid grid-cols-1 border-t border-paper/[0.14] sm:grid-cols-2">
              {items.map((item, index) => {
                const isRightCol = index % 2 === 1;
                return (
                  <div
                    key={item.title}
                    className={`border-b border-paper/10 py-[18px] ${
                      isRightCol ? "sm:pl-[22px]" : "sm:border-r sm:border-paper/10 sm:pr-[22px]"
                    }`}
                  >
                    <div className="font-sans text-[15.5px] font-bold text-paper">
                      {item.title}
                    </div>
                    <div className="mt-1.5 font-sans text-[13.5px] leading-[1.5] text-body-dark">
                      {item.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
