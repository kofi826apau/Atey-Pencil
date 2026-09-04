import { motion } from 'motion/react';
import { siteData } from '../data';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-paper pt-32 pb-24">
      
      {/* Hero / Artist Portrait */}
      <section className="px-6 max-w-[1400px] mx-auto mb-32 md:mb-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1 lg:col-span-6"
          >
            <h2 className="text-[10px] md:text-xs font-semibold text-earth tracking-[0.3em] uppercase mb-8">
              The Story Behind Atey Pencil
            </h2>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-serif text-ink mb-10 leading-[1.05] tracking-tight text-balance">
              The Person<br/>Behind the Pencil.
            </h1>
            <div className="space-y-6 text-stone font-light leading-relaxed text-base md:text-lg">
              <p>
                Hello, I am Atey. For as long as I can remember, I have been captivated by the interplay of light, shadow, and human expression. Growing up in Ghana, I found my voice not through words, but through the patient, deliberate strokes of a graphite pencil.
              </p>
              <p>
                What began as a childhood fascination evolved into a lifelong dedication to the craft of photorealistic and expressive portraiture. I founded Atey Pencil with a single mission: to craft heirloom-quality artworks that honor the memories and milestones of the people who commission them.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="order-1 lg:order-2 lg:col-span-5 lg:col-start-8 w-full"
          >
            <div className="aspect-[4/5] w-full overflow-hidden bg-canvas">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 2, ease: "easeOut" }}
                src="/images/artwork/about-01.jpg" 
                alt="Atey - Portrait Artist"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Quote */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-4xl lg:text-5xl font-serif text-ink italic leading-relaxed text-balance"
          >
            "I don't just draw what I see. I try to capture what makes the person unforgettable."
          </motion.p>
        </div>
      </section>

      {/* More Than Graphite & The Process */}
      <section className="px-6 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">More Than Graphite</h2>
            <div className="w-12 h-[1px] bg-earth mb-8"></div>
            <div className="space-y-6 text-stone font-light leading-relaxed">
              <p>
                A photograph captures a fraction of a second, but a hand-drawn portrait captures time itself. I spend hours studying the subtleties of a face—the way the eyes catch the light, the micro-expressions that define a smile, the texture of the skin. 
              </p>
              <p>
                My focus is never solely on reproducing a photograph with mechanical accuracy. Instead, I focus on capturing emotion, personality, and memories. Every smudge of charcoal and precise pencil stroke is placed with the intention of breathing life into the paper, creating a piece of art that resonates deeply with its owner.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">The Atey Pencil Process</h2>
            <div className="w-12 h-[1px] bg-earth mb-8"></div>
            <div className="space-y-8 text-stone font-light leading-relaxed">
              <div className="flex gap-4">
                <span className="text-earth font-serif text-xl">01.</span>
                <div>
                  <h4 className="font-serif text-ink text-lg mb-2">Observation</h4>
                  <p className="text-sm">Carefully studying the reference photograph to understand the underlying structure, lighting, and mood.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-earth font-serif text-xl">02.</span>
                <div>
                  <h4 className="font-serif text-ink text-lg mb-2">Foundation</h4>
                  <p className="text-sm">Mapping out the proportions with light, forgiving strokes to establish the architecture of the portrait.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-earth font-serif text-xl">03.</span>
                <div>
                  <h4 className="font-serif text-ink text-lg mb-2">Rendering</h4>
                  <p className="text-sm">Layering graphite and charcoal, building depth and contrast to bring the subject's unique features to life.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* The Tools */}
      <section className="py-32 md:py-48 px-6 mb-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-ink mb-6 tracking-tight">The Tools</h2>
            <p className="text-stone max-w-2xl mx-auto font-light leading-relaxed text-lg">
              Mastery requires not just skill, but an uncompromising commitment to quality materials.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Tool visual */}
            <div className="lg:col-span-7">
              <div className="aspect-[16/10] overflow-hidden bg-paper">
                <motion.img 
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  src="/images/artwork/tools-01.jpg" 
                  alt="Drawing tools and graphite pencils"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Tool List */}
            <div className="lg:col-span-4 lg:col-start-9 space-y-10">
              <div className="border-b border-stone/20 pb-4">
                <h4 className="font-serif text-xl text-ink mb-2">Graphite Pencils</h4>
                <p className="text-stone text-sm font-light">From hard H grades for precise outlines to soft B grades for deep, rich shadows.</p>
              </div>
              <div className="border-b border-stone/20 pb-4">
                <h4 className="font-serif text-xl text-ink mb-2">Quality Drawing Paper</h4>
                <p className="text-stone text-sm font-light">Heavyweight, acid-free archival cotton paper that holds the medium and stands the test of time.</p>
              </div>
              <div className="border-b border-stone/20 pb-4">
                <h4 className="font-serif text-xl text-ink mb-2">Precision Erasers</h4>
                <p className="text-stone text-sm font-light">Kneaded and mono-zero erasers used not just to correct, but to actively draw and lift highlights.</p>
              </div>
              <div className="border-b border-stone/20 pb-4">
                <h4 className="font-serif text-xl text-ink mb-2">Blending Tools</h4>
                <p className="text-stone text-sm font-light">Tortillons, blending stumps, and soft brushes for creating smooth skin textures and seamless gradients.</p>
              </div>
              <div className="pb-4">
                <h4 className="font-serif text-xl text-ink mb-2">Other Artistic Materials</h4>
                <p className="text-stone text-sm font-light">Matte fixatives to protect the final artwork from smudging and UV damage.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 text-center py-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] md:text-xs font-semibold text-earth tracking-[0.3em] uppercase mb-6">Hand drawn in Ghana. Shipped Worldwide.</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-ink mb-10 tracking-tight text-balance">
            Have a photograph you'd love to turn into art?
          </h2>
          <a 
            href={`https://wa.me/${siteData.contact.whatsapp.replace(/\\D/g, '')}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center bg-ink text-paper px-10 py-5 text-[11px] font-medium uppercase tracking-[0.2em] hover:bg-earth transition-colors duration-500"
          >
            Chat with Atey Pencil
          </a>
        </div>
      </section>

    </div>
  );
}
