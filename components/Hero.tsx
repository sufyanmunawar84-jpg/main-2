import Image from "next/image";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero-call.jpg"
          alt="Person taking a calm phone call in soft morning light"
          fill
          priority
          sizes="100vw"
          className="hero-kenburns object-cover object-[center_30%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(105deg,rgba(8,28,26,0.88)_0%,rgba(8,28,26,0.72)_42%,rgba(8,28,26,0.28)_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(13,122,114,0.22),transparent_55%)]"
        />
      </div>

      <div className="container-shell relative flex min-h-[100svh] flex-col justify-end pb-16 pt-28 sm:justify-center sm:pb-24 sm:pt-32">
        <div className="max-w-xl text-white">
          <p className="display-font animate-rise text-[clamp(2.6rem,7vw,4.75rem)] font-bold leading-[0.95] tracking-[-0.045em]">
            {siteConfig.name}
          </p>
          <h1 className="display-font animate-rise-delay-1 mt-5 text-[clamp(1.55rem,3.4vw,2.35rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-white/95">
            Clearer mobile and broadband choices — start with one freephone call.
          </h1>
          <p className="animate-rise-delay-2 mt-5 max-w-md text-base leading-7 text-white/78 sm:text-lg sm:leading-8">
            Independent UK specialists help you understand the options that fit your usage, location and budget.
          </p>
          <div className="animate-rise-delay-3 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={siteConfig.phoneHref}
              className="call-button call-pulse text-base sm:px-7"
              aria-label={`Call an advisor on ${siteConfig.phoneDisplay}`}
            >
              <PhoneIcon className="h-5 w-5" />
              Call {siteConfig.phoneDisplay}
            </a>
            <p className="text-sm text-white/65 sm:pl-2">{siteConfig.hours}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
