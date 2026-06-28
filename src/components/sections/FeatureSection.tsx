import type { ReactNode } from "react";
import { condensed, condensedItalic, btnStyle } from "../../lib/styles";
import { useRef } from "react";
import { useInView } from "../../hooks/useInView";

type FeatureLink = { label: string; href: string };
interface FeatureSectionProps {
  id?: string;
  headline: string | ReactNode;
  headlineItalic?: string | ReactNode;
  description: string | ReactNode;
  extra?: string | ReactNode;
  links?: FeatureLink[];
  visual: ReactNode;
  flip?: boolean;
  dark?: boolean;
}

export default function FeatureSection({
  id, headline, headlineItalic, description, extra, links, visual, flip = false, dark = false,
}: FeatureSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  const text = (
    <div
      ref={ref}
      className={`flex flex-col justify-center py-8 md:py-0 min-w-0 w-full order-1 ${flip ? "md:order-2" : "md:order-1"} ${inView ? "animate-fade-in" : "opacity-0"}`}
    >
      <h2
        className={`uppercase leading-[0.88] tracking-tight text-[12vw] md:text-[7vw] lg:text-[88px] mb-8 ${dark ? "text-white" : "text-black"}`}
        style={condensed}
      >
        {headline}
        {headlineItalic && (
          <span className="block text-[#1D2F8C]" style={condensedItalic}>{headlineItalic}</span>
        )}
      </h2>
      <div className={`text-base sm:text-xl md:text-2xl leading-relaxed w-full md:max-w-lg overflow-wrap-anywhere ${dark ? "text-white/90" : "text-black/75"}`} style={{ overflowWrap: "break-word" }}>{description}</div>
      {extra && <div className={`text-base sm:text-xl md:text-2xl leading-relaxed w-full md:max-w-lg mt-4 ${dark ? "text-white/90" : "text-black/75"}`} style={{ overflowWrap: "break-word" }}>{extra}</div>}
      {links && (
        <ul className="flex flex-wrap gap-4 mt-10 p-0 m-0 list-none">
          {links.map((l, i) => (
            <li key={i}>
              <a
                href={l.href}
                className={`inline-block rounded-full px-8 py-3.5 font-bold border-2 border-black uppercase transition-colors shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] ${
                  i === 0
                    ? "bg-[#D8E600] text-black hover:bg-[#c8d500]"
                    : "bg-transparent text-black hover:bg-black hover:text-white"
                }`}
                style={btnStyle}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  const vis = (
    <div
      className={`min-w-0 w-full overflow-hidden order-2 ${flip ? "md:order-1" : "md:order-2"} ${inView ? "animate-fade-in" : "opacity-0"}`}
    >
      {visual}
    </div>
  );

  return (
    <section
      id={id}
      className={`border-b-2 border-black py-16 md:py-28 lg:py-40 overflow-hidden ${dark ? "bg-[#0a0a0a]" : "bg-white"}`}
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
        {text}
        {vis}
      </div>
    </section>
  );
}
