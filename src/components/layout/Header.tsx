
import React, { useState, useEffect } from 'react';
import CustomButton from '../ui/CustomButton';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const opacity = Math.min(scrollPosition / 300, 0.8);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div 
        className="glass"
        style={{ opacity: 0.2 + opacity }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="text-xl font-bold text-white">
                <span className="gradient-text">Veo</span>growth
              </a>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#problems" className="text-caption text-white/80 hover:text-white transition-colors">Problems</a>
              <a href="#solutions" className="text-caption text-white/80 hover:text-white transition-colors">Solutions</a>
              <a href="#results" className="text-caption text-white/80 hover:text-white transition-colors">Results</a>
              <a href="#process" className="text-caption text-white/80 hover:text-white transition-colors">Process</a>
              <a href="#faq" className="text-caption text-white/80 hover:text-white transition-colors">FAQ</a>
            </nav>
            
            <div className="hidden md:block">
              <CustomButton onClick={() => window.open('https://calendly.com/veogrowth', '_blank')}>Launch my free campaign</CustomButton>
            </div>
            
            <button className="md:hidden text-white" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`glass absolute top-full left-0 right-0 md:hidden transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="py-4 px-6 space-y-4">
          <a href="#problems" className="block text-caption text-white/80 hover:text-white transition-colors py-2" onClick={toggleMenu}>Problems</a>
          <a href="#solutions" className="block text-caption text-white/80 hover:text-white transition-colors py-2" onClick={toggleMenu}>Solutions</a>
          <a href="#results" className="block text-caption text-white/80 hover:text-white transition-colors py-2" onClick={toggleMenu}>Results</a>
          <a href="#process" className="block text-caption text-white/80 hover:text-white transition-colors py-2" onClick={toggleMenu}>Process</a>
          <a href="#faq" className="block text-caption text-white/80 hover:text-white transition-colors py-2" onClick={toggleMenu}>FAQ</a>
          <CustomButton className="w-full justify-center" onClick={() => window.open('https://calendly.com/veogrowth', '_blank')}>Launch my free campaign</CustomButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
