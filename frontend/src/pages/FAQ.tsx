import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { primary_color, FAQS } from "../constant/conts";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="w-full bg-white py-20 px-6 sm:px-12 font-sans border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading & Subtitle */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <span
            className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4"
            style={{
              color: primary_color,
              backgroundColor: `${primary_color}12`,
            }}
          >
            FAQ
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
            Frequently <br />
            asked questions
          </h2>
          <p className="mt-4 text-base text-slate-600 max-w-sm font-normal leading-relaxed">
            Everything you need to know about our Google Play 14-day closed
            testing compliance process.
          </p>
        </div>

        {/* Right Column: Accordion List */}
        <div className="lg:col-span-7 divide-y divide-slate-200 border-t border-b border-slate-200">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.id}
                className="py-6 transition-colors duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-slate-600 transition-colors pr-4">
                    {item.question}
                  </span>

                  <div
                    className="flex-shrink-0 p-1 rounded-full transition-colors"
                    style={{
                      color: isOpen ? primary_color : undefined,
                    }}
                  >
                    {isOpen ? (
                      <Minus className="w-5 h-5 stroke-[2]" />
                    ) : (
                      <Plus className="w-5 h-5 stroke-[2] text-slate-400 group-hover:text-slate-800" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                        {item.answer}
                      </p>
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
