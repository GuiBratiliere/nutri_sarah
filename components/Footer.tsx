import { AtSign, MapPin, Clock3, Mail, Phone, MapPinned } from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Método Fênix", href: "#metodo-fenix" },
  { label: "Atendimentos", href: "#atendimentos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

const address = process.env.NEXT_PUBLIC_OFFICE_ADDRESS;
const officeHours = process.env.NEXT_PUBLIC_OFFICE_HOURS;
const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");
const googleBusinessUrl = process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL;
const copyrightYear = "2026";
const whatsappMessage = encodeURIComponent(
  "Olá! Gostaria de saber mais sobre os atendimentos da Sarah Mansur.",
);
const whatsappHref = whatsappNumber
  ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  : `https://wa.me/?text=${whatsappMessage}`;

export default function Footer() {
  return (
    <footer className="bg-text-main text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 sm:py-16 md:grid-cols-2 lg:grid-cols-[1.15fr_0.8fr_1.2fr] lg:gap-16">
        <div>
          <Link className="inline-flex flex-col leading-none" href="/">
            <span className="font-display text-2xl">SARAH MANSUR</span>
            <span className="mt-2 text-[0.62rem] font-semibold tracking-[0.16em] text-white/65">
              NUTRICIONISTA
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/70">
            Cuidado nutricional individualizado para a saúde da mulher.
          </p>
          <p className="mt-4 text-sm font-medium text-white/85">
            Nutricionista Sarah Mansur
          </p>
        </div>

        <nav aria-label="Links do rodapé">
          <h2 className="text-xs font-semibold tracking-[0.14em] text-white/60">
            NAVEGAÇÃO
          </h2>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a className="text-sm text-white/80 transition-colors hover:text-white" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold tracking-[0.14em] text-white/60">
            CONSULTÓRIO E CONTATO
          </h2>
          <dl className="mt-5 space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <MapPin aria-hidden="true" className="mt-0.5 shrink-0 text-white/60" size={17} />
              <div>
                <dt className="font-medium text-white/90">Endereço</dt>
                <dd className="mt-1 leading-6 text-white/70">
                  {address || "A confirmar"}
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock3 aria-hidden="true" className="mt-0.5 shrink-0 text-white/60" size={17} />
              <div>
                <dt className="font-medium text-white/90">Horários</dt>
                <dd className="mt-1 leading-6 text-white/70">
                  {officeHours || "A confirmar"}
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail aria-hidden="true" className="mt-0.5 shrink-0 text-white/60" size={17} />
              <div>
                <dt className="font-medium text-white/90">E-mail</dt>
                <dd className="mt-1 leading-6 text-white/70">
                  {email ? <a className="hover:text-white" href={`mailto:${email}`}>{email}</a> : "A confirmar"}
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone aria-hidden="true" className="mt-0.5 shrink-0 text-white/60" size={17} />
              <div>
                <dt className="font-medium text-white/90">WhatsApp</dt>
                <dd className="mt-1 leading-6 text-white/70">
                  <a className="hover:text-white" href={whatsappHref} rel="noreferrer" target="_blank">
                    {whatsappNumber ? `+${whatsappNumber}` : "Número a confirmar"}
                  </a>
                </dd>
              </div>
            </div>
          </dl>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/15 pt-5">
            <a
              className="inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
              href="https://www.instagram.com/nutricionistasarahmansur/"
              rel="noreferrer"
              target="_blank"
            >
              <AtSign aria-hidden="true" size={17} />
              @nutricionistasarahmansur
            </a>
            {googleBusinessUrl ? (
              <a
                className="inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
                href={googleBusinessUrl}
                rel="noreferrer"
                target="_blank"
              >
                <MapPinned aria-hidden="true" size={17} />
                Google Meu Negócio
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 text-sm text-white/50">
                <MapPinned aria-hidden="true" size={17} />
                Google Meu Negócio: link a confirmar
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-white/55 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>© {copyrightYear} Sarah Mansur. Todos os direitos reservados.</p>
          <p>Nutricionista Sarah Mansur</p>
        </div>
      </div>
    </footer>
  );
}