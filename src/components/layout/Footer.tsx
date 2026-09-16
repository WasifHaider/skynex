import { site } from "@/content/site";

const serviceLinks = [
  "Load sourcing",
  "Broker verification",
  "Rate negotiation",
  "Paperwork & invoicing",
  "New authority support",
];

const equipmentLinks = [
  "Dry van & reefer",
  "Flatbed & step deck",
  "Box truck",
  "Power only",
  "Hotshot",
];

export function Footer() {
  const telHref = `tel:${site.phone}`;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 pb-[30px] pt-[54px] sm:px-7">
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="box-border h-6 w-6 rounded-full border-4 border-gold" />
              <span className="font-sans text-[18px] font-extrabold tracking-tight text-paper">
                {site.name}
              </span>
            </div>
            <div className="mt-4 font-sans text-[22px] font-bold leading-[1.25] tracking-[-0.025em] text-paper">
              Your Authority. Your Truck. Our Dispatch.
            </div>
            <p className="mt-3.5 max-w-[300px] font-sans text-[13.5px] leading-[1.55] text-muted-dark">
              Truck dispatch service for owner-operators and small carrier
              fleets. {site.city} — running the continental US.
            </p>
          </div>

          <div>
            <div className="font-mono text-[10px] font-semibold tracking-[0.14em] text-muted-dark">
              SERVICES
            </div>
            <div className="mt-4 flex flex-col gap-2.5 font-sans text-[13.5px] font-medium leading-[1.3] text-line">
              {serviceLinks.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono text-[10px] font-semibold tracking-[0.14em] text-muted-dark">
              EQUIPMENT
            </div>
            <div className="mt-4 flex flex-col gap-2.5 font-sans text-[13.5px] font-medium leading-[1.3] text-line">
              {equipmentLinks.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono text-[10px] font-semibold tracking-[0.14em] text-muted-dark">
              CONTACT
            </div>
            <div className="mt-4 flex flex-col items-start gap-1.5 font-sans text-[13.5px] font-medium leading-[1.3] text-line">
              <a
                href={telHref}
                className="inline-flex min-h-11 items-center py-1 text-paper"
              >
                {site.phoneDisplay}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex min-h-11 items-center py-1"
              >
                {site.email}
              </a>
              <span>{site.city}</span>
              <span>Dispatch line open 24/7</span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3.5 border-t border-paper/[0.12] pt-5 font-mono text-[10.5px] font-medium leading-[1.5] tracking-[0.06em] text-muted-dark">
          <span>© {year} {site.name.toUpperCase()} LOGISTICS LLC · DISPATCH SERVICE, NOT A BROKER</span>
          <span>PRIVACY · TERMS · RATE FIGURES ON THIS PAGE ARE SAMPLE DATA</span>
        </div>
      </div>
    </footer>
  );
}
