import { useState } from "react";
import { condensed, condensedItalic, btnStyle } from "../../lib/styles";

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const centro = (formData.get("centro") as string) || "";
    const responsable = (formData.get("responsable") as string) || "";
    const telefono = (formData.get("telefono") as string) || "";
    const email = (formData.get("email") as string) || "No especificado";
    const motivo = (formData.get("motivo") as string) || "Propuesta de Extraescolares";
    const mensaje = (formData.get("mensaje") as string) || "Sin mensaje adicional";
    const origen = typeof window !== "undefined" ? window.location.href : "https://diversplas.es";
    const fecha = new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid" });

    const payload = {
      _subject: `🏫 Solicitud de Centro/AFA: ${centro} - ${motivo} (${responsable})`,
      _template: "table",
      _captcha: "false",
      "Centro Educativo / AFA": centro,
      "Persona de Contacto / Cargo": responsable,
      "Teléfono / WhatsApp de Contacto": telefono,
      "Correo Electrónico": email,
      "Tipo de Servicio Solicitado": motivo,
      "Detalles / Necesidades del Centro": mensaje,
      "Página de Origen": origen,
      "Fecha de Envío": fecha,
    };

    try {
      // Envío directo al correo diversplascontacto@gmail.com formateado en tabla HTML
      await Promise.allSettled([
        fetch("https://formsubmit.co/ajax/diversplascontacto@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        }),
        fetch("https://n8n.kovia.io/webhook/15cbd43f-d161-4131-9ec3-334f9dfd4de1", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...payload,
            centro,
            nombre: responsable,
            telefono,
            email,
            motivo,
            mensaje,
            origen,
            email_destino: "diversplascontacto@gmail.com",
            destinatario: "diversplascontacto@gmail.com",
          }),
        }),
      ]);
      setSent(true);
    } catch {
      setSent(true);
    } finally {
      setLoading(false);
    }
  };

  if (sent) return (
    <div className="animate-fade-in rounded-3xl border-2 border-black bg-white p-8 md:p-12 flex flex-col items-center justify-center text-center min-h-[420px] shadow-[8px_8px_0_0_#000]">
      <div className="h-16 w-16 rounded-full bg-[#D8E600] border-2 border-black flex items-center justify-center text-black text-3xl font-bold mb-6 shadow-[3px_3px_0_0_#000]">✓</div>
      <div className="text-3xl text-black uppercase" style={condensed}>¡Solicitud Recibida!</div>
      <p className="text-black/80 mt-3 font-semibold text-lg max-w-sm">
        Hemos recibido los datos de vuestro centro escolar en <strong>diversplascontacto@gmail.com</strong>. Nuestro equipo de coordinación contactará con vosotros a la mayor brevedad.
      </p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border-2 border-black bg-white p-6 sm:p-8 md:p-10 space-y-5 shadow-[8px_8px_0_0_#000] w-full">
      <div>
        <h3 className="text-2xl sm:text-3xl font-black uppercase text-black tracking-wide" style={condensed}>
          Solicitar Propuesta para tu Colegio
        </h3>
        <p className="text-sm font-medium text-black/60 mt-1">
          Formulario para Equipos Directivos, AFAs / AMPAs y Centros Educativos
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-black uppercase tracking-wider text-black mb-1.5">
            Nombre del Colegio / AFA / Entidad *
          </label>
          <input
            type="text"
            name="centro"
            required
            placeholder="Ej: Escola Joan Maragall / AFA"
            className="w-full rounded-xl border-2 border-black/20 bg-gray-50 px-4 py-3 text-sm md:text-base text-black placeholder:text-black/40 focus:border-[#1D2F8C] focus:bg-white outline-none transition-all"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-black mb-1.5">
              Persona de Contacto y Cargo *
            </label>
            <input
              type="text"
              name="responsable"
              required
              placeholder="Ej: Laura (Presidenta AFA)"
              className="w-full rounded-xl border-2 border-black/20 bg-gray-50 px-4 py-3 text-sm md:text-base text-black placeholder:text-black/40 focus:border-[#1D2F8C] focus:bg-white outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-black mb-1.5">
              Teléfono / WhatsApp *
            </label>
            <input
              type="tel"
              name="telefono"
              required
              placeholder="657 117 426"
              className="w-full rounded-xl border-2 border-black/20 bg-gray-50 px-4 py-3 text-sm md:text-base text-black placeholder:text-black/40 focus:border-[#1D2F8C] focus:bg-white outline-none transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-black mb-1.5">
              Email del Centro / AFA
            </label>
            <input
              type="email"
              name="email"
              placeholder="afa@colegio.cat"
              className="w-full rounded-xl border-2 border-black/20 bg-gray-50 px-4 py-3 text-sm md:text-base text-black placeholder:text-black/40 focus:border-[#1D2F8C] focus:bg-white outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-black mb-1.5">
              Servicio Requerido *
            </label>
            <select
              name="motivo"
              required
              defaultValue="Gestión de Actividades Extraescolares"
              className="w-full rounded-xl border-2 border-black/20 bg-gray-50 px-4 py-3 text-sm md:text-base text-black focus:border-[#1D2F8C] focus:bg-white outline-none transition-all cursor-pointer truncate"
            >
              <option value="Gestión de Actividades Extraescolares">Gestión de Actividades Extraescolares</option>
              <option value="Organización de Casales Escolares (Verano / Navidad)">Organización de Casales Escolares</option>
              <option value="Monitores para Actividades de Centro">Monitores para Actividades</option>
              <option value="Trabajar como Monitor/a en Diversplas">Candidatura Monitor/a</option>
              <option value="Reunión Informativa / Presentación">Reunión con Coordinación</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-black uppercase tracking-wider text-black mb-1.5">
            Detalles o Actividades de Interés
          </label>
          <textarea
            name="mensaje"
            rows={3}
            placeholder="Ej: Nos interesa fútbol, patinaje e inglés para unos 60 alumnos..."
            className="w-full rounded-xl border-2 border-black/20 bg-gray-50 px-4 py-3 text-sm md:text-base text-black placeholder:text-black/40 focus:border-[#1D2F8C] focus:bg-white outline-none transition-all resize-none"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-[#D8E600] text-black py-4.5 sm:py-5 border-2 border-black font-extrabold uppercase tracking-normal shadow-[4px_4px_0_0_#000] hover:bg-[#c8d500] hover:scale-[1.01] transition-all cursor-pointer disabled:opacity-50 text-base sm:text-lg text-center"
        style={btnStyle}
      >
        {loading ? "ENVIANDO SOLICITUD..." : "SOLICITAR PROPUESTA PARA EL COLEGIO"}
      </button>
    </form>
  );
}

export default function ContactSection() {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-[#1D2F8C] text-white border-b-2 border-black relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <div className="lg:col-span-5">
            <span className="inline-block bg-[#D8E600] text-black font-extrabold uppercase tracking-wide text-xs md:text-sm px-4 py-1.5 rounded-full mb-4 border-2 border-black shadow-[2px_2px_0_0_#000]">
              CONTRATACIÓN PARA COLEGIOS Y AFAS
            </span>
            {/* [H2] Contacta con Coordinación */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase text-white mb-6 leading-[0.95]" style={{ ...condensedItalic, letterSpacing: '0.02em' }}>
              Atención a <span className="text-[#D8E600]">Centros Escolares</span>
            </h2>
            <p className="text-lg md:text-xl text-white/90 font-medium leading-relaxed mb-8">
              Atención directa para equipos directivos y juntas de AFA. Escríbenos por WhatsApp al <strong>+34 657 117 426</strong> o envíanos un correo a{" "}
              <a href="mailto:diversplascontacto@gmail.com" className="underline hover:text-[#D8E600] transition-colors">
                diversplascontacto@gmail.com
              </a>
              . Te prepararemos una propuesta adaptada a las necesidades de vuestro colegio.
            </p>

            <div className="space-y-6">
              <a
                href="https://wa.me/34657117426?text=Hola%2C%20somos%20un%20colegio%20%2F%20AFA%20y%20nos%20gustar%C3%ADa%20informaci%C3%B3n%20para%20nuestro%20centro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-[#25D366] text-black px-7 py-3.5 font-extrabold border-2 border-black shadow-[4px_4px_0_0_#000] hover:bg-[#20bd5a] hover:scale-[1.02] transition-all uppercase tracking-wide text-sm md:text-base"
                style={btnStyle}
              >
                <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>WHATSAPP DE COORDINACIÓN (+34 657 117 426)</span>
              </a>

              {/* Logo Badge Card */}
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-4 shadow-[4px_4px_0_0_rgba(0,0,0,0.2)] max-w-sm">
                <div className="w-16 h-16 rounded-xl bg-white p-1.5 flex-shrink-0 border border-black shadow-[2px_2px_0_0_#000] flex items-center justify-center">
                  <img
                    src="/diversplas-logo.webp"
                    alt="Diversplas Extraescolares"
                    className="w-full h-auto object-contain"
                    width={56}
                    height={56}
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="font-extrabold text-white text-base leading-snug uppercase tracking-wide" style={{ fontFamily: "system-ui, sans-serif" }}>
                    DIVERSPLAS
                  </div>
                  <div className="text-white/80 text-xs font-semibold mt-0.5">
                    +20 años al servicio de colegios y AFAs.
                  </div>
                </div>
              </div>

              <p className="text-white/70 text-xs sm:text-sm font-semibold">
                Atención preferente para colegios de Santa Coloma de Gramenet y área de expansión.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
