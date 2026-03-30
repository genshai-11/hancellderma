import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm animate-fade-up">
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto gap-6">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-on-surface font-headline whitespace-nowrap interactive-scale">
          Hancell Derma
        </Link>
        <div className="hidden lg:flex items-center gap-6 font-headline tracking-tight font-semibold text-sm xl:text-base">
          <Link to="/products" className={`nav-link-underline ${isActive('/products') ? 'is-active text-primary' : 'text-on-surface hover:text-primary-container'}`}>Products</Link>
          <Link to="/routine" className={`nav-link-underline ${isActive('/routine') ? 'is-active text-primary' : 'text-on-surface hover:text-primary-container'}`}>Routine</Link>
          <Link to="/science" className={`nav-link-underline ${isActive('/science') ? 'is-active text-primary' : 'text-on-surface hover:text-primary-container'}`}>Science & Tech</Link>
          <Link to="/about" className={`nav-link-underline ${isActive('/about') ? 'is-active text-primary' : 'text-on-surface hover:text-primary-container'}`}>About</Link>
          <Link to="/contact" className={`nav-link-underline ${isActive('/contact') ? 'is-active text-primary' : 'text-on-surface hover:text-primary-container'}`}>Contact</Link>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <Link to="/products" className="primary-gradient text-white px-6 py-2 rounded-lg font-headline font-semibold transition-transform active:scale-95 hover:opacity-90 whitespace-nowrap interactive-scale">
            Explore Our Range
          </Link>
        </div>
      </div>
    </nav>
  );
}
