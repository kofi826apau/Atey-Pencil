import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { siteData } from '../data';
import { MessageCircle, Mail, Instagram, MapPin, ArrowRight, Image as ImageIcon } from 'lucide-react';

type EnquiryType = 
  | 'Commission a Portrait'
  | 'Existing Commission'
  | 'General Enquiry'
  | 'Collaboration'
  | 'Other';

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'General Enquiry' as EnquiryType,
    message: '',
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    
    if (formData.phone && !/^\+?[0-9\s\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number.';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const waNumber = siteData.contact.whatsapp.replace(/\D/g, '');
      const text = `Hello Atey Pencil,

My name is ${formData.name}.

I'm contacting you regarding: ${formData.type}

Message:
${formData.message}

WhatsApp:
${formData.phone || 'Not provided'}

Thank you.`;

      const encodedText = encodeURIComponent(text);
      window.open(`https://wa.me/${waNumber}?text=${encodedText}`, '_blank');
    }
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="pt-32 pb-24">
      {/* 1. HERO */}
      <section className="max-w-4xl mx-auto px-6 mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-stone mb-6">
            Get In Touch
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink mb-8 leading-tight">
            Let's Turn Your Photograph Into Art.
          </h1>
          <p className="text-lg md:text-xl text-stone font-serif max-w-2xl mx-auto mb-8 leading-relaxed">
            Have a portrait in mind? Tell me what you'd like to create and I'll get back to you with the next steps.
          </p>
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-wider text-stone/80">
            <span className="inline-block w-1 h-1 rounded-full bg-stone/40"></span>
            <p>Hand-drawn in Ghana • Available for local and international commissions</p>
            <span className="inline-block w-1 h-1 rounded-full bg-stone/40"></span>
          </div>
        </motion.div>
      </section>

      {/* 2. CONTACT OPTIONS */}
      <section className="max-w-5xl mx-auto px-6 mb-32">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Option 1 */}
          <div className="bg-earth/30 p-10 md:p-14 text-center md:text-left flex flex-col items-center md:items-start h-full">
            <h2 className="font-serif text-2xl md:text-3xl text-ink mb-4">Commission a Portrait</h2>
            <p className="text-stone leading-relaxed mb-8 flex-1">
              Ready to turn a favourite photograph into a hand-drawn pencil portrait? Send your details and let's create something meaningful.
            </p>
            <a 
              href="#/commission" 
              className="inline-flex items-center gap-3 bg-ink text-paper px-8 py-4 text-xs font-medium uppercase tracking-widest hover:bg-earth transition-colors w-full sm:w-auto justify-center"
            >
              Start a Commission <ArrowRight size={16} />
            </a>
          </div>
          
          {/* Option 2 */}
          <div className="border border-stone/20 p-10 md:p-14 text-center md:text-left flex flex-col items-center md:items-start h-full">
            <h2 className="font-serif text-2xl md:text-3xl text-ink mb-4">Have a Question?</h2>
            <p className="text-stone leading-relaxed mb-8 flex-1">
              For general enquiries, collaborations, artwork questions or anything else, feel free to get in touch.
            </p>
            <button 
              onClick={scrollToForm}
              className="inline-flex items-center gap-3 border border-ink text-ink px-8 py-4 text-xs font-medium uppercase tracking-widest hover:bg-ink hover:text-paper transition-colors w-full sm:w-auto justify-center"
            >
              Send an Enquiry <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 3 & 4. INFO & FORM */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Contact Information */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <h2 className="font-serif text-2xl mb-12 text-ink">Contact Details</h2>
            <div className="space-y-12">
              <div>
                <div className="flex items-center gap-4 mb-3 text-ink">
                  <MessageCircle size={20} className="text-stone" />
                  <h3 className="font-medium tracking-wide uppercase text-xs">WhatsApp</h3>
                </div>
                <p className="text-stone mb-4 ml-9">Chat directly with Atey Pencil</p>
                <a 
                  href={`https://wa.me/${siteData.contact.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-9 inline-flex items-center text-xs font-medium uppercase tracking-widest text-ink hover:text-stone transition-colors border-b border-ink/30 hover:border-stone pb-1"
                >
                  Chat on WhatsApp
                </a>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-3 text-ink">
                  <Mail size={20} className="text-stone" />
                  <h3 className="font-medium tracking-wide uppercase text-xs">Email</h3>
                </div>
                <p className="text-stone mb-4 ml-9">{siteData.contact.email}</p>
                <a 
                  href={`mailto:${siteData.contact.email}`}
                  className="ml-9 inline-flex items-center text-xs font-medium uppercase tracking-widest text-ink hover:text-stone transition-colors border-b border-ink/30 hover:border-stone pb-1"
                >
                  Send an Email
                </a>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-3 text-ink">
                  <Instagram size={20} className="text-stone" />
                  <h3 className="font-medium tracking-wide uppercase text-xs">Instagram</h3>
                </div>
                <p className="text-stone mb-4 ml-9">@ateypencil</p>
                <a 
                  href={siteData.contact.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-9 inline-flex items-center text-xs font-medium uppercase tracking-widest text-ink hover:text-stone transition-colors border-b border-ink/30 hover:border-stone pb-1"
                >
                  View Instagram
                </a>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-3 text-ink">
                  <MapPin size={20} className="text-stone" />
                  <h3 className="font-medium tracking-wide uppercase text-xs">Location</h3>
                </div>
                <p className="text-stone ml-9">Ghana</p>
                <p className="text-stone/70 text-sm ml-9 mt-2">
                  Based in Ghana, creating portraits for clients locally and internationally.
                </p>
              </div>
            </div>
            
            {/* Trust Note */}
            <div className="mt-16 pt-12 border-t border-stone/20">
              <p className="text-xs font-medium uppercase tracking-widest text-ink mb-3">Response Time</p>
              <p className="text-stone/80 text-sm leading-relaxed">
                Messages are typically answered as soon as possible during working hours.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="bg-white p-8 md:p-12 shadow-sm border border-stone/10">
              <h2 className="font-serif text-3xl mb-8 text-ink">Send an Enquiry</h2>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium uppercase tracking-wider text-ink mb-2">Name *</label>
                    <input 
                      type="text" 
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full bg-paper border ${errors.name ? 'border-red-500' : 'border-stone/30'} px-4 py-3 focus:outline-none focus:border-ink transition-colors text-ink placeholder-stone/50`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-2">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium uppercase tracking-wider text-ink mb-2">Email *</label>
                    <input 
                      type="email" 
                      id="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full bg-paper border ${errors.email ? 'border-red-500' : 'border-stone/30'} px-4 py-3 focus:outline-none focus:border-ink transition-colors text-ink placeholder-stone/50`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium uppercase tracking-wider text-ink mb-2">WhatsApp Number</label>
                    <input 
                      type="tel" 
                      id="phone"
                      placeholder="+233..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full bg-paper border ${errors.phone ? 'border-red-500' : 'border-stone/30'} px-4 py-3 focus:outline-none focus:border-ink transition-colors text-ink placeholder-stone/50`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-2">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="type" className="block text-xs font-medium uppercase tracking-wider text-ink mb-2">What can I help you with?</label>
                    <select 
                      id="type"
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value as EnquiryType })}
                      className="w-full bg-paper border border-stone/30 px-4 py-3 focus:outline-none focus:border-ink transition-colors text-ink appearance-none rounded-none"
                    >
                      <option value="Commission a Portrait">Commission a Portrait</option>
                      <option value="Existing Commission">Existing Commission</option>
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Collaboration">Collaboration</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium uppercase tracking-wider text-ink mb-2">Message *</label>
                  <textarea 
                    id="message"
                    rows={5}
                    placeholder="Tell me a little about what you have in mind..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full bg-paper border ${errors.message ? 'border-red-500' : 'border-stone/30'} px-4 py-3 focus:outline-none focus:border-ink transition-colors text-ink placeholder-stone/50 resize-none`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-2">{errors.message}</p>}
                </div>

                <div>
                  <label htmlFor="reference" className="block text-xs font-medium uppercase tracking-wider text-ink mb-2">Reference Photo (Optional)</label>
                  <div className="border border-dashed border-stone/30 p-6 flex flex-col items-center justify-center text-center hover:bg-earth/10 transition-colors cursor-pointer relative">
                    <input 
                      type="file" 
                      id="reference" 
                      accept="image/*"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <ImageIcon size={24} className="text-stone/50 mb-3" />
                    <p className="text-sm text-ink font-medium">Click to upload or drag and drop</p>
                    <p className="text-xs text-stone mt-1">You can attach the photograph you'd like to have drawn.</p>
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 bg-ink text-paper px-8 py-4 text-xs font-medium uppercase tracking-widest hover:bg-earth transition-colors"
                  >
                    Continue on WhatsApp <MessageCircle size={16} />
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* 7. DIRECT WHATSAPP CTA */}
      <section className="bg-earth/20 py-20 px-6 mb-24">
        <div className="max-w-3xl mx-auto text-center">
          <MessageCircle size={32} className="mx-auto text-ink mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-4">Prefer WhatsApp?</h2>
          <p className="text-stone text-lg mb-8 max-w-xl mx-auto">
            For the quickest response, send me a message directly on WhatsApp.
          </p>
          <a 
            href={`https://wa.me/${siteData.contact.whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-ink text-paper px-8 py-4 text-xs font-medium uppercase tracking-widest hover:bg-[#25D366] transition-colors w-full sm:w-auto justify-center"
          >
            <MessageCircle size={18} /> Chat with Atey Pencil
          </a>
        </div>
      </section>

      {/* 9. FAQ MINI SECTION */}
      <section className="max-w-4xl mx-auto px-6 mb-32">
        <h2 className="font-serif text-3xl text-ink mb-12 text-center">Before You Message Me</h2>
        <div className="space-y-8">
          <div className="border-b border-stone/20 pb-8">
            <h3 className="text-lg font-medium text-ink mb-3">How do I commission a portrait?</h3>
            <p className="text-stone leading-relaxed">
              Send your reference photo and commission details through the Commission page or WhatsApp.
            </p>
          </div>
          <div className="border-b border-stone/20 pb-8">
            <h3 className="text-lg font-medium text-ink mb-3">Can I send a photo before deciding?</h3>
            <p className="text-stone leading-relaxed">
              Yes. You can send your reference photo for an initial discussion.
            </p>
          </div>
          <div className="border-b border-stone/20 pb-8">
            <h3 className="text-lg font-medium text-ink mb-3">Do you accept commissions outside Ghana?</h3>
            <p className="text-stone leading-relaxed">
              International commissions may be available. Contact Atey Pencil to discuss delivery options.
            </p>
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="bg-ink text-paper py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">Have a Memory Worth Drawing?</h2>
          <p className="text-stone text-lg md:text-xl font-serif italic mb-12">
            Let's turn it into something you can keep forever.
          </p>
          <a 
            href="#/commission" 
            className="inline-flex items-center justify-center border border-paper text-paper hover:bg-paper hover:text-ink px-10 py-5 text-[11px] font-medium uppercase tracking-[0.2em] transition-colors"
          >
            Commission Your Portrait
          </a>
        </div>
      </section>
    </div>
  );
}
