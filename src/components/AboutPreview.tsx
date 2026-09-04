import { motion } from 'motion/react';
import { siteData } from '../data';

export default function AboutPreview() {
  return (
    <section id="about" className="py-32 md:py-48 px-6 max-w-[1400px] mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 relative"
        >
          <div className="aspect-[4/5] w-full relative overflow-hidden">
             <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 2, ease: "easeOut" }}
              src="/images/artwork/about-01.jpg" 
              alt="Atey - Portrait Artist"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="lg:col-span-5 lg:col-start-8"
        >
          <h3 className="text-[10px] tracking-[0.3em] uppercase text-earth mb-8 font-semibold">Behind the Pencil</h3>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-ink mb-10 leading-[1.1] tracking-tight text-balance">
            Meet the Artist.
          </h2>
          
          <div className="space-y-6 text-stone font-light leading-relaxed mb-16 text-lg">
            <p>
              I am Atey, a specialized portrait artist based in Ghana. For years, I have dedicated myself to mastering the intricate medium of graphite and charcoal, turning blank paper into deeply emotional tributes.
            </p>
            <p>
              My philosophy is simple: a portrait should not just look like the subject; it should feel like them. I approach every commission with immense respect for the story behind the photograph.
            </p>
          </div>

          <a 
            href="#/about" 
            className="inline-flex items-center justify-center border-b border-stone/30 text-ink py-4 text-[11px] font-medium uppercase tracking-[0.2em] hover:border-ink transition-colors duration-500"
          >
            Discover Atey Pencil
          </a>
        </motion.div>
      </div>
    </section>
  );
}
