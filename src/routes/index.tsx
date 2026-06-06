import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, type ReactNode } from "react";
import mascotAsset from "@/assets/diversplas-mascot.png.asset.json";

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
  { name: "Fútbol",           color: "#FF7B72" },
  { name: "Básquet",          color: "#FF9D42" },
  { name: "Multideporte",     color: "#35D0BA" },
  { name: "Karate",           color: "#1D2F8C", light: true },
  { name: "Natación",         color: "#3055C7", light: true },
  { name: "Hip Hop",          color: "#9C7BFF" },
  { name: "Teatro",           color: "#D8E600" },
  { name: "Inglés",           color: "#FF7B72" },
  { name: "Manualidades",     color: "#FF9D42" },
  { name: "Dibujo",           color: "#9C7BFF" },
  { name: "Juegos de Mesa",   color: "#D8E600" },
  { name: "Ciencia",          color: "#3055C7", light: true },
  { name: "Robótica",         color: "#1D2F8C", light: true },
  { name: "Magia",            color: "#FF7B72" },
  { name: "Patinaje",         color: "#35D0BA" },
  { name: "Casales",          color: "#FF9D42" },
  { name: "Campus",           color: "#9C7BFF" },
  { name: "Ajedrez",          color: "#D8E600" },
  { name: "Expresión Corp.",  color: "#FF7B72" },
  { name: "Refuerzo Escolar", color: "#3055C7", light: true },
] as const;

const MARQUEE_COLORS = ["#FF7B72", "#3055C7", "#FF9D42", "#35D0BA", "#9C7BFF", "#D8E600", "#1D2F8C"];

const TRUST_SLIDES = [
  {
    headline: "+20 AÑOS",
    sub: "DE EXPERIENCIA",
    description: "Llevamos más de dos décadas creando experiencias que marcan a los niños y a sus familias.",
    icon: "★",
    bg: "#1D2F8C",
    blob: "#2540a8",
  },
  {
    headline: "CONFIADOS",
    sub: "& RECOMENDADOS",
    description: "Más de 50 colegios y AMPAs del área metropolitana de Barcelona confían en nosotros cada curso.",
    icon: "✓",
    bg: "#3055C7",
    blob: "#3d65d8",
  },
  {
    headline: "RESULTADOS",
    sub: "COMPROBADOS",
    description: "Niños más felices, más activos y con mayores habilidades sociales. Eso es lo que medimos.",
    icon: "▲",
    bg: "#1D2F8C",
    blob: "#2540a8",
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
      {/* Logo pill */}
      <a
        href="#top"
        className="pointer-events-auto flex items-center gap-2 rounded-full border-2 border-black bg-white/95 backdrop-blur-md px-3 py-2 shadow-[3px_3px_0_0_#000] hover:shadow-[5px_5px_0_0_#000] transition-shadow"
      >
        <img src={mascotAsset.url} alt="Diversplas" className="h-7 w-7" />
        <span className="text-xs font-bold tracking-tight hidden sm:inline" style={condensed}>DIVERSPLAS</span>
      </a>

      {/* Links pill */}
      <nav className="pointer-events-auto hidden md:flex items-center gap-0.5 rounded-full border-2 border-black bg-white/95 backdrop-blur-md px-2 py-1.5 shadow-[3px_3px_0_0_#000]">
        {[
          ["Actividades", "#activities"],
          ["Proceso",     "#process"],
          ["Zonas",       "#zones"],
          ["Manifiesto",  "#manifesto"],
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
      <div className="pointer-events-none absolute top-20 -left-20 h-72 w-72 rounded-full bg-[#D8E600] blur-3xl opacity-30" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-80 w-80 rounded-full bg-[#3055C7] blur-3xl opacity-15" />

      {/* Floating mascot — desktop right */}
      <motion.div
        className="pointer-events-none absolute right-[4%] top-1/2 -translate-y-1/2 w-[28%] max-w-[300px] hidden lg:block"
        animate={{ y: [0, -22, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src={mascotAsset.url}
          alt=""
          className="w-full h-auto drop-shadow-[0_24px_36px_rgba(29,47,140,0.3)]"
        />
      </motion.div>

      {/* Decorative shapes */}
      <motion.div
        className="pointer-events-none absolute top-32 left-[8%] h-10 w-10 rounded-full bg-[#D8E600] border-2 border-black"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute top-52 right-[8%] lg:right-[36%] h-7 w-7 rotate-45 bg-[#FF7B72] border-2 border-black"
        animate={{ rotate: [45, 90, 45] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-36 left-[5%] h-8 w-8 rounded-full bg-[#35D0BA] border-2 border-black"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-28 right-[10%] lg:right-[38%] h-6 w-6 bg-[#9C7BFF] border-2 border-black rounded-sm"
        animate={{ rotate: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
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
            className="group inline-flex items-center gap-2 rounded-full bg-black text-white px-7 py-3.5 font-bold border-2 border-black hover:bg-[#1D2F8C] transition-colors text-sm uppercase tracking-wide shadow-[4px_4px_0_0_#1D2F8C]"
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
      className="flex flex-col justify-center"
    >
      <h2
        className={`uppercase leading-[0.88] tracking-tight text-[11vw] md:text-[6.5vw] lg:text-[72px] mb-6 ${dark ? "text-white" : "text-black"}`}
        style={condensed}
      >
        {headline}
        {headlineItalic && (
          <span className="block text-[#1D2F8C]" style={condensedItalic}>{headlineItalic}</span>
        )}
      </h2>
      <p className={`text-lg leading-relaxed max-w-sm ${dark ? "text-white/70" : "text-black/70"}`}>{description}</p>
      {extra && <p className={`text-lg leading-relaxed max-w-sm mt-3 ${dark ? "text-white/70" : "text-black/70"}`}>{extra}</p>}
      {links && (
        <div className="flex flex-wrap gap-3 mt-8">
          {links.map((l, i) => (
            <a
              key={i}
              href={l.href}
              className={`rounded-full px-6 py-2.5 font-bold border-2 border-black text-sm uppercase transition-colors shadow-[3px_3px_0_0_#000] hover:shadow-[5px_5px_0_0_#000] ${
                i === 0
                  ? "bg-black text-white hover:bg-[#1D2F8C]"
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
      className={`border-b-2 border-black py-20 md:py-28 ${dark ? "bg-[#0a0a0a]" : "bg-white"}`}
    >
      <div className="mx-auto max-w-[1400px] px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {flip ? <>{vis}{text}</> : <>{text}{vis}</>}
      </div>
    </section>
  );
}

/* ─── Visuals ───────────────────────────────────────────── */

function ActivityCardsVisual() {
  return (
    <div className="rounded-3xl bg-[#0a0a0a] border-2 border-black p-6 md:p-8 overflow-hidden relative aspect-[4/3]">
      {/* bg glow */}
      <div
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: "radial-gradient(circle at 25% 30%, #3055C7, transparent 55%), radial-gradient(circle at 75% 70%, #9C7BFF, transparent 55%)" }}
      />
      {/* Header */}
      <div className="relative mb-4">
        <div className="text-white/40 text-[10px] font-semibold uppercase tracking-widest">Actividades disponibles</div>
        <div className="text-white font-bold text-xl mt-1" style={condensed}>+20 experiencias</div>
      </div>
      {/* Tags */}
      <div className="relative flex flex-wrap gap-2">
        {ACTIVITIES.slice(0, 14).map((a) => (
          <span
            key={a.name}
            style={{ backgroundColor: a.color, color: a.light ? "#fff" : "#000" }}
            className="rounded-full px-3 py-1 text-xs font-bold border border-black/20 whitespace-nowrap"
          >
            {a.name}
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
    { n: "05", t: "Mejoramos",    c: "#9C7BFF" },
  ];
  return (
    <div className="rounded-3xl bg-[#9C7BFF] border-2 border-black p-6 md:p-8 overflow-hidden relative aspect-[4/3]">
      <div className="pointer-events-none absolute top-0 right-0 h-48 w-48 rounded-full bg-white/10 -translate-y-1/3 translate-x-1/3" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-36 w-36 rounded-full bg-black/10 translate-y-1/3 -translate-x-1/3" />
      <div className="relative mb-5">
        <div className="text-white/60 text-[10px] font-semibold uppercase tracking-widest">Tu programa</div>
        <div className="text-white font-bold text-xl mt-1" style={condensed}>A medida, con propósito</div>
      </div>
      <div className="relative space-y-2">
        {steps.map((s) => (
          <div key={s.n} className="flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-xl px-4 py-2.5 border border-white/10">
            <span className="text-white/50 text-xs font-mono w-5">{s.n}</span>
            <span className="h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: s.c }} />
            <span className="text-white font-semibold text-sm">{s.t}</span>
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
    <div className="rounded-3xl bg-[#35D0BA] border-2 border-black p-6 md:p-8 overflow-hidden relative aspect-[4/3]">
      <div className="pointer-events-none absolute bottom-0 left-0 h-52 w-52 rounded-full bg-white/10 translate-y-1/3 -translate-x-1/3" />
      <div className="relative mb-5">
        <div className="text-black/50 text-[10px] font-semibold uppercase tracking-widest">Nuestro impacto</div>
        <div className="text-black font-bold text-xl mt-1" style={condensed}>Resultados reales</div>
      </div>
      <div className="relative grid grid-cols-2 gap-3">
        {stats.map((s) => (
          <div key={s.label} className="bg-white/30 rounded-2xl p-4 text-center border border-black/10">
            <div
              className="text-4xl md:text-5xl leading-none text-black"
              style={condensed}
            >
              {s.n}
            </div>
            <div className="text-[10px] font-bold text-black/60 mt-1 uppercase tracking-widest">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ZonesVisual() {
  const points = [
    [200, 150, "Barcelona", 8],
    [120, 100, "Santa Coloma", 5],
    [280, 90,  "Badalona", 5],
    [300, 200, "Mollet", 5],
    [110, 210, "Sant Fost", 5],
  ] as [number, number, string, number][];

  return (
    <div className="rounded-3xl bg-[#0a0a0a] border-2 border-black overflow-hidden relative aspect-[4/3]">
      <div
        className="absolute inset-0 opacity-35"
        style={{ backgroundImage: "radial-gradient(circle at 30% 40%, #1D2F8C, transparent 60%), radial-gradient(circle at 70% 70%, #3055C7, transparent 50%)" }}
      />
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full">
        <g stroke="#D8E600" strokeWidth="1" fill="none" opacity="0.5">
          {points.slice(1).map(([x, y], i) => (
            <line key={i} x1={200} y1={150} x2={x} y2={y} />
          ))}
        </g>
        {points.map(([x, y, name, r], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r={r + 7} fill="#D8E600" opacity="0.15">
              <animate attributeName="r" values={`${r + 4};${r + 14};${r + 4}`} dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx={x} cy={y} r={r} fill="#D8E600" />
            <text x={x + 10} y={y + 4} fill="#fff" fontSize="10" fontFamily="General Sans">{name}</text>
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

/* ─── Trust Section (blue blobs + carousel) ─────────────── */
function TrustSection() {
  const [current, setCurrent] = useState(0);
  const slides = TRUST_SLIDES;
  const slide = slides[current];

  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section
      className="relative overflow-hidden border-b-2 border-black transition-colors duration-700"
      style={{ backgroundColor: slide.bg }}
    >
      {/* Blobs */}
      <motion.div
        className="absolute -top-1/4 -right-1/4 w-[70%] aspect-square rounded-full opacity-40 pointer-events-none"
        style={{ backgroundColor: slide.blob }}
        animate={{ scale: [1, 1.06, 1], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-1/3 -left-1/4 w-[65%] aspect-square rounded-full opacity-25 pointer-events-none"
        style={{ backgroundColor: slide.blob }}
        animate={{ scale: [1, 1.09, 1], x: [0, -25, 0], y: [0, 25, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative z-10 py-28 md:py-40 px-6 text-white text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/50 mb-6">Nuestra historia</p>
            <h2
              className="uppercase leading-[0.85] tracking-tight text-[16vw] md:text-[10vw] lg:text-[110px]"
              style={condensedItalic}
            >
              {slide.headline}
              <span className="block" style={condensed}>{slide.sub}</span>
            </h2>
            <p className="mt-6 text-white/75 text-lg max-w-sm mx-auto leading-relaxed">{slide.description}</p>
            <div className="mt-6 text-5xl">{slide.icon}</div>
          </motion.div>
        </AnimatePresence>

        {/* Nav */}
        <div className="flex items-center justify-center gap-5 mt-14">
          <button
            aria-label="Anterior"
            onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)}
            className="h-11 w-11 rounded-full border-2 border-white/40 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors text-lg"
          >
            ←
          </button>
          <div className="flex gap-2.5">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Slide ${i + 1}`}
                onClick={() => setCurrent(i)}
                className={`rounded-full h-2 transition-all duration-300 ${i === current ? "w-8 bg-white" : "w-2 bg-white/35"}`}
              />
            ))}
          </div>
          <button
            aria-label="Siguiente"
            onClick={() => setCurrent((c) => (c + 1) % slides.length)}
            className="h-11 w-11 rounded-full border-2 border-white/40 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors text-lg"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─── Manifesto ─────────────────────────────────────────── */
function Manifesto() {
  const lines: (string | { t: string; color?: string; italic?: boolean })[] = [
    "No creemos en actividades que",
    { t: "simplemente llenan horarios.", italic: true },
    "Creemos en experiencias que",
    { t: "despiertan curiosidad.", color: "#FF7B72" },
    "Creemos en niños que",
    { t: "descubren talentos.", color: "#1D2F8C", italic: true },
    "Creemos en recuerdos que",
    { t: "duran toda la vida.", color: "#35D0BA" },
  ];

  return (
    <section id="manifesto" className="bg-white py-24 md:py-40 border-b-2 border-black">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-10 inline-flex items-center gap-2 rounded-full border-2 border-black bg-[#D8E600] px-4 py-1.5 text-xs font-bold">
          MANIFIESTO
        </div>
        <div className="space-y-1">
          {lines.map((l, i) => {
            const isStr = typeof l === "string";
            const text = isStr ? l : l.t;
            const color = isStr ? undefined : l.color;
            const italic = !isStr && l.italic;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, delay: (i % 2) * 0.05 }}
                className="uppercase leading-[0.9] tracking-tight text-[7.5vw] md:text-[5vw] lg:text-[56px]"
                style={{ ...(italic ? condensedItalic : condensed), color }}
              >
                {text}
              </motion.div>
            );
          })}
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
              whileHover={{ y: -6, rotate: -1.5 }}
              style={{ backgroundColor: a.color, color: a.light ? "#fff" : "#000" }}
              className="group relative aspect-square rounded-2xl border-2 border-black p-4 flex flex-col justify-between overflow-hidden shadow-[6px_6px_0_0_#000] hover:shadow-[10px_10px_0_0_#000] transition-shadow"
            >
              <span className="text-xs font-semibold opacity-60">{String(i + 1).padStart(2, "0")}</span>
              <span
                className="uppercase leading-[0.9] text-2xl md:text-3xl"
                style={condensed}
              >
                {a.name}
              </span>
              <span className="absolute bottom-3 right-3 text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">→</span>
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
      className="rounded-3xl border-2 border-white/20 bg-white/5 backdrop-blur-md p-6 md:p-8 space-y-5"
    >
      {[
        ["Nombre",           "text",  "nombre"],
        ["Centro educativo", "text",  "centro"],
        ["Cargo",            "text",  "cargo"],
        ["Teléfono",         "tel",   "tel"],
        ["Email",            "email", "email"],
      ].map(([label, type, name]) => (
        <label key={name} className="block">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">{label}</span>
          <input
            type={type}
            name={name}
            required
            className="mt-1 w-full bg-transparent border-b-2 border-white/25 focus:border-[#D8E600] outline-none py-2 text-lg text-white transition-colors placeholder:text-white/20"
          />
        </label>
      ))}
      <label className="block">
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">Mensaje</span>
        <textarea
          name="mensaje"
          rows={3}
          className="mt-1 w-full bg-transparent border-b-2 border-white/25 focus:border-[#D8E600] outline-none py-2 text-lg text-white transition-colors resize-none"
        />
      </label>
      <button
        type="submit"
        className="mt-4 w-full rounded-full bg-[#D8E600] text-black py-4 border-2 border-black hover:bg-white transition-colors uppercase tracking-tight text-lg shadow-[4px_4px_0_0_#000]"
        style={condensed}
      >
        SOLICITAR CITA →
      </button>
    </form>
  );
}

/* ─── CTA Section ───────────────────────────────────────── */
function CTA() {
  return (
    <section id="contact" className="relative bg-[#1D2F8C] text-white py-20 md:py-28 overflow-hidden border-b-2 border-black">
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
      <div className="relative mx-auto max-w-[1400px] px-6 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="uppercase leading-[0.85] tracking-tight text-[22vw] md:text-[12vw]"
            style={condensed}
          >
            ¿Hablamos<span className="text-[#D8E600]">?</span>
          </motion.h2>
          <p className="mt-6 text-lg text-white/75 max-w-md leading-relaxed">
            Descubre cómo podemos transformar las actividades de tu centro educativo. Sin compromiso.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

/* ─── Footer ────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-white py-16">
      <div className="mx-auto max-w-[1400px] px-6 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <img src={mascotAsset.url} alt="Diversplas" className="h-12 w-12" />
            <div className="text-2xl uppercase" style={condensed}>DIVERSPLAS</div>
          </div>
          <p className="mt-3 italic text-black/60 text-sm">Un mundo lleno de actividades.</p>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-widest text-black/40 mb-4">Navegación</div>
          <ul className="space-y-2 font-medium text-sm">
            {[["Manifiesto", "#manifesto"], ["Actividades", "#activities"], ["Proceso", "#process"], ["Zonas", "#zones"], ["Contacto", "#contact"]].map(([l, h]) => (
              <li key={h}><a href={h} className="hover:text-[#1D2F8C] transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-widest text-black/40 mb-4">Contacto</div>
          <ul className="space-y-2 font-medium text-sm">
            <li>Barcelona, España</li>
            <li>hola@diversplas.com</li>
            <li className="flex gap-3 pt-2">
              <a className="rounded-full border-2 border-black h-9 w-9 inline-flex items-center justify-center text-xs font-bold hover:bg-black hover:text-white transition-colors" href="#">IG</a>
              <a className="rounded-full border-2 border-black h-9 w-9 inline-flex items-center justify-center text-xs font-bold hover:bg-black hover:text-white transition-colors" href="#">in</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-[1400px] px-6 mt-10 pt-6 border-t border-black/10 flex justify-between text-xs text-black/40">
        <span>© {new Date().getFullYear()} Diversplas</span>
        <span>+20 años · Barcelona</span>
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
      <Manifesto />
      <Activities />
      <CTA />
      <Footer />
    </div>
  );
}
