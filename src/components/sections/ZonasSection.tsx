import { condensed, condensedItalic } from "../../lib/styles";
import { ZONES } from "../../lib/data";
import FeatureSection from "./FeatureSection";

function ZonesCardsVisual() {
  const Card = ({ z, className = "", style = {} }: { z: typeof ZONES[0]; className?: string; style?: React.CSSProperties }) => {
    return (
      <div
        style={{
          border: '2px solid #000',
          borderRadius: '16px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '160px',
          boxShadow: '4px 4px 0 0 #000',
          transition: 'transform 0.2s, box-shadow 0.2s',
          ...style
        }}
        className={`hover:shadow-[8px_8px_0_0_#000] hover:-translate-y-1.5 cursor-default flex-shrink-0 scroll-snap-align-start ${z.color} ${className}`}
      >
        <div />

        <div>
          <div
            style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: '30px',
              fontWeight: 900,
              lineHeight: 1,
              color: '#fff',
              textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000',
              letterSpacing: '0.04em'
            }}
            className="uppercase break-words"
          >
            {z.city}
          </div>
          {z.sub && (
            <div
              style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '14px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: '#fff',
                textShadow: '2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000',
                opacity: 0.9
              }}
              className="uppercase mt-0.5"
            >
              {z.sub}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Mobile only scroll indicator */}
      <div className="flex md:hidden items-center gap-2 mb-3">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: '#0a0a0a' }}>
          <path d="M2 8h12M10 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '16px', fontWeight: 700, letterSpacing: '0.06em', color: '#0a0a0a' }}>
          Desliza para ver todas las zonas
        </span>
      </div>
      <div className="flex md:hidden gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none" style={{ marginLeft: "-20px", marginRight: "-20px", paddingLeft: "20px", paddingRight: "20px", boxSizing: "border-box", scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}>
        {ZONES.map((z) => (
          <Card key={z.city} z={z} className="flex-shrink-0 snap-start" style={{ minWidth: "220px", maxWidth: "240px" }} />
        ))}
      </div>
      {/* Desktop: 2x2 grid */}
      <div className="hidden md:grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
        {ZONES.map((z) => (
          <Card key={z.city} z={z} />
        ))}
      </div>
    </>
  );
}

export default function ZonasSection() {
  return (
    <FeatureSection
      id="zones"
      headline="Cerca de"
      headlineItalic="vosotros."
      description="Operamos en Barcelona y toda el área metropolitana, adaptándonos a las realidades y necesidades de cada municipio."
      links={[{ label: "VER TODAS LAS ZONAS", href: "#zones" }]}
      visual={<ZonesCardsVisual />}
      dark
    />
  );
}
