import React from "react";

export function MascotFooter() {
  return (
    <div className="relative w-full h-full min-h-[250px] max-w-[340px] select-none flex items-center justify-center p-2">
      {/* ─── ANIMACIONES CSS NATIVAS (60 FPS) ─── */}
      <style>{`
        /* Movimiento de respiración / balanceo leve sin desconectar de la sombra */
        @keyframes mascotBreathing {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-4px) scale(1.01);
          }
        }

        /* Pulsación rítmica del spray saliendo del pico del bote */
        @keyframes sprayMistBurst {
          0% {
            opacity: 0;
            transform: scale(0.3) translate(0, 0);
          }
          30% {
            opacity: 0.9;
            transform: scale(1) translate(12px, -14px);
          }
          70% {
            opacity: 0.6;
            transform: scale(1.4) translate(22px, -26px);
          }
          100% {
            opacity: 0;
            transform: scale(1.8) translate(30px, -36px);
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
          transform-origin: 20px 80px;
          animation: sprayMistBurst 2.2s ease-out infinite;
        }

        .spray-mist-particle-2 {
          transform-origin: 22px 78px;
          animation: sprayMistBurst 2.2s ease-out infinite 0.7s;
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
      <div className="relative w-[300px] h-[240px] flex items-end justify-center">

        {/* ─── BOCADILLO DE DIÁLOGO "¡Hola Colegios! 👋" (Arriba centrado/izquierda, sin tapar gorra) ─── */}
        <div className="absolute top-0 left-0 z-20 anim-tag-1 pointer-events-none">
          <div className="relative bg-white text-black font-black text-xs px-3 py-1.5 rounded-xl border-2 border-black shadow-[3px_3px_0_0_#000] whitespace-nowrap">
            ¡Hola Colegios! 👋
            {/* Pico del bocadillo saliendo desde abajo hacia la cabeza */}
            <div className="absolute -bottom-1.5 left-8 w-2.5 h-2.5 bg-white border-r-2 border-b-2 border-black rotate-45" />
          </div>
        </div>

        {/* ─── CHIP B2B SUPERIOR DERECHA: +20 AÑOS (Despejado por encima del bote) ─── */}
        <div className="absolute top-2 -right-1 z-20 anim-tag-2 pointer-events-none">
          <span className="inline-flex items-center gap-1 bg-[#FF6B6B] text-white font-black text-[11px] px-2.5 py-1 rounded-lg border-2 border-black shadow-[3px_3px_0_0_#000] uppercase tracking-wide whitespace-nowrap">
            ★ +20 AÑOS
          </span>
        </div>

        {/* ─── CHIP B2B IZQUIERDA: COLEGIOS (Alineado fuera del cuerpo) ─── */}
        <div className="absolute top-[48%] -left-3 -translate-y-1/2 z-20 anim-tag-3 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 bg-[#1D2F8C] text-white font-black text-[11px] px-2.5 py-1 rounded-lg border-2 border-black shadow-[3px_3px_0_0_#000] uppercase tracking-wide whitespace-nowrap">
            🏫 COLEGIOS
          </span>
        </div>

        {/* ─── CHIP B2B INFERIOR DERECHA: CASALES (A un lado de las zapatillas) ─── */}
        <div className="absolute bottom-4 -right-4 z-20 anim-tag-1 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 bg-[#35D0BA] text-black font-black text-[11px] px-2.5 py-1 rounded-lg border-2 border-black shadow-[3px_3px_0_0_#000] uppercase tracking-wide whitespace-nowrap">
            ⚽ CASALES
          </span>
        </div>

        {/* ─── EFECTOS DE PARTÍCULAS DE SPRAY DIRECTAMENTE EN LA BOQUILLA ─── */}
        <svg
          viewBox="0 0 100 100"
          className="absolute top-[52px] right-[40px] w-20 h-20 pointer-events-none z-20 overflow-visible"
        >
          <defs>
            <radialGradient id="sprayMistGrad2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#D8E600" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#35D0BA" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#1D2F8C" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Ráfaga 1 saliendo de la boquilla */}
          <g className="spray-mist-particle-1">
            <circle cx="28" cy="65" r="10" fill="url(#sprayMistGrad2)" />
            <circle cx="36" cy="58" r="2.5" fill="#D8E600" />
            <circle cx="30" cy="52" r="1.8" fill="#FFEA00" />
            <circle cx="42" cy="68" r="2" fill="#35D0BA" />
          </g>

          {/* Ráfaga 2 */}
          <g className="spray-mist-particle-2">
            <circle cx="34" cy="56" r="14" fill="url(#sprayMistGrad2)" />
            <circle cx="46" cy="46" r="3" fill="#D8E600" />
            <circle cx="38" cy="38" r="2" fill="#1D2F8C" />
            <circle cx="50" cy="54" r="2.5" fill="#35D0BA" />
          </g>
        </svg>

        {/* ─── EL MUÑECO OFICIAL DIVERSPLAS EN ALTA RESOLUCIÓN Y BIEN ASENTADO ─── */}
        <div className="mascot-character-float relative z-10 flex flex-col items-center justify-end">
          <img
            src="/mascot-boy.webp"
            alt="Mascota Diversplas Oficial"
            width={170}
            height={220}
            className="w-36 sm:w-[155px] h-auto object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)] filter contrast-[1.05]"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Sombra de suelo neo-brutalista sólida y pegada a las suelas */}
        <div className="absolute -bottom-1 w-36 h-3 bg-black/40 rounded-full blur-[1.5px] -z-0" />
      </div>
    </div>
  );
}

