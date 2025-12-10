import { motion } from "framer-motion";
import { Globe, Rocket, Cpu, Workflow, Zap, ShieldCheck } from "lucide-react";
import { fadeUpCard, staggerContainer } from "../animations/motion-presets";
import { Service } from "./types";

const services: Service[] = [
  {
    title: "Consultoria e Projeto Personalizado",
    description:
      "Visitamos seu espaço, entendemos suas necessidades e criamos soluções sob medida.",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    title: "Execução com Excelência",
    description:
      "Equipes qualificadas, materiais de primeira linha e cronograma respeitado.",
    icon: <Rocket className="w-8 h-8" />,
  },
  {
    title: "Integração de Sistemas",
    description:
      "Conectamos e integramos diferentes tecnologias para uma solução completa e eficiente.",
    icon: <Cpu className="w-8 h-8" />,
  },
  {
    title: "Acompanhamento Total",
    description:
      "Portal do cliente com fotos diárias, cronograma atualizado e comunicação direta.",
    icon: <Workflow className="w-8 h-8" />,
  },
  {
    title: "Garantia Estendida",
    description:
      "Mínimo 2 anos de garantia, manutenção preventiva e suporte técnico 24/7.",
    icon: <Zap className="w-8 h-8" />,
  },
  {
    title: "Parcerias Confiáveis",
    description:
      "Trabalhos em todo o Brasil com equipes próprias e parceiros homologados e certificados.",
    icon: <ShieldCheck className="w-8 h-8" />,
  },
];

export default function Services() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20"
    >
      {services.map((service) => (
        <motion.article
          key={service.title}
          variants={fadeUpCard}
          className="group relative p-8 rounded-xl bg-linear-to-b from-white/5 to-transparent 
                     backdrop-blur-sm border border-white/10 overflow-hidden
                     hover:border-white/20 transition-all duration-500"
        >
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="relative z-10">
            <div
              className="p-4 w-fit rounded-xl bg-white/10 mb-6 
                          group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300"
            >
              <div className="text-white group-hover:text-white transition-colors">
                {service.icon}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              {service.title}
            </h3>
            <p className="text-white/70 leading-relaxed">
              {service.description}
            </p>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}
