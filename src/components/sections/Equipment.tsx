import Image from "next/image";

const photoCards = [
  {
    id: "eq-van",
    src: "/images/eq-van.jpg",
    title: "Dry Van",
    spec: "53' · 48' · DROP & HOOK",
  },
  {
    id: "eq-reefer",
    src: "/images/eq-reefer.jpg",
    title: "Reefer",
    spec: "TEMP CONTROLLED · PRODUCE",
  },
  {
    id: "eq-flat",
    src: "/images/eq-flat.jpg",
    title: "Flatbed",
    spec: "TARPS · SECUREMENT",
  },
];

const tileCards = [
  { title: "Step Deck", spec: "OVERSIZE READY", dark: false },
  { title: "Box Truck", spec: "26' · LIFTGATE", dark: false },
  { title: "Power Only", spec: "DROP & HOOK", dark: false },
  { title: "Hotshot", spec: "GOOSENECK · CDL / NON-CDL", dark: true },
];

export function Equipment() {
  return (
    <section id="services" className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-7 sm:py-[68px]">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[560px]">
            <div className="font-mono text-[11px] font-semibold tracking-[0.16em] text-forest">
              EQUIPMENT WE DISPATCH
            </div>
            <h2 className="mt-3 font-sans text-[28px] font-extrabold leading-[1.08] tracking-[-0.03em] text-ink sm:text-[38px]">
              If you pull it, we dispatch it.
            </h2>
          </div>
          <p className="max-w-[300px] font-sans text-[14.5px] leading-[1.55] text-muted">
            Seven trailer types, one dispatcher who learns your lanes and
            your home time.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {photoCards.map((card) => (
            <div
              key={card.id}
              className="overflow-hidden rounded-[14px] border border-ink/10 bg-paper"
            >
              <div className="relative h-[172px]">
                <Image
                  src={card.src}
                  alt={card.title}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="px-[18px] pb-[18px] pt-4">
                <div className="font-sans text-[17px] font-bold text-ink">
                  {card.title}
                </div>
                <div className="mt-1.5 font-mono text-[10.5px] font-medium tracking-[0.09em] text-muted">
                  {card.spec}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3.5 grid grid-cols-2 gap-3.5 lg:grid-cols-4">
          {tileCards.map((tile) => (
            <div
              key={tile.title}
              className={`rounded-xl p-[18px] ${
                tile.dark ? "bg-ink" : "border border-ink/10 bg-paper"
              }`}
            >
              <div
                className={`font-sans text-[15.5px] font-bold ${
                  tile.dark ? "text-paper" : "text-ink"
                }`}
              >
                {tile.title}
              </div>
              <div
                className={`mt-1.5 font-mono text-[10px] font-medium tracking-[0.09em] ${
                  tile.dark ? "text-gold" : "text-muted"
                }`}
              >
                {tile.spec}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
