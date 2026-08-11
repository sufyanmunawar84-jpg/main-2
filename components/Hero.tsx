"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  ShieldCheckIcon,
  SignalIcon,
  WifiIcon,
} from "@heroicons/react/24/outline";
import { siteConfig } from "@/lib/site";

const assurances = ["No-obligation guidance", "Independent UK specialists", "Mobile & broadband support"];

export function Hero() {
  return (
    <section className="mesh-bg relative overflow-hidden pb-18 pt-31 sm:pt-36 lg:pb-25 lg:pt-44">
      <div aria-hidden="true" className="grid-bg absolute inset-0" />
      <div className="container-shell relative grid items-center gap-15 lg:grid-cols-[1.03fr_.97fr]">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="eyebrow">
            <ShieldCheckIcon className="h-4 w-4 text-blue-600" />
            Independent UK connectivity experts
          </div>
          <h1 className="mt-6 max-w-[700px] text-[clamp(2.75rem,6vw,5.3rem)] font-extrabold leading-[.98] tracking-[-.06em] text-[#081b3b]">
            Find a better way to <span className="text-gradient">stay connected.</span>
          </h1>
          <p className="mt-6 max-w-[650px] text-lg leading-8 text-slate-600 sm:text-xl">
            Clear, independent guidance on mobile, SIM-only, broadband and business connectivity options available across the UK.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={siteConfig.phoneHref} className="primary-button text-base sm:px-6" aria-label={`Call an advisor on ${siteConfig.phoneDisplay}`}>
              <PhoneIcon className="h-5 w-5" />
              Call {siteConfig.phoneDisplay}
            </a>
            <a href="#services" className="secondary-button text-base sm:px-6">
              Compare plan types <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-3 text-xs text-slate-500">Calls are free from UK landlines and mobiles. Opening hours apply.</p>
          <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-3" aria-label="Service assurances">
            {assurances.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                <CheckCircleIcon className="h-5 w-5 text-blue-600" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="relative mx-auto w-full max-w-[540px]"
        >
          <div className="absolute -inset-9 rounded-full bg-blue-300/20 blur-3xl" />
          <div className="glass-card relative overflow-hidden rounded-[32px] p-3 sm:p-5">
            <Image
              src="/connectivity-visual.svg"
              alt="Abstract illustration of connected mobile, home and business services"
              width={700}
              height={590}
              priority
              className="h-auto w-full rounded-[23px]"
            />
            <div className="absolute left-1 top-[23%] flex items-center gap-3 rounded-2xl border border-white/80 bg-white/90 p-3 shadow-xl backdrop-blur sm:-left-4">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-600">
                <SignalIcon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Mobile plans</span>
                <span className="text-sm font-extrabold text-slate-800">Options compared</span>
              </span>
            </div>
            <div className="absolute bottom-[9%] right-1 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/90 p-3 shadow-xl backdrop-blur sm:-right-4">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-50 text-violet-600">
                <WifiIcon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Home broadband</span>
                <span className="text-sm font-extrabold text-slate-800">Advice made simple</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
