import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { siteData } from '../data';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="fixed top-0 w-full bg-paper/90 backdrop-blur-md z-50 border-b border-stone/10">
      <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
        
        {/* Logo/Wordmark */}
        <a href="#/" className="font-serif font-medium text-xl tracking-[0.15em] text-ink uppercase relative z-[60]">
          {siteData.studioName}
        </a>
        
        {/* Navigation - Hidden on mobile (<768px) */}
        <nav className="hidden md:flex gap-6 lg:gap-8 text-[10px] lg:text-[11px] font-medium uppercase tracking-[0.15em] text-stone">
          <a href="#/" className="hover:text-ink transition-colors duration-300">Home</a>
          <a href="#/gallery" className="hover:text-ink transition-colors duration-300">Artwork</a>
          <a href="#/commission" className="hover:text-ink transition-colors duration-300">Commissions</a>
          <a href="#/about" className="hover:text-ink transition-colors duration-300">About</a>
          <a href="#/#faq" className="hover:text-ink transition-colors duration-300">FAQ</a>
          <a href="#/contact" className="hover:text-ink transition-colors duration-300">Contact</a>
        </nav>

        {/* Primary CTA - Hidden on mobile */}
        <div className="hidden md:block">
          <a 
            href={`https://wa.me/${siteData.contact.whatsapp.replace(/\D/g, '')}`} 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center justify-center bg-ink text-paper px-6 py-3 text-[10px] font-medium uppercase tracking-[0.2em] hover:bg-earth transition-colors duration-500"
          >
            Chat with Atey Pencil
          </a>
        </div>

        {/* Mobile Menu Button - Visible on mobile (<768px) */}
        <button
          className="md:hidden relative z-[60] p-2 -mr-2 text-ink focus:outline-none focus:ring-2 focus:ring-stone/20 rounded-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-paper z-50 flex flex-col justify-center items-center h-[100dvh] overflow-y-auto pt-24 pb-12 px-6"
            onClick={closeMenu}
          >
            <nav 
              className="flex flex-col items-center gap-8 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <a href="#/" onClick={closeMenu} className="font-serif text-2xl text-ink hover:text-earth transition-colors">Home</a>
              <a href="#/gallery" onClick={closeMenu} className="font-serif text-2xl text-ink hover:text-earth transition-colors">Artwork</a>
              <a href="#/commission" onClick={closeMenu} className="font-serif text-2xl text-ink hover:text-earth transition-colors">Commissions</a>
              <a href="#/about" onClick={closeMenu} className="font-serif text-2xl text-ink hover:text-earth transition-colors">About</a>
              <a href="#/#faq" onClick={closeMenu} className="font-serif text-2xl text-ink hover:text-earth transition-colors">FAQ</a>
              <a href="#/contact" onClick={closeMenu} className="font-serif text-2xl text-ink hover:text-earth transition-colors">Contact</a>
              
              <div className="w-12 h-[1px] bg-stone/20 my-2"></div>
              
              <a 
                href="#/commission" 
                onClick={closeMenu}
                className="inline-flex items-center justify-center bg-ink text-paper px-10 py-5 text-[11px] font-medium uppercase tracking-[0.2em] hover:bg-earth transition-colors w-full sm:w-auto"
              >
                Commission a Portrait
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
