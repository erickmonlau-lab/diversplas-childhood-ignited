import { motion } from 'framer-motion';

const REVIEWS = [
  {
    name: "Heidy Torre Moronta",
    text: "Buena organización y ayuda a los niños recomendados Rakel la mejor"
  },
  {
    name: "Antonia Santos Cano",
    text: "Hola Diversplas sois geniales la coordinadora se desvive por los niños los monitores súper atentos."
  },
  {
    name: "Maria Edivia Salguero Diaz",
    text: "Me encanta, por su valor como persona y profesional ❤️"
  }
];

function StarRating() {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} className="w-5 h-5 text-[#D8E600] fill-current" viewBox="0 0 24 24">
          <path stroke="black" strokeWidth="1.5" strokeLinejoin="round" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section className="py-20 bg-[#1D2F8C] border-b-2 border-black overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '30px 30px' }} />
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-wide text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Lo que dicen <span className="text-[#D8E600] inline-block ml-1 sm:ml-2" style={{ textShadow: '2px 2px 0 #0a0a0a' }}>las familias</span>
            </h2>
            <p className="mt-4 text-white/80 text-xl font-medium">
              Nuestra mejor garantía son los niños que repiten año tras año.
            </p>
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
              className="bg-white border-2 border-black p-8 sm:p-10 rounded-2xl shadow-[6px_6px_0_0_#000] hover:translate-y-[-4px] hover:shadow-[8px_8px_0_0_#000] transition-all flex flex-col justify-between"
            >
              <div>
                <StarRating />
                <p className="mt-6 text-lg font-medium text-black/80 leading-[1.8]">
                  "{review.text}"
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3 border-t-2 border-black/10 pt-5">
                <div className="w-10 h-10 rounded-full bg-[#1D2F8C] flex items-center justify-center text-white font-bold text-lg border border-black/10 shrink-0">
                  {review.name.charAt(0)}
                </div>
                <span className="font-bold text-black leading-tight">{review.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://www.google.com/maps?cid=17471814521949579952"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D8E600] text-black px-8 py-4 font-black border-2 border-black hover:bg-white transition-all duration-300 hover:scale-[1.02] uppercase tracking-wide shadow-[4px_4px_0_0_#000]"
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
