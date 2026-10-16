"use client";

import { motion, useReducedMotion } from "framer-motion";

const stats = [
  { value: "19+ Anos", label: "de Experiência Clínica" },
  { value: "+5.000", label: "Vidas Transformadas" },
  { value: "Método Fênix", label: "Protocolo Exclusivo" },
  { value: "Presencial & On-line", label: "Atendimento Global" },
];

export default function StatsBar() {
  const reduceMotion = useReducedMotion();

  return (
    <section aria-label="Resultados e experiência" className="border-y border-text-main/10 bg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 sm:px-8 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex min-h-28 flex-col justify-center border-text-main/10 px-3 py-5 text-center even:border-l sm:px-6 lg:min-h-32 lg:border-l lg:first:border-l-0"
            initial={{ opacity: 0, y: 12 }}
            key={stat.value}
            transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : index * 0.08, ease: "easeOut" }}
          >
            <p className="font-display text-xl leading-tight text-primary-dark sm:text-2xl">
              {stat.value}
            </p>
            <p className="mt-2 text-xs leading-5 text-text-muted sm:text-sm">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}