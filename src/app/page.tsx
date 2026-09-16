import type { Metadata } from "next";
import { site } from "@/content/site";
import { Hero } from "@/components/hero/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Equipment } from "@/components/sections/Equipment";
import { WhyUs } from "@/components/sections/WhyUs";
import { WhatWeHandle } from "@/components/sections/WhatWeHandle";
import { RateRanges } from "@/components/sections/RateRanges";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { Brokers } from "@/components/sections/Brokers";
import { Faq } from "@/components/sections/Faq";
import { GetADispatcher } from "@/components/sections/GetADispatcher";

export const metadata: Metadata = {
  title: `${site.name} — You Drive. We Dispatch.`,
  description:
    "A dispatch team for owner-operators and small fleets based in Austin, TX — not a broker. We source and vet the freight, negotiate your rate, and handle the paperwork.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Equipment />
      <WhyUs />
      <WhatWeHandle />
      <RateRanges />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <Brokers />
      <Faq />
      <GetADispatcher />
    </>
  );
}
