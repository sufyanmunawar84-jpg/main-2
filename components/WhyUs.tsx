import { PhoneIcon } from "@heroicons/react/24/outline";
import { siteConfig } from "@/lib/site";

const reasons = [
  {
    title: "Independent",
    text: "We explain available options without claiming to represent a network or provider.",
  },
  {
    title: "No obligation",
    text: "A call does not commit you to a plan, purchase or switch.",
  },
  {
    title: "Human answers",
    text: "Ask questions out loud and get plain-language explanations in real time.",
  },
] as const;

export function WhyUs() {
  return (
    <section id="why-call" className="section-pad scroll-mt-24 bg-[var(--foam)]">
      <div className="container-shell grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-end lg:gap-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--teal)]">Why call</p>
          <h2 className="display-font mt-3 text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.04em] text-[var(--ink)]">
            Advice that starts with what you need.
          </h2>
          <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
            Connectivity choices are hard to compare online. A short call brings the conversation back to usage,
            location, budget and preference.
          </p>
          <a href={siteConfig.phoneHref} className="call-button mt-8">
            <PhoneIcon className="h-5 w-5" />
            Call {siteConfig.phoneDisplay}
          </a>
        </div>

        <ul className="grid gap-8">
          {reasons.map((reason) => (
            <li key={reason.title} className="border-l-2 border-[var(--teal)] pl-5">
              <h3 className="display-font text-xl font-bold tracking-[-0.02em]">{reason.title}</h3>
              <p className="mt-2 leading-7 text-[var(--muted)]">{reason.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
