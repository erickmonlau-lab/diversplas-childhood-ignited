import { condensed, condensedItalic } from "../../lib/styles";
import { ACTIVITIES } from "../../lib/data";

export default function Activities() {
  return (
    <section id="activities" className="bg-white py-20 md:py-28 border-b-2 border-black">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <h2
            className="uppercase leading-none tracking-tight text-[13vw] md:text-[7.5vw]"
            style={condensed}
          >
            Un universo{" "}
            <span style={condensedItalic} className="text-[#1D2F8C]">vivo.</span>
          </h2>
          <p className="max-w-sm text-black/70 text-xl md:text-2xl leading-snug font-medium">
            Cada disciplina, una oportunidad de crecer.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {ACTIVITIES.map((a, i) => (
            <a
              key={a.name}
              href="#contact"
              style={{ backgroundColor: a.color, color: a.light ? "#fff" : "#000" }}
              className="activity-card group relative aspect-square rounded-xl border-2 border-black p-4 flex flex-col justify-between overflow-hidden shadow-[4px_4px_0_0_#000]"
            >
              {/* Number */}
              <div className="w-full">
                <span className="inline-block px-2 py-0.5 bg-black text-white text-xs font-bold rounded-md">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Big icon — center */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', flex: 1 }}>
                {a.icon === "TWEMOJI_GB" ? (
                  <img
                    src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f1ec-1f1e7.png"
                    alt="🇬🇧"
                    style={{ width: '72px', height: '72px', objectFit: 'contain' }}
                    loading="lazy"
                    decoding="async"
                    width={72}
                    height={72}
                  />
                ) : (
                  <span
                    className="text-5xl md:text-6xl text-center leading-none select-none"
                    style={{ filter: "drop-shadow(2px 3px 0px rgba(0,0,0,0.18))" }}
                  >
                    {a.icon}
                  </span>
                )}
              </div>

              {/* Name and Arrow in bottom flex container */}
              <div className="flex items-center justify-between gap-2 w-full">
                <span className="inline-block bg-[#0a0a0a] text-white font-['Barlow_Condensed'] font-bold uppercase tracking-[0.05em] sm:tracking-[0.1em] text-[11px] sm:text-base px-2.5 py-1 rounded-md min-w-0 whitespace-nowrap">
                  {a.name}
                </span>
                <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold shrink-0 group-hover:bg-[#D8E600] group-hover:text-black transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
