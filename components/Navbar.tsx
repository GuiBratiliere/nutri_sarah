"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Método Fênix", href: "#metodo-fenix" },
  { label: "Atendimentos", href: "#atendimentos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-text-main/10 bg-bg-warm/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          aria-label="Sarah Mansur, página inicial"
          className="flex flex-col leading-none"
          href="/"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="font-display text-xl text-text-main sm:text-2xl">
            SARAH MANSUR
          </span>
          <span className="mt-1 text-[0.62rem] font-semibold tracking-[0.16em] text-secondary">
            NUTRICIONISTA
          </span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              className="text-sm font-medium text-text-muted transition-colors hover:text-primary-dark"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
          <a
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            href="#agendamento"
          >
            Agendar Consulta
          </a>
        </nav>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          className="flex size-11 items-center justify-center rounded-full text-text-main transition-colors hover:bg-surface lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          type="button"
        >
          {isMenuOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav
          aria-label="Navegação móvel"
          className="absolute inset-x-0 top-full min-h-[calc(100svh-5rem)] overflow-y-auto border-t border-text-main/10 bg-bg-warm px-5 pb-6 pt-3 shadow-lg lg:hidden"
          id="mobile-navigation"
        >
          <ul className="mx-auto flex max-w-7xl flex-col">
            {links.map((link) => (
              <li key={link.href} className="border-b border-text-main/10">
                <a
                  className="block py-3 text-sm font-medium text-text-main"
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-5">
              <a
                className="block rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                href="#agendamento"
                onClick={() => setIsMenuOpen(false)}
              >
                Agendar Consulta
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}