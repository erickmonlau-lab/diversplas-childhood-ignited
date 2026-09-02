import { condensed, condensedItalic, btnStyle } from "../../lib/styles";

export default function Hero({ city = "Barcelona y área metropolitana", cityShort = "Barcelona" }: { city?: string; cityShort?: string }) {
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
      <div className="pointer-events-none absolute top-20 right-[2%] w-18 h-18 md:w-24 md:h-24 hidden md:block animate-[float_3.8s_ease-in-out_infinite] animate-delay-[600ms]">
        <img src="/sticker-trophy.webp" alt="" className="w-full h-full mix-blend-multiply" loading="lazy" width={96} height={96} />
      </div>

      {/* 5. Karate — LEFT CENTER */}
      <div className="pointer-events-none absolute top-[48%] -translate-y-1/2 left-[1%] w-14 h-14 md:w-18 md:h-18 hidden md:block animate-[float_5.5s_ease-in-out_infinite] animate-delay-[900ms]">
        <img src="/sticker-karate.webp" alt="" className="w-full h-full mix-blend-multiply" loading="lazy" width={72} height={72} />
      </div>

      {/* Floating Polaroids */}
      <div style={{ '--rot': '-6deg', transform: 'rotate(var(--rot))', top: '18%', left: '80px', animation: 'float 4s ease-in-out infinite', animationDelay: '0s', position: 'absolute', willChange: 'transform' } as any}
        className="w-52 p-3 pb-8 bg-white border border-black/10 shadow-[6px_6px_0_0_rgba(0,0,0,0.15)] rounded-sm pointer-events-none hidden md:block z-10">
        <img src="/image_53ee82.webp" alt="Niños jugando en una actividad extraescolar de Diversplas en Barcelona" className="w-full h-32 object-cover border border-black/5" loading="eager" fetchPriority="high" width={208} height={128} />
      </div>

      <div style={{ '--rot': '-3deg', transform: 'rotate(var(--rot))', top: '42%', left: '80px', animation: 'float 4.5s ease-in-out infinite', animationDelay: '1.6s', position: 'absolute', willChange: 'transform' } as any}
        className="w-52 p-3 pb-8 bg-white border border-black/10 shadow-[6px_6px_0_0_rgba(0,0,0,0.15)] rounded-sm pointer-events-none hidden md:block z-10">
        <img src="/image_482fc6.webp" alt="Niña con la cara pintada en un taller de Diversplas" className="w-full h-32 object-cover border border-black/5" loading="lazy" width={208} height={128} />
      </div>

      <div style={{ '--rot': '-5deg', transform: 'rotate(var(--rot))', top: '70%', left: '80px', animation: 'float 5s ease-in-out infinite', animationDelay: '3.2s', position: 'absolute', willChange: 'transform' } as any}
        className="w-52 p-3 pb-8 bg-white border border-black/10 shadow-[6px_6px_0_0_rgba(0,0,0,0.15)] rounded-sm pointer-events-none hidden md:block z-10">
        <img src="/image_53c921.webp" alt="Grupo de alumnos en clase de una actividad extraescolar" className="w-full h-32 object-cover border border-black/5" loading="lazy" width={208} height={128} />
      </div>

      <div style={{ '--rot': '5deg', transform: 'rotate(var(--rot))', top: '18%', right: '80px', animation: 'float 4s ease-in-out infinite', animationDelay: '0.8s', position: 'absolute', willChange: 'transform' } as any}
        className="w-52 p-3 pb-8 bg-white border border-black/10 shadow-[6px_6px_0_0_rgba(0,0,0,0.15)] rounded-sm pointer-events-none hidden md:block z-10">
        <img src="/image_53d820.webp" alt="Monitores de Diversplas con un grupo de niños" className="w-full h-32 object-cover border border-black/5" loading="eager" fetchPriority="high" width={208} height={128} />
      </div>

      <div style={{ '--rot': '7deg', transform: 'rotate(var(--rot))', top: '42%', right: '80px', animation: 'float 4.5s ease-in-out infinite', animationDelay: '2.4s', position: 'absolute', willChange: 'transform' } as any}
        className="w-52 p-3 pb-8 bg-white border border-black/10 shadow-[6px_6px_0_0_rgba(0,0,0,0.15)] rounded-sm pointer-events-none hidden md:block z-10">
        <img src="/image_53e780.webp" alt="Clase de zumba para niños de Diversplas" className="w-full h-32 object-cover border border-black/5" loading="lazy" width={208} height={128} />
      </div>

      <div style={{ '--rot': '4deg', transform: 'rotate(var(--rot))', top: '70%', right: '80px', animation: 'float 5s ease-in-out infinite', animationDelay: '1.2s', position: 'absolute', willChange: 'transform' } as any}
        className="w-52 p-3 pb-8 bg-white border border-black/10 shadow-[6px_6px_0_0_rgba(0,0,0,0.15)] rounded-sm pointer-events-none hidden md:block z-10">
        <img src="/image_48117c.webp" alt="Proyecto de manualidades en una actividad extraescolar" className="w-full h-32 object-cover border border-black/5" loading="lazy" width={208} height={128} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-5 md:px-[220px] max-w-[1040px] mx-auto w-full flex flex-col items-center" style={{ maxWidth: '1040px', margin: '0 auto' }}>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-black shadow-[2px_2px_0_0_#000] bg-[#D8E600] mb-10 animate-[fade-in_0.5s_ease-out_forwards]" style={{ whiteSpace: 'nowrap' }}>
          <span className="w-2.5 h-2.5 rounded-full bg-[#1D2F8C] flex-shrink-0" />
          <span className="font-bold text-sm tracking-wide text-black uppercase" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
            +20 años · {cityShort} · AFAs
          </span>
        </div>

        {/* Headline (Único <h1>) */}
        <h1 className="uppercase leading-[1.05] text-[10vw] sm:text-[9vw] md:text-[7vw] lg:text-[80px] animate-[fade-in_0.8s_ease-out_forwards] opacity-0 text-black max-w-4xl mx-auto" style={{ ...condensed, letterSpacing: '0.02em', animationDelay: '100ms' }}>
          Actividades Extraescolares de Calidad en{" "}
          <span className="text-[#1D2F8C]" style={{ ...condensedItalic, letterSpacing: '0.02em' }}>
            {cityShort === "Barcelona" ? "Santa Coloma de Gramenet" : cityShort}<span className="text-[#D8E600]">.</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-black/80 max-w-2xl mx-auto leading-relaxed font-medium animate-[fade-in_0.7s_ease-out_forwards] opacity-0" style={{ animationDelay: '450ms' }}>
          Más de 20 años de experiencia dinamizando colegios, gestionando AFAs y organizando casales infantiles. Profesionales apasionados por la educación y el deporte.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center animate-[fade-in_0.7s_ease-out_forwards] opacity-0" style={{ animationDelay: '650ms' }}>
          <a href="#contacto" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#D8E600] text-black px-8 py-4 font-black border-2 border-black hover:bg-[#c8d500] transition-all uppercase tracking-wide shadow-[4px_4px_0_0_#000] w-full sm:w-auto hover:scale-[1.02]" style={btnStyle}>
            SOLICITAR INFORMACIÓN{" "}
            <span className="transition-transform group-hover:translate-x-1 inline-flex items-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" fill="white" stroke="currentColor" strokeWidth="2"/>
                <path d="M7 10h6M11 7l3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
          <a href="https://wa.me/34657117426" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1D2F8C] text-white px-8 py-4 font-black border-2 border-black hover:bg-[#3055C7] transition-all uppercase tracking-wide shadow-[4px_4px_0_0_#000] w-full sm:w-auto hover:scale-[1.02]" style={btnStyle}>
            CONTACTAR POR WHATSAPP
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
              <img src={img.src} alt={img.alt} className="w-full aspect-square object-cover border border-black/5" loading={i < 2 ? "eager" : "lazy"} fetchPriority={i < 2 ? "high" : "auto"} decoding="async" width={224} height={224} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
