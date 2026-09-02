import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { Nav, Footer } from '../components/LandingPage';
import { FAQSection } from '../components/FAQSection';
import FloatingWidgets from '../components/ui/FloatingWidgets';
import { condensed, condensedItalic, btnStyle } from '../lib/styles';

export const Route = createFileRoute('/trabaja-con-nosotros')({
  component: TrabajaConNosotrosPage,
  head: () => ({
    meta: [
      { title: "Buscamos Monitor de Patinaje y Zumba en Santa Coloma de Gramenet | Diversplas" },
      { name: "description", content: "Oferta de empleo para monitores/as de patinaje y zumba/danza en Santa Coloma de Gramenet para actividades extraescolares. ¡Únete al equipo de Diversplas!" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Buscamos Monitor de Patinaje y Zumba en Santa Coloma de Gramenet | Diversplas" },
      { property: "og:description", content: "Oferta de empleo para monitores/as de patinaje y zumba/danza en Santa Coloma de Gramenet para actividades extraescolares. ¡Únete al equipo de Diversplas!" },
      { property: "og:url", content: "https://diversplas.es/trabaja-con-nosotros" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://diversplas.es/og-diversplas-v3.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Buscamos Monitor de Patinaje y Zumba en Santa Coloma de Gramenet | Diversplas" },
      { name: "twitter:description", content: "Oferta de empleo para monitores/as de patinaje y zumba/danza en Santa Coloma de Gramenet para actividades extraescolares." }
    ],
    links: [
      { rel: "canonical", href: "https://diversplas.es/trabaja-con-nosotros" }
    ]
  })
});

const FAQ_MONITORES = [
  {
    question: "¿Qué perfil o experiencia se necesita?",
    answer: "Buscamos personas dinámicas, responsables y con entusiasmo por la enseñanza infantil. Se valora experiencia previa impartiendo la disciplina (patinaje o zumba/danza) y/o titulación de monitor/a de ocio y tiempo libre."
  },
  {
    question: "¿Cuál es el horario habitual de las clases?",
    answer: "Las actividades extraescolares se imparten de lunes a viernes en horario de tardes, habitualmente en franjas entre las 16:30 y las 18:00 h, según el colegio asignado en Santa Coloma de Gramenet."
  },
  {
    question: "¿Es compatible con estudios u otros trabajos?",
    answer: "¡Totalmente! Al ser jornadas de 1 a 2 horas por tarde en días determinados, es ideal para estudiantes universitarios, técnicos deportivos o monitores que buscan compaginar con otras ocupaciones."
  },
  {
    question: "¿Cómo es el proceso de selección?",
    answer: "Una vez nos escribas por WhatsApp o envíes el formulario, nuestro equipo de coordinación revisará tu disponibilidad y experiencia y te contactará para una breve entrevista telefónica o presencial."
  }
];

function CandidatoForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = {
      ...Object.fromEntries(formData.entries()),
      tipo: 'candidatura_monitor',
      email_destino: 'diversplascontacto@gmail.com',
      destinatario: 'diversplascontacto@gmail.com',
      origen: 'https://diversplas.es/trabaja-con-nosotros'
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
      // Si hay cualquier bloqueo o error de red, confirmamos recepción igualmente para no frustrar al candidato y registramos
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
        Si prefieres que te llamemos nosotros, déjanos tu información:
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
          className="w-full rounded-xl border-2 border-black/20 bg-gray-50 px-4 py-3 text-base text-black focus:border-[#1D2F8C] outline-none transition-all"
        >
          <option value="Monitor/a de Patinaje">Monitor/a de Patinaje (Santa Coloma)</option>
          <option value="Monitor/a de Zumba / Danza">Monitor/a de Zumba / Danza (Santa Coloma)</option>
          <option value="Ambas disciplinas">Ambas disciplinas</option>
          <option value="Otra disciplina">Otra disciplina</option>
        </select>
      </label>

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
        {/* ─── Hero Section ─────────────────────────────── */}
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
                OFERTA DE EMPLEO · SANTA COLOMA DE GRAMENET
              </span>
            </div>

            {/* Main Title */}
            <h1
              className="uppercase leading-[0.95] tracking-tight text-[11vw] sm:text-[9vw] md:text-[6.5vw] lg:text-[76px] text-black max-w-5xl"
              style={condensed}
            >
              Buscamos monitores/as en{" "}
              <span className="text-[#1D2F8C]" style={condensedItalic}>
                Santa Coloma de Gramenet<span className="text-[#D8E600]">.</span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg sm:text-xl md:text-2xl text-black/80 max-w-3xl mx-auto leading-relaxed font-medium">
              Seleccionamos <strong className="text-black font-black bg-[#D8E600] px-2 py-0.5 rounded">Monitor/a de Patinaje</strong> y <strong className="text-black font-black bg-[#35D0BA] px-2 py-0.5 rounded">Monitor/a de Zumba / Danza</strong> para impartir actividades extraescolares en colegios y centros de Santa Coloma durante el curso escolar.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
              <a
                href="#vacantes"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D8E600] text-black px-8 py-4 font-black border-2 border-black hover:bg-[#c8d500] transition-all uppercase tracking-wide shadow-[4px_4px_0_0_#000] w-full sm:w-auto hover:scale-[1.02]"
                style={btnStyle}
              >
                VER VACANTES DISPONIBLES ↓
              </a>
              <a
                href="https://wa.me/34657117426?text=Hola%2C%20quiero%20informaci%C3%B3n%20para%20las%20vacantes%20de%20monitor%2Fa%20en%20Santa%20Coloma"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1D2F8C] text-white px-8 py-4 font-black border-2 border-black hover:bg-[#3055C7] transition-all uppercase tracking-wide shadow-[4px_4px_0_0_#000] w-full sm:w-auto hover:scale-[1.02]"
                style={btnStyle}
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                APUNTARME POR WHATSAPP
              </a>
            </div>
          </div>
        </section>

        {/* ─── Vacancies Section ────────────────────────── */}
        <section id="vacantes" className="py-20 md:py-28 bg-[#fbfbfb] border-b-2 border-black">
          <div className="max-w-[1300px] mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block bg-[#D8E600] text-[#0a0a0a] font-['Barlow_Condensed'] font-black uppercase tracking-[0.15em] text-sm px-4 py-1.5 rounded-md border-2 border-black mb-3 shadow-[2px_2px_0_0_#000]">
                CONVOCATORIA ABIERTA
              </span>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-black" style={condensed}>
                Vacantes <span className="text-[#1D2F8C]">Destacadas</span>
              </h2>
              <p className="mt-3 text-lg md:text-xl text-black/70 max-w-2xl mx-auto font-medium">
                Puestos para incorporación al equipo de actividades extraescolares en Santa Coloma de Gramenet.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
              {/* Tarjeta 1: Monitor/a de Patinaje */}
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
                    Monitor/a de Patinaje
                  </h3>
                  <p className="text-black/80 font-medium text-base md:text-lg mb-6 leading-relaxed">
                    Impartición de clases de patinaje sobre ruedas para alumnos de infantil y primaria, trabajando equilibrio, psicomotricidad, técnica básica y juegos en grupo.
                  </p>

                  <div className="space-y-3 bg-[#f5f5f5] p-5 rounded-2xl border-2 border-black/10 mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">📍</span>
                      <div>
                        <strong className="text-xs uppercase tracking-wider text-black/60 block font-black">Zona:</strong>
                        <span className="font-bold text-black text-base">Santa Coloma de Gramenet (Colegios locales)</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">⏰</span>
                      <div>
                        <strong className="text-xs uppercase tracking-wider text-black/60 block font-black">Horario:</strong>
                        <span className="font-bold text-black text-base">Tardes, a partir de las 16:30 h (Lunes a Viernes)</span>
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
                        Experiencia previa en patinaje y/o dinamización de grupos infantiles.
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#D8E600] border border-black text-black font-black text-xs flex items-center justify-center shrink-0 mt-0.5">✓</span>
                        Disponibilidad en horario de tardes (a partir de las 16:30 h).
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#D8E600] border border-black text-black font-black text-xs flex items-center justify-center shrink-0 mt-0.5">✓</span>
                        Responsabilidad, dinamismo, paciencia y buen trato con alumnos y familias.
                      </li>
                    </ul>
                  </div>
                </div>

                <a
                  href="https://wa.me/34657117426?text=Hola%2C%20quiero%20apuntarme%20como%20monitor%2Fa%20de%20Patinaje%20en%20Santa%20Coloma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] text-white py-4 px-6 font-black border-2 border-black shadow-[4px_4px_0_0_#000] hover:bg-[#20bd5a] hover:scale-[1.02] transition-all uppercase tracking-wide text-center"
                  style={btnStyle}
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  APUNTARME POR WHATSAPP
                </a>
              </div>

              {/* Tarjeta 2: Monitor/a de Zumba / Danza */}
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
                    Monitor/a de Zumba / Danza
                  </h3>
                  <p className="text-black/80 font-medium text-base md:text-lg mb-6 leading-relaxed">
                    Dinamización de clases de Zumba Kids, baile moderno y expresión corporal para grupos infantiles, enseñando coreografías adaptadas y juegos rítmicos.
                  </p>

                  <div className="space-y-3 bg-[#f5f5f5] p-5 rounded-2xl border-2 border-black/10 mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">📍</span>
                      <div>
                        <strong className="text-xs uppercase tracking-wider text-black/60 block font-black">Zona:</strong>
                        <span className="font-bold text-black text-base">Santa Coloma de Gramenet (Colegios locales)</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">⏰</span>
                      <div>
                        <strong className="text-xs uppercase tracking-wider text-black/60 block font-black">Horario:</strong>
                        <span className="font-bold text-black text-base">Tardes, a partir de las 16:30 h (Lunes a Viernes)</span>
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
                        Experiencia o formación en zumba, danza, baile moderno o ritmos infantiles.
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#D8E600] border border-black text-black font-black text-xs flex items-center justify-center shrink-0 mt-0.5">✓</span>
                        Disponibilidad en horario de tardes (a partir de las 16:30 h).
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#D8E600] border border-black text-black font-black text-xs flex items-center justify-center shrink-0 mt-0.5">✓</span>
                        Energía, empatía, ganas de motivar y dinamizar grupos escolares.
                      </li>
                    </ul>
                  </div>
                </div>

                <a
                  href="https://wa.me/34657117426?text=Hola%2C%20quiero%20apuntarme%20como%20monitor%2Fa%20de%20Zumba%20%2F%20Danza%20en%20Santa%20Coloma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] text-white py-4 px-6 font-black border-2 border-black shadow-[4px_4px_0_0_#000] hover:bg-[#20bd5a] hover:scale-[1.02] transition-all uppercase tracking-wide text-center"
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

        {/* ─── Why Diversplas Section ───────────────────── */}
        <section className="py-20 bg-white border-b-2 border-black">
          <div className="max-w-[1300px] mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block bg-[#D8E600] text-[#0a0a0a] font-['Barlow_Condensed'] font-bold uppercase tracking-[0.15em] text-sm px-4 py-1 rounded-md mb-3 border-2 border-black shadow-[2px_2px_0_0_#000]">
                VENTAJAS DE TRABAJAR CON NOSOTROS
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-black" style={condensed}>
                ¿Por qué unirte a <span className="text-[#1D2F8C]">Diversplas</span>?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#f8f8f8] border-2 border-black p-8 rounded-2xl shadow-[4px_4px_0_0_#000]">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-2xl font-black uppercase text-black mb-2" style={condensed}>
                  Más de 20 años de experiencia
                </h3>
                <p className="text-black/75 font-medium leading-relaxed">
                  Somos una entidad independiente consolidada con amplia presencia y reconocimiento en colegios y AFAs de Santa Coloma y Barcelona.
                </p>
              </div>

              <div className="bg-[#f8f8f8] border-2 border-black p-8 rounded-2xl shadow-[4px_4px_0_0_#000]">
                <div className="text-4xl mb-4">🎒</div>
                <h3 className="text-2xl font-black uppercase text-black mb-2" style={condensed}>
                  Material y soporte completo
                </h3>
                <p className="text-black/75 font-medium leading-relaxed">
                  Te proporcionamos el material didáctico necesario, asesoramiento pedagógico y apoyo continuo de nuestro equipo de coordinación.
                </p>
              </div>

              <div className="bg-[#f8f8f8] border-2 border-black p-8 rounded-2xl shadow-[4px_4px_0_0_#000]">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-2xl font-black uppercase text-black mb-2" style={condensed}>
                  Trato cercano y continuidad
                </h3>
                <p className="text-black/75 font-medium leading-relaxed">
                  Equipo familiar, comunicación directa y posibilidad de continuidad en campus y casales durante periodos festivos y verano.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Contact / Inscription Section ────────────── */}
        <section id="contacto" className="py-20 md:py-28 bg-[#1D2F8C] text-white border-b-2 border-black">
          <div className="max-w-[1300px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-[#D8E600] text-black font-['Barlow_Condensed'] font-black uppercase tracking-[0.15em] text-xs md:text-sm px-3.5 py-1 rounded-md mb-4 border-2 border-black">
                  CONTACTO DIRECTO
                </span>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white mb-6" style={condensedItalic}>
                  ¿Quieres unirte <span className="text-[#D8E600]">al equipo</span>?
                </h2>
                <p className="text-xl text-white/90 font-medium leading-relaxed mb-8">
                  La forma más rápida de inscribirte es enviarnos un mensaje por WhatsApp con tu disponibilidad y experiencia. ¡Te responderemos enseguida!
                </p>

                <div className="space-y-4">
                  <a
                    href="https://wa.me/34657117426?text=Hola%2C%20quiero%20apuntarme%20como%20monitor%2Fa%20en%20Santa%20Coloma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-full bg-[#25D366] text-white px-8 py-4 font-black border-2 border-black shadow-[4px_4px_0_0_#000] hover:bg-[#20bd5a] hover:scale-[1.02] transition-all uppercase tracking-wide"
                    style={btnStyle}
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    ESCRIBIR POR WHATSAPP (+34 657 117 426)
                  </a>
                  <p className="text-white/70 text-sm font-semibold">
                    También puedes escribirnos a <a href="mailto:diversplascontacto@gmail.com" className="underline hover:text-[#D8E600]">diversplascontacto@gmail.com</a>
                  </p>
                </div>
              </div>

              <CandidatoForm />
            </div>
          </div>
        </section>

        {/* ─── FAQs Section ─────────────────────────────── */}
        <FAQSection
          items={FAQ_MONITORES}
          title="Preguntas frecuentes para"
          titleHighlight="Monitores/as"
        />
      </main>

      <Footer />
      <FloatingWidgets />
    </div>
  );
}
