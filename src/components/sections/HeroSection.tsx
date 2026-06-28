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

        {/* Headline */}
        <h1 className="uppercase leading-[1.05] tracking-tight text-[13vw] sm:text-[12vw] md:text-[11vw] lg:text-[125px] animate-[fade-in_0.8s_ease-out_forwards] opacity-0" style={{ ...condensed, animationDelay: '100ms' }}>
          <span className="block" style={{ whiteSpace: 'nowrap' }}>No solo</span>
          <span className="block text-[#1D2F8C]" style={{ ...condensedItalic, whiteSpace: 'nowrap' }}>extraescolares.</span>
          <span className="block" style={{ whiteSpace: 'nowrap' }}>
            Aquí crecen<span className="text-[#D8E600]">.</span>
          </span>
        </h1>

        {/* Sub */}
        <p className="mt-8 text-base md:text-lg text-black/70 max-w-xl mx-auto leading-relaxed animate-[fade-in_0.7s_ease-out_forwards] opacity-0" style={{ animationDelay: '450ms' }}>
          <span className="bg-[#D8E600] text-black font-black px-2 py-0.5 rounded mr-1">Mucho más que rellenar las tardes.</span>
          Un espacio para jugar, aprender y crecer. Llevamos más de 20 años diseñando actividades para colegios y AFAs de {city}, ofreciendo total tranquilidad y confianza a las familias.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center animate-[fade-in_0.7s_ease-out_forwards] opacity-0" style={{ animationDelay: '650ms' }}>
          <a href="#contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#D8E600] text-black px-7 py-3.5 font-bold border-2 border-black hover:bg-[#c8d500] transition-colors uppercase tracking-wide shadow-[4px_4px_0_0_#000] w-full sm:w-auto" style={btnStyle}>
            SOLICITAR CITA EN {cityShort.toUpperCase()}{" "}
            <span className="transition-transform group-hover:translate-x-1 inline-flex items-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" fill="white" stroke="currentColor" strokeWidth="2"/>
                <path d="M7 10h6M11 7l3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
          <a href="#activities" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1D2F8C] text-white px-7 py-3.5 font-bold border-2 border-black hover:bg-[#3055C7] transition-colors uppercase tracking-wide shadow-[4px_4px_0_0_#000] w-full sm:w-auto" style={btnStyle}>
            VER ACTIVIDADES
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
