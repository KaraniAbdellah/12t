import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, ArrowRight, ShieldCheck, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { primary_color } from "../constant/conts";
import { sendContactEmail } from "../services/send_email";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function Hero() {
  const [appInput, setAppInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!appInput.trim()) {
      toast.error("Please enter your email.");
      return;
    }

    setIsSubmitting(true);
    try {
      // Sending test lead data using your sendContactEmail service
      await sendContactEmail(
        "Hero Quick Lead",
        appInput.includes("@") ? appInput : "lead-via-hero@12t.app",
        `New request from Hero input: ${appInput}`
      );

      toast.success("Request received! We'll start setting up your 12 testers.");
      setAppInput("");
    } catch (err: any) {
      console.error("EmailJS error:", err?.text || err);
      toast.error("Failed to submit request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            Used by <strong className="text-zinc-900">hundreds</strong> of app developers
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
          After 12 Days{" "}
        </h1>

        {/* Subtitle Description */}
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
          Real devices. Daily testing. Actionable feedback. Pay only after 13
          days, keep 1 day to submit with full confidence.
        </p>

        {/* Combined Input & CTA Form */}
        <div className="w-full max-w-lg flex flex-col gap-3 pt-2">
          <form
            onSubmit={handleSubmit}
            className="flex items-center w-full bg-white border border-slate-200/90 rounded-2xl p-1.5 shadow-lg shadow-slate-100 transition-all focus-within:shadow-md"
          >
            <div className="flex items-center justify-center pl-3 pr-2 text-slate-400">
              <Globe className="w-5 h-5 stroke-[1.8]" />
            </div>

            <input
              type="text"
              aria-label="app-url"
              value={appInput}
              onChange={(e) => setAppInput(e.target.value)}
              placeholder="your email here"
              className="w-full px-2 py-2.5 bg-transparent text-slate-800 placeholder-slate-400 text-sm font-medium focus:outline-none"
            />

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className="flex-shrink-0 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-xs sm:text-sm font-bold text-white transition-all duration-200 cursor-pointer shadow-md disabled:opacity-70"
              style={{
                backgroundColor: primary_color,
                boxShadow: `0 4px 14px ${primary_color}45`,
              }}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <span>Get 12 Testers</span>
                  <div className="flex h-5 w-5 items-center justify-center rounded-md bg-white/20">
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </div>
                </>
              )}
            </motion.button>
          </form>
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
