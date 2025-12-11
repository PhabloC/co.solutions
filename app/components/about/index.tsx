"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Target, Zap, Users } from "lucide-react";

import { fadeUpTitle } from "../animations/motion-presets";

export default function About() {
  const [ref] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="about-section relative py-32 overflow-hidden text-white"
      style={{ backgroundColor: "#000000" }}
    >
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ zIndex: 0 }}
      ></div>

      <div
        className="relative max-w-7xl mx-auto px-6 lg:px-8"
        style={{ zIndex: 10 }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpTitle}
          className="text-center max-w-4xl mx-auto space-y-8 mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Sobre Nós
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Somos especialistas em soluções digitais que transformam a presença
            online do seu negócio. Desenvolvemos sites de alta performance,
            landing pages otimizadas e automações inteligentes que geram
            resultados reais e mensuráveis.
          </p>

          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            Nossa missão é simplificar o digital para você. Enquanto você foca
            no que faz de melhor, nós cuidamos de toda a parte técnica,
            garantindo que sua marca tenha uma presença online profissional,
            rápida e que realmente converte visitantes em clientes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
