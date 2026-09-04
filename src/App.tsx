import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import CommissionPage from './pages/CommissionPage';
import AboutPage from './pages/AboutPage';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  const isInternalNav = useRef(false);

  const isGallery = currentHash === '#/gallery';
  const isCommission = currentHash === '#/commission';
  const isAbout = currentHash === '#/about';
  const pageKey = isGallery ? 'gallery' : isCommission ? 'commission' : isAbout ? 'about' : 'home';
  
  const previousPageKey = useRef(pageKey);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const a = target.closest('a');
      if (a) {
        const href = a.getAttribute('href');
        if (href && href.startsWith('#/')) {
          const currentHashStr = window.location.hash || '#/';
          if (href === currentHashStr) {
            // Clicking the exact same link you're already on
            window.scrollTo(0, 0);
          } else {
            // Navigating to a new hash
            isInternalNav.current = true;
          }
        }
      }
    };
    
    window.addEventListener('click', handleGlobalClick);

    const onHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    
    window.addEventListener('hashchange', onHashChange);
    
    return () => {
      window.removeEventListener('click', handleGlobalClick);
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  // Handle scroll resets for page navigation
  useEffect(() => {
    const isPageChange = previousPageKey.current !== pageKey;
    previousPageKey.current = pageKey;

    if (isPageChange) {
      // Always scroll to top when the main page component changes
      window.scrollTo(0, 0);
      // Fallback for rendering delays
      setTimeout(() => window.scrollTo(0, 0), 10);
      setTimeout(() => window.scrollTo(0, 0), 50);
    } else if (isInternalNav.current && !currentHash.startsWith('#/#')) {
      // Also scroll to top if user clicks a direct page link they are already on
      window.scrollTo(0, 0);
    }

    isInternalNav.current = false;
  }, [currentHash, pageKey]);

  // Handle smooth scrolling for anchor links (e.g., #/#faq)
  useEffect(() => {
    if (currentHash.startsWith('#/#')) {
      const id = currentHash.replace('#/#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50); // slight delay to allow layout painting
    }
  }, [currentHash]);

  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-earth selection:text-paper font-sans flex flex-col">
      <Header />
      <main className="flex-1">
        {isGallery ? <GalleryPage /> : isCommission ? <CommissionPage /> : isAbout ? <AboutPage /> : <HomePage />}
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}
