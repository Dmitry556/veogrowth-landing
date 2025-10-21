
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CustomButton from '../ui/CustomButton';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { trackCalendlyClick } from '@/utils/analytics';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownCloseTimeout = useRef<number | null>(null);

  const caseStudies = [
    { href: '/case-studies/podcast-whales-25-meetings-6-clients', title: 'Podcast Whales · 25 Meetings', tag: 'Creative Services' },
    { href: '/case-studies/zero-fee-payment-processor-52-meetings', title: 'Zero-Fee Processor · 52 Meetings', tag: 'Payments' },
    { href: '/case-studies/api-monitoring-platform-56-meetings', title: 'API Monitoring · 56 Meetings', tag: 'Dev Tools' },
    { href: '/case-studies/employee-training-platform-42-meetings', title: 'Employee Training · 42 Meetings', tag: 'B2B SaaS' }
  ];

  const freeTools = [
    { href: '/tools/microsoft-filter', title: 'Microsoft Filter', tag: 'LIST HYGIENE' },
    { href: '/tools/roi-calculator', title: 'ROI Calculator', tag: 'PIPELINE FORECAST' },
    { href: '/tools/domain-checker', title: 'Domain Checker', tag: 'INBOX HEALTH' }
  ];

  const navItems = [
    { key: 'case-studies', label: 'Case Studies', items: caseStudies, fallback: '/case-studies', footer: 'View all case studies →' },
    { key: 'tools', label: 'Free Tools', items: freeTools, fallback: '/tools', footer: 'See all tools →' },
    { key: 'stack', label: 'Stack', href: '/tech-stack' }
  ];
  
  const handleScroll = () => {
    requestAnimationFrame(() => {
      setScrollPosition(window.scrollY);
    });
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setOpenDropdown(null);
    cancelDropdownClose();
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
    cancelDropdownClose();
  };

  const isScrolledPastHero = scrollPosition > 8;
  const isElevated = isScrolledPastHero || isHovered || isMenuOpen || openDropdown !== null;

  const openDropdownMenu = (key: string) => {
    if (dropdownCloseTimeout.current) {
      window.clearTimeout(dropdownCloseTimeout.current);
      dropdownCloseTimeout.current = null;
    }
    setOpenDropdown(key);
  };

  const scheduleDropdownClose = () => {
    if (dropdownCloseTimeout.current) {
      window.clearTimeout(dropdownCloseTimeout.current);
    }
    dropdownCloseTimeout.current = window.setTimeout(() => {
      setOpenDropdown(null);
      dropdownCloseTimeout.current = null;
    }, 140);
  };

  const cancelDropdownClose = () => {
    if (dropdownCloseTimeout.current) {
      window.clearTimeout(dropdownCloseTimeout.current);
      dropdownCloseTimeout.current = null;
    }
  };

  // Handle pricing scroll
  const handlePricingClick = () => {
    if (location.pathname === '/') {
      const pricingElement = document.getElementById('pricing');
      if (pricingElement) {
        pricingElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = '/#pricing';
    }
    setOpenDropdown(null);
    cancelDropdownClose();
  };

  const handleFaqClick = () => {
    if (location.pathname === '/') {
      const faqElement = document.getElementById('faq');
      if (faqElement) {
        faqElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = '/#faq';
    }
    setOpenDropdown(null);
    cancelDropdownClose();
  };
  
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes navDropdownReveal {
              0% {
                opacity: 0;
                transform: translateY(8px) scale(0.98);
              }
              100% {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }

            .dropdown-panel {
              animation: navDropdownReveal 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
              will-change: transform, opacity;
            }
          `
        }}
      />
      <header 
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`transition-all duration-200 ${
          isElevated
            ? 'bg-slate-950/75 border-b border-white/10 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-2">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center">
              <Link
                to="/"
                aria-label="Veogrowth homepage"
                className="text-[13px] font-semibold uppercase tracking-[0.28em] text-white/80 hover:text-white transition-colors"
              >
                Veogrowth
              </Link>
            </div>
            
            <nav className="hidden md:flex items-center gap-5">
              {navItems.map(item => {
                const isActive = item.href ? location.pathname.startsWith(item.href) : false;

                if (item.items) {
                  return (
                    <div
                      key={item.key}
                      className="relative"
                      onMouseEnter={() => openDropdownMenu(item.key)}
                      onMouseLeave={scheduleDropdownClose}
                      onFocus={() => openDropdownMenu(item.key)}
                    >
                      <button
                        className={`flex items-center gap-1 text-[14px] font-medium tracking-tight transition-colors ${openDropdown === item.key || isActive ? 'text-white' : isElevated ? 'text-slate-300 hover:text-white' : 'text-white/80 hover:text-white'}`}
                      >
                        {item.label}
                        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${openDropdown === item.key ? 'rotate-180' : ''}`} />
                      </button>

                      {openDropdown === item.key && (
                        <div
                          className="absolute top-full left-0 pt-3 z-50"
                          onMouseEnter={cancelDropdownClose}
                          onMouseLeave={scheduleDropdownClose}
                        >
                          <div className="w-[18rem] rounded-xl border border-white/8 bg-slate-950/95 backdrop-blur-md shadow-[0_18px_36px_-28px_rgba(8,9,11,0.75)] dropdown-panel">
                            <div className="py-2.5">
                              {item.items.map((entry) => (
                                <Link
                                  key={entry.href}
                                  to={entry.href}
                                  className="block px-4 py-2 min-h-[54px] hover:bg-white/7 transition-colors text-slate-100"
                                  onClick={() => setOpenDropdown(null)}
                                >
                                  <div className="flex h-full flex-col justify-center gap-1">
                                    <p className="text-[13px] font-medium text-slate-100 leading-tight line-clamp-2">{entry.title}</p>
                                    {'tag' in entry && (
                                      <p className="text-[11px] uppercase tracking-[0.22em] text-emerald-300/80 leading-snug">{entry.tag}</p>
                                    )}
                                  </div>
                                </Link>
                              ))}
                            </div>
                            {item.fallback && (
                              <div className="border-t border-white/10 px-4 py-2">
                                <Link
                                  to={item.fallback}
                                  className="text-[12px] font-medium text-emerald-300/80 hover:text-emerald-200 transition-colors"
                                  onClick={() => setOpenDropdown(null)}
                                >
                                  {item.footer}
                                </Link>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.key}
                    to={item.href || '#'}
                    className={`text-[14px] font-medium tracking-tight transition-colors ${isActive ? 'text-white' : isElevated ? 'text-slate-300 hover:text-white' : 'text-white/80 hover:text-white'}`}
                    onMouseEnter={() => {
                      cancelDropdownClose();
                      setOpenDropdown(null);
                    }}
                    onClick={() => setOpenDropdown(null)}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <button 
                onClick={handlePricingClick}
                className={`text-[14px] font-medium tracking-tight transition-colors ${isElevated ? 'text-slate-300 hover:text-white' : 'text-white/80 hover:text-white'}`}
              >
                Pricing
              </button>
              <button 
                onClick={handleFaqClick}
                className={`text-[14px] font-medium tracking-tight transition-colors ${isElevated ? 'text-slate-300 hover:text-white' : 'text-white/80 hover:text-white'}`}
              >
                FAQ
              </button>
            </nav>

            <div className="hidden md:block">
              <button
                onClick={() => {
                  trackCalendlyClick('header');
                  window.open('https://calendly.com/veogrowth/discovery', '_blank');
                }}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-4 py-2 text-[13px] font-medium text-white shadow-[0_8px_20px_-12px_rgba(8,9,11,0.9)] transition-transform hover:-translate-y-[1px] hover:border-emerald-300/40 hover:text-emerald-100"
              >
                Start the Free Pilot
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
            
            <button 
              className={`md:hidden transition-colors ${isElevated ? 'text-slate-200' : 'text-slate-100'}`} 
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
        className={`absolute top-full left-0 right-0 md:hidden transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} bg-slate-950/90 border-b border-white/10 backdrop-blur-lg shadow-[0_32px_60px_-28px_rgba(8,9,11,0.7)]`}
        aria-hidden={!isMenuOpen}
      >
        <div className="px-5 py-6 space-y-4">
          {navItems.map(item => (
            item.items ? (
              <div key={item.key} className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-500">{item.label}</p>
                <div className="space-y-1.5">
                  {item.items.map(entry => (
                    <Link
                      key={entry.href}
                      to={entry.href}
                      className="block text-sm text-slate-200 hover:text-white transition-colors"
                      onClick={closeMenu}
                    >
                      {entry.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.key}
                to={item.href || '#'}
                className={`block text-sm ${item.href && location.pathname.startsWith(item.href) ? 'text-emerald-300' : 'text-slate-200 hover:text-white'} transition-colors py-2 font-medium tracking-tight`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            )
          ))}

          <button 
            onClick={() => {
              handlePricingClick();
              closeMenu();
            }}
            className="block text-sm text-slate-200 hover:text-white transition-colors py-2 font-medium tracking-tight w-full text-left"
          >
            Pricing
          </button>

          <button 
            onClick={() => {
              handleFaqClick();
              closeMenu();
            }}
            className="block text-sm text-slate-200 hover:text-white transition-colors py-2 font-medium tracking-tight w-full text-left"
          >
            FAQ
          </button>
          
          <button
            onClick={() => {
              trackCalendlyClick('header-mobile');
              window.open('https://calendly.com/veogrowth/discovery', '_blank');
            }}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-4 py-2 text-[13px] font-medium text-white shadow-[0_8px_20px_-12px_rgba(8,9,11,0.9)] transition-colors hover:border-emerald-300/40 hover:text-emerald-100"
          >
            Start the Free Pilot
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
