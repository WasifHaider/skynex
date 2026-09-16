const items = [
  { title: "Own MC authority", sub: "Never leased on" },
  { title: "24/7 support", sub: "Nights and weekends" },
  { title: "Pay when you're paid", sub: "% of linehaul, no retainer" },
  { title: "No contracts", sub: "Cancel any Friday" },
];

export function TrustBar() {
  return (
    <div className="border-y border-ink/10 bg-paper">
      <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-ink/[0.08] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex gap-2.5 border-ink/[0.08] px-6.5 py-5 sm:border-r sm:odd:border-r lg:border-r lg:last:border-r-0"
          >
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[5px] bg-forest/10 font-sans text-[11px] font-bold text-forest">
              ✓
            </div>
            <div>
              <div className="font-sans text-[13.5px] font-bold leading-tight text-ink">
                {item.title}
              </div>
              <div className="mt-1 font-sans text-[11.5px] leading-tight text-muted">
                {item.sub}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
