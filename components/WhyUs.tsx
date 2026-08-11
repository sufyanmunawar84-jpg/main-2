"use client";

import { motion } from "framer-motion";
import {
  BoltIcon,
  ChatBubbleLeftRightIcon,
  CheckBadgeIcon,
  ClockIcon,
  MagnifyingGlassIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const benefits = [
  { icon: ShieldCheckIcon, title: "Independent guidance", text: "We explain available options without claiming to represent a network or provider." },
  { icon: CheckBadgeIcon, title: "No obligation", text: "A conversation does not commit you to a plan, purchase or switch." },
  { icon: BoltIcon, title: "Fast, human support", text: "Speak to a person and get relevant information without lengthy online research." },
  { icon: ChatBubbleLeftRightIcon, title: "Simple explanations", text: "We make contract terms, switching and connectivity considerations easier to understand." },
  { icon: MagnifyingGlassIcon, title: "Needs-led comparison", text: "Your usage, location, budget and preferences guide the conversation." },
  { icon: ClockIcon, title: "Phone-first service", text: "Discuss questions in one call, with time to make your own informed decision." },
] as const;

export function WhyUs() {
  return (
    <section id="why-us" className="scroll-mt-24 py-22 lg:py-30">
      <div className="container-shell grid items-center gap-14 lg:grid-cols-[.88fr_1.12fr]">
        <div>
          <span className="eyebrow">Why Northstar Connect</span>
          <h2 className="mt-5 text-[clamp(2.2rem,4.5vw,4rem)] font-extrabold leading-[1.04] tracking-[-.05em]">Advice that starts with <span className="text-gradient">what you need.</span></h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Connectivity choices can be difficult to compare. We bring the conversation back to the essentials—how you use your service, what matters to you and which options may fit.
          </p>
          <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50/70 p-5">
            <p className="text-sm font-bold text-blue-950">Our independence promise</p>
            <p className="mt-1 text-sm leading-6 text-blue-900/70">We clearly identify ourselves and never claim to be your current provider.</p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 2) * 0.08 }}
                className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-[0_12px_35px_rgba(8,37,83,.05)]"
              >
                <Icon className="h-7 w-7 text-blue-600" />
                <h3 className="mt-4 font-extrabold">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{benefit.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
