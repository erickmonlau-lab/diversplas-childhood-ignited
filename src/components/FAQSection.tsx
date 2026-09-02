import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQS = [
  {
    question: "¿Desde qué edad pueden apuntarse los niños?",
    answer: "A partir de 3-4 años según la actividad y el colegio."
  },
  {
    question: "¿Cómo me inscribo?",
    answer: "A través del AFA del colegio donde se imparte la actividad."
  },
  {
    question: "¿Con quién trabajáis?",
    answer: "Con AFAs, ludotecas, centros cívicos y casales de Barcelona y alrededores."
  },
  {
    question: "¿Qué actividades extraescolares ofrecéis?",
    answer: "Fútbol, Multideporte, Karate, Hip Hop, Zumba, Manualidades, Inglés, Dibujo y Refuerzo escolar (deberes)."
  },
  {
    question: "¿En qué zonas operáis?",
    answer: "Santa Coloma de Gramenet, el Fondo, Badalona, Mollet del Vallès, Sant Fost de Campsentelles, Martorelles y Barcelona."
  },
  {
    question: "¿Cuánto cuesta?",
    answer: "El precio varía según la actividad y el colegio. Consulta directamente con el AFA de tu colegio."
  },
  {
    question: "¿En qué horario son las actividades?",
    answer: "De lunes a viernes a partir de las 16:30, al finalizar el horario escolar."
  },
  {
    question: "¿Hacéis gestión de mediodía o comedores escolares?",
    answer: "No. Diversplas se especializa de forma exclusiva en actividades extraescolares (fútbol, multideporte, karate, hip hop, zumba, manualidades, inglés, dibujo y refuerzo escolar) y en la organización de casales en periodos vacacionales. No realizamos gestión de mediodía ni de comedores escolares. Somos una entidad independiente y no estamos vinculados a otras asociaciones o empresas."
  },
];

export function FAQSection({
  items = FAQS,
  title = "Preguntas",
  titleHighlight = "Frecuentes"
}: {
  items?: { question: string; answer: string }[];
  title?: string;
  titleHighlight?: string;
} = {}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="w-full bg-[#f8f8f8] py-20 border-b-2 border-black">
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-wider mb-12 text-center" style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.05em" }}>
          {title} <span className="text-[#3055C7]">{titleHighlight}</span>
        </h2>
        
        <div className="flex flex-col gap-4">
          {items.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className={`border-2 border-black rounded-xl overflow-hidden bg-white transition-all ${isOpen ? 'shadow-[6px_6px_0_0_#000]' : 'shadow-[3px_3px_0_0_#000] hover:shadow-[4px_4px_0_0_#000]'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={`w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none transition-colors ${isOpen ? 'bg-[#D8E600]' : 'bg-white hover:bg-gray-50'}`}
                >
                  <span className="font-bold text-lg md:text-xl text-black">{faq.question}</span>
                  <div className={`shrink-0 ml-4 p-1 rounded-full border-2 border-black transition-transform duration-300 bg-white ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown size={20} strokeWidth={3} className="text-black" />
                  </div>
                </button>
                
                <div className={`faq-answer ${isOpen ? 'open' : ''} bg-white`}>
                  <div className={`p-5 md:p-6 font-medium md:text-lg border-t-2 text-black/85 ${isOpen ? 'border-black/10' : 'border-transparent'}`}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

