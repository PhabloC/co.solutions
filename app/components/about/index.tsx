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
            Desenvolvimento digital focado em resultados
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Nós somos especialistas em criar soluções digitais que realmente
            entregam resultados. Desenvolvemos sites profissionais, landing
            pages de alta conversão, automações inteligentes e integrações
            completas com APIs para acelerar o crescimento do seu negócio.
          </p>

          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Trabalhamos com as tecnologias mais modernas do mercado para
            entregar projetos rápidos, altamente otimizados e que geram
            resultados reais e mensuráveis.
          </p>
        </motion.div>

        {/* Serviços */}
        <Services />

        {/* Tecnologias */}
        <div className="mt-32">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
            Tecnologias que utilizo
          </h3>
          <p className="text-center text-gray-400 text-lg mb-12">
            Sempre trabalhando com as tecnologias mais modernas e eficientes do
            mercado
          </p>
          <TechStack />
        </div>
      </div>
    </section>
  );
}
