"use client";

import { Globe, Rocket, Cpu, Workflow, Zap, ShieldCheck } from "lucide-react";

export const services = [
  {
    title: "Consultoria e Projeto Personalizado",
    description:
      "Visitamos seu espaço, entendemos suas necessidades e criamos soluções sob medida.",
    icon: <Globe className="w-8 h-8 text-black dark:text-white" />,
  },
  {
    title: "Execução com Excelência",
    description:
      "Equipes qualificadas, materiais de primeira linha e cronograma respeitado.",
    icon: <Rocket className="w-8 h-8 text-black dark:text-white" />,
  },
  {
    title: "Integração de Sistemas",
    description:
      "Conectamos e integramos diferentes tecnologias para uma solução completa e eficiente.",
    icon: <Cpu className="w-8 h-8 text-black dark:text-white" />,
  },
  {
    title: "Acompanhamento Total",
    description:
      "Portal do cliente com fotos diárias, cronograma atualizado e comunicação direta.",
    icon: <Workflow className="w-8 h-8 text-black dark:text-white" />,
  },
  {
    title: "Garantia Estendida",
    description:
      "Mínimo 2 anos de garantia, manutenção preventiva e suporte técnico 24/7.",
    icon: <Zap className="w-8 h-8 text-black dark:text-white" />,
  },
  {
    title: "Parcerias Confiáveis",
    description:
      "Trabalhos em todo o Brasil com equipes próprias e parceiros homologados e certificados.",
    icon: <ShieldCheck className="w-8 h-8 text-black dark:text-white" />,
  },
];

