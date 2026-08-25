import { motion } from "framer-motion";
import { Check, Sparkles, ShieldCheck } from "lucide-react";
import { primary_color } from "../constant/conts";

const COMMON_FEATURES = [
  "12 testers using real physical devices",
  "Daily app testing & screen interaction",
  "Actionable bug & crash reports",
  "PDF answering Google Play questionnaire",
  "Diverse hardware (Samsung, Xiaomi, Huawei...)",
  "No payment until Day 13",
  "1 remaining day for final submission",
];

const PLANS = [
  {
    title: "Student",
    price: "$2",
    description: "Best for indie student developers and personal projects",
    popular: false,
    cta: "Choose Student",
    features: COMMON_FEATURES,
  },
  {
    title: "Professional",
    price: "$5",
    description: "Designed for solo developers and growing apps",
    popular: true,
    cta: "Choose Professional",
    features: COMMON_FEATURES,
  },
  {
    title: "Company",
    price: "$10",
    description: "Built for agencies, studios, and business applications",
    popular: false,
    cta: "Choose Company",
    features: COMMON_FEATURES,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center font-sans overflow-hidden"
    >
      {/* Background radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] blur-[160px] pointer-events-none rounded-full opacity-10"
        style={{ backgroundColor: primary_color }}
      />

      <div className="relative">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold tracking-widest uppercase shadow-xs"
          style={{
            borderColor: `${primary_color}35`,
            backgroundColor: `${primary_color}10`,
            color: primary_color,
          }}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Pricing</span>
        </motion.div>

        {/* Section Heading & Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4"
        >
          Choose the plan that fits your needs.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-16"
        >
          Full 14-day closed testing compliance with real devices and zero upfront risk. Pay only after 13 days of verified engagement.
        </motion.p>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch text-left">
          {PLANS.map((plan, index) => {
            const isPopular = plan.popular;

            return (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                whileHover={{ y: isPopular ? -18 : -6 }}
                className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                  isPopular
                    ? "text-white shadow-2xl md:-translate-y-3"
                    : "bg-white text-slate-900 border border-slate-200/90 shadow-lg shadow-slate-200/40 hover:border-slate-300"
                }`}
                style={
                  isPopular
                    ? {
                        backgroundColor: primary_color,
                        boxShadow: `0 20px 35px -10px ${primary_color}55`,
                      }
                    : undefined
                }
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md"
                    style={{ color: primary_color }}
                  >
                    Most Popular
                  </div>
                )}

                <div>
                  <h3
                    className={`text-2xl font-extrabold ${
                      isPopular ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {plan.title}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm mt-1 leading-relaxed ${
                      isPopular ? "text-white/85" : "text-slate-500"
                    }`}
                  >
                    {plan.description}
                  </p>

                  {/* Price Tag */}
                  <div className="mt-6 mb-8 flex items-baseline gap-1.5">
                    <span className="text-4xl sm:text-5xl font-black tracking-tight">
                      {plan.price}
                    </span>
                    <span
                      className={`text-xs sm:text-sm font-medium ${
                        isPopular ? "text-white/80" : "text-slate-500"
                      }`}
                    >
                      / 14-day test
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3.5 text-xs sm:text-sm">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <div
                          className={`mt-0.5 flex-shrink-0 flex items-center justify-center w-4 h-4 rounded-full ${
                            isPopular
                              ? "bg-white/20 text-white"
                              : "text-blue-600 bg-blue-50"
                          }`}
                          style={
                            !isPopular
                              ? {
                                  color: primary_color,
                                  backgroundColor: `${primary_color}18`,
                                }
                              : undefined
                          }
                        >
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span
                          className={`leading-snug ${
                            isPopular ? "text-white/95" : "text-slate-700"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <motion.a
                  href="/#contact-us"
                  whileTap={{ scale: 0.98 }}
                  className={`mt-8 w-full py-3.5 rounded-2xl text-center text-sm font-bold transition-all cursor-pointer shadow-xs ${
                    isPopular
                      ? "bg-white hover:bg-slate-50 shadow-md"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200/80"
                  }`}
                  style={isPopular ? { color: primary_color } : undefined}
                >
                  {plan.cta}
                </motion.a>
              </motion.div>
            );
          })}
        </div>

        {/* Payment Methods & Guarantee Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-14 inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 px-6 py-3 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-600 font-medium"
        >
          <div className="flex items-center gap-1.5 text-emerald-600 font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Pay on Day 13 only if satisfied</span>
          </div>
          <span className="hidden sm:inline text-slate-300">•</span>
          <div className="flex items-center gap-2">
            <span>Accepted Payments:</span>
            <span className="font-semibold text-slate-800">PayPal</span>
            <span>•</span>
            <span className="font-semibold text-slate-800">Credit Card</span>
            <span>•</span>
            <span className="font-semibold text-slate-800">Cash</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
