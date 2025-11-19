"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Services from "./Services";
import TechStack from "./TeachStack";

gsap.registerPlugin(ScrollTrigger);

const titleAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      gsap.to(".about-bg", {
        backgroundPosition: "50% 100%",
        duration: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".about-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className="about-section relative py-32 overflow-hidden bg-black text-white"
    >
      {/* Background gradiente animado */}
      <div
        className="about-bg absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 30% 70%, #a855f7 0%, transparent 50%), radial-gradient(circle at 80% 20%, #ec4899 0%, transparent 50%)",
          backgroundSize: "200% 200%",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h2
            variants={titleAnimation}
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent 
                       bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400"
          >
            Nós criamos experiências digitais que vendem
          </motion.h2>

          <motion.p
            variants={titleAnimation}
            className="mt-8 text-xl md:text-2xl text-white/80 leading-relaxed"
          >
            Somos uma agência digital especializada em performance.
            Transformamos ideias em produtos digitais de alta conversão usando
            as tecnologias mais modernas do mercado.
          </motion.p>

          <motion.p
            variants={titleAnimation}
            className="mt-6 text-lg text-white/60 max-w-3xl mx-auto"
          >
            Atuamos de ponta a ponta: estratégia → design → desenvolvimento →
            automação → crescimento contínuo.
          </motion.p>
        </motion.div>

        {/* Serviços */}
        <Services />

        {/* Tecnologias */}
        <div className="mt-32">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Tecnologias que dominamos
          </h3>
          <p className="text-center text-white/60 text-lg mb-12">
            Sempre atualizados com o que há de mais avançado no mercado
          </p>
          <TechStack />
        </div>
      </div>
    </section>
  );
}
