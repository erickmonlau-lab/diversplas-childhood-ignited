import { condensed, condensedItalic, btnStyle } from "../../lib/styles";

export default function Hero({ city = "Barcelona y área metropolitana", cityShort = "Barcelona" }: { city?: string; cityShort?: string }) {
  return (
    <section id="top" className="relative w-full min-h-screen bg-white flex flex-col justify-center pt-24 pb-16 overflow-visible">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: "radial-gradient(#000 1.5px,transparent 1.5px)", backgroundSize: "36px 36px" }}
      />

      {/* Soft color blobs */}
      <div className="pointer-events-none absolute top-20 -left-20 h-72 w-72 rounded-full bg-[#D8E600] blur-3xl opacity-25" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-80 w-80 rounded-full bg-[#3055C7] blur-3xl opacity-10" />

      {/* 2. Trophy — TOP RIGHT */}
      <div className="pointer-events-none absolute top-20 right-[2%] w-18 h-18 md:w-24 md:h-24 hidden md:block animate-[float_3.8s_ease-in-out_infinite] animate-delay-[600ms]">
        <img src="/sticker-trophy.webp" alt="" className="w-full h-full mix-blend-multiply" loading="lazy" width={96} height={96} />
      </div>

      {/* 5. Karate — LEFT CENTER */}
      <div className="pointer-events-none absolute top-[48%] -translate-y-1/2 left-[1%] w-14 h-14 md:w-18 md:h-18 hidden md:block animate-[float_5.5s_ease-in-out_infinite] animate-delay-[900ms]">
        <img src="/sticker-karate.webp" alt="" className="w-full h-full mix-blend-multiply" loading="lazy" width={72} height={72} />
      </div>

      {/* Floating Polaroids (Visible on screens wide enough >= 1200px so they never overlap text) */}
      <div style={{ '--rot': '-6deg', transform: 'rotate(var(--rot))', top: '18%', left: 'max(20px, calc(50% - 680px))', animation: 'float 4s ease-in-out infinite', animationDelay: '0s', position: 'absolute', willChange: 'transform' } as any}
        className="w-44 xl:w-52 p-2.5 xl:p-3 pb-6 xl:pb-8 bg-white border border-black/10 shadow-[6px_6px_0_0_rgba(0,0,0,0.15)] rounded-sm pointer-events-none hidden min-[1200px]:block z-10 h-[170px] xl:h-[190px]">
        <img src="/image_53ee82.webp" alt="Niños jugando en una actividad extraescolar de Diversplas en Barcelona" className="w-full h-28 xl:h-32 object-cover border border-black/5" loading="lazy" fetchPriority="low" decoding="async" width={208} height={128} />
      </div>

      <div style={{ '--rot': '-3deg', transform: 'rotate(var(--rot))', top: '42%', left: 'max(20px, calc(50% - 680px))', animation: 'float 4.5s ease-in-out infinite', animationDelay: '1.6s', position: 'absolute', willChange: 'transform' } as any}
        className="w-44 xl:w-52 p-2.5 xl:p-3 pb-6 xl:pb-8 bg-white border border-black/10 shadow-[6px_6px_0_0_rgba(0,0,0,0.15)] rounded-sm pointer-events-none hidden min-[1200px]:block z-10 h-[170px] xl:h-[190px]">
        <img src="/image_482fc6.webp" alt="Niña con la cara pintada en un taller de Diversplas" className="w-full h-28 xl:h-32 object-cover border border-black/5" loading="lazy" fetchPriority="low" decoding="async" width={208} height={128} />
      </div>

      <div style={{ '--rot': '-5deg', transform: 'rotate(var(--rot))', top: '70%', left: 'max(20px, calc(50% - 680px))', animation: 'float 5s ease-in-out infinite', animationDelay: '3.2s', position: 'absolute', willChange: 'transform' } as any}
        className="w-44 xl:w-52 p-2.5 xl:p-3 pb-6 xl:pb-8 bg-white border border-black/10 shadow-[6px_6px_0_0_rgba(0,0,0,0.15)] rounded-sm pointer-events-none hidden min-[1200px]:block z-10 h-[170px] xl:h-[190px]">
        <img src="/image_53c921.webp" alt="Grupo de alumnos en clase de una actividad extraescolar" className="w-full h-28 xl:h-32 object-cover border border-black/5" loading="lazy" fetchPriority="low" decoding="async" width={208} height={128} />
      </div>

      <div style={{ '--rot': '5deg', transform: 'rotate(var(--rot))', top: '18%', right: 'max(20px, calc(50% - 680px))', animation: 'float 4s ease-in-out infinite', animationDelay: '0.8s', position: 'absolute', willChange: 'transform' } as any}
        className="w-44 xl:w-52 p-2.5 xl:p-3 pb-6 xl:pb-8 bg-white border border-black/10 shadow-[6px_6px_0_0_rgba(0,0,0,0.15)] rounded-sm pointer-events-none hidden min-[1200px]:block z-10 h-[170px] xl:h-[190px]">
        <img src="/image_53d820.webp" alt="Monitores de Diversplas con un grupo de niños" className="w-full h-28 xl:h-32 object-cover border border-black/5" loading="lazy" fetchPriority="low" decoding="async" width={208} height={128} />
      </div>

      <div style={{ '--rot': '7deg', transform: 'rotate(var(--rot))', top: '42%', right: 'max(20px, calc(50% - 680px))', animation: 'float 4.5s ease-in-out infinite', animationDelay: '2.4s', position: 'absolute', willChange: 'transform' } as any}
        className="w-44 xl:w-52 p-2.5 xl:p-3 pb-6 xl:pb-8 bg-white border border-black/10 shadow-[6px_6px_0_0_rgba(0,0,0,0.15)] rounded-sm pointer-events-none hidden min-[1200px]:block z-10 h-[170px] xl:h-[190px]">
        <img src="/image_53e780.webp" alt="Clase de zumba para niños de Diversplas" className="w-full h-28 xl:h-32 object-cover border border-black/5" loading="lazy" fetchPriority="low" decoding="async" width={208} height={128} />
      </div>

      <div style={{ '--rot': '4deg', transform: 'rotate(var(--rot))', top: '70%', right: 'max(20px, calc(50% - 680px))', animation: 'float 5s ease-in-out infinite', animationDelay: '1.2s', position: 'absolute', willChange: 'transform' } as any}
        className="w-44 xl:w-52 p-2.5 xl:p-3 pb-6 xl:pb-8 bg-white border border-black/10 shadow-[6px_6px_0_0_rgba(0,0,0,0.15)] rounded-sm pointer-events-none hidden min-[1200px]:block z-10 h-[170px] xl:h-[190px]">
        <img src="/image_48117c.webp" alt="Proyecto de manualidades en una actividad extraescolar" className="w-full h-28 xl:h-32 object-cover border border-black/5" loading="lazy" fetchPriority="low" decoding="async" width={208} height={128} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 min-[1200px]:px-8 max-w-4xl mx-auto w-full flex flex-col items-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border-2 border-black shadow-[3px_3px_0_0_#000] bg-[#D8E600] mb-8" style={{ whiteSpace: 'nowrap' }}>
          <span className="w-3 h-3 rounded-full bg-[#1D2F8C] flex-shrink-0 animate-pulse" />
          <span className="font-extrabold text-sm sm:text-base tracking-normal text-black uppercase" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
            Servicio Exclusivo para Colegios y AFAs · +20 Años
          </span>
        </div>

        {/* Headline (Único <h1>) - Renderizado inmediato */}
        <h1 className="uppercase leading-[1.05] text-[9.5vw] sm:text-[8.5vw] md:text-[6.5vw] lg:text-[76px] text-black max-w-4xl mx-auto" style={{ ...condensed, letterSpacing: '0.02em' }}>
          Gestión de Extraescolares y Casales para{" "}
          <span className="text-[#1D2F8C]" style={{ ...condensedItalic, letterSpacing: '0.02em' }}>
            Colegios y AFAs<span className="text-[#D8E600]">.</span>
          </span>
        </h1>

        {/* Subtitle - Enfocado a Colegios y AFAs */}
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-black/80 max-w-2xl mx-auto leading-relaxed font-medium">
          Más de 20 años de experiencia dinamizando actividades extraescolares y casales para colegios y AFAs. <strong>Con sede en Santa Coloma y El Fondo, y proyectos abiertos para centros de toda el área metropolitana de Barcelona</strong>.
        </p>

        {/* CTAs - B2B Directo */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-2xl">
          <a href="#contacto" className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#D8E600] text-black px-8 py-4 sm:py-4.5 font-extrabold border-2 border-black hover:bg-[#c8d500] transition-all uppercase shadow-[4px_4px_0_0_#000] w-full sm:w-auto hover:scale-[1.02] text-sm sm:text-base text-center" style={btnStyle}>
            SOLICITAR PROPUESTA PARA TU CENTRO
            <span className="transition-transform group-hover:translate-x-1 inline-flex items-center flex-shrink-0">
              <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" fill="white" stroke="currentColor" strokeWidth="2"/>
                <path d="M7 10h6M11 7l3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
          <a href="https://wa.me/34657117426?text=Hola%2C%20somos%20un%20colegio%20%2F%20AFA%20y%20nos%20gustar%C3%ADa%20informaci%C3%B3n%20para%20nuestro%20centro" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1D2F8C] text-white px-8 py-4 sm:py-4.5 font-extrabold border-2 border-black hover:bg-[#3055C7] transition-all uppercase shadow-[4px_4px_0_0_#000] w-full sm:w-auto hover:scale-[1.02] text-sm sm:text-base text-center" style={btnStyle}>
            CONTACTAR COORDINACIÓN
          </a>
        </div>

        {/* Mobile Gallery */}
        <div className="mt-12 grid grid-cols-2 gap-4 w-full max-w-md md:hidden px-2">
          {[
            { src: "/image_53ee82.webp", alt: "Niños jugando en una actividad extraescolar de Diversplas en Barcelona" },
            { src: "/image_53d820.webp", alt: "Monitores de Diversplas con un grupo de niños" },
            { src: "/image_53e780.webp", alt: "Clase de zumba para niños de Diversplas" },
            { src: "/image_482fc6.webp", alt: "Niña con la cara pintada en un taller de Diversplas" },
            { src: "/image_53c921.webp", alt: "Grupo de alumnos en clase de una actividad extraescolar" },
            { src: "/image_48117c.webp", alt: "Proyecto de manualidades en una actividad extraescolar" }
          ].map((img, i) => (
            <div key={i} className="bg-white p-2 pb-6 border border-black/10 shadow-[4px_4px_0_0_rgba(0,0,0,0.15)] rounded-sm">
              <img src={img.src} alt={img.alt} className="w-full aspect-square object-cover border border-black/5" loading="lazy" fetchPriority="low" decoding="async" width={224} height={224} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
