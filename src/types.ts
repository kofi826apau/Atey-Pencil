export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  layout: "featured" | "portrait" | "landscape" | "square";
  year: string;
  description: string;
}

export interface PricingTier {
  size: string;
  description: string;
  price: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  context: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ArtistConfig {
  artistName: string;
  studioName: string;
  tagline: string;
  about: string;
  contact: {
    email: string;
    whatsapp: string;
    instagram: string;
    tiktok: string;
    location: string;
  };
  portfolio: PortfolioItem[];
  pricing: PricingTier[];
  process: ProcessStep[];
  testimonials: Testimonial[];
  faqs: FAQItem[];
}
