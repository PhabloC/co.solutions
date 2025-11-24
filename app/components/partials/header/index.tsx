"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Button from "../../ui/button";
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-white">
              <Image
                src="/logo.png"
                alt="Co. Solutions - Logo"
                width={150}
                height={150}
                className="object-cover"
              />
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-white hover:text-white transition-colors cursor-pointer"
            >
              Sobre nós
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-white hover:text-white transition-colors cursor-pointer"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("processo")}
              className="text-white hover:text-white transition-colors cursor-pointer"
            >
              Processo
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-white hover:text-white transition-colors cursor-pointer"
            >
              Contato
            </button>
            <Button
              onClick={() => scrollToSection("contato")}
              variant="glass"
              size="sm"
            >
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <button
              onClick={() => scrollToSection("sobre")}
              className="block w-full text-left text-white hover:text-white transition-colors py-2"
            >
              Sobre nós
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="block w-full text-left text-white hover:text-white transition-colors py-2"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("processo")}
              className="block w-full text-left text-white hover:text-white transition-colors py-2"
            >
              Processo
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="block w-full text-left text-white hover:text-white transition-colors py-2"
            >
              Contato
            </button>
            <Button
              onClick={() => scrollToSection("contato")}
              variant="glass"
              size="sm"
            >
              Solicitar Orçamento
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
