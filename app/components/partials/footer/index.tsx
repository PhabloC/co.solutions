"use client";

import Image from "next/image";
import Link from "next/link";
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
          {/* Coluna da esquerda - Logo + Texto */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="inline-flex  gap-4 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition-opacity hover:opacity-90"
              aria-label="Co. Solutions - Página inicial"
            >
              {/* Logo real */}
              <Image
                src="/logo.png"
                alt="Co. Solutions"
                width={180}
                height={48}
                className="h-10 w-auto object-contain md:h-12"
                priority
              />
            </Link>

            <p className="mt-8 max-w-md text-sm leading-relaxed text-white/60">
              Transformamos ideias em soluções digitais de alto impacto. Seu
              próximo projeto começa aqui.
            </p>

            <p className="mt-10 text-xs text-white/40">
              © {new Date().getFullYear()} Co. Solutions. Todos os direitos
              reservados.
            </p>
          </div>

          {/* Coluna da direita - Navegação + CTA (alinhado à direita no desktop) */}
          <div className="lg:col-span-7">
            <div className="flex flex-col items-start gap-10 lg:items-end">
              {/* Navegação */}
              <nav
                aria-label="Navegação do rodapé"
                className="flex flex-wrap gap-x-10 gap-y-6"
              >
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="rounded-md px-1 text-base font-medium text-white/90 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              {/* Botão CTA */}
              <Button
                onClick={() => scrollToSection("contato")}
                variant="glass"
                size="sm"
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
