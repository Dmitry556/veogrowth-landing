
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
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
          {problem.icon}
        </div>
        <h3 className="font-raleway text-base font-semibold mb-3 text-foreground">{problem.title}</h3>
        <p className="text-sm text-foreground/75 leading-relaxed">{problem.description}</p>
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
    // Comparison examples will be handled differently in the new layout
  ];

  return (
    <section id="problems" className="py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="container mx-auto px-8 sm:px-12">
        <div 
          ref={ref}
          className={`transition-all duration-500 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} mb-12 text-center max-w-5xl mx-auto`}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium mb-6">
            The Story
          </div>
          <h2 className="font-raleway text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-8 text-foreground">
            The Day Cold Email Died (And What Replaced It)
          </h2>
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              You know why cold email stopped working? Everyone bought the same Apollo list. Everyone uses the same AI tools. Everyone sends "Hi Sarah, I saw you're VP of Marketing at..."
            </p>
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              Prospects can smell it instantly. <span className="font-semibold text-destructive">Delete.</span>
            </p>
            <p className="text-xl text-foreground/80 mb-12 leading-relaxed">
              But here's what changed everything: AI can now do something that was impossible before—make intelligent inferences about thousands of prospects simultaneously.
            </p>
          </div>
        </div>
        
        {/* Comparison Box */}
        <div className="bg-muted/50 rounded-2xl p-8 md:p-12 mb-12 max-w-5xl mx-auto border border-border">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-destructive mb-4">❌ Everyone Else</h3>
              <p className="text-foreground/60 italic">"I see you use Salesforce."</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-4">✅ Our AI</h3>
              <p className="text-foreground/85 font-medium">
                "Based on your 3 new enterprise clients and that RevOps hire last month, you're probably dealing with data silos between your CRM and billing system."
              </p>
            </div>
          </div>
        </div>
        
        {/* The Why Now */}
        <div className="max-w-4xl mx-auto">
          <p className="text-xl font-semibold text-foreground mb-8">
            Why wasn't this possible 2 years ago?
          </p>
          
          <p className="text-lg text-foreground/80 mb-8">
            Three things had to converge:
          </p>
          
          <ul className="text-lg text-foreground/75 space-y-4 mb-12">
            <li className="flex items-start">
              <span className="text-primary font-bold mr-3">•</span>
              AI models that can actually reason, not just match patterns
            </li>
            <li className="flex items-start">
              <span className="text-primary font-bold mr-3">•</span>
              APIs that let us pull real-time intelligence at scale
            </li>
            <li className="flex items-start">
              <span className="text-primary font-bold mr-3">•</span>
              Infrastructure costs dropping 90% for this kind of processing
            </li>
          </ul>
          
          <p className="text-xl text-foreground leading-relaxed">
            We built a system that does this inference work across your entire market. And just as important—it knows who to skip.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
