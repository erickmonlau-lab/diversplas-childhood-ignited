import { condensed, condensedItalic } from "../../lib/styles";
import { ACTIVITIES } from "../../lib/data";

export default function Activities() {
  return (
    <section id="servicios" className="bg-white py-20 md:py-28 border-b-2 border-black">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block bg-[#D8E600] text-black font-['Barlow_Condensed'] font-black uppercase tracking-[0.15em] text-xs md:text-sm px-3.5 py-1 rounded-md mb-3 border-2 border-black shadow-[2px_2px_0_0_#000]">
            PROYECTOS Y LÍNEAS EDUCATIVAS PARA COLEGIOS Y AFAS
          </span>
          {/* [H2] Servicios Educativos y Deportivos para Colegios */}
          <h2
            className="uppercase leading-none text-5xl sm:text-6xl md:text-7xl font-black text-black"
            style={{ ...condensed, letterSpacing: '0.02em' }}
          >
            Catálogo Extraescolar para <span style={condensedItalic} className="text-[#1D2F8C]">Centros Escolares<span className="text-[#D8E600]">.</span></span>
          </h2>
          <p className="mt-4 text-black/70 text-lg md:text-xl leading-relaxed font-medium">
            Programación integral llave en mano para colegios y AFAs: monitores cualificados, ratios pedagógicas y material homologado en Santa Coloma de Gramenet y alrededores.
          </p>
        </div>

        {/* 3 Featured Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#fbfbfb] border-2 border-black rounded-3xl p-8 shadow-[6px_6px_0_0_#000] hover:translate-y-[-4px] transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#D8E600] border-2 border-black flex items-center justify-center text-3xl mb-6 shadow-[2px_2px_0_0_#000]">
              ⚽
            </div>
            <h3 className="text-2xl md:text-3xl font-black uppercase text-black mb-3" style={condensed}>
              Línea Deportiva y Psicomotricidad
            </h3>
            <p className="text-black/80 font-medium leading-relaxed">
              Fútbol escolar, patinaje sobre ruedas, karate, baloncesto y multideporte. Entrenamientos adaptados tanto para educación infantil (3 a 5 años) como primaria (6 a 12 años), potenciando el compañerismo y los hábitos saludables en vuestras pistas.
            </p>
          </div>

          <div className="bg-[#fbfbfb] border-2 border-black rounded-3xl p-8 shadow-[6px_6px_0_0_#000] hover:translate-y-[-4px] transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#35D0BA] border-2 border-black flex items-center justify-center text-3xl mb-6 shadow-[2px_2px_0_0_#000]">
              🇬🇧
            </div>
            <h3 className="text-2xl md:text-3xl font-black uppercase text-black mb-3" style={condensed}>
              Línea Lingüística y Artística
            </h3>
            <p className="text-black/80 font-medium leading-relaxed">
              Talleres dinámicos de inglés comunicativo, Zumba Kids, danza moderna, hip hop y artes plásticas/manualidades. Actividades participativas que desarrollan la creatividad y el talento dentro del centro educativo.
            </p>
          </div>

          <div className="bg-[#fbfbfb] border-2 border-black rounded-3xl p-8 shadow-[6px_6px_0_0_#000] hover:translate-y-[-4px] transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#FF7B72] border-2 border-black flex items-center justify-center text-3xl mb-6 shadow-[2px_2px_0_0_#000]">
              🏕️
            </div>
            <h3 className="text-2xl md:text-3xl font-black uppercase text-black mb-3" style={condensed}>
              Casales Escolares y Refuerzo
            </h3>
            <p className="text-black/80 font-medium leading-relaxed">
              Organización de casales vacacionales de Verano, Navidad y Semana Santa en vuestras propias instalaciones, además de aulas de estudio asistido y refuerzo escolar para apoyar a las familias del colegio.
            </p>
          </div>
        </div>

        {/* Activity Grid */}
        <div id="activities" className="pt-8">
          <div className="flex items-center justify-between gap-4 mb-8">
            <h3 className="text-3xl md:text-4xl font-black uppercase text-black" style={condensed}>
              Catálogo de Actividades Extraescolares
            </h3>
            <span className="text-sm font-bold uppercase text-black/60 hidden sm:inline-block">
              +20 años en Barcelona y comarcas
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {ACTIVITIES.map((a, i) => (
              <a
                key={a.name}
                href="#contacto"
                style={{ backgroundColor: a.color, color: a.light ? "#fff" : "#000" }}
                className="activity-card group relative aspect-square rounded-2xl border-2 border-black p-4 flex flex-col justify-between overflow-hidden shadow-[4px_4px_0_0_#000]"
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
                      decoding="async"
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
                  <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold shrink-0 group-hover:bg-[#D8E600] group-hover:text-black transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
