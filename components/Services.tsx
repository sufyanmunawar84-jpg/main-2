"use client";

import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  BuildingOffice2Icon,
  DevicePhoneMobileIcon,
  HomeModernIcon,
  PhoneArrowUpRightIcon,
  SignalIcon,
  Squares2X2Icon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const services = [
  { icon: DevicePhoneMobileIcon, title: "Mobile plans", text: "Discuss new connections, contract options, network switching and keeping your number." },
  { icon: HomeModernIcon, title: "Home broadband", text: "Explore broadband types and available options suited to your household and location." },
  { icon: BuildingOffice2Icon, title: "Business connectivity", text: "Review mobile and connectivity requirements for sole traders, teams and growing businesses." },
  { icon: Squares2X2Icon, title: "SIM-only", text: "Compare SIM-only plan types, data requirements and contract lengths without the jargon." },
  { icon: SignalIcon, title: "5G plans", text: "Understand 5G availability, compatible plans and what coverage may mean for your usage." },
  { icon: UsersIcon, title: "Family plans", text: "Talk through options for managing several users, devices or mobile lines together." },
  { icon: PhoneArrowUpRightIcon, title: "Device upgrades", text: "Get guidance on upgrade routes, handset preferences and early-upgrade considerations." },
] as const;

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-[#f6f8fc] py-22 lg:py-30">
      <div className="container-shell">
        <div className="section-title">
          <span className="eyebrow">How we can help</span>
          <h2>One conversation. Clearer connectivity options.</h2>
          <p>Tell us what you need and an independent specialist will help you understand relevant mobile and broadband plan types.</p>
        </div>
        <div className="mt-13 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: (index % 4) * 0.06 }}
                className={`group rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_12px_34px_rgba(18,43,82,.06)] transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_40px_rgba(18,63,142,.11)] ${index === 0 ? "lg:col-span-2" : ""}`}
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-extrabold tracking-[-.025em]">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
                <a href="#call-us" className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-blue-600">
                  Ask an advisor <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
              </motion.article>
            );
          })}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-5 text-slate-500">
          UK providers and networks may include Vodafone, EE, O2, Three, Sky, Virgin Media and BT, among others. Names are examples only; Northstar Connect is not affiliated with or endorsed by these providers.
        </p>
      </div>
    </section>
  );
}
