"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Bars3Icon, PhoneIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { navigation, siteConfig } from "@/lib/site";

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-2.5" aria-label={`${siteConfig.name} home`}>
      <span
        aria-hidden="true"
        className={`grid h-9 w-9 place-items-center rounded-[3px] ${light ? "bg-white/20" : "bg-[var(--teal)]"}`}
      >
        <span className="h-2.5 w-2.5 rounded-full border-2 border-white" />
      </span>
      <span className={`display-font text-[1.05rem] font-bold tracking-[-0.03em] ${light ? "text-white" : "text-[var(--ink)]"}`}>
        {siteConfig.name}
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const solid = scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        solid ? "border-b border-[var(--line)] bg-[var(--foam)]/95 backdrop-blur-md" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-shell flex h-[72px] items-center justify-between">
        <Brand light={!solid} />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-semibold transition ${
                solid ? "text-[var(--ink-soft)] hover:text-[var(--teal)]" : "text-white/80 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-5 md:flex">
          <a href={siteConfig.phoneHref} className="text-right" aria-label={`Call us on ${siteConfig.phoneDisplay}`}>
            <span className={`block text-[11px] font-semibold uppercase tracking-[0.14em] ${solid ? "text-[var(--muted)]" : "text-white/60"}`}>
              Freephone
            </span>
            <span className={`display-font block text-lg font-bold tracking-[-0.03em] ${solid ? "text-[var(--ink)]" : "text-white"}`}>
              {siteConfig.phoneDisplay}
            </span>
          </a>
          <a href={siteConfig.phoneHref} className="call-button !min-h-11 !px-4 text-sm">
            <PhoneIcon className="h-4 w-4" />
            Call now
          </a>
        </div>
        <button
          type="button"
          className={`grid h-11 w-11 place-items-center rounded-[3px] border md:hidden ${
            solid ? "border-[var(--line)] bg-white text-[var(--ink)]" : "border-white/25 bg-white/10 text-white"
          }`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile navigation" className="border-t border-[var(--line)] bg-[var(--foam)] px-5 py-5 md:hidden">
          <div className="mx-auto flex max-w-lg flex-col gap-1">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-[3px] px-3 py-3 font-semibold text-[var(--ink-soft)] hover:bg-[var(--mist)]"
              >
                {item.label}
              </a>
            ))}
            <a href={siteConfig.phoneHref} className="call-button mt-3">
              <PhoneIcon className="h-5 w-5" />
              Call {siteConfig.phoneDisplay}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
