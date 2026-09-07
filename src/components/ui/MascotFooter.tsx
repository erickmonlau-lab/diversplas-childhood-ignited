import React from "react";

export function MascotFooter() {
  return (
    <div className="relative w-full h-full min-h-[220px] max-w-[280px] select-none flex items-center justify-center">
      {/* ─── ANIMACIONES CSS NATIVAS (60 FPS) ─── */}
      <style>{`
        @keyframes floatMascot {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(1deg);
          }
        }

        @keyframes sprayMistBurst {
          0% {
            opacity: 0;
            transform: scale(0.4) translate(0, 0);
          }
          35% {
            opacity: 0.85;
            transform: scale(1.1) translate(10px, -15px);
          }
          100% {
            opacity: 0;
            transform: scale(1.6) translate(22px, -30px);
          }
        }

        @keyframes floatTag1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }

        @keyframes floatTag2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
        }

        @keyframes floatTag3 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }

        .mascot-character-float {
          animation: floatMascot 4.5s ease-in-out infinite;
        }

        .spray-mist-particle-1 {
          transform-origin: 100px 70px;
          animation: sprayMistBurst 2s ease-out infinite;
        }

        .spray-mist-particle-2 {
          transform-origin: 105px 65px;
          animation: sprayMistBurst 2s ease-out infinite 0.7s;
        }

        .anim-tag-1 {
          animation: floatTag1 3s ease-in-out infinite;
        }

        .anim-tag-2 {
          animation: floatTag2 3.4s ease-in-out infinite 0.4s;
        }

        .anim-tag-3 {
          animation: floatTag3 2.8s ease-in-out infinite 0.8s;
        }
      `}</style>

      {/* Contenedor relativo principal */}
      <div className="relative w-full h-[240px] flex items-center justify-center">

        {/* ─── BOCADILLO DE DIÁLOGO "¡Hola Colegios! 👋" ─── */}
        <div className="absolute -top-3 left-6 z-20 anim-tag-1 pointer-events-none">
          <div className="relative bg-white text-black font-black text-xs sm:text-sm px-3.5 py-1.5 rounded-2xl border-2 border-black shadow-[3px_3px_0_0_#000] whitespace-nowrap">
            ¡Hola Colegios! 👋
            {/* Pico del bocadillo apuntando al muñeco */}
            <div className="absolute -bottom-2 right-6 w-3 h-3 bg-white border-r-2 border-b-2 border-black rotate-45" />
          </div>
        </div>

        {/* ─── CHIP B2B SUPERIOR DERECHA: +20 AÑOS ─── */}
        <div className="absolute top-1 -right-2 z-20 anim-tag-2 pointer-events-none">
          <span className="inline-flex items-center gap-1 bg-[#FF6B6B] text-white font-black text-[11px] px-2.5 py-1 rounded-xl border-2 border-black shadow-[3px_3px_0_0_#000] uppercase tracking-wide">
            ★ +20 AÑOS
          </span>
        </div>

        {/* ─── CHIP B2B IZQUIERDA: COLEGIOS ─── */}
        <div className="absolute top-1/2 -left-3 -translate-y-1/2 z-20 anim-tag-3 pointer-events-none">
          <span className="inline-flex items-center gap-1 bg-[#1D2F8C] text-white font-black text-[11px] px-2.5 py-1 rounded-xl border-2 border-black shadow-[3px_3px_0_0_#000] uppercase tracking-wide">
            🏫 COLEGIOS
          </span>
        </div>

        {/* ─── CHIP B2B INFERIOR DERECHA: CASALES ─── */}
        <div className="absolute bottom-5 -right-3 z-20 anim-tag-1 pointer-events-none">
          <span className="inline-flex items-center gap-1 bg-[#35D0BA] text-black font-black text-[11px] px-2.5 py-1 rounded-xl border-2 border-black shadow-[3px_3px_0_0_#000] uppercase tracking-wide">
            ⚽ CASALES
          </span>
        </div>

        {/* ─── EFECTOS DE PARTÍCULAS DE SPRAY (SVG NATIVO SUPERPUESTO) ─── */}
        <svg
          viewBox="0 0 160 160"
          className="absolute top-4 right-4 w-28 h-28 pointer-events-none z-20 overflow-visible"
        >
          <defs>
            <radialGradient id="sprayMistGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#D8E600" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#35D0BA" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#1D2F8C" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Ráfaga 1 */}
          <g className="spray-mist-particle-1">
            <circle cx="95" cy="70" r="14" fill="url(#sprayMistGrad)" />
            <circle cx="106" cy="62" r="3" fill="#D8E600" />
            <circle cx="100" cy="56" r="2" fill="#FFEA00" />
            <circle cx="112" cy="74" r="2.5" fill="#35D0BA" />
          </g>

          {/* Ráfaga 2 */}
          <g className="spray-mist-particle-2">
            <circle cx="110" cy="58" r="18" fill="url(#sprayMistGrad)" />
            <circle cx="122" cy="50" r="3.5" fill="#D8E600" />
            <circle cx="116" cy="42" r="2.5" fill="#1D2F8C" />
            <circle cx="128" cy="62" r="3" fill="#35D0BA" />
          </g>
        </svg>

        {/* ─── EL MUÑECO OFICIAL ORIGINAL DIVERSPLAS EN ALTA RESOLUCIÓN ─── */}
        <div className="mascot-character-float relative z-10 flex items-center justify-center">
          <img
            src="/mascot-boy.webp"
            alt="Mascota Diversplas Oficial"
            width={160}
            height={220}
            className="w-36 sm:w-40 h-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.3)] filter contrast-[1.05]"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Sombra de suelo neo-brutalista */}
        <div className="absolute bottom-2 w-32 h-3.5 bg-black/35 rounded-full blur-[2px] -z-0" />
      </div>
    </div>
  );
}

