import { siteConfig } from "@/lib/site";

const steps = [
  {
    title: "Call freephone",
    text: `Dial ${siteConfig.phoneDisplay} and speak with an independent specialist.`,
  },
  {
    title: "Share what you need",
    text: "Usage, budget, location, devices and contract timing — whatever helps us advise you.",
  },
  {
    title: "Review your options",
    text: "We explain relevant plan types and the points that usually matter most.",
  },
  {
    title: "Decide in your own time",
    text: "No pressure. Take the next step only if something feels right.",
  },
] as const;

export function Process() {
  return (
    <section id="how-it-works" className="section-pad scroll-mt-24 bg-[var(--mist)]">
      <div className="container-shell">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--teal)]">How it works</p>
          <h2 className="display-font mt-3 text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.04em] text-[var(--ink)]">
            Four steps. No forms.
          </h2>
          <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
            The whole service is built around a phone conversation — clear, human and no obligation.
          </p>
        </div>

        <ol className="mt-14 grid gap-8 md:grid-cols-4 md:gap-6">
          {steps.map((step, index) => (
            <li key={step.title} className="relative">
              <span className="display-font text-5xl font-bold tracking-[-0.05em] text-[var(--teal)]/25">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="display-font mt-3 text-lg font-bold tracking-[-0.02em] text-[var(--ink)]">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
