import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQS = [
  {
    question: "¿Qué servicios ofrece Diversplas para nuestro colegio o AFA?",
    answer: "Ofrecemos la impartición y dinamización de actividades extraescolares deportivas, artísticas y de refuerzo, además de casales en periodos vacacionales. Aportamos el material necesario, la programación de las clases y la coordinación directa con el centro."
  },
  {
    question: "¿En qué zonas operáis actualmente?",
    answer: "Nuestra sede y operativa principal se encuentra en Santa Coloma de Gramenet y el barrio del Fondo. Además, tenemos disponibilidad para poner en marcha actividades en colegios de Badalona, Barcelona, Mollet del Vallès, Sant Fost y Martorelles."
  },
  {
    question: "¿Cómo son los monitores y monitoras de Diversplas?",
    answer: "Contamos con un equipo experimentado y cercano, con vocación por el trato infantil, la educación en valores y la animación deportiva y artística."
  },
  {
    question: "¿Podemos personalizar las actividades para nuestro centro?",
    answer: "Por supuesto. Nos adaptamos a los horarios, espacios disponibles y preferencias del colegio y de las familias, seleccionando juntos las actividades más demandadas."
  },
  {
    question: "¿Organizáis casales en las instalaciones del colegio?",
    answer: "Sí. Realizamos casales y actividades en periodos vacacionales (Verano, Navidad y Semana Santa) dentro del propio centro escolar para que los alumnos disfruten en un entorno familiar."
  },
  {
    question: "¿Cómo contactamos con la coordinación de Diversplas?",
    answer: "Estamos disponibles a través de WhatsApp en el +34 657 117 426 y por correo electrónico en diversplascontacto@gmail.com para resolver cualquier duda o acordar una reunión informativa."
  },
  {
    question: "¿Hacéis gestión de mediodía o comedores escolares?",
    answer: "No. En Diversplas nos enfocamos de forma 100% especializada en actividades extraescolares de tarde y casales vacacionales. No gestionamos comedores escolares ni tiempos de mediodía."
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
