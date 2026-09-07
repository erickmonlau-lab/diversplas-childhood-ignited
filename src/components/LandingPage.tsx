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
              {/* Personaje animado de Diversplas */}
              <div className="w-full sm:w-[360px] h-[270px] flex-shrink-0 flex items-center justify-center overflow-visible">
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

      {/* Footer Principal: Estructura en Columnas Limpias y Marca */}
      <div className="bg-white pt-14 pb-12 px-6 relative z-30 overflow-visible border-t border-black/10">
        <div className="mx-auto max-w-[1400px]">
          {/* Fila superior: Columnas de información y navegación */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16">
            {/* Columna 1: Logo + Descripción de la empresa (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-start space-y-4">
              <a href="#top" className="inline-block group transition-transform hover:scale-105 duration-200">
                <img
                  src="/diversplas-logo-graffiti.webp"
                  alt="DIVERSPLAS"
                  className="h-16 sm:h-20 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                  width={110}
                  height={80}
                />
              </a>
              <p className="text-sm font-semibold text-black/80 max-w-md leading-relaxed">
                Especialistas en actividades extraescolares, casales deportivos y gestión integral de ocio educativo para colegios y AFAs. Más de 20 años transformando los patios en espacios activos y seguros.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://www.instagram.com/diversplas_extraescolares"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-black text-black bg-white hover:bg-[#1D2F8C] hover:text-white px-3 py-1.5 rounded-xl border-2 border-black shadow-[2px_2px_0_0_#000] transition-all hover:scale-105"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @diversplas_extraescolares
                </a>
                <a
                  href="/trabaja-con-nosotros"
                  className="inline-flex items-center gap-1.5 text-xs font-black text-black bg-gray-100 hover:bg-black hover:text-white px-3 py-1.5 rounded-xl border-2 border-black shadow-[2px_2px_0_0_#000] transition-all hover:scale-105"
                >
                  💼 Trabaja con nosotros
                </a>
              </div>
            </div>

            {/* Columna 2: Navegación Rápida (3 cols) */}
            <div className="lg:col-span-3 flex flex-col space-y-4">
              <span className="inline-block bg-[#1D2F8C] text-white text-[11px] font-black uppercase px-3 py-1 rounded-lg border-2 border-black shadow-[2px_2px_0_0_#000] tracking-wider w-fit">
                Navegación
              </span>
              <ul className="space-y-2.5 text-sm font-bold text-black/90">
                <li>
                  <a href="#servicios" className="hover:text-[#1D2F8C] transition-colors flex items-center gap-1.5">
                    <span className="text-[#1D2F8C]">▸</span> Actividades Extraescolares
                  </a>
                </li>
                <li>
                  <a href="#process" className="hover:text-[#1D2F8C] transition-colors flex items-center gap-1.5">
                    <span className="text-[#1D2F8C]">▸</span> Cómo Funciona
                  </a>
                </li>
                <li>
                  <a href="#zones" className="hover:text-[#1D2F8C] transition-colors flex items-center gap-1.5">
                    <span className="text-[#1D2F8C]">▸</span> Zonas de Servicio
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-[#1D2F8C] transition-colors flex items-center gap-1.5">
                    <span className="text-[#1D2F8C]">▸</span> Preguntas Frecuentes
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="hover:text-[#1D2F8C] transition-colors flex items-center gap-1.5">
                    <span className="text-[#1D2F8C]">▸</span> Contacto para Centros
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna 3: Zonas Escolares / Localidades (4 cols) */}
            <div className="lg:col-span-4 flex flex-col space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-[#D8E600] text-black text-[11px] font-black uppercase px-3 py-1 rounded-lg border-2 border-black shadow-[2px_2px_0_0_#000] tracking-wider">
                  Zonas Escolares
                </span>
                <span className="text-xs text-black/70 font-bold">
                  Cataluña
                </span>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-bold text-black">
                <a
                  href="/santa-coloma"
                  className="inline-flex items-center gap-1 bg-[#D8E600]/30 hover:bg-[#D8E600] text-black px-2.5 py-1.5 rounded-lg border-2 border-black shadow-[2px_2px_0_0_#000] transition-all"
                >
                  🏫 Santa Coloma (Sede)
                </a>
                <a
                  href="/fondo"
                  className="inline-flex items-center gap-1 bg-[#35D0BA]/30 hover:bg-[#35D0BA] text-black px-2.5 py-1.5 rounded-lg border-2 border-black shadow-[2px_2px_0_0_#000] transition-all"
                >
                  📍 El Fondo
                </a>
                <a
                  href="/badalona"
                  className="inline-flex items-center gap-1 bg-white hover:bg-[#1D2F8C] hover:text-white text-black px-2.5 py-1.5 rounded-lg border-2 border-black shadow-[2px_2px_0_0_#000] transition-all"
                >
                  Badalona
                </a>
                <a
                  href="/barcelona"
                  className="inline-flex items-center gap-1 bg-white hover:bg-[#1D2F8C] hover:text-white text-black px-2.5 py-1.5 rounded-lg border-2 border-black shadow-[2px_2px_0_0_#000] transition-all"
                >
                  Barcelona
                </a>
                <a
                  href="/mollet"
                  className="inline-flex items-center gap-1 bg-white hover:bg-[#1D2F8C] hover:text-white text-black px-2.5 py-1.5 rounded-lg border-2 border-black shadow-[2px_2px_0_0_#000] transition-all"
                >
                  Mollet del Vallès
                </a>
                <a
                  href="/sant-fost"
                  className="inline-flex items-center gap-1 bg-white hover:bg-[#1D2F8C] hover:text-white text-black px-2.5 py-1.5 rounded-lg border-2 border-black shadow-[2px_2px_0_0_#000] transition-all"
                >
                  Sant Fost
                </a>
                <a
                  href="/martorelles"
                  className="inline-flex items-center gap-1 bg-white hover:bg-[#1D2F8C] hover:text-white text-black px-2.5 py-1.5 rounded-lg border-2 border-black shadow-[2px_2px_0_0_#000] transition-all"
                >
                  Martorelles
                </a>
              </div>
            </div>
          </div>

          {/* Fila inferior: Redes sociales y el personaje con la píldora de copyright */}
          <div className="border-t-2 border-black pt-8 flex flex-col sm:flex-row justify-between items-center gap-8 overflow-visible">
            {/* Canales de Contacto Directo */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-black uppercase text-black/70 mr-1 tracking-wider">Contacto rápido:</span>
              <a
                className="rounded-full border-2 border-black h-10 w-10 inline-flex items-center justify-center bg-white hover:bg-black hover:text-white transition-all shadow-[2px_2px_0_0_#000] hover:scale-105"
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
                className="rounded-full border-2 border-black h-10 w-10 inline-flex items-center justify-center bg-[#D8E600] text-black hover:bg-black hover:text-white transition-all shadow-[2px_2px_0_0_#000] hover:scale-105"
                href="tel:+34657117426"
                aria-label="Llamar a Diversplas"
                title="+34 657 117 426"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </a>
              <a
                className="rounded-full border-2 border-black h-10 w-10 inline-flex items-center justify-center bg-[#25D366] text-black hover:bg-black hover:text-white transition-all shadow-[2px_2px_0_0_#000] hover:scale-105"
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
            </div>

            {/* Zona Derecha: Créditos con el personaje y spray */}
            <div className="flex items-center overflow-visible">
              <div className="relative pt-24 overflow-visible">
                {/* Animación: sin flotar arriba/abajo, balanceo sutil de lado a lado como incómodo 'haciéndose el inocente' */}
                <style>{`
                  @keyframes mascotSwayInnocent {
                    0%, 100% {
                      transform: rotate(0deg);
                    }
                    25% {
                      transform: rotate(-3deg);
                    }
                    75% {
                      transform: rotate(3deg);
                    }
                  }
                  /* Chorro y nube de pintura saliendo directamente del pico blanco del bote a la derecha */
                  @keyframes footerCanSpray {
                    0% {
                      opacity: 0;
                      transform: scale(0.2) translate(0, 0);
                    }
                    25% {
                      opacity: 0.95;
                      transform: scale(0.85) translate(8px, 4px);
                    }
                    70% {
                      opacity: 0.6;
                      transform: scale(1.3) translate(18px, 8px);
                    }
                    100% {
                      opacity: 0;
                      transform: scale(1.7) translate(28px, 12px);
                    }
                  }
                  .mascot-sway-anim {
                    animation: mascotSwayInnocent 4.8s ease-in-out infinite;
                    transform-origin: bottom center;
                  }
                  .footer-sneak-mist {
                    animation: footerCanSpray 2.2s cubic-bezier(0.2, 0.8, 0.4, 1) infinite;
                    transform-origin: 0px 0px;
                  }
                `}</style>

                {/* Personaje asomando encima de la píldora con z-index alto sobre cualquier sección */}
                <div className="absolute -top-24 sm:-top-28 left-1/2 -translate-x-1/2 group pointer-events-auto cursor-pointer z-30 flex flex-col items-center">
                  {/* Bocadillo de diálogo B2B con margen generoso arriba */}
                  <div className="absolute -top-12 sm:-top-14 bg-white text-black font-black text-xs sm:text-sm px-4 py-2 rounded-xl border-2 border-black shadow-[3px_3px_0_0_#000] whitespace-nowrap opacity-100 group-hover:scale-105 transition-all pointer-events-none z-40">
                    ¿Hablamos para vuestro colegio o AFA? 🏫✨
                    {/* Pico apuntando hacia la gorra */}
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white border-r-2 border-b-2 border-black rotate-45" />
                  </div>

                  {/* Contenedor del muñeco + spray juntos para que se muevan y escalen en perfecta sincronía */}
                  <div className="mascot-sway-anim relative">
                    <img
                      src="/mascot-hiding.webp"
                      alt="Mascota Diversplas para Colegios y AFAs"
                      className="h-36 sm:h-44 w-auto object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)] hover:scale-105 transition-transform duration-300 relative z-30 block"
                      loading="lazy"
                      width={160}
                      height={215}
                    />

                    {/* Fuga de spray naciendo EXACTAMENTE en la boquilla del bote (86.5% horizontal, 53.5% vertical) */}
                    <div 
                      className="absolute pointer-events-none z-40"
                      style={{ left: '86.5%', top: '53.5%' }}
                    >
                      <svg
                        viewBox="0 -25 90 50"
                        className="w-24 h-24 pointer-events-none overflow-visible"
                        style={{ transform: 'translate(0px, -50%)' }}
                      >
                        <defs>
                          <radialGradient id="ftSprayGrad4" cx="15%" cy="50%" r="60%">
                            <stop offset="0%" stopColor="#D8E600" stopOpacity="0.95" />
                            <stop offset="40%" stopColor="#35D0BA" stopOpacity="0.85" />
                            <stop offset="80%" stopColor="#1D2F8C" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#1D2F8C" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                        <g className="footer-sneak-mist">
                          {/* Chorro cónico saliendo justo de la boquilla (0,0) */}
                          <polygon
                            points="0,0 32,-14 36,12"
                            fill="url(#ftSprayGrad4)"
                            opacity="0.9"
                          />
                          <circle cx="16" cy="-2" r="8" fill="url(#ftSprayGrad4)" />
                          <circle cx="32" cy="0" r="12" fill="url(#ftSprayGrad4)" />
                          <circle cx="48" cy="2" r="15" fill="url(#ftSprayGrad4)" />
                          {/* Gotas y chispas de pintura nítidas */}
                          <circle cx="28" cy="-10" r="2.5" fill="#D8E600" stroke="#000" strokeWidth="0.75" />
                          <circle cx="44" cy="-2" r="3" fill="#35D0BA" stroke="#000" strokeWidth="0.75" />
                          <circle cx="36" cy="10" r="2" fill="#FFEA00" />
                          <circle cx="56" cy="4" r="3" fill="#1D2F8C" stroke="#fff" strokeWidth="0.5" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Píldora de créditos */}
                <div className="relative z-20 flex items-center gap-2 bg-white border-2 border-black px-4 py-2 rounded-full shadow-[3px_3px_0_0_#000] text-xs font-bold whitespace-nowrap">
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
