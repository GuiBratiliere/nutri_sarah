"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Activity, Droplets, Leaf, Scale } from "lucide-react";

const pillars = [
  {
    title: "Desinflamação Profunda",
    description:
      "Estratégias nutricionais para reduzir o inchaço e a retenção de líquidos, respeitando as necessidades do seu corpo.",
    Icon: Droplets,
  },
  {
    title: "Regulação Intestinal & Digestão",
    description:
      "Cuidado com a saúde intestinal para apoiar o equilíbrio da microbiota, a digestão e a absorção de nutrientes.",
    Icon: Leaf,
  },
  {
    title: "Reequilíbrio Hormonal 35+ / 40+",
    description:
      "Acompanhamento dos desafios hormonais dessa fase, com foco em energia, sono e controle metabólico.",
    Icon: Activity,
  },
  {
    title: "Emagrecimento Definitivo",
    description:
      "Um processo sustentável para emagrecer com saúde, construir consistência e evitar o efeito sanfona.",
    Icon: Scale,
  },
];

export default function FenixMethod() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="fenix-heading"
      className="scroll-mt-24 bg-surface py-20 sm:py-24 lg:py-28"
      id="metodo-fenix"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 18 }}
          transition={{ duration: reduceMotion ? 0 : 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.35 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <span className="inline-flex rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-[0.65rem] font-semibold tracking-[0.15em] text-primary-dark sm:text-xs">
            METODOLOGIA AUTORAL
          </span>
          <h2
            className="mt-5 font-display text-4xl leading-tight text-text-main sm:text-5xl"
            id="fenix-heading"
          >
            O Método Fênix 🐦‍🔥
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-text-muted sm:text-lg sm:leading-8">
            Quatro frentes integradas para apoiar uma relação mais equilibrada
            com o corpo, a alimentação e a saúde da mulher.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {pillars.map(({ title, description, Icon }, index) => (
            <motion.article
              className="group min-h-64 rounded-2xl border border-text-main/8 bg-bg-warm p-6 shadow-[0_8px_30px_-24px_rgba(42,42,42,0.35)] transition-shadow duration-300 hover:shadow-[0_18px_38px_-26px_rgba(42,42,42,0.35)] sm:p-7"
              initial={{ opacity: 0, y: 18 }}
              key={title}
              transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : index * 0.08, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.25 }}
              whileHover={reduceMotion ? undefined : { y: -5 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-white">
                <Icon aria-hidden="true" size={23} strokeWidth={1.8} />
              </span>
              <h3 className="mt-6 font-display text-xl leading-snug text-text-main sm:text-2xl">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-text-muted sm:text-base sm:leading-7">
                {description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}