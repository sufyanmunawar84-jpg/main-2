import { ArrowRightIcon, ClockIcon, PhoneIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import { siteConfig } from "@/lib/site";

export function CallCTA() {
  return (
    <section id="call-us" className="px-3 py-5 sm:px-5 sm:py-8">
      <div className="dark-panel relative mx-auto max-w-[1260px] overflow-hidden rounded-[32px] px-6 py-14 sm:px-10 lg:py-20">
        <div aria-hidden="true" className="absolute -right-22 -top-32 h-96 w-96 rounded-full border-[60px] border-white/[.04]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <span className="eyebrow !border-white/15 !bg-white/10 !text-blue-100">Need help choosing?</span>
          <h2 className="mt-5 text-[clamp(2.3rem,5vw,4.3rem)] font-extrabold leading-[1.02] tracking-[-.05em] text-white">
            Talk to an independent telecom specialist.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Tell us what matters to you. We’ll help make the available mobile and broadband options easier to understand.
          </p>
          <a href={siteConfig.phoneHref} className="mt-8 inline-flex min-h-16 items-center justify-center gap-3 rounded-2xl bg-white px-7 text-lg font-extrabold text-blue-700 shadow-2xl transition hover:-translate-y-1">
            <PhoneIcon className="h-6 w-6" />
            Call {siteConfig.phoneDisplay}
            <ArrowRightIcon className="h-5 w-5" />
          </a>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-300">
            <span className="flex items-center gap-2"><ClockIcon className="h-4 w-4" /> Mon–Fri 8am–8pm, Sat 9am–5pm</span>
            <span className="flex items-center gap-2"><ShieldCheckIcon className="h-4 w-4" /> No-obligation conversation</span>
          </div>
        </div>
      </div>
    </section>
  );
}
