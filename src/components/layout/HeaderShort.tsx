
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { trackCalendlyClick } from '@/utils/analytics';

const HeaderShort: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    requestAnimationFrame(() => {
      setScrollPosition(window.scrollY);
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const isScrolledPastHero = scrollPosition > 8;
  const isElevated = isScrolledPastHero || isHovered || isMenuOpen;

  const scrollTo = (id: string) => {
    if (location.pathname === '/') {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${id}`;
    }
    closeMenu();
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[9999] transition-colors duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ minHeight: '64px' }}
    >
      <div
        className={`transition-all duration-200 backdrop-blur-md ${
          isElevated
            ? 'bg-slate-950/90 border-b border-white/10'
            : 'bg-slate-950/95 border-b border-white/10 lg:bg-transparent lg:border-0'
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-2">
          <div className="flex items-center justify-between h-12">
            <Link
              to="/"
              aria-label="Veogrowth homepage"
              className="text-[13px] font-semibold uppercase tracking-[0.28em] text-white/80 hover:text-white transition-colors"
            >
              Veogrowth
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-5">
              <button
                onClick={() => scrollTo('results')}
                className={`text-[14px] font-medium tracking-tight transition-colors ${isElevated ? 'text-slate-300 hover:text-white' : 'text-white/80 hover:text-white'}`}
              >
                Proof
              </button>
              <button
                onClick={() => scrollTo('pricing')}
                className={`text-[14px] font-medium tracking-tight transition-colors ${isElevated ? 'text-slate-300 hover:text-white' : 'text-white/80 hover:text-white'}`}
              >
                Pricing
              </button>
            </nav>

            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  trackCalendlyClick('header');
                  window.open('https://calendly.com/veogrowth/discovery', '_blank');
                }}
                className="hidden lg:inline-flex items-center gap-2 rounded-full border border-white/15 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-4 py-2 text-[13px] font-medium text-white shadow-[0_8px_20px_-12px_rgba(8,9,11,0.9)] transition-transform hover:-translate-y-[1px] hover:border-emerald-300/40 hover:text-emerald-100"
              >
                Book a Scoping Call
                <ArrowRight className="h-3 w-3" />
              </button>

              <button
                className={`lg:hidden transition-colors ${isElevated ? 'text-slate-200' : 'text-slate-100'}`}
                onClick={toggleMenu}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`absolute top-full left-0 right-0 md:hidden transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} bg-slate-950/90 border-b border-white/10 backdrop-blur-lg shadow-[0_32px_60px_-28px_rgba(8,9,11,0.7)]`}
        aria-hidden={!isMenuOpen}
      >
        <div className="px-5 py-6 space-y-4">
          <button
            onClick={() => scrollTo('results')}
            className="block text-sm text-slate-200 hover:text-white transition-colors py-2 font-medium tracking-tight w-full text-left"
          >
            Proof
          </button>
          <button
            onClick={() => scrollTo('pricing')}
            className="block text-sm text-slate-200 hover:text-white transition-colors py-2 font-medium tracking-tight w-full text-left"
          >
            Pricing
          </button>
          <button
            onClick={() => {
              trackCalendlyClick('header-mobile');
              window.open('https://calendly.com/veogrowth/discovery', '_blank');
            }}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-4 py-2 text-[13px] font-medium text-white shadow-[0_8px_20px_-12px_rgba(8,9,11,0.9)] transition-colors hover:border-emerald-300/40 hover:text-emerald-100"
          >
            Book a Scoping Call
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderShort;
