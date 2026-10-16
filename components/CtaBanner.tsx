"use client";

import { motion, useReducedMotion } from "framer-motion";

const whatsappMessage = encodeURIComponent(
  "Olá, Sarah! Quero dar o primeiro passo e saber mais sobre o acompanhamento nutricional.",
);

export default function CtaBanner() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="cta-heading"
      className="scroll-mt-24 overflow-hidden bg-primary text-white"
      id="agendamento"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:flex-row lg:items-center lg:justify-between lg:py-24">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 16 }}
          transition={{ duration: reduceMotion ? 0 : 0.55, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.35 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="text-xs font-semibold tracking-[0.16em] text-white/75 sm:text-sm">
            SEU PRÓXIMO PASSO
          </p>
          <h2
            className="mt-4 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl"
            id="cta-heading"
          >
            Comece a cuidar de você com mais acolhimento e equilíbrio.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
            Dê o primeiro passo para uma relação mais leve com sua saúde e sua
            alimentação.
          </p>
        </motion.div>

        <motion.a
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-primary-dark transition-colors hover:bg-bg-warm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          href={`https://wa.me/?text=${whatsappMessage}`}
          initial={{ opacity: 0, y: 14 }}
          rel="noreferrer"
          target="_blank"
          transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : 0.1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.35 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Agendar pelo WhatsApp
        </motion.a>
      </div>
    </section>
  );
}