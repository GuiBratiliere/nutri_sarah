"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Building2, HeartPulse, Sparkles, UsersRound, Video } from "lucide-react";

const consultationOptions = [
  {
    title: "Consulta Presencial",
    eyebrow: "NO CONSULTÓRIO",
    description:
      "Experiência completa com bioimpedância, avaliação presencial detalhada e atendimento acolhedor.",
    indication: "Quem busca o acompanhamento físico no consultório.",
    action: "Agendar Presencial",
    message:
      "Olá, Sarah! Gostaria de agendar uma consulta presencial. Pode me passar as informações?",
    Icon: Building2,
    featured: true,
  },
  {
    title: "Consulta On-line",
    eyebrow: "BRASIL E EXTERIOR",
    description:
      "O mesmo rigor e personalização do atendimento presencial, no conforto da sua casa, disponível para todo o Brasil e exterior.",
    indication: "Quem precisa de praticidade e flexibilidade de horários.",
    action: "Agendar On-line",
    message:
      "Olá, Sarah! Gostaria de agendar uma consulta on-line. Pode me passar as informações?",
    Icon: Video,
    featured: false,
  },
];

const programs = [
  {
    title: "Protocolo MAIS SLIM",
    description:
      "Acompanhamento acelerado com foco em desinchar e avançar no processo de perda de peso.",
    action: "Conhecer o MAIS SLIM",
    message:
      "Olá, Sarah! Quero saber mais sobre o Protocolo MAIS SLIM.",
    Icon: Sparkles,
  },
  {
    title: "Jornada 40+ Mulher",
    description:
      "Uma jornada voltada à saúde hormonal, ao bem-estar e à vitalidade na maturidade.",
    action: "Conhecer a Jornada 40+",
    message:
      "Olá, Sarah! Quero saber mais sobre a Jornada 40+ Mulher.",
    Icon: HeartPulse,
  },
  {
    title: "Comunidade VIP",
    description:
      "Grupo no WhatsApp com desafios gratuitos, incentivo a novos hábitos e dicas para o dia a dia.",
    action: "Entrar na Comunidade",
    message:
      "Olá, Sarah! Quero saber como participar da Comunidade VIP e dos desafios gratuitos.",
    Icon: UsersRound,
  },
];

function whatsappHref(message: string) {
  return `https://wa.me/?text=${encodeURIComponent(message)}`;
}

export default function ServicesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="services-heading"
      className="scroll-mt-24 bg-bg-warm py-20 sm:py-24 lg:py-28"
      id="atendimentos"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 18 }}
          transition={{ duration: reduceMotion ? 0 : 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.35 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="text-xs font-semibold tracking-[0.16em] text-secondary sm:text-sm">
            CUIDADO NUTRICIONAL
          </p>
          <h2
            className="mt-4 font-display text-3xl leading-tight text-text-main sm:text-4xl lg:text-5xl"
            id="services-heading"
          >
            Consultas clínicas
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-text-muted sm:text-lg sm:leading-8">
            Um acompanhamento individualizado, no formato que faz sentido para
            sua rotina e seus objetivos.
          </p>
        </motion.div>

        <div className="mt-10 grid items-start gap-8 lg:mt-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <motion.figure
            className="relative mx-auto w-full max-w-2xl"
            initial={{ opacity: 0, x: -30 }}
            transition={{ duration: reduceMotion ? 0 : 0.65, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.25 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl bg-surface shadow-lg">
              <Image
                alt="Dra. Sarah Mansur conversando com uma paciente durante uma consulta nutricional"
                className={`object-cover transition-transform duration-500 ${reduceMotion ? "" : "group-hover:scale-105"}`}
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 90vw, 45vw"
                src="/images/sarah-atendimento.jpg"
              />
            </div>
            <figcaption className="absolute bottom-4 left-4 rounded-full border border-white/70 bg-surface/95 px-4 py-2 text-xs font-semibold text-secondary shadow-md sm:bottom-5 sm:left-5 sm:text-sm">
              Atendimento Humanizado
            </figcaption>
          </motion.figure>

          <div className="grid gap-5">
            {consultationOptions.map(({ title, eyebrow, description, indication, action, message, Icon, featured }, index) => (
              <motion.article
                className={`flex h-full flex-col rounded-2xl border p-6 shadow-[0_14px_42px_-34px_rgba(42,42,42,0.45)] sm:p-8 ${
                  featured
                    ? "border-secondary bg-secondary text-bg-warm"
                    : "border-text-main/10 bg-surface text-text-main"
                }`}
                initial={{ opacity: 0, y: 20 }}
                key={title}
                transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : index * 0.1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.25 }}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`flex size-14 shrink-0 items-center justify-center rounded-2xl ${
                      featured ? "bg-bg-warm/15 text-bg-warm" : "bg-secondary/10 text-secondary"
                    }`}
                  >
                    <Icon aria-hidden="true" size={26} strokeWidth={1.8} />
                  </span>
                  <span
                    className={`rounded-full border px-3 py-1.5 text-[0.62rem] font-semibold tracking-[0.12em] ${
                      featured
                        ? "border-bg-warm/25 text-bg-warm/85"
                        : "border-secondary/20 text-secondary"
                    }`}
                  >
                    {eyebrow}
                  </span>
                </div>

                <h3 className="mt-7 font-display text-2xl sm:text-3xl">{title}</h3>
                <p
                  className={`mt-4 max-w-xl text-sm leading-7 sm:text-base sm:leading-8 ${
                    featured ? "text-bg-warm/85" : "text-text-muted"
                  }`}
                >
                  {description}
                </p>

                <div
                  className={`mt-7 border-t pt-5 ${
                    featured ? "border-bg-warm/20" : "border-text-main/10"
                  }`}
                >
                  <p
                    className={`text-[0.65rem] font-semibold tracking-[0.14em] ${
                      featured ? "text-bg-warm/70" : "text-secondary"
                    }`}
                  >
                    INDICADO PARA
                  </p>
                  <p className={`mt-2 text-sm leading-6 ${featured ? "text-bg-warm" : "text-text-main"}`}>
                    {indication}
                  </p>
                </div>

                <a
                  className={`mt-8 inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    featured
                      ? "bg-bg-warm text-secondary hover:bg-white focus-visible:outline-bg-warm"
                      : "bg-primary text-white hover:bg-primary-dark focus-visible:outline-primary-dark"
                  }`}
                  href={whatsappHref(message)}
                  rel="noreferrer"
                  target="_blank"
                >
                  {action}
                </a>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-text-main/10 pt-16 sm:mt-24 sm:pt-20">
          <motion.div
            className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between"
            initial={{ opacity: 0, y: 16 }}
            transition={{ duration: reduceMotion ? 0 : 0.55, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.35 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] text-secondary sm:text-sm">
                ACOMPANHAMENTO COMPLEMENTAR
              </p>
              <h2 className="mt-3 font-display text-3xl leading-tight text-text-main sm:text-4xl">
                Programas &amp; Protocolos Especiais
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-6 text-text-muted sm:text-base">
              Soluções para diferentes fases e objetivos, com orientação próxima
              e acolhedora.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {programs.map(({ title, description, action, message, Icon }, index) => (
              <motion.article
                className="flex h-full flex-col rounded-2xl border border-text-main/10 bg-surface p-6 transition-colors hover:border-secondary/30 sm:p-7"
                initial={{ opacity: 0, y: 18 }}
                key={title}
                transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : index * 0.08, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.25 }}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <Icon aria-hidden="true" size={23} strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 font-display text-xl leading-snug text-text-main sm:text-2xl">
                  {title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-text-muted sm:text-base sm:leading-7">
                  {description}
                </p>
                <a
                  className="mt-6 inline-flex min-h-11 items-center justify-center self-start rounded-full border border-secondary/35 px-5 py-2.5 text-sm font-semibold text-secondary transition-colors hover:border-secondary hover:bg-secondary/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                  href={whatsappHref(message)}
                  rel="noreferrer"
                  target="_blank"
                >
                  {action}
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}