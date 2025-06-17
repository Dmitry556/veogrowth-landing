
import React from 'react';
import CustomButton from '../ui/CustomButton';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="relative pt-24 pb-12 overflow-hidden">
      
      {/* Main Footer */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div>
            <Link to="/" className="text-xl font-bold text-foreground mb-6 block" aria-label="Veogrowth homepage">
              <span className="text-primary">Veo</span>growth
            </Link>
            <p className="text-caption text-foreground/75 mb-6">
              Your expert partner for more B2B sales using smart email outbound.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" aria-label="Twitter" className="text-foreground/60 hover:text-foreground transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com" aria-label="Facebook" className="text-foreground/60 hover:text-foreground transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-foreground/60 hover:text-foreground transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-foreground/60 hover:text-foreground transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com" aria-label="GitHub" className="text-foreground/60 hover:text-foreground transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h2 className="text-body font-semibold text-foreground mb-6">Company</h2>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-caption text-foreground/75 hover:text-foreground transition-colors">About Us</Link></li>
              <li><a href="/careers" className="text-caption text-foreground/75 hover:text-foreground transition-colors">Careers</a></li>
              <li><Link to="/blog" className="text-caption text-foreground/75 hover:text-foreground transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-body font-semibold text-foreground mb-6">Legal</h2>
            <ul className="space-y-3">
              <li><Link to="/privacy-policy" className="text-caption text-foreground/75 hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-caption text-foreground/75 hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link to="/security" className="text-caption text-foreground/75 hover:text-foreground transition-colors">Security</Link></li>
              <li><Link to="/compliance" className="text-caption text-foreground/75 hover:text-foreground transition-colors">Compliance</Link></li>
              <li><Link to="/gdpr" className="text-caption text-foreground/75 hover:text-foreground transition-colors">GDPR</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-caption text-foreground/60 mb-4 md:mb-0">
            © {new Date().getFullYear()} Veogrowth. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-caption text-foreground/75 hover:text-foreground transition-colors">Privacy</Link>
            <Link to="/terms-of-service" className="text-caption text-foreground/75 hover:text-foreground transition-colors">Terms</Link>
            <Link to="/security" className="text-caption text-foreground/75 hover:text-foreground transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
