import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, type ReactNode } from "react";
import mascotAsset from "@/assets/diversplas-mascot.png.asset.json";
import logoAsset from "@/assets/diversplas-logo.jpeg.asset.json";

export const Route = createFileRoute("/")(({
  head: () => ({
    meta: [
      { title: "Diversplas - Actividades extraescolares en Barcelona" },
      { name: "description", content: "Más de 20 años creando experiencias extraescolares en Barcelona. Tranquilidad y confianza a las familias. Colegios, AMPAs y centros educativos." },
      { property: "og:title", content: "Diversplas - Actividades extraescolares en Barcelona" },
      { property: "og:description", content: "Más de 20 años de actividades extraescolares premium para colegios y AMPAs de Barcelona." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Diversplas",
          "description": "Empresa de actividades extraescolares en Barcelona con más de 20 años de experiencia. Trabajamos con colegios, AMPAs y centros educativos.",
          "url": "https://diversplas.es",
          "telephone": "+34657117426",
          "email": "rakelulu@outlook.es",
          "image": "https://diversplas.es/diversplas-logo.webp",
          "logo": "https://diversplas.es/logo-badge.webp",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Barcelona",
            "addressRegion": "Barcelona",
            "addressCountry": "ES"
          },
          "areaServed": { "@type": "City", "name": "Barcelona" },
          "sameAs": [ "https://www.instagram.com/diversplas_extraescolares" ]
        })
      }
    ]
  }),
  component: Index,
}) as any);

/* ─── Data ─────────────────────────────────────────────── */

const ACTIVITIES = [
  { name: "Fútbol",          color: "#FF7B72",                icon: "⚽" },
  { name: "Básquet",         color: "#3055C7", light: true,  icon: "🏀" },
  { name: "Multideporte",    color: "#D8E600",                icon: "🏃" },
  { name: "Karate",          color: "#9C7BFF",                icon: "🥋" },
  { name: "Zumba",           color: "#FF9D42",                icon: "🕺" },
  { name: "Baile",           color: "#35D0BA",                icon: "💃" },
  { name: "Hip Hop",         color: "#F5A623",                icon: "🎤" },
  { name: "Inglés",          color: "#3055C7", light: true,  icon: "TWEMOJI_GB" },
  { name: "Manualidades",    color: "#D8E600",                icon: "✂️" },
  { name: "Patinaje",        color: "#FF7B72",                icon: "⛸️" },
  { name: "Casales",         color: "#00C9A7", light: true,  icon: "🏕️" },
  { name: "Refuerzo",        color: "#9C7BFF",                icon: "📚" },
];

const MARQUEE_COLORS = ["#FF7B72", "#3055C7", "#FF9D42", "#35D0BA", "#9C7BFF", "#D8E600", "#1D2F8C"];

const TRUST_SLIDES = [
  {
    headline: "+20 AÑOS",
    sub: "DE EXPERIENCIA",
    description: "Más de dos décadas avaladas por colegios y familias de Barcelona. No es experiencia — es confianza ganada.",
    image: "/image_53d820.webp",
    icon: "🌟",
    bg: "#35D0BA",
    blob: "#52DCC6",
    dark: true,
  },
  {
    headline: "CONFIADOS",
    sub: "& RECOMENDADOS",
    description: "Colegios y AMPAs de Barcelona nos eligen curso tras curso. La mejor referencia son quienes ya confían en nosotros.",
    image: "/image_53e780.webp",
    icon: "🏆",
    bg: "#1D2F8C",
    blob: "#3055C7",
    dark: false,
  },
  {
    headline: "RESULTADOS",
    sub: "COMPROBADOS",
    description: "Niños más activos, más seguros y con mejores habilidades sociales. Lo medimos. Lo garantizamos.",
    image: "/image_488563.webp",
    icon: "🚀",
    bg: "#FF7B72",
    blob: "#FF9590",
    dark: true,
  },
  {
    headline: "DISEÑO",
    sub: "PERSONALIZADO",
    description: "Cada programa es único. Lo diseñamos contigo, para tus alumnos, con tu identidad de centro.",
    image: "/image_53ee82.webp",
    icon: "🎨",
    bg: "#FF9D42",
    blob: "#FFB468",
    dark: true,
  },
  {
    headline: "APRENDIZAJE",
    sub: "REAL",
    description: "Proyectos reales que conectan con el mundo: idiomas, geografía, culturas. Aprenden haciendo y presentando.",
    image: "/image_48117c.webp",
    icon: "🌍",
    bg: "#9C7BFF",
    blob: "#B295FF",
    dark: true,
  },
];

/* ─── Font helper ───────────────────────────────────────── */
const condensed: React.CSSProperties = {
  fontFamily: "'Barlow Condensed', 'Clash Display', sans-serif",
  fontWeight: 900,
};
const condensedItalic: React.CSSProperties = {
  fontFamily: "'Barlow Condensed', 'Clash Display', sans-serif",
  fontWeight: 900,
  fontStyle: "italic",
};
const btnStyle: React.CSSProperties = {
  fontFamily: "'Barlow Condensed', 'Clash Display', sans-serif",
  fontWeight: 900,
  letterSpacing: "0.06em",
  fontSize: "1.05rem",
};


/* --- Nav --- */
function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Actividades", "#activities"],
    ["Proceso",     "#process"],
    ["Zonas",       "#zones"],
    ["Contacto",    "#contact"],
  ] as const;

  return (
    <>
      {/* ── Header bar ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between"
        style={{
          background: "rgba(255,255,255,0.88)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: "1.5px solid rgba(0,0,0,0.07)",
          padding: "10px 16px",
          boxSizing: "border-box",
        }}
      >
        {/* Logo */}
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="flex items-center"
          style={{ padding: "2px 8px" }}
        >
          <img src="/diversplas-logo.webp" alt="DIVERSPLAS" className="h-12 w-auto block" loading="eager" width={61} height={48} />
        </a>

        {/* Desktop links pill */}
        <nav className="hidden md:flex items-center gap-0.5 rounded-full border-2 border-black bg-white/95 backdrop-blur-md px-2 py-1.5 shadow-[3px_3px_0_0_#000]">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="px-3 py-1.5 rounded-full text-sm font-semibold hover:bg-black hover:text-white transition-colors">{label}</a>
          ))}
        </nav>

        {/* Right: CTA + hamburger */}
        <div className="flex items-center" style={{ gap: "10px" }}>
          <a
            href="#contact"
            className="flex items-center whitespace-nowrap gap-2 rounded-full border-2 border-black bg-[#D8E600] text-black font-bold hover:bg-[#c8d500] transition-colors shadow-[3px_3px_0_0_#000]"
            style={{ ...btnStyle, padding: "8px 14px", fontSize: "0.85rem" }}
            onClick={() => setOpen(false)}
          >
            SOLICITAR CITA
          </a>
          <button
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="md:hidden flex items-center justify-center rounded-full border-2 border-black bg-white hover:bg-black hover:text-white transition-colors shadow-[2px_2px_0_0_#000]"
            style={{ width: 40, height: 40, flexShrink: 0 }}
          >
            <span className="text-lg leading-none font-black select-none">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </header>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed left-4 right-4 z-40 rounded-2xl border-2 border-black bg-white shadow-[6px_6px_0_0_#000] overflow-hidden"
            style={{ top: 76 }}
          >
            <nav className="flex flex-col">
              {links.map(([label, href], i) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`px-6 py-5 text-xl font-black uppercase tracking-wider hover:bg-[#D8E600] transition-colors flex items-center justify-between ${
                    i < links.length - 1 ? "border-b-2 border-black/10" : ""
                  }`}
                  style={condensed}
                >
                  <span>{label}</span>
                  <span className="text-[#0a0a0a] inline-flex items-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="9" fill="white" stroke="currentColor" strokeWidth="2"/>
                      <path d="M7 10h6M11 7l3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      {open && <div className="fixed inset-0 z-30" onClick={() => setOpen(false)} />}
    </>
  );
}

/* ─── Hero ──────────────────────────────────────────────── */
function Hero() {
  return (
    <section id="top" className="relative w-full min-h-screen bg-white flex flex-col justify-center pt-28 pb-20" style={{ position: 'relative', width: '100%', overflow: 'visible', paddingTop: '80px', paddingBottom: '60px' }}>
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: "radial-gradient(#000 1.5px,transparent 1.5px)", backgroundSize: "36px 36px" }}
      />

      {/* Soft color blobs */}
      <div className="pointer-events-none absolute top-20 -left-20 h-72 w-72 rounded-full bg-[#D8E600] blur-3xl opacity-25" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-80 w-80 rounded-full bg-[#3055C7] blur-3xl opacity-10" />



      {/* 2. Trophy — TOP RIGHT */}
      <motion.div
        className="pointer-events-none absolute top-20 right-[2%] w-18 h-18 md:w-24 md:h-24 hidden md:block"
        animate={{ y: [0, -14, 0], rotate: [-6, 6, -6] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      >
        <img src="/sticker-trophy.webp" alt="" className="w-full h-full" style={{ mixBlendMode: "multiply" }} loading="lazy" width={96} height={96} />
      </motion.div>

      {/* 5. Karate — LEFT CENTER */}
      <motion.div
        className="pointer-events-none absolute top-[48%] -translate-y-1/2 left-[1%] w-14 h-14 md:w-18 md:h-18 hidden md:block"
        animate={{ y: [0, -10, 0], rotate: [-5, 5, -5] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
      >
        <img src="/sticker-karate.webp" alt="" className="w-full h-full" style={{ mixBlendMode: "multiply" }} loading="lazy" width={72} height={72} />
      </motion.div>

      {/* Floating Polaroids (outside central text wrapper for correct relative absolute positioning) */}
      {/* Foto 1 - Top Left */}
      <div style={{ '--rot': '-6deg', transform: 'rotate(var(--rot))', top: '18%', left: '80px', animation: 'float 4s ease-in-out infinite', animationDelay: '0s', position: 'absolute' } as any}
        className="w-52 p-3 pb-8 bg-white border border-black/10 shadow-[6px_6px_0_0_rgba(0,0,0,0.15)] rounded-sm pointer-events-none hidden md:block z-10">
        <img src="/image_53ee82.webp" alt="Niños jugando en una actividad extraescolar de Diversplas en Barcelona" className="w-full h-32 object-cover border border-black/5" loading="lazy" width={208} height={128} />
      </div>

      {/* Foto 2 - Mid Left */}
      <div style={{ '--rot': '-3deg', transform: 'rotate(var(--rot))', top: '42%', left: '80px', animation: 'float 4.5s ease-in-out infinite', animationDelay: '1.6s', position: 'absolute' } as any}
        className="w-52 p-3 pb-8 bg-white border border-black/10 shadow-[6px_6px_0_0_rgba(0,0,0,0.15)] rounded-sm pointer-events-none hidden md:block z-10">
        <img src="/image_482fc6.webp" alt="Niña con la cara pintada en un taller de Diversplas" className="w-full h-32 object-cover border border-black/5" loading="lazy" width={208} height={128} />
      </div>

      {/* Foto 3 - Bottom Left */}
      <div style={{ '--rot': '-5deg', transform: 'rotate(var(--rot))', top: '70%', left: '80px', animation: 'float 5s ease-in-out infinite', animationDelay: '3.2s', position: 'absolute' } as any}
        className="w-52 p-3 pb-8 bg-white border border-black/10 shadow-[6px_6px_0_0_rgba(0,0,0,0.15)] rounded-sm pointer-events-none hidden md:block z-10">
        <img src="/image_53c921.webp" alt="Grupo de alumnos en clase de una actividad extraescolar" className="w-full h-32 object-cover border border-black/5" loading="lazy" width={208} height={128} />
      </div>

      {/* Foto 4 - Top Right */}
      <div style={{ '--rot': '5deg', transform: 'rotate(var(--rot))', top: '18%', right: '80px', animation: 'float 4s ease-in-out infinite', animationDelay: '0.8s', position: 'absolute' } as any}
        className="w-52 p-3 pb-8 bg-white border border-black/10 shadow-[6px_6px_0_0_rgba(0,0,0,0.15)] rounded-sm pointer-events-none hidden md:block z-10">
        <img src="/image_53d820.webp" alt="Monitores de Diversplas con un grupo de niños" className="w-full h-32 object-cover border border-black/5" loading="lazy" width={208} height={128} />
      </div>

      {/* Foto 5 - Mid Right */}
      <div style={{ '--rot': '7deg', transform: 'rotate(var(--rot))', top: '42%', right: '80px', animation: 'float 4.5s ease-in-out infinite', animationDelay: '2.4s', position: 'absolute' } as any}
        className="w-52 p-3 pb-8 bg-white border border-black/10 shadow-[6px_6px_0_0_rgba(0,0,0,0.15)] rounded-sm pointer-events-none hidden md:block z-10">
        <img src="/image_53e780.webp" alt="Clase de zumba para niños de Diversplas" className="w-full h-32 object-cover border border-black/5" loading="lazy" width={208} height={128} />
      </div>

      {/* Foto 6 - Bottom Right */}
      <div style={{ '--rot': '4deg', transform: 'rotate(var(--rot))', top: '70%', right: '80px', animation: 'float 5s ease-in-out infinite', animationDelay: '1.2s', position: 'absolute' } as any}
        className="w-52 p-3 pb-8 bg-white border border-black/10 shadow-[6px_6px_0_0_rgba(0,0,0,0.15)] rounded-sm pointer-events-none hidden md:block z-10">
        <img src="/image_48117c.webp" alt="Proyecto de manualidades en una actividad extraescolar" className="w-full h-32 object-cover border border-black/5" loading="lazy" width={208} height={128} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-5 md:px-[220px] max-w-[1040px] mx-auto w-full flex flex-col items-center" style={{ maxWidth: '1040px', margin: '0 auto' }}>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-black shadow-[2px_2px_0_0_#000] bg-[#D8E600] mb-10"
          style={{ whiteSpace: 'nowrap' }}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#1D2F8C] flex-shrink-0" />
          <span className="font-bold text-sm tracking-wide text-black uppercase" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
            +20 años · Barcelona · AMPAs
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="uppercase leading-[1.05] tracking-tight text-[13vw] sm:text-[12vw] md:text-[11vw] lg:text-[125px]"
          style={condensed}
        >
          <span className="block" style={{ whiteSpace: 'nowrap' }}>No solo</span>
          <span className="block text-[#1D2F8C]" style={{ ...condensedItalic, whiteSpace: 'nowrap' }}>extraescolares.</span>
          <span className="block" style={{ whiteSpace: 'nowrap' }}>
            Aquí crecen<span className="text-[#D8E600]">.</span>
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-8 text-base md:text-lg text-black/70 max-w-xl mx-auto leading-relaxed"
        >
          <span className="bg-[#D8E600] text-black font-black px-2 py-0.5 rounded mr-1">Mucho más que rellenar las tardes.</span>
          Un espacio para jugar, aprender y crecer. Llevamos más de 20 años diseñando actividades para colegios y AMPAs de Barcelona, ofreciendo total tranquilidad y confianza a las familias.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#D8E600] text-black px-7 py-3.5 font-bold border-2 border-black hover:bg-[#c8d500] transition-colors uppercase tracking-wide shadow-[4px_4px_0_0_#000] w-full sm:w-auto"
            style={btnStyle}
          >
            SOLICITAR CITA{" "}
            <span className="transition-transform group-hover:translate-x-1 inline-flex items-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" fill="white" stroke="currentColor" strokeWidth="2"/>
                <path d="M7 10h6M11 7l3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
          <a
            href="#activities"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1D2F8C] text-white px-7 py-3.5 font-bold border-2 border-black hover:bg-[#3055C7] transition-colors uppercase tracking-wide shadow-[4px_4px_0_0_#000] w-full sm:w-auto"
            style={btnStyle}
          >
            VER ACTIVIDADES
          </a>
        </motion.div>

        {/* Mobile Gallery (max-width: 768px) */}
        <div className="mt-12 grid grid-cols-2 gap-4 w-full max-w-md md:hidden px-2">
          {[
            { src: "/image_53ee82.webp", alt: "Niños jugando en una actividad extraescolar de Diversplas en Barcelona" },
            { src: "/image_53d820.webp", alt: "Monitores de Diversplas con un grupo de niños" },
            { src: "/image_53e780.webp", alt: "Clase de zumba para niños de Diversplas" },
            { src: "/image_482fc6.webp", alt: "Niña con la cara pintada en un taller de Diversplas" },
            { src: "/image_53c921.webp", alt: "Grupo de alumnos en clase de una actividad extraescolar" },
            { src: "/image_48117c.webp", alt: "Proyecto de manualidades en una actividad extraescolar" }
          ].map((img, i) => (
            <div
              key={i}
              className="bg-white p-2 pb-6 border border-black/10 shadow-[4px_4px_0_0_rgba(0,0,0,0.15)] rounded-sm"
            >
              <img src={img.src} alt={img.alt} className="w-full aspect-square object-cover border border-black/5" loading="lazy" decoding="async" width={224} height={224} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Feature Section ───────────────────────────────────── */
type FeatureLink = { label: string; href: string };
interface FeatureSectionProps {
  id?: string;
  headline: string | ReactNode;
  headlineItalic?: string | ReactNode;
  description: string | ReactNode;
  extra?: string | ReactNode;
  links?: FeatureLink[];
  visual: ReactNode;
  flip?: boolean;
  dark?: boolean;
}

function FeatureSection({
  id, headline, headlineItalic, description, extra, links, visual, flip = false, dark = false,
}: FeatureSectionProps) {
  const text = (
    <motion.div
      initial={{ opacity: 0, x: flip ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75 }}
      className={`flex flex-col justify-center py-8 md:py-0 min-w-0 w-full order-1 ${flip ? "md:order-2" : "md:order-1"}`}
    >
      <h2
        className={`uppercase leading-[0.88] tracking-tight text-[12vw] md:text-[7vw] lg:text-[88px] mb-8 ${dark ? "text-white" : "text-black"}`}
        style={condensed}
      >
        {headline}
        {headlineItalic && (
          <span className="block text-[#1D2F8C]" style={condensedItalic}>{headlineItalic}</span>
        )}
      </h2>
      <p className={`text-base sm:text-xl md:text-2xl leading-relaxed w-full md:max-w-lg overflow-wrap-anywhere ${dark ? "text-white/90" : "text-black/75"}`} style={{ overflowWrap: "break-word" }}>{description}</p>
      {extra && <p className={`text-base sm:text-xl md:text-2xl leading-relaxed w-full md:max-w-lg mt-4 ${dark ? "text-white/90" : "text-black/75"}`} style={{ overflowWrap: "break-word" }}>{extra}</p>}
      {links && (
        <div className="flex flex-wrap gap-4 mt-10">
          {links.map((l, i) => (
            <a
              key={i}
              href={l.href}
              className={`rounded-full px-8 py-3.5 font-bold border-2 border-black uppercase transition-colors shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] ${
                i === 0
                  ? "bg-[#D8E600] text-black hover:bg-[#c8d500]"
                  : "bg-transparent text-black hover:bg-black hover:text-white"
              }`}
              style={btnStyle}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </motion.div>
  );

  const vis = (
    <motion.div
      initial={{ opacity: 0, x: flip ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75 }}
      className={`min-w-0 w-full overflow-hidden order-2 ${flip ? "md:order-1" : "md:order-2"}`}
    >
      {visual}
    </motion.div>
  );

  return (
    <section
      id={id}
      className={`border-b-2 border-black py-16 md:py-28 lg:py-40 overflow-hidden ${dark ? "bg-[#0a0a0a]" : "bg-white"}`}
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
        {text}
        {vis}
      </div>
    </section>
  );
}

/* ─── Visuals ───────────────────────────────────────────── */

function ActivityCardsVisual() {
  return (
    <div className="bg-[#1D2F8C] border-2 border-black shadow-[8px_8px_0_0_#000] rounded-2xl p-8 w-full flex-1">
      <div className="relative mb-8">
        <span className="inline-block bg-[#D8E600] text-[#0a0a0a] font-['Barlow_Condensed'] font-black uppercase tracking-[0.15em] text-sm px-3 py-1 rounded-md border-2 border-black mb-2">ACTIVIDADES DISPONIBLES</span>
        {/* Visual title with adaptation and outlined text */}
        <h2 className="font-black text-5xl sm:text-6xl md:text-8xl text-white uppercase tracking-tighter BarlowCondensed break-keep relative"
            style={{
              ...condensed,
              textShadow: '3px 3px 0 #000, -3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000, 0 3px 0 #000, 0 -3px 0 #000, 3px 0 0 #000, -3px 0 0 #000',
              letterSpacing: '0.04em'
            }}>
          +20 <span style={{
            color: '#D8E600',
            WebkitTextStroke: '3px #0a0a0a',
            textShadow: '5px 5px 0 #0a0a0a',
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            letterSpacing: '0.04em'
          }}>EXPERIENCIAS</span>
        </h2>
      </div>

      {/* New grid structure with outlined badges, forced bold black text, adjusted typography */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { name: "Fútbol", icon: "⚽" },
          { name: "Zumba", icon: "🤸" },
          { name: "Manualidades", icon: "🎨" },
          { name: "Básquet", icon: "🏀" },
          { name: "Baile", icon: "🩰" },
          { name: "Casales", icon: "🏠" },
          { name: "Patinaje", icon: "⛸️" },
          { name: "Hip Hop", icon: "🎧" },
          { name: "Inglés", icon: "🇬🇧" },
        ].map((activity) => (
          <div 
            key={activity.name}
            className="flex items-center gap-2 sm:gap-3 bg-white border-2 border-black rounded-xl px-3 sm:px-4 py-3 shadow-[4px_4px_0_0_#000]"
          >
            <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 text-lg sm:text-xl shrink-0">
              {activity.name === "Inglés" ? (
                <img
                  src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f1ec-1f1e7.png"
                  alt="🇬🇧"
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                  loading="lazy"
                  width={24}
                  height={24}
                />
              ) : (
                activity.icon
              )}
            </span>
            <span className="font-['Barlow_Condensed'] font-bold text-sm sm:text-lg text-[#0a0a0a] leading-none min-w-0">
              {activity.name}
            </span>
          </div>
        ))}
        <div className="col-span-1 md:col-span-3 flex items-center justify-center bg-[#D8E600] border-2 border-black rounded-xl px-3 sm:px-4 py-3 shadow-[4px_4px_0_0_#000]">
          <span className="font-['Barlow_Condensed'] font-bold text-sm sm:text-lg text-[#0a0a0a] leading-none min-w-0 uppercase">Y más...</span>
        </div>
      </div>
    </div>
  );
}

function ProgramVisual() {
  const steps = [
    { n: "01", t: "Escuchamos",   c: "#FF7B72" },
    { n: "02", t: "Diseñamos",    c: "#FF9D42" },
    { n: "03", t: "Coordinamos",  c: "#D8E600" },
    { n: "04", t: "Acompañamos",  c: "#35D0BA" },
    { n: "05", t: "Mejoramos",    c: "#ffffff" },
  ];
  return (
    <div className="rounded-3xl bg-[#D8E600] border-2 border-black p-8 md:p-10 overflow-hidden relative min-h-[380px] md:min-h-[440px]">
      <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-white/10 -translate-y-1/3 translate-x-1/3" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-black/10 translate-y-1/3 -translate-x-1/3" />
      <div className="relative mb-7">
        <span className="font-black text-lg tracking-widest text-black uppercase mb-2 block">Tu programa</span>
        <div className="text-3xl md:text-4xl font-black text-black -mt-1" style={condensed}>
          A medida,{" "}
          <span className="bg-white text-black border-2 border-black px-2 py-1 inline-block shadow-[2px_2px_0_0_#000] font-black rounded-md">con propósito</span>
        </div>
      </div>
      <div className="relative space-y-3">
        {steps.map((s) => (
          <div key={s.n} className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 border-2 border-black shadow-[3px_3px_0_0_#000]">
            <span className="text-black/55 font-black text-base font-mono w-6">{s.n}</span>
            <span className="h-4.5 w-4.5 rounded-full flex-shrink-0 border-2 border-black" style={{ backgroundColor: s.c }} />
            <span className="text-black font-black text-xl md:text-2xl" style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "1.2px" }}>{s.t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatsVisual() {
  const stats = [
    { n: "+20", label: "Años" },
    { n: "✓", label: "Garantía" },
    { n: "BCN", label: "Presente" },
    { n: "100%", label: "Compromiso" },
  ];
  return (
    <div className="rounded-3xl bg-[#35D0BA] border-2 border-black p-8 md:p-10 overflow-hidden relative min-h-[380px] md:min-h-[440px]">
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/10 translate-y-1/3 -translate-x-1/3" />
      <div className="relative mb-7">
        <span className="inline-block bg-[#D8E600] text-[#0a0a0a] font-['Barlow_Condensed'] font-bold uppercase tracking-[0.15em] text-sm px-3 py-1 rounded-md mb-3">NUESTRO IMPACTO</span>
        <div className="text-black font-black text-3xl md:text-4xl" style={condensed}>
          <span style={{
            backgroundColor: '#ffffff',
            padding: '1px 8px',
            borderRadius: '6px',
            display: 'inline',
            whiteSpace: 'nowrap',
            marginRight: '6px'
          }}>
            Resultados
          </span>
          <span style={{
            backgroundColor: '#ffffff',
            padding: '1px 8px',
            borderRadius: '6px',
            display: 'inline',
            whiteSpace: 'nowrap'
          }}>
            reales
          </span>
        </div>
      </div>
      <div className="relative grid grid-cols-2 gap-4">
        {stats.map((s) => (
          <motion.div
            key={s.label}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl p-5 md:p-6 flex flex-col justify-center items-center text-center border-2 border-black shadow-[4px_4px_0_0_#000]"
          >
            {s.n === "✓" ? (
              <div className="flex items-center justify-center h-[50px] md:h-[60px] mb-1">
                <svg className="w-12 h-12 md:w-14 md:h-14 text-[#1D2F8C]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 11 2 2 4-4" />
                </svg>
              </div>
            ) : (
              <div
                className="text-5xl md:text-6xl leading-none text-black font-black"
                style={condensed}
              >
                {s.n}
              </div>
            )}
            <div className="text-xs font-black text-black/90 mt-2 uppercase tracking-widest">{s.label}</div>
          </motion.div>
        ))}
      </div>
      <p className="relative mt-6 md:mt-8 text-black/85 text-sm font-bold">Resultados avalados y datos reales desde 2005.</p>
    </div>
  );
}

function ZonesCardsVisual() {
  const zones = [
    { city: "Santa Coloma", sub: "de Gramenet", color: "bg-[#3055C7]" },
    { city: "Badalona",     sub: "Barcelonès",   color: "bg-[#FF7B72]" },
    { city: "Mollet",       sub: "del Vallès",   color: "bg-fuchsia-400" },
    { city: "Sant Fost",    sub: "de Campsentelles", color: "bg-emerald-400" },
  ];

  const Card = ({ z, className = "", style = {} }: { z: typeof zones[0]; className?: string; style?: React.CSSProperties }) => {
    return (
      <motion.div
        style={{
          border: '2px solid #000',
          borderRadius: '16px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '160px',
          boxShadow: '4px 4px 0 0 #000',
          ...style
        }}
        className={`hover:shadow-[8px_8px_0_0_#000] transition-shadow duration-200 cursor-default flex-shrink-0 scroll-snap-align-start ${z.color} ${className}`}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 320, damping: 22 }}
      >
        <div />

        <div>
          <div
            style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: '30px',
              fontWeight: 900,
              lineHeight: 1,
              color: '#fff',
              textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000',
              letterSpacing: '0.04em'
            }}
            className="uppercase break-words"
          >
            {z.city}
          </div>
          {z.sub && (
            <div
              style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '14px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: '#fff',
                textShadow: '2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000',
                opacity: 0.9
              }}
              className="uppercase mt-0.5"
            >
              {z.sub}
            </div>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <>
      {/* Mobile only scroll indicator */}
      <div className="flex md:hidden items-center gap-2 mb-3">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: '#0a0a0a' }}>
          <path d="M2 8h12M10 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '16px', fontWeight: 700, letterSpacing: '0.06em', color: '#0a0a0a' }}>
          Desliza para ver todas las zonas
        </span>
      </div>
      <div className="flex md:hidden gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none" style={{ marginLeft: "-20px", marginRight: "-20px", paddingLeft: "20px", paddingRight: "20px", boxSizing: "border-box", scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}>
        {zones.map((z) => (
          <Card key={z.city} z={z} className="flex-shrink-0 snap-start" style={{ minWidth: "220px", maxWidth: "240px" }} />
        ))}
      </div>
      {/* Desktop: 2×2 grid */}
      <div className="hidden md:grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
        {zones.map((z) => (
          <Card key={z.city} z={z} />
        ))}
      </div>
    </>
  );
}

/* ─── CTA Marquee (Slush-style black section) ───────────── */
function CtaMarquee() {
  const ROW1 = ["FÚTBOL","BAILE","INGLÉS","KARATE","HIP HOP","ZUMBA","PATINAJE","BÁSQUET","MULTIDEPORTE"];
  const ROW2 = ["MANUALIDADES","REFUERZO","CASALES","INGLÉS","BAILE","FÚTBOL","KARATE","ZUMBA","HIP HOP"];

  const Tag = ({ text, colorIndex }: { text: string; colorIndex: number }) => {
    const c = MARQUEE_COLORS[colorIndex % MARQUEE_COLORS.length];
    return (
      <span
        style={{
          backgroundColor: c,
          flexShrink: 0,
        }}
        className="inline-flex items-center rounded-2xl border-2 border-white/10 px-10 py-5 text-xl md:text-2xl uppercase tracking-tight whitespace-nowrap border-2 border-black shadow-[2px_2px_0_0_#000]"
      >
        <span
          className="font-['Barlow_Condensed'] font-bold uppercase tracking-wide text-white"
          style={{ WebkitTextStroke: '1.2px #0a0a0a' }}
        >
          {text}
        </span>
      </span>
    );
  };

  return (
    <section className="bg-[#0a0a0a] py-10 overflow-hidden border-y-2 border-black relative">
      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-left {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: marquee-left 18s linear infinite;
          will-change: transform;
        }
        .marquee-right {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: marquee-right 20s linear infinite;
          will-change: transform;
        }
      `}</style>

      <div className="overflow-hidden mb-3">
        <div className="marquee-left">
          {[...ROW1, ...ROW1, ...ROW1].map((t, i) => <Tag key={i} text={t} colorIndex={i} />)}
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="marquee-right">
          {[...ROW2, ...ROW2, ...ROW2].map((t, i) => <Tag key={i} text={t} colorIndex={i + 4} />)}
        </div>
      </div>
    </section>
  );
}

/* ─── Trust Section (Slush-style colored slides) ────────── */
function TrustSection() {
  const [current, setCurrent] = useState(0);
  const slides = TRUST_SLIDES;
  const slide = slides[current];
  const textColor = slide.dark ? "text-[#1D2F8C]" : "text-white";
  const subColor  = slide.dark ? "text-[#1D2F8C]/60" : "text-white/50";
  const descColor = slide.dark ? "text-black/80" : "text-white/90";
  const dotActive = slide.dark ? "bg-black" : "bg-white";
  const dotInactive= slide.dark ? "bg-black/25" : "bg-white/35";

  useEffect(() => {
    // Reset or ensure start is 0
    setCurrent(0);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 10000);
    return () => clearInterval(id);
  }, [current, slides.length]);

  return (
    <section
      className="relative overflow-hidden border-b-2 border-black"
      style={{ backgroundColor: slide.bg, transition: "background-color 0.6s ease" }}
    >
      {/* Flowing ribbon blob — same color, slightly lighter */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large S-curve ribbon */}
        <div
          className="absolute"
          style={{
            width: "140%",
            height: "55%",
            top: "22%",
            left: "-20%",
            backgroundColor: slide.blob,
            borderRadius: "50% 60% 40% 70% / 60% 30% 70% 40%",
            transform: "rotate(-12deg)",
            opacity: 0.45,
          }}
        />
        {/* Top-right circle blob */}
        <div
          className="absolute rounded-full"
          style={{
            width: "28%",
            height: "45%",
            top: "-12%",
            right: "4%",
            backgroundColor: slide.blob,
            opacity: 0.38,
          }}
        />
        {/* Bottom-left circle blob */}
        <div
          className="absolute rounded-full"
          style={{
            width: "22%",
            height: "35%",
            bottom: "-10%",
            left: "6%",
            backgroundColor: slide.blob,
            opacity: 0.3,
          }}
        />
      </div>

      {/* Fixed side arrows */}
      <button
        aria-label="Anterior"
        onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)}
        className="w-11 h-11 rounded-full bg-white border-2 border-black shadow-[2px_2px_0_0_#000] flex items-center justify-center text-black font-bold hover:bg-[#D8E600] transition-colors"
        style={{ left: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'auto', cursor: 'pointer', zIndex: 50, position: 'absolute' }}
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        aria-label="Siguiente"
        onClick={() => setCurrent((c) => (c + 1) % slides.length)}
        className="w-11 h-11 rounded-full bg-white border-2 border-black shadow-[2px_2px_0_0_#000] flex items-center justify-center text-black font-bold hover:bg-[#D8E600] transition-colors"
        style={{ right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'auto', cursor: 'pointer', zIndex: 50, position: 'absolute' }}
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Content */}
      <div className="relative z-10 py-28 md:py-40 px-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full flex flex-col md:flex-row items-center justify-center px-8 md:px-16 lg:px-24 gap-8 md:gap-16 py-12 md:py-0"
          >
            {/* Left column */}
            <div className="flex flex-col justify-center items-center md:items-start gap-4 md:gap-6 flex-1 max-w-xl text-center md:text-left">
              <span className="inline-block px-3 py-1 rounded-full border-2 border-black bg-white text-black text-xs font-bold tracking-widest uppercase mb-2" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                Nuestra historia
              </span>
              <h2
                className="uppercase tracking-tight text-4xl md:text-6xl lg:text-7xl leading-none text-white break-words text-center md:text-left"
                style={{
                  ...condensedItalic,
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word',
                  WebkitTextStroke: '2px black',
                  textShadow: '3px 3px 0px #000'
                }}
              >
                {slide.headline}
                <span className="block" style={{ ...condensed, wordBreak: "break-word" }}>{slide.sub}</span>
              </h2>
              <p className={`mt-6 text-base md:text-lg text-center md:text-left leading-relaxed font-semibold ${slide.bg === '#D8E600' ? 'text-black' : 'text-white'} text-opacity-90`} style={{ textShadow: slide.dark ? 'none' : '0 1px 8px rgba(0,0,0,0.2)' }}>{slide.description}</p>
              <div className="text-5xl w-full flex justify-center md:justify-start">{slide.icon}</div>
            </div>

            {/* Right column (polaroid image) */}
            <div className="flex-shrink-0 flex items-center justify-center w-full md:w-auto">
              <div
                style={{
                  background: '#ffffff',
                  padding: '10px 10px 32px 10px',
                  borderRadius: '2px',
                  rotate: '2deg',
                }}
                className="shadow-[6px_6px_0_0_#000]"
              >
                <img
                  src={slide.image}
                  alt={slide.headline}
                  loading="lazy"
                  decoding="async"
                  className="w-[260px] h-[200px] md:w-[340px] md:h-[260px] object-cover shadow-[6px_6px_0_0_#000] border-4 border-white block"
                  width={340}
                  height={260}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dot nav — bigger dots, more contrast */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Slide ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? `w-12 h-4 ${dotActive}`
                  : `w-4 h-4 ${dotInactive} hover:opacity-70`
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Partners Section ──────────────────────────────────── */
const PARTNER_TYPES = [
  { name: "Colegios Públicos",             color: "#FF7B72" },
  { name: "Colegios Concertados",          color: "#FF9D42" },
  { name: "AMPAs",                         color: "#D8E600", dark: true },
  { name: "Centros Cívicos",              color: "#35D0BA" },
  { name: "Ludotecas",                    color: "#9C7BFF" },
  { name: "Escuelas Educación Infantil",  color: "#3055C7", light: true },
  { name: "Campus de Verano",             color: "#FF7B72" },
  { name: "Centros de Educación Especial",color: "#35D0BA" },
];

function PartnersSection() {
  return (
    <section className="bg-white py-20 md:py-28 border-b-2 border-black">
      <div className="mx-auto max-w-[1400px] px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Left */}
        <div>
          <h2
            className="uppercase leading-[0.9] tracking-tight text-[12vw] md:text-[7vw] mb-6 text-black"
            style={condensed}
          >
            Centros que
            <span className="block" style={condensedItalic}>
              ya nos <span className="text-[#1D2F8C]">eligen.</span>
            </span>
          </h2>
          <p className="text-black/70 text-lg leading-relaxed max-w-sm">
            Trabajamos con todo tipo de centros educativos del área metropolitana de Barcelona.{" "}
            <strong><span className="text-black font-black">Tu centro educativo,</span> <span className="bg-[#D8E600] text-black font-black px-2 py-0.5 rounded whitespace-nowrap">a un mensaje de distancia.</span></strong>
          </p>
        </div>

        <div
          className="relative px-2 pr-6 max-h-[380px] md:max-h-[500px] overflow-y-auto scrollbar-thin"
          style={{
            maskImage: "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <motion.div
            animate={{ y: [0, -32, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col gap-3 py-6"
          >
            {[...PARTNER_TYPES, ...PARTNER_TYPES].map((p, i) => (
              <div
                key={i}
                style={{ backgroundColor: p.color }}
                className="flex items-center gap-3 rounded-full border-2 border-black px-5 py-3 shadow-[4px_4px_0_0_#000]"
              >
                <span
                  className="text-sm font-bold"
                  style={{ color: p.light ? "#fff" : p.dark ? "#000" : "#000" }}
                >
                  {p.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Manifesto ─────────────────────────────────────────── */
function Manifesto() {
  const pairs = [
    {
      intro: "No creemos en actividades que",
      punch: (
        <span
          style={{
            background: "linear-gradient(180deg, transparent 78%, #FF7B72 78%)",
            paddingBottom: "4px",
          }}
          className="inline"
        >
          no dejan huella.
        </span>
      ),
    },
    {
      intro: "Creemos en experiencias que",
      punch: (
        <span
          style={{
            background: "linear-gradient(180deg, transparent 82%, #3055C7 82%)",
            paddingBottom: "6px",
          }}
          className="inline"
        >
          despiertan curiosidad.
        </span>
      ),
    },
    {
      intro: "Creemos en niños que",
      punch: (
        <span
          style={{
            background: "linear-gradient(180deg, transparent 82%, #D8E600 82%)",
            paddingBottom: "6px",
          }}
          className="inline"
        >
          descubren talentos.
        </span>
      ),
    },
    {
      intro: "Creemos en recuerdos que",
      punch: (
        <span>
          duran{" "}
          <span
            style={{
              background: "linear-gradient(180deg, transparent 82%, #3055C7 82%)",
              paddingBottom: "6px",
            }}
            className="inline"
          >
            toda la vida.
          </span>
        </span>
      ),
    },
  ];

  return (
    <section id="manifesto" className="bg-white pt-14 pb-24 md:pt-16 md:pb-40 border-b-2 border-black">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-12 inline-flex items-center gap-2 rounded-full border-2 border-black bg-[#D8E600] px-4 py-1.5 text-xs font-bold tracking-widest">
          MANIFIESTO
        </div>
        <div className="space-y-10 md:space-y-14">
          {pairs.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="border-b border-black/10 pb-10 md:pb-14 last:border-0 last:pb-0"
            >
              <div
                className="uppercase tracking-tight text-[6vw] sm:text-[4vw] md:text-[3.2vw] lg:text-[48px] mb-2 text-black/70 leading-[1.15]"
                style={condensed}
              >
                {p.intro}
              </div>
              <div
                className="uppercase tracking-tight text-[9vw] sm:text-[6vw] md:text-[5vw] lg:text-[72px] text-black leading-[1.1]"
                style={condensedItalic}
              >
                {p.punch}
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-20 text-black text-2xl md:text-3xl font-black uppercase" style={condensed}>
          Y llevamos más de <span style={{ background: "linear-gradient(180deg, transparent 78%, #D8E600 78%)", paddingBottom: "4px" }}>20 años</span> demostrándolo.
        </p>
      </div>
    </section>
  );
}

/* ─── Activities Grid ───────────────────────────────────── */
function Activities() {
  return (
    <section id="activities" className="bg-white py-20 md:py-28 border-b-2 border-black">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <h2
            className="uppercase leading-none tracking-tight text-[13vw] md:text-[7.5vw]"
            style={condensed}
          >
            Un universo{" "}
            <span style={condensedItalic} className="text-[#1D2F8C]">vivo.</span>
          </h2>
          <p className="max-w-sm text-black/70 text-xl md:text-2xl leading-snug font-medium">
            Cada disciplina, una oportunidad de crecer.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {ACTIVITIES.map((a, i) => (
            <motion.a
              key={a.name}
              href="#contact"
              whileHover={{ y: -8, rotate: -1.5, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ backgroundColor: a.color, color: a.light ? "#fff" : "#000" }}
              className="group relative aspect-square rounded-xl border-2 border-black p-4 flex flex-col justify-between overflow-hidden shadow-[4px_4px_0_0_#000] hover:shadow-[8px_8px_0_0_#000] transition-shadow"
            >
              {/* Number */}
              <div className="w-full">
                <span className="inline-block px-2 py-0.5 bg-black text-white text-xs font-bold rounded-md">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Big icon — center */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', flex: 1 }}>
                {a.icon === "TWEMOJI_GB" ? (
                  <img
                    src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f1ec-1f1e7.png"
                    alt="🇬🇧"
                    style={{ width: '72px', height: '72px', objectFit: 'contain' }}
                    loading="lazy"
                    width={72}
                    height={72}
                  />
                ) : (
                  <span
                    className="text-5xl md:text-6xl text-center leading-none select-none"
                    style={{ filter: "drop-shadow(2px 3px 0px rgba(0,0,0,0.18))" }}
                  >
                    {a.icon}
                  </span>
                )}
              </div>

              {/* Name and Arrow in bottom flex container */}
              <div className="flex items-center justify-between gap-2 w-full">
                <span className="inline-block bg-[#0a0a0a] text-white font-['Barlow_Condensed'] font-bold uppercase tracking-[0.05em] sm:tracking-[0.1em] text-[11px] sm:text-base px-2.5 py-1 rounded-md min-w-0 whitespace-nowrap">
                  {a.name}
                </span>
                <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactForm({ tipo: initialTipo }: { tipo?: 'centro' | 'familia' } = {}) {
  const [perfil, setPerfil] = useState<string>(initialTipo || '');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialTipo) {
      setPerfil(initialTipo);
    }
  }, [initialTipo]);

  const camposCentro = [
    ["Nombre", "text", "nombre", "Tu nombre"],
    ["Centro educativo", "text", "centro", "Nombre del colegio"],
    ["Cargo", "text", "cargo", "Director, AMPA..."],
    ["Teléfono", "tel", "telefono", "657 117 426"],
    ["Email", "email", "email", "tu@email.com"],
  ];

  const camposFamilia = [
    ["Nombre", "text", "nombre", "Tu nombre"],
    ["Nombre del niño/a", "text", "nino", "Nombre del niño o niña"],
    ["Edad", "number", "edad", "Años"],
    ["Teléfono", "tel", "telefono", "657 117 426"],
    ["Email", "email", "email", "tu@email.com"],
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const selectedTipo = formData.get("tipo") as string || perfil;
    const data = { ...Object.fromEntries(formData.entries()), tipo: selectedTipo };
    try {
      await fetch("https://n8n.kovia.io/webhook/15cbd43f-d161-4131-9ec3-334f9dfd4de1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSent(true);
    } catch {
      setSent(true);
    } finally {
      setLoading(false);
    }
  };

  if (sent) return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
      className="rounded-3xl border-2 border-black bg-white p-10 flex flex-col items-center justify-center text-center min-h-[380px] shadow-[6px_6px_0_0_#000]">
      <div className="h-16 w-16 rounded-full bg-[#D8E600] border-2 border-black flex items-center justify-center text-black text-3xl font-bold mb-6 shadow-[2px_2px_0_0_#000]">✓</div>
      <div className="text-3xl text-black uppercase" style={condensed}>¡Recibido!</div>
      <p className="text-black/80 mt-3 font-semibold text-lg max-w-xs">Te contactamos en menos de 24h laborables.</p>
    </motion.div>
  );

  return (
    <div className="space-y-4">
      {/* "¿Quién eres?" más visible */}
      <p
        className="inline-block bg-white text-[#0a0a0a] border-2 border-black shadow-[4px_4px_0_0_#000] rounded-full px-4 py-2 text-2xl md:text-3xl font-bold uppercase mb-4"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        👉 ¿QUIÉN ERES?
      </p>

      {/* Formulario — siempre visible */}
      <form onSubmit={handleSubmit} className="rounded-3xl border-2 border-[#D8E600] bg-white p-6 md:p-8 space-y-5 shadow-[4px_4px_0_0_#D8E600]">
        <label className="block">
          <span className="text-base font-black uppercase tracking-widest text-black mb-3 block">Soy...</span>
          <div className="grid grid-cols-2 gap-3">
            {[['centro', '🏫', 'Centro / AMPA'], ['familia', '👨👩👧', 'Una familia']].map(([val, emoji, label]) => (
              <button key={val} type="button"
                onClick={() => setPerfil(val)}
                className={`rounded-2xl border-2 border-black py-4 px-3 text-sm font-bold uppercase transition-all flex flex-col items-center gap-2 ${perfil === val ? 'bg-[#D8E600] text-black shadow-[3px_3px_0_0_#000]' : 'bg-white/20 text-white hover:bg-white/30'}`}
              >
                <span className="text-2xl">{emoji}</span>
                {label}
              </button>
            ))}
          </div>
          <input type="hidden" name="tipo" value={perfil} />
        </label>

        {perfil && (
          <>
            {(perfil === 'centro' ? camposCentro : camposFamilia).map(([label, type, name, placeholder]) => (
              <label key={name} className="block">
                <span className="text-xs font-bold uppercase tracking-widest text-black font-black mb-2 block">{label}</span>
                <input type={type} name={name} placeholder={placeholder} required
                  className="w-full rounded-xl border-2 border-black/20 bg-gray-50 px-4 py-3 text-base text-black placeholder:text-black/30 focus:border-[#1D2F8C] outline-none transition-all" />
              </label>
            ))}
            <label className="block">
              <span className="text-xs font-bold uppercase tracking-widest text-black font-black mb-2 block">Mensaje</span>
              <textarea name="mensaje" rows={3} placeholder={perfil === 'centro' ? 'Cuéntanos qué necesita tu centro...' : 'Cuéntanos en qué actividad está interesado/a...'}
                className="w-full rounded-xl border-2 border-black/20 bg-gray-50 px-4 py-3 text-base text-black placeholder:text-black/30 focus:border-[#1D2F8C] outline-none transition-all resize-none" />
            </label>
            <button type="submit" disabled={loading}
              className="mt-2 w-full rounded-full bg-[#D8E600] text-black py-4 border-2 border-black transition-all hover:bg-[#c8d500] hover:scale-[1.05] uppercase shadow-[4px_4px_0_0_#000] font-black cursor-pointer"
              style={btnStyle}>
              <span className="inline-flex items-center gap-2 justify-center">
                {loading ? "ENVIANDO..." : "SOLICITAR CITA"}{" "}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9" fill="white" stroke="currentColor" strokeWidth="2"/>
                  <path d="M7 10h6M11 7l3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
          </>
        )}
      </form>
    </div>
  );
}

/* ─── CTA Section ──────────────────────────────────────────── */
function CTA() {
  return (
    <section id="contact" className="relative bg-[#1D2F8C] text-white py-20 md:py-28 overflow-hidden border-b-2 border-black">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-25 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, #3055C7 0%, transparent 55%)",
            "radial-gradient(circle at 80% 70%, #3055C7 0%, transparent 55%)",
            "radial-gradient(circle at 20% 30%, #3055C7 0%, transparent 55%)",
          ],
        }}
        transition={{ duration: 9, repeat: Infinity }}
      />

      {/* Floating stickers */}
      <motion.img
        src="/sticker-ball.webp" alt=""
        className="pointer-events-none absolute bottom-10 right-10 w-20 h-20 opacity-80 drop-shadow-xl"
        style={{ mixBlendMode: "multiply" }}
        animate={{ y: [0, -14, 0], rotate: [0, 12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src="/sticker-palette.webp" alt=""
        className="pointer-events-none absolute bottom-6 right-6 w-14 h-14 opacity-40 drop-shadow-xl hidden md:block"
        style={{ mixBlendMode: "multiply" }}
        animate={{ y: [0, -8, 0], rotate: [-5, 5, -5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.img
        src="/sticker-star.webp" alt=""
        className="pointer-events-none absolute bottom-16 left-1/4 w-12 h-12 opacity-60 drop-shadow-xl"
        style={{ mixBlendMode: "multiply" }}
        animate={{ y: [0, -8, 0], rotate: [5, -10, 5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6">
        {/* Title — full-width, no overlap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <div className="relative inline-block pb-12 mb-6">
            <h2 className="font-black text-6xl md:text-8xl uppercase tracking-tighter text-white" style={condensedItalic}>
              <span className="mr-2 inline-block">¿</span>
              <span className="text-[#D8E600] tracking-wider" style={{ letterSpacing: '0.05em' }}>
                HABLAMOS
              </span>
              <span className="ml-2 inline-block">?</span>
            </h2>
            <div className="absolute left-0 right-0 h-2 bg-[#D8E600] bottom-0"></div>
          </div>
        </motion.div>

        {/* Description + Form — separate row */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: description + mascot */}
          <div className="flex flex-col justify-between gap-12 md:min-h-[540px]">
            <p className="text-2xl text-white max-w-md leading-relaxed" style={{ fontWeight: 600 }}>
              Descubre cómo podemos transformar las actividades de tu centro educativo. Estamos <span className="bg-[#D8E600] text-black font-black px-2 py-0.5 rounded inline-block">a un mensaje de distancia.</span>
            </p>
            {/* Trust bullets */}
            <ul className="space-y-4 text-white/90">
              {[
                "Respuesta en menos de 24h",
                "Programa a medida sin coste",
                "Abiertos a cualquier tipo de actividad",
              ].map((text) => (
                <li key={text} className="text-lg font-semibold flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D8E600] text-black flex items-center justify-center font-black text-xs shadow-[1.5px_1.5px_0_0_#000] border border-black">
                    ✓
                  </span>
                  {text}
                </li>
              ))}
            </ul>
            {/* Mascot — estático, sin animación */}
            <div className="w-36 md:w-44 rounded-xl overflow-hidden">
              <img src="/diversplas-logo.webp" alt="Diversplas" className="w-full h-auto object-cover block" loading="lazy" decoding="async" width={176} height={138} />
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}



/* ─── Footer (two Slush-style colored cards) ────────────── */
function FooterCard({
  bg, blob, headline, headlineItalic, dark = false, children,
}: {
  bg: string; blob: string; headline: ReactNode; headlineItalic: ReactNode;
  dark?: boolean; children: ReactNode;
}) {
  const tc = dark ? "text-black" : "text-white";
  return (
    <div
      className="relative rounded-3xl border-2 border-white overflow-hidden p-8 md:p-10 flex flex-col md:flex-row md:justify-between md:items-center gap-8 min-h-[300px]"
      style={{ backgroundColor: bg }}
    >
      {/* Blob decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute"
          style={{
            width: "110%", height: "55%", top: "20%", left: "-5%",
            backgroundColor: blob,
            borderRadius: "50% 60% 40% 70% / 60% 30% 70% 40%",
            transform: "rotate(-10deg)",
            opacity: 0.4,
          }}
        />
        <div
          className="absolute rounded-full"
          style={{ width: "25%", height: "40%", top: "-8%", right: "8%", backgroundColor: blob, opacity: 0.3 }}
        />
      </div>
      {/* Left Column (Title + Description) */}
      <div className="relative z-10 flex flex-col gap-4 max-w-xl">
        <h3
          className={`uppercase leading-[0.85] tracking-tight text-[14vw] md:text-[6vw] lg:text-[72px] ${tc}`}
          style={condensed}
        >
          {headline}
          {headlineItalic && (
            <span 
              className="block w-fit" 
              style={{ 
                ...condensedItalic,
                marginTop: '12px'
              }}
            >
              {headlineItalic}
            </span>
          )}
        </h3>
        <div className="bg-[#1D2F8C]" style={{ width: '60px', height: '6px', marginTop: '20px', marginBottom: '16px' }} />
        <p className="text-black font-bold text-lg md:text-xl leading-relaxed max-w-md">
          Más de 20 años a tu lado.<br/>
          <span style={{ background: '#1D2F8C', color: '#ffffff', padding: '2px 10px', borderRadius: '6px', fontWeight: 900 }}>Empieza hoy.</span>
        </p>
      </div>
      {/* Right Column (WhatsApp button + Number) */}
      <div className={`relative z-10 w-full md:w-auto ${tc}`}>{children}</div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      {/* Single unified CTA footer card — amarillo corporativo */}
      <div className="bg-white border-b-2 border-black px-4 md:px-6 py-6">
        <FooterCard
          bg="#D8E600"
          blob="#E8F520"
          headline={
            <span className="flex items-center flex-nowrap w-full" style={{ fontSize: "clamp(2rem, 11vw, 6vw)" }}>
              <span className="text-[#1D2F8C]" style={{ marginRight: '4px', transform: 'translateY(-5%)' }}>¿</span>
              <span className="tracking-wider" style={{ letterSpacing: '0.05em' }}>EMPEZAMOS</span>
              <span className="text-[#1D2F8C]" style={{ marginLeft: '4px', fontWeight: 900, textShadow: '1px 1px 0 #000', transform: 'translateY(-5%)' }}>?</span>
            </span>
          }
          dark
        >
          <div className="flex flex-col items-start md:items-end gap-4">
            <a
              href="https://wa.me/34657117426"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white text-black px-7 py-3.5 font-bold border-2 border-black hover:bg-black hover:text-white transition-all duration-300 hover:scale-[1.05] uppercase shadow-[4px_4px_0_0_#000] group w-full"
              style={btnStyle}
            >
              <svg className="w-5 h-5 fill-current transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              ESCRÍBENOS
            </a>
            <a
              href="tel:+34657117426"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#1D2F8C] text-white px-7 py-3.5 font-bold border-2 border-black hover:bg-black transition-all shadow-[4px_4px_0_0_#000] uppercase w-full"
              style={btnStyle}
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              +34 657 117 426
            </a>
          </div>
        </FooterCard>
      </div>

      {/* Bottom bar */}
      <div className="bg-white py-6 px-6">
        <div className="mx-auto max-w-[1400px] flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-4 flex-wrap">
            <img
              src="/diversplas-logo.webp"
              alt="DIVERSPLAS"
              className="h-14 w-auto rounded-lg"
              loading="lazy"
              decoding="async"
              width={71}
              height={56}
            />
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <a
                href="https://www.instagram.com/diversplas_extraescolares"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-black text-black uppercase tracking-wider border-b-2 border-[#D8E600] hover:text-[#1D2F8C] hover:border-[#1D2F8C] transition-colors leading-none pb-0.5 inline-block"
                aria-label="Ir al Instagram de Diversplas"
              >
                Ir al Instagram ↗
              </a>
              <a
                href="https://wa.me/34657117426"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-black text-black uppercase tracking-wider border-b-2 border-[#35D0BA] hover:text-[#1D2F8C] hover:border-[#1D2F8C] transition-colors leading-none pb-0.5 inline-block"
                aria-label="Ir al WhatsApp de Diversplas"
              >
                Ir al WhatsApp ↗
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs sm:text-sm">
            {[["Contacto", "#contact"], ["Actividades", "#activities"], ["Proceso", "#process"], ["Zonas", "#zones"]].map(([l, h]) => (
              <a
                key={h}
                href={h}
                className="text-black font-black uppercase tracking-wide hover:text-[#1D2F8C] transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              className="rounded-full border-2 border-black h-9 w-9 inline-flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              href="mailto:rakelulu@outlook.es"
              aria-label="Correo de contacto de Diversplas"
              title="rakelulu@outlook.es"
            >
              <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
            <a
              className="rounded-full border-2 border-black h-9 w-9 inline-flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              href="tel:+34657117426"
              aria-label="Llamar a Diversplas"
              title="+34 657 117 426"
            >
              <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
            <a
              className="rounded-full border-2 border-black h-9 w-9 inline-flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              href="https://wa.me/34657117426"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp de Diversplas"
              title="WhatsApp"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a
              className="rounded-full border-2 border-black h-9 w-9 inline-flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              href="https://www.instagram.com/diversplas_extraescolares"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Diversplas"
              title="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <span className="text-xs text-black font-black">© {new Date().getFullYear()} Diversplas</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Root ──────────────────────────────────────────────── */
function Index() {
  return (
    <div className="bg-white text-black font-sans antialiased selection:bg-[#D8E600] selection:text-black">
      <Nav />
      <Hero />

      <FeatureSection
        headline="EMPIEZA AQUÍ:"
        headlineItalic={
          <>
            ACTIVIDADES
            <span className="block text-[#0a0a0a] text-base md:text-lg font-bold uppercase tracking-wide mt-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, color: '#0a0a0a', fontStyle: 'normal', letterSpacing: '0.025em' }}>
              <svg className="w-5 h-5 inline-block mr-2 text-[#0a0a0a] align-middle" viewBox="0 0 20 20" fill="none" style={{ verticalAlign: 'middle', marginTop: '-4px' }}>
                <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2"/>
                <path d="M7 10h6M11 7l3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              NOS ADAPTAMOS A{" "}
              <span className="bg-[#D8E600] border-2 border-black px-2 py-0.5 inline-block" style={{ backgroundColor: '#D8E600', fontStyle: 'normal' }}>
                CUALQUIER ACTIVIDAD
              </span>
            </span>
          </>
        }
        description={<span>Más de 20 experiencias diseñadas para que cada niño encuentre <span className="bg-[#D8E600] text-black font-black px-2.5 py-0.5 rounded whitespace-nowrap inline">su pasión</span>. Nos adaptamos a cualquier tipo de actividad.</span>}
        links={[{ label: "VER TODO", href: "#activities" }, { label: "PREGUNTAS", href: "#contact" }]}
        visual={<ActivityCardsVisual />}
      />

      {/* Feature: Program (flipped) */}
      <FeatureSection
        id="process"
        headline="DISEÑAMOS"
        headlineItalic="TU PROGRAMA"
        description={<p style={{ lineHeight: '1.8' }}>Construimos un programa de actividades <span style={{ background: '#D8E600', padding: '1px 6px', borderRadius: '4px', fontWeight: 900, display: 'inline', whiteSpace: 'nowrap' }}>a medida</span>, con propósito y carácter.</p>}
        extra="Escuchamos, diseñamos, coordinamos, acompañamos y mejoramos."
        links={[{ label: "SABER MÁS", href: "#manifesto" }, { label: "CONTACTAR", href: "#contact" }]}
        visual={<ProgramVisual />}
        flip
      />

      {/* Feature: Stats */}
      <FeatureSection
        headline="COORDINAMOS"
        headlineItalic="TODO"
        description={<span>Gestionamos equipos, materiales y comunicación <span className="bg-[#D8E600] text-black font-black px-2 py-0.5 rounded">con familias sin fricciones</span>.</span>}
        extra="Presencia real cada semana. Atención 100% humana y cercana. Hablas con personas, no con máquinas."
        visual={<StatsVisual />}
      />

      {/* Feature: Zones (flipped) */}
      <FeatureSection
        id="zones"
        headline="OPERAMOS EN"
        headlineItalic={<span className="bg-[#3055C7] text-white px-3 py-0.5 rounded inline-block">BARCELONA</span>}
        description="Santa Coloma de Gramenet, Badalona, Mollet del Vallès y Sant Fost de Campsentelles."
        extra={<span>Siempre <span className="bg-[#D8E600] text-black font-black px-1.5 py-0.5 rounded">cerca de tu centro</span> educativo.</span>}
        visual={<ZonesCardsVisual />}
        flip
      />

      <CtaMarquee />
      <TrustSection />
      <PartnersSection />
      <Manifesto />
      <Activities />
      <CTA />
      <Footer />
    </div>
  );
}
