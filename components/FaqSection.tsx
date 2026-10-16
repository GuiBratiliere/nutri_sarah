"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const questions = [
  {
    question: "Como funciona a consulta On-line?",
    answer:
      "A consulta acontece por videochamada, com avaliação individual e orientações personalizadas. Após o agendamento, você recebe as informações para se preparar para o atendimento.",
  },
  {
    question: "Para quem é indicado o Método Fênix?",
    answer:
      "Para mulheres que buscam cuidar da saúde de forma individualizada, especialmente diante de questões como inchaço, digestão, mudanças hormonais e objetivos de emagrecimento.",
  },
  {
    question: "A consulta atende planos de saúde ou convênio?",
    answer:
      "O atendimento é particular. Emitimos nota fiscal para que você possa solicitar reembolso ao plano, conforme as regras e a cobertura do seu convênio.",
  },
  {
    question: "Como faço para agendar meu horário?",
    answer:
      "Use um dos botões de agendamento do site para iniciar uma conversa pelo WhatsApp. A equipe confirma a disponibilidade e orienta os próximos passos.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="faq-heading"
      className="scroll-mt-24 bg-surface py-20 sm:py-24 lg:py-28"
      id="faq"
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <motion.div
          className="mb-9 text-center sm:mb-12"
          initial={{ opacity: 0, y: 16 }}
          transition={{ duration: reduceMotion ? 0 : 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.35 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="text-xs font-semibold tracking-[0.16em] text-secondary sm:text-sm">
            DÚVIDAS FREQUENTES
          </p>
          <h2
            className="mt-4 font-display text-3xl leading-tight text-text-main sm:text-4xl"
            id="faq-heading"
          >
            Perguntas frequentes
          </h2>
        </motion.div>

        <div className="divide-y divide-text-main/10 border-y border-text-main/10">
          {questions.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div className="py-1" key={question}>
                <h3>
                  <button
                    aria-controls={answerId}
                    aria-expanded={isOpen}
                    className="flex min-h-16 w-full items-center justify-between gap-5 py-4 text-left text-base font-semibold text-text-main sm:text-lg"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    type="button"
                  >
                    <span>{question}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      className="flex size-9 shrink-0 items-center justify-center rounded-full bg-bg-warm text-secondary"
                      transition={{ duration: reduceMotion ? 0 : 0.2 }}
                    >
                      <ChevronDown aria-hidden="true" size={19} />
                    </motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      animate={{ height: "auto", opacity: 1 }}
                      className="overflow-hidden"
                      exit={{ height: 0, opacity: 0 }}
                      id={answerId}
                      initial={{ height: 0, opacity: 0 }}
                      transition={{ duration: reduceMotion ? 0 : 0.25, ease: "easeInOut" }}
                    >
                      <p className="max-w-3xl pb-5 pr-10 text-sm leading-7 text-text-muted sm:text-base">
                        {answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}