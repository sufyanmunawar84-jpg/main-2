import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export function LegalPage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--foam)] pb-24 pt-32">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--teal)]">{eyebrow}</p>
            <h1 className="display-font mt-4 text-4xl font-bold tracking-[-0.045em] text-[var(--ink)] sm:text-5xl">{title}</h1>
            <p className="mt-5 text-lg leading-8 text-[var(--muted)]">{intro}</p>
            <div className="legal-prose mt-10 border-t border-[var(--line)] pt-8">{children}</div>
            <p className="mt-8 text-xs text-[var(--muted)]">Last updated: 11 August 2026</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
