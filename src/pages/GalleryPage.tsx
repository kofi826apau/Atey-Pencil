import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { siteData } from '../data';
import Lightbox from '../components/Lightbox';

const FILTERS = ["All", "Portraits", "Couples", "Families", "Celebrities", "Custom"];

// Mapping the display filter to the data structure category
const categoryMap: Record<string, string> = {
  "Portraits": "Portrait",
  "Couples": "Couple",
  "Families": "Family",
  "Celebrities": "Celebrity",
  "Custom": "Custom"
};

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = siteData.portfolio.filter(item => {
    if (activeFilter === "All") return true;
    return item.category === categoryMap[activeFilter];
  });

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  
  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };
  
  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className="min-h-screen bg-paper pt-40 pb-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-24 md:mb-32">
          <p className="text-[10px] md:text-xs font-semibold text-earth tracking-[0.3em] uppercase mb-6">
            THE ATEY PENCIL COLLECTION
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-serif text-ink mb-8 tracking-tight text-balance">
            Every Line Has a Story.
          </h1>
          <p className="text-lg md:text-xl text-stone max-w-2xl mx-auto leading-relaxed font-light text-pretty">
            Explore a collection of hand-drawn pencil portraits created by Atey Pencil.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-24">
          {FILTERS.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all duration-300 pb-2 border-b border-transparent ${
                activeFilter === filter 
                  ? "border-ink text-ink font-medium" 
                  : "text-stone hover:text-ink hover:border-stone/30"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-16">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                key={item.id}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="w-full overflow-hidden relative bg-[#EAE8E3]">
                  <motion.img
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
                
                <div className="mt-6 flex flex-col md:flex-row md:justify-between md:items-baseline gap-2">
                  <h3 className="font-serif text-2xl text-ink tracking-tight group-hover:text-earth transition-colors duration-500">{item.title}</h3>
                  <span className="text-[10px] text-stone tracking-[0.2em] uppercase">{item.year}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-stone text-lg font-light">No artworks found in this category.</p>
          </div>
        )}

      </div>

      {/* Lightbox Component */}
      <Lightbox 
        item={lightboxIndex !== null ? filteredItems[lightboxIndex] : null}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  );
}
