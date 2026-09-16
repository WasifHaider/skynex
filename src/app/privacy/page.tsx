import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `How ${site.name} collects, uses, and protects the information you submit through our "Get a dispatcher" form.`,
};

export default function PrivacyPage() {
  return (
    <section className="border-b border-ink/10 bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-7">
        <h1 className="font-sans text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Privacy policy
        </h1>
        <p className="mt-4 max-w-[65ch] font-sans text-base text-ink">
          Last updated {new Date().getFullYear()}. This page explains what
          information {site.name} collects when you contact us or use our
          &quot;Get a dispatcher&quot; form, and what we do with it.
        </p>

        <div className="mt-10 max-w-[65ch] space-y-8">
          <div>
            <h2 className="font-sans text-xl font-extrabold text-ink">
              What we collect
            </h2>
            <p className="mt-2 font-sans text-base text-ink">
              When you submit the &quot;Get a dispatcher&quot; form, we
              collect your name, phone number, email address, MC number,
              equipment type, authority age, and, if you provide it, your
              home base and preferred lanes. If you call or email us
              directly, we keep whatever information you share in that
              conversation.
            </p>
          </div>

          <div>
            <h2 className="font-sans text-xl font-extrabold text-ink">
              Why we collect it
            </h2>
            <p className="mt-2 font-sans text-base text-ink">
              We use this information for one purpose: to respond to your
              dispatch service inquiry, evaluate whether we&apos;re a fit for
              your lanes and equipment, and set up your account if you decide
              to work with us. We don&apos;t use it for advertising, and we
              don&apos;t use it to build a marketing profile of you.
            </p>
          </div>

          <div>
            <h2 className="font-sans text-xl font-extrabold text-ink">
              How we use and store it
            </h2>
            <p className="mt-2 font-sans text-base text-ink">
              Form submissions are sent by email to our dispatch team so a
              person can follow up with you, typically the same day. We keep
              inquiry records only as long as needed to respond to you and,
              if you become a customer, to service your account. We take
              reasonable steps to keep this information secure, but no
              method of electronic storage or transmission is completely
              secure.
            </p>
          </div>

          <div>
            <h2 className="font-sans text-xl font-extrabold text-ink">
              We don&apos;t sell your information
            </h2>
            <p className="mt-2 font-sans text-base text-ink">
              We don&apos;t sell, rent, or trade your personal information to
              third parties. We share it only with service providers who help
              us operate, such as our email delivery provider, and only to
              the extent needed to send your inquiry to our dispatch team.
            </p>
          </div>

          <div>
            <h2 className="font-sans text-xl font-extrabold text-ink">
              Your choices
            </h2>
            <p className="mt-2 font-sans text-base text-ink">
              You can ask us what information we have about you, ask us to
              correct it, or ask us to delete it, at any time. Contact us
              using the details below and we&apos;ll take care of it.
            </p>
          </div>

          <div>
            <h2 className="font-sans text-xl font-extrabold text-ink">
              Contact us
            </h2>
            <p className="mt-2 font-sans text-base text-ink">
              Questions about this policy or your information? Email{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-semibold text-forest underline hover:text-ink"
              >
                {site.email}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
