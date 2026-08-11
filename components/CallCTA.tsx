import { PhoneIcon } from "@heroicons/react/24/outline";
import { siteConfig } from "@/lib/site";

export function CallCTA() {
  return (
    <section id="call-us" className="relative overflow-hidden bg-[var(--ink)] px-4 py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(13,122,114,0.35),transparent_50%),radial-gradient(ellipse_at_90%_100%,rgba(196,92,38,0.18),transparent_40%)]"
      />
      <div className="container-shell relative max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#7ecbc4]">Ready when you are</p>
        <h2 className="display-font mt-4 text-[clamp(2.2rem,5vw,3.75rem)] font-bold leading-[1.02] tracking-[-0.045em] text-white">
          Talk to an independent telecom specialist.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/70">
          Freephone from UK landlines and mobiles. Opening hours apply. No obligation to proceed.
        </p>
        <a href={siteConfig.phoneHref} className="call-button-light mt-8 text-lg">
          <PhoneIcon className="h-6 w-6 text-[var(--copper)]" />
          Call {siteConfig.phoneDisplay}
        </a>
        <p className="mt-5 text-sm text-white/55">{siteConfig.hours}</p>
      </div>
    </section>
  );
}
