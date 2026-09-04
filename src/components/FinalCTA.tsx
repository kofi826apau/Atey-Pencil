import { siteData } from '../data';

export default function FinalCTA() {
  return (
    <section className="py-32 md:py-48 px-6 bg-paper text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-serif text-ink mb-8 leading-[1.1]">
          Your Favourite Photograph Could Become a Work of Art.
        </h2>
        <p className="text-base md:text-xl text-stone mb-12 font-light max-w-2xl mx-auto">
          Turn a meaningful photograph into a timeless hand-drawn portrait by Atey Pencil.
        </p>
        <a 
          href={`mailto:${siteData.contact.email}`} 
          className="inline-flex items-center justify-center bg-ink text-paper px-12 py-5 text-xs font-medium uppercase tracking-[0.2em] hover:bg-earth transition-colors duration-500"
        >
          Commission Your Portrait
        </a>
      </div>
    </section>
  );
}
