import React from "react";

export function MascotFooter() {
  return (
    <div className="relative w-full h-full min-h-[250px] max-w-[340px] select-none flex items-center justify-center p-2">
      {/* ─── ANIMACIONES CSS NATIVAS (60 FPS) ─── */}
      <style>{`
        /* Movimiento de respiración / balanceo dinámico */
        @keyframes mascotBreathing {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-5px) rotate(1.5deg);
          }
        }

        /* Mano saludando de verdad */
        @keyframes handWave {
          0%, 100% {
            transform: rotate(0deg);
          }
          20% {
            transform: rotate(12deg);
          }
          40% {
            transform: rotate(-8deg);
          }
          60% {
            transform: rotate(10deg);
          }
          80% {
            transform: rotate(-4deg);
          }
        }

        /* Pulsación del spray en la mano izquierda del bote */
        @keyframes sprayMistLeft {
          0% {
            opacity: 0;
            transform: scale(0.3) translate(0, 0);
          }
          30% {
            opacity: 0.9;
            transform: scale(1) translate(-12px, -14px);
          }
          70% {
            opacity: 0.6;
            transform: scale(1.4) translate(-22px, -26px);
          }
          100% {
            opacity: 0;
            transform: scale(1.8) translate(-30px, -36px);
          }
        }

        /* Levitación sutil de chips sin invadir el dibujo */
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

        .spray-mist-particle-1 {
          transform-origin: 30px 40px;
          animation: sprayMistLeft 2.2s ease-out infinite;
        }

        .spray-mist-particle-2 {
          transform-origin: 28px 38px;
          animation: sprayMistLeft 2.2s ease-out infinite 0.7s;
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

      {/* Contenedor relativo principal con suficiente aire para que nada se solape */}
      <div className="relative w-[310px] h-[250px] flex items-end justify-center">

        {/* ─── BOCADILLO DE DIÁLOGO "¡Hola Colegios! 👋" (Arriba a la derecha hacia la mano que saluda) ─── */}
        <div className="absolute -top-3 right-0 z-20 anim-tag-1 pointer-events-none">
          <div className="relative bg-white text-black font-black text-xs px-3.5 py-1.5 rounded-2xl border-2 border-black shadow-[3px_3px_0_0_#000] whitespace-nowrap">
            ¡Hola Colegios! 👋
            {/* Pico del bocadillo saliendo hacia la mano saludando */}
            <div className="absolute -bottom-1.5 left-6 w-2.5 h-2.5 bg-white border-r-2 border-b-2 border-black rotate-45" />
          </div>
        </div>

        {/* ─── CHIP B2B SUPERIOR IZQUIERDA: +20 AÑOS ─── */}
        <div className="absolute top-2 -left-2 z-20 anim-tag-2 pointer-events-none">
          <span className="inline-flex items-center gap-1 bg-[#FF6B6B] text-white font-black text-[11px] px-2.5 py-1 rounded-xl border-2 border-black shadow-[3px_3px_0_0_#000] uppercase tracking-wide whitespace-nowrap">
            ★ +20 AÑOS
          </span>
        </div>

        {/* ─── CHIP B2B INFERIOR IZQUIERDA: COLEGIOS ─── */}
        <div className="absolute bottom-6 -left-3 z-20 anim-tag-3 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 bg-[#1D2F8C] text-white font-black text-[11px] px-2.5 py-1 rounded-xl border-2 border-black shadow-[3px_3px_0_0_#000] uppercase tracking-wide whitespace-nowrap">
            🏫 COLEGIOS
          </span>
        </div>

        {/* ─── CHIP B2B INFERIOR DERECHA: CASALES ─── */}
        <div className="absolute bottom-4 -right-3 z-20 anim-tag-1 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 bg-[#35D0BA] text-black font-black text-[11px] px-2.5 py-1 rounded-xl border-2 border-black shadow-[3px_3px_0_0_#000] uppercase tracking-wide whitespace-nowrap">
            ⚽ CASALES
          </span>
        </div>

        {/* ─── EFECTOS DE PARTÍCULAS DE SPRAY EN LA MANO DEL BOTE (IZQUIERDA) ─── */}
        <svg
          viewBox="0 0 100 100"
          className="absolute top-[80px] left-[15px] w-20 h-20 pointer-events-none z-20 overflow-visible"
        >
          <defs>
            <radialGradient id="sprayMistGradLeft" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#D8E600" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#35D0BA" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#1D2F8C" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Ráfaga 1 saliendo de la boquilla */}
          <g className="spray-mist-particle-1">
            <circle cx="45" cy="55" r="9" fill="url(#sprayMistGradLeft)" />
            <circle cx="38" cy="48" r="2.5" fill="#D8E600" />
            <circle cx="44" cy="42" r="1.8" fill="#FFEA00" />
            <circle cx="32" cy="56" r="2" fill="#35D0BA" />
          </g>

          {/* Ráfaga 2 */}
          <g className="spray-mist-particle-2">
            <circle cx="40" cy="48" r="13" fill="url(#sprayMistGradLeft)" />
            <circle cx="28" cy="38" r="3" fill="#D8E600" />
            <circle cx="36" cy="30" r="2" fill="#1D2F8C" />
            <circle cx="24" cy="46" r="2.5" fill="#35D0BA" />
          </g>
        </svg>

        {/* ─── EL MUÑECO DIVERSPLAS EN POSE DE SALUDO Y BOTE ─── */}
        <div className="mascot-character-float relative z-10 flex flex-col items-center justify-end">
          <img
            src="/mascot-waving.webp"
            alt="Mascota Diversplas Saludando"
            width={170}
            height={220}
            className="w-40 sm:w-[170px] h-auto object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)] filter contrast-[1.03]"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Sombra de suelo neo-brutalista bien afianzada */}
        <div className="absolute -bottom-1 w-36 h-3 bg-black/40 rounded-full blur-[1.5px] -z-0" />
      </div>
    </div>
  );
}

