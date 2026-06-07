import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, type ReactNode } from "react";
import mascotAsset from "@/assets/diversplas-mascot.png.asset.json";
import logoAsset from "@/assets/diversplas-logo.jpeg.asset.json";

export const Route = createFileRoute("/")(({
  head: () => ({
    meta: [
      { title: "Diversplas — No solo horarios. Crece." },
      { name: "description", content: "Más de 20 años creando experiencias extraescolares en Barcelona. Colegios, AMPAs y centros educativos." },
      { property: "og:title", content: "Diversplas — No solo horarios. Crece." },
      { property: "og:description", content: "Experiencias extraescolares premium para colegios y AMPAs de Barcelona." },
    ],
  }),
  component: Index,
}) as any);

/* ─── Data ─────────────────────────────────────────────── */

const ACTIVITIES = [
  { name: "Fútbol",           color: "#FF7B72", icon: "⚽" },
  { name: "Básquet",          color: "#FF9D42", icon: "🏀" },
  { name: "Multideporte",     color: "#35D0BA", icon: "🏃" },
  { name: "Karate",           color: "#1D2F8C", light: true, icon: "🥋" },
  { name: "Natación",         color: "#3055C7", light: true, icon: "🏊" },
  { name: "Hip Hop",          color: "#9C7BFF", icon: "🎤" },
  { name: "Teatro",           color: "#D8E600", icon: "🎭" },
  { name: "Inglés",           color: "#FF7B72", icon: "🇬🇧" },
  { name: "Manualidades",     color: "#FF9D42", icon: "✂️" },
  { name: "Dibujo",           color: "#9C7BFF", icon: "🎨" },
  { name: "Juegos de Mesa",   color: "#D8E600", icon: "♟️" },
  { name: "Ciencia",          color: "#3055C7", light: true, icon: "🔬" },
  { name: "Robótica",         color: "#1D2F8C", light: true, icon: "🤖" },
  { name: "Magia",            color: "#FF7B72", icon: "🪄" },
  { name: "Patinaje",         color: "#35D0BA", icon: "⛸️" },
  { name: "Casales",          color: "#FF9D42", icon: "🏕️" },
  { name: "Campus",           color: "#9C7BFF", icon: "⛺" },
  { name: "Ajedrez",          color: "#D8E600", icon: "♟️" },
  { name: "Expresión Corp.",  color: "#FF7B72", icon: "💃" },
  { name: "Refuerzo Escolar", color: "#3055C7", light: true, icon: "📚" },
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
        className="pointer-events-auto flex items-center rounded-full border-2 border-black bg-white/95 backdrop-blur-md px-3 py-1.5 shadow-[3px_3px_0_0_#000] hover:shadow-[5px_5px_0_0_#000] transition-shadow"
      >
        <img src={logoAsset.url} alt="DIVERSPLAS" className="h-10 w-auto object-contain" />
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
        className="pointer-events-auto flex items-center gap-2 rounded-full border-2 border-black bg-black text-white px-4 py-2 text-sm font-bold hover:bg-[#1D2F8C] transition-colors shadow-[3px_3px_0_0_#1D2F8C]"
        style={condensed}
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

      {/* ── Floating Stickers — spread across all 4 sides ── */}

      {/* 1. Soccer ball — TOP LEFT, grande */}
      <motion.img
        src="/sticker-ball.png" alt=""
        className="pointer-events-none absolute top-24 left-[4%] w-28 h-28 md:w-32 md:h-32 drop-shadow-xl"
        animate={{ y: [0, -18, 0], rotate: [0, 18, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 2. Trophy — TOP RIGHT */}
      <motion.img
        src="/sticker-trophy.png" alt=""
        className="pointer-events-none absolute top-20 right-[4%] lg:right-[30%] w-24 h-24 md:w-28 md:h-28 drop-shadow-xl"
        animate={{ y: [0, -14, 0], rotate: [-6, 6, -6] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />

      {/* 3. Palette — BOTTOM LEFT */}
      <motion.img
        src="/sticker-palette.png" alt=""
        className="pointer-events-none absolute bottom-20 left-[4%] w-24 h-24 md:w-28 md:h-28 drop-shadow-xl"
        animate={{ y: [0, -14, 0], rotate: [-8, 6, -8] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      {/* 4. Star — BOTTOM RIGHT */}
      <motion.img
        src="/sticker-star.png" alt=""
        className="pointer-events-none absolute bottom-16 right-[4%] lg:right-[28%] w-20 h-20 md:w-24 md:h-24 drop-shadow-xl"
        animate={{ y: [0, -12, 0], rotate: [8, -8, 8] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* 5. Karate — LEFT CENTER (mid-height) */}
      <motion.img
        src="/sticker-karate.png" alt=""
        className="pointer-events-none absolute top-[48%] -translate-y-1/2 left-[3%] w-16 h-16 md:w-20 md:h-20 drop-shadow-lg"
        animate={{ y: [0, -10, 0], rotate: [-5, 5, -5] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
      />

      {/* 6. Ball small — RIGHT CENTER (hidden on lg where mascot is) */}
      <motion.img
        src="/sticker-ball.png" alt=""
        className="pointer-events-none absolute top-[45%] -translate-y-1/2 right-[3%] w-16 h-16 md:w-20 md:h-20 drop-shadow-lg lg:hidden"
        animate={{ y: [0, -10, 0], rotate: [10, -10, 10] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.3 }}
      />

      {/* 7. Star small — TOP CENTER-LEFT area */}
      <motion.img
        src="/sticker-star.png" alt=""
        className="pointer-events-none absolute top-28 left-[32%] w-10 h-10 md:w-14 md:h-14 drop-shadow-lg opacity-80"
        animate={{ y: [0, -8, 0], rotate: [-10, 10, -10] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-white px-4 py-1.5 text-xs font-semibold mb-10"
        >
          <span className="h-2 w-2 rounded-full bg-[#35D0BA] animate-pulse" />
          +20 años en Barcelona · Colegios · AMPAs · Centros
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="uppercase leading-[0.85] tracking-tight text-[18vw] md:text-[15vw] lg:text-[170px]"
          style={condensed}
        >
          <span className="block">No solo</span>
          <span className="block text-[#1D2F8C]" style={condensedItalic}>horarios.</span>
          <span className="block">
            Crece<span className="text-[#D8E600]">.</span>
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-8 text-lg md:text-xl text-black/70 max-w-md mx-auto"
        >
          Diseñamos las extraescolares de tu centro como si fuera nuestro propio colegio.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-8 flex flex-wrap gap-3 justify-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[#D8E600] text-black px-7 py-3.5 font-bold border-2 border-black hover:bg-[#c8d500] transition-colors text-sm uppercase tracking-wide shadow-[4px_4px_0_0_#000]"
            style={condensed}
          >
            SOLICITAR CITA <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#activities"
            className="inline-flex items-center gap-2 rounded-full bg-white text-black px-7 py-3.5 font-bold border-2 border-black hover:bg-[#D8E600] transition-colors text-sm uppercase tracking-wide shadow-[4px_4px_0_0_#000]"
            style={condensed}
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
      <p className={`text-xl md:text-2xl leading-relaxed max-w-lg ${dark ? "text-white/80" : "text-black/75"}`}>{description}</p>
      {extra && <p className={`text-xl md:text-2xl leading-relaxed max-w-lg mt-4 ${dark ? "text-white/80" : "text-black/75"}`}>{extra}</p>}
      {links && (
        <div className="flex flex-wrap gap-4 mt-10">
          {links.map((l, i) => (
            <a
              key={i}
              href={l.href}
              className={`rounded-full px-8 py-3.5 font-bold border-2 border-black text-base uppercase transition-colors shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] ${
                i === 0
                  ? "bg-[#D8E600] text-black hover:bg-[#c8d500]"
                  : "bg-white text-black hover:bg-[#D8E600]"
              }`}
              style={condensed}
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
            <span className="text-white/50 text-sm font-mono w-6">{s.n}</span>
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
    { n: "+50", label: "Colegios" },
    { n: "+5k", label: "Alumnos" },
    { n: "100%", label: "Compromiso" },
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
    </div>
  );
}

function ZonesVisual() {
  const points = [
    [200, 150, "Barcelona", 10],
    [120, 100, "Santa Coloma", 7],
    [280, 90,  "Badalona", 7],
    [300, 200, "Mollet", 7],
    [110, 210, "Sant Fost", 7],
  ] as [number, number, string, number][];

  return (
    <div className="rounded-3xl bg-[#0a0a0a] border-2 border-black overflow-hidden relative min-h-[380px] md:min-h-[440px]">
      <div
        className="absolute inset-0 opacity-40"
        style={{ backgroundImage: "radial-gradient(circle at 30% 40%, #1D2F8C, transparent 60%), radial-gradient(circle at 70% 70%, #3055C7, transparent 50%)" }}
      />
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full">
        <g stroke="#D8E600" strokeWidth="1.5" fill="none" opacity="0.6">
          {points.slice(1).map(([x, y], i) => (
            <line key={i} x1={200} y1={150} x2={x} y2={y} />
          ))}
        </g>
        {points.map(([x, y, name, r], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r={r + 8} fill="#D8E600" opacity="0.15">
              <animate attributeName="r" values={`${r + 4};${r + 16};${r + 4}`} dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx={x} cy={y} r={r} fill="#D8E600" />
            <text x={x + 13} y={y + 5} fill="#fff" fontSize="12" fontWeight="bold" fontFamily="sans-serif">{name}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ─── CTA Marquee (Slush-style black section) ───────────── */
function CtaMarquee() {
  const text = "ÚNETE A DIVERSPLAS";
  const row = Array(10).fill(text);

  return (
    <section className="bg-[#0a0a0a] py-10 overflow-hidden border-y-2 border-black relative">
      {/* Floating mascots */}
      <motion.img
        src={mascotAsset.url}
        alt=""
        className="absolute left-[12%] top-1/2 -translate-y-1/2 h-14 w-14 z-10 pointer-events-none drop-shadow-lg"
        animate={{ y: [0, -10, 0], rotate: [-5, 5, -5] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={mascotAsset.url}
        alt=""
        className="absolute right-[18%] top-1/2 -translate-y-1/2 h-10 w-10 z-10 pointer-events-none drop-shadow-lg scale-x-[-1]"
        animate={{ y: [0, -8, 0], rotate: [5, -5, 5] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Row 1 – scrolls left */}
      <div className="relative overflow-hidden mb-3">
        <motion.div
          className="flex gap-4 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          {[...row, ...row].map((t, i) => {
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
                className="inline-flex items-center rounded-2xl border-2 border-white/10 px-8 py-4 text-xl md:text-2xl uppercase tracking-tight whitespace-nowrap flex-shrink-0"
              >
                {t}
              </span>
            );
          })}
        </motion.div>
      </div>

      {/* Row 2 – scrolls right */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-4 whitespace-nowrap"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          {[...row, ...row].map((t, i) => {
            const c = MARQUEE_COLORS[(i + 3) % MARQUEE_COLORS.length];
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
                className="inline-flex items-center rounded-2xl border-2 border-white/10 px-8 py-4 text-xl md:text-2xl uppercase tracking-tight whitespace-nowrap flex-shrink-0"
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
  const descColor = slide.dark ? "text-black/70" : "text-white/75";
  const btnBorder = slide.dark ? "border-black/30 text-black hover:bg-black hover:text-white" : "border-white/40 text-white hover:bg-white hover:text-black";
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
              className={`uppercase leading-[0.85] tracking-tight text-[16vw] md:text-[10vw] lg:text-[110px] ${textColor}`}
              style={condensedItalic}
            >
              {slide.headline}
              <span className="block" style={condensed}>{slide.sub}</span>
            </h2>
            <p className={`mt-6 text-lg max-w-sm mx-auto leading-relaxed ${descColor}`}>{slide.description}</p>
            <div className="mt-6 text-5xl">{slide.icon}</div>
          </motion.div>
        </AnimatePresence>

        {/* Dot nav */}
        <div className="flex items-center justify-center gap-2.5 mt-14">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Slide ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={`rounded-full h-2 transition-all duration-300 ${i === current ? `w-8 ${dotActive}` : `w-2 ${dotInactive}`}`}
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
            Trabajamos con todo tipo de centros educativos del área metropolitana de Barcelona. ¿Será el tuyo el próximo?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-black text-white px-6 py-3 font-bold border-2 border-black hover:bg-[#1D2F8C] transition-colors text-sm uppercase shadow-[4px_4px_0_0_#1D2F8C]"
            style={condensed}
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
      punch: "simplemente llenan horarios.",
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
    <section id="manifesto" className="bg-white py-24 md:py-40 border-b-2 border-black">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-12 inline-flex items-center gap-2 rounded-full border-2 border-black bg-[#D8E600] px-4 py-1.5 text-xs font-bold">
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
          <p className="max-w-sm text-black/70">
            Veinte experiencias, una sola obsesión: que cada niño encuentre la suya.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
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
      className="rounded-3xl border-2 border-white/30 bg-white/10 p-6 md:p-8 space-y-5"
    >
      {[
        ["Nombre",           "text",  "nombre"],
        ["Centro educativo", "text",  "centro"],
        ["Cargo",            "text",  "cargo"],
        ["Teléfono",         "tel",   "tel"],
        ["Email",            "email", "email"],
      ].map(([label, type, name]) => (
        <label key={name} className="block">
          <span className="text-sm font-bold uppercase tracking-widest text-white/80">{label}</span>
          <input
            type={type}
            name={name}
            required
            className="mt-2 w-full bg-transparent border-b-2 border-white/40 focus:border-[#D8E600] outline-none py-2.5 text-xl text-white transition-colors placeholder:text-white/20"
          />
        </label>
      ))}
      <label className="block">
        <span className="text-sm font-bold uppercase tracking-widest text-white/80">Mensaje</span>
        <textarea
          name="mensaje"
          rows={3}
          className="mt-2 w-full bg-transparent border-b-2 border-white/40 focus:border-[#D8E600] outline-none py-2.5 text-xl text-white transition-colors resize-none"
        />
      </label>
      <button
        type="submit"
        className="mt-4 w-full rounded-full bg-[#D8E600] text-black py-4 border-2 border-black hover:bg-white transition-colors uppercase tracking-tight text-xl shadow-[4px_4px_0_0_#000] font-black"
        style={condensed}
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
          <div className="flex flex-col gap-8">
            <p className="text-2xl text-white/90 max-w-md leading-relaxed font-medium">
              Descubre cómo podemos transformar las actividades de tu centro educativo.{" "}
              <span className="text-[#D8E600] font-bold">Sin compromiso.</span>
            </p>
            {/* Trust bullets */}
            <ul className="space-y-3 text-white/75">
              {[
                "✓  Respuesta en menos de 24h",
                "✓  Programa a medida sin coste",
                "✓  +50 colegios confían en nosotros",
              ].map((t) => (
                <li key={t} className="text-lg font-semibold">{t}</li>
              ))}
            </ul>
            {/* Mascot */}
            <motion.img
              src={mascotAsset.url}
              alt="Mascota Diversplas"
              className="w-48 md:w-56 drop-shadow-2xl mt-4"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
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
      {/* Two colored cards */}
      <div className="bg-white border-b-2 border-black px-4 md:px-6 py-6 grid md:grid-cols-2 gap-4">
        {/* Card 1 — purple, newsletter/contact */}
        <FooterCard
          bg="#9C7BFF"
          blob="#B49AFF"
          headline="TU CENTRO"
          headlineItalic="YA LO MERECE"
        >
          <p className="text-white/80 text-sm leading-relaxed mb-5">
            Escríbenos y diseñamos el programa extraescolar perfecto para tu centro. Sin compromiso.
          </p>
          {subscribed ? (
            <div className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2 font-bold text-sm" style={condensed}>
              ✓ ¡Mensaje enviado!
            </div>
          ) : (
            <form
              className="flex gap-2"
              onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu email"
                className="flex-1 rounded-full border-2 border-black bg-white/20 text-white placeholder:text-white/50 px-4 py-2 text-sm outline-none focus:bg-white/30 transition-colors"
              />
              <button
                type="submit"
                className="rounded-full bg-black text-white px-5 py-2 font-bold text-sm border-2 border-black hover:bg-[#1D2F8C] transition-colors uppercase"
                style={condensed}
              >
                ENVIAR
              </button>
            </form>
          )}
        </FooterCard>

        {/* Card 2 — yellow, support/contact */}
        <FooterCard
          bg="#D8E600"
          blob="#E8F520"
          headline="SIEMPRE"
          headlineItalic="AQUÍ PARA TI"
          dark
        >
          <p className="text-black/70 text-sm leading-relaxed mb-5">
            ¿Tienes dudas? Escríbenos y te respondemos antes de 24h laborables.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:hola@diversplas.com"
              className="inline-flex items-center gap-2 rounded-full bg-black text-white px-5 py-2 font-bold text-sm border-2 border-black hover:bg-[#1D2F8C] transition-colors uppercase"
              style={condensed}
            >
              ESCRIBIRNOS ↗
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2 font-bold text-sm border-2 border-black hover:bg-black hover:text-white transition-colors uppercase"
              style={condensed}
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
            <img src={logoAsset.url} alt="DIVERSPLAS" className="h-10 w-auto object-contain" />
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
        description="Más de 20 experiencias extraescolares diseñadas para que cada niño encuentre su pasión."
        extra="Fútbol, karate, teatro, robótica, inglés y mucho más."
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
        visual={<ZonesVisual />}
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
