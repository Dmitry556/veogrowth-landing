
import React from 'react';
import CustomCard from '../ui/CustomCard';
import { LineChart, ArrowUpRight, Zap, DollarSign } from 'lucide-react';

const SolutionSection: React.FC = () => {
  const solutions = [
    {
      icon: <LineChart className="text-blue-400" />,
      title: "Custom Data Pipeline",
      description: "Our Smart Data System builds targeted B2B prospect lists with 10+ data points. This sharp targeting, key to our email outbound system, finds buyers others miss.",
      gradient: "from-blue-600/20 to-blue-400/5"
    },
    {
      icon: <ArrowUpRight className="text-green-400" />,
      title: "Inbox-Optimized Infrastructure",
      description: "Our Top Email Delivery Setup, with 2,500+ warming inboxes, means 90%+ of emails land. This careful prep ensures your AI-personalized emails reach main inboxes.",
      gradient: "from-green-600/20 to-green-400/5"
    },
    {
      icon: <Zap className="text-amber-400" />,
      title: "AI-Powered Personalization",
      description: "Our AI Copy Tool writes emails that fit each prospect, using key facts about their business. This smart, personal touch gets up to 3.7x more replies.",
      gradient: "from-amber-500/20 to-amber-300/5"
    },
    {
      icon: <DollarSign className="text-purple-400" />,
      title: "Performance-Based Pricing",
      description: "You only pay for qualified meetings that actually happen. No retainers, no wasted budget on campaigns that don't deliver, and no long-term commitments before you see results.",
      gradient: "from-purple-500/20 to-purple-300/5"
    }
  ];

  return (
    <section id="solutions" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-caption font-medium mb-6">
            The Difference
          </div>
          <h2 className="text-h2 font-bold tracking-tight mb-6">
            The VeoGrowth Difference: Our Smart Email Outbound System (Pay-Per-Meeting)
          </h2>
          <p className="text-body-large text-white/70 leading-body">
            Most agencies lock you into costly retainers with no guarantees. We don't. With VeoGrowth, you only pay for qualified sales meetings that happen – period. While others guess, our smart email outbound system uses good data and AI skill to build and run custom email campaigns that bring results:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <CustomCard 
              key={index} 
              variant="glass" 
              className="flex flex-col h-full"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-4`}>
                {solution.icon}
              </div>
              <h3 className="text-body font-semibold mb-2">{solution.title}</h3>
              <p className="text-caption text-white/70">{solution.description}</p>
            </CustomCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
