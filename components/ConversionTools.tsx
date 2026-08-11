"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { siteConfig } from "@/lib/site";

export function ConversionTools() {
  const [showFloat, setShowFloat] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowFloat(window.scrollY > window.innerHeight * 0.55);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.a
        href={siteConfig.phoneHref}
        aria-label={`Call Northstar Connect on ${siteConfig.phoneDisplay}`}
        initial={false}
        animate={{
          opacity: showFloat ? 1 : 0,
          y: showFloat ? 0 : 12,
          pointerEvents: showFloat ? "auto" : "none",
        }}
        className="fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-[3px] bg-[var(--copper)] px-4 py-3 text-sm font-bold text-white shadow-[0_12px_28px_rgba(11,31,30,0.22)] md:inline-flex"
      >
        <PhoneIcon className="h-5 w-5" />
        Call now
      </motion.a>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--line)] bg-[var(--foam)]/95 p-3 backdrop-blur-md md:hidden">
        <a href={siteConfig.phoneHref} className="call-button w-full">
          <PhoneIcon className="h-5 w-5" />
          Call {siteConfig.phoneDisplay}
        </a>
      </div>
    </>
  );
}
