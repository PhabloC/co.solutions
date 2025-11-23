"use client";

import { Link } from "lucide-react";
import Button from "../../ui/button";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const navItems = [
  { label: "Sobre nós", id: "sobre" },
  { label: "Serviços", id: "servicos" },
  { label: "Processo", id: "processo" },
  { label: "Contato", id: "contato" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition-opacity hover:opacity-90"
              aria-label="Co. Solutions - Página inicial"
            >
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary to-accent flex items-center justify-center shadow-xl"></div>
              <span className="text-2xl font-black text-white tracking-tight">
                Co. Solutions
              </span>
            </Link>

            <p className="mt-8 text-sm text-white/60 leading-relaxed max-w-md">
              Transformamos ideias em soluções digitais de alto impacto. Seu
              próximo projeto começa aqui.
            </p>

            <p className="mt-10 text-xs text-white/40">
              © {new Date().getFullYear()} Co. Solutions. Todos os direitos
              reservados.
            </p>
          </div>

          {/* Navegação + CTA */}
          <div className="lg:col-span-7">
            <div className="flex flex-col items-start gap-10 lg:items-end">
              {/* Links */}
              <nav
                aria-label="Navegação do rodapé"
                className="flex flex-wrap gap-x-10 gap-y-6"
              >
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-base font-medium text-white/90 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-md px-1"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              {/* CTA Principal */}
              <Button
                onClick={() => scrollToSection("contato")}
                variant="glass"
                size="lg"
                className="min-w-[220px] shadow-2xl"
              >
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
