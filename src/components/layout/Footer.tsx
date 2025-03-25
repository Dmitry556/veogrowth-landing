
import React from 'react';
import CustomButton from '../ui/CustomButton';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative pt-24 pb-12 overflow-hidden">
      {/* CTA Section */}
      <div className="container mx-auto px-6 mb-24">
        <div className="glass-card rounded-3xl py-16 px-8 text-center max-w-4xl mx-auto">
          <h2 className="text-h2 font-bold mb-6 letter-spacing-tight">Ready to supercharge your growth?</h2>
          <p className="text-body-large text-white/80 mb-8 max-w-2xl mx-auto">
            Run free campaigns to test if your offer works with outbound. Partner with us only if you like the results
          </p>
          <CustomButton 
            size="lg" 
            className="mx-auto"
            onClick={() => window.open('https://calendly.com/veogrowth', '_blank')}
          >
            Launch my free campaign
          </CustomButton>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div>
            <a href="#" className="text-xl font-bold text-white mb-6 block">
              <span className="gradient-text">Veo</span>growth
            </a>
            <p className="text-caption text-white/60 mb-6">
              The agency partner for businesses looking to scale their growth operations and drive unprecedented revenue.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-body font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-caption text-white/60 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-caption text-white/60 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-caption text-white/60 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-caption text-white/60 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-caption text-white/60 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-body font-semibold text-white mb-6">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-caption text-white/60 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-caption text-white/60 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-caption text-white/60 hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="text-caption text-white/60 hover:text-white transition-colors">Compliance</a></li>
              <li><a href="#" className="text-caption text-white/60 hover:text-white transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-caption text-white/40 mb-4 md:mb-0">
            © {new Date().getFullYear()} Veogrowth. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-caption text-white/40 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-caption text-white/40 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-caption text-white/40 hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
