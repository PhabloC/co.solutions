"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Services from "./Services";
import TechStack from "./TeachStack";
import { fadeUpTitle } from "../animations/motion-presets";

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Cores roxas sutis para os efeitos de luz (mesmo estilo do hero)
  const purpleGlow = "rgba(139, 92, 246, 0.35)";
  const purpleGlowSecondary = "rgba(168, 85, 247, 0.32)";

  return (
    <section
      ref={ref}
      className="about-section relative py-32 overflow-hidden text-white"
      style={{ backgroundColor: "#000000" }}
    >
      {/* Background gradient effects - efeitos roxos sutis */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ zIndex: 0 }}
      >
        {/* Top-left purple glow */}
        {/* <div
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
          }}
        /> */}
        {/* Bottom-right purple glow */}
        {/*   <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "-150px",
            right: "-150px",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${purpleGlowSecondary} 0%, ${purpleGlowSecondary} 30%, transparent 70%)`,
            filter: "blur(80px)",
          }}
        /> */}
      </div>

      <div
        className="relative max-w-7xl mx-auto px-6 lg:px-8"
        style={{ zIndex: 10 }}
      >
        {/* Textos com animação centralizada */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpTitle}
          className="text-center max-w-4xl mx-auto space-y-8"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white">
            Desenvolvimento digital focado em resultados
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Sou desenvolvedor especializado em criar soluções que realmente
            funcionam. Desenvolvo sites profissionais, landing pages de alta
            conversão, automações inteligentes e integrações com APIs para
            impulsionar seu negócio.
          </p>

          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Trabalho com as tecnologias mais modernas do mercado para entregar
            projetos rápidos, otimizados e que geram resultados mensuráveis.
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
