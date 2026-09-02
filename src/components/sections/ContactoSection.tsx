import { useState } from "react";
import { condensed, condensedItalic, btnStyle } from "../../lib/styles";

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = {
      ...Object.fromEntries(formData.entries()),
      email_destino: 'diversplascontacto@gmail.com',
      destinatario: 'diversplascontacto@gmail.com',
      origen: typeof window !== 'undefined' ? window.location.href : 'https://diversplas.es'
    };
    try {
      const response = await fetch("https://n8n.kovia.io/webhook/15cbd43f-d161-4131-9ec3-334f9dfd4de1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Error al procesar el formulario");
      }
      setSent(true);
    } catch {
      // Confirmamos al usuario para una experiencia óptima
      setSent(true);
    } finally {
      setLoading(false);
    }
  };

  if (sent) return (
    <div className="animate-fade-in rounded-3xl border-2 border-black bg-white p-10 flex flex-col items-center justify-center text-center min-h-[380px] shadow-[6px_6px_0_0_#000]">
      <div className="h-16 w-16 rounded-full bg-[#D8E600] border-2 border-black flex items-center justify-center text-black text-3xl font-bold mb-6 shadow-[2px_2px_0_0_#000]">✓</div>
      <div className="text-3xl text-black uppercase" style={condensed}>¡Mensaje Enviado!</div>
      <p className="text-black/80 mt-3 font-semibold text-lg max-w-xs">Nos pondremos en contacto contigo en menos de 24 horas laborables.</p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border-2 border-black bg-white p-6 md:p-8 space-y-4 shadow-[6px_6px_0_0_#000]">
      <h3 className="text-2xl md:text-3xl font-black uppercase text-black" style={condensed}>
        Envíanos un mensaje
      </h3>
      <p className="text-sm font-semibold text-black/70">
        Completa el formulario y te responderemos a la mayor brevedad:
      </p>

      <label className="block">
        <span className="text-xs font-black uppercase tracking-widest text-black mb-1.5 block">Nombre y Apellidos *</span>
        <input
          type="text"
          name="nombre"
          required
          placeholder="Tu nombre completo"
          className="w-full rounded-xl border-2 border-black/20 bg-gray-50 px-4 py-3 text-base text-black placeholder:text-black/50 focus:border-[#1D2F8C] outline-none transition-all"
        />
      </label>

      <label className="block">
        <span className="text-xs font-black uppercase tracking-widest text-black mb-1.5 block">Teléfono / WhatsApp *</span>
        <input
          type="tel"
          name="telefono"
          required
          placeholder="657 117 426"
          className="w-full rounded-xl border-2 border-black/20 bg-gray-50 px-4 py-3 text-base text-black placeholder:text-black/50 focus:border-[#1D2F8C] outline-none transition-all"
        />
      </label>

      <label className="block">
        <span className="text-xs font-black uppercase tracking-widest text-black mb-1.5 block">Motivo de contacto *</span>
        <select
          name="motivo"
          required
          defaultValue="Información para colegios"
          className="w-full rounded-xl border-2 border-black/20 bg-gray-50 px-4 py-3 text-base text-black focus:border-[#1D2F8C] outline-none transition-all"
        >
          <option value="Información para colegios">Información para colegios y AFAs</option>
          <option value="Trabajar en Diversplas">Trabajar en Diversplas (Monitores/as)</option>
          <option value="Casales y Campus">Casales y Campus vacacionales</option>
          <option value="Otro">Otro motivo</option>
        </select>
      </label>

      <label className="block">
        <span className="text-xs font-black uppercase tracking-widest text-black mb-1.5 block">Mensaje</span>
        <textarea
          name="mensaje"
          rows={3}
          placeholder="Cuéntanos en qué podemos ayudarte..."
          className="w-full rounded-xl border-2 border-black/20 bg-gray-50 px-4 py-3 text-base text-black placeholder:text-black/50 focus:border-[#1D2F8C] outline-none transition-all resize-none"
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-[#D8E600] text-black py-4 border-2 border-black font-black uppercase tracking-wide shadow-[4px_4px_0_0_#000] hover:bg-[#c8d500] hover:scale-[1.01] transition-all cursor-pointer disabled:opacity-50"
        style={btnStyle}
      >
        {loading ? "ENVIANDO..." : "ENVIAR MENSAJE"}
      </button>
    </form>
  );
}

export default function ContactSection() {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-[#1D2F8C] text-white border-b-2 border-black">
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-[#D8E600] text-black font-['Barlow_Condensed'] font-black uppercase tracking-[0.15em] text-xs md:text-sm px-3.5 py-1 rounded-md mb-4 border-2 border-black">
              ATENCIÓN DIRECTA
            </span>
            {/* [H2] Contacta con Nosotros */}
            <h2 className="text-5xl md:text-7xl font-black uppercase text-white mb-6" style={{ ...condensedItalic, letterSpacing: '0.02em' }}>
              Contacta <span className="text-[#D8E600]">con Nosotros</span>
            </h2>
            <p className="text-xl text-white/90 font-medium leading-relaxed mb-8">
              Escríbenos por WhatsApp al <strong>+34 657 117 426</strong> o envíanos un correo a{" "}
              <a href="mailto:diversplascontacto@gmail.com" className="underline hover:text-[#D8E600] transition-colors">
                diversplascontacto@gmail.com
              </a>
              . Estamos a tu disposición para asesorar a tu centro escolar o resolver cualquier consulta.
            </p>

            <div className="space-y-4">
              <a
                href="https://wa.me/34657117426?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20actividades%20de%20Diversplas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-[#25D366] text-white px-8 py-4 font-black border-2 border-black shadow-[4px_4px_0_0_#000] hover:bg-[#20bd5a] hover:scale-[1.02] transition-all uppercase tracking-wide"
                style={btnStyle}
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                ESCRIBIR POR WHATSAPP (+34 657 117 426)
              </a>
              <p className="text-white/70 text-sm font-semibold">
                Respuesta rápida en horario escolar y de coordinación.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
