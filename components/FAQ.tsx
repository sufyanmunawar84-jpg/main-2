"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  ["Can I switch mobile networks?", "Yes. You can usually switch networks, subject to your existing contract and the new provider’s eligibility checks. We can explain the typical steps and points to consider."],
  ["Can I keep my mobile number?", "In most cases, yes. You normally request a PAC from your current provider and give it to your new provider. The receiving provider manages the number transfer."],
  ["How long does a mobile switch take?", "Once your new service is active and your PAC is submitted, a number transfer commonly completes within one working day. Timings can vary by provider and circumstances."],
  ["Can you help me compare home broadband?", "Yes. We can discuss broadband options based on your address, household needs, typical usage and preferred contract terms. Availability depends on location."],
  ["Can I upgrade my phone early?", "It may be possible, but early-upgrade rules and any remaining contract charges depend on your provider and agreement. Check your current contract before making a decision."],
  ["What is a SIM-only plan?", "A SIM-only plan provides mobile calls, texts and data without including a handset. It can suit people who already own a compatible device."],
  ["Do you represent my current provider?", "No. Northstar Connect is an independent comparison and advisory service. We do not represent, and are not endorsed by, any mobile or broadband provider."],
  ["Does calling commit me to anything?", "No. The initial conversation is no obligation. You can review the information provided and decide whether you want to take any next step."],
  ["Can you guarantee the cheapest deal?", "No. Prices, eligibility and availability change, and no comparison service can responsibly guarantee the cheapest option for every customer. We help you consider relevant available options."],
  ["Can you check 5G coverage?", "We can help you understand 5G considerations and point you towards provider coverage information. Actual coverage and performance vary by location, device, network conditions and other factors."],
  ["Do you help business customers?", "Yes. We can discuss mobile lines and connectivity requirements for sole traders and businesses, including team size, usage and support preferences."],
  ["What information should I have ready?", "It helps to know your approximate monthly usage, budget, preferred devices, current contract end date and—for broadband—your postcode. Avoid sharing passwords or full payment details during an initial enquiry."],
  ["Will switching broadband interrupt my service?", "A short interruption can sometimes occur on the switch date, but the process depends on the providers and connection type involved. Your chosen provider should confirm the expected process."],
  ["Can I cancel after agreeing to a new contract?", "Consumer contracts may include cancellation rights, but the rules depend on how and when you agreed and whether service has started. Read the provider’s terms and cancellation policy before proceeding."],
  ["Which UK providers do you compare?", "Available options can vary. UK networks and providers may include Vodafone, EE, O2, Three, Sky, Virgin Media and BT, among others. Mentioning a provider does not imply affiliation or endorsement."],
] as const;

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faqs" className="scroll-mt-24 bg-[#f6f8fc] py-22 lg:py-30">
      <div className="container-shell">
        <div className="section-title">
          <span className="eyebrow">Frequently asked questions</span>
          <h2>Helpful answers before you call.</h2>
          <p>General information about switching, upgrades, number transfers and connectivity comparisons.</p>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-3">
          {faqs.map(([question, answer], index) => {
            const isOpen = open === index;
            return (
              <div key={question} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_24px_rgba(20,44,80,.04)]">
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-5 p-5 text-left font-extrabold text-slate-900 sm:px-6"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpen(isOpen ? null : index)}
                  >
                    <span>{question}</span>
                    <ChevronDownIcon className={`h-5 w-5 shrink-0 text-blue-600 transition-transform ${isOpen ? "rotate-180" : ""}`} />
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
                    >
                      <p className="px-5 pb-5 leading-7 text-slate-600 sm:px-6">{answer}</p>
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
