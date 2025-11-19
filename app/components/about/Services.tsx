import { motion } from "framer-motion";
import { Globe, Rocket, Cpu, Workflow, Zap, ShieldCheck } from "lucide-react";
import type { Service } from "./types";

const services: Service[] = [
  {
    title: "Criação de Sites Profissionais",
    description:
      "Sites institucionais modernos, rápidos e totalmente responsivos.",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    title: "Landings de Alta Conversão",
    description:
      "Páginas focadas em resultados com design estratégico e copy persuasivo.",
    icon: <Rocket className="w-8 h-8" />,
  },
  {
    title: "Integração com APIs Externas",
    description:
      "Conectamos seu projeto com qualquer serviço: pagamentos, ERPs, WhatsApp, etc.",
    icon: <Cpu className="w-8 h-8" />,
  },
  {
    title: "Automação & CRM",
    description:
      "Fluxos automáticos de vendas, nutrição de leads e gestão completa.",
    icon: <Workflow className="w-8 h-8" />,
  },
  {
    title: "Otimização de Desempenho",
    description:
      "Core Web Vitals 100+, LCP < 1s, lazy loading, imagens otimizadas.",
    icon: <Zap className="w-8 h-8" />,
  },
  {
    title: "Acessoria Contínua",
    description:
      "Suporte mensal, atualizações e evolução constante do seu projeto.",
    icon: <ShieldCheck className="w-8 h-8" />,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const card = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export default function Services() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20"
    >
      {services.map((service) => (
        <motion.article
          key={service.title}
          variants={card}
          className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent 
                     backdrop-blur-sm border border-white/10 overflow-hidden
                     hover:border-white/20 transition-all duration-500"
        >
          <div
            className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          />

          <div className="relative z-10">
            <div
              className="p-4 w-fit rounded-2xl bg-white/10 mb-6 
                          group-hover:scale-110 transition-transform duration-300"
            >
              <div className="text-purple-400">{service.icon}</div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              {service.title}
            </h3>
            56{" "}
            <p className="text-white/70 leading-relaxed">
              {service.description}
            </p>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}
