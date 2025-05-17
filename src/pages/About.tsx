
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CustomButton from '@/components/ui/CustomButton';
import { Briefcase, User, Linkedin, Mail } from 'lucide-react';

const About = () => {
  useEffect(() => {
    // Update document title
    document.title = "About Us - Veogrowth";
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          {/* Header Section */}
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <h1 className="text-h1 font-bold mb-6 tracking-tight">About VeoGrowth</h1>
            <div className="h-1 w-20 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
            <p className="text-body-large text-white/80 max-w-2xl mx-auto">
              Building scalable and predictable B2B pipeline growth systems with AI-driven strategies
            </p>
          </div>
          
          {/* Mission Section */}
          <section className="mb-24">
            <div className="glass-card p-10 rounded-2xl">
              <div className="flex items-start gap-6 mb-4">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <Briefcase className="h-6 w-6 text-blue-400" />
                </div>
                <h2 className="text-h2 font-bold tracking-tight">Our Mission: Predictable B2B Pipeline Growth</h2>
              </div>
              <div className="ml-16">
                <p className="text-body text-white/80 mb-6 leading-relaxed">
                  VeoGrowth is dedicated to helping B2B SaaS companies achieve scalable and predictable sales pipeline growth. 
                  We leverage advanced AI, data-driven strategies, and a highly personalized approach to cold outbound, 
                  ensuring you connect with your ideal prospects effectively.
                </p>
                <p className="text-body text-white/80 leading-relaxed">
                  Our model is built on performance – you only pay for qualified meetings that appear on your calendar.
                </p>
              </div>
            </div>
          </section>
          
          {/* Founder Section */}
          <section className="mb-24">
            <div className="glass-card p-10 rounded-2xl">
              <div className="flex items-start gap-6 mb-6">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <User className="h-6 w-6 text-blue-400" />
                </div>
                <h2 className="text-h2 font-bold tracking-tight">The Founder: Dmitry Pinchuk</h2>
              </div>
              <div className="ml-16">
                <p className="text-body text-white/80 mb-6 leading-relaxed">
                  Dmitry Pinchuk, founder of VeoGrowth, is a specialist in AI-driven Go-To-Market strategies. 
                  With a strong background in successfully scaling sales operations and generating over 500 qualified leads 
                  monthly at Novaly (acquired), and now pioneering performance-based, AI-driven cold outbound systems 
                  with VeoGrowth, Dmitry is passionate about building efficient outbound systems that deliver tangible results.
                </p>
                <a 
                  href="https://www.linkedin.com/in/dmitrypinchuk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect with Dmitry on LinkedIn
                </a>
              </div>
            </div>
          </section>
          
          {/* Why Partner Section */}
          <section className="mb-24">
            <div className="glass-card p-10 rounded-2xl">
              <h2 className="text-h2 font-bold mb-10 tracking-tight">Why Partner with VeoGrowth?</h2>
              
              <ul className="space-y-8">
                <li className="flex">
                  <div className="bg-blue-500/20 p-2 rounded-lg h-10 w-10 flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 rounded-full bg-gradient-primary"></div>
                  </div>
                  <div>
                    <h3 className="text-h3 font-semibold mb-2">Performance-Based Results</h3>
                    <p className="text-body text-white/80 leading-relaxed">
                      Start risk-free with two complimentary qualified meetings. Our success is tied directly to yours.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="bg-blue-500/20 p-2 rounded-lg h-10 w-10 flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 rounded-full bg-gradient-primary"></div>
                  </div>
                  <div>
                    <h3 className="text-h3 font-semibold mb-2">AI-Powered Precision</h3>
                    <p className="text-body text-white/80 leading-relaxed">
                      We utilize sophisticated AI for deep prospect research and hyper-personalization at scale, 
                      ensuring your outreach resonates.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="bg-blue-500/20 p-2 rounded-lg h-10 w-10 flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 rounded-full bg-gradient-primary"></div>
                  </div>
                  <div>
                    <h3 className="text-h3 font-semibold mb-2">Robust Infrastructure</h3>
                    <p className="text-body text-white/80 leading-relaxed">
                      Our meticulously managed sending infrastructure maximizes deliverability and protects your domain reputation.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="bg-blue-500/20 p-2 rounded-lg h-10 w-10 flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 rounded-full bg-gradient-primary"></div>
                  </div>
                  <div>
                    <h3 className="text-h3 font-semibold mb-2">Transparent Process</h3>
                    <p className="text-body text-white/80 leading-relaxed">
                      We provide clear weekly reporting and maintain open communication, so you're always informed.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          
          {/* Contact Section */}
          <section className="text-center max-w-2xl mx-auto">
            <h2 className="text-h2 font-bold mb-6 tracking-tight">Get in Touch</h2>
            <p className="text-body text-white/80 mb-10 leading-relaxed">
              Ready to see how VeoGrowth can transform your outbound sales?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <CustomButton 
                size="lg"
                onClick={() => window.open('https://calendly.com/veogrowth', '_blank')}
                className="flex items-center justify-center"
              >
                Schedule Your Free Consultation
              </CustomButton>
              
              <a 
                href="mailto:hello@veogrowth.com"
                className="inline-flex items-center justify-center gap-2 text-white bg-white/10 hover:bg-white/15 transition-colors px-6 py-3 rounded-md"
              >
                <Mail size={20} />
                hello@veogrowth.com
              </a>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
