"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";

export type Testimonial = {
  name: string;
  quote: string;
  context?: string;
};

type TestimonialsProps = {
  items?: Testimonial[];
};

export default function Testimonials({ items = [] }: TestimonialsProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="scroll-mt-24 bg-bg-warm py-20 sm:py-24 lg:py-28"
      id="depoimentos"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 18 }}
          transition={{ duration: reduceMotion ? 0 : 0.55, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.35 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="text-xs font-semibold tracking-[0.16em] text-secondary sm:text-sm">
            EXPERIÊNCIAS DE PACIENTES
          </p>
          <h2
            className="mt-4 font-display text-3xl leading-tight text-text-main sm:text-4xl lg:text-5xl"
            id="testimonials-heading"
          >
            Histórias de cuidado e transformação
          </h2>
        </motion.div>

        {items.length > 0 ? (
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {items.map((item, index) => (
              <motion.article
                className="flex h-full flex-col rounded-2xl border border-text-main/8 bg-white p-6 shadow-[0_12px_36px_-28px_rgba(42,42,42,0.4)] sm:p-7"
                initial={{ opacity: 0, y: 18 }}
                key={`${item.name}-${index}`}
                transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : index * 0.08, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.25 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div aria-label="5 de 5 estrelas" className="flex gap-1 text-[#B98234]">
                  {Array.from({ length: 5 }, (_, starIndex) => (
                    <Star aria-hidden="true" className="fill-current" key={starIndex} size={17} />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 font-display text-lg leading-7 text-text-main sm:text-xl sm:leading-8">
                  “{item.quote}”
                </blockquote>
                <div className="mt-6 border-t border-text-main/10 pt-4">
                  <p className="text-sm font-semibold text-text-main">{item.name}</p>
                  {item.context && (
                    <p className="mt-1 text-xs text-text-muted">{item.context}</p>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-6 text-text-muted">
            Os depoimentos serão publicados nesta seção após validação e
            autorização das pacientes.
          </p>
        )}
      </div>
    </section>
  );
}