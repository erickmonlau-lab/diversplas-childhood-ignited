import { useState, useEffect, useRef } from "react";
import { condensed, condensedItalic } from "../../lib/styles";
import { TRUST_SLIDES } from "../../lib/data";
import { useInView } from "../../hooks/useInView";

export default function TrustSection() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef);

  const slides = TRUST_SLIDES;
  const slide = slides[current];
  const textColor = slide.dark ? "text-[#1D2F8C]" : "text-white";
  const subColor  = slide.dark ? "text-[#1D2F8C]/60" : "text-white/50";
  const descColor = slide.dark ? "text-black/80" : "text-white/90";
  const dotActive = slide.dark ? "bg-black" : "bg-white";
  const dotInactive= slide.dark ? "bg-black/25" : "bg-white/35";
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // Reset to first slide whenever the section comes into view
    if (isInView) {
      setCurrent(0);
    }
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;
    
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 4000);
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isInView, slides.length]);

  const handleManualChange = (index: number) => {
    setCurrent(index);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 4000);
  };

  const handlePrev = () => {
    handleManualChange((current - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    handleManualChange((current + 1) % slides.length);
  };

  return (
    <section
      ref={sectionRef}
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
        onClick={handlePrev}
        className="w-11 h-11 rounded-full bg-white border-2 border-black shadow-[2px_2px_0_0_#000] flex items-center justify-center text-black font-bold hover:bg-[#D8E600] transition-colors"
        style={{ left: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'auto', cursor: 'pointer', zIndex: 50, position: 'absolute' }}
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        aria-label="Siguiente"
        onClick={handleNext}
        className="w-11 h-11 rounded-full bg-white border-2 border-black shadow-[2px_2px_0_0_#000] flex items-center justify-center text-black font-bold hover:bg-[#D8E600] transition-colors"
        style={{ right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'auto', cursor: 'pointer', zIndex: 50, position: 'absolute' }}
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Content */}
      <div className="relative z-10 py-28 md:py-40 px-16">
        <div
          key={current}
          className="w-full h-full flex flex-col md:flex-row items-center justify-center px-8 md:px-16 lg:px-24 gap-8 md:gap-16 py-12 md:py-0 animate-fade-in"
        >
          {/* Left column */}
          <div className="flex flex-col justify-center items-center md:items-start gap-4 md:gap-6 flex-1 max-w-xl text-center md:text-left">
            <span className="inline-block px-3 py-1 rounded-full border-2 border-black bg-white text-black text-xs font-bold tracking-widest uppercase mb-2" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
              Nuestra historia
            </span>
            <h2
              className="uppercase tracking-tight text-4xl md:text-6xl lg:text-7xl leading-none text-white break-words text-center md:text-left"
              style={{
                ...condensedItalic,
                wordBreak: 'break-word',
                overflowWrap: 'break-word',
                WebkitTextStroke: '2px black',
                textShadow: '3px 3px 0px #000'
              }}
            >
              {slide.headline}
              <span className="block" style={{ ...condensed, wordBreak: "break-word" }}>{slide.sub}</span>
            </h2>
            <p className={`mt-6 text-base md:text-lg text-center md:text-left leading-relaxed font-semibold ${slide.bg === '#D8E600' ? 'text-black' : 'text-white'} text-opacity-90`} style={{ textShadow: slide.dark ? 'none' : '0 1px 8px rgba(0,0,0,0.2)' }}>{slide.description}</p>
            <div className="text-5xl w-full flex justify-center md:justify-start">{slide.icon}</div>
          </div>

          {/* Right column (polaroid image) */}
          <div className="flex-shrink-0 flex items-center justify-center w-full md:w-auto">
            <div
              style={{
                background: '#ffffff',
                padding: '10px 10px 32px 10px',
                borderRadius: '2px',
                rotate: '2deg',
              }}
              className="shadow-[6px_6px_0_0_#000]"
            >
              <img
                src={slide.image}
                alt={slide.headline}
                loading="lazy"
                decoding="async"
                className="w-[260px] h-[200px] md:w-[340px] md:h-[260px] object-cover shadow-[6px_6px_0_0_#000] border-4 border-white block"
                width={340}
                height={260}
              />
            </div>
          </div>
        </div>

        {/* Dot nav — bigger dots, more contrast */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Slide ${i + 1}`}
              onClick={() => handleManualChange(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? `w-12 h-4 ${dotActive}`
                  : `w-4 h-4 ${dotInactive} hover:opacity-70`
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
