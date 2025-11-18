import { Link } from "lucide-react";
import { FooterProps } from "./types";

export default function Footer({
  logo,
  brandName,
  mainLinks = [],
  legalLinks = [],
  copyright,
}: FooterProps) {
  return (
    <footer className=" bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Logo + Copyright */}
          <div className="flex flex-col lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors hover:text-primary"
              aria-label={`Voltar para a página inicial da ${brandName}`}
            >
              {logo}
              <span className="text-xl font-bold tracking-tight">
                {brandName}
              </span>
            </Link>

            <div className="mt-8 text-sm text-muted-foreground lg:mt-12">
              <p>{copyright?.text ?? "© Todos os direitos reservados."}</p>
              {copyright?.license && (
                <p className="mt-1">{copyright.license}</p>
              )}
            </div>
          </div>

          {/* Navegação */}
          <div className="lg:col-span-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:justify-end lg:gap-16">
              {/* Links principais */}
              <nav aria-label="Navegação principal">
                <ul className="flex flex-wrap gap-x-8 gap-y-4">
                  {mainLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Links legais */}
              <nav aria-label="Links legais">
                <ul className="flex flex-wrap gap-x-8 gap-y-4">
                  {legalLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
