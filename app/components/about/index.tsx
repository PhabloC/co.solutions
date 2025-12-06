"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Services from "./Services";
import TechStack from "./TeachStack";
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
          className="text-center max-w-4xl mx-auto space-y-8"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Soluções completas focadas em resultados
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Somos especialistas em entregar soluções que transformam seus
            espaços e negócios. Com mais de 15 anos de experiência, realizamos
            projetos residenciais e comerciais com qualidade, transparência e
            prazos respeitados, gerando resultados reais e mensuráveis.
          </p>

          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Trabalhamos com equipes certificadas e materiais de primeira linha
            para entregar projetos rápidos, bem executados e com garantia
            estendida em todo o Brasil.
          </p>
        </motion.div>

        {/* Serviços */}
        <Services />
      </div>
    </section>
  );
}
