import { site } from "@/content/site";

export function RateRanges() {
  return (
    <section className="border-b border-ink/10 bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-7 sm:py-[62px]">
        <div className="mb-[22px] flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="font-mono text-[11px] font-semibold tracking-[0.16em] text-forest">
              RATE RANGES
            </div>
            <h2 className="mt-3 font-sans text-2xl font-extrabold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[32px]">
              Typical booked rates
            </h2>
          </div>
          <div className="font-mono text-[10.5px] font-medium leading-[1.5] tracking-[0.08em] text-muted">
            SAMPLE DATA · LOWER 48 · UPDATED WEEKLY
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-ink/10">
          <div className="grid grid-cols-[minmax(0,1fr)_92px] gap-4 bg-cream px-4.5 py-3 font-mono text-[10px] font-semibold tracking-[0.12em] text-muted sm:grid-cols-[140px_minmax(0,1fr)_92px_78px]">
            <div>EQUIPMENT</div>
            <div className="hidden sm:block">RANGE</div>
            <div className="text-right">$/MILE</div>
            <div className="hidden text-right sm:block">VS LAST MO.</div>
          </div>

          {site.rateRows.map((row) => (
            <div
              key={row.equipment}
              className={`grid grid-cols-[minmax(0,1fr)_92px] items-center gap-4 border-t border-ink/[0.07] px-4.5 py-3.5 sm:grid-cols-[140px_minmax(0,1fr)_92px_78px] ${
                row.hot ? "bg-gold/[0.07]" : ""
              }`}
            >
              <div className="flex items-center gap-2.5 font-sans text-[14.5px] font-semibold text-ink">
                {row.equipment}
                {row.hot && (
                  <span className="rounded font-mono text-[9px] font-semibold tracking-[0.1em] text-ink" style={{ background: "#f5c33b", padding: "4px 6px" }}>
                    HOT
                  </span>
                )}
              </div>

              <div className="hidden h-1.5 rounded-full bg-ink/[0.07] sm:block">
                <div
                  className={`h-1.5 rounded-full ${
                    row.barColor === "gold" ? "bg-gold" : "bg-forest"
                  }`}
                  style={{ width: `${row.barPct}%` }}
                />
              </div>

              <div className="text-right font-mono text-[13.5px] font-medium text-ink">
                {row.range}
              </div>

              <div
                className={`hidden text-right font-mono text-xs font-medium sm:block ${
                  row.trendColor === "forest" ? "text-forest" : "text-muted"
                }`}
              >
                {row.trend}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3.5 font-sans text-[12.5px] leading-[1.5] text-muted">
          Ranges are what we&apos;ve been booking for comparable carriers —
          not a guarantee. Your lanes, equipment and market timing move the
          number.
        </div>
      </div>
    </section>
  );
}
