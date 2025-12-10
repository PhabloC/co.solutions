"use client";

import { Globe, Rocket, Cpu, Workflow, Zap, ShieldCheck } from "lucide-react";

export const services = [
  {
    title: "Criação de Sites",
    description:
      "Desenvolvo sites profissionais, responsivos e otimizados para SEO. Design moderno, código limpo e performance de primeira linha para destacar sua marca na internet.",
    icon: <Globe className="w-8 h-8 text-black dark:text-white" />,
  },
  {
    title: "Landing Pages",
    description:
      "Páginas de conversão focadas em resultados. Desenvolvidas com as melhores práticas de UX/UI, copy persuasivo e velocidade otimizada para maximizar suas vendas.",
    icon: <Rocket className="w-8 h-8 text-black dark:text-white" />,
  },
  {
    title: "Automações",
    description:
      "Automatizo processos do seu negócio: fluxos de vendas, notificações, integrações entre sistemas e muito mais. Economize tempo e aumente sua produtividade.",
    icon: <Cpu className="w-8 h-8 text-black dark:text-white" />,
  },
  {
    title: "Integrações com APIs",
    description:
      "Conecto seu site com qualquer sistema: pagamentos, WhatsApp, CRM, Google, Meta, ERPs e ferramentas personalizadas. Integrações seguras e confiáveis.",
    icon: <Workflow className="w-8 h-8 text-black dark:text-white" />,
  },
  {
    title: "Otimização de Performance",
    description:
      "Sites rápidos e otimizados. Core Web Vitals perfeitos, carregamento abaixo de 1 segundo e experiência de usuário impecável para melhorar seu ranking no Google.",
    icon: <Zap className="w-8 h-8 text-black dark:text-white" />,
  },
  {
    title: "Suporte e Manutenção",
    description:
      "Acompanhamento contínuo dos seus projetos. Atualizações, correções, melhorias e suporte técnico sempre que você precisar.",
    icon: <ShieldCheck className="w-8 h-8 text-black dark:text-white" />,
  },
];

