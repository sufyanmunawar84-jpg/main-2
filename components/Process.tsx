"use client";

import { motion } from "framer-motion";
import { ChatBubbleBottomCenterTextIcon, CheckIcon, ListBulletIcon, PhoneIcon } from "@heroicons/react/24/outline";

const steps = [
  { icon: PhoneIcon, title: "Call our advisors", text: "Start with a freephone call to an independent specialist." },
  { icon: ChatBubbleBottomCenterTextIcon, title: "Discuss your needs", text: "Tell us about your usage, preferences and priorities." },
  { icon: ListBulletIcon, title: "Review available options", text: "We explain relevant plan types and key considerations." },
  { icon: CheckIcon, title: "Make your choice", text: "Take the next step only if an option feels right for you." },
] as const;

export function Process() {
  return (
    <section id="how-it-works" className="dark-panel scroll-mt-24 overflow-hidden py-22 lg:py-30">
      <div className="container-shell">
        <div className="section-title">
          <span className="eyebrow !border-white/15 !bg-white/10 !text-blue-100">A simpler process</span>
          <h2 className="text-white">From questions to clarity in four steps.</h2>
          <p className="!text-slate-300">No complicated forms. Start with a straightforward conversation and move at your own pace.</p>
        </div>
        <ol className="relative mt-14 grid gap-5 md:grid-cols-4">
          <div aria-hidden="true" className="absolute left-[12%] right-[12%] top-8 hidden border-t border-dashed border-blue-300/40 md:block" />
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative rounded-[22px] border border-white/10 bg-white/[.07] p-5 backdrop-blur"
              >
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-[#122b5b] shadow-xl">
                  <Icon className="h-7 w-7 text-blue-300" />
                  <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-blue-500 text-[11px] font-extrabold">{index + 1}</span>
                </div>
                <h3 className="mt-5 text-lg font-extrabold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{step.text}</p>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
