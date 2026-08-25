import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { primary_color, STEPS } from "../constant/conts";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-24 bg-gradient-to-b from-white via-slate-50/60 to-white text-slate-900 overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Background radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[450px] blur-[160px] pointer-events-none rounded-full opacity-15"
        style={{ backgroundColor: primary_color }}
      />

      <div className="relative max-w-6xl mx-auto flex flex-col items-center">
        {/* Top Process Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider mb-5 shadow-xs"
          style={{
            borderColor: `${primary_color}35`,
            backgroundColor: `${primary_color}10`,
            color: primary_color,
          }}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Simple Process</span>
        </motion.div>

        {/* Section Title & Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 text-center mb-4"
        >
          How It <span style={{ color: primary_color }}>Works</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-slate-600 text-sm sm:text-base text-center max-w-2xl mb-12"
        >
          Our simple process gets your app tested and approved in just a few steps.
        </motion.p>

        {/* 2-Column Horizontal Grid (Side-by-Side Steps) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {STEPS.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group flex flex-col sm:flex-row items-start gap-4 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300"
            >
              {/* Step Number Badge */}
              <div
                className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-xl font-mono text-sm font-bold border transition-colors duration-300"
                style={{
                  borderColor: `${primary_color}30`,
                  backgroundColor: `${primary_color}10`,
                  color: primary_color,
                }}
              >
                {item.step}
              </div>

              {/* Step Text Content */}
              <div className="flex flex-col gap-1.5">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full mt-12 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 flex flex-col items-center text-center gap-3 shadow-lg shadow-slate-200/40"
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Ready to start testing?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md">
            Join hundreds of developers who trust our platform for their compliance needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-3 w-full sm:w-auto">
            <motion.a
              href="/#contact-us"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white shadow-md transition-all cursor-pointer"
              style={{
                backgroundColor: primary_color,
                boxShadow: `0 4px 14px ${primary_color}40`,
              }}
            >
              <span>Start Your Test</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            <motion.a
              href="/#pricing"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 border border-slate-200/80 transition-colors"
            >
              View Pricing
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
