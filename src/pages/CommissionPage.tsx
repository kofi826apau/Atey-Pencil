import React, { useState } from 'react';
import { motion } from 'motion/react';
import { siteData } from '../data';

export default function CommissionPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    type: 'Portrait',
    people: '1 Person',
    size: 'A4',
    budget: '',
    deadline: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // reset form
      setFormData({
        name: '', email: '', whatsapp: '', type: 'Portrait', people: '1 Person', size: 'A4', budget: '', deadline: '', notes: ''
      });
    }, 1500);
  };

  const buildWhatsAppLink = () => {
    const message = `Hello Atey Pencil, I would like to commission a portrait.
Name: ${formData.name || '[Your Name]'}
Type: ${formData.type}
Size: ${formData.size}
Number of People: ${formData.people}
Budget: ${formData.budget || '[Your Budget]'}
Deadline: ${formData.deadline || '[Your Deadline]'}
Notes: ${formData.notes || 'None'}

Please let me know the next steps.`;
    const encodedMessage = encodeURIComponent(message);
    const waNumber = siteData.contact.whatsapp.replace(/\D/g, '');
    return `https://wa.me/${waNumber}?text=${encodedMessage}`;
  };

  return (
    <div className="min-h-screen bg-paper pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-6 text-center max-w-4xl mx-auto mb-24 md:mb-32">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-ink mb-6">
          Commission a Portrait
        </h1>
        <p className="text-base md:text-xl text-stone max-w-2xl mx-auto font-light leading-relaxed">
          Give a photograph a second life — as a hand-drawn work of art.
        </p>
      </section>

      {/* How it Works */}
      <section className="px-6 max-w-7xl mx-auto mb-32 md:mb-48 border-t border-stone/20 pt-16">
        <h2 className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.3em] text-earth text-center mb-16">The Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {siteData.process.map((step, idx) => (
            <motion.div 
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: idx * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-center flex flex-col items-center"
            >
              <span className="text-[10px] font-semibold tracking-[0.4em] text-earth uppercase mb-6">PHASE {step.step}</span>
              <h3 className="text-2xl font-serif text-ink mb-4 tracking-tight">{step.title}</h3>
              <p className="text-base font-light text-stone leading-relaxed max-w-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Options */}
      <section className="px-6 max-w-[1400px] mx-auto mb-32 md:mb-48">
        <h2 className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.3em] text-earth text-center mb-16">Pricing Guide</h2>
        <div className="flex flex-col gap-0 max-w-4xl mx-auto border-t border-stone/20">
          {siteData.pricing.map((tier, idx) => (
            <motion.div 
              key={tier.size}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone/20 py-8 group hover:bg-canvas/50 transition-colors px-4"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-serif text-ink mb-2">{tier.size}</h3>
                <p className="text-base font-light text-stone">{tier.description}</p>
              </div>
              <div className="mt-4 sm:mt-0 text-right">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink">{tier.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Form & Info Section */}
      <section className="px-6 max-w-[1400px] mx-auto mb-32 md:mb-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Info Sidebar */}
          <div className="lg:col-span-4 lg:col-start-1">
            <h2 className="text-2xl font-serif text-ink mb-6">What I Need</h2>
            <p className="text-sm text-stone font-light mb-8 leading-relaxed">
              To provide you with an accurate quote and timeline, please include the following details in your inquiry:
            </p>
            <ul className="space-y-4 text-sm text-ink font-light mb-12">
              <li className="flex items-start gap-3">
                <span className="text-earth mt-1">•</span>
                <span>Clear, high-quality reference photograph</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-earth mt-1">•</span>
                <span>Preferred paper size</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-earth mt-1">•</span>
                <span>Number of people to be drawn</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-earth mt-1">•</span>
                <span>Preferred delivery method/location</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-earth mt-1">•</span>
                <span>Any special instructions or deadlines</span>
              </li>
            </ul>

            <div className="p-8 bg-paper border border-stone/20 text-center">
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-semibold text-earth mb-4">Fastest Response</h3>
              <p className="text-sm text-stone font-light mb-8">
                Prefer to chat directly? Send me a message on WhatsApp with your details and photo for a quicker quote.
              </p>
              <a 
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center bg-ink text-paper px-6 py-5 text-[11px] font-medium uppercase tracking-[0.2em] hover:bg-earth transition-colors"
              >
                Chat with Atey Pencil
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 lg:col-start-6">
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-canvas border border-stone/10 p-12 text-center h-full flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-earth/20 text-earth flex items-center justify-center text-2xl mb-6">
                  ✓
                </div>
                <h3 className="text-2xl font-serif text-ink mb-4">Request Received</h3>
                <p className="text-stone font-light leading-relaxed max-w-md">
                  Thank you for your commission inquiry. I will review your details and get back to you shortly to confirm pricing and timeline.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-ink border-b border-ink pb-1 hover:text-earth hover:border-earth transition-colors"
                >
                  Submit Another Request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-medium text-ink/70">Name</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleChange} className="bg-transparent border-b border-stone/30 py-3 text-base text-ink focus:outline-none focus:border-ink transition-colors rounded-none" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-medium text-ink/70">Email</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="bg-transparent border-b border-stone/30 py-3 text-base text-ink focus:outline-none focus:border-ink transition-colors rounded-none" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-medium text-ink/70">WhatsApp Number</label>
                    <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} className="bg-transparent border-b border-stone/30 py-3 text-base text-ink focus:outline-none focus:border-ink transition-colors rounded-none" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-medium text-ink/70">Portrait Type</label>
                    <select name="type" value={formData.type} onChange={handleChange} className="bg-transparent border-b border-stone/30 py-3 text-base text-ink focus:outline-none focus:border-ink transition-colors appearance-none rounded-none cursor-pointer">
                      <option>Personal Portrait</option>
                      <option>Couple Portrait</option>
                      <option>Family Portrait</option>
                      <option>Memorial / Tribute</option>
                      <option>Custom Request</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-medium text-ink/70">Number of People</label>
                    <select name="people" value={formData.people} onChange={handleChange} className="bg-transparent border-b border-stone/30 py-3 text-base text-ink focus:outline-none focus:border-ink transition-colors appearance-none rounded-none cursor-pointer">
                      <option>1 Person</option>
                      <option>2 People</option>
                      <option>3 People</option>
                      <option>4+ People</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-medium text-ink/70">Preferred Size</label>
                    <select name="size" value={formData.size} onChange={handleChange} className="bg-transparent border-b border-stone/30 py-3 text-base text-ink focus:outline-none focus:border-ink transition-colors appearance-none rounded-none cursor-pointer">
                      <option>A5 Portrait</option>
                      <option>A4 Portrait</option>
                      <option>A3 Portrait</option>
                      <option>A2 Portrait</option>
                      <option>Undecided / Need Advice</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-medium text-ink/70">Budget (Optional)</label>
                    <input type="text" name="budget" value={formData.budget} onChange={handleChange} placeholder="e.g. GHS 1,500" className="bg-transparent border-b border-stone/30 py-3 text-base text-ink placeholder:text-stone/50 focus:outline-none focus:border-ink transition-colors rounded-none" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-medium text-ink/70">Deadline (Optional)</label>
                    <input type="text" name="deadline" value={formData.deadline} onChange={handleChange} placeholder="e.g. October 15th" className="bg-transparent border-b border-stone/30 py-3 text-base text-ink placeholder:text-stone/50 focus:outline-none focus:border-ink transition-colors rounded-none" />
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-4">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-medium text-ink/70">Additional Notes</label>
                  <textarea name="notes" value={formData.notes} onChange={handleChange} rows={3} className="bg-transparent border-b border-stone/30 py-3 text-base text-ink focus:outline-none focus:border-ink transition-colors resize-none rounded-none"></textarea>
                </div>

                <div className="flex flex-col gap-2 mt-4">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-medium text-ink/70">Reference Photo</label>
                  <input type="file" className="text-sm file:mr-4 file:py-2 file:px-0 file:border-0 file:border-r file:border-stone/20 file:pr-4 file:text-[10px] file:font-medium file:uppercase file:tracking-[0.2em] file:bg-transparent file:text-ink cursor-pointer border-b border-stone/30 py-2 bg-transparent transition-colors rounded-none" />
                  <p className="text-[10px] text-stone mt-1">Accepted formats: JPG, PNG, PDF. Max size: 5MB.</p>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-ink text-paper py-5 text-[11px] font-medium uppercase tracking-[0.2em] hover:bg-earth transition-all duration-500 disabled:opacity-70 mt-12"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Commission Inquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="px-6 max-w-4xl mx-auto mb-24 md:mb-32">
        <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-earth text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {siteData.faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-stone/20 pb-6">
              <h4 className="font-serif text-xl text-ink mb-3">{faq.question}</h4>
              <p className="text-stone font-light text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-ink text-paper py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] md:text-xs font-semibold text-earth tracking-[0.3em] uppercase mb-8">Hand drawn in Ghana. Shipped Worldwide.</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-10 text-balance">Ready to Turn Your Photo Into Art?</h2>
          <a 
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center bg-paper text-ink px-10 py-5 text-[11px] font-medium uppercase tracking-[0.2em] hover:bg-earth hover:text-paper transition-colors duration-500"
          >
            Chat with Atey Pencil
          </a>
        </div>
      </section>

    </div>
  );
}
