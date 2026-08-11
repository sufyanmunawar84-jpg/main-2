import Link from "next/link";
import { Brand } from "@/components/Header";
import { navigation, siteConfig } from "@/lib/site";

const legal = [
  ["Privacy policy", "/privacy"],
  ["Terms of use", "/terms"],
  ["Cookies", "/cookies"],
  ["Accessibility", "/accessibility"],
  ["Contact", "/contact"],
] as const;

export function Footer() {
  return (
    <footer className="bg-[var(--ink)] pb-28 pt-16 text-white/65 md:pb-10">
      <div className="container-shell">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Brand light />
            <p className="mt-5 max-w-md text-sm leading-6 text-white/55">
              {siteConfig.descriptor}. Clear guidance for mobile, broadband and business connectivity — by phone.
            </p>
            <a href={siteConfig.phoneHref} className="display-font mt-5 inline-block text-xl font-bold text-white hover:text-[#7ecbc4]">
              {siteConfig.phoneDisplay}
            </a>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-white">Explore</p>
            <nav className="mt-4 grid gap-3" aria-label="Footer navigation">
              {navigation.map((item) => (
                <a key={item.href} href={item.href} className="text-sm hover:text-white">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-white">Information</p>
            <nav className="mt-4 grid gap-3" aria-label="Legal navigation">
              {legal.map(([label, href]) => (
                <Link key={href} href={href} className="text-sm hover:text-white">
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div className="py-7 text-xs leading-6 text-white/45">
          <p className="font-semibold text-white/60">{siteConfig.disclaimer}</p>
          <p className="mt-2">
            Provider names may be mentioned for identification and comparison purposes only. Availability, pricing,
            coverage, eligibility and contract terms vary. Always review the chosen provider’s terms before entering an
            agreement.
          </p>
        </div>
        <div className="flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Northstar Connect. All rights reserved.</p>
          <p>Independent connectivity guidance across the United Kingdom.</p>
        </div>
      </div>
    </footer>
  );
}
