import { motion } from 'framer-motion';

const REVIEWS = [
  {
    name: "Marta G.",
    text: "Llevamos años confiando en Diversplas para las extraescolares de nuestros hijos y la experiencia no podría ser mejor. Los monitores son unos profesionales.",
    stars: 5,
    date: "Hace 1 mes"
  },
  {
    name: "Carlos R.",
    text: "El casal de verano ha sido un éxito total. Mi hija ha vuelto cada día encantada. Muy recomendables, trato cercano y mucha seguridad.",
    stars: 5,
    date: "Hace 3 meses"
  },
  {
    name: "Laura V.",
    text: "La mejor decisión para las tardes de los peques. Se nota que llevan muchos años en esto, la organización y la comunicación con las familias es de 10.",
    stars: 5,
    date: "Hace 4 meses"
  }
];

function StarRating() {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} className="w-5 h-5 text-[#D8E600] fill-current" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section className="py-20 bg-white border-b-2 border-black overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1D2F8C 2px, transparent 2px)', backgroundSize: '30px 30px' }} />
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-[#1D2F8C]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Lo que dicen <span className="text-[#D8E600]" style={{ textShadow: '2px 2px 0 #1D2F8C' }}>las familias</span>
            </h2>
            <p className="mt-4 text-black/70 text-xl font-medium">
              Nuestra mejor garantía son los niños que repiten año tras año.
            </p>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-2">
            <div className="flex items-center gap-3">
              <span className="text-4xl font-black">5.0</span>
              <div className="flex flex-col">
                <StarRating />
                <span className="text-sm font-bold text-black/60 uppercase tracking-widest mt-1">16 reseñas reales</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white border-2 border-black p-8 rounded-2xl shadow-[6px_6px_0_0_#000] hover:translate-y-[-4px] hover:shadow-[8px_8px_0_0_#000] transition-all flex flex-col justify-between"
            >
              <div>
                <StarRating />
                <p className="mt-6 text-lg font-medium text-black/80 leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between border-t-2 border-black/10 pt-4">
                <span className="font-bold text-black">{review.name}</span>
                <span className="text-sm text-black/50 font-semibold">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://www.google.com/maps?cid=17471814521949579952"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1D2F8C] text-white px-8 py-4 font-bold border-2 border-black hover:bg-[#3055C7] transition-all duration-300 hover:scale-[1.02] uppercase tracking-wide shadow-[4px_4px_0_0_#000]"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/>
            </svg>
            Leer todas las reseñas en Google
          </a>
        </div>
      </div>
    </section>
  );
}
