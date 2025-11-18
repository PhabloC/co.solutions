"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { categories, faqData } from "./const";

// Tipo derivado automaticamente dos dados reais
type CategoryKey = keyof typeof faqData;

export const FAQ = ({ className }: { className?: string }) => {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryKey>("general");

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-background py-20 md:py-28",
        className
      )}
    >
      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <span className="mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-lg font-semibold text-transparent md:text-xl">
            Tire suas dúvidas
          </span>
          <h2 className="mb-12 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Perguntas Frequentes
          </h2>
          <div className="absolute -top-48 left-1/2 h-96 w-full max-w-4xl -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 blur-3xl" />
        </div>

        {/* Tabs */}
        <div className="relative z-10 mt-12 flex flex-wrap justify-center gap-3 md:gap-4">
          {Object.entries(categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key as CategoryKey)}
              className={cn(
                "relative overflow-hidden rounded-lg border px-5 py-3 text-sm font-medium transition-all duration-500 md:text-base",
                selectedCategory === key
                  ? "border-primary text-white shadow-lg"
                  : "border-border bg-background/50 text-muted-foreground hover:text-foreground"
              )}
            >
              <span className="relative z-10">{label}</span>
              <AnimatePresence>
                {selectedCategory === key && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"
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

// Componente individual (mantido aqui por ser pequeno e coeso)
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
        "overflow-hidden rounded-xl border bg-card transition-all",
        isOpen && "ring-2 ring-primary/20"
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-6 text-left"
      >
        <span
          className={cn(
            "text-lg font-medium md:text-xl",
            isOpen ? "text-foreground" : "text-muted-foreground"
          )}
        >
          {question}
        </span>
        <motion.div
          animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Plus className="h-6 w-6 text-primary" />
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
              <p className="text-muted-foreground leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
