import React from "react";

export function MascotFooter() {
  return (
    <div className="relative w-full h-full select-none pointer-events-none flex items-center justify-center">
      <svg
        viewBox="0 0 240 240"
        width="240"
        height="240"
        style={{ maxWidth: "100%", maxHeight: "250px", width: "auto", height: "auto" }}
        className="w-full h-full max-h-[250px] overflow-visible drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Sombra suave y degradados para ropa */}
          <linearGradient id="capGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2554B8" />
            <stop offset="100%" stopColor="#122B7A" />
          </linearGradient>

          <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFEA00" />
            <stop offset="100%" stopColor="#D8E600" />
          </linearGradient>

          <linearGradient id="pantsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3055C7" />
            <stop offset="100%" stopColor="#1A3388" />
          </linearGradient>

          <linearGradient id="sprayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#D1D5DB" />
          </linearGradient>

          {/* Partículas de spray que salen del bote */}
          <radialGradient id="sprayMist" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D8E600" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#35D0BA" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#1D2F8C" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ─── ANIMACIONES CSS PURAS (60 FPS) ─── */}
        <style>{`
          /* Brazo con el bote de spray pintando y saludando */
          @keyframes sprayPump {
            0%, 100% {
              transform: rotate(-3deg) translateY(0px);
            }
            30% {
              transform: rotate(7deg) translateY(-4px);
            }
            60% {
              transform: rotate(-5deg) translateY(2px);
            }
          }

          /* Partícula de pintura saliendo */
          @keyframes sprayParticles {
            0% {
              opacity: 0;
              transform: scale(0.6) translate(0, 0);
            }
            40% {
              opacity: 0.9;
              transform: scale(1.1) translate(14px, -12px);
            }
            100% {
              opacity: 0;
              transform: scale(1.5) translate(28px, -24px);
            }
          }

          /* Levitación suave de chips escolares */
          @keyframes floatB2B {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
          }

          @keyframes floatAltB2B {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-6px) rotate(3deg); }
          }

          .mascot-spray-arm {
            transform-origin: 130px 120px;
            animation: sprayPump 2.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          }

          .spray-puff-1 {
            transform-origin: 190px 105px;
            animation: sprayParticles 1.8s ease-out infinite;
          }

          .spray-puff-2 {
            transform-origin: 195px 100px;
            animation: sprayParticles 1.8s ease-out infinite 0.6s;
          }

          .chip-tag-1 {
            animation: floatB2B 2.6s ease-in-out infinite;
          }

          .chip-tag-2 {
            animation: floatAltB2B 3.1s ease-in-out infinite;
          }

          .chip-tag-3 {
            animation: floatB2B 2.8s ease-in-out infinite 0.7s;
          }
        `}</style>

        {/* Sombra de suelo neo-brutalista */}
        <ellipse cx="108" cy="216" rx="55" ry="9" fill="#000000" fillOpacity="0.35" />

        {/* ─── CHIPS FLOTANTES EDUCATIVOS B2B ─── */}
        {/* Chip 1: Colegios & AFAs */}
        <g className="chip-tag-1">
          <rect x="8" y="75" width="62" height="22" rx="6" fill="#1D2F8C" stroke="#000000" strokeWidth="1.8" />
          <text x="14" y="90" fill="#FFFFFF" fontSize="9" fontWeight="900" fontFamily="system-ui, sans-serif">🏫 COLEGIOS</text>
        </g>

        {/* Chip 2: +20 Años */}
        <g className="chip-tag-2">
          <rect x="168" y="28" width="58" height="22" rx="6" fill="#FF7B72" stroke="#000000" strokeWidth="1.8" />
          <text x="175" y="43" fill="#FFFFFF" fontSize="9" fontWeight="900" fontFamily="system-ui, sans-serif">★ +20 AÑOS</text>
        </g>

        {/* Chip 3: Extraescolares y Casales */}
        <g className="chip-tag-3">
          <rect x="156" y="172" width="76" height="22" rx="6" fill="#35D0BA" stroke="#000000" strokeWidth="1.8" />
          <text x="163" y="187" fill="#000000" fontSize="9" fontWeight="900" fontFamily="system-ui, sans-serif">⚽ CASALES</text>
        </g>

        {/* ─── BOCADILLO DE DIÁLOGO "¡Hola Colegios! 👋" ─── */}
        <g className="chip-tag-1" transform="translate(15, 6)">
          <rect x="74" y="8" width="76" height="24" rx="8" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />
          <polygon points="106,32 112,40 118,32" fill="#FFFFFF" stroke="#000000" strokeWidth="2" strokeLinejoin="round" />
          {/* Tapa línea interior del pico */}
          <line x1="107" y1="31" x2="117" y2="31" stroke="#FFFFFF" strokeWidth="2.5" />
          <text x="82" y="24" fill="#000000" fontSize="10.5" fontWeight="900" fontFamily="system-ui, sans-serif">
            ¡Hola Colegios! 👋
          </text>
        </g>

        {/* ─── ZAPATILLAS ANCHAS SNEAKERS CON BORDES NEGROS ─── */}
        <g>
          {/* Zapatilla izquierda */}
          <ellipse cx="78" cy="208" rx="20" ry="9" fill="#262626" stroke="#000000" strokeWidth="2" />
          <path d="M 60 208 C 60 203 72 201 92 201 C 98 205 98 212 92 214 L 62 214 Z" fill="#FFFFFF" stroke="#000000" strokeWidth="1.8" />
          <path d="M 64 204 L 84 204" stroke="#000000" strokeWidth="2" strokeLinecap="round" />

          {/* Zapatilla derecha */}
          <ellipse cx="140" cy="208" rx="20" ry="9" fill="#262626" stroke="#000000" strokeWidth="2" />
          <path d="M 122 208 C 122 203 134 201 154 201 C 160 205 160 212 154 214 L 124 214 Z" fill="#FFFFFF" stroke="#000000" strokeWidth="1.8" />
          <path d="M 126 204 L 146 204" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* ─── PANTALONES BAGGY ANCHOS AZULES ─── */}
        <g>
          {/* Piernas anchas caídas con pliegues */}
          <path
            d="M 68 152 C 55 170 58 198 76 204 C 92 204 98 185 106 172 C 114 185 124 204 142 204 C 158 198 160 170 148 152 Z"
            fill="url(#pantsGrad)"
            stroke="#000000"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* Pliegues de vaquero ancho */}
          <path d="M 76 170 Q 86 182 82 196" stroke="#1D2F8C" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M 138 170 Q 128 182 132 196" stroke="#1D2F8C" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M 106 174 L 106 198" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* ─── CAMISETA AMARILLA Y CINTURÓN CON HEBILLA ─── */}
        <g>
          {/* Cinturón */}
          <rect x="85" y="146" width="46" height="8" rx="2" fill="#000000" />
          <rect x="100" y="144" width="16" height="12" rx="2" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />

          {/* Camiseta amarilla corporativa */}
          <path
            d="M 80 114 C 76 128 78 144 84 150 C 96 153 120 153 132 150 C 136 142 138 126 136 114 Z"
            fill="url(#shirtGrad)"
            stroke="#000000"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        </g>

        {/* ─── BRAZO IZQUIERDO EN EL BOLSILLO ─── */}
        <g>
          <path
            d="M 82 116 C 68 124 64 140 76 154"
            stroke="#FDE047"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 82 116 C 68 124 64 140 76 154"
            stroke="#000000"
            strokeWidth="2"
            fill="none"
          />
          {/* Mano metida en el bolsillo */}
          <circle cx="76" cy="154" r="6" fill="#FDBA74" stroke="#000000" strokeWidth="1.8" />
        </g>

        {/* ─── CARA Y PELO CASTAÑO DESPEINADO ─── */}
        <g>
          {/* Oreja y cuello */}
          <ellipse cx="86" cy="100" rx="5" ry="6" fill="#FDBA74" stroke="#000000" strokeWidth="1.8" />
          <rect x="102" y="102" width="12" height="15" fill="#FDBA74" stroke="#000000" strokeWidth="1.8" />

          {/* Cabeza / Cara */}
          <ellipse cx="108" cy="88" rx="20" ry="22" fill="#FDBA74" stroke="#000000" strokeWidth="2.5" />

          {/* Pelo castaño de rapero con flequillo */}
          <path
            d="M 90 74 C 92 88 88 102 96 104 C 98 94 105 92 110 88 C 114 92 120 90 126 84 C 128 78 128 72 124 68 Z"
            fill="#5C3317"
            stroke="#000000"
            strokeWidth="2"
          />

          {/* Nariz simpática */}
          <path d="M 112 84 Q 118 88 114 91" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" fill="none" />

          {/* Ojos con mirada pícara hacia el spray */}
          <ellipse cx="106" cy="81" rx="2.5" ry="3.5" fill="#000000" />
          <circle cx="107" cy="80" r="1" fill="#FFFFFF" />

          {/* Sonrisa segura de grafiti */}
          <path
            d="M 106 94 Q 114 100 122 93"
            stroke="#000000"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* ─── GORRA AZUL CON VISERA HACIA ATRÁS (ESTILO ORIGINAL DIVERSPLAS) ─── */}
        <g>
          {/* Cuerpo de la gorra */}
          <path
            d="M 84 76 C 80 50 114 44 132 58 C 136 68 136 78 130 84 C 116 72 96 70 84 76 Z"
            fill="url(#capGrad)"
            stroke="#000000"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Letra R blanca de la gorra original */}
          <path
            d="M 98 58 L 98 72 M 98 58 Q 106 58 106 65 Q 106 70 98 70 M 102 70 L 107 74"
            stroke="#FFFFFF"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Visera de lado hacia atrás */}
          <path
            d="M 84 76 C 70 78 62 88 64 96 C 72 94 80 88 88 82 Z"
            fill="#122B7A"
            stroke="#000000"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          {/* Agujeros de ajuste traseros de la gorra */}
          <circle cx="120" cy="74" r="1.5" fill="#000000" />
          <circle cx="124" cy="75" r="1.5" fill="#000000" />
          <circle cx="128" cy="76" r="1.5" fill="#000000" />
        </g>

        {/* ─── BRAZO DERECHO ANIMADO DISPARANDO SPRAY ─── */}
        <g className="mascot-spray-arm">
          {/* Manga corta amarilla */}
          <path
            d="M 132 116 C 144 116 154 118 160 125 L 152 136 C 144 130 134 128 128 128 Z"
            fill="#FFEA00"
            stroke="#000000"
            strokeWidth="2"
          />

          {/* Brazo estirado hacia adelante con el bote de spray */}
          <path
            d="M 148 128 C 158 124 168 122 178 120"
            stroke="#FDBA74"
            strokeWidth="11"
            strokeLinecap="round"
            fill="none"
          />

          {/* Bote de spray plateado con etiqueta "Temps de lleure" */}
          <g transform="translate(164, 94) rotate(14)">
            {/* Boquilla de spray */}
            <rect x="8" y="0" width="6" height="5" rx="1" fill="#FFFFFF" stroke="#000000" strokeWidth="1.2" />
            <rect x="9.5" y="5" width="3" height="3" fill="#000000" />

            {/* Cúpula del bote */}
            <path d="M 2 11 Q 11 7 20 11 L 20 14 L 2 14 Z" fill="#9CA3AF" stroke="#000000" strokeWidth="1.5" />

            {/* Cuerpo del bote */}
            <rect x="2" y="14" width="18" height="36" rx="2" fill="url(#sprayGrad)" stroke="#000000" strokeWidth="2" />

            {/* Etiqueta Temps de lleure con triangulito amarillo */}
            <rect x="4" y="22" width="14" height="20" rx="1" fill="#FFFFFF" stroke="#1D2F8C" strokeWidth="0.8" />
            <text x="5.5" y="28" fill="#1D2F8C" fontSize="3.8" fontWeight="900" fontFamily="sans-serif">Temps</text>
            <text x="5" y="34" fill="#1D2F8C" fontSize="3.4" fontWeight="900" fontFamily="sans-serif">de lleure</text>
            <polygon points="10,36 8,39 12,39" fill="#D8E600" stroke="#000000" strokeWidth="0.5" />

            {/* Mano enguantada/dedo pulsando la boquilla */}
            <ellipse cx="6" cy="18" rx="4.5" ry="3.5" fill="#FDBA74" stroke="#000000" strokeWidth="1.5" />
            <ellipse cx="6" cy="24" rx="4.5" ry="3.5" fill="#FDBA74" stroke="#000000" strokeWidth="1.5" />
            <ellipse cx="6" cy="30" rx="4.5" ry="3.5" fill="#FDBA74" stroke="#000000" strokeWidth="1.5" />
          </g>

          {/* Ráfaga / Nube de spray animada saliendo de la boquilla */}
          <g className="spray-puff-1">
            <circle cx="196" cy="98" r="9" fill="url(#sprayMist)" />
            {/* Chispas de pintura amarilla */}
            <circle cx="204" cy="94" r="2.5" fill="#D8E600" />
            <circle cx="198" cy="90" r="1.8" fill="#FFEA00" />
            <circle cx="206" cy="102" r="2" fill="#35D0BA" />
          </g>

          <g className="spray-puff-2">
            <circle cx="208" cy="92" r="12" fill="url(#sprayMist)" />
            <circle cx="216" cy="86" r="3" fill="#D8E600" />
            <circle cx="212" cy="82" r="2" fill="#3055C7" />
          </g>
        </g>
      </svg>
    </div>
  );
}
