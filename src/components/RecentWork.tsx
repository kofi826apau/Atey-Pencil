import { motion } from 'motion/react';
import { siteData } from '../data';

export default function RecentWork() {
  return (
    <section id="artwork" className="py-32 md:py-48 px-6 bg-paper">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-ink tracking-tight">Recent Work</h2>
          <a href="#/gallery" className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink border-b border-stone/30 pb-2 hover:border-ink transition-colors">
            View All Artwork
          </a>
        </div>
        
        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
          {siteData.portfolio.map((item, index) => {
            // Refined grid spans for a true editorial feel
            let spanClasses = "";
            let aspectClasses = "";

            switch(item.layout) {
              case "featured":
                spanClasses = "md:col-span-12 lg:col-span-8";
                aspectClasses = "aspect-[16/10]";
                break;
              case "portrait":
                spanClasses = "md:col-span-6 lg:col-span-4";
                aspectClasses = "aspect-[3/4]";
                break;
              case "landscape":
                spanClasses = "md:col-span-12 lg:col-span-8 lg:col-start-5"; // Offset on large screens
                aspectClasses = "aspect-[16/9]";
                break;
              case "square":
              default:
                spanClasses = "md:col-span-6 lg:col-span-4";
                aspectClasses = "aspect-square";
                break;
            }

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`group flex flex-col ${spanClasses}`}
              >
                <div className={`w-full overflow-hidden relative bg-paper ${aspectClasses}`}>
                  <motion.img
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                <div className="mt-8 flex flex-col md:flex-row md:justify-between md:items-baseline gap-2">
                  <h3 className="font-serif text-2xl text-ink tracking-tight">{item.title}</h3>
                  <span className="text-[10px] text-stone tracking-[0.2em] uppercase">{item.category}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <div className="mt-24 text-center md:hidden">
           <a href="#/gallery" className="inline-flex items-center justify-center border border-stone/30 text-ink px-10 py-5 text-[11px] font-medium uppercase tracking-[0.2em] hover:bg-ink hover:text-paper transition-colors duration-500">
            View All Artwork
          </a>
        </div>
      </div>
    </section>
  );
}
