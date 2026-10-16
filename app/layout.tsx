import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Nutricionista Sarah Mansur | Saúde Feminina, Método Fênix e Emagrecimento 35+",
  description:
    "Nutrição para saúde feminina e emagrecimento 35+ com Sarah Mansur. Conheça o Método Fênix e agende seu atendimento nutricional.",
  openGraph: {
    title:
      "Nutricionista Sarah Mansur | Saúde Feminina, Método Fênix e Emagrecimento 35+",
    description:
      "Nutrição para saúde feminina e emagrecimento 35+ com Sarah Mansur. Conheça o Método Fênix e agende seu atendimento nutricional.",
    locale: "pt_BR",
    siteName: "Sarah Mansur | Nutricionista",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen bg-bg-warm font-sans text-text-main antialiased">
        {children}
      </body>
    </html>
  );
}
