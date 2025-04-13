
import React, { memo } from 'react';
import CustomCard from '../ui/CustomCard';
import { AlertTriangle, Unlink, Database, FileQuestion, DollarSign } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

// Memoize the problem card to prevent unnecessary re-renders
const ProblemCard = memo(({ problem, index }: { problem: any, index: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '50px',
  });

  return (
    <div 
      ref={ref}
      className={`transition-opacity duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <CustomCard className="flex flex-col h-full">
        <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4">
          {problem.icon}
        </div>
        <h3 className="text-body font-semibold mb-2">{problem.title}</h3>
        <p className="text-caption text-white/70">{problem.description}</p>
      </CustomCard>
    </div>
  );
});

ProblemCard.displayName = 'ProblemCard';

const ProblemSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
        <div 
          ref={ref}
          className={`transition-all duration-500 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} mb-10 text-center`}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-caption font-medium mb-6">
            The Pipeline Problem
          </div>
          <h2 className="text-h2 font-bold tracking-tight mb-10">
            The Pipeline Problem You're Facing
          </h2>
        </div>
        
        {/* 5-column layout for problems */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          {problems.map((problem, index) => (
            <ProblemCard key={index} problem={problem} index={index} />
          ))}
        </div>
        
        {/* Quote without the paragraph */}
        <div className="max-w-2xl mx-auto">
          <div className="p-6 rounded-2xl border border-white/5 bg-white/5">
            <p className="text-body-large font-medium italic text-white/90">
              "What if you could turn cold email into your <span className="text-blue-400">most reliable lead source</span> - without hiring a single SDR?"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
