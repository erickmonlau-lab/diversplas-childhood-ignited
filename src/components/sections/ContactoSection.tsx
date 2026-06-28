import { useState, useEffect } from "react";
import { condensed, condensedItalic, btnStyle } from "../../lib/styles";
import { useInView } from "../../hooks/useInView";
import { useRef } from "react";

function ContactForm({ tipo: initialTipo }: { tipo?: 'centro' | 'familia' } = {}) {
  const [perfil, setPerfil] = useState<string>(initialTipo || '');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialTipo) {
      setPerfil(initialTipo);
    }
  }, [initialTipo]);

  const camposCentro = [
    ["Nombre", "text", "nombre", "Tu nombre"],
    ["Centro educativo", "text", "centro", "Nombre del colegio"],
    ["Cargo", "text", "cargo", "Director, AFA..."],
    ["Teléfono", "tel", "telefono", "657 117 426"],
    ["Email", "email", "email", "tu@email.com"],
  ];

  const camposFamilia = [
    ["Nombre", "text", "nombre", "Tu nombre"],
    ["Nombre del niño/a", "text", "nino", "Nombre del niño o niña"],
    ["Edad", "number", "edad", "Años"],
    ["Teléfono", "tel", "telefono", "657 117 426"],
    ["Email", "email", "email", "tu@email.com"],
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const selectedTipo = formData.get("tipo") as string || perfil;
    const data = { ...Object.fromEntries(formData.entries()), tipo: selectedTipo };
    try {
      await fetch("https://n8n.kovia.io/webhook/15cbd43f-d161-4131-9ec3-334f9dfd4de1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSent(true);
    } catch {
      setSent(true);
    } finally {
      setLoading(false);
    }
  };

  if (sent) return (
    <div className="animate-fade-in rounded-3xl border-2 border-black bg-white p-10 flex flex-col items-center justify-center text-center min-h-[380px] shadow-[6px_6px_0_0_#000]">
      <div className="h-16 w-16 rounded-full bg-[#D8E600] border-2 border-black flex items-center justify-center text-black text-3xl font-bold mb-6 shadow-[2px_2px_0_0_#000]">✓</div>
      <div className="text-3xl text-black uppercase" style={condensed}>¡Recibido!</div>
      <p className="text-black/80 mt-3 font-semibold text-lg max-w-xs">Te contactamos en menos de 24h laborables.</p>
    </div>
  );

  return (
    <div className="space-y-4">
      {/* "¿Quién eres?" más visible */}
      <p
        className="inline-block bg-white text-[#0a0a0a] border-2 border-black shadow-[4px_4px_0_0_#000] rounded-full px-4 py-2 text-2xl md:text-3xl font-bold uppercase mb-4"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        👉 ¿QUIÉN ERES?
      </p>

      {/* Formulario — siempre visible */}
      <form onSubmit={handleSubmit} className="rounded-3xl border-2 border-[#D8E600] bg-white p-6 md:p-8 space-y-5 shadow-[4px_4px_0_0_#D8E600]">
        <label className="block">
          <span className="text-base font-black uppercase tracking-widest text-black mb-3 block">Soy...</span>
          <div className="grid grid-cols-2 gap-3">
            {[['centro', '🏫', 'Centro / AFA'], ['familia', '👨👩👧', 'Una familia']].map(([val, emoji, label]) => (
              <button key={val as string} type="button"
                onClick={() => setPerfil(val as string)}
                className={`rounded-2xl border-2 border-black py-4 px-3 text-sm font-bold uppercase transition-all flex flex-col items-center gap-2 ${perfil === val ? 'bg-[#D8E600] text-black shadow-[3px_3px_0_0_#000]' : 'bg-white/20 text-white hover:bg-black/80 hover:text-white bg-black/60'}`}
              >
                <span className="text-2xl">{emoji}</span>
                {label}
              </button>
            ))}
          </div>
          <input type="hidden" name="tipo" value={perfil} />
        </label>

        {perfil && (
          <div className="animate-fade-in space-y-5">
            {(perfil === 'centro' ? camposCentro : camposFamilia).map(([label, type, name, placeholder]) => (
              <label key={name} className="block">
                <span className="text-xs font-bold uppercase tracking-widest text-black font-black mb-2 block">{label}</span>
                <input type={type} name={name} placeholder={placeholder} required
                  className="w-full rounded-xl border-2 border-black/20 bg-gray-50 px-4 py-3 text-base text-black placeholder:text-black/60 focus:border-[#1D2F8C] outline-none transition-all" />
              </label>
            ))}
            <label className="block">
              <span className="text-xs font-bold uppercase tracking-widest text-black font-black mb-2 block">Mensaje</span>
              <textarea name="mensaje" rows={3} placeholder={perfil === 'centro' ? 'Cuéntanos qué necesita tu centro...' : 'Cuéntanos en qué actividad está interesado/a...'}
                className="w-full rounded-xl border-2 border-black/20 bg-gray-50 px-4 py-3 text-base text-black placeholder:text-black/60 focus:border-[#1D2F8C] outline-none transition-all resize-none" />
            </label>
            <button type="submit" disabled={loading}
              className="mt-2 w-full rounded-full bg-[#D8E600] text-black py-4 border-2 border-black transition-all hover:bg-[#c8d500] hover:scale-[1.02] uppercase shadow-[4px_4px_0_0_#000] font-black cursor-pointer disabled:opacity-50"
              style={btnStyle}>
              <span className="inline-flex items-center gap-2 justify-center">
                {loading ? "ENVIANDO..." : "SOLICITAR CITA"}{" "}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9" fill="white" stroke="currentColor" strokeWidth="2"/>
                  <path d="M7 10h6M11 7l3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default function ContactoSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  return (
    <section id="contact" ref={ref} className="relative bg-[#1D2F8C] text-white py-20 md:py-28 overflow-hidden border-b-2 border-black">
      {/* Simple gradient background without framer-motion */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 20% 30%, #3055C7 0%, transparent 55%), radial-gradient(circle at 80% 70%, #3055C7 0%, transparent 55%)",
          backgroundSize: "200% 200%",
          animation: "float 9s ease-in-out infinite",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6">
        {/* Title */}
        <div
          className={`mb-10 ${inView ? "animate-fade-in" : "opacity-0"}`}
        >
          <div className="relative inline-block pb-12 mb-6">
            <h2 className="font-black text-6xl md:text-8xl uppercase tracking-tighter text-white" style={condensedItalic}>
              <span className="mr-2 inline-block">¿</span>
              <span className="text-[#D8E600] tracking-wider" style={{ letterSpacing: '0.05em' }}>
                HABLAMOS
              </span>
              <span className="ml-2 inline-block">?</span>
            </h2>
            <div className="absolute left-0 right-0 h-2 bg-[#D8E600] bottom-0"></div>
          </div>
        </div>

        {/* Description + Form */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: description + mascot */}
          <div className="flex flex-col justify-between gap-12 md:min-h-[540px]">
            <p className="text-2xl text-white max-w-md leading-relaxed" style={{ fontWeight: 600 }}>
              Descubre cómo podemos transformar las actividades de tu centro educativo. Estamos <span className="bg-[#D8E600] text-black font-black px-2 py-0.5 rounded inline-block">a un mensaje de distancia.</span>
            </p>
            {/* Trust bullets */}
            <ul className="space-y-4 text-white/90">
              {[
                "Respuesta en menos de 24h",
                "Programa a medida sin coste",
                "Abiertos a cualquier tipo de actividad",
              ].map((text) => (
                <li key={text} className="text-lg font-semibold flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D8E600] text-black flex items-center justify-center font-black text-xs shadow-[1.5px_1.5px_0_0_#000] border border-black">
                    ✓
                  </span>
                  {text}
                </li>
              ))}
            </ul>
            {/* Mascot */}
            <div className="w-36 md:w-44 rounded-xl overflow-hidden">
              <img src="/diversplas-logo.webp" alt="Diversplas" className="w-full h-auto object-cover block" loading="lazy" decoding="async" width={176} height={138} />
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
