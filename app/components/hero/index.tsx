"use client";

import { motion } from "framer-motion";
import { fadeUpTitle, fadeUpStagger } from "@/app/components/animations";
import Button from "../ui/button";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

// Conteúdo fixo do hero
const heroContent = {
  announcement: {
    text: "🎉 New feature release! Check out our ",
    linkText: "AI Assistant",
    linkHref: "#",
  },
  title: "Sites de alta conversão que elevam seu negócio",
  description: "Você foca no seu negócio. Nós cuidamos do online",
};

export default function Hero() {
  // Cores roxas sutis para os efeitos de luz
  const purpleGlow = "rgba(139, 92, 246, 0.35)"; // Roxo principal sutil
  const purpleGlowSecondary = "rgba(168, 85, 247, 0.32)"; // Roxo alternativo sutil

  const renderCallToAction = (
    cta: { text: string; href: string; variant: "primary" | "secondary" },
    index: number
  ) => {
    if (cta.variant === "primary") {
      return (
        <motion.a
          key={index}
          href={cta.href}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
          className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-black shadow-sm hover:bg-gray-50 transition-all duration-200"
        >
          {cta.text}
        </motion.a>
      );
    } else {
      return (
        <motion.a
          key={index}
          href={cta.href}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-transparent px-6 py-3 text-base font-semibold text-white hover:border-white/40 hover:bg-white/5 transition-all duration-200"
        >
          {cta.text}
          <span aria-hidden="true">→</span>
        </motion.a>
      );
    }
  };

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: "#000000" }}
    >
      {/* Background gradient effects - efeitos roxos sutis e difusos */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ zIndex: 0 }}
      >
        {/* Top-left purple glow - canto superior esquerdo */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-150px",
            left: "-150px",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${purpleGlow} 0%, ${purpleGlow} 30%, transparent 70%)`,
            filter: "blur(80px)",
            willChange: "transform",
          }}
        />

        {/* Top-right purple glow - canto superior direito */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-150px",
            right: "-150px",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${purpleGlowSecondary} 0%, ${purpleGlowSecondary} 30%, transparent 70%)`,
            filter: "blur(80px)",
            willChange: "transform",
          }}
        />

        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "-150px",
            right: "-150px",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${purpleGlow} 0%, ${purpleGlow} 30%, transparent 70%)`,
            filter: "blur(80px)",
            willChange: "transform",
          }}
        />
      </div>

      {/* Main content */}
      <div
        className="relative w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-24 lg:py-32"
        style={{ zIndex: 10 }}
      >
        <div className="mx-auto  text-center">
          {/* Announcement banner */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-10 flex justify-center"
          >
            <div className="inline-flex items-center gap-1 rounded-lg bg-gray-900/50 border border-gray-800 px-4 py-2 text-sm text-gray-300">
              <span>{heroContent.announcement.text}</span>
              <a
                href={heroContent.announcement.linkHref}
                className="font-semibold text-white hover:text-gray-200 transition-colors"
              >
                {heroContent.announcement.linkText}
              </a>
              <span className="ml-1">→</span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUpTitle}
            initial="hidden"
            animate="visible"
            className="text-5xl sm:text-5xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 sm:mb-8 leading-tight whitespace-pre-line"
          >
            {heroContent.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUpStagger}
            initial="hidden"
            animate="show"
            className="text-lg sm:text-xl text-gray-400 text-pretty max-w-3xl mx-auto leading-relaxed mb-10 sm:mb-12"
          >
            {heroContent.description}
          </motion.p>

          <div>
            <Button
              onClick={() => scrollToSection("contato")}
              variant="glass"
              size="lg"
              className="min-w-[220px] shadow-2xl"
            >
              Entrar em Contato
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
