import Image from "next/image";
import { site } from "@/content/site";

export function Hero() {
  const telHref = `tel:${site.phone}`;

  return (
    <section className="relative overflow-hidden bg-cream">
      <div
        className="absolute inset-0 [mask-image:linear-gradient(180deg,rgba(0,0,0,.6),transparent_80%)]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(20,24,26,.09) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-7 sm:pb-[68px] sm:pt-[62px]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-ink/12 bg-paper px-3 py-1.5 font-sans text-[11px] font-semibold text-forest">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-[#17a06a]" />
              {site.loadsThisWeek} loads dispatched this week · {site.city}
            </div>

            <h1 className="text-balance font-sans text-[38px] font-extrabold leading-[1.04] tracking-[-0.035em] text-ink sm:text-[56px]">
              You Drive. We Dispatch. You Keep the Wheel — and the{" "}
              <span className="text-forest underline decoration-gold decoration-[6px] underline-offset-4">
                Authority
              </span>
              .
            </h1>

            <p className="text-pretty mt-5 max-w-[480px] font-sans text-[17px] leading-[1.6] text-muted">
              A dispatch team for owner-operators and small fleets — not a
              broker. We source and vet the freight, negotiate your rate and
              handle the paperwork. You keep your authority and your margin.
            </p>

            <div className="mt-[30px] flex flex-wrap gap-3">
              <a
                href={telHref}
                className="rounded-[9px] bg-forest px-[25px] py-4 font-sans text-[15px] font-bold text-paper shadow-[0_8px_20px_rgba(12,92,60,0.22)] transition hover:bg-forest-dark"
              >
                Talk to a Dispatcher
              </a>
              <a
                href="#contact"
                className="rounded-[9px] border border-ink/16 bg-paper px-[25px] py-4 font-sans text-[15px] font-bold text-ink transition hover:bg-cream"
              >
                Get a dispatcher
              </a>
            </div>

            <div className="mt-[26px] flex flex-wrap gap-[22px] font-mono text-[11px] font-medium tracking-[0.08em] text-muted">
              <span>NO SETUP FEE</span>
              <span>NO CONTRACT</span>
              <span>PAY WHEN PAID</span>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[300px] overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(20,24,26,0.18)] sm:h-[420px]">
              <Image
                src="/images/hero-rig.jpg"
                alt="Semi truck on the highway at low sun"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="relative -mt-20 ml-3 max-w-[392px] overflow-hidden rounded-2xl border border-ink/12 bg-paper shadow-[0_18px_44px_rgba(20,24,26,0.16)] sm:-mt-24 sm:-ml-[18px]">
              <div className="flex items-center justify-between border-b border-ink/[0.09] px-4 py-[13px]">
                <span className="font-sans text-[13px] font-bold text-ink">
                  Today&apos;s board · Unit 118
                </span>
                <span className="rounded-md bg-forest/[0.08] px-2 py-1 font-mono text-[9.5px] font-semibold tracking-[0.1em] text-forest">
                  3 VETTED
                </span>
              </div>

              <div className="bg-gold/[0.08] px-4 py-[13px]">
                <div className="flex items-center justify-between gap-2.5">
                  <span className="font-sans text-[14.5px] font-bold text-ink">
                    Austin, TX → Memphis, TN
                  </span>
                  <span className="font-sans text-base font-extrabold text-forest">
                    $1,940
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap gap-3 font-mono text-[10.5px] font-medium text-muted">
                  <span>FLATBED</span>
                  <span>642 MI</span>
                  <span className="font-semibold text-ink">$3.02/MI</span>
                  <span className="text-forest">BROKER A+ · 21 DAYS</span>
                </div>
              </div>

              <div className="border-t border-ink/[0.07] px-4 py-[13px]">
                <div className="flex items-center justify-between gap-2.5">
                  <span className="font-sans text-[14.5px] font-bold text-ink">
                    Memphis, TN → Atlanta, GA
                  </span>
                  <span className="font-sans text-base font-extrabold text-ink">
                    $1,180
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap gap-3 font-mono text-[10.5px] font-medium text-muted">
                  <span>FLATBED</span>
                  <span>384 MI</span>
                  <span className="font-semibold text-ink">$3.07/MI</span>
                  <span>HOME BY FRIDAY</span>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-ink/[0.07] bg-cream px-4 py-[13px]">
                <div>
                  <div className="font-mono text-[9.5px] font-semibold tracking-[0.1em] text-muted">
                    WEEK GROSS · {site.weekGrossLoads} LOADS
                  </div>
                  <div className="mt-1.5 font-sans text-[22px] font-extrabold text-ink">
                    {site.weekGrossRange}
                  </div>
                </div>
                <div className="flex h-9 items-end gap-1.5">
                  <div className="h-[42%] w-[9px] rounded-sm bg-line" />
                  <div className="h-[60%] w-[9px] rounded-sm bg-line" />
                  <div className="h-[50%] w-[9px] rounded-sm bg-line" />
                  <div className="h-[76%] w-[9px] rounded-sm bg-forest" />
                  <div className="h-full w-[9px] rounded-sm bg-forest" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
