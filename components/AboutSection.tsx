"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";

const specialties = [
  "Reequilíbrio Hormonal e Metabólico",
  "Saúde Intestinal & Digestão Funcional",
  "Plano Alimentar Sustentável e sem Restrições Severas",
];

export default function AboutSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section aria-labelledby="about-heading" className="scroll-mt-24 bg-bg-warm py-20 sm:py-24 lg:py-28" id="sobre">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <motion.figure
          className="mx-auto w-full max-w-[29rem]"
          initial={{ opacity: 0, x: -60 }}
          transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl border-4 border-surface/50 bg-surface shadow-xl">
            <Image
              alt="Dra. Sarah Mansur sorrindo em seu consultório de nutrição"
              className={`h-full w-full rounded-3xl object-cover shadow-xl transition-transform duration-500 ${reduceMotion ? "" : "group-hover:scale-105"}`}
              height={800}
              preload
              sizes="(max-width: 1024px) 90vw, 38vw"
              src="/images/sara-sobre.jpg"
              width={600}
            />
          </div>
          <figcaption className="mt-4 flex items-center gap-2 text-xs font-medium text-text-muted">
            <span aria-hidden="true" className="h-px w-8 bg-primary/60" />
            Cuidado nutricional feito para a vida real
          </figcaption>
        </motion.figure>

        <div className="max-w-2xl">
          <motion.p
            className="text-xs font-semibold tracking-[0.16em] text-secondary sm:text-sm"
            initial={{ opacity: 0, x: -60 }}
            transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            SOBRE A NUTRICIONISTA
          </motion.p>
          <motion.h2
            className="mt-4 font-display text-3xl leading-tight text-text-main sm:text-4xl lg:text-[2.75rem]"
            id="about-heading"
            initial={{ opacity: 0, x: -60 }}
            transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            Uma abordagem humanizada, baseada em ciência e respeito ao seu corpo.
          </motion.h2>
          <motion.div
            className="mt-6 space-y-4 text-base leading-7 text-text-muted sm:text-lg sm:leading-8"
            initial={{ opacity: 0, x: -60 }}
            transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <p>
              Há 19 anos, a Dra. Sarah Mansur acompanha mulheres em diferentes
              fases da vida, com atenção especial às mudanças que podem surgir
              depois dos 35.
            </p>
            <p>
              Seu trabalho busca ajudar a desinchar, otimizar a digestão e
              contornar os desafios hormonais com estratégias individualizadas,
              sem dietas punitivas ou restrições severas. O plano considera a
              rotina, a história e os objetivos de cada mulher.
            </p>
          </motion.div>

          <motion.ul
            className="mt-8 space-y-4"
            initial={{ opacity: 0, x: -60 }}
            transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            {specialties.map((specialty) => (
              <li className="flex items-start gap-3 text-sm font-medium leading-6 text-text-main sm:text-base" key={specialty}>
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                  <Check aria-hidden="true" size={15} strokeWidth={2.5} />
                </span>
                {specialty}
              </li>
            ))}
          </motion.ul>
          <motion.a
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark"
            href="#agendamento"
            initial={{ opacity: 0, x: -60 }}
            transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            Agendar Consulta
          </motion.a>
        </div>
      </div>
    </section>
  );
}