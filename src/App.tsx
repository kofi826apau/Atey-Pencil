import { useState, useEffect, useRef, Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const HomePage = lazy(() => import('./pages/HomePage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const CommissionPage = lazy(() => import('./pages/CommissionPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// Fallback loader to show while a page component is being loaded
const PageLoader = () => (
  <div className="w-full h-full min-h-[60vh] flex items-center justify-center bg-paper">
    <div className="w-8 h-8 border-2 border-earth/20 border-t-earth rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  const isInternalNav = useRef(false);

  const isGallery = currentHash === '#/gallery';
  const isCommission = currentHash === '#/commission';
  const isAbout = currentHash === '#/about';
  const isContact = currentHash === '#/contact';

  const pageKey = isGallery ? 'gallery' : isCommission ? 'commission' : isAbout ? 'about' : isContact ? 'contact' : 'home';
  
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
        <Suspense fallback={<PageLoader />}>
          {isGallery ? <GalleryPage /> : isCommission ? <CommissionPage /> : isAbout ? <AboutPage /> : isContact ? <ContactPage /> : <HomePage />}
        </Suspense>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}
