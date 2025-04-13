
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CustomButton from '../ui/CustomButton';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const isMobile = useIsMobile();
  const location = useLocation();
  
  const handleScroll = () => {
    // Use requestAnimationFrame for better scroll performance
    requestAnimationFrame(() => {
      setScrollPosition(window.scrollY);
    });
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  // Calculate opacity based on scroll position, with a minimum of 0.4 for better contrast
  const opacity = Math.max(0.4, Math.min(scrollPosition / 300, 0.9));

  // Determine if we're on blog pages
  const isBlogPage = location.pathname.includes('/blog');
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div 
        className="glass"
        style={{ opacity }}
        aria-hidden="true"
      >
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold text-white" aria-label="Veogrowth homepage">
                <span className="text-blue-400">Veo</span>growth
              </Link>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              {!isBlogPage ? (
                <>
                  <a href="#problems" className="text-caption text-white hover:text-white transition-colors">Problems</a>
                  <a href="#solutions" className="text-caption text-white hover:text-white transition-colors">Solutions</a>
                  <a href="#results" className="text-caption text-white hover:text-white transition-colors">Results</a>
                  <a href="#process" className="text-caption text-white hover:text-white transition-colors">Process</a>
                  <a href="#faq" className="text-caption text-white hover:text-white transition-colors">FAQ</a>
                  <Link to="/blog" className="text-caption text-white hover:text-white transition-colors">Blog</Link>
                </>
              ) : (
                <>
                  <Link to="/" className="text-caption text-white hover:text-white transition-colors">Home</Link>
                  <Link to="/blog" className={`text-caption ${location.pathname === '/blog' ? 'text-white' : 'text-white hover:text-white'} transition-colors`}>Blog</Link>
                </>
              )}
            </nav>
            
            <div className="hidden md:block">
              <CustomButton onClick={() => window.open('https://calendly.com/veogrowth', '_blank')}>Get 2 Free Meetings</CustomButton>
            </div>
            
            <button 
              className="md:hidden text-white" 
              onClick={toggleMenu} 
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`glass absolute top-full left-0 right-0 md:hidden transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
        aria-hidden={!isMenuOpen}
        style={{ opacity: 0.95 }} // Higher opacity for better contrast
      >
        <div className="px-4 py-5 space-y-5">
          {!isBlogPage ? (
            <>
              <a href="#problems" className="block text-base text-white hover:text-white transition-colors py-2.5" onClick={closeMenu}>Problems</a>
              <a href="#solutions" className="block text-base text-white hover:text-white transition-colors py-2.5" onClick={closeMenu}>Solutions</a>
              <a href="#results" className="block text-base text-white hover:text-white transition-colors py-2.5" onClick={closeMenu}>Results</a>
              <a href="#process" className="block text-base text-white hover:text-white transition-colors py-2.5" onClick={closeMenu}>Process</a>
              <a href="#faq" className="block text-base text-white hover:text-white transition-colors py-2.5" onClick={closeMenu}>FAQ</a>
              <Link to="/blog" className="block text-base text-white hover:text-white transition-colors py-2.5" onClick={closeMenu}>Blog</Link>
            </>
          ) : (
            <>
              <Link to="/" className="block text-base text-white hover:text-white transition-colors py-2.5" onClick={closeMenu}>Home</Link>
              <Link to="/blog" className={`block text-base ${location.pathname === '/blog' ? 'text-white' : 'text-white hover:text-white'} transition-colors py-2.5`} onClick={closeMenu}>Blog</Link>
            </>
          )}
          <div className="pt-2">
            <CustomButton 
              className="w-full justify-center mt-2" 
              onClick={() => {
                window.open('https://calendly.com/veogrowth', '_blank');
                closeMenu();
              }}
            >
              Get 2 Free Meetings
            </CustomButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
