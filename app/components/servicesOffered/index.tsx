import { cn } from "@/lib/utils";
import { Globe, Rocket, Workflow, Zap, Gauge, Headphones } from "lucide-react";
import type { Service } from "./types";

const services: Service[] = [
  {
    title: "Criação de sites profissionais",
    description:
      "Sites modernos, responsivos e otimizados para SEO, com design único e alinhado à sua marca.",
    icon: <Globe className="h-8 w-8" />,
  },
  {
    title: "Landings de alta conversão",
    description:
      "Páginas focadas em resultados, com copy persuasivo e carregamento ultra-rápido.",
    icon: <Rocket className="h-8 w-8" />,
  },
  {
    title: "Integração com APIs externas",
    description:
      "Conectamos seu site com pagamentos, WhatsApp, CRM, Google, Meta e qualquer ferramenta.",
    icon: <Workflow className="h-8 w-8" />,
  },
  {
    title: "Automação e CRM",
    description:
      "Fluxos automáticos, funis de vendas e gestão de clientes no piloto automático.",
    icon: <Zap className="h-8 w-8" />,
  },
  {
    title: "Otimização de desempenho",
    description:
      "Core Web Vitals perfeitos, lazy loading e velocidade abaixo de 1 segundo.",
    icon: <Gauge className="h-8 w-8" />,
  },
  {
    title: "Acessoria contínua",
    description:
      "Suporte prioritário, atualizações mensais e consultoria estratégica sempre que precisar.",
    icon: <Headphones className="h-8 w-8" />,
  },
];

export default function Services({ className }: { className?: string }) {
  return (
    <section className={cn("py-24", className)}>
      <div className="container mx-auto px-4 text-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Serviços que entregam{" "}
            <span className="text-primary">resultados reais</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para alavancar seu negócio na internet.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={cn(
                "group relative overflow-hidden rounded-3xl border border-border bg-card/70 p-8 backdrop-blur-sm",
                "transition-all duration-500 hover:scale-[1.02] hover:border-primary/40 hover:shadow-2xl",
                index % 2 === 1 && "md:translate-y-8"
              )}
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
