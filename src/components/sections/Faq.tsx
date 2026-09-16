"use client";

import { useState } from "react";
import { site } from "@/content/site";

export function Faq() {
  const [open, setOpen] = useState(0);
  const telHref = `tel:${site.phone}`;

  return (
    <section id="about" className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-[62px] sm:px-7 sm:py-[66px]">
        <div className="grid grid-cols-1 items-start gap-11 lg:grid-cols-[0.42fr_0.58fr]">
          <div>
            <div className="font-mono text-[11px] font-semibold tracking-[0.16em] text-forest">
              FAQ
            </div>
            <h2 className="mt-3 font-sans text-[26px] font-extrabold leading-[1.1] tracking-[-0.03em] text-ink sm:text-[34px]">
              Straight answers.
            </h2>
            <p className="mt-4 font-sans text-[15px] leading-[1.6] text-muted">
              Anything not covered here, call the line — a dispatcher picks
              up, not a form.
            </p>
            <a
              href={telHref}
              className="mt-4 inline-flex min-h-11 items-center rounded-[9px] border border-forest/35 bg-forest/5 px-[18px] py-[13px] font-sans text-[17px] font-bold text-forest"
            >
              {site.phoneDisplay}
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-ink/10 bg-paper">
            {site.faqs.map((faq, index) => {
              const isOpen = open === index;
              return (
                <div
                  key={faq.question}
                  className={index > 0 ? "border-t border-ink/[0.08]" : ""}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    className="w-full px-[22px] py-5 text-left"
                  >
                    <span className="flex items-center justify-between gap-4">
                      <span className="font-sans text-[15.5px] font-bold leading-[1.35] text-ink">
                        {faq.question}
                      </span>
                      <span className="shrink-0 font-mono text-lg text-forest">
                        {isOpen ? "–" : "+"}
                      </span>
                    </span>
                    {isOpen && (
                      <span className="mt-2.5 block max-w-[520px] font-sans text-sm leading-[1.6] text-muted">
                        {faq.answer}
                      </span>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
