export const metadata = {
  title: "Psicóloga Online | Lic. Silvina De Simone",
  description: "Atención psicológica online para jóvenes, adultos, adolescentes, parejas y argentinos en el exterior.",
  icons: { icon: "/favicon.svg" }
};

export default function RootLayout({ children }) {
  return <html lang="es"><body>{children}</body></html>;
}
