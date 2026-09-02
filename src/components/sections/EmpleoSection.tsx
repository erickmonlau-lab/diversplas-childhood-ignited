import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { condensed, condensedItalic, btnStyle } from "../../lib/styles";

const FAQ_EMPLEO = [
  {
    question: "¿Qué perfil buscamos?",
    answer: "Personas dinámicas con experiencia y/o titulación de monitor de ocio y tiempo libre, apasionadas por la enseñanza y el trabajo con niños y niñas."
  },
  {
    question: "¿Es compatible con estudios?",
    answer: "Sí, al tratarse de jornadas parciales en horario de tarde (a partir de las 16:30 h), es un trabajo ideal para compaginar con estudios universitarios, ciclos formativos u otras actividades."
  }
];

export default function EmpleoSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="empleo" className="py-20 md:py-28 bg-[#fbfbfb] border-b-2 border-black">
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#D8E600] text-[#0a0a0a] font-['Barlow_Condensed'] font-black uppercase tracking-[0.15em] text-sm px-4 py-1.5 rounded-md border-2 border-black mb-3 shadow-[2px_2px_0_0_#000]">
            TRABAJA CON NOSOTROS
          </span>
          {/* [H2] Ofertas de Empleo en Diversplas: Únete al Equipo */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase text-black" style={{ ...condensed, letterSpacing: '0.03em' }}>
            Ofertas de Empleo en Diversplas: <span className="text-[#1D2F8C]" style={condensedItalic}>Únete al Equipo</span>
          </h2>
          <p className="mt-3 text-lg md:text-xl text-black/70 max-w-3xl mx-auto font-medium leading-relaxed">
            Buscamos incorporar Monitores/as de Patinaje y Monitores/as de Zumba y Danza para impartir actividades en colegios de Santa Coloma de Gramenet.
          </p>
        </div>

        {/* 2 Vacancy Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 mb-16">
          {/* Card 1: Monitor/a de Patinaje */}
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

              {/* [H3] Monitor/a de Patinaje (Tardes) */}
              <h3 className="text-3xl md:text-4xl font-black uppercase text-black mb-3" style={condensed}>
                Monitor/a de Patinaje (Tardes)
              </h3>
              <p className="text-black/80 font-medium text-base md:text-lg mb-6 leading-relaxed">
                Impartición de clases de patinaje sobre ruedas para alumnos de infantil y primaria, desarrollando técnica, coordinación y juegos de equipo.
              </p>

              <div className="space-y-3 bg-[#f5f5f5] p-5 rounded-2xl border-2 border-black/10 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-xl">📍</span>
                  <div>
                    <strong className="text-xs uppercase tracking-wider text-black/60 block font-black">Zona:</strong>
                    <span className="font-bold text-black text-base">Santa Coloma de Gramenet</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">⏰</span>
                  <div>
                    <strong className="text-xs uppercase tracking-wider text-black/60 block font-black">Horario:</strong>
                    <span className="font-bold text-black text-base">Tardes, a partir de las 16:30 h</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">📋</span>
                  <div>
                    <strong className="text-xs uppercase tracking-wider text-black/60 block font-black">Requisitos:</strong>
                    <span className="font-bold text-black text-base">Experiencia en patinaje y dinamización infantil</span>
                  </div>
                </div>
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

          {/* Card 2: Monitor/a de Zumba / Danza */}
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

              {/* [H3] Monitor/a de Zumba / Danza (Tardes) */}
              <h3 className="text-3xl md:text-4xl font-black uppercase text-black mb-3" style={condensed}>
                Monitor/a de Zumba / Danza (Tardes)
              </h3>
              <p className="text-black/80 font-medium text-base md:text-lg mb-6 leading-relaxed">
                Dinamización de clases de Zumba Kids y baile moderno para grupos infantiles, fomentando la expresión corporal y la música.
              </p>

              <div className="space-y-3 bg-[#f5f5f5] p-5 rounded-2xl border-2 border-black/10 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-xl">📍</span>
                  <div>
                    <strong className="text-xs uppercase tracking-wider text-black/60 block font-black">Zona:</strong>
                    <span className="font-bold text-black text-base">Santa Coloma de Gramenet</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">⏰</span>
                  <div>
                    <strong className="text-xs uppercase tracking-wider text-black/60 block font-black">Horario:</strong>
                    <span className="font-bold text-black text-base">Tardes, a partir de las 16:30 h</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">📋</span>
                  <div>
                    <strong className="text-xs uppercase tracking-wider text-black/60 block font-black">Requisitos:</strong>
                    <span className="font-bold text-black text-base">Experiencia en danza/zumba infantil</span>
                  </div>
                </div>
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

        {/* Mini Acordeón FAQ */}
        <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-3xl border-2 border-black shadow-[6px_6px_0_0_#000]">
          <h3 className="text-2xl md:text-3xl font-black uppercase text-black mb-6 text-center" style={condensed}>
            Preguntas Frecuentes para Monitores/as
          </h3>
          <div className="space-y-4">
            {FAQ_EMPLEO.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className="border-2 border-black rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className={`w-full flex items-center justify-between p-4 text-left font-bold text-base md:text-lg transition-colors ${isOpen ? 'bg-[#D8E600]' : 'bg-gray-50 hover:bg-gray-100'}`}
                  >
                    <span>{faq.question}</span>
                    <div className={`shrink-0 ml-3 p-1 rounded-full border border-black bg-white transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                      <ChevronDown size={18} />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="p-4 bg-white border-t-2 border-black/10 text-black/85 font-medium leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
