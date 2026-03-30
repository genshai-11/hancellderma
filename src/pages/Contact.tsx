import { ChevronDown, Clock, Globe, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div>
      <section className="pt-32 pb-16 bg-surface-container-lowest border-b border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <div className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4">Get in Touch</div>
          <h1 className="text-4xl lg:text-6xl font-bold font-headline tracking-tighter mb-6 text-on-surface">
            Inquiries, Partnerships & Stockists
          </h1>
          <p className="text-lg text-on-surface-variant font-body max-w-2xl mx-auto leading-relaxed">
            Whether you're a retailer, distributor, clinic, or skincare enthusiast, we'd love to hear from you. Reach out for partnership opportunities, stockist availability, or general product inquiries.
          </p>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-white p-8 md:p-12 rounded-3xl editorial-shadow border border-outline-variant/20">
              <h2 className="text-3xl font-bold font-headline mb-8 text-on-surface">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-on-surface mb-2 font-label">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Jane" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-on-surface mb-2 font-label">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-on-surface mb-2 font-label">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="jane@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-on-surface mb-2 font-label">Inquiry Type</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none">
                      <option>General Inquiry</option>
                      <option>Product Information</option>
                      <option>Partnership / Distribution</option>
                      <option>Wholesale / Stockist</option>
                      <option>Press / Media</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-outline pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-on-surface mb-2 font-label">Message</label>
                  <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none" placeholder="Tell us how we can help."></textarea>
                </div>
                <button type="button" className="w-full primary-gradient-btn text-white px-8 py-4 rounded-xl font-headline font-semibold text-lg hover:opacity-90 transition-all">
                  Contact Hancell
                </button>
              </form>
            </div>

            <div>
              <div className="mb-16">
                <h3 className="text-2xl font-bold font-headline mb-6 text-on-surface">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-on-surface mb-1">General Inquiries</h4>
                      <p className="text-on-surface-variant font-body mb-1">Questions about products, routines, or the Hancell brand:</p>
                      <a href="mailto:contact@hancellderma.com" className="text-primary font-semibold hover:underline">contact@hancellderma.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-on-surface mb-1">Partnerships & Stockists</h4>
                      <p className="text-on-surface-variant font-body mb-1">Interested in carrying Hancell Derma in your store, clinic, or market?</p>
                      <a href="mailto:contact@hancellderma.com" className="text-primary font-semibold hover:underline">contact@hancellderma.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-on-surface mb-1">Business Hours</h4>
                      <p className="text-on-surface-variant font-body">Monday - Friday<br />9:00 AM - 6:00 PM KST</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold font-headline mb-6 text-on-surface">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {[
                    {
                      q: 'Who is Hancell Derma suitable for?',
                      a: 'Hancell formulas are designed for all skin types, including routines focused on hydration, brightening, pore care, and daily protection.',
                    },
                    {
                      q: 'Do you offer a complete skincare routine?',
                      a: 'Yes. The collection is designed to support a full routine across cleansing, treatment, moisturising, and UV protection.',
                    },
                    {
                      q: 'Can I contact you about distribution or stockist opportunities?',
                      a: 'Absolutely. We welcome inquiries from retailers, distributors, clinics, and partners interested in Hancell Derma.',
                    },
                  ].map((faq, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-outline-variant/20">
                      <h4 className="font-headline font-bold text-on-surface mb-2">{faq.q}</h4>
                      <p className="text-on-surface-variant font-body text-sm">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
