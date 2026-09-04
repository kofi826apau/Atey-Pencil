import { ArtistConfig } from './types';

// ============================================================================
// SITE CONFIGURATION
// ============================================================================

export const siteData: ArtistConfig = {
  artistName: "Atey",
  studioName: "Atey Pencil",
  tagline: "Created for people who want to keep their favourite moments close.",
  about: "I am Atey, a portrait artist based in Ghana. I specialize in exceptionally detailed, hand-drawn pencil portraits. My work is driven by a deep passion for capturing human emotion, personality, and the subtle details that make every individual unique. Hand drawn in Ghana, my portraits are created for people around the world who want to keep their favourite moments close.",
  
  contact: {
    email: "inquiries@ateypencil.com",
    whatsapp: "+233200000000",
    instagram: "https://instagram.com/ateypencil",
    tiktok: "https://tiktok.com/@ateypencil",
    location: "Ghana"
  },

  portfolio: [
    {
      id: "1",
      title: "Silent Symphony",
      category: "Portrait",
      imageUrl: "/images/artwork/portrait-01.jpg", 
      layout: "featured",
      year: "2025",
      description: "An intimate exploration of stillness. Graphite and charcoal on 100% cotton archival paper."
    },
    {
      id: "2",
      title: "Generations",
      category: "Family",
      imageUrl: "/images/artwork/family-01.jpg",
      layout: "portrait",
      year: "2024",
      description: "A commissioned piece capturing the bond between a father and son, emphasizing texture and shared expressions."
    },
    {
      id: "3",
      title: "The Vow",
      category: "Couple",
      imageUrl: "/images/artwork/couple-01.jpg",
      layout: "square",
      year: "2025",
      description: "A wedding anniversary commission highlighting the subtle details of affection and lighting."
    },
    {
      id: "4",
      title: "Enduring Memory",
      category: "Portrait",
      imageUrl: "/images/artwork/portrait-02.jpg",
      layout: "landscape",
      year: "2023",
      description: "A memorial tribute piece drawn with high-contrast charcoal for a dramatic, timeless presence."
    },
    {
      id: "5",
      title: "Soulful Eyes",
      category: "Custom",
      imageUrl: "/images/artwork/portrait-03.jpg",
      layout: "portrait",
      year: "2026",
      description: "Detailed graphite study focusing purely on the emotional depth communicated through the eyes."
    },
    {
      id: "6",
      title: "Golden Anniversary",
      category: "Couple",
      imageUrl: "/images/artwork/couple-02.jpg",
      layout: "square",
      year: "2024",
      description: "Celebrating fifty years of marriage. This piece perfectly balances softness and intricate facial details."
    },
    {
      id: "7",
      title: "Iconic",
      category: "Celebrity",
      imageUrl: "/images/artwork/portrait-04.jpg",
      layout: "portrait",
      year: "2025",
      description: "A tribute portrait of a celebrated artist, utilizing bold, expressive pencil strokes."
    },
    {
      id: "8",
      title: "The Siblings",
      category: "Family",
      imageUrl: "/images/artwork/family-02.jpg",
      layout: "landscape",
      year: "2026",
      description: "A large-scale A2 commission capturing three siblings. Patiently layered graphite to create realistic depth."
    }
  ],

  pricing: [
    { size: "A5 Portrait", description: "Perfect for a single-person portrait.", price: "Starting from GHS XXX" },
    { size: "A4 Portrait", description: "A timeless gift or personal keepsake.", price: "Starting from GHS XXX" },
    { size: "A3 Portrait", description: "A detailed statement piece.", price: "Starting from GHS XXX" },
    { size: "Couple Portrait", description: "Two people drawn together.", price: "Starting from GHS XXX" }
  ],

  process: [
    { 
      step: "01", 
      title: "Choose Your Portrait", 
      description: "Decide on the size and scope of your commission, whether it's a single portrait, couple, or family piece." 
    },
    { 
      step: "02", 
      title: "Send Your Photo", 
      description: "Provide a clear, high-quality reference photograph for the best possible detail and accuracy." 
    },
    { 
      step: "03", 
      title: "Atey Pencil Creates Your Artwork", 
      description: "I meticulously hand-draw your portrait with patience and emotion, ready to be delivered to you." 
    }
  ],
  
  testimonials: [
    {
      id: "t1",
      quote: "Atey captured my late father perfectly. The attention to detail in his eyes brought me to tears. It's more than a drawing, it's a piece of him.",
      name: "Sarah M.",
      context: "Memorial Commission"
    },
    {
      id: "t2",
      quote: "We commissioned a portrait for our first wedding anniversary. The level of realism and emotion is absolutely breathtaking. Highly recommended.",
      name: "David & Elena",
      context: "Anniversary Portrait"
    },
    {
      id: "t3",
      quote: "The patience and precision Atey Pencil puts into his craft is unmatched. The final piece was delivered safely and looked even better in person.",
      name: "Kwame A.",
      context: "Family Portrait"
    }
  ],
  
  faqs: [
    {
      question: "How long does a drawing take?",
      answer: "A typical portrait takes between 2 to 4 weeks depending on the size and complexity. Rush commissions may be available upon request."
    },
    {
      question: "What are the payment terms?",
      answer: "A 50% non-refundable deposit is required to secure your booking. The remaining balance is due upon completion and approval of the artwork before shipping."
    },
    {
      question: "Do you offer revisions?",
      answer: "I provide progress updates during the drawing process. Minor adjustments can be made, but major structural changes are not possible once rendering has begun."
    },
    {
      question: "What makes a good reference photo?",
      answer: "Clear, high-resolution photographs taken in natural light work best. The more detail I can see in the eyes and skin texture, the better the final portrait will be."
    },
    {
      question: "How is the artwork delivered?",
      answer: "I am based in Ghana and ship securely both locally and internationally. Artwork is carefully treated with a museum-grade fixative, sandwiched between protective layers, and shipped securely in a rigid mailer or tube depending on size."
    },
    {
      question: "Is this digital or physical artwork?",
      answer: "Every piece is 100% physical, hand-drawn on premium archival cotton paper using professional graphite and charcoal."
    },
    {
      question: "Do you accept rush commissions?",
      answer: "Yes, rush commissions are occasionally accepted for a premium fee, provided my schedule allows. Please indicate your deadline when inquiring."
    }
  ]
};
