import { useState, lazy, Suspense } from "react";
import { condensed, btnStyle } from "../lib/styles";
import HeroSection from "./sections/HeroSection";
import TickerSection from "./sections/TickerSection";
import ActividadesSection from "./sections/ActividadesSection";

// Lazy-load below-the-fold components to reduce initial JS bundle size from 130KB to ~35KB
const ProgramaSection = lazy(() => import("./sections/ProgramaSection"));
const CentrosSection = lazy(() => import("./sections/CentrosSection"));
const CarouselSection = lazy(() => import("./sections/CarouselSection"));
const ZonasSection = lazy(() => import("./sections/ZonasSection"));
const EmpleoSection = lazy(() => import("./sections/EmpleoSection"));
const ManifiestoSection = lazy(() => import("./sections/ManifiestoSection"));
const ReviewsSection = lazy(() => import("./ReviewsSection").then(m => ({ default: m.ReviewsSection })));
const FAQSection = lazy(() => import("./FAQSection").then(m => ({ default: m.FAQSection })));
const ContactoSection = lazy(() => import("./sections/ContactoSection"));
const FloatingWidgets = lazy(() => import("./ui/FloatingWidgets"));

export function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Inicio", "#top"],
    ["Servicios", "#servicios"],
    ["Trabaja con Nosotros", "#empleo"],
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
        }}
      >
        <a href="#top" onClick={() => setOpen(false)} className="flex items-center">
          <img src="/diversplas-logo-graffiti.webp" alt="DIVERSPLAS" className="h-14 md:h-16 w-auto block" loading="eager" width={87} height={64} />
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
          style={{ top: 76 }}
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

export function Footer() {
  return (
    <footer className="w-full bg-[#f8f8f8] py-8 border-t-2 border-black text-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm font-semibold">
          <p className="text-black/80 text-center md:text-left">
            <strong>Zonas de Servicio:</strong> Barcelona, Badalona, Santa Coloma de Gramenet, Mollet del Vallès, Sant Fost de Campsentelles, Martorelles
          </p>
          
          <div className="flex items-center gap-4">
            <span className="text-xs text-black font-black whitespace-nowrap">
              © 2026 Diversplas · Desarrollado por{" "}
              <a
                href="https://kovia.es"
                target="_blank"
                rel="noopener"
                className="text-black font-black no-underline"
              >
                Kovia
              </a>
            </span>
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
        <Suspense fallback={null}>
          <ProgramaSection />
          <CentrosSection />
          <CarouselSection />
          <ZonasSection />
          <EmpleoSection />
          <ManifiestoSection />
          <ReviewsSection />
          <FAQSection />
          <ContactoSection />
        </Suspense>
      </main>
      <Footer />
      <Suspense fallback={null}>
        <FloatingWidgets />
      </Suspense>
    </div>
  );
}
