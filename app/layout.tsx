import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://consultorio-vinculandonos-silvina.serviojoaquin.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Psicóloga Online | Lic. Silvina De Simone",
  description: "Psicóloga online para jóvenes y adultos, argentinos en el exterior, adolescentes y familias. Consultorio Vinculándonos.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Psicóloga Online | Lic. Silvina De Simone",
    description: "Atención psicológica online para jóvenes, adultos, adolescentes y familias.",
    url: SITE_URL,
    siteName: "Consultorio Vinculándonos",
    locale: "es_AR",
    type: "website",
    images: [{ url: "/silvina-hero.png", width: 1600, height: 900, alt: "Lic. Silvina De Simone en su consultorio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicóloga Online | Lic. Silvina De Simone",
    description: "Atención psicológica online para jóvenes, adultos, adolescentes y familias.",
    images: ["/silvina-hero.png"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
