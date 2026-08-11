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
    <footer className="bg-[#061126] pb-28 pt-15 text-slate-300 md:pb-8">
      <div className="container-shell">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Brand light />
            <p className="mt-5 max-w-md text-sm leading-6 text-slate-400">{siteConfig.descriptor}. Clear guidance for mobile, broadband and business connectivity.</p>
            <a href={siteConfig.phoneHref} className="mt-5 inline-block font-extrabold text-white hover:text-blue-300">{siteConfig.phoneDisplay}</a>
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.13em] text-white">Explore</p>
            <nav className="mt-4 grid gap-3" aria-label="Footer navigation">
              {navigation.slice(0, 4).map((item) => <a key={item.href} href={item.href} className="text-sm hover:text-white">{item.label}</a>)}
            </nav>
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.13em] text-white">Information</p>
            <nav className="mt-4 grid gap-3" aria-label="Legal navigation">
              {legal.map(([label, href]) => <Link key={href} href={href} className="text-sm hover:text-white">{label}</Link>)}
            </nav>
          </div>
        </div>
        <div className="py-7 text-xs leading-6 text-slate-400">
          <p className="font-semibold text-slate-300">{siteConfig.disclaimer}</p>
          <p className="mt-2">
            Provider names may be mentioned for identification and comparison purposes only. Availability, pricing, coverage, eligibility and contract terms vary. Always review the chosen provider’s terms before entering an agreement.
          </p>
        </div>
        <div className="flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Northstar Connect. All rights reserved.</p>
          <p>Independent connectivity guidance across the United Kingdom.</p>
        </div>
      </div>
    </footer>
  );
}
