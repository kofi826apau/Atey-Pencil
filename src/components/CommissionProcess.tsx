import { motion } from 'motion/react';
import { siteData } from '../data';

export default function CommissionProcess() {
  return (
    <section id="commissions" className="py-32 md:py-48 px-6 bg-ink text-paper overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          <div className="lg:col-span-5">
            <h2 className="text-5xl md:text-6xl lg:text-[5.5rem] font-serif mb-8 text-paper leading-[1.05] tracking-tight text-balance">
              From Photograph<br/>to Pencil.
            </h2>
            <p className="text-stone max-w-md font-light leading-relaxed text-lg mb-16">
              A simple, transparent process to commission your custom artwork.
            </p>
            
            <a 
              href="#/commission" 
              className="inline-flex items-center justify-center bg-paper text-ink px-10 py-5 text-[11px] font-medium uppercase tracking-[0.2em] hover:bg-earth hover:text-paper transition-colors duration-500"
            >
              Start Your Commission
            </a>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 space-y-16 lg:space-y-24 mt-12 lg:mt-0">
            {siteData.process.map((step, idx) => (
              <motion.div 
                key={step.step} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="border-t border-stone/20 pt-8 lg:pt-12 relative flex flex-col"
              >
                <span className="text-[10px] font-semibold tracking-[0.4em] text-earth uppercase mb-8">
                  PHASE {step.step}
                </span>
                <div>
                  <h4 className="text-3xl lg:text-4xl font-serif mb-6 text-paper tracking-tight">{step.title}</h4>
                  <p className="text-stone leading-relaxed font-light text-lg max-w-lg">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
