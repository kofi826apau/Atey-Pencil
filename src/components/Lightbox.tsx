import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PortfolioItem } from '../types';

interface LightboxProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({ item, onClose, onNext, onPrev }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
        >
          {/* Close Button */}
          <button 
            onClick={onClose} 
            className="absolute top-6 right-6 md:top-10 md:right-10 text-paper hover:text-earth transition-colors z-50 flex items-center gap-2 group"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium mt-1">Close</span>
            <span className="text-3xl font-light">&times;</span>
          </button>

          {/* Navigation */}
          <button 
            onClick={(e) => { e.stopPropagation(); onPrev(); }} 
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-paper/50 hover:text-paper p-4 text-4xl z-50 transition-colors"
          >
            &larr;
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); onNext(); }} 
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-paper/50 hover:text-paper p-4 text-4xl z-50 transition-colors"
          >
            &rarr;
          </button>

          {/* Content */}
          <div 
            className="w-full max-w-7xl h-[85vh] flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-center relative"
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing (if we added overlay click to close)
          >
            {/* Image (Preserving aspect ratio, no heavy cropping) */}
            <div className="w-full lg:w-2/3 h-1/2 lg:h-full flex items-center justify-center relative">
              <motion.img 
                key={item.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={item.imageUrl} 
                alt={item.title} 
                className="max-w-full max-h-full object-contain shadow-2xl drop-shadow-2xl"
              />
            </div>
            
            {/* Meta Data */}
            <div className="w-full lg:w-1/3 text-paper flex flex-col justify-center text-center lg:text-left pb-12 lg:pb-0">
              <motion.div
                key={`meta-${item.id}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex items-center justify-center lg:justify-start gap-3 text-earth text-[10px] uppercase tracking-[0.2em] font-medium mb-6">
                  <span>{item.category}</span>
                  <span className="w-4 h-[1px] bg-earth/50"></span>
                  <span>{item.year}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight text-paper">{item.title}</h2>
                <p className="text-paper/70 font-light leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
