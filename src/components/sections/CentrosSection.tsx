import { condensed, condensedItalic } from "../../lib/styles";
import { PARTNER_TYPES } from "../../lib/data";

export default function CentrosSection() {
  return (
    <section className="bg-white py-20 md:py-28 border-b-2 border-black">
      <div className="mx-auto max-w-[1400px] px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Left */}
        <div>
          <h2
            className="uppercase leading-[0.9] tracking-tight text-[12vw] md:text-[7vw] mb-6 text-black"
            style={condensed}
          >
            Centros que
            <span className="block" style={condensedItalic}>
              ya nos <span className="text-[#1D2F8C]">eligen.</span>
            </span>
          </h2>
          <p className="text-black/70 text-lg leading-relaxed max-w-sm">
            Trabajamos con todo tipo de centros educativos del área metropolitana de Barcelona.{" "}
            <strong><span className="text-black font-black">Tu centro educativo,</span> <span className="bg-[#D8E600] text-black font-black px-2 py-0.5 rounded whitespace-nowrap">a un mensaje de distancia.</span></strong>
          </p>
        </div>

        <div
          className="relative px-2 pr-6 max-h-[380px] md:max-h-[500px] overflow-y-auto scrollbar-thin"
          style={{
            maskImage: "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <div
            className="flex flex-col gap-3 py-6"
            style={{ animation: 'float 8s ease-in-out infinite' }}
          >
            {[...PARTNER_TYPES, ...PARTNER_TYPES].map((p, i) => (
              <div
                key={i}
                style={{ backgroundColor: p.color }}
                className="flex items-center gap-3 rounded-full border-2 border-black px-5 py-3 shadow-[4px_4px_0_0_#000]"
              >
                <span
                  className="text-sm font-bold"
                  style={{ color: p.light ? "#fff" : p.dark ? "#000" : "#000" }}
                >
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
