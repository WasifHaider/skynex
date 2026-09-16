import { site } from "@/content/site";

export function Brokers() {
  if (site.brokers.length === 0) {
    return null;
  }

  const doubled = [...site.brokers, ...site.brokers];

  return (
    <div className="overflow-hidden border-t border-paper/10 bg-ink py-[30px]">
      <div className="mx-auto max-w-6xl px-5 pb-[18px] sm:px-7">
        <div className="font-mono text-[10.5px] font-semibold tracking-[0.16em] text-muted-dark">
          BROKERS WE MOVE FREIGHT WITH
        </div>
      </div>
      <div
        className="marquee-track flex w-max gap-[52px] pl-7 font-sans text-[21px] font-semibold tracking-[-0.02em] text-paper/55"
      >
        {doubled.map((broker, i) => (
          <span key={`${broker.name}-${i}`}>{broker.name}</span>
        ))}
      </div>
    </div>
  );
}
