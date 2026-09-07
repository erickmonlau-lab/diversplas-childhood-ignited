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
      <div className="border-b-2 border-black/10 pb-4">
        <div className="inline-block bg-[#1D2F8C] text-white text-[11px] font-black uppercase px-2.5 py-1 rounded border border-black tracking-wider mb-2">
          CONTRATACIÓN DIRECTA
        </div>
        <h3 className="text-2xl sm:text-3xl font-black uppercase text-black tracking-wide leading-none" style={condensed}>
          Contratar Diversplas para tu Centro
        </h3>
        <p className="text-xs sm:text-sm font-semibold text-black/70 mt-2">
          Pide presupuesto sin compromiso para tu <strong>Colegio, AFA / AMPA o Centro Educativo</strong>.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-black uppercase tracking-wider text-black mb-1.5">
            Nombre del Colegio / AFA / Centro Escolar *
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
              placeholder="Ej: Laura (Presidenta AFA / Dirección)"
              className="w-full rounded-xl border-2 border-black/20 bg-gray-50 px-4 py-3 text-sm md:text-base text-black placeholder:text-black/40 focus:border-[#1D2F8C] focus:bg-white outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-black mb-1.5">
              Teléfono o WhatsApp de Contacto *
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
              Email del Colegio o AFA
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
              ¿Qué servicio queréis contratar? *
            </label>
            <select
              name="motivo"
              required
              defaultValue="Contratar Gestión Integral de Extraescolares"
              className="w-full rounded-xl border-2 border-black/20 bg-gray-50 px-4 py-3 text-sm md:text-base text-black focus:border-[#1D2F8C] focus:bg-white outline-none transition-all cursor-pointer truncate font-medium"
            >
              <option value="Contratar Gestión Integral de Extraescolares">Contratar Extraescolares para el Colegio</option>
              <option value="Contratar Organización de Casales Escolares">Contratar Casales (Verano / Navidad)</option>
              <option value="Contratar Monitores para Actividades">Contratar Monitores / Dinamizadores</option>
              <option value="Solicitar Reunión Presencial / Propuesta">Solicitar Reunión con Coordinación</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-black uppercase tracking-wider text-black mb-1.5">
            ¿Qué actividades os interesan o qué necesita vuestro centro?
          </label>
          <textarea
            name="mensaje"
            rows={3}
            placeholder="Ej: Necesitamos fútbol, patinaje e inglés los martes y jueves para unos 50 alumnos..."
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
        {loading ? "ENVIANDO SOLICITUD..." : "SOLICITAR PRESUPUESTO / REUNIÓN"}
      </button>
    </form>
  );
}

export default function ContactSection() {
  return (
    <section id="contacto" className="py-14 md:py-20 bg-[#1D2F8C] text-white border-b-2 border-black relative overflow-hidden">
      {/* Background soft glow */}
      <div className="pointer-events-none absolute top-0 -left-20 h-96 w-96 rounded-full bg-[#3055C7] blur-3xl opacity-40" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#D8E600] blur-3xl opacity-10" />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Columna Izquierda: Información + Botón WhatsApp + Muñeco */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <span className="inline-block bg-[#D8E600] text-black font-extrabold uppercase tracking-wide text-xs md:text-sm px-4 py-1.5 rounded-full mb-3 border-2 border-black shadow-[2px_2px_0_0_#000]">
                CONTRATACIÓN PARA COLEGIOS Y AFAS
              </span>

              {/* [H2] Contacta con Coordinación */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white mb-4 leading-[0.95]" style={{ ...condensedItalic, letterSpacing: '0.02em' }}>
                Atención a <span className="text-[#D8E600]">Centros Escolares</span>
              </h2>

              <p className="text-base sm:text-lg text-white/90 font-medium leading-relaxed mb-6">
                Atención directa para equipos directivos y juntas de AFA. Escríbenos por WhatsApp al <strong>+34 657 117 426</strong> o envíanos un correo a{" "}
                <a href="mailto:diversplascontacto@gmail.com" className="underline hover:text-[#D8E600] transition-colors">
                  diversplascontacto@gmail.com
                </a>
                .
              </p>

              <div className="mb-6">
                <a
                  href="https://wa.me/34657117426?text=Hola%2C%20somos%20un%20colegio%20%2F%20AFA%20y%20nos%20gustar%C3%ADa%20informaci%C3%B3n%20para%20nuestro%20centro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] text-black px-6 py-3 font-extrabold border-2 border-black shadow-[3px_3px_0_0_#000] hover:bg-[#20bd5a] hover:scale-[1.02] transition-all uppercase text-sm md:text-base text-center w-full sm:w-auto"
                  style={btnStyle}
                >
                  <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span className="whitespace-nowrap">WHATSAPP: 657 117 426</span>
                </a>
              </div>
            </div>

            {/* Muñeco Mascota y tarjeta solida neo-brutalista */}
            <div className="flex items-center gap-4 pt-1">
              <img
                src="/mascot-boy.webp"
                alt="Mascota Diversplas"
                className="w-24 sm:w-32 h-auto drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)] animate-[float_4s_ease-in-out_infinite] flex-shrink-0"
                width={128}
                height={190}
                loading="lazy"
              />
              <div className="bg-white text-black border-2 border-black rounded-2xl p-3.5 shadow-[4px_4px_0_0_#000]">
                <div className="inline-block bg-[#D8E600] text-black font-black uppercase text-[11px] px-2 py-0.5 rounded border border-black mb-1.5">
                  SEDE & ZONAS
                </div>
                <div className="text-xs font-bold text-black leading-snug">
                  Santa Coloma, El Fondo, Badalona, Barcelona y alrededores.
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario B2B estilizado */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}
