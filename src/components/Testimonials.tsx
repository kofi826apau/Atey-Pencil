import { siteData } from '../data';
import { motion } from 'motion/react';

export default function Testimonials() {
  return (
    <section className="py-32 md:py-48 px-6 bg-canvas border-y border-stone/10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-24 md:mb-40">
          <h2 className="text-[10px] md:text-xs font-semibold text-earth tracking-[0.3em] uppercase mb-6">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-ink tracking-tight">Client Stories</h3>
        </div>

        <div className="flex flex-col gap-32">
          {siteData.testimonials.map((testimonial, index) => {
            return (
              <motion.div 
                key={testimonial.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center text-center max-w-4xl mx-auto"
              >
                <p className="text-2xl md:text-4xl lg:text-5xl text-ink font-serif italic leading-[1.3] mb-12 text-balance tracking-tight">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex flex-col gap-2">
                  <h4 className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.3em] text-ink">{testimonial.name}</h4>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-stone">{testimonial.context}</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
