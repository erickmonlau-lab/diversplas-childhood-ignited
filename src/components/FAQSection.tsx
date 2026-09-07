import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQS = [
  {
    question: "¿Qué responsabilidades y trámites asume Diversplas en nuestro colegio?",
    answer: "Asumimos la gestión integral y llave en mano: selección, contratación y nóminas de monitores titulados, cobertura con póliza de Responsabilidad Civil patronal y de actividades, material técnico homologado, programación pedagógica adaptada al centro y resolución ágil de cualquier incidencia."
  },
  {
    question: "¿En qué zonas operáis actualmente?",
    answer: "Nuestra sede principal y núcleo operativo se encuentra en Santa Coloma de Gramenet y el barrio del Fondo. Además, contamos con capacidad de desplazamiento e implantación de proyectos en colegios de Badalona, Barcelona, Mollet del Vallès, Sant Fost y Martorelles."
  },
  {
    question: "¿Los monitores cuentan con la titulación y certificados legales requeridos?",
    answer: "Sí, el 100% de nuestro equipo de monitores y coordinadores dispone de la titulación oficial exigida por la normativa catalana (Monitor/a de Lleure, técnicos deportivos o grados en educación) y el Certificado Negativo del Registro Central de Delincuentes Sexuales debidamente actualizado."
  },
  {
    question: "¿Podemos personalizar las actividades y adaptarlas al Ideario de nuestro centro?",
    answer: "Por supuesto. No imponemos programas cerrados; nos reunimos previamente con la dirección del centro escolar y la junta del AFA para alinear los horarios, valores, metodologías y oferta de actividades con el Proyecto Educativo de Centro (PEC)."
  },
  {
    question: "¿Organizáis casales en las instalaciones del colegio durante los periodos de vacaciones?",
    answer: "Sí. Diseñamos y ejecutamos casales escolares y campus vacacionales de Verano, Navidad y Semana Santa dentro de vuestro propio recinto educativo, facilitando la conciliación laboral y familiar del centro con proyectos lúdico-educativos temáticos."
  },
  {
    question: "¿Cómo se coordina el día a día entre el colegio y Diversplas?",
    answer: "Cada centro cuenta con un/a Coordinador/a pedagógico de enlace asignado. Es la persona responsable del seguimiento diario de las asistencias, la comunicación fluida con la dirección y la atención preferente a través de canal directo y WhatsApp."
  },
  {
    question: "¿Hacéis gestión de mediodía o comedores escolares?",
    answer: "No. En Diversplas nos enfocamos de forma 100% especializada en actividades extraescolares de tarde y casales vacacionales. No gestionamos comedores escolares ni tiempos de mediodía, lo que nos permite volcar toda nuestra energía y excelencia pedagógica en las tardes."
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
