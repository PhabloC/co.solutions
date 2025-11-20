"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { categories, faqData } from "./const";

type CategoryKey = keyof typeof faqData;

export const FAQ = ({ className }: { className?: string }) => {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryKey>("general");

  // Cores roxas sutis para os efeitos de luz (mesmo estilo do hero)
  const purpleGlow = "rgba(139, 92, 246, 0.35)";
  const purpleGlowSecondary = "rgba(168, 85, 247, 0.32)";

  return (
    <section
      className={cn("relative overflow-hidden py-20 md:py-28", className)}
      style={{ backgroundColor: "#000000" }}
    >
      {/* Background gradient effects - efeitos roxos sutis */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        {/* Top-center purple glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-150px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${purpleGlow} 0%, ${purpleGlow} 30%, transparent 70%)`,
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="container relative mx-auto px-4" style={{ zIndex: 10 }}>
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center">
          <span className="mb-6 text-lg font-semibold text-gray-400 md:text-xl">
            Tire suas dúvidas
          </span>
          <h2 className="mb-12 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Perguntas Frequentes
          </h2>
        </div>

        {/* Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 md:gap-4">
          {Object.entries(categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key as CategoryKey)}
              className={cn(
                "relative overflow-hidden rounded-lg border px-5 py-3 text-sm font-medium transition-all duration-500 md:text-base text-white",
                selectedCategory === key
                  ? "border-white/30 bg-white/10 shadow-lg"
                  : "border-white/10 bg-white/5 hover:bg-white/10 hover:text-white"
              )}
            >
              <span className="relative z-10">{label}</span>
              <AnimatePresence>
                {selectedCategory === key && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </AnimatePresence>
            </button>
          ))}
        </div>

        {/* Lista de FAQs */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mx-auto mt-12 max-w-4xl space-y-4"
          >
            {faqData[selectedCategory].map((item, i) => (
              <FAQItem key={i} question={item.question} answer={item.answer} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      className={cn(
        "overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all",
        isOpen && "ring-2 ring-white/20"
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-6 text-left"
      >
        <span className="text-lg font-medium text-white md:text-xl">
          {question}
        </span>
        <motion.div
          animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Plus className="h-6 w-6 text-white" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6">
              <p className="text-gray-300 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
