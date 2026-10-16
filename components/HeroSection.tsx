"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { UserRound } from "lucide-react";

const whatsappMessage = encodeURIComponent(
  "Olá, Sarah! Gostaria de agendar uma consulta.",
);

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  const entrance = { opacity: 0, y: 20 };

  return (
    <section className="overflow-hidden bg-bg-warm">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-14 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-16">
        <div className="flex flex-col items-start">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={entrance}
            transition={{ duration: reduceMotion ? 0 : 0.55, ease: "easeOut" }}
          >
            <span className="inline-flex rounded-full border border-secondary/25 bg-secondary/10 px-4 py-2 text-xs font-semibold text-secondary sm:text-sm">
              Nutrição Feminina &amp; Saúde da Mulher
            </span>
          </motion.div>

          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="mt-7 max-w-2xl font-display text-4xl leading-[1.12] text-text-main sm:text-5xl xl:text-[3.65rem]"
            initial={entrance}
            transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.08, ease: "easeOut" }}
          >
            Recupere o equilíbrio hormonal, desinflame e sinta-se bem no próprio
            corpo.
          </motion.h1>

          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 max-w-xl text-base leading-7 text-text-muted sm:text-lg sm:leading-8"
            initial={entrance}
            transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.16, ease: "easeOut" }}
          >
            Especialista em saúde de mulheres 35+. Há 19 anos ajudando a
            transformar corpos e vidas através de estratégias anti-inflamatórias
            e regulação metabólica.
          </motion.p>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
            initial={entrance}
            transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.24, ease: "easeOut" }}
          >
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark"
              href={`https://wa.me/?text=${whatsappMessage}`}
              rel="noreferrer"
              target="_blank"
            >
              Agendar Consulta
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-secondary/40 px-7 py-3 text-sm font-semibold text-secondary transition-colors hover:border-secondary hover:bg-secondary/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
              href="#metodo-fenix"
            >
              Conhecer Método Fênix 🐦‍🔥
            </a>
          </motion.div>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mt-9 flex items-center gap-4"
            initial={entrance}
            transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.32, ease: "easeOut" }}
          >
            <div aria-hidden="true" className="flex -space-x-3">
              {["bg-[#D8B8A7]", "bg-[#B88973]", "bg-[#E4CFC0]", "bg-[#9E7868]"].map(
                (color, index) => (
                  <span
                    className={`flex size-10 items-center justify-center rounded-full border-2 border-bg-warm ${color}`}
                    key={index}
                  >
                    <UserRound className="text-white" size={17} strokeWidth={2.2} />
                  </span>
                ),
              )}
            </div>
            <p className="text-sm font-semibold text-text-main sm:text-base">
              +5.000 mulheres transformadas
            </p>
          </motion.div>
        </div>

        <motion.div
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="mx-auto w-full max-w-[33rem]"
          initial={{ opacity: 0, scale: 0.98, y: 16 }}
          transition={{ duration: reduceMotion ? 0 : 0.75, delay: reduceMotion ? 0 : 0.12, ease: "easeOut" }}
        >
          <div className="rounded-3xl border border-white/70 bg-surface p-3 shadow-[0_24px_70px_-34px_rgba(42,42,42,0.35)] sm:p-4">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-surface">
              <Image
                alt="Dra. Sarah Mansur sorrindo em seu consultório de nutrição"
                className={`object-cover object-center transition-transform duration-500 ${reduceMotion ? "" : "group-hover:scale-105"}`}
                fill
                preload
                sizes="(max-width: 1024px) 90vw, 42vw"
                src="/images/sara-sobre.jpg"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}