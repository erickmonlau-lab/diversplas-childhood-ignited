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
  }),
  component: Index,
}) as any);

/* ─── Data ─────────────────────────────────────────────── */

const ACTIVITIES = [
  { name: "Fútbol",          color: "#FF7B72",                icon: "⚽" },
  { name: "Básquet",         color: "#1D2F8C", light: true,  icon: "🏀" },
  { name: "Multideporte",    color: "#D8E600",                icon: "🏃" },
  { name: "Karate",          color: "#9C7BFF",                icon: "🥋" },
  { name: "Zumba",           color: "#FF9D42",                icon: "🕺" },
  { name: "Baile",           color: "#35D0BA",                icon: "💃" },
  { name: "Hip Hop",         color: "#FF7B72",                icon: "🎤" },
  { name: "Inglés",          color: "#1D2F8C", light: true,  icon: "🌍" },
  { name: "Manualidades",    color: "#D8E600",                icon: "✂️" },
  { name: "Patinaje",        color: "#FF7B72",                icon: "⛸️" },
  { name: "Casales",         color: "#1D2F8C", light: true,  icon: "🏕️" },
  { name: "Refuerzo",        color: "#9C7BFF",                icon: "📚" },
];

const MARQUEE_COLORS = ["#FF7B72", "#3055C7", "#FF9D42", "#35D0BA", "#9C7BFF", "#D8E600", "#1D2F8C"];

const TRUST_SLIDES = [
  {
    headline: "+20 AÑOS",
    sub: "DE EXPERIENCIA",
    description: "Llevamos más de dos décadas creando experiencias que marcan a los niños y a sus familias.",
    icon: "🌟",
    bg: "#35D0BA",
    blob: "#52DCC6",
    dark: false,
  },
  {
    headline: "CONFIADOS",
    sub: "& RECOMENDADOS",
    description: "Más de 50 colegios y AMPAs del área metropolitana de Barcelona confían en nosotros cada curso.",
    icon: "✓",
    bg: "#D8E600",
    blob: "#E8F520",
    dark: true,
  },
  {
    headline: "RESULTADOS",
    sub: "COMPROBADOS",
    description: "Niños más felices, más activos y con mayores habilidades sociales. Eso es lo que medimos.",
    icon: "🚀",
    bg: "#FF7B72",
    blob: "#FF9590",
    dark: false,
  },
  {
    headline: "DISEÑO",
    sub: "PERSONALIZADO",
    description: "Cada programa es único. Adaptado al centro, a los alumnos y al equipo docente.",
    icon: "🎨",
    bg: "#FF9D42",
    blob: "#FFB468",
    dark: false,
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

/* ─── Cursor ────────────────────────────────────────────── */
function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setHover(!!(e.target as HTMLElement).closest("a,button"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div
      className="pointer-events-none fixed z-[100] mix-blend-difference hidden md:block"
      style={{
        left: pos.x, top: pos.y,
        transform: `translate(-50%,-50%) scale(${hover ? 2.4 : 1})`,
        transition: "transform 0.18s ease",
      }}
    >
      <div className="h-4 w-4 rounded-full bg-white" />
    </div>
  );
}

/* ─── Nav ───────────────────────────────────────────────── */
function Nav() {
  return (
    <header className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between pointer-events-none">
      <a
        href="#top"
        className="pointer-events-auto flex items-center rounded-full border-2 border-black bg-white/95 backdrop-blur-md px-3 py-1.5 shadow-[3px_3px_0_0_#000] hover:shadow-[5px_5px_0_0_#000] transition-shadow overflow-hidden"
      >
        <img src="/diversplas-logo.jpeg" alt="DIVERSPLAS" className="h-14 w-auto" />
      </a>

      {/* Links pill */}
      <nav className="pointer-events-auto hidden md:flex items-center gap-0.5 rounded-full border-2 border-black bg-white/95 backdrop-blur-md px-2 py-1.5 shadow-[3px_3px_0_0_#000]">
        {[
          ["Actividades", "#activities"],
          ["Proceso",     "#process"],
          ["Zonas",       "#zones"],
          ["Contacto", "#contact"],
        ].map(([label, href]) => (
          <a
            key={href}
            href={href}
            className="px-3 py-1.5 rounded-full text-sm font-semibold hover:bg-black hover:text-white transition-colors"
          >
            {label}
          </a>
        ))}
      </nav>

      {/* CTA */}
      <a
        href="#contact"
        className="pointer-events-auto flex items-center gap-2 rounded-full border-2 border-black bg-[#D8E600] text-black px-4 py-2 font-bold hover:bg-[#c8d500] transition-colors shadow-[3px_3px_0_0_#000]"
        style={btnStyle}
      >
        SOLICITAR CITA
      </a>
    </header>
  );
}

/* ─── Hero ──────────────────────────────────────────────── */
function Hero() {
  return (
    <section id="top" className="relative min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden pt-24 pb-20">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: "radial-gradient(#000 1.5px,transparent 1.5px)", backgroundSize: "36px 36px" }}
      />

      {/* Soft color blobs */}
      <div className="pointer-events-none absolute top-20 -left-20 h-72 w-72 rounded-full bg-[#D8E600] blur-3xl opacity-25" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-80 w-80 rounded-full bg-[#3055C7] blur-3xl opacity-10" />

      {/* Floating mascot — desktop right */}
      <motion.div
        className="pointer-events-none absolute right-[3%] top-1/2 -translate-y-1/2 w-[26%] max-w-[280px] hidden lg:block"
        animate={{ y: [0, -22, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src={mascotAsset.url} alt="" className="w-full h-auto drop-shadow-[0_24px_48px_rgba(29,47,140,0.35)]" />
      </motion.div>

      {/* 1. Soccer ball — TOP LEFT */}
      <motion.div
        className="pointer-events-none absolute top-24 left-[4%] w-28 h-28 md:w-32 md:h-32 hidden md:block"
        animate={{ y: [0, -18, 0], rotate: [0, 18, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src="/sticker-ball.png" alt="" className="w-full h-full" style={{ mixBlendMode: "multiply" }} />
      </motion.div>

      {/* 2. Trophy — TOP RIGHT */}
      <motion.div
        className="pointer-events-none absolute top-20 right-[4%] w-24 h-24 md:w-28 md:h-28 hidden md:block"
        animate={{ y: [0, -14, 0], rotate: [-6, 6, -6] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      >
        <img src="/sticker-trophy.png" alt="" className="w-full h-full" style={{ mixBlendMode: "multiply" }} />
      </motion.div>

      {/* 3. Palette — BOTTOM LEFT */}
      <motion.div
        className="pointer-events-none absolute bottom-20 left-[4%] w-24 h-24 md:w-28 md:h-28 hidden md:block"
        animate={{ y: [0, -14, 0], rotate: [-8, 6, -8] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <img src="/sticker-palette.png" alt="" className="w-full h-full" style={{ mixBlendMode: "multiply" }} />
      </motion.div>

      {/* 4. Star — BOTTOM RIGHT */}
      <motion.div
        className="pointer-events-none absolute bottom-16 right-[5%] w-20 h-20 md:w-24 md:h-24 hidden md:block"
        animate={{ y: [0, -12, 0], rotate: [8, -8, 8] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <img src="/sticker-star.png" alt="" className="w-full h-full" style={{ mixBlendMode: "multiply" }} />
      </motion.div>

      {/* 5. Karate — LEFT CENTER */}
      <motion.div
        className="pointer-events-none absolute top-[48%] -translate-y-1/2 left-[3%] w-16 h-16 md:w-20 md:h-20 hidden md:block"
        animate={{ y: [0, -10, 0], rotate: [-5, 5, -5] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
      >
        <img src="/sticker-karate.png" alt="" className="w-full h-full" style={{ mixBlendMode: "multiply" }} />
      </motion.div>

      {/* 6. Ball small — RIGHT CENTER (hidden on lg) */}
      <motion.div
        className="pointer-events-none absolute top-[45%] -translate-y-1/2 right-[3%] w-16 h-16 md:w-20 md:h-20 hidden md:block lg:hidden"
        animate={{ y: [0, -10, 0], rotate: [10, -10, 10] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.3 }}
      >
        <img src="/sticker-ball.png" alt="" className="w-full h-full" style={{ mixBlendMode: "multiply" }} />
      </motion.div>

      {/* 8. Music note — RIGHT mid-top */}
      <motion.div
        className="pointer-events-none absolute top-[28%] right-[7%] w-16 h-16 md:w-20 md:h-20 hidden md:block"
        animate={{ y: [0, -14, 0], rotate: [-8, 8, -8] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      >
        <img src="/sticker-music.png" alt="" className="w-full h-full" style={{ mixBlendMode: "multiply" }} />
      </motion.div>

      {/* 9. Medal — RIGHT mid-bottom */}
      <motion.div
        className="pointer-events-none absolute bottom-[30%] right-[3%] w-16 h-16 md:w-20 md:h-20 hidden md:block"
        animate={{ y: [0, -10, 0], rotate: [6, -6, 6] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
      >
        <img src="/sticker-medal.png" alt="" className="w-full h-full" style={{ mixBlendMode: "multiply" }} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-5 sm:px-8 max-w-5xl mx-auto w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-black text-white px-5 py-2 text-sm font-bold mb-10 shadow-[3px_3px_0_0_#1D2F8C]"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-[#35D0BA] animate-pulse" />
          +20 años en Barcelona · Colegios · AMPAs · Centros
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="uppercase leading-[0.82] tracking-tight text-[13vw] sm:text-[12vw] md:text-[11vw] lg:text-[125px]"
          style={condensed}
        >
          <span className="block">No solo</span>
          <span className="block text-[#1D2F8C]" style={condensedItalic}>extraescolares.</span>
          <span className="block">
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
          Mucho más que rellenar las tardes. Un espacio para jugar, aprender y crecer.{" "}
          <span className="text-black/90 font-semibold">Llevamos más de 20 años diseñando actividades para colegios y AMPAs de Barcelona, ofreciendo total tranquilidad y confianza a las familias.</span>
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
            SOLICITAR CITA <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#activities"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-7 py-3.5 font-bold border-2 border-black hover:bg-[#D8E600] transition-colors uppercase tracking-wide shadow-[4px_4px_0_0_#000] w-full sm:w-auto"
            style={btnStyle}
          >
            VER ACTIVIDADES
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Feature Section ───────────────────────────────────── */
type FeatureLink = { label: string; href: string };
interface FeatureSectionProps {
  id?: string;
  headline: string;
  headlineItalic?: string;
  description: string;
  extra?: string;
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
      className="flex flex-col justify-center py-8 md:py-0"
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
      <p className={`text-xl md:text-2xl leading-relaxed max-w-lg ${dark ? "text-white/90" : "text-black/75"}`}>{description}</p>
      {extra && <p className={`text-xl md:text-2xl leading-relaxed max-w-lg mt-4 ${dark ? "text-white/90" : "text-black/75"}`}>{extra}</p>}
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
    >
      {visual}
    </motion.div>
  );

  return (
    <section
      id={id}
      className={`border-b-2 border-black py-28 md:py-40 ${dark ? "bg-[#0a0a0a]" : "bg-white"}`}
    >
      <div className="mx-auto max-w-[1400px] px-6 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        {flip ? <>{vis}{text}</> : <>{text}{vis}</>}
      </div>
    </section>
  );
}

/* ─── Visuals ───────────────────────────────────────────── */

function ActivityCardsVisual() {
  return (
    <div className="rounded-3xl bg-[#0a0a0a] border-2 border-black p-8 md:p-10 overflow-hidden relative min-h-[380px] md:min-h-[440px]">
      {/* bg glow */}
      <div
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: "radial-gradient(circle at 25% 30%, #3055C7, transparent 55%), radial-gradient(circle at 75% 70%, #9C7BFF, transparent 55%)" }}
      />
      {/* Header */}
      <div className="relative mb-6">
        <div className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Actividades disponibles</div>
        <div className="text-white font-black text-3xl md:text-4xl" style={condensed}>+20 experiencias</div>
      </div>
      {/* Tags */}
      <div className="relative flex flex-wrap gap-2.5">
        {ACTIVITIES.slice(0, 14).map((a) => (
          <span
            key={a.name}
            style={{ backgroundColor: a.color, color: a.light ? "#fff" : "#000" }}
            className="rounded-full px-4 py-1.5 text-sm font-bold border border-black/20 whitespace-nowrap"
          >
            {a.icon} {a.name}
          </span>
        ))}
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
    <div className="rounded-3xl bg-[#9C7BFF] border-2 border-black p-8 md:p-10 overflow-hidden relative min-h-[380px] md:min-h-[440px]">
      <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-white/10 -translate-y-1/3 translate-x-1/3" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-black/10 translate-y-1/3 -translate-x-1/3" />
      <div className="relative mb-7">
        <div className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">Tu programa</div>
        <div className="text-white font-black text-3xl md:text-4xl" style={condensed}>A medida, con propósito</div>
      </div>
      <div className="relative space-y-3">
        {steps.map((s) => (
          <div key={s.n} className="flex items-center gap-4 bg-white/15 backdrop-blur-sm rounded-xl px-5 py-3.5 border border-white/10">
            <span className="text-white font-bold text-sm font-mono w-6">{s.n}</span>
            <span className="h-3 w-3 rounded-full flex-shrink-0" style={{ backgroundColor: s.c }} />
            <span className="text-white font-bold text-lg">{s.t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatsVisual() {
  const stats = [
    { n: "+20", label: "Años" },
    { n: "+30", label: "Centros" },
    { n: "+5k", label: "Alumnos" },
    { n: "20+", label: "Actividades" },
  ];
  return (
    <div className="rounded-3xl bg-[#35D0BA] border-2 border-black p-8 md:p-10 overflow-hidden relative min-h-[380px] md:min-h-[440px]">
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/10 translate-y-1/3 -translate-x-1/3" />
      <div className="relative mb-7">
        <div className="text-black/50 text-xs font-bold uppercase tracking-widest mb-1">Nuestro impacto</div>
        <div className="text-black font-black text-3xl md:text-4xl" style={condensed}>Resultados reales</div>
      </div>
      <div className="relative grid grid-cols-2 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-white/30 rounded-2xl p-5 md:p-6 text-center border border-black/10">
            <div
              className="text-5xl md:text-6xl leading-none text-black font-black"
              style={condensed}
            >
              {s.n}
            </div>
            <div className="text-xs font-bold text-black/60 mt-2 uppercase tracking-widest">{s.label}</div>
          </div>
        ))}
      </div>
      <p className="relative mt-4 text-black/40 text-xs font-medium">Datos reales desde 2005</p>
    </div>
  );
}

function ZonesCardsVisual() {
  const zones = [
    { city: "Santa Coloma", sub: "de Gramenet", color: "#FF7B72", light: false, centers: 8 },
    { city: "Badalona",     sub: "",             color: "#1D2F8C", light: true,  centers: 12 },
    { city: "Mollet",       sub: "del Vallès",   color: "#D8E600", light: false, centers: 5 },
    { city: "Sant Fost",    sub: "de Campsentelles", color: "#35D0BA", light: false, centers: 3 },
  ];

  const Card = ({ z, className = "" }: { z: typeof zones[0]; className?: string }) => (
    <motion.div
      style={{ backgroundColor: z.color }}
      className={`rounded-2xl border-2 border-black p-6 flex flex-col justify-between shadow-[4px_4px_0_0_#000] hover:shadow-[8px_8px_0_0_#000] transition-shadow duration-200 cursor-default ${className}`}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
    >
      <div
        className="uppercase leading-[0.88] text-3xl md:text-4xl break-words"
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 900,
          color: z.light ? "#fff" : "#000",
        }}
      >
        {z.city}
        {z.sub && (
          <span className="block text-xl md:text-2xl mt-0.5">{z.sub}</span>
        )}
      </div>
      <div
        className="text-xs font-bold mt-5 uppercase tracking-wider"
        style={{ color: z.light ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.45)" }}
      >
        Zona activa · +{z.centers} centros
      </div>
    </motion.div>
  );

  return (
    <>
      {/* Mobile: horizontal scroll */}
      <div className="flex md:hidden gap-3 overflow-x-auto pb-3 snap-x snap-mandatory -mx-2 px-2">
        {zones.map((z) => (
          <Card key={z.city} z={z} className="flex-shrink-0 snap-start min-h-[160px]" style={{ minWidth: "200px" } as React.CSSProperties} />
        ))}
      </div>
      {/* Desktop: 2×2 grid */}
      <div className="hidden md:grid grid-cols-2 gap-4">
        {zones.map((z) => (
          <Card key={z.city} z={z} className="min-h-[190px]" />
        ))}
      </div>
    </>
  );
}

/* ─── CTA Marquee (Slush-style black section) ───────────── */
function CtaMarquee() {
  const ROW1 = ["FÚTBOL","BAILE","INGLÉS","KARATE","HIP HOP","ZUMBA","PATINAJE","BÁSQUET","MULTIDEPORTE"];
  const ROW2 = ["MANUALIDADES","REFUERZO","CASALES","INGLÉS","BAILE","FÚTBOL","KARATE","ZUMBA","HIP HOP"];

  return (
    <section className="bg-[#0a0a0a] py-10 overflow-hidden border-y-2 border-black relative">
      {/* Row 1 – scrolls LEFT → */}
      <div className="relative overflow-hidden mb-3">
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
        >
          {[...ROW1, ...ROW1].map((t, i) => {
            const c = MARQUEE_COLORS[i % MARQUEE_COLORS.length];
            const isLight = c === "#3055C7" || c === "#1D2F8C";
            return (
              <span
                key={i}
                style={{
                  backgroundColor: c,
                  color: isLight ? "#fff" : "#000",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                }}
                className="inline-flex items-center rounded-2xl border-2 border-white/10 px-10 py-5 text-xl md:text-2xl uppercase tracking-tight whitespace-nowrap flex-shrink-0"
              >
                {t}
              </span>
            );
          })}
        </motion.div>
      </div>

      {/* Row 2 – scrolls RIGHT ← (opposite direction) */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
        >
          {[...ROW2, ...ROW2].map((t, i) => {
            const c = MARQUEE_COLORS[(i + 4) % MARQUEE_COLORS.length];
            const isLight = c === "#3055C7" || c === "#1D2F8C";
            return (
              <span
                key={i}
                style={{
                  backgroundColor: c,
                  color: isLight ? "#fff" : "#000",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                }}
                className="inline-flex items-center rounded-2xl border-2 border-white/10 px-10 py-5 text-xl md:text-2xl uppercase tracking-tight whitespace-nowrap flex-shrink-0"
              >
                {t}
              </span>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Trust Section (Slush-style colored slides) ────────── */
function TrustSection() {
  const [current, setCurrent] = useState(0);
  const slides = TRUST_SLIDES;
  const slide = slides[current];
  const textColor = slide.dark ? "text-black" : "text-white";
  const subColor  = slide.dark ? "text-black/50" : "text-white/50";
  const descColor = slide.dark ? "text-black/70" : "text-white/90";
  const btnBorder = "border-black bg-white text-black hover:bg-black hover:text-white";
  const dotActive = slide.dark ? "bg-black" : "bg-white";
  const dotInactive= slide.dark ? "bg-black/25" : "bg-white/35";

  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, [slides.length]);

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
        className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full border-2 flex items-center justify-center transition-colors text-lg ${btnBorder}`}
      >
        ←
      </button>
      <button
        aria-label="Siguiente"
        onClick={() => setCurrent((c) => (c + 1) % slides.length)}
        className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full border-2 flex items-center justify-center transition-colors text-lg ${btnBorder}`}
      >
        →
      </button>

      {/* Content */}
      <div className="relative z-10 py-28 md:py-40 px-16 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <p className={`text-xs font-bold uppercase tracking-[0.3em] mb-6 ${subColor}`}>Nuestra historia</p>
            <h2
              className={`uppercase tracking-tight ${textColor} break-words`}
              style={{
                ...condensedItalic,
                fontSize: "clamp(2rem, 8.5vw, 6.875rem)",
                lineHeight: 0.85,
                wordBreak: "break-word",
                overflowWrap: "break-word",
              }}
            >
              {slide.headline}
              <span className="block" style={{ ...condensed, wordBreak: "break-word" }}>{slide.sub}</span>
            </h2>
            <p className={`mt-6 text-lg max-w-sm mx-auto leading-relaxed ${descColor}`}>{slide.description}</p>
            <div className="mt-6 text-5xl">{slide.icon}</div>
          </motion.div>
        </AnimatePresence>

        {/* Dot nav — bigger dots, more contrast */}
        <div className="flex items-center justify-center gap-3 mt-14">
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
          <p className="text-black/70 text-lg leading-relaxed max-w-sm mb-8">
            Trabajamos con todo tipo de centros educativos del área metropolitana de Barcelona.{" "}
            <strong>Tu centro educativo, a un mensaje de distancia.</strong>
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#D8E600] text-black px-6 py-3 font-bold border-2 border-black hover:bg-[#c8d500] transition-colors uppercase shadow-[4px_4px_0_0_#000]"
            style={btnStyle}
          >
            SOLICITAR CITA ↗
          </a>
        </div>

        {/* Right — faded pill list */}
        <div
          className="relative"
          style={{
            maskImage: "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
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
      punch: "no dejan huella.",
      italic: true,
      color: "#000",
    },
    {
      intro: "Creemos en experiencias que",
      punch: "despiertan curiosidad.",
      italic: true,
      color: "#FF7B72",
    },
    {
      intro: "Creemos en niños que",
      punch: "descubren talentos.",
      italic: true,
      color: "#1D2F8C",
    },
    {
      intro: "Creemos en recuerdos que",
      punch: "duran toda la vida.",
      italic: true,
      color: "#35D0BA",
    },
  ];

  return (
    <section id="manifesto" className="bg-white pt-14 pb-24 md:pt-16 md:pb-40 border-b-2 border-black">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-10 inline-flex items-center gap-2 rounded-full border-2 border-black bg-[#D8E600] px-4 py-1.5 text-xs font-bold">
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
            >
              {/* Regular intro line */}
              <div
                className="uppercase leading-[0.9] tracking-tight text-[8vw] md:text-[5.2vw] lg:text-[62px]"
                style={condensed}
              >
                {p.intro}
              </div>
              {/* Colored punch line */}
              <div
                className="uppercase leading-[0.9] tracking-tight text-[8vw] md:text-[5.2vw] lg:text-[62px]"
                style={{ ...condensedItalic, color: p.color }}
              >
                {p.punch}
              </div>
            </motion.div>
          ))}
        </div>
        {/* Closing remate line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-black/40 text-lg md:text-xl font-medium"
        >
          Y llevamos más de 20 años demostrándolo.
        </motion.p>
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 10) * 0.04 }}
              whileHover={{ y: -8, rotate: -1.5, scale: 1.03 }}
              style={{ backgroundColor: a.color, color: a.light ? "#fff" : "#000" }}
              className="group relative aspect-square rounded-2xl border-2 border-black p-4 flex flex-col justify-between overflow-hidden shadow-[6px_6px_0_0_#000] hover:shadow-[12px_12px_0_0_#000] transition-shadow"
            >
              {/* Number */}
              <span className="text-xs font-bold opacity-50">{String(i + 1).padStart(2, "0")}</span>

              {/* Big icon — center */}
              <span
                className="text-5xl md:text-6xl text-center leading-none select-none"
                style={{ filter: "drop-shadow(2px 3px 0px rgba(0,0,0,0.18))" }}
              >
                {a.icon}
              </span>

              {/* Name at bottom */}
              <span
                className="uppercase leading-[0.88] text-xl md:text-2xl pr-6"
                style={condensed}
              >
                {a.name}
              </span>

              {/* Arrow */}
              <span className="absolute bottom-3 right-3 text-lg font-bold transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">→</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact Form ──────────────────────────────────────── */
function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-3xl border-2 border-[#D8E600] bg-white/10 backdrop-blur-md p-10 flex flex-col items-center justify-center text-center min-h-[380px]"
      >
        <div className="h-16 w-16 rounded-full bg-[#D8E600] flex items-center justify-center text-black text-3xl font-bold mb-4">
          ✓
        </div>
        <div className="text-3xl text-white uppercase" style={condensed}>¡Recibido!</div>
        <p className="text-white/70 mt-2">Te contactamos en menos de 24h laborables.</p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className="rounded-3xl border-2 border-white/20 bg-white/5 backdrop-blur-xl p-6 md:p-8 space-y-5"
    >
      {[
        ["Nombre",           "text",  "nombre",  "Tu nombre"],
        ["Centro educativo", "text",  "centro",  "Nombre del colegio"],
        ["Cargo",            "text",  "cargo",   "Director, AMPA..."],
        ["Teléfono",         "tel",   "tel",     "+34 600 000 000"],
        ["Email",            "email", "email",   "tu@email.com"],
      ].map(([label, type, name, placeholder]) => (
        <label key={name} className="block">
          <span className="text-xs font-bold uppercase tracking-widest text-white/70 mb-2 block">{label}</span>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            required
            className="w-full rounded-xl border-2 border-white/10 bg-black/20 px-4 py-3 text-base text-white placeholder:text-white/30 focus:border-[#D8E600] focus:bg-white/10 outline-none transition-all"
          />
        </label>
      ))}
      <label className="block">
        <span className="text-xs font-bold uppercase tracking-widest text-white/70 mb-2 block">Mensaje</span>
        <textarea
          name="mensaje"
          rows={4}
          placeholder="Cuéntanos qué necesitas..."
          className="w-full rounded-xl border-2 border-white/10 bg-black/20 px-4 py-3 text-base text-white placeholder:text-white/30 focus:border-[#D8E600] focus:bg-white/10 outline-none transition-all resize-none"
        />
      </label>
      <button
        type="submit"
        className="mt-2 w-full rounded-full bg-[#D8E600] text-black py-4 border-2 border-black hover:bg-white transition-colors uppercase shadow-[4px_4px_0_0_#000] font-black"
        style={btnStyle}
      >
        SOLICITAR CITA →
      </button>
    </form>
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
        src="/sticker-ball.png" alt=""
        className="pointer-events-none absolute bottom-10 right-10 w-20 h-20 opacity-80 drop-shadow-xl"
        animate={{ y: [0, -14, 0], rotate: [0, 12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src="/sticker-palette.png" alt=""
        className="pointer-events-none absolute top-12 left-10 w-16 h-16 opacity-75 drop-shadow-xl"
        animate={{ y: [0, -10, 0], rotate: [-8, 8, -8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.img
        src="/sticker-star.png" alt=""
        className="pointer-events-none absolute bottom-16 left-1/4 w-12 h-12 opacity-60 drop-shadow-xl"
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
          <h2
            className="uppercase leading-[0.82] tracking-tight text-[16vw] md:text-[12vw] lg:text-[140px]"
            style={condensed}
          >
            ¿Hablamos<span className="text-[#D8E600]">?</span>
          </h2>
        </motion.div>

        {/* Description + Form — separate row */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: description + mascot */}
          <div className="flex flex-col justify-between gap-12 md:min-h-[540px]">
            <p className="text-2xl text-white/90 max-w-md leading-relaxed font-medium">
              Descubre cómo podemos transformar las actividades de tu centro educativo.{" "}
              <span className="text-[#D8E600] font-bold">Sin compromiso.</span>
            </p>
            {/* Trust bullets */}
            <ul className="space-y-4 text-white/75">
              {[
                "✓  Respuesta en menos de 24h",
                "✓  Programa a medida sin coste",
              ].map((t) => (
                <li key={t} className="text-lg font-semibold">{t}</li>
              ))}
            </ul>
            {/* Mascot — overflow hidden para esquinas */}
            <div className="w-36 md:w-44 rounded-2xl overflow-hidden shadow-[6px_6px_0_0_rgba(0,0,0,0.35)]">
              <motion.img
                src="/diversplas-logo.jpeg"
                alt="Diversplas"
                className="w-full h-full object-cover block"
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
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
  bg: string; blob: string; headline: string; headlineItalic: string;
  dark?: boolean; children: ReactNode;
}) {
  const tc = dark ? "text-black" : "text-white";
  return (
    <div
      className="relative rounded-3xl border-2 border-black overflow-hidden p-8 md:p-10 flex flex-col justify-between min-h-[340px]"
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
      {/* Content */}
      <div className="relative z-10">
        <h3
          className={`uppercase leading-[0.85] tracking-tight text-[10vw] md:text-[5vw] lg:text-[54px] ${tc}`}
          style={condensed}
        >
          {headline}
          <span className="block" style={condensedItalic}>{headlineItalic}</span>
        </h3>
      </div>
      <div className={`relative z-10 mt-6 ${tc}`}>{children}</div>
    </div>
  );
}

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  return (
    <footer>
      {/* Single unified CTA footer card — amarillo corporativo */}
      <div className="bg-white border-b-2 border-black px-4 md:px-6 py-6">
        <FooterCard
          bg="#D8E600"
          blob="#E8F520"
          headline="¿HABLAMOS"
          headlineItalic="CONTIGO?"
          dark
        >
          <p className="text-black/70 text-base leading-relaxed mb-6 max-w-md">
            ¿Tienes un centro educativo y quieres mejorar su oferta extraescolar? Estamos a un mensaje.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:hola@diversplas.com"
              className="inline-flex items-center gap-2 rounded-full bg-black text-white px-6 py-3 font-bold border-2 border-black hover:bg-[#1D2F8C] transition-colors uppercase shadow-[4px_4px_0_0_#1D2F8C]"
              style={btnStyle}
            >
              ESCRÍBENOS ↗
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 font-bold border-2 border-black hover:bg-black hover:text-white transition-colors uppercase shadow-[4px_4px_0_0_#000]"
              style={btnStyle}
            >
              SOLICITAR CITA ↗
            </a>
          </div>
        </FooterCard>
      </div>

      {/* Bottom bar */}
      <div className="bg-white py-6 px-6">
        <div className="mx-auto max-w-[1400px] flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-3">
        <img src="/diversplas-logo.jpeg" alt="DIVERSPLAS" className="h-14 w-auto" />
          </div>
          <div className="flex gap-4 text-sm">
            {[["Contacto", "#contact"], ["Actividades", "#activities"], ["Proceso", "#process"], ["Zonas", "#zones"]].map(([l, h]) => (
              <a key={h} href={h} className="text-black/50 hover:text-black transition-colors">{l}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a className="rounded-full border-2 border-black h-8 w-8 inline-flex items-center justify-center text-xs font-bold hover:bg-black hover:text-white transition-colors" href="#">IG</a>
            <a className="rounded-full border-2 border-black h-8 w-8 inline-flex items-center justify-center text-xs font-bold hover:bg-black hover:text-white transition-colors" href="#">in</a>
            <span className="text-xs text-black/40">© {new Date().getFullYear()} Diversplas</span>
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
      <Cursor />
      <Nav />
      <Hero />

      {/* Feature: Activities */}
      <FeatureSection
        headline="EMPIEZA AQUÍ:"
        headlineItalic="ACTIVIDADES"
        description="Más de 20 experiencias diseñadas para que cada niño encuentre su pasión. Nos adaptamos a cualquier tipo de actividad."
        links={[{ label: "VER TODO", href: "#activities" }, { label: "PREGUNTAS", href: "#contact" }]}
        visual={<ActivityCardsVisual />}
      />

      {/* Feature: Program (flipped) */}
      <FeatureSection
        id="process"
        headline="DISEÑAMOS"
        headlineItalic="TU PROGRAMA"
        description="Construimos un programa de actividades a medida, con propósito y carácter."
        extra="Escuchamos, diseñamos, coordinamos, acompañamos y mejoramos."
        links={[{ label: "SABER MÁS", href: "#manifesto" }, { label: "CONTACTAR", href: "#contact" }]}
        visual={<ProgramVisual />}
        flip
      />

      {/* Feature: Stats */}
      <FeatureSection
        headline="COORDINAMOS"
        headlineItalic="TODO"
        description="Gestionamos equipos, materiales y comunicación con familias sin fricciones."
        extra="Presencia real cada semana. Sin emails de respuesta automática."
        links={[{ label: "CONTACTAR", href: "#contact" }]}
        visual={<StatsVisual />}
      />

      {/* Feature: Zones (flipped) */}
      <FeatureSection
        id="zones"
        headline="OPERAMOS EN"
        headlineItalic="BARCELONA"
        description="Santa Coloma de Gramenet, Badalona, Mollet del Vallès y Sant Fost de Campsentelles."
        extra="Siempre cerca de tu centro educativo."
        links={[{ label: "SOLICITAR CITA", href: "#contact" }]}
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
