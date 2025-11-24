"use client";

import { motion } from "framer-motion";
import { Globe, Rocket, Workflow, Zap, Gauge, Headphones } from "lucide-react";
import type { Service } from "./types";
import { fadeUpCard, staggerContainer } from "../animations/motion-presets";

const services: Service[] = [
  {
    title: "Criação de Sites",
    description:
      "Desenvolvo sites profissionais, responsivos e otimizados para SEO. Design moderno, código limpo e performance de primeira linha para destacar sua marca na internet.",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    title: "Landing Pages",
    description:
      "Páginas de conversão focadas em resultados. Desenvolvidas com as melhores práticas de UX/UI, copy persuasivo e velocidade otimizada para maximizar suas vendas.",
    icon: <Rocket className="w-8 h-8" />,
  },
  {
    title: "Automações",
    description:
      "Automatizo processos do seu negócio: fluxos de vendas, notificações, integrações entre sistemas e muito mais. Economize tempo e aumente sua produtividade.",
    icon: <Zap className="w-8 h-8" />,
  },
  {
    title: "Integrações com APIs",
    description:
      "Conecto seu site com qualquer sistema: pagamentos, WhatsApp, CRM, Google, Meta, ERPs e ferramentas personalizadas. Integrações seguras e confiáveis.",
    icon: <Workflow className="w-8 h-8" />,
  },
  {
    title: "Otimização de Performance",
    description:
      "Sites rápidos e otimizados. Core Web Vitals perfeitos, carregamento abaixo de 1 segundo e experiência de usuário impecável para melhorar seu ranking no Google.",
    icon: <Gauge className="w-8 h-8" />,
  },
  {
    title: "Suporte e Manutenção",
    description:
      "Acompanhamento contínuo dos seus projetos. Atualizações, correções, melhorias e suporte técnico sempre que você precisar.",
    icon: <Headphones className="w-8 h-8" />,
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="relative py-32 overflow-hidden text-white"
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
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            O que oferecemos
          </h2>
          <p className="mt-6 text-xl text-gray-300">
            Soluções digitais completas para transformar sua presença online e
            gerar mais resultados.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={fadeUpCard}
              className="group relative p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden
                         hover:border-white/20 hover:scale-[1.02] transition-all duration-500"
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                <div
                  className="p-4 w-fit rounded-lg bg-white/10 mb-6 
                                group-hover:bg-white/20 
                                group-hover:scale-110 transition-all duration-300"
                >
                  <div className="text-white group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
