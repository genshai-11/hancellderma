import { Link } from 'react-router-dom';
import { Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-on-surface text-surface py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-3xl font-headline font-bold mb-4">Hancell Derma</h2>
          <p className="text-surface-variant font-body mb-6 max-w-sm leading-7">
            Korean derma science crafted for visible results — a complete skincare collection designed to cleanse, treat, moisturise, and protect.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-surface-variant hover:text-primary-fixed transition-colors" aria-label="Instagram">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="mailto:contact@hancellderma.com" className="text-surface-variant hover:text-primary-fixed transition-colors" aria-label="Email Hancell Derma">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-headline font-bold mb-4 text-primary-fixed">Explore</h4>
          <ul className="space-y-2 font-body text-surface-variant">
            <li><Link to="/products" className="hover:text-white transition-colors">Product Line</Link></li>
            <li><Link to="/routine" className="hover:text-white transition-colors">Skin Routine</Link></li>
            <li><Link to="/science" className="hover:text-white transition-colors">Science & Tech</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-headline font-bold mb-4 text-primary-fixed">Connect</h4>
          <ul className="space-y-2 font-body text-surface-variant">
            <li><Link to="/contact" className="hover:text-white transition-colors">General Inquiries</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Partnerships</Link></li>
            <li><a href="mailto:contact@hancellderma.com" className="hover:text-white transition-colors">Stockists</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-outline-variant/20 text-center text-surface-variant font-body text-sm">
        <p>&copy; {new Date().getFullYear()} Hancell Derma. All rights reserved.</p>
      </div>
    </footer>
  );
}
