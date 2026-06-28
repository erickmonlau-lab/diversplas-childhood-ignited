import { useState, lazy, Suspense } from "react";
import { condensed, btnStyle } from "../lib/styles";
import HeroSection from "./sections/HeroSection";
import FloatingWidgets from "./ui/FloatingWidgets";

// Lazy loaded sections
const CarouselSection = lazy(() => import("./sections/CarouselSection"));
const CentrosSection = lazy(() => import("./sections/CentrosSection"));
const ActividadesSection = lazy(() => import("./sections/ActividadesSection"));
const TickerSection = lazy(() => import("./sections/TickerSection"));
const ProgramaSection = lazy(() => import("./sections/ProgramaSection"));
const ZonasSection = lazy(() => import("./sections/ZonasSection"));
const ManifiestoSection = lazy(() => import("./sections/ManifiestoSection"));
const ContactoSection = lazy(() => import("./sections/ContactoSection"));
const FAQSection = lazy(() => import("./FAQSection").then(module => ({ default: module.FAQSection })));
const ReviewsSection = lazy(() => import("./ReviewsSection").then(module => ({ default: module.ReviewsSection })));

const SectionFallback = () => <div style={{ minHeight: '300px' }} aria-hidden="true" />;

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Actividades", "#activities"],
    ["Proceso",     "#process"],
    ["Zonas",       "#zones"],
    ["Contacto",    "#contact"],
  ] as const;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between"
        style={{
          background: "rgba(255,255,255,0.88)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: "1.5px solid rgba(0,0,0,0.07)",
          padding: "10px 16px",
          boxSizing: "border-box",
        }}
      >
        <a href="#top" onClick={() => setOpen(false)} className="flex items-center">
          <img src="/diversplas-logo-graffiti.webp" alt="DIVERSPLAS" className="h-14 md:h-16 w-auto block" loading="eager" width={87} height={64} />
        </a>

        <nav className="hidden md:flex items-center gap-0.5 rounded-full border-2 border-black bg-white/95 backdrop-blur-md px-2 py-1.5 shadow-[3px_3px_0_0_#000]">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="px-3 py-1.5 rounded-full text-sm font-semibold hover:bg-black hover:text-white transition-colors">{label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href="#contact"
            className="flex items-center whitespace-nowrap gap-2 rounded-full border-2 border-black bg-[#D8E600] text-black font-bold hover:bg-[#c8d500] transition-colors shadow-[3px_3px_0_0_#000]"
            style={{ ...btnStyle, padding: "8px 14px", fontSize: "0.85rem" }}
            onClick={() => setOpen(false)}
          >
            SOLICITAR CITA
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

function FooterCard({ bg, blob, headline, headlineItalic, dark = false, children }: any) {
  const tc = dark ? "text-black" : "text-white";
  return (
    <div
      className="relative rounded-3xl border-2 border-white overflow-hidden p-8 md:p-10 flex flex-col md:flex-row md:justify-between md:items-center gap-8 min-h-[300px]"
      style={{ backgroundColor: bg }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute" style={{ width: "110%", height: "55%", top: "20%", left: "-5%", backgroundColor: blob, borderRadius: "50% 60% 40% 70% / 60% 30% 70% 40%", transform: "rotate(-10deg)", opacity: 0.4 }} />
        <div className="absolute rounded-full" style={{ width: "25%", height: "40%", top: "-8%", right: "8%", backgroundColor: blob, opacity: 0.3 }} />
      </div>
      <div className="relative z-10 flex flex-col gap-4 max-w-xl">
        <h3 className={`uppercase leading-[0.85] tracking-tight text-[14vw] md:text-[6vw] lg:text-[72px] ${tc}`} style={condensed}>
          {headline}
          {headlineItalic && <span className="block w-fit" style={{ ...condensed, fontStyle: 'italic', marginTop: '12px' }}>{headlineItalic}</span>}
        </h3>
        <div className="bg-[#1D2F8C]" style={{ width: '60px', height: '6px', marginTop: '20px', marginBottom: '16px' }} />
        <p className="text-black font-bold text-lg md:text-xl leading-relaxed max-w-md">
          Más de 20 años a tu lado.<br/>
          <span style={{ background: '#1D2F8C', color: '#ffffff', padding: '2px 10px', borderRadius: '6px', fontWeight: 900 }}>Empieza hoy.</span>
        </p>
      </div>
      <div className={`relative z-10 w-full md:w-auto ${tc}`}>{children}</div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="bg-white border-b-2 border-black px-4 md:px-6 py-6">
        <FooterCard bg="#D8E600" blob="#E8F520" dark headline={
          <span className="flex items-center flex-nowrap w-full whitespace-nowrap" style={{ fontSize: "clamp(2.5rem, 12vw, 72px)" }}>
            <span className="text-[#1D2F8C]" style={{ marginRight: '4px', transform: 'translateY(-5%)' }}>¿</span>
            <span className="tracking-wider" style={{ letterSpacing: '0.05em' }}>EMPEZAMOS</span>
            <span className="text-[#1D2F8C]" style={{ marginLeft: '4px', fontWeight: 900, textShadow: '1px 1px 0 #000', transform: 'translateY(-5%)' }}>?</span>
          </span>
        }>
          <div className="flex flex-col items-start md:items-end gap-4">
            <a href="https://wa.me/34657117426" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full bg-white text-black px-7 py-3.5 font-bold border-2 border-black hover:bg-black hover:text-white transition-all duration-300 hover:scale-[1.05] uppercase shadow-[4px_4px_0_0_#000] w-full" style={btnStyle}>
              <svg className="w-5 h-5 fill-current transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              ESCRÍBENOS
            </a>
            <a href="tel:+34657117426" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#1D2F8C] text-white px-7 py-3.5 font-bold border-2 border-black hover:bg-black transition-all shadow-[4px_4px_0_0_#000] uppercase w-full" style={btnStyle}>
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              +34 657 117 426
            </a>
          </div>
        </FooterCard>
      </div>

      <div className="bg-white py-6 px-6 border-t-2 border-black/10">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-6 flex flex-wrap gap-x-4 gap-y-2 text-[13px] font-bold text-black/80">
            <span className="text-black uppercase tracking-wider mb-1 block w-full">ZONAS DE SERVICIO:</span>
            <a href="/" className="hover:text-[#1D2F8C] transition-colors">Barcelona</a>
            <span className="text-black/30">•</span>
            <a href="/badalona" className="hover:text-[#1D2F8C] transition-colors">Badalona</a>
            <span className="text-black/30">•</span>
            <a href="/santa-coloma" className="hover:text-[#1D2F8C] transition-colors">Santa Coloma de Gramenet</a>
            <span className="text-black/30">•</span>
            <a href="/mollet" className="hover:text-[#1D2F8C] transition-colors">Mollet del Vallès</a>
            <span className="text-black/30">•</span>
            <a href="/sant-fost" className="hover:text-[#1D2F8C] transition-colors">Sant Fost de Campsentelles</a>
            <span className="text-black/30">•</span>
            <a href="/martorelles" className="hover:text-[#1D2F8C] transition-colors">Martorelles</a>
          </div>
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              <img src="/diversplas-logo-graffiti.webp" alt="DIVERSPLAS" className="h-14 w-auto rounded-lg" loading="lazy" decoding="async" width={71} height={56} />
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <a href="https://diversplas.es" className="text-[11px] font-black text-black uppercase tracking-wider border-b-2 border-[#1D2F8C] hover:text-[#D8E600] hover:border-[#D8E600] transition-colors leading-none pb-0.5 inline-block" aria-label="Sitio web de Diversplas">diversplas.es</a>
                <a href="https://www.instagram.com/diversplas_extraescolares" target="_blank" rel="noopener noreferrer" className="text-[11px] font-black text-black uppercase tracking-wider border-b-2 border-[#D8E600] hover:text-[#1D2F8C] hover:border-[#1D2F8C] transition-colors leading-none pb-0.5 inline-block" aria-label="Ir al Instagram de Diversplas">@diversplas_extraescolares</a>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <a className="rounded-full border-2 border-black h-9 w-9 inline-flex items-center justify-center hover:bg-black hover:text-white transition-colors" href="mailto:diversplasextraescolares@gmail.com" aria-label="Enviar email a Diversplas" title="diversplasextraescolares@gmail.com">
                <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              </a>
              <a className="rounded-full border-2 border-black h-9 w-9 inline-flex items-center justify-center hover:bg-black hover:text-white transition-colors" href="tel:+34657117426" aria-label="Llamar a Diversplas" title="+34 657 117 426">
                <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              </a>
              <a className="rounded-full border-2 border-black h-9 w-9 inline-flex items-center justify-center hover:bg-black hover:text-white transition-colors" href="https://wa.me/34657117426" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp de Diversplas" title="WhatsApp">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <span className="text-xs text-black font-black whitespace-nowrap ml-2">© {new Date().getFullYear()} Diversplas</span>
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

export function LandingPage({ city, cityShort, locationContext }: LandingPageProps) {
  return (
    <div className="font-sans antialiased text-[#0a0a0a] min-h-screen selection:bg-[#1D2F8C] selection:text-white" style={{ background: '#0a0a0a' }}>
      <Nav />
      <main className="flex flex-col bg-white">
        <HeroSection city={city} cityShort={cityShort} />
        
        <Suspense fallback={<SectionFallback />}>
          <TickerSection />
        </Suspense>
        
        <Suspense fallback={<SectionFallback />}>
          <ActividadesSection />
        </Suspense>
        
        <Suspense fallback={<SectionFallback />}>
          <ProgramaSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <CentrosSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <CarouselSection />
        </Suspense>
        
        <Suspense fallback={<SectionFallback />}>
          <ZonasSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <ManifiestoSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <ReviewsSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <FAQSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <ContactoSection />
        </Suspense>
      </main>
      <Footer />
      <FloatingWidgets />
    </div>
  );
}
