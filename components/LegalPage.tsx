import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export function LegalPage({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f6f8fc] pb-20 pt-32">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl">
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-[-.045em] sm:text-6xl">{title}</h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">{intro}</p>
            <div className="mt-10 rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_55px_rgba(9,38,85,.07)] sm:p-10 [&_a]:font-bold [&_a]:text-blue-600 [&_h2]:mt-9 [&_h2]:text-xl [&_h2]:font-extrabold [&_h2]:tracking-tight [&_h2:first-child]:mt-0 [&_li]:mt-2 [&_p]:mt-3 [&_p]:leading-7 [&_p]:text-slate-600 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-slate-600">
              {children}
            </div>
            <p className="mt-5 text-xs text-slate-500">Last updated: 10 August 2026</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
