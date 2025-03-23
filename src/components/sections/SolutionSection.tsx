
import React from 'react';
import CustomCard from '../ui/CustomCard';
import { LineChart, ArrowUpRight, Zap, Cpu } from 'lucide-react';

const SolutionSection: React.FC = () => {
  const solutions = [
    {
      icon: <LineChart className="text-blue-400" />,
      title: "Custom Data Pipeline",
      description: "We build hyper-targeted lists with 10+ data points per prospect - not just names and emails. Our data waterfall finds decision-makers other agencies miss entirely.",
      gradient: "from-blue-600/20 to-blue-400/5"
    },
    {
      icon: <ArrowUpRight className="text-green-400" />,
      title: "Inbox-Optimized Infrastructure",
      description: "We manage 2,500+ warming inboxes with 90%+ deliverability rates. Each domain is prepared for 3+ weeks before sending a single email, ensuring your messages land in primary inboxes.",
      gradient: "from-green-600/20 to-green-400/5"
    },
    {
      icon: <Zap className="text-amber-400" />,
      title: "AI-Powered Personalization",
      description: "Our AI systems create truly personalized messages that reference specific details about each prospect's business, generating response rates 3.7x higher than industry average.",
      gradient: "from-amber-500/20 to-amber-300/5"
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
            How We're Different: We're a Data Company That Sends Emails
          </h2>
          <p className="text-body-large text-white/70 leading-body">
            While other agencies guess what works, we rely on data to design custom campaigns that consistently deliver:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        
        <div className="mt-16 rounded-3xl overflow-hidden border border-white/10 glass">
          <div className="aspect-[16/9] relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-4xl p-8">
                  <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                    <div className="bg-black/60 backdrop-blur-sm p-4 flex justify-between items-center border-b border-white/10">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-caption text-white/60">Pipeline Growth Dashboard</div>
                      <div></div>
                    </div>
                    <div className="bg-black/40 p-6">
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="bg-white/5 rounded-lg p-4">
                          <p className="text-caption text-white/60 mb-2">Pipeline</p>
                          <p className="text-h3 font-bold text-gradient">$4.2M</p>
                          <div className="flex items-center mt-1">
                            <ArrowUpRight className="text-green-400" size={14} />
                            <span className="text-green-400 text-xs ml-1">+24%</span>
                          </div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4">
                          <p className="text-caption text-white/60 mb-2">Response Rate</p>
                          <p className="text-h3 font-bold text-gradient">8.7%</p>
                          <div className="flex items-center mt-1">
                            <ArrowUpRight className="text-green-400" size={14} />
                            <span className="text-green-400 text-xs ml-1">+3.2%</span>
                          </div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4">
                          <p className="text-caption text-white/60 mb-2">ROI</p>
                          <p className="text-h3 font-bold text-gradient">12.8x</p>
                          <div className="flex items-center mt-1">
                            <ArrowUpRight className="text-green-400" size={14} />
                            <span className="text-green-400 text-xs ml-1">+18%</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 mb-6">
                        <div className="flex justify-between items-center mb-4">
                          <p className="text-body font-medium">Response by Campaign</p>
                          <div className="text-caption text-white/60">Last 30 days</div>
                        </div>
                        <div className="h-32 flex items-end justify-between gap-2">
                          <div className="w-1/6 h-[20%] bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-sm"></div>
                          <div className="w-1/6 h-[65%] bg-gradient-to-t from-green-500 to-green-400 rounded-t-sm"></div>
                          <div className="w-1/6 h-[85%] bg-gradient-to-t from-purple-500 to-purple-400 rounded-t-sm"></div>
                          <div className="w-1/6 h-[40%] bg-gradient-to-t from-amber-500 to-amber-400 rounded-t-sm"></div>
                          <div className="w-1/6 h-[60%] bg-gradient-to-t from-red-500 to-red-400 rounded-t-sm"></div>
                          <div className="w-1/6 h-[25%] bg-gradient-to-t from-teal-500 to-teal-400 rounded-t-sm"></div>
                        </div>
                        <div className="flex justify-between mt-2 text-caption text-white/60">
                          <span>Campaign A</span>
                          <span>Campaign B</span>
                          <span>Campaign C</span>
                          <span>Campaign D</span>
                          <span>Campaign E</span>
                          <span>Campaign F</span>
                        </div>
                      </div>
                      <div className="text-caption text-white/40 text-center">Interactive dashboard with real-time data and insights</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
