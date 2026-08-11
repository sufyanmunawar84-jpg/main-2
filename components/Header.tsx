"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Bars3Icon, PhoneIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { navigation, siteConfig } from "@/lib/site";

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label={`${siteConfig.name} home`}>
      <span
        aria-hidden="true"
        className="grid h-10 w-10 place-items-center rounded-[13px] bg-gradient-to-br from-blue-500 to-indigo-700 shadow-[0_8px_22px_rgba(23,92,255,.3)]"
      >
        <span className="h-4 w-4 rounded-full border-[3px] border-white shadow-[0_0_0_4px_rgba(255,255,255,.22)]" />
      </span>
      <span className={`text-[17px] font-extrabold tracking-[-0.025em] ${light ? "text-white" : "text-[#0b1d3b]"}`}>
        Northstar<span className={light ? "text-blue-300" : "text-blue-600"}> Connect</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all ${
        scrolled ? "border-slate-200/90 bg-white/95 shadow-[0_10px_35px_rgba(12,32,70,.08)] backdrop-blur-xl" : "border-transparent bg-white/70 backdrop-blur-lg"
      }`}
    >
      <div className="container-shell flex h-[76px] items-center justify-between">
        <Brand />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-semibold text-slate-600 transition hover:text-blue-600">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <a href={siteConfig.phoneHref} className="group text-right" aria-label={`Call us on ${siteConfig.phoneDisplay}`}>
            <span className="block text-[10px] font-bold uppercase tracking-[.12em] text-slate-500">Freephone advice</span>
            <span className="block font-extrabold tracking-tight text-slate-900 group-hover:text-blue-600">{siteConfig.phoneDisplay}</span>
          </a>
          <a href={siteConfig.phoneHref} className="primary-button !min-h-11 !rounded-xl !px-4 text-sm">
            <PhoneIcon className="h-4 w-4" /> Call now
          </a>
        </div>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile navigation" className="border-t border-slate-200 bg-white px-5 py-5 shadow-xl md:hidden">
          <div className="mx-auto flex max-w-lg flex-col gap-1">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 font-semibold text-slate-700 hover:bg-slate-50">
                {item.label}
              </a>
            ))}
            <a href={siteConfig.phoneHref} className="primary-button mt-3">
              <PhoneIcon className="h-5 w-5" /> Call {siteConfig.phoneDisplay}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
