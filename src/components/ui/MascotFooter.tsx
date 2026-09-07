import React from "react";

export function MascotFooter() {
  return (
    <div className="relative w-full h-full min-h-[260px] max-w-[360px] select-none flex items-center justify-center">
      {/* ─── ANIMACIONES CSS NATIVAS (60 FPS) ─── */}
      <style>{`
        /* Balanceo pícaro 'haciéndose el inocente' */
        @keyframes mascotSneak {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          30% {
            transform: translateY(-4px) rotate(-1.5deg);
          }
          70% {
            transform: translateY(-2px) rotate(1.5deg);
          }
        }

        /* Pequeña fuga de spray traviesa que sale a escondidas por detrás del brazo */
        @keyframes sneakSprayMist {
          0% {
            opacity: 0;
            transform: scale(0.3) translate(0, 0);
          }
          35% {
            opacity: 0.95;
            transform: scale(1) translate(14px, -12px);
          }
          75% {
            opacity: 0.6;
            transform: scale(1.4) translate(24px, -22px);
          }
          100% {
            opacity: 0;
            transform: scale(1.7) translate(32px, -30px);
          }
        }

        /* Levitación suave de chips */
        @keyframes floatTag1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }

        @keyframes floatTag2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(2deg); }
        }

        @keyframes floatTag3 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }

        .mascot-character-sneak {
          animation: mascotSneak 4.5s ease-in-out infinite;
          transform-origin: bottom center;
        }

        .sneak-spray-puff {
          animation: sneakSprayMist 2.4s cubic-bezier(0.2, 0.8, 0.4, 1) infinite;
          transform-origin: 20px 80px;
        }

        .sneak-spray-puff-delayed {
          animation: sneakSprayMist 2.4s cubic-bezier(0.2, 0.8, 0.4, 1) infinite 0.9s;
          transform-origin: 20px 80px;
        }

        .anim-tag-1 {
          animation: floatTag1 3.2s ease-in-out infinite;
        }

        .anim-tag-2 {
          animation: floatTag2 3.8s ease-in-out infinite 0.5s;
        }

        .anim-tag-3 {
          animation: floatTag3 3.5s ease-in-out infinite 1s;
        }
      `}</style>

      {/* Contenedor relativo principal */}
      <div className="relative w-[340px] h-[250px] flex items-end justify-center">

        {/* ─── BOCADILLO DE DIÁLOGO PÍCARO (Arriba hacia el ojo visible) ─── */}
        <div className="absolute -top-3 left-14 z-20 anim-tag-1 pointer-events-none">
          <div className="relative bg-white text-black font-black text-xs px-3.5 py-1.5 rounded-2xl border-2 border-black shadow-[3px_3px_0_0_#000] whitespace-nowrap">
            ¿Yo? ¡Si soy un santo! 😇🎨
            {/* Pico del bocadillo apuntando hacia el ojo travieso */}
            <div className="absolute -bottom-1.5 left-8 w-2.5 h-2.5 bg-white border-r-2 border-b-2 border-black rotate-45" />
          </div>
        </div>

        {/* ─── CHIP B2B SUPERIOR DERECHA: +20 AÑOS ─── */}
        <div className="absolute top-1 -right-2 z-20 anim-tag-2 pointer-events-none">
          <span className="inline-flex items-center gap-1 bg-[#FF6B6B] text-white font-black text-[11px] px-2.5 py-1 rounded-xl border-2 border-black shadow-[3px_3px_0_0_#000] uppercase tracking-wide whitespace-nowrap">
            ★ +20 AÑOS
          </span>
        </div>

        {/* ─── CHIP B2B INFERIOR IZQUIERDA: COLEGIOS (Separado hacia afuera de la pierna) ─── */}
        <div className="absolute bottom-1 -left-5 z-20 anim-tag-3 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 bg-[#1D2F8C] text-white font-black text-[11px] px-3 py-1.5 rounded-xl border-2 border-black shadow-[3px_3px_0_0_#000] uppercase tracking-wide whitespace-nowrap">
            🏫 COLEGIOS
          </span>
        </div>

        {/* ─── CHIP B2B INFERIOR DERECHA: CASALES (Separado hacia afuera) ─── */}
        <div className="absolute bottom-1 -right-5 z-20 anim-tag-1 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 bg-[#35D0BA] text-black font-black text-[11px] px-3 py-1.5 rounded-xl border-2 border-black shadow-[3px_3px_0_0_#000] uppercase tracking-wide whitespace-nowrap">
            ⚽ CASALES
          </span>
        </div>

        {/* ─── EFECTO DE SPRAY TRAVIESO SALIENDO POR DETRÁS (A LA DERECHA) ─── */}
        {/* El bote asoma detrás de la espalda derecha */}
        <svg
          viewBox="0 0 120 120"
          className="absolute top-[80px] right-[40px] w-24 h-24 pointer-events-none z-20 overflow-visible"
        >
          <defs>
            <radialGradient id="sneakSprayGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#D8E600" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#35D0BA" stopOpacity="0.75" />
              <stop offset="85%" stopColor="#1D2F8C" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1D2F8C" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Ráfaga 1 de pintura escapando hacia la derecha */}
          <g className="sneak-spray-puff">
            <circle cx="45" cy="70" r="14" fill="url(#sneakSprayGrad)" />
            <circle cx="58" cy="62" r="3" fill="#D8E600" stroke="#000" strokeWidth="0.5" />
            <circle cx="52" cy="54" r="2.5" fill="#35D0BA" stroke="#000" strokeWidth="0.5" />
            <circle cx="64" cy="74" r="2.5" fill="#FFEA00" />
          </g>

          {/* Ráfaga 2 */}
          <g className="sneak-spray-puff-delayed">
            <circle cx="56" cy="60" r="18" fill="url(#sneakSprayGrad)" />
            <circle cx="70" cy="52" r="3.5" fill="#D8E600" stroke="#000" strokeWidth="0.5" />
            <circle cx="62" cy="44" r="2.5" fill="#1D2F8C" />
            <circle cx="76" cy="66" r="3" fill="#35D0BA" />
          </g>
        </svg>

        {/* ─── EL PERSONAJE DIVERSPLAS EN POSE PICARA ESCONDIENDO EL SPRAY ─── */}
        <div className="mascot-character-sneak relative z-10 flex flex-col items-center justify-end">
          <img
            src="/mascot-hiding.webp"
            alt="Mascota Diversplas Ojo Pícaro y Spray Escondido"
            width={165}
            height={215}
            className="w-[155px] sm:w-[165px] h-auto object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)] filter contrast-[1.03]"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Sombra de suelo neo-brutalista afianzada a las zapatillas */}
        <div className="absolute -bottom-1 w-36 h-3 bg-black/40 rounded-full blur-[1.5px] -z-0" />
      </div>
    </div>
  );
}

