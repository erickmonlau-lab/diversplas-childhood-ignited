import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  {
    question: "¿Diversplas tiene alguna relación con Diver's Associació d'Esplai o Diver Planet?",
    answer: "No. Diversplas (diversplas.es) es una empresa completamente independiente y sin ninguna vinculación con Diver's Associació d'Esplai (diversesplai.cat), Diver Planet, ni ninguna otra entidad de nombre similar. Somos entidades distintas, con diferente titularidad, gestión y contacto."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="w-full bg-[#f8f8f8] py-20 border-b-2 border-black">
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12 text-center" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
          Preguntas <span className="text-[#3055C7]">Frecuentes</span>
        </h2>
        
        <div className="flex flex-col gap-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className={`border-2 border-black rounded-xl overflow-hidden bg-white transition-shadow ${isOpen ? 'shadow-[6px_6px_0_0_#000]' : 'shadow-[3px_3px_0_0_#000] hover:shadow-[4px_4px_0_0_#000]'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
                >
                  <span className="font-bold text-lg md:text-xl">{faq.question}</span>
                  <div className={`shrink-0 ml-4 p-1 rounded-full border-2 border-black transition-colors ${isOpen ? 'bg-[#D8E600]' : 'bg-[#f0f0f0]'}`}>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={20} strokeWidth={3} />
                    </motion.div>
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-5 md:p-6 pt-0 text-black/75 font-medium md:text-lg border-t-2 border-black/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
