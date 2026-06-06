import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import mascotAsset from "@/assets/diversplas-mascot.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Diversplas — Un mundo lleno de actividades" },
      { name: "description", content: "Más de 20 años creando experiencias extraescolares en Barcelona. Colegios, AMPAs y centros educativos." },
      { property: "og:title", content: "Diversplas — Un mundo lleno de actividades" },
      { property: "og:description", content: "Experiencias extraescolares premium para colegios y AMPAs." },
    ],
  }),
  component: Index,
});

const ACTIVITIES = [
  { name: "Fútbol", color: "#FF7B72" },
  { name: "Básquet", color: "#FF9D42" },
  { name: "Multideporte", color: "#35D0BA" },
  { name: "Karate", color: "#1D2F8C", light: true },
  { name: "Natación", color: "#3055C7", light: true },
  { name: "Hip Hop", color: "#9C7BFF" },
  { name: "Teatro", color: "#D8E600" },
  { name: "Expresión Corporal", color: "#FF7B72" },
  { name: "Inglés", color: "#35D0BA" },
  { name: "Manualidades", color: "#FF9D42" },
  { name: "Dibujo", color: "#9C7BFF" },
  { name: "Juegos de Mesa", color: "#D8E600" },
  { name: "Ciencia", color: "#3055C7", light: true },
  { name: "Robótica", color: "#1D2F8C", light: true },
  { name: "Magia", color: "#FF7B72" },
  { name: "Patinaje", color: "#35D0BA" },
  { name: "Casales", color: "#FF9D42" },
  { name: "Campus", color: "#9C7BFF" },
  { name: "Talleres", color: "#D8E600" },
  { name: "Refuerzo Escolar", color: "#3055C7", light: true },
];

const STORY_WORDS = [
  { word: "APRENDER", color: "#1D2F8C" },
  { word: "CREAR", color: "#FF7B72" },
  { word: "JUGAR", color: "#FF9D42" },
  { word: "IMAGINAR", color: "#9C7BFF" },
  { word: "CRECER", color: "#35D0BA" },
  { word: "DESCUBRIR", color: "#3055C7" },
  { word: "COMPARTIR", color: "#D8E600", dark: true },
  { word: "INSPIRAR", color: "#1D2F8C" },
];

const PROCESS = [
  { n: "01", t: "Escuchamos", d: "Entendemos las necesidades reales de tu centro y vuestra comunidad educativa." },
  { n: "02", t: "Diseñamos", d: "Construimos un programa de actividades a medida, con propósito y carácter." },
  { n: "03", t: "Coordinamos", d: "Gestionamos equipos, materiales y comunicación con familias sin fricciones." },
  { n: "04", t: "Acompañamos", d: "Estamos presentes cada semana. Cercanía real, no un email de respuesta automática." },
  { n: "05", t: "Mejoramos", d: "Medimos, escuchamos y evolucionamos curso tras curso." },
];

const ZONES = ["Santa Coloma de Gramenet", "Badalona", "Mollet del Vallès", "Sant Fost de Campsentelles"];

function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return <img src={mascotAsset.url} alt="Diversplas" className={className} />;
}

function Nav() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center gap-2 rounded-full border-2 border-black bg-white/90 backdrop-blur-md px-3 py-2 shadow-[4px_4px_0_0_#000]">
        <a href="#top" className="flex items-center gap-2 pr-2">
          <Logo className="h-8 w-8" />
          <span className="font-display font-bold text-sm tracking-tight hidden sm:inline">DIVERSPLAS</span>
        </a>
        {[
          ["Manifiesto", "#manifesto"],
          ["Actividades", "#activities"],
          ["Proceso", "#process"],
          ["Zonas", "#zones"],
        ].map(([label, href]) => (
          <a key={href} href={href} className="hidden md:inline-block px-3 py-1.5 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-colors">
            {label}
          </a>
        ))}
        <a href="#contact" className="ml-1 inline-flex items-center rounded-full bg-[#1D2F8C] text-white px-4 py-1.5 text-sm font-semibold border-2 border-black hover:bg-[#D8E600] hover:text-black transition-colors">
          Solicitar cita
        </a>
      </nav>
    </header>
  );
}

function FloatingMascot() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const rot = useTransform(scrollYProgress, [0, 1], [0, -12]);
  return (
    <motion.div
      ref={ref}
      style={{ y, rotate: rot }}
      className="pointer-events-none absolute right-[-2%] bottom-[-4%] md:right-[2%] md:bottom-[-2%] w-[60%] md:w-[44%] max-w-[640px] z-10"
    >
      <motion.img
        src={mascotAsset.url}
        alt=""
        className="w-full h-auto drop-shadow-[0_30px_40px_rgba(29,47,140,0.25)]"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-white pt-28 pb-12">
      {/* background grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* soft blobs */}
      <div className="pointer-events-none absolute top-32 -left-32 h-[420px] w-[420px] rounded-full bg-[#D8E600] blur-3xl opacity-40" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[360px] w-[360px] rounded-full bg-[#3055C7] blur-3xl opacity-20" />

      <div className="relative mx-auto max-w-[1400px] px-6">
        {/* pill row */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-2 mb-10"
        >
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-white px-3 py-1 text-xs font-semibold">
            <span className="h-2 w-2 rounded-full bg-[#35D0BA] animate-pulse" />
            +20 años en Barcelona
          </span>
          <span className="rounded-full border-2 border-black bg-[#D8E600] px-3 py-1 text-xs font-semibold">Colegios · AMPAs · Centros</span>
        </motion.div>

        {/* massive title */}
        <h1 className="font-display font-bold leading-[0.85] tracking-[-0.04em] text-black text-[18vw] md:text-[15vw] lg:text-[200px]">
          <SplitReveal text="Un mundo" />
          <span className="block">
            <SplitReveal text="lleno de" />{" "}
            <SplitReveal text="actividades" italic blue />
            <span className="text-[#D8E600]">.</span>
          </span>
        </h1>

        <div className="mt-10 grid md:grid-cols-2 gap-10 items-end relative">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-md text-lg md:text-xl text-black/80"
          >
            Más de 20 años creando <em className="not-italic font-semibold text-[#1D2F8C]">experiencias</em> que hacen crecer a los alumnos. Diseñamos las extraescolares de tu centro como si fuera nuestro propio colegio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-3 md:justify-end relative z-20"
          >
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-black text-white px-6 py-3 font-semibold border-2 border-black hover:bg-[#1D2F8C] transition-colors">
              Solicitar cita
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#activities" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 font-semibold border-2 border-black hover:bg-[#D8E600] transition-colors">
              Explorar experiencias
            </a>
          </motion.div>
        </div>

        <FloatingMascot />
      </div>
    </section>
  );
}

function SplitReveal({ text, italic, blue }: { text: string; italic?: boolean; blue?: boolean }) {
  return (
    <span className={`inline-block ${italic ? "italic" : ""} ${blue ? "text-[#1D2F8C]" : ""}`}>
      {text.split(" ").map((word, wi) => (
        <span key={wi} className="inline-block overflow-hidden pr-[0.18em] align-baseline">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: wi * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function Marquee() {
  const items = ["Fútbol", "Robótica", "Teatro", "Hip Hop", "Ciencia", "Inglés", "Karate", "Magia", "Patinaje", "Dibujo", "Casales", "Ajedrez"];
  const palette = ["#FF7B72", "#35D0BA", "#FF9D42", "#9C7BFF", "#D8E600", "#3055C7"];
  const row = [...items, ...items];
  return (
    <div className="border-y-2 border-black bg-white py-5 overflow-hidden">
      <motion.div
        className="flex gap-3 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {row.map((it, i) => {
          const c = palette[i % palette.length];
          const dark = c === "#3055C7";
          return (
            <span
              key={i}
              style={{ backgroundColor: c, color: dark ? "#fff" : "#000" }}
              className="inline-flex items-center gap-3 rounded-full border-2 border-black px-5 py-2 font-display font-bold text-2xl md:text-3xl"
            >
              {it}
              <span className="text-black/60">✦</span>
            </span>
          );
        })}
      </motion.div>
    </div>
  );
}

function StoryWords() {
  return (
    <section className="bg-white">
      {STORY_WORDS.map((w, i) => (
        <div
          key={w.word}
          className="sticky top-0 h-screen flex items-center justify-center border-b-2 border-black overflow-hidden"
          style={{ backgroundColor: i % 2 === 0 ? "#ffffff" : "#fafafa" }}
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: false, margin: "-30% 0px -30% 0px" }}
            transition={{ duration: 0.8 }}
            className="font-display font-bold tracking-[-0.04em] leading-none text-[22vw] md:text-[18vw]"
            style={{ color: w.color }}
          >
            {w.word}
            <span className="text-black">.</span>
          </motion.h2>
        </div>
      ))}
    </section>
  );
}

function Manifesto() {
  const lines = [
    "No creemos en actividades que",
    { t: "simplemente llenan horarios.", em: true },
    "Creemos en experiencias que",
    { t: "despiertan curiosidad.", color: "#FF7B72" },
    "Creemos en niños que",
    { t: "descubren talentos.", color: "#1D2F8C", italic: true },
    "Creemos en personas que",
    { t: "enseñan con pasión.", color: "#FF9D42" },
    "Creemos en recuerdos que",
    { t: "duran toda la vida.", color: "#35D0BA" },
  ];
  return (
    <section id="manifesto" className="bg-white py-32 md:py-48 border-b-2 border-black">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-12 inline-flex items-center gap-2 rounded-full border-2 border-black bg-[#D8E600] px-4 py-1.5 text-xs font-bold">
          MANIFIESTO
        </div>
        <div className="font-display font-bold leading-[0.95] tracking-[-0.03em] text-[8vw] md:text-[5.5vw] text-black space-y-2">
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
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: (i % 2) * 0.05 }}
                style={{ color }}
                className={italic ? "italic" : ""}
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

function Activities() {
  return (
    <section id="activities" className="bg-white py-24 md:py-32 border-b-2 border-black">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <h2 className="font-display font-bold leading-none text-[12vw] md:text-[7vw] tracking-[-0.03em]">
            Un universo <span className="italic text-[#1D2F8C]">vivo.</span>
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
              <span className="text-xs font-semibold opacity-70">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-display font-bold text-2xl md:text-3xl leading-[0.95]">{a.name}</span>
              <span className="absolute bottom-3 right-3 text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">→</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="bg-[#0a0a0a] text-white py-24 md:py-32 border-b-2 border-black overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <h2 className="font-display font-bold leading-none text-[12vw] md:text-[7vw] tracking-[-0.03em]">
            Cómo <span className="italic text-[#D8E600]">trabajamos.</span>
          </h2>
          <p className="max-w-sm text-white/60">
            Un proceso transparente. Sin sorpresas. Sin letra pequeña.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          {PROCESS.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-2xl border-2 border-white/15 bg-white/5 backdrop-blur p-6 hover:border-[#D8E600] transition-colors"
            >
              <div className="font-display text-5xl text-[#D8E600] mb-6">{p.n}</div>
              <div className="font-display font-bold text-2xl mb-2">{p.t}</div>
              <div className="text-sm text-white/60 leading-relaxed">{p.d}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Zones() {
  return (
    <section id="zones" className="bg-white py-24 md:py-32 border-b-2 border-black">
      <div className="mx-auto max-w-[1400px] px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="mb-6 inline-flex rounded-full border-2 border-black bg-[#35D0BA] px-3 py-1 text-xs font-bold">ZONAS</div>
          <h2 className="font-display font-bold leading-[0.9] text-[12vw] md:text-[6vw] tracking-[-0.03em] mb-8">
            Operamos en el área metropolitana de <span className="italic text-[#1D2F8C]">Barcelona.</span>
          </h2>
          <ul className="space-y-3">
            {ZONES.map((z, i) => (
              <motion.li
                key={z}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-3 text-xl md:text-2xl font-display font-semibold"
              >
                <span className="h-3 w-3 rounded-full bg-[#1D2F8C]" />
                {z}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-square rounded-3xl border-2 border-black bg-[#0a0a0a] overflow-hidden">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "radial-gradient(circle at 30% 40%, #1D2F8C 0%, transparent 60%), radial-gradient(circle at 70% 70%, #3055C7 0%, transparent 50%)",
            }}
          />
          <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
            <g stroke="#D8E600" strokeWidth="1" fill="none" opacity="0.4">
              <line x1="200" y1="200" x2="120" y2="140" />
              <line x1="200" y1="200" x2="280" y2="120" />
              <line x1="200" y1="200" x2="300" y2="260" />
              <line x1="200" y1="200" x2="110" y2="280" />
            </g>
            {[
              [200, 200, "Barcelona", 8],
              [120, 140, "Santa Coloma", 5],
              [280, 120, "Badalona", 5],
              [300, 260, "Mollet", 5],
              [110, 280, "Sant Fost", 5],
            ].map(([x, y, name, r], i) => (
              <g key={i}>
                <circle cx={x as number} cy={y as number} r={(r as number) + 6} fill="#D8E600" opacity="0.2">
                  <animate attributeName="r" values={`${r};${(r as number) + 10};${r}`} dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx={x as number} cy={y as number} r={r as number} fill="#D8E600" />
                <text x={(x as number) + 10} y={(y as number) + 4} fill="#fff" fontSize="11" fontFamily="General Sans">{name as string}</text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="relative bg-[#1D2F8C] text-white py-24 md:py-32 overflow-hidden border-b-2 border-black">
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{ background: ["radial-gradient(circle at 20% 30%, #3055C7 0%, transparent 50%)", "radial-gradient(circle at 80% 70%, #3055C7 0%, transparent 50%)", "radial-gradient(circle at 20% 30%, #3055C7 0%, transparent 50%)"] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <div className="relative mx-auto max-w-[1400px] px-6 grid md:grid-cols-2 gap-12">
        <div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display font-bold leading-[0.85] tracking-[-0.04em] text-[22vw] md:text-[12vw]"
          >
            ¿Hablamos<span className="text-[#D8E600]">?</span>
          </motion.h2>
          <p className="mt-6 text-lg text-white/80 max-w-md">
            Descubre cómo podemos transformar las actividades de tu centro educativo. Sin compromiso.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-3xl border-2 border-[#D8E600] bg-white/10 backdrop-blur-md p-10 flex flex-col items-center justify-center text-center"
      >
        <div className="h-16 w-16 rounded-full bg-[#D8E600] flex items-center justify-center text-black text-3xl font-bold mb-4">✓</div>
        <div className="font-display text-3xl font-bold">¡Recibido!</div>
        <p className="text-white/70 mt-2">Te contactamos en menos de 24h laborables.</p>
      </motion.div>
    );
  }
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className="rounded-3xl border-2 border-white/20 bg-white/5 backdrop-blur-md p-6 md:p-8 space-y-4"
    >
      {[
        ["Nombre", "text", "nombre"],
        ["Centro educativo", "text", "centro"],
        ["Cargo", "text", "cargo"],
        ["Teléfono", "tel", "tel"],
        ["Email", "email", "email"],
      ].map(([label, type, name]) => (
        <label key={name} className="block">
          <span className="text-xs uppercase tracking-wider text-white/60">{label}</span>
          <input
            type={type}
            name={name}
            required
            className="mt-1 w-full bg-transparent border-b-2 border-white/30 focus:border-[#D8E600] outline-none py-2 text-lg transition-colors"
          />
        </label>
      ))}
      <label className="block">
        <span className="text-xs uppercase tracking-wider text-white/60">Mensaje</span>
        <textarea
          name="mensaje"
          rows={3}
          className="mt-1 w-full bg-transparent border-b-2 border-white/30 focus:border-[#D8E600] outline-none py-2 text-lg transition-colors resize-none"
        />
      </label>
      <button
        type="submit"
        className="mt-4 w-full rounded-full bg-[#D8E600] text-black font-bold py-4 border-2 border-black hover:bg-white transition-colors"
      >
        SOLICITAR CITA →
      </button>
    </form>
  );
}

function Footer() {
  return (
    <footer className="bg-white py-16">
      <div className="mx-auto max-w-[1400px] px-6 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <Logo className="h-12 w-12" />
            <div className="font-display font-bold text-2xl">DIVERSPLAS</div>
          </div>
          <p className="mt-3 italic text-black/70">Un mundo lleno de actividades.</p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-black/50 mb-3">Navegación</div>
          <ul className="space-y-2 font-medium">
            <li><a href="#manifesto" className="hover:text-[#1D2F8C]">Manifiesto</a></li>
            <li><a href="#activities" className="hover:text-[#1D2F8C]">Actividades</a></li>
            <li><a href="#process" className="hover:text-[#1D2F8C]">Proceso</a></li>
            <li><a href="#zones" className="hover:text-[#1D2F8C]">Zonas</a></li>
            <li><a href="#contact" className="hover:text-[#1D2F8C]">Contacto</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-black/50 mb-3">Contacto</div>
          <ul className="space-y-2 font-medium">
            <li>Barcelona, España</li>
            <li>hola@diversplas.com</li>
            <li className="flex gap-3 pt-2">
              <a className="rounded-full border-2 border-black h-9 w-9 inline-flex items-center justify-center hover:bg-black hover:text-white" href="#">IG</a>
              <a className="rounded-full border-2 border-black h-9 w-9 inline-flex items-center justify-center hover:bg-black hover:text-white" href="#">in</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-[1400px] px-6 mt-10 pt-6 border-t border-black/10 flex justify-between text-xs text-black/50">
        <span>© {new Date().getFullYear()} Diversplas</span>
        <span>+20 años · Barcelona</span>
      </div>
    </footer>
  );
}

function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a,button"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div
      className="pointer-events-none fixed z-[100] mix-blend-difference hidden md:block"
      style={{
        left: pos.x, top: pos.y,
        transform: `translate(-50%, -50%) scale(${hover ? 2.4 : 1})`,
        transition: "transform 0.2s ease",
      }}
    >
      <div className="h-4 w-4 rounded-full bg-white" />
    </div>
  );
}

function Index() {
  return (
    <div className="bg-white text-black font-sans antialiased selection:bg-[#D8E600] selection:text-black">
      <Cursor />
      <Nav />
      <Hero />
      <Marquee />
      <StoryWords />
      <Manifesto />
      <Activities />
      <Process />
      <Zones />
      <CTA />
      <Footer />
    </div>
  );
}
