import { MARQUEE_COLORS } from "../../lib/data";

export default function TickerSection() {
  const ROW1 = ["FÚTBOL","BAILE","INGLÉS","KARATE","HIP HOP","ZUMBA","PATINAJE","BÁSQUET","MULTIDEPORTE"];
  const ROW2 = ["MANUALIDADES","REFUERZO","CASALES","INGLÉS","BAILE","FÚTBOL","KARATE","ZUMBA","HIP HOP"];

  const Tag = ({ text, colorIndex }: { text: string; colorIndex: number }) => {
    const c = MARQUEE_COLORS[colorIndex % MARQUEE_COLORS.length];
    return (
      <span
        style={{
          backgroundColor: c,
          flexShrink: 0,
        }}
        className="inline-flex items-center px-6 py-2 md:px-10 md:py-3 text-[48px] md:text-[80px] lg:text-[110px] leading-none whitespace-nowrap rounded-2xl border-2 border-black shadow-[4px_4px_0_0_#000] font-['Barlow_Condensed'] font-black italic uppercase tracking-normal text-black"
      >
        {text}
      </span>
    );
  };

  return (
    <section className="bg-[#0a0a0a] py-10 overflow-hidden border-y-2 border-black relative">
      <div className="overflow-hidden mb-3">
        <div className="ticker-track">
          {[...ROW1, ...ROW1, ...ROW1].map((t, i) => <Tag key={`r1-${i}`} text={t} colorIndex={i} />)}
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="ticker-track-reverse">
          {[...ROW2, ...ROW2, ...ROW2].map((t, i) => <Tag key={`r2-${i}`} text={t} colorIndex={i + 4} />)}
        </div>
      </div>
    </section>
  );
}
