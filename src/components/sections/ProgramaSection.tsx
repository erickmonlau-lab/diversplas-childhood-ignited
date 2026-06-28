import { condensed } from "../../lib/styles";
import { PROGRAM_STEPS } from "../../lib/data";
import FeatureSection from "./FeatureSection";

function ProgramVisual() {
  return (
    <div className="rounded-3xl bg-[#D8E600] border-2 border-black p-8 md:p-10 overflow-hidden relative min-h-[380px] md:min-h-[440px]">
      <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-white/10 -translate-y-1/3 translate-x-1/3" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-black/10 translate-y-1/3 -translate-x-1/3" />
      <div className="relative mb-7">
        <span className="font-black text-lg tracking-widest text-black uppercase mb-2 block">Tu programa</span>
        <div className="text-3xl md:text-4xl font-black text-black -mt-1" style={condensed}>
          A medida,{" "}
          <span className="bg-white text-black border-2 border-black px-2 py-1 inline-block shadow-[2px_2px_0_0_#000] font-black rounded-md">con propósito</span>
        </div>
      </div>
      <div className="relative space-y-3">
        {PROGRAM_STEPS.map((s) => (
          <div key={s.n} className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 border-2 border-black shadow-[3px_3px_0_0_#000]">
            <span className="text-black/55 font-black text-base font-mono w-6">{s.n}</span>
            <span className="h-4.5 w-4.5 rounded-full flex-shrink-0 border-2 border-black" style={{ backgroundColor: s.c }} />
            <span className="text-black font-black text-xl md:text-2xl" style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "1.2px" }}>{s.t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProgramaSection() {
  return (
    <FeatureSection
      id="process"
      headline="Tu AFA, sin estrés."
      description="Sabemos lo que cuesta organizar las extraescolares. Nosotros nos encargamos de todo: inscripciones, cobros, seguros y coordinación con el centro."
      extra="Solo tenéis que elegir qué queréis ofrecer."
      links={[{ label: "SOLICITAR CITA", href: "#contact" }]}
      visual={<ProgramVisual />}
      flip
    />
  );
}
