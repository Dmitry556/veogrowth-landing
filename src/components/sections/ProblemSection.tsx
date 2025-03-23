
import React from 'react';
import CustomCard from '../ui/CustomCard';
import { AlertTriangle, Unlink, Database, FileQuestion, DollarSign } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: <AlertTriangle className="text-amber-400" />,
      title: "Low Response Rates",
      description: "Your cold outreach generates under 1% response rates, wasting valuable time and resources."
    },
    {
      icon: <DollarSign className="text-rose-400" />,
      title: "Wasted Budget",
      description: "You're spending on tools that promise leads but consistently fail to deliver meaningful results."
    },
    {
      icon: <Unlink className="text-blue-400" />,
      title: "Burnt Domains",
      description: "Poor email deliverability has damaged your sending reputation and landing emails in spam."
    },
    {
      icon: <FileQuestion className="text-purple-400" />,
      title: "Generic Messaging",
      description: "Your messaging gets ignored by decision-makers because it lacks personalization that resonates."
    },
    {
      icon: <Database className="text-green-400" />,
      title: "Data Gaps",
      description: "Incomplete targeting data prevents you from reaching the right accounts and decision-makers."
    }
  ];

  return (
    <section id="problems" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-caption font-medium mb-6">
              The Pipeline Problem
            </div>
            <h2 className="text-h2 font-bold tracking-tight mb-6">
              The Pipeline Problem You're Facing
            </h2>
            <p className="text-body-large text-white/70 mb-10 leading-body max-w-lg">
              Your sales team is working hard, but your competitor's pipeline keeps growing faster.
            </p>
            
            <div className="p-6 rounded-2xl border border-white/5 bg-white/5">
              <p className="text-body-large font-medium italic text-white/90">
                "What if you could turn cold email into your <span className="text-blue-400">most reliable lead source</span> - without hiring a single SDR?"
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {problems.map((problem, index) => (
              <CustomCard 
                key={index} 
                className="flex flex-col h-full animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                  {problem.icon}
                </div>
                <h3 className="text-body font-semibold mb-2">{problem.title}</h3>
                <p className="text-caption text-white/70">{problem.description}</p>
              </CustomCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
