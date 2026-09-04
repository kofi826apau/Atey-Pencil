import { siteData } from '../data';

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-paper pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
          
          {/* Brand & Quote */}
          <div className="max-w-md">
            <h2 className="font-serif text-3xl md:text-4xl tracking-[0.1em] uppercase mb-6 text-paper">
              {siteData.studioName}
            </h2>
            <p className="text-stone font-serif italic text-lg lg:text-xl leading-relaxed">
              "{siteData.tagline}"
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24 text-[11px] font-medium uppercase tracking-[0.2em] text-stone">
            <div className="flex flex-col gap-6">
              <a href="#/gallery" className="hover:text-paper transition-colors">Artwork</a>
              <a href="#/commission" className="hover:text-paper transition-colors">Commissions</a>
              <a href="#/about" className="hover:text-paper transition-colors">About</a>
            </div>
            <div className="flex flex-col gap-6">
              <a href="#/#faq" className="hover:text-paper transition-colors">FAQ</a>
              <a href="#/contact" className="hover:text-paper transition-colors">Contact</a>
              <a href={`https://wa.me/${siteData.contact.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer" className="hover:text-paper transition-colors">WhatsApp</a>
            </div>
            <div className="flex flex-col gap-6">
              <a href={siteData.contact.instagram} target="_blank" rel="noreferrer" className="hover:text-paper transition-colors">Instagram</a>
              <a href={siteData.contact.tiktok} target="_blank" rel="noreferrer" className="hover:text-paper transition-colors">TikTok</a>
              <a href={`mailto:${siteData.contact.email}`} className="hover:text-paper transition-colors">Email</a>
            </div>
          </div>
        </div>

        {/* Footer Statement & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone/20 text-[10px] uppercase tracking-[0.2em] text-stone/60">
          <p>Hand drawn in {siteData.contact.location}.</p>
          <p className="mt-4 md:mt-0">© {new Date().getFullYear()} {siteData.studioName}</p>
        </div>
      </div>
    </footer>
  );
}
