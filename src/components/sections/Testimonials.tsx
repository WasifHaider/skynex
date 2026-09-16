"use client";

import Image from "next/image";
import { useState } from "react";
import { site } from "@/content/site";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = site.testimonials.length;

  if (count === 0) {
    return null;
  }

  const goPrev = () => setIndex((i) => (i - 1 + count) % count);
  const goNext = () => setIndex((i) => (i + 1) % count);
  const current = site.testimonials[index];

  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-6xl px-5 pb-[60px] pt-[62px] sm:px-7">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="font-mono text-[11px] font-semibold tracking-[0.16em] text-gold">
              FROM THE SEAT
            </div>
            <h2 className="mt-3 font-sans text-[26px] font-extrabold leading-[1.1] tracking-[-0.03em] text-paper sm:text-[34px]">
              Drivers who kept their authority.
            </h2>
          </div>
          <div className="flex gap-2.5">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous testimonial"
              className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-paper/[0.28] font-sans text-base text-paper transition hover:bg-paper/10"
            >
              ←
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next testimonial"
              className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-paper/[0.28] font-sans text-base text-paper transition hover:bg-paper/10"
            >
              →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-9 rounded-[18px] border border-paper/10 bg-[#1d2226] p-7 sm:grid-cols-[0.38fr_0.62fr]">
          <div className="relative h-[220px] overflow-hidden rounded-xl sm:h-[300px]">
            <Image
              src={current.photo}
              alt={current.name}
              fill
              sizes="(min-width: 640px) 38vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <blockquote className="text-pretty font-sans text-xl font-semibold leading-[1.4] tracking-[-0.02em] text-paper sm:text-2xl">
              &ldquo;{current.quote}&rdquo;
            </blockquote>
            <div className="mt-[26px] flex items-center gap-3.5">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
                <Image
                  src={current.face}
                  alt={current.name}
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-sans text-[15px] font-bold text-paper">
                  {current.name}
                </div>
                <div className="mt-1 font-mono text-[10px] font-medium tracking-[0.1em] text-muted-dark">
                  {current.meta}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[22px] flex gap-2">
          {site.testimonials.map((testimonial, i) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className="h-1 w-[46px] rounded-full transition-colors"
              style={{
                background: i === index ? "#f5c33b" : "rgba(252,252,250,.24)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
