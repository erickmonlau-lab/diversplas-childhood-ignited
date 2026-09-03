import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQS = [
  {
    question: "¿Sois una empresa de actividades extraescolares para colegios y AFAs en Barcelona?",
    answer: "Sí. Diversplas es una empresa especializada con más de 20 años de experiencia en la gestión integral de actividades extraescolares y casales para colegios, AFAs y centros educativos de Barcelona, Santa Coloma de Gramenet, Badalona, Mollet del Vallès, Sant Fost y Martorelles."
  },
  {
    question: "¿Qué extraescolares tenéis para niños de infantil (3 a 5 años) y primaria (6 a 12 años)?",
    answer: "Adaptamos las programaciones por etapas: psicomotricidad, iniciación al deporte, expresión artística y juegos en inglés para educación infantil (3 a 5 años); y fútbol, patinaje, baloncesto, zumba, hip hop, karate, refuerzo escolar e inglés comunicativo para primaria (6 a 12 años)."
  },
  {
    question: "¿Qué extraescolares deportivas ofrecéis en los centros escolares?",
    answer: "Ofrecemos entrenamientos de fútbol escolar, patinaje sobre ruedas, karate, multideporte y baloncesto, siempre enfocados en el compañerismo, la psicomotricidad y los hábitos saludables."
  },
  {
    question: "¿Contáis con extraescolares de inglés y refuerzo escolar?",
    answer: "Sí. Impartimos clases extraescolares de inglés dinámicas y comunicativas, además de talleres de refuerzo escolar y técnicas de estudio para ayudar a los alumnos con los deberes diarios."
  },
  {
    question: "¿Oferteu activitats extraescolars per a escoles públiques i concertades de Catalunya?",
    answer: "Sí, col·laborem estretament amb AFAs i equips directius d'escoles públiques, concertades i privades, adaptant el projecte educatiu i els monitors a les necessitats de cada centre."
  },
  {
    question: "¿Cómo es el proceso de inscripción y precios?",
    answer: "Las inscripciones se gestionan coordinadas con el AFA o la dirección del colegio donde se realiza la actividad, garantizando precios accesibles para las familias y ratios pedagógicas reducidas."
  },
  {
    question: "¿En qué horarios se imparten las clases extraescolares?",
    answer: "De lunes a viernes en horario de tardes, a partir de las 16:30 h, al finalizar la jornada escolar lectiva."
  },
  {
    question: "¿Hacéis gestión de mediodía o comedores escolares?",
    answer: "No. En Diversplas nos enfocamos al 100% de forma especializada en actividades extraescolares de tarde y casales vacacionales (verano, Navidad y Semana Santa). No gestionamos comedores escolares ni tiempos de mediodía, asegurando la máxima calidad pedagógica en nuestras actividades."
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
