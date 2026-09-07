import { useState } from "react";
import { condensed, btnStyle } from "../lib/styles";
import HeroSection from "./sections/HeroSection";
import TickerSection from "./sections/TickerSection";
import ActividadesSection from "./sections/ActividadesSection";
import ProgramaSection from "./sections/ProgramaSection";
import CentrosSection from "./sections/CentrosSection";
import CarouselSection from "./sections/CarouselSection";
import ZonasSection from "./sections/ZonasSection";
import EmpleoSection from "./sections/EmpleoSection";
import ManifiestoSection from "./sections/ManifiestoSection";
import { ReviewsSection } from "./ReviewsSection";
import { FAQSection } from "./FAQSection";
import ContactoSection from "./sections/ContactoSection";
import FloatingWidgets from "./ui/FloatingWidgets";
import { MascotFooter } from "./ui/MascotFooter";

export function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Inicio", "#top"],
    ["Actividades", "#servicios"],
    ["Proceso", "#process"],
    ["Zonas", "#zones"],
    ["Preguntas", "#faq"],
    ["Contacto", "#contacto"],
  ] as const;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between"
        style={{
          background: "rgba(255,255,255,0.95)",
          borderBottom: "1.5px solid rgba(0,0,0,0.07)",
          padding: "10px 16px",
          boxSizing: "border-box",
          height: "80px",
        }}
      >
        <a href="#top" onClick={() => setOpen(false)} className="flex items-center">
          <img src="/diversplas-logo-graffiti.webp" alt="DIVERSPLAS" className="h-14 md:h-16 w-auto block" loading="eager" fetchPriority="high" decoding="async" width={87} height={64} />
        </a>

        <nav className="hidden md:flex items-center gap-0.5 rounded-full border-2 border-black bg-white/95 px-2 py-1.5 shadow-[3px_3px_0_0_#000]">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="px-3.5 py-1.5 rounded-full text-sm font-bold hover:bg-black hover:text-white transition-colors">{label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href="https://wa.me/34657117426"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center whitespace-nowrap gap-2 rounded-full border-2 border-black bg-[#25D366] text-black font-black hover:bg-[#20bd5a] transition-all shadow-[3px_3px_0_0_#000] hover:scale-[1.02]"
            style={{ ...btnStyle, padding: "8px 16px", fontSize: "0.85rem" }}
            onClick={() => setOpen(false)}
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Contactar por WhatsApp
          </a>
          <button
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="md:hidden flex items-center justify-center rounded-full border-2 border-black bg-white hover:bg-black hover:text-white transition-colors shadow-[2px_2px_0_0_#000]"
            style={{ width: 40, height: 40, flexShrink: 0 }}
          >
            <span className="text-lg leading-none font-black select-none">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </header>

      {open && (
        <div
          className="fixed left-4 right-4 z-40 rounded-2xl border-2 border-black bg-white shadow-[6px_6px_0_0_#000] overflow-hidden animate-fade-in"
          style={{ top: 80 }}
        >
          <nav className="flex flex-col">
            {links.map(([label, href], i) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`px-6 py-5 text-xl font-black uppercase tracking-wider hover:bg-[#D8E600] transition-colors flex items-center justify-between ${
                  i < links.length - 1 ? "border-b-2 border-black/10" : ""
                }`}
                style={condensed}
              >
                <span>{label}</span>
                <span className="text-[#0a0a0a] inline-flex items-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="9" fill="white" stroke="currentColor" strokeWidth="2"/>
                    <path d="M7 10h6M11 7l3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </a>
            ))}
          </nav>
        </div>
      )}

      {open && <div className="fixed inset-0 z-30" onClick={() => setOpen(false)} />}
    </>
  );
}

function FooterCard({
  bg, blob, headline, headlineItalic, dark = false, children,
}: {
  bg: string; blob: string; headline: React.ReactNode; headlineItalic?: React.ReactNode;
  dark?: boolean; children: React.ReactNode;
}) {
  const tc = dark ? "text-black" : "text-white";
  return (
    <div
      className="relative rounded-3xl border-2 border-black overflow-hidden p-8 md:p-12 flex flex-col md:flex-row md:justify-between md:items-center gap-8 min-h-[300px] shadow-[6px_6px_0_0_#000]"
      style={{ backgroundColor: bg }}
    >
      {/* Blob decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute"
          style={{
            width: "110%", height: "55%", top: "20%", left: "-5%",
            backgroundColor: blob,
            borderRadius: "50% 60% 40% 70% / 60% 30% 70% 40%",
            transform: "rotate(-10deg)",
            opacity: 0.4,
          }}
        />
        <div
          className="absolute rounded-full"
          style={{ width: "25%", height: "40%", top: "-8%", right: "8%", backgroundColor: blob, opacity: 0.3 }}
        />
      </div>
      {/* Left Column (Title + Description) */}
      <div className="relative z-10 flex flex-col gap-4 max-w-xl">
        <h3
          className={`uppercase leading-[0.88] tracking-tight text-[12vw] md:text-[6vw] lg:text-[68px] ${tc}`}
          style={condensed}
        >
          {headline}
          {headlineItalic && (
            <span 
              className="block w-fit text-[#1D2F8C]" 
              style={{ 
                ...condensedItalic,
                marginTop: '8px'
              }}
            >
              {headlineItalic}
            </span>
          )}
        </h3>
        <div className="bg-[#1D2F8C] w-16 h-1.5 mt-2 mb-1" />
        <p className="text-black font-bold text-lg md:text-xl leading-relaxed max-w-lg" style={{ textWrap: "balance" as any }}>
          Más de 20 años dinamizando actividades escolares.<br className="hidden sm:inline" />{" "}
          <span style={{ background: '#1D2F8C', color: '#ffffff', padding: '3px 12px', borderRadius: '8px', fontWeight: 900, display: 'inline-block', marginTop: '6px' }}>
            Lleva Diversplas a tu centro.
          </span>
        </p>
      </div>
      {/* Right Column (WhatsApp button + Call) */}
      <div className={`relative z-10 w-full md:w-auto ${tc}`}>{children}</div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-white border-t-2 border-black text-black">
      {/* CTA Footer Card — Amarillo corporativo */}
      <div className="bg-white border-b-2 border-black px-4 sm:px-6 md:px-8 py-10 md:py-14">
        <div className="mx-auto max-w-[1400px]">
          <FooterCard
            bg="#D8E600"
            blob="#E8F520"
            headline={
              <span className="flex items-center flex-nowrap w-full whitespace-nowrap" style={{ fontSize: "clamp(2.2rem, 8vw, 68px)" }}>
                <span className="text-[#1D2F8C] mr-1">¿</span>
                <span>EMPEZAMOS</span>
                <span className="text-[#1D2F8C] ml-1">?</span>
              </span>
            }
            dark
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Personaje animado en SVG nativo de Diversplas */}
              <div className="w-56 sm:w-64 h-56 flex-shrink-0 flex items-center justify-center overflow-visible">
                <MascotFooter />
              </div>

              {/* Botones de acción */}
              <div className="flex flex-col items-stretch sm:items-end gap-3.5 w-full sm:w-auto">
                <a
                  href="https://wa.me/34657117426?text=Hola%2C%20somos%20un%20colegio%20%2F%20AFA%20y%20nos%20gustar%C3%ADa%20informaci%C3%B3n%20para%20nuestro%20centro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-white text-black px-8 py-4 font-extrabold border-2 border-black hover:bg-black hover:text-white transition-all duration-300 hover:scale-[1.02] uppercase shadow-[4px_4px_0_0_#000] group w-full text-center"
                  style={btnStyle}
                >
                  <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  ESCRÍBENOS POR WHATSAPP
                </a>
                <a
                  href="tel:+34657117426"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#1D2F8C] text-white px-8 py-4 font-extrabold border-2 border-black hover:bg-[#3055C7] transition-all shadow-[4px_4px_0_0_#000] uppercase w-full text-center"
                  style={btnStyle}
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2 flex-shrink-0" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  +34 657 117 426
                </a>
              </div>
            </div>
          </FooterCard>
        </div>
      </div>

      {/* SEO GEO Links & Navegación Local para Colegios */}
      <div className="bg-[#f9f9f9] py-8 px-6 border-b border-black/10">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="bg-[#1D2F8C] text-white text-[11px] font-black uppercase px-2.5 py-1 rounded border border-black tracking-wider">
              Zonas de Operativa y Expansión:
            </span>
            <span className="text-xs text-black/60 font-medium">
              Servicio de extraescolares y casales para colegios y AFAs en:
            </span>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-bold text-black">
            <a href="/santa-coloma" className="hover:text-[#1D2F8C] underline decoration-2 decoration-[#D8E600] transition-colors">
              Santa Coloma de Gramenet (Sede)
            </a>
            <span className="text-black/30">•</span>
            <a href="/fondo" className="hover:text-[#1D2F8C] underline decoration-2 decoration-[#D8E600] transition-colors">
              El Fondo
            </a>
            <span className="text-black/30">•</span>
            <a href="/badalona" className="hover:text-[#1D2F8C] hover:underline transition-colors">
              Badalona
            </a>
            <span className="text-black/30">•</span>
            <a href="/barcelona" className="hover:text-[#1D2F8C] hover:underline transition-colors">
              Barcelona
            </a>
            <span className="text-black/30">•</span>
            <a href="/mollet" className="hover:text-[#1D2F8C] hover:underline transition-colors">
              Mollet del Vallès
            </a>
            <span className="text-black/30">•</span>
            <a href="/sant-fost" className="hover:text-[#1D2F8C] hover:underline transition-colors">
              Sant Fost de Campsentelles
            </a>
            <span className="text-black/30">•</span>
            <a href="/martorelles" className="hover:text-[#1D2F8C] hover:underline transition-colors">
              Martorelles
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Legal, Social & Credits */}
      <div className="bg-white py-6 px-6">
        <div className="mx-auto max-w-[1400px] flex flex-wrap justify-between items-center gap-6">
          <div className="flex items-center gap-4 flex-wrap">
            <a href="#top" className="flex items-center">
              <img
                src="/diversplas-logo-graffiti.webp"
                alt="DIVERSPLAS"
                className="h-12 w-auto"
                loading="lazy"
                decoding="async"
                width={71}
                height={56}
              />
            </a>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <a
                href="https://diversplas.es"
                className="text-xs font-black text-black uppercase tracking-wider hover:text-[#1D2F8C] transition-colors"
              >
                diversplas.es
              </a>
              <span className="text-black/20">|</span>
              <a
                href="https://www.instagram.com/diversplas_extraescolares"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-black text-black uppercase tracking-wider hover:text-[#1D2F8C] transition-colors"
              >
                @diversplas_extraescolares
              </a>
              <span className="text-black/20">|</span>
              <a
                href="/trabaja-con-nosotros"
                className="text-xs font-semibold text-black/60 hover:text-black underline transition-colors"
              >
                Trabaja con Nosotros
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              className="rounded-full border-2 border-black h-9 w-9 inline-flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              href="mailto:diversplascontacto@gmail.com"
              aria-label="Enviar email a Diversplas"
              title="diversplascontacto@gmail.com"
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
            <a
              className="rounded-full border-2 border-black h-9 w-9 inline-flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              href="tel:+34657117426"
              aria-label="Llamar a Diversplas"
              title="+34 657 117 426"
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
            <a
              className="rounded-full border-2 border-black h-9 w-9 inline-flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              href="https://wa.me/34657117426"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp de Diversplas"
              title="WhatsApp"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <div className="flex items-center gap-2 bg-white border-2 border-black px-3.5 py-1.5 rounded-full shadow-[2px_2px_0_0_#000] text-xs font-bold whitespace-nowrap ml-2">
              <span>© 2026 Diversplas</span>
              <span className="text-black/30">·</span>
              <span>
                Desarrollado por{" "}
                <a
                  href="https://kovia.es"
                  target="_blank"
                  rel="noopener"
                  className="font-black text-black underline hover:text-[#1D2F8C]"
                >
                  Kovia
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export interface LandingPageProps {
  city?: string;
  cityShort?: string;
  locationContext?: string;
}

export function LandingPage({ city, cityShort }: LandingPageProps) {
  return (
    <div className="font-sans antialiased text-[#0a0a0a] min-h-screen selection:bg-[#1D2F8C] selection:text-white" style={{ background: '#ffffff' }}>
      <Nav />
      <main className="flex flex-col bg-white">
        <HeroSection city={city} cityShort={cityShort} />
        <TickerSection />
        <ActividadesSection />
        <ProgramaSection />
        <CentrosSection />
        <CarouselSection />
        <ZonasSection />
        <ManifiestoSection />
        <ReviewsSection />
        <FAQSection />
        <ContactoSection />
      </main>
      <Footer />
      <FloatingWidgets />
    </div>
  );
}
