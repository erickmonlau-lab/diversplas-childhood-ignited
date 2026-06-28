import { condensed, condensedItalic } from "../../lib/styles";
import { MANIFESTO_PAIRS } from "../../lib/data";
import { useInView } from "../../hooks/useInView";
import { useRef } from "react";

export default function ManifiestoSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  return (
    <section id="manifesto" ref={ref} className="bg-white pt-14 pb-24 md:pt-16 md:pb-40 border-b-2 border-black">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-12 inline-flex items-center gap-2 rounded-full border-2 border-black bg-[#D8E600] px-4 py-1.5 text-xs font-bold tracking-widest">
          MANIFIESTO
        </div>
        <div className="space-y-10 md:space-y-14">
          {MANIFESTO_PAIRS.map((p, i) => (
            <div
              key={i}
              className={`border-b border-black/10 pb-10 md:pb-14 last:border-0 last:pb-0 ${inView ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div
                className="uppercase tracking-tight text-[6vw] sm:text-[4vw] md:text-[3.2vw] lg:text-[48px] mb-2 text-black/70 leading-[1.15]"
                style={condensed}
              >
                {p.intro}
              </div>
              <div
                className="uppercase tracking-tight text-[9vw] sm:text-[6vw] md:text-[5vw] lg:text-[72px] text-black leading-[1.1]"
                style={condensedItalic}
              >
                <span
                  style={{
                    background: `linear-gradient(180deg, transparent 78%, ${p.color} 78%)`,
                    paddingBottom: "4px",
                  }}
                  className="inline"
                >
                  {p.punch}
                </span>
              </div>
            </div>
          ))}
        </div>
        <p className={`mt-20 text-black text-2xl md:text-3xl font-black uppercase ${inView ? "animate-fade-in" : "opacity-0"}`} style={{ ...condensed, animationDelay: "500ms" }}>
          Y llevamos más de <span style={{ background: "linear-gradient(180deg, transparent 78%, #D8E600 78%)", paddingBottom: "4px" }}>20 años</span> demostrándolo.
        </p>
      </div>
    </section>
  );
}
