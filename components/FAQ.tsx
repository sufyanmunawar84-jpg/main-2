"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  ["Does calling commit me to anything?", "No. The conversation is no obligation. Review the information and decide whether you want to take any next step."],
  ["Do you represent my current provider?", "No. Northstar Connect is an independent comparison and advisory service. We do not represent, and are not endorsed by, any mobile or broadband provider."],
  ["Can I keep my mobile number?", "In most cases, yes. You normally request a PAC from your current provider and give it to your new provider. The receiving provider manages the transfer."],
  ["Can you help compare home broadband?", "Yes. We discuss options based on your address, household needs, typical usage and preferred contract terms. Availability depends on location."],
  ["Can you guarantee the cheapest deal?", "No. Prices, eligibility and availability change. We help you consider relevant available options — we cannot responsibly guarantee the cheapest outcome for every customer."],
  ["What should I have ready?", "Approximate monthly usage, budget, preferred devices, current contract end date and — for broadband — your postcode. Avoid sharing passwords or full payment details on an initial call."],
  ["Do you help business customers?", "Yes. We discuss mobile lines and connectivity for sole traders and businesses, including team size, usage and support preferences."],
  ["Which UK providers do you compare?", "Available options vary. Networks and providers may include Vodafone, EE, O2, Three, Sky, Virgin Media and BT, among others. Mentioning a provider does not imply affiliation or endorsement."],
] as const;

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faqs" className="section-pad scroll-mt-24 bg-[var(--mist)]">
      <div className="container-shell">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--teal)]">FAQs</p>
          <h2 className="display-font mt-3 text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.04em] text-[var(--ink)]">
            Answers before you dial.
          </h2>
          <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
            Quick context on independence, switching and what to expect from a call.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          {faqs.map(([question, answer], index) => {
            const isOpen = open === index;
            return (
              <div key={question} className="border-b border-[var(--line)]">
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-5 py-5 text-left font-bold text-[var(--ink)]"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpen(isOpen ? null : index)}
                  >
                    <span className="display-font text-lg tracking-[-0.02em]">{question}</span>
                    <ChevronDownIcon
                      className={`h-5 w-5 shrink-0 text-[var(--teal)] transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 leading-7 text-[var(--muted)]">{answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export const faqSchemaItems = faqs.map(([question, answer]) => ({
  "@type": "Question",
  name: question,
  acceptedAnswer: { "@type": "Answer", text: answer },
}));
