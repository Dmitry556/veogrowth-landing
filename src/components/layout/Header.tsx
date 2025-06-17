
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CustomButton from '../ui/CustomButton';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { trackCalendlyClick } from '@/utils/analytics';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);
  const [caseStudiesDropdownOpen, setCaseStudiesDropdownOpen] = useState(false);
  const [freeToolsDropdownOpen, setFreeToolsDropdownOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  // Blog articles for preview
  const blogArticles = [
    {
      id: '1',
      title: 'How to Create Poke-the-Bear Questions That Get Replies',
      category: 'Copywriting'
    },
    {
      id: '3', 
      title: 'How We Find Competitor & Lookalike Insights Using Public Data',
      category: 'Research'
    },
    {
      id: '8',
      title: 'How to Set Up a Cold Email Campaign That Actually Works', 
      category: 'Clay'
    }
  ];

  // Case studies for preview
  const caseStudies = [
    {
      id: 'podcast-whales-25-meetings-6-clients',
      title: 'Podcast Whales: 25 Meetings, 6 Clients in 30 Days',
      industry: 'Podcast Production Agency'
    },
    {
      id: 'employee-training-platform-42-meetings',
      title: 'Employee Training Platform: 42 Meetings in 30 Days',
      industry: 'B2B SaaS Training'
    },
    {
      id: 'zero-fee-payment-processor-52-meetings',
      title: 'Zero-Fee Payment Processor: 52 Meetings',
      industry: 'B2B Payment Processing'
    },
    {
      id: 'api-monitoring-platform-56-meetings',
      title: 'API Monitoring Platform: 56 Meetings in 90 Days',
      industry: 'Developer Tools'
    }
  ];

  // Free tools for preview
  const freeTools = [
    {
      id: 'microsoft-filter',
      title: 'Microsoft Email Filter',
      description: 'Remove Microsoft emails from your lists',
      href: '/tools/microsoft-filter'
    },
    {
      id: 'email-validator',
      title: 'Email Validator',
      description: 'Validate email addresses in bulk',
      href: '/tools/email-validator'
    },
    {
      id: 'domain-checker',
      title: 'Domain Health Checker', 
      description: 'Check your domain reputation',
      href: '/tools/domain-checker'
    }
  ];
  
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
  
  // Determine if we should show white background
  const isScrolledPastHero = scrollPosition > 100;
  const shouldShowWhiteBg = isScrolledPastHero || isHovered || isMenuOpen || blogDropdownOpen || caseStudiesDropdownOpen || freeToolsDropdownOpen;

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
  };
  
  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`transition-all duration-300 ${
          shouldShowWhiteBg 
            ? 'bg-white border-b border-gray-200 shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-2">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center">
              <Link to="/" className={`text-lg font-bold transition-colors ${shouldShowWhiteBg ? 'text-gray-900' : 'text-gray-900'}`} aria-label="Veogrowth homepage">
                <span className="text-purple-600">Veo</span>growth
              </Link>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              {/* Blog with Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setBlogDropdownOpen(true)}
                onMouseLeave={() => setBlogDropdownOpen(false)}
              >
                <button
                  className={`flex items-center text-sm transition-colors font-medium ${shouldShowWhiteBg ? 'text-gray-600 hover:text-gray-900' : 'text-gray-700 hover:text-gray-900'}`}
                >
                  Blog
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${blogDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {blogDropdownOpen && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Latest Articles</p>
                      </div>
                      {blogArticles.map((article) => (
                        <Link
                          key={article.id}
                          to={`/blog/${article.id}`}
                          className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                        >
                          <p className="text-sm font-medium text-gray-900 line-clamp-2">{article.title}</p>
                          <p className="text-xs text-purple-600 mt-1">{article.category}</p>
                        </Link>
                      ))}
                      <div className="border-t border-gray-100 mt-2">
                        <Link to="/blog" className="block px-4 py-2 text-sm text-purple-600 hover:text-purple-700 font-medium">
                          View all articles →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Case Studies with Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setCaseStudiesDropdownOpen(true)}
                onMouseLeave={() => setCaseStudiesDropdownOpen(false)}
              >
                <button
                  className={`flex items-center text-sm transition-colors font-medium ${shouldShowWhiteBg ? 'text-gray-600 hover:text-gray-900' : 'text-gray-700 hover:text-gray-900'}`}
                >
                  Case Studies
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${caseStudiesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {caseStudiesDropdownOpen && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Success Stories</p>
                      </div>
                      {caseStudies.map((study) => (
                        <Link
                          key={study.id}
                          to={`/case-studies/${study.id}`}
                          className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                        >
                          <p className="text-sm font-medium text-gray-900 line-clamp-2">{study.title}</p>
                          <p className="text-xs text-purple-600 mt-1">{study.industry}</p>
                        </Link>
                      ))}
                      <div className="border-t border-gray-100 mt-2">
                        <Link to="/case-studies" className="block px-4 py-2 text-sm text-purple-600 hover:text-purple-700 font-medium">
                          View all case studies →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Free Tools with Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setFreeToolsDropdownOpen(true)}
                onMouseLeave={() => setFreeToolsDropdownOpen(false)}
              >
                <button
                  className={`flex items-center text-sm transition-colors font-medium ${shouldShowWhiteBg ? 'text-gray-600 hover:text-gray-900' : 'text-gray-700 hover:text-gray-900'}`}
                >
                  Free Tools
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${freeToolsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {freeToolsDropdownOpen && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="w-72 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Cold Email Tools</p>
                      </div>
                      {freeTools.map((tool) => (
                        <Link
                          key={tool.id}
                          to={tool.href}
                          className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                        >
                          <p className="text-sm font-medium text-gray-900">{tool.title}</p>
                          <p className="text-xs text-gray-600 mt-1">{tool.description}</p>
                        </Link>
                      ))}
                      <div className="border-t border-gray-100 mt-2">
                        <Link to="/tools" className="block px-4 py-2 text-sm text-purple-600 hover:text-purple-700 font-medium">
                          View all tools →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Tech Stack */}
              <Link to="/tech-stack" className={`text-sm transition-colors font-medium ${shouldShowWhiteBg ? 'text-gray-600 hover:text-gray-900' : 'text-gray-700 hover:text-gray-900'}`}>
                Tech Stack
              </Link>

              {/* Pricing */}
              <button 
                onClick={handlePricingClick}
                className={`text-sm transition-colors font-medium ${shouldShowWhiteBg ? 'text-gray-600 hover:text-gray-900' : 'text-gray-700 hover:text-gray-900'}`}
              >
                Pricing
              </button>
            </nav>
            
            <div className="hidden md:block">
              <CustomButton 
                className="bg-purple-600 text-white hover:bg-purple-700 px-4 py-1.5 text-sm font-semibold"
                onClick={() => {
                  trackCalendlyClick('header');
                  window.open('https://calendly.com/veogrowth', '_blank');
                }}
              >
                Get 2 Free Meetings
              </CustomButton>
            </div>
            
            <button 
              className={`md:hidden transition-colors ${shouldShowWhiteBg ? 'text-gray-900' : 'text-gray-900'}`} 
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
        className={`bg-white border-b border-gray-200 shadow-lg absolute top-full left-0 right-0 md:hidden transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="px-4 py-4 space-y-3">
          <Link to="/blog" className={`block text-sm ${location.pathname === '/blog' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'} transition-colors py-2 font-medium`} onClick={closeMenu}>Blog</Link>
          
          <Link to="/case-studies" className={`block text-sm ${location.pathname === '/case-studies' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'} transition-colors py-2 font-medium`} onClick={closeMenu}>Case Studies</Link>
          
          <div className="border-l-2 border-gray-200 pl-4 space-y-2">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Free Tools</p>
            <Link to="/tools/microsoft-filter" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors py-1" onClick={closeMenu}>Microsoft Email Filter</Link>
            <Link to="/tools/email-validator" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors py-1" onClick={closeMenu}>Email Validator</Link>
            <Link to="/tools/domain-checker" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors py-1" onClick={closeMenu}>Domain Health Checker</Link>
          </div>
          
          <Link to="/tech-stack" className={`block text-sm ${location.pathname === '/tech-stack' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'} transition-colors py-2 font-medium`} onClick={closeMenu}>Tech Stack</Link>
          
          <button 
            onClick={() => {
              handlePricingClick();
              closeMenu();
            }}
            className="block text-sm text-gray-600 hover:text-gray-900 transition-colors py-2 font-medium w-full text-left"
          >
            Pricing
          </button>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
