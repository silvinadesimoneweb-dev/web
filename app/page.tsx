"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  AtSign,
  Compass,
  GraduationCap,
  HeartHandshake,
  Link2,
  Menu,
  MessageCircle,
  MonitorPlay,
  UserRound,
  UsersRound,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const WHATSAPP_URL =
  "https://wa.me/5491160571233?text=Hola%20Silvina%2C%20me%20gustar%C3%ADa%20agendar%20un%20turno.";
const INSTAGRAM_URL = "https://www.instagram.com/consultorio_vinculandonos";

const navItems = [
  ["Inicio", "#inicio"],
  ["Sobre mí", "#sobre-mi"],
  ["Con quién trabajo", "#acompanamiento"],
  ["Modalidad", "#modalidad"],
  ["Preguntas frecuentes", "#preguntas"],
  ["Contacto", "#contacto"],
];

const people = [
  {
    title: "Jóvenes y adultos",
    text: "Un espacio individual para trabajar diferentes situaciones emocionales, personales y vinculares.",
    icon: UserRound,
    number: "01",
  },
  {
    title: "Argentinos en el exterior",
    text: "Acompañamiento psicológico online para atravesar procesos migratorios, cambios culturales y vínculos a distancia.",
    icon: Compass,
    number: "02",
  },
  {
    title: "Adolescentes",
    text: "Abordaje terapéutico durante una etapa atravesada por importantes cambios personales, vinculares y emocionales.",
    icon: HeartHandshake,
    number: "03",
  },
  {
    title: "Familias",
    text: "Orientación a madres, padres y referentes adultos para acompañar situaciones relacionadas con adolescentes y jóvenes.",
    icon: UsersRound,
    number: "04",
  },
];

const personCardBackgrounds: Record<string, string> = {
  "Jóvenes y adultos": "person-card-featured",
  "Argentinos en el exterior": "person-card-exterior",
  "Adolescentes": "person-card-adolescents",
  "Familias": "person-card-families",
};

const topics = [
  "Vínculos",
  "Ansiedad",
  "Angustia",
  "Duelos",
  "Migraciones",
  "Sexualidad y género",
  "Cambios personales",
  "Adolescencia",
];

const faq = [
  ["¿Las sesiones son online?", "Sí. La atención se realiza de manera online."],
  ["¿Atendés personas que viven fuera de Argentina?", "Sí. La modalidad online permite acompañar también a argentinos que actualmente viven en el exterior."],
  ["¿Trabajás con adolescentes?", "Sí. También acompaño adolescentes y trabajo con sus familias cuando la situación lo requiere."],
  ["¿Cómo puedo consultar por un turno?", "Podés comunicarte directamente por WhatsApp para consultar disponibilidad."],
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["Psychologist", "ProfessionalService"],
  name: "Lic. Silvina De Simone",
  alternateName: "Consultorio Vinculándonos",
  url: "https://consultorio-vinculandonos-silvina.serviojoaquin.chatgpt.site",
  image: "https://consultorio-vinculandonos-silvina.serviojoaquin.chatgpt.site/silvina-hero-hd.png",
  telephone: "+5491160571233",
  sameAs: [INSTAGRAM_URL],
  availableLanguage: "es",
  areaServed: ["Argentina", "Worldwide"],
  serviceType: ["Psicología online", "Terapia online"],
  description: "Terapia para jóvenes y adultos. Atención online para jóvenes, adultos, terapia de parejas y argentinos en el extranjero.",
  keywords: "Terapia para jóvenes y adultos, psicóloga UBA, atención psicológica online, terapia de parejas, argentinos en el extranjero",
  founder: { "@type": "Person", name: "Silvina De Simone", jobTitle: "Licenciada en Psicología" },
};

const loaderStyles = `
  @keyframes silvina-loader-name {
    0% { opacity: 0; transform: translateY(115%); }
    62% { opacity: 1; }
    100% { opacity: 1; transform: translateY(0); }
  }
  @keyframes silvina-loader-track {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes silvina-loader-line {
    from { transform: scaleX(0); transform-origin: left; }
    to { transform: scaleX(1); transform-origin: left; }
  }
`;

function WhatsappButton({ children, className = "button" }: { children: React.ReactNode; className?: string }) {
  return (
    <a className={className} href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label={`${children} por WhatsApp`}>
      {children} <ArrowUpRight size={17} aria-hidden="true" />
    </a>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [globeTilt, setGlobeTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleGlobePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    setGlobeTilt({ x: -y * 15, y: x * 18 });
  };

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 2950);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {loading && (
        <div
          role="status"
          aria-label="Cargando sitio"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            display: "grid",
            placeItems: "center",
            background: "#f7f4ed",
          }}
        >
          <style>{loaderStyles}</style>
          <div style={{ width: "min(92vw, 450px)", color: "#28312c" }}>
            <div style={{ overflow: "hidden", padding: "0 0 .18em" }}>
              <p
                style={{
                  margin: 0,
                  whiteSpace: "nowrap",
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "clamp(1.25rem, 3.2vw, 2.25rem)",
                  fontWeight: 600,
                  letterSpacing: ".01em",
                  willChange: "transform, opacity",
                  animation: "silvina-loader-name 1.3s cubic-bezier(.22,1,.36,1) .16s both",
                }}
              >
                Lic. Silvina De Simone
              </p>
            </div>
            <div style={{ height: "2px", marginTop: "28px", overflow: "hidden", background: "rgba(49,84,67,.16)", animation: "silvina-loader-track .65s cubic-bezier(.16,1,.3,1) .52s both" }}>
              <span style={{ display: "block", width: "100%", height: "100%", background: "#315443", animation: "silvina-loader-line 2.05s cubic-bezier(.22,.9,.3,1) .68s both" }} />
            </div>
          </div>
        </div>
      )}

      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`} style={{ padding: "12px 0", background: "transparent", borderBottomColor: "transparent", backdropFilter: "none", boxShadow: "none" }}>
        <div className="shell header-inner" style={{ minHeight: "64px", padding: "0 18px", borderRadius: "22px", background: scrolled ? "rgba(247,244,237,.62)" : "rgba(247,244,237,.92)", border: `1px solid ${scrolled ? "transparent" : "rgba(49,84,67,.14)"}`, backdropFilter: "blur(16px)", boxShadow: scrolled ? "none" : "0 10px 28px rgba(43,58,49,.08)", transition: "background .25s ease, border-color .25s ease, box-shadow .25s ease" }}>
          <a className="brand" href="#inicio" aria-label="Lic. Silvina De Simone, volver al inicio" style={{ fontSize: "clamp(1.04rem, 2.5vw, 1.25rem)", color: "#28312c" }}>
            
            <span>Lic. Silvina De Simone</span> </a>
          <nav className="desktop-nav" aria-label="Navegación principal">
            {navItems.slice(0, 5).map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <WhatsappButton className="button button-small desktop-contact">Agendar un turno</WhatsappButton>

          <Sheet>
            <SheetTrigger asChild>
              <button className="menu-button" type="button" aria-label="Abrir menú"><Menu aria-hidden="true" /></button>
            </SheetTrigger>
            <SheetContent className="mobile-sheet">
              <SheetHeader className="mobile-sheet-header">
                <SheetTitle className="mobile-sheet-title">Vinculándonos</SheetTitle>
                <SheetDescription>Psicología online</SheetDescription>
              </SheetHeader>
              <nav className="mobile-nav" aria-label="Navegación móvil">
                {navItems.map(([label, href], index) => (
                  <SheetClose asChild key={href}><a href={href}><span>0{index + 1}</span>{label}</a></SheetClose>
                ))}
              </nav>
              <div className="mobile-sheet-action"><WhatsappButton>Agendar un turno</WhatsappButton></div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <figure className="shell hero-frame">
            <Image
              className="hero-image"
              src="/silvina-hero-hd.png"
              alt="Lic. Silvina De Simone, psicóloga y fundadora de Consultorio Vinculándonos"
              width={1600}
              height={900}
              priority
              quality={100}
              fetchPriority="high"
              sizes="(max-width: 780px) 100vw, 1600px"
            />
            <span className="hero-gradient" aria-hidden="true" />
            <div className="hero-copy">
              <p className="eyebrow"><span aria-hidden="true" /> Lic. Silvina De Simone</p>
              <h1>Terapia para jóvenes y adultos.</h1>
              <p className="hero-lead">Todos necesitamos que nos escuchen. Si necesitás hablar, podés escribirme.</p>
              <p className="hero-secondary">Atención online para jóvenes, adultos, terapia de parejas y argentinos en el extranjero.</p>
              <div className="hero-actions">
                <WhatsappButton>Agendar un turno</WhatsappButton>
                <a className="text-link" href="#sobre-mi">Conocer más <ArrowDown size={15} aria-hidden="true" /></a>
              </div>
            </div>
            <figcaption><strong>Lic. Silvina De Simone</strong><span>Psicóloga · UBA</span></figcaption>
          </figure>
        </section>

        <section className="about section" id="sobre-mi">
          <div className="shell about-grid">
            <div className="section-heading reveal">
              <p className="section-number">01 · Sobre mí</p>
              <h2>Un espacio para poder hablar de lo que te pasa</h2>
            </div>
            <div className="about-copy reveal">
              <p className="large-copy">Soy Silvina De Simone, Licenciada en Psicología en la Universidad de Buenos Aires. Desde hace más de 13 años trabajo con adolescentes, jóvenes, adultos, familias y parejas en distintos momentos y procesos de sus vidas.</p>
              <p>Mi trabajo busca ofrecer un espacio de escucha, reflexión y acompañamiento, respetando los tiempos, experiencias y particularidades de cada persona.</p>
              <div className="credentials" aria-label="Información profesional destacada">
                <div><strong>+13</strong><span>años de experiencia</span></div>
                <div><GraduationCap aria-hidden="true" /><span>Licenciada en Psicología · UBA</span></div>
                <div><MonitorPlay aria-hidden="true" /><span>Atención online</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="people-section section" id="acompanamiento">
          <div className="shell">
            <div className="section-heading split-heading reveal">
              <div><p className="section-number">02 · Acompañamiento</p><h2>¿A quién está dirigido?</h2></div>
              <p>La primera consulta puede ayudarnos a revisar por dónde empezar.</p>
            </div>
            <div className="people-grid">
              {people.map(({ title, text, icon: Icon, number }) => (
                <article className={`person-card reveal ${personCardBackgrounds[title] ?? ""}`} key={title}>
                  <div className="card-top"><Icon aria-hidden="true" /><span>{number}</span></div>
                  <h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="topics-section section" aria-labelledby="topics-title">
          <div className="shell topics-grid">
            <div className="topics-intro reveal">
              <p className="section-number light">03 · Motivos de consulta</p>
              <h2 id="topics-title" style={{ maxWidth: "17ch", fontSize: "clamp(2.6rem, 4.1vw, 4.75rem)", lineHeight: 1.02, letterSpacing: "-.045em", textWrap: "balance" }}>Lo que te pasa no necesita <em style={{ color: "#f0ddb1", fontStyle: "italic", whiteSpace: "nowrap" }}>encajar</em> en una etiqueta para encontrar un lugar de escucha.</h2>
            </div>
            <div className="topic-list reveal">
              {topics.map((topic) => <div key={topic} style={{ gridTemplateColumns: "1fr auto" }}><h3>{topic}</h3><ArrowRight aria-hidden="true" /></div>)}
            </div>
          </div>
        </section>

        <section className="online-section section" id="modalidad">
          <div className="shell online-card reveal">
            <div
              className="interactive-globe"
              aria-label="Globo decorativo interactivo"
              onPointerMove={handleGlobePointerMove}
              onPointerLeave={() => setGlobeTilt({ x: 0, y: 0 })}
              style={{ "--globe-x": `${globeTilt.x}deg`, "--globe-y": `${globeTilt.y}deg` } as React.CSSProperties}
            >
              <span className="globe-halo globe-halo-one" aria-hidden="true" />
              <span className="globe-halo globe-halo-two" aria-hidden="true" />
              <div className="globe-sphere" aria-hidden="true">
                <Image
                  src="/earth-wireframe.png"
                  alt=""
                  fill
                  sizes="(max-width: 780px) 60vw, 250px"
                  className="earth-image"
                />
                <span className="globe-glow" />
              </div>
              <span className="globe-orbit globe-orbit-one" aria-hidden="true" />
              <span className="globe-orbit globe-orbit-two" aria-hidden="true" />
              <span className="globe-caption">Atención sin fronteras</span>
            </div>
            <div className="online-copy">
              <p className="section-number">04 · Modalidad</p>
              <h2>Terapia online, estés donde estés</h2>
              <p>Las sesiones se realizan de manera online, permitiendo sostener un espacio terapéutico independientemente del lugar en el que estés viviendo.</p>
              <div className="highlight"><Compass aria-hidden="true" /><span>Atención para argentinos en el exterior.</span></div>
              <WhatsappButton>Agendar un turno</WhatsappButton>
            </div>
          </div>
        </section>

        <section className="experience section" aria-labelledby="experience-title">
          <div className="shell experience-grid">
            <div className="experience-heading reveal">
              <p className="section-number">05 · Recorrido profesional</p>
              <h2 id="experience-title">Experiencia y formación</h2>
              <p>Una práctica sostenida en la escucha, la formación continua y el respeto por la singularidad de cada historia.</p>
            </div>
            <div className="experience-content reveal">
              <p className="experience-statement">
                No se trata de encajar en una etiqueta, sino de <em>mirar lo que sucede con mayor claridad</em> y encontrar nuevas formas de abordarlo.
              </p>
              <div className="experience-cards">
                <article>
                  <h3>Un espacio a medida</h3>
                  <p>Trabajo con jóvenes, adultos y parejas. Cuando la situación lo requiere, el proceso también incluye a las familias.</p>
                </article>
                <article>
                  <h3>Una mirada amplia</h3>
                  <p>Mi recorrido reúne experiencia en ámbitos clínicos, educativos, sociales y empresariales, junto a equipos interdisciplinarios.</p>
                </article>
                <article>
                  <h3>Formación en movimiento</h3>
                  <p>Formada en la UBA y en actualización permanente en clínica, adolescencias, evaluación psicológica, sexualidad, género y diversidad.</p>
                </article>
              </div>
              <p className="experience-signature">Cada proceso es único. Y merece ser escuchado como tal.</p>
            </div>
          </div>
        </section>

        <section className="main-cta section">
          <div className="shell main-cta-inner reveal">
            <span className="cta-icon" aria-hidden="true"><Link2 /></span>
            <h2>Dar el primer paso <em>ya es el proceso</em>.</h2>
            <p>Si querés realizar una consulta o conocer la disponibilidad de turnos, podés escribirme.</p>
            <WhatsappButton>Agendar un turno</WhatsappButton>
          </div>
        </section>

        <section className="faq-section section" id="preguntas">
          <div className="shell faq-grid">
            <div className="section-heading reveal">
              <p className="section-number">06 · Información útil</p>
              <h2>Preguntas frecuentes</h2>
              <p className="faq-intro">Algunas respuestas para orientarte antes de hacer tu consulta.</p>
            </div>
            <Accordion type="single" collapsible className="faq-list reveal">
              {faq.map(([question, answer], index) => (
                <AccordionItem value={`item-${index}`} key={question} className="faq-item">
                  <AccordionTrigger className="faq-trigger"><span><small>0{index + 1}</small>{question}</span></AccordionTrigger>
                  <AccordionContent className="faq-answer">{answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="contact-section section" id="contacto">
          <div className="shell contact-grid reveal">
            <div className="contact-heading">
              <p className="section-number light">07 · Contacto</p>
              <h2>¿Querés hacer una consulta?</h2>
              <p>Podés escribirme para conocer la disponibilidad de atención psicológica online.</p>
            </div>
            <div className="contact-card">
              <div><p><strong>Lic. Silvina De Simone</strong><small>Consultorio Vinculándonos</small></p></div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Escribir a Silvina por WhatsApp"><MessageCircle aria-hidden="true" /><span><small>WhatsApp</small>+54 9 11 6057-1233</span><ArrowUpRight aria-hidden="true" /></a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Visitar Instagram de Consultorio Vinculándonos"><AtSign aria-hidden="true" /><span><small>Instagram</small>@consultorio_vinculandonos</span><ArrowUpRight aria-hidden="true" /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-top">
          <div><a className="brand footer-brand" href="#inicio"><span>Lic. Silvina De Simone</span></a><p>Psicología · Atención online</p></div>
          <nav aria-label="Enlaces del pie de página">{navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
          <div className="footer-social"><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Instagram <ArrowUpRight size={14} aria-hidden="true" /></a><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight size={14} aria-hidden="true" /></a></div>
        </div>
        <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Lic. Silvina De Simone</span><span>Atención online</span></div>
      </footer>

      <a className="whatsapp-float" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Agendar un turno por WhatsApp"><MessageCircle aria-hidden="true" /><span>Agendar un turno</span></a>
    </>
  );
}
