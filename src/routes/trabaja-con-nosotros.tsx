import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { Nav, Footer } from '../components/LandingPage';
import { FAQSection } from '../components/FAQSection';
import FloatingWidgets from '../components/ui/FloatingWidgets';
import { condensed, condensedItalic, btnStyle } from '../lib/styles';

const SCHEMA_JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Diversplas Extraescolares",
    "legalName": "Diversplas",
    "url": "https://diversplas.es",
    "logo": "https://diversplas.es/diversplas-logo.jpeg",
    "image": "https://diversplas.es/og-diversplas-v3.jpg",
    "telephone": "+34657117426",
    "email": "diversplascontacto@gmail.com",
    "sameAs": [
      "https://www.instagram.com/diversplas_extraescolares",
      "https://www.google.com/maps?cid=17471814521949579952"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Santa Coloma de Gramenet",
      "addressRegion": "Barcelona",
      "addressCountry": "ES"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Monitor/a de Patinaje (Extraescolares)",
    "description": "Impartición de clases de patinaje sobre ruedas para alumnos de educación infantil y primaria en colegios de Santa Coloma de Gramenet. Horario de tardes a partir de las 16:30 h de lunes a viernes.",
    "identifier": {
      "@type": "PropertyValue",
      "name": "Diversplas",
      "value": "PATINAJE-SCG-2026"
    },
    "datePosted": "2026-09-02",
    "validThrough": "2026-12-31",
    "employmentType": "PART_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Diversplas Extraescolares",
      "sameAs": "https://diversplas.es",
      "logo": "https://diversplas.es/diversplas-logo.jpeg"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Diversos centros educativos y colegios",
        "addressLocality": "Santa Coloma de Gramenet",
        "postalCode": "08921",
        "addressRegion": "Barcelona",
        "addressCountry": "ES"
      }
    },
    "experienceRequirements": "Experiencia previa comprobable en patinaje y/o dinamización de grupos infantiles.",
    "qualifications": "Monitor/a de tiempo libre o experiencia técnica en patinaje."
  },
  {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Monitor/a de Zumba / Danza (Extraescolares)",
    "description": "Dinamización de clases de Zumba Kids, baile moderno y expresión corporal para grupos infantiles en colegios de Santa Coloma de Gramenet. Horario de tardes a partir de las 16:30 h de lunes a viernes.",
    "identifier": {
      "@type": "PropertyValue",
      "name": "Diversplas",
      "value": "ZUMBA-SCG-2026"
    },
    "datePosted": "2026-09-02",
    "validThrough": "2026-12-31",
    "employmentType": "PART_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Diversplas Extraescolares",
      "sameAs": "https://diversplas.es",
      "logo": "https://diversplas.es/diversplas-logo.jpeg"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Diversos centros educativos y colegios",
        "addressLocality": "Santa Coloma de Gramenet",
        "postalCode": "08921",
        "addressRegion": "Barcelona",
        "addressCountry": "ES"
      }
    },
    "experienceRequirements": "Experiencia o formación específica en zumba, danza, baile moderno o ritmos infantiles.",
    "qualifications": "Formación en danza/zumba o monitor/a de tiempo libre."
  }
];

export const Route = createFileRoute('/trabaja-con-nosotros')({
  component: TrabajaConNosotrosPage,
  head: () => ({
    meta: [
      { title: "Ofertas de Empleo en Diversplas: Monitores de Extraescolares en Santa Coloma de Gramenet" },
      { name: "description", content: "Diversplas Extraescolares abre proceso de selección para Monitores/as de Patinaje y Monitores/as de Zumba y Danza en colegios de Santa Coloma de Gramenet (Barcelona)." },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Ofertas de Empleo en Diversplas: Monitores de Extraescolares en Santa Coloma de Gramenet" },
      { property: "og:description", content: "Diversplas Extraescolares busca Monitores/as de Patinaje y Zumba/Danza para colegios de Santa Coloma de Gramenet." },
      { property: "og:url", content: "https://diversplas.es/trabaja-con-nosotros" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://diversplas.es/og-diversplas-v3.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Ofertas de Empleo en Diversplas: Monitores en Santa Coloma de Gramenet" },
      { name: "twitter:description", content: "Buscamos Monitores/as de Patinaje y Zumba/Danza para colegios de Santa Coloma de Gramenet." }
    ],
    links: [
      { rel: "canonical", href: "https://diversplas.es/trabaja-con-nosotros" }
    ],
    scripts: SCHEMA_JSON_LD.map((schema) => ({
      type: "application/ld+json",
      children: JSON.stringify(schema)
    }))
  })
});

const FAQ_MONITORES = [
  {
    question: "¿Qué perfil o experiencia se necesita para trabajar en Diversplas?",
    answer: "Buscamos personas dinámicas, responsables y con entusiasmo por la enseñanza infantil. Valoramos positivamente la experiencia previa impartiendo la disciplina específica (patinaje, zumba o danza) y contar con la titulación oficial de monitor/a de ocio y tiempo libre."
  },
  {
    question: "¿Cuál es el horario habitual de las clases extraescolares?",
    answer: "El horario de trabajo se concentra en la franja de tardes, de lunes a viernes, habitualmente a partir de las 16:30 h, coincidiendo con la finalización del horario lectivo de los colegios."
  },
  {
    question: "¿Es un trabajo compatible con estudios u otras actividades?",
    answer: "Sí, al tratarse de jornadas parciales en horario de tarde, es un puesto ideal para compaginar con estudios universitarios, formación profesional u otros trabajos en horario de mañana."
  },
  {
    question: "¿Cómo es el proceso de selección de Diversplas?",
    answer: "El proceso es ágil y directo. Consiste en una primera toma de contacto vía WhatsApp o formulario, seguida de una breve entrevista (telefónica o presencial) para evaluar la disponibilidad, experiencia y encaje con los valores de la empresa."
  }
];

function CandidatoForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [vacanteSeleccionada, setVacanteSeleccionada] = useState("Monitor/a de Patinaje");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const vacante = formData.get("vacante") as string;
    const otraVacante = formData.get("otra_vacante") as string;
    const vacanteFinal = vacante === "Otra disciplina" && otraVacante?.trim() ? `Otra disciplina: ${otraVacante.trim()}` : vacante;

    const data = {
      ...Object.fromEntries(formData.entries()),
      vacante: vacanteFinal,
      tipo: 'candidatura_monitor',
      email_destino: 'diversplascontacto@gmail.com',
      destinatario: 'diversplascontacto@gmail.com',
      origen: typeof window !== 'undefined' ? window.location.href : 'https://diversplas.es/trabaja-con-nosotros'
    };
    try {
      const response = await fetch("https://n8n.kovia.io/webhook/15cbd43f-d161-4131-9ec3-334f9dfd4de1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Error en la respuesta del servidor");
      }
      setSent(true);
    } catch {
      // Confirmamos recepción al usuario
      setSent(true);
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="rounded-3xl border-2 border-black bg-white p-8 md:p-10 flex flex-col items-center justify-center text-center shadow-[6px_6px_0_0_#000]">
        <div className="h-16 w-16 rounded-full bg-[#D8E600] border-2 border-black flex items-center justify-center text-black text-3xl font-bold mb-4 shadow-[2px_2px_0_0_#000]">✓</div>
        <h3 className="text-3xl text-black uppercase" style={condensed}>¡Candidatura Recibida!</h3>
        <p className="text-black/80 mt-2 font-semibold text-lg max-w-sm">Revisaremos tu perfil y te contactaremos en menos de 24-48h laborables.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border-2 border-black bg-white p-6 md:p-8 space-y-4 shadow-[6px_6px_0_0_#000]">
      <h3 className="text-2xl md:text-3xl font-black uppercase text-black" style={condensed}>
        Envía tus datos
      </h3>
      <p className="text-sm font-semibold text-black/70">
        Si prefieres que nos pongamos en contacto contigo, completa la siguiente información:
      </p>

      <label className="block">
        <span className="text-xs font-black uppercase tracking-widest text-black mb-1.5 block">Nombre y Apellidos *</span>
        <input
          type="text"
          name="nombre"
          required
          placeholder="Tu nombre completo"
          className="w-full rounded-xl border-2 border-black/20 bg-gray-50 px-4 py-3 text-base text-black placeholder:text-black/50 focus:border-[#1D2F8C] outline-none transition-all"
        />
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-xs font-black uppercase tracking-widest text-black mb-1.5 block">Teléfono / WhatsApp *</span>
          <input
            type="tel"
            name="telefono"
            required
            placeholder="657 117 426"
            className="w-full rounded-xl border-2 border-black/20 bg-gray-50 px-4 py-3 text-base text-black placeholder:text-black/50 focus:border-[#1D2F8C] outline-none transition-all"
          />
        </label>
        <label className="block">
          <span className="text-xs font-black uppercase tracking-widest text-black mb-1.5 block">Email</span>
          <input
            type="email"
            name="email"
            placeholder="tu@email.com"
            className="w-full rounded-xl border-2 border-black/20 bg-gray-50 px-4 py-3 text-base text-black placeholder:text-black/50 focus:border-[#1D2F8C] outline-none transition-all"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-xs font-black uppercase tracking-widest text-black mb-1.5 block">Vacante a la que optas *</span>
        <select
          name="vacante"
          required
          value={vacanteSeleccionada}
          onChange={(e) => setVacanteSeleccionada(e.target.value)}
          className="w-full rounded-xl border-2 border-black/20 bg-gray-50 px-4 py-3 text-base text-black focus:border-[#1D2F8C] outline-none transition-all"
        >
          <option value="Monitor/a de Patinaje">Monitor/a de Patinaje (Santa Coloma)</option>
          <option value="Monitor/a de Zumba / Danza">Monitor/a de Zumba / Danza (Santa Coloma)</option>
          <option value="Ambas disciplinas">Ambas disciplinas</option>
          <option value="Otra disciplina">Otra disciplina (especificar cuál)</option>
        </select>
      </label>

      {vacanteSeleccionada === "Otra disciplina" && (
        <label className="block animate-fade-in">
          <span className="text-xs font-black uppercase tracking-widest text-black mb-1.5 block">¿Qué disciplina o actividad impartes? *</span>
          <input
            type="text"
            name="otra_vacante"
            required
            placeholder="Ej: Fútbol, Multideporte, Karate, Manualidades, Refuerzo escolar, Baile..."
            className="w-full rounded-xl border-2 border-[#1D2F8C] bg-white px-4 py-3 text-base text-black placeholder:text-black/50 focus:border-[#1D2F8C] outline-none transition-all shadow-[2px_2px_0_0_#000]"
          />
        </label>
      )}

      <label className="block">
        <span className="text-xs font-black uppercase tracking-widest text-black mb-1.5 block">Experiencia previa o mensaje</span>
        <textarea
          name="mensaje"
          rows={3}
          placeholder="Cuéntanos brevemente tu experiencia con niños/as o en la disciplina..."
          className="w-full rounded-xl border-2 border-black/20 bg-gray-50 px-4 py-3 text-base text-black placeholder:text-black/50 focus:border-[#1D2F8C] outline-none transition-all resize-none"
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-[#D8E600] text-black py-4 border-2 border-black font-black uppercase tracking-wide shadow-[4px_4px_0_0_#000] hover:bg-[#c8d500] hover:scale-[1.01] transition-all cursor-pointer disabled:opacity-50"
        style={btnStyle}
      >
        {loading ? "ENVIANDO..." : "ENVIAR CANDIDATURA"}
      </button>
    </form>
  );
}

function TrabajaConNosotrosPage() {
  return (
    <div className="font-sans antialiased text-[#0a0a0a] min-h-screen selection:bg-[#1D2F8C] selection:text-white" style={{ background: '#0a0a0a' }}>
      <Nav />

      <main className="flex flex-col bg-white">
        {/* ─── Hero Section (Solo un <h1>) ─────────────────────────────── */}
        <section id="top" className="relative w-full bg-white pt-32 pb-16 md:pt-36 md:pb-24 border-b-2 border-black overflow-hidden">
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage: "radial-gradient(#000 1.5px,transparent 1.5px)", backgroundSize: "36px 36px" }}
          />

          {/* Blobs */}
          <div className="pointer-events-none absolute top-10 -left-20 h-72 w-72 rounded-full bg-[#D8E600] blur-3xl opacity-25" />
          <div className="pointer-events-none absolute bottom-10 right-0 h-80 w-80 rounded-full bg-[#3055C7] blur-3xl opacity-15" />

          <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center flex flex-col items-center">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-black shadow-[2px_2px_0_0_#000] bg-[#D8E600] mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1D2F8C] flex-shrink-0" />
              <span className="font-bold text-xs sm:text-sm tracking-wide text-black uppercase" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                OFERTAS DE EMPLEO EN DIVERSPLAS · SANTA COLOMA DE GRAMENET
              </span>
            </div>

            {/* [H1] Único en toda la página */}
            <h1
              className="uppercase leading-[0.95] text-[11vw] sm:text-[9vw] md:text-[6.5vw] lg:text-[72px] text-black max-w-5xl"
              style={{ ...condensed, letterSpacing: '0.02em' }}
            >
              Ofertas de Empleo en Diversplas:{" "}
              <span className="text-[#1D2F8C]" style={{ ...condensedItalic, letterSpacing: '0.02em' }}>
                Monitores de Extraescolares en Santa Coloma de Gramenet<span className="text-[#D8E600]">.</span>
              </span>
            </h1>

            {/* Párrafo intro */}
            <p className="mt-6 text-lg sm:text-xl md:text-2xl text-black/80 max-w-3xl mx-auto leading-relaxed font-medium">
              Diversplas Extraescolares, empresa con más de 20 años de experiencia en el sector educativo, abre su proceso de selección para el curso escolar. Buscamos incorporar Monitores/as de Patinaje y Monitores/as de Zumba y Danza para impartir actividades en colegios y centros educativos de Santa Coloma de Gramenet (Barcelona).
            </p>

            {/* [Botón CTA principal] */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
              <a
                href="#vacantes"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D8E600] text-black px-8 py-4 font-black border-2 border-black hover:bg-[#c8d500] transition-all uppercase tracking-wide shadow-[4px_4px_0_0_#000] w-full sm:w-auto hover:scale-[1.02]"
                style={btnStyle}
              >
                VER VACANTES DISPONIBLES ↓
              </a>
              <a
                href="https://wa.me/34657117426?text=Hola%2C%20quiero%20apuntarme%20como%20monitor%2Fa%20en%20Santa%20Coloma"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] text-black px-8 py-4 font-black border-2 border-black hover:bg-[#20bd5a] transition-all uppercase tracking-wide shadow-[4px_4px_0_0_#000] w-full sm:w-auto hover:scale-[1.02]"
                style={btnStyle}
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                APUNTARME POR WHATSAPP
              </a>
            </div>
          </div>
        </section>

        {/* ─── [H2] Convocatoria Abierta: Vacantes Destacadas ─────────── */}
        <section id="vacantes" className="py-20 md:py-28 bg-[#fbfbfb] border-b-2 border-black">
          <div className="max-w-[1300px] mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block bg-[#D8E600] text-[#0a0a0a] font-['Barlow_Condensed'] font-black uppercase tracking-[0.15em] text-sm px-4 py-1.5 rounded-md border-2 border-black mb-3 shadow-[2px_2px_0_0_#000]">
                CONVOCATORIA ABIERTA
              </span>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase text-black" style={{ ...condensed, letterSpacing: '0.03em' }}>
                Convocatoria Abierta: <span className="text-[#1D2F8C]">Vacantes Destacadas</span>
              </h2>
              <p className="mt-3 text-lg md:text-xl text-black/70 max-w-2xl mx-auto font-medium">
                Puestos disponibles para incorporación inmediata al equipo de actividades extraescolares infantiles y de primaria en Santa Coloma de Gramenet.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
              {/* [H3] Tarjeta 1: Monitor/a de Patinaje */}
              <div className="bg-white rounded-3xl border-2 border-black p-8 md:p-10 shadow-[8px_8px_0_0_#000] flex flex-col justify-between hover:translate-y-[-4px] transition-all">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <span className="text-5xl md:text-6xl select-none" role="img" aria-label="Patinaje">
                      ⛸️
                    </span>
                    <span className="bg-[#FF7B72] text-black border-2 border-black font-black text-xs md:text-sm uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-[2px_2px_0_0_#000]">
                      Extraescolar · Tardes
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black uppercase text-black mb-3" style={condensed}>
                    Monitor/a de Patinaje (Extraescolar · Tardes)
                  </h3>
                  <p className="text-black/80 font-medium text-base md:text-lg mb-6 leading-relaxed">
                    Impartición de clases de patinaje sobre ruedas para alumnos de educación infantil y primaria. El objetivo de la actividad es trabajar el equilibrio, la psicomotricidad, la técnica básica y fomentar el juego en grupo.
                  </p>

                  <div className="space-y-3 bg-[#f5f5f5] p-5 rounded-2xl border-2 border-black/10 mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">📍</span>
                      <div>
                        <strong className="text-xs uppercase tracking-wider text-black/60 block font-black">Zona:</strong>
                        <span className="font-bold text-black text-base">Colegios locales en Santa Coloma de Gramenet.</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">⏰</span>
                      <div>
                        <strong className="text-xs uppercase tracking-wider text-black/60 block font-black">Horario:</strong>
                        <span className="font-bold text-black text-base">Tardes, a partir de las 16:30 h (Lunes a Viernes).</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-sm font-black uppercase tracking-wider text-black mb-3" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                      Requisitos mínimos:
                    </h4>
                    <ul className="space-y-2 text-black/85 font-medium text-sm md:text-base">
                      <li className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#D8E600] border border-black text-black font-black text-xs flex items-center justify-center shrink-0 mt-0.5">✓</span>
                        Experiencia previa comprobable en patinaje y/o dinamización de grupos infantiles.
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#D8E600] border border-black text-black font-black text-xs flex items-center justify-center shrink-0 mt-0.5">✓</span>
                        Disponibilidad en horario de tardes (a partir de las 16:30 h).
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#D8E600] border border-black text-black font-black text-xs flex items-center justify-center shrink-0 mt-0.5">✓</span>
                        Responsabilidad, dinamismo, paciencia y excelentes habilidades comunicativas con alumnos y familias.
                      </li>
                    </ul>
                  </div>
                </div>

                <a
                  href="https://wa.me/34657117426?text=Hola%2C%20quiero%20apuntarme%20como%20monitor%2Fa%20de%20Patinaje%20en%20Santa%20Coloma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] text-black py-4 px-6 font-black border-2 border-black shadow-[4px_4px_0_0_#000] hover:bg-[#20bd5a] hover:scale-[1.02] transition-all uppercase tracking-wide text-center"
                  style={btnStyle}
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  APUNTARME POR WHATSAPP
                </a>
              </div>

              {/* [H3] Tarjeta 2: Monitor/a de Zumba / Danza */}
              <div className="bg-white rounded-3xl border-2 border-black p-8 md:p-10 shadow-[8px_8px_0_0_#000] flex flex-col justify-between hover:translate-y-[-4px] transition-all">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <span className="text-5xl md:text-6xl select-none" role="img" aria-label="Zumba y Danza">
                      💃
                    </span>
                    <span className="bg-[#35D0BA] text-black border-2 border-black font-black text-xs md:text-sm uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-[2px_2px_0_0_#000]">
                      Extraescolar · Tardes
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black uppercase text-black mb-3" style={condensed}>
                    Monitor/a de Zumba / Danza (Extraescolar · Tardes)
                  </h3>
                  <p className="text-black/80 font-medium text-base md:text-lg mb-6 leading-relaxed">
                    Dinamización de clases de Zumba Kids, baile moderno y expresión corporal para grupos infantiles. El monitor/a se encargará de enseñar coreografías adaptadas y coordinar juegos rítmicos.
                  </p>

                  <div className="space-y-3 bg-[#f5f5f5] p-5 rounded-2xl border-2 border-black/10 mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">📍</span>
                      <div>
                        <strong className="text-xs uppercase tracking-wider text-black/60 block font-black">Zona:</strong>
                        <span className="font-bold text-black text-base">Colegios locales en Santa Coloma de Gramenet.</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">⏰</span>
                      <div>
                        <strong className="text-xs uppercase tracking-wider text-black/60 block font-black">Horario:</strong>
                        <span className="font-bold text-black text-base">Tardes, a partir de las 16:30 h (Lunes a Viernes).</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-sm font-black uppercase tracking-wider text-black mb-3" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                      Requisitos mínimos:
                    </h4>
                    <ul className="space-y-2 text-black/85 font-medium text-sm md:text-base">
                      <li className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#D8E600] border border-black text-black font-black text-xs flex items-center justify-center shrink-0 mt-0.5">✓</span>
                        Experiencia o formación específica en zumba, danza, baile moderno o ritmos infantiles.
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#D8E600] border border-black text-black font-black text-xs flex items-center justify-center shrink-0 mt-0.5">✓</span>
                        Disponibilidad en horario de tardes (a partir de las 16:30 h).
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#D8E600] border border-black text-black font-black text-xs flex items-center justify-center shrink-0 mt-0.5">✓</span>
                        Energía, empatía y gran capacidad para motivar y dinamizar grupos escolares.
                      </li>
                    </ul>
                  </div>
                </div>

                <a
                  href="https://wa.me/34657117426?text=Hola%2C%20quiero%20apuntarme%20como%20monitor%2Fa%20de%20Zumba%20%2F%20Danza%20en%20Santa%20Coloma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] text-black py-4 px-6 font-black border-2 border-black shadow-[4px_4px_0_0_#000] hover:bg-[#20bd5a] hover:scale-[1.02] transition-all uppercase tracking-wide text-center"
                  style={btnStyle}
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  APUNTARME POR WHATSAPP
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── [H2] Ventajas de trabajar con Diversplas ───────────────── */}
        <section className="py-20 bg-white border-b-2 border-black">
          <div className="max-w-[1300px] mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block bg-[#D8E600] text-[#0a0a0a] font-['Barlow_Condensed'] font-bold uppercase tracking-[0.15em] text-sm px-4 py-1 rounded-md mb-3 border-2 border-black shadow-[2px_2px_0_0_#000]">
                VENTAJAS DE TRABAJAR CON DIVERSPLAS
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-black" style={{ ...condensed, letterSpacing: '0.03em' }}>
                Ventajas de trabajar con Diversplas
              </h2>
              <p className="mt-3 text-lg md:text-xl text-black/70 font-semibold max-w-xl mx-auto">
                ¿Por qué unirte a nuestro equipo educativo?
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#f8f8f8] border-2 border-black p-8 rounded-2xl shadow-[4px_4px_0_0_#000]">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-2xl font-black uppercase text-black mb-2" style={condensed}>
                  Más de 20 años de experiencia
                </h3>
                <p className="text-black/75 font-medium leading-relaxed">
                  Somos una entidad independiente consolidada, con amplia presencia y reconocimiento en colegios y AFAs (Asociaciones de Familias de Alumnos) de Santa Coloma de Gramenet y la provincia de Barcelona.
                </p>
              </div>

              <div className="bg-[#f8f8f8] border-2 border-black p-8 rounded-2xl shadow-[4px_4px_0_0_#000]">
                <div className="text-4xl mb-4">🎒</div>
                <h3 className="text-2xl font-black uppercase text-black mb-2" style={condensed}>
                  Material y soporte completo
                </h3>
                <p className="text-black/75 font-medium leading-relaxed">
                  Proporcionamos todo el material didáctico necesario, asesoramiento pedagógico y apoyo continuo por parte de nuestro equipo de coordinación.
                </p>
              </div>

              <div className="bg-[#f8f8f8] border-2 border-black p-8 rounded-2xl shadow-[4px_4px_0_0_#000]">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-2xl font-black uppercase text-black mb-2" style={condensed}>
                  Trato cercano y continuidad
                </h3>
                <p className="text-black/75 font-medium leading-relaxed">
                  Formarás parte de un equipo familiar con comunicación directa. Ofrecemos posibilidad de continuidad laboral en campus, casales de verano y periodos festivos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── [H2] Preguntas Frecuentes para Monitores/as (FAQ) ──────── */}
        <FAQSection
          items={FAQ_MONITORES}
          title="Preguntas Frecuentes para"
          titleHighlight="Monitores/as (FAQ)"
        />

        {/* ─── [H2] Contacto Directo: ¿Quieres unirte al equipo? ─────── */}
        <section id="contacto" className="py-20 md:py-28 bg-[#1D2F8C] text-white border-b-2 border-black">
          <div className="max-w-[1300px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-[#D8E600] text-black font-['Barlow_Condensed'] font-black uppercase tracking-[0.15em] text-xs md:text-sm px-3.5 py-1 rounded-md mb-4 border-2 border-black">
                  CONTACTO DIRECTO
                </span>
                <h2 className="text-5xl md:text-7xl font-black uppercase text-white mb-6" style={{ ...condensedItalic, letterSpacing: '0.02em' }}>
                  Contacto Directo: <span className="text-[#D8E600]">¿Quieres unirte al equipo?</span>
                </h2>
                <p className="text-xl text-white/90 font-medium leading-relaxed mb-8">
                  La forma más rápida de presentar tu candidatura es enviarnos un mensaje por WhatsApp indicando tu disponibilidad y experiencia. ¡Te responderemos a la mayor brevedad!
                </p>

                <div className="space-y-4">
                  <a
                    href="https://wa.me/34657117426?text=Hola%2C%20quiero%20apuntarme%20como%20monitor%2Fa%20en%20Santa%20Coloma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-full bg-[#25D366] text-black px-8 py-4 font-black border-2 border-black shadow-[4px_4px_0_0_#000] hover:bg-[#20bd5a] hover:scale-[1.02] transition-all uppercase tracking-wide"
                    style={btnStyle}
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    ESCRIBIR POR WHATSAPP (+34 657 117 426)
                  </a>
                  <p className="text-white/70 text-sm font-semibold">
                    También puedes enviar tu currículum por correo electrónico a: <a href="mailto:diversplascontacto@gmail.com" className="underline hover:text-[#D8E600]">diversplascontacto@gmail.com</a>
                  </p>
                </div>
              </div>

              {/* [H3] Envía tus datos */}
              <CandidatoForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWidgets />
    </div>
  );
}
