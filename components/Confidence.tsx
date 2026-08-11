"use client";

import { motion } from "framer-motion";
import { CheckCircleIcon, LockClosedIcon, ScaleIcon, UserGroupIcon } from "@heroicons/react/24/outline";

const points = [
  "Compare relevant option types",
  "Save time on initial research",
  "Understand common switching steps",
  "Get independent guidance",
  "Ask questions in one conversation",
  "Make your own informed choice",
] as const;

export function Confidence() {
  return (
    <section id="reviews" className="scroll-mt-24 py-22 lg:py-30">
      <div className="container-shell">
        <div className="grid overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_28px_80px_rgba(8,39,91,.1)] lg:grid-cols-2">
          <div className="bg-[#f4f7fc] p-8 sm:p-12">
            <span className="eyebrow">Customer-first by design</span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-[-.04em] sm:text-4xl">Clarity and choice, without the pressure.</h2>
            <p className="mt-5 leading-7 text-slate-600">
              Our service is built around a clear identity, transparent guidance and no-obligation conversations.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3" aria-label="Trust commitments">
              {[
                [ScaleIcon, "Independent"],
                [LockClosedIcon, "Privacy aware"],
                [UserGroupIcon, "Human support"],
              ].map(([Icon, label]) => {
                const TrustIcon = Icon as typeof ScaleIcon;
                return (
                  <div key={label as string} className="rounded-2xl border border-slate-200 bg-white p-3 text-center">
                    <TrustIcon className="mx-auto h-6 w-6 text-blue-600" />
                    <span className="mt-2 block text-[11px] font-extrabold text-slate-600 sm:text-xs">{label as string}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="p-8 sm:p-12">
            <p className="text-sm font-extrabold uppercase tracking-[.12em] text-blue-600">What you can expect</p>
            <div className="mt-7 grid gap-5">
              {points.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircleIcon className="h-6 w-6 shrink-0 text-blue-600" />
                  <span className="font-semibold text-slate-700">{point}</span>
                </motion.div>
              ))}
            </div>
            <p className="mt-8 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500">
              We only publish customer reviews or performance claims when they can be substantiated. No fabricated testimonials are used on this site.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
