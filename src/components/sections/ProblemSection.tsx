
import React from 'react';
import CustomCard from '../ui/CustomCard';
import { AlertTriangle, Unlink, Database, FileQuestion } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: <AlertTriangle className="text-amber-400" />,
      title: "Data Silos",
      description: "Your marketing, sales, and customer data live in different tools, making it impossible to see the complete picture."
    },
    {
      icon: <Unlink className="text-rose-400" />,
      title: "Disconnected Teams",
      description: "Sales and marketing teams work with different metrics and tools, leading to misalignment and missed opportunities."
    },
    {
      icon: <Database className="text-blue-400" />,
      title: "Manual Reporting",
      description: "Teams waste hours each week manually combining data from different sources to create reports."
    },
    {
      icon: <FileQuestion className="text-purple-400" />,
      title: "Unclear Attribution",
      description: "It's nearly impossible to determine which marketing efforts actually drive revenue and deserve more investment."
    }
  ];

  return (
    <section id="problems" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-caption font-medium mb-6">
              The Challenge
            </div>
            <h2 className="text-h2 font-bold tracking-tight mb-6">
              Growth today is broken by disconnected tools and data
            </h2>
            <p className="text-body-large text-white/70 mb-10 leading-body max-w-lg">
              Companies struggle to connect marketing efforts to actual revenue, while teams work in silos with incompatible tools and metrics.
            </p>
            
            <div className="p-6 rounded-2xl border border-white/5 bg-white/5">
              <p className="text-body-large font-medium italic text-white/90">
                "What if your marketing and sales data worked together seamlessly, showing you <span className="text-blue-400">exactly what drives revenue</span> and where to invest next?"
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
