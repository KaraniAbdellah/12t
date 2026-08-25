import { motion } from "framer-motion";
import { Globe, ArrowRight, ShieldCheck } from "lucide-react";
import { primary_color } from "../constant/conts";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white"
    >
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="w-full max-w-4xl mx-auto flex flex-col items-center text-center gap-6 sm:gap-8 px-4"
      >
        {/* Top Avatar Proof Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200/80 text-xs sm:text-sm font-medium text-slate-700">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((_, idx) => (
              <img
                key={idx}
                src={`https://randomuser.me/api/portraits/${
                  idx % 2 === 0 ? "men" : "women"
                }/${30 + idx}.jpg`}
                alt="User avatar"
                className="w-6 h-6 rounded-full border-2 border-white object-cover shadow-sm"
              />
            ))}
          </div>
          <span>
            Used by <strong className="text-zinc-900">hundreds</strong> of app
            developers
          </span>
        </div>

        {/* Main Headline with Highlight Badges */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-zinc-900 leading-[1.15] tracking-tight">
          Get Your{" "}
          <span
            className="inline-block px-3.5 py-1.5 mx-1 my-1 -rotate-1 border-2 rounded-2xl shadow-md transition-transform hover:rotate-0"
            style={{
              borderColor: primary_color,
              color: primary_color,
              backgroundColor: `${primary_color}18`,
              boxShadow: `0 4px 14px ${primary_color}25`,
            }}
          >
            12 Testers First
          </span>
          <span
            className="inline-block px-3.5 py-1.5 mx-1 my-1 rotate-1 border-2 rounded-2xl shadow-md transition-transform hover:rotate-0"
            style={{
              borderColor: primary_color,
              color: primary_color,
              backgroundColor: `${primary_color}18`,
              boxShadow: `0 4px 14px ${primary_color}25`,
            }}
          >
            Pay Only
          </span>{" "}
          After 13 Days{" "}
        </h1>

        {/* Subtitle Description */}
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
          Real devices. Daily testing. Actionable feedback. Pay only after 13
          days, keep 1 day to submit with full confidence.
        </p>

        {/* Combined Input & CTA Button */}
        <div className="w-full max-w-lg flex flex-col gap-3 pt-2">
          <div
            className="flex items-center w-full bg-white border border-slate-200/90 rounded-2xl p-1.5 shadow-lg shadow-slate-100 transition-all focus-within:shadow-md"
            style={{
              borderColor: undefined,
            }}
          >
            <div className="flex items-center justify-center pl-3 pr-2 text-slate-400">
              <Globe className="w-5 h-5 stroke-[1.8]" />
            </div>
            <input
              type="text"
              aria-label="app-url"
              placeholder="your-app-url.com or package name"
              className="w-full px-2 py-2.5 bg-transparent text-slate-800 placeholder-slate-400 text-sm font-medium focus:outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-shrink-0 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-xs sm:text-sm font-bold text-white transition-all duration-200 cursor-pointer shadow-md"
              style={{
                backgroundColor: primary_color,
                boxShadow: `0 4px 14px ${primary_color}45`,
              }}
            >
              <span>Get 12 Testers</span>
              <div className="flex h-5 w-5 items-center justify-center rounded-md bg-white/20">
                <ArrowRight size={14} strokeWidth={2.5} />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Bottom Trust Badge */}
        <div className="flex items-center justify-center gap-2 pt-2 text-xs sm:text-sm text-slate-500">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/80 border border-slate-200/60 shadow-xs text-slate-600 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Guaranteed compliance • Real hardware • Pay on day 13</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
