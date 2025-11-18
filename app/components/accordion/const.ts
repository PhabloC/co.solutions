// Dados puros — fácil de editar, traduzir ou versionar
export const categories = {
  general: "Geral",
  billing: "Faturamento",
  technical: "Suporte Técnico",
  delivery: "Entrega e Prazo",
} as const;

export const faqData = {
  general: [
    {
      question: "Como funciona o serviço?",
      answer:
        "Você agenda uma visita gratuita, recebemos suas necessidades, montamos um projeto sob medida e executamos com qualidade garantida.",
    },
    {
      question: "Vocês trabalham em todo o Brasil?",
      answer:
        "Sim! Atendemos em todos os estados com equipes próprias ou parceiros homologados.",
    },
    {
      question: "Preciso pagar algo no agendamento?",
      answer:
        "Não. O agendamento e o orçamento são 100% gratuitos e sem compromisso.",
    },
  ],
  billing: [
    {
      question: "Quais formas de pagamento vocês aceitam?",
      answer:
        "Aceitamos PIX, boleto, cartão de crédito (até 12x com juros da operadora) e financiamento via bancos parceiros.",
    },
    {
      question: "Vocês parcelam a entrada?",
      answer:
        "Sim! Podemos parcelar a entrada em até 3x no cartão ou negociar condições especiais.",
    },
  ],
  technical: [
    {
      question: "Quanto tempo dura a garantia?",
      answer:
        "Todos os serviços têm garantia mínima de 2 anos, podendo chegar a 10 anos dependendo do material.",
    },
    {
      question: "Vocês fazem manutenção depois da instalação?",
      answer:
        "Sim! Oferecemos contratos de manutenção preventiva e corretiva com visitas programadas.",
    },
  ],
  delivery: [
    {
      question: "Qual o prazo médio de execução?",
      answer:
        "Projetos residenciais: 15 a 45 dias. Projetos comerciais: 30 a 90 dias (dependendo do porte).",
    },
    {
      question: "Posso acompanhar o andamento da obra?",
      answer:
        "Claro! Você recebe acesso a um portal do cliente com fotos diárias, cronograma e chat direto.",
    },
  ],
} as const;
