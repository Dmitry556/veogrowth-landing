
import React, { memo } from 'react';
import CustomCard from '../ui/CustomCard';
import CustomButton from '../ui/CustomButton';
import { Check, ChevronRight } from 'lucide-react';
import { Badge } from '../ui/badge';

// Memoize each pricing card to prevent unnecessary re-renders
const PricingCard = memo(({ plan }: { plan: any }) => {
  return (
    <div 
      className={`transform transition-all duration-300 hover:-translate-y-2 ${plan.popular ? 'md:-translate-y-4' : ''}`}
    >
      <CustomCard 
        variant={plan.popular ? "gradient" : "default"}
        className={`h-full flex flex-col border ${plan.className} ${plan.popular ? 'border-blue-500/30' : ''}`}
      >
        <div className="mb-6">
          {plan.badge && (
            <div className="mb-4">
              <Badge className={`bg-gradient-to-r ${plan.badgeColor} text-white border-none px-3 py-1`}>
                {plan.badge}
              </Badge>
            </div>
          )}
          <h3 className="text-h3 font-bold mb-2">{plan.name}</h3>
          <div className="flex items-end mb-2">
            <span className="text-h2 font-bold">{plan.price}</span>
            <span className="text-body text-white/60 ml-1">{plan.description}</span>
          </div>
        </div>
        
        <div className="grow mb-6">
          <ul className="space-y-3">
            {plan.features.map((feature: string, i: number) => (
              <li key={i} className="flex items-start">
                <Check className="mr-2 text-green-400 shrink-0 mt-1" size={16} />
                <span className="text-body text-white/80">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <CustomButton 
            variant={plan.popular ? "primary" : "outline"} 
            className="w-full flex justify-center items-center"
            size="lg"
            onClick={() => window.open('https://calendly.com/veogrowth', '_blank')}
          >
            {plan.buttonText}
            <ChevronRight size={16} />
          </CustomButton>
        </div>
      </CustomCard>
    </div>
  );
});

PricingCard.displayName = 'PricingCard';

const PricingSection: React.FC = () => {
  const pricingPlans = [
    {
      name: "FREE",
      price: "$0",
      description: "",
      badge: "FREE",
      features: [
        "Get two qualified meetings that match your ICP criteria",
        "Custom prospect targeting",
        "No setup fees",
        "No commitments",
        "Process starts within 48 hours",
        "Includes meeting recordings & notes"
      ],
      buttonText: "Get 2 Free Meetings",
      popular: false,
      className: "bg-white/5 border-blue-500/10 hover:border-blue-500/30",
      badgeColor: "from-blue-500 to-blue-700"
    },
    {
      name: "Meeting Packages",
      price: "Starting at $X00",
      description: "per meeting",
      badge: "RECOMMENDED",
      features: [
        "Purchase packages of 5, 10, or 20+ meetings",
        "One-time setup fee after free meetings",
        "Custom-branded email infrastructure",
        "Guaranteed deliverability",
        "Only pay for meetings that happen",
        "ICP-focused targeting",
        "Weekly performance reports",
        "30-day timeline for first meetings"
      ],
      buttonText: "Get Meeting Packages",
      popular: true,
      className: "border-blue-500/20 hover:border-blue-500/40",
      badgeColor: "from-blue-500 to-purple-500"
    },
    {
      name: "Enterprise Packages",
      price: "Custom",
      description: "Pricing",
      badge: "CUSTOM",
      features: [
        "Higher volume meeting packages",
        "Priority scheduling",
        "Dedicated campaign manager",
        "Multi-channel outreach",
        "Advanced targeting parameters",
        "CRM integration",
        "Weekly strategy calls",
        "Detailed attribution tracking"
      ],
      buttonText: "Contact Sales",
      popular: false,
      className: "bg-white/5 border-purple-500/10 hover:border-purple-500/30",
      badgeColor: "from-purple-500 to-purple-700"
    }
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-element">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-caption font-medium mb-6">
            Pricing & Packages
          </div>
          <h2 className="text-h2 font-bold tracking-tight mb-6">
            Simple, results-based pricing
          </h2>
          <p className="text-body-large text-white/70 leading-body">
            Start with 2 free meetings before purchasing additional meeting packages. Only pay for qualified meetings that actually happen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
        
        <div className="text-center mt-16 fade-in-element">
          <p className="text-body-large text-white/70 mb-8">
            Every month of delay costs you approximately $105,000 in missed pipeline opportunities.
          </p>
          
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 rounded-2xl p-6">
              <h3 className="text-h3 font-semibold mb-4">We're Different Because:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="mr-2 text-green-400 shrink-0 mt-1" size={16} />
                  <span className="text-body text-white/80">
                    We think like a B2B data company, not just an email agency
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 text-green-400 shrink-0 mt-1" size={16} />
                  <span className="text-body text-white/80">
                    We built our own infrastructure instead of relying on the same tools everyone uses
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 text-green-400 shrink-0 mt-1" size={16} />
                  <span className="text-body text-white/80">
                    Performance-based pricing model where you only pay for results
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 text-green-400 shrink-0 mt-1" size={16} />
                  <span className="text-body text-white/80">
                    We work with companies across diverse B2B industries
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-6">
              <h3 className="text-h3 font-semibold mb-4">Why Start Now?</h3>
              <p className="text-body text-white/80 mb-6">
                Waiting costs you significant pipeline opportunities. The sooner you start, the sooner you can tap into new revenue sources.
              </p>
              <CustomButton 
                size="lg" 
                className="w-full justify-center"
                onClick={() => window.open('https://calendly.com/veogrowth', '_blank')}
              >
                Get 2 Free Meetings <ChevronRight className="ml-1" size={16} />
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
