"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PhoneIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { siteConfig } from "@/lib/site";

export function ConversionTools() {
  const [progress, setProgress] = useState(0);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(available > 0 ? Math.min(window.scrollY / available, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches || sessionStorage.getItem("callPromptSeen")) return;
    const started = Date.now();
    const onLeave = (event: MouseEvent) => {
      if (event.clientY <= 8 && Date.now() - started > 8000) {
        setPopup(true);
        sessionStorage.setItem("callPromptSeen", "true");
        document.removeEventListener("mouseleave", onLeave);
      }
    };
    document.addEventListener("mouseleave", onLeave);
    return () => document.removeEventListener("mouseleave", onLeave);
  }, []);

  useEffect(() => {
    if (!popup) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPopup(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [popup]);

  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-[60] h-[3px] bg-transparent" aria-hidden="true">
        <div className="h-full origin-left bg-gradient-to-r from-blue-500 to-violet-500" style={{ transform: `scaleX(${progress})` }} />
      </div>

      <motion.a
        href={siteConfig.phoneHref}
        aria-label={`Call Northstar Connect on ${siteConfig.phoneDisplay}`}
        initial={false}
        animate={{ opacity: progress > 0.12 ? 1 : 0, scale: progress > 0.12 ? 1 : 0.8, pointerEvents: progress > 0.12 ? "auto" : "none" }}
        className="fixed bottom-6 right-6 z-40 hidden h-15 w-15 place-items-center rounded-full bg-blue-600 text-white shadow-[0_16px_35px_rgba(20,82,222,.45)] hover:bg-blue-700 md:grid"
      >
        <PhoneIcon className="h-6 w-6" />
      </motion.a>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-3 shadow-[0_-12px_35px_rgba(8,30,67,.12)] backdrop-blur-xl md:hidden">
        <a href={siteConfig.phoneHref} className="primary-button w-full">
          <PhoneIcon className="h-5 w-5" /> Call an advisor — {siteConfig.phoneDisplay}
        </a>
      </div>

      <AnimatePresence>
        {popup && (
          <motion.div
            className="fixed inset-0 z-[70] grid place-items-center bg-[#07142f]/70 p-5 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setPopup(false);
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="call-prompt-title"
              initial={{ opacity: 0, y: 18, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              className="relative w-full max-w-md rounded-[28px] bg-white p-7 text-center shadow-2xl sm:p-9"
            >
              <button type="button" onClick={() => setPopup(false)} className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-slate-100" aria-label="Close call prompt">
                <XMarkIcon className="h-5 w-5" />
              </button>
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-blue-600"><PhoneIcon className="h-7 w-7" /></span>
              <h2 id="call-prompt-title" className="mt-5 text-3xl font-extrabold tracking-[-.04em]">Still weighing up your options?</h2>
              <p className="mt-3 leading-7 text-slate-600">An independent specialist can help you understand the choices. There’s no obligation to proceed.</p>
              <a href={siteConfig.phoneHref} className="primary-button mt-6 w-full">Call {siteConfig.phoneDisplay}</a>
              <button type="button" onClick={() => setPopup(false)} className="mt-4 text-sm font-bold text-slate-500 hover:text-slate-800">Continue browsing</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
