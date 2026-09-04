import { motion } from 'motion/react';
import { siteData } from '../data';

export default function Hero() {
  return (
    <section className="pt-32 md:pt-40 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto min-h-[90vh] flex flex-col justify-center">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 lg:order-1 lg:w-5/12 w-full pt-8 lg:pt-0"
        >
          <div className="max-w-xl">
            <p className="text-[10px] md:text-xs font-semibold text-earth tracking-[0.3em] uppercase mb-8">
              ATEY PENCIL • HAND-DRAWN ART
            </p>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif leading-[1.05] text-ink mb-10 text-balance tracking-tight">
              Turning Memories Into Pencil.
            </h1>
            
            <p className="text-lg md:text-xl text-stone leading-relaxed font-light mb-14 text-pretty max-w-md">
              Hand-drawn pencil portraits created in Ghana for people who want to keep their favourite moments close.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
              <a 
                href={`https://wa.me/${siteData.contact.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-ink text-paper px-10 py-5 text-[11px] font-medium uppercase tracking-[0.2em] hover:bg-earth hover:text-paper transition-all duration-500"
              >
                Chat with Atey Pencil
              </a>
              <a 
                href="#/commission" 
                className="w-full sm:w-auto inline-flex items-center justify-center border-b border-stone/30 text-ink py-2 text-[11px] font-medium uppercase tracking-[0.2em] hover:border-ink transition-all duration-500"
              >
                Commission Online
              </a>
            </div>
          </div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="order-1 lg:order-2 lg:w-7/12 w-full"
        >
          <div className="aspect-[4/5] lg:aspect-[4/3] w-full overflow-hidden bg-[#EAE8E3]">
            <motion.img 
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
              src="/images/artwork/hero-01.jpg"
              alt="Atey Pencil Artwork"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
