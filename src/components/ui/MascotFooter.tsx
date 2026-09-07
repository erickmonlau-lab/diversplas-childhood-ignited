import React from "react";

export function MascotFooter() {
  return (
    <div className="relative w-full h-full min-h-[260px] max-w-[360px] select-none flex items-center justify-center">
      {/* ─── ANIMACIONES CSS NATIVAS (60 FPS) ─── */}
      <style>{`
        /* Movimiento sutil de balanceo del personaje */
        @keyframes mascotBreathing {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-4px) rotate(1deg);
          }
        }

        /* Chorro y nube de spray saliendo disparado con fuerza desde la boquilla */
        @keyframes sprayJet {
          0% {
            opacity: 0;
            transform: scale(0.2) translate(0, 0);
          }
          20% {
            opacity: 1;
            transform: scale(0.8) translate(-10px, -12px);
          }
          65% {
            opacity: 0.85;
            transform: scale(1.3) translate(-22px, -24px);
          }
          100% {
            opacity: 0;
            transform: scale(1.7) translate(-32px, -34px);
          }
        }

        /* Partículas secundarias de pintura dispersas */
        @keyframes spraySparkles {
          0% {
            opacity: 0;
            transform: scale(0.3) translate(0, 0);
          }
          30% {
            opacity: 1;
            transform: scale(1) translate(-16px, -18px);
          }
          100% {
            opacity: 0;
            transform: scale(1.5) translate(-36px, -38px);
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

        .mascot-character-float {
          animation: mascotBreathing 4s ease-in-out infinite;
          transform-origin: bottom center;
        }

        .spray-jet-main {
          animation: sprayJet 1.8s cubic-bezier(0.15, 0.85, 0.35, 1) infinite;
          transform-origin: 75px 85px;
        }

        .spray-sparkles {
          animation: spraySparkles 1.8s ease-out infinite 0.3s;
          transform-origin: 75px 85px;
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

        {/* ─── BOCADILLO DE DIÁLOGO "¡Hola Colegios! 👋" ─── */}
        <div className="absolute -top-3 right-2 z-20 anim-tag-1 pointer-events-none">
          <div className="relative bg-white text-black font-black text-xs px-3.5 py-1.5 rounded-2xl border-2 border-black shadow-[3px_3px_0_0_#000] whitespace-nowrap">
            ¡Hola Colegios! 👋
            {/* Pico del bocadillo apuntando hacia la mano */}
            <div className="absolute -bottom-1.5 left-5 w-2.5 h-2.5 bg-white border-r-2 border-b-2 border-black rotate-45" />
          </div>
        </div>

        {/* ─── CHIP B2B SUPERIOR IZQUIERDA: +20 AÑOS ─── */}
        <div className="absolute top-1 -left-2 z-20 anim-tag-2 pointer-events-none">
          <span className="inline-flex items-center gap-1 bg-[#FF6B6B] text-black font-black text-[11px] px-2.5 py-1 rounded-xl border-2 border-black shadow-[3px_3px_0_0_#000] uppercase tracking-wide whitespace-nowrap">
            ★ +20 AÑOS
          </span>
        </div>

        {/* ─── CHIP B2B INFERIOR IZQUIERDA: COLEGIOS (Bien separado hacia afuera) ─── */}
        <div className="absolute bottom-1 -left-6 z-20 anim-tag-3 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 bg-[#1D2F8C] text-white font-black text-[11px] px-3 py-1.5 rounded-xl border-2 border-black shadow-[3px_3px_0_0_#000] uppercase tracking-wide whitespace-nowrap">
            🏫 COLEGIOS
          </span>
        </div>

        {/* ─── CHIP B2B INFERIOR DERECHA: CASALES (Bien separado hacia afuera) ─── */}
        <div className="absolute bottom-1 -right-6 z-20 anim-tag-1 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 bg-[#35D0BA] text-black font-black text-[11px] px-3 py-1.5 rounded-xl border-2 border-black shadow-[3px_3px_0_0_#000] uppercase tracking-wide whitespace-nowrap">
            ⚽ CASALES
          </span>
        </div>

        {/* ─── EFECTO DE SPRAY EXACTO EN LA BOQUILLA DEL BOTE (MUY VISIBLE) ─── */}
        <svg
          viewBox="0 0 120 120"
          className="absolute top-[82px] left-[42px] w-24 h-24 pointer-events-none z-20 overflow-visible"
        >
          <defs>
            {/* Bruma densa y luminosa de colores Diversplas */}
            <radialGradient id="denseSprayMist" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#D8E600" stopOpacity="0.95" />
              <stop offset="45%" stopColor="#35D0BA" stopOpacity="0.75" />
              <stop offset="85%" stopColor="#1D2F8C" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1D2F8C" stopOpacity="0" />
            </radialGradient>

            {/* Chorro concentrado cónico */}
            <linearGradient id="jetConeGrad" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="30%" stopColor="#D8E600" stopOpacity="0.8" />
              <stop offset="75%" stopColor="#35D0BA" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#35D0BA" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Chorro cónico saliendo directo del cabezal */}
          <g className="spray-jet-main">
            {/* Cono de salida */}
            <polygon points="76,84 46,54 58,42" fill="url(#jetConeGrad)" />
            {/* Gran nube de pintura difuminada */}
            <circle cx="50" cy="50" r="16" fill="url(#denseSprayMist)" />
            <circle cx="38" cy="40" r="12" fill="url(#denseSprayMist)" />
          </g>

          {/* Gotas y partículas de pintura volando con bordes nítidos */}
          <g className="spray-sparkles">
            <circle cx="48" cy="46" r="3" fill="#D8E600" stroke="#000" strokeWidth="0.5" />
            <circle cx="36" cy="38" r="3.5" fill="#35D0BA" stroke="#000" strokeWidth="0.5" />
            <circle cx="28" cy="30" r="2.5" fill="#FFEA00" stroke="#000" strokeWidth="0.5" />
            <circle cx="42" cy="30" r="2" fill="#1D2F8C" />
            <circle cx="24" cy="44" r="2" fill="#35D0BA" />
          </g>
        </svg>

        {/* ─── EL PERSONAJE DIVERSPLAS EN POSE DE SALUDO Y BOTE ─── */}
        <div className="mascot-character-float relative z-10 flex flex-col items-center justify-end">
          <img
            src="/mascot-waving.webp"
            alt="Mascota Diversplas Saludando"
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

