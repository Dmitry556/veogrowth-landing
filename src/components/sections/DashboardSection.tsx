
import React from 'react';
import { LayoutDashboard, BarChart, Mail, LineChart, ListChecks, Calendar, FileText, Check } from 'lucide-react';
import CustomButton from '../ui/CustomButton';

const DashboardSection: React.FC = () => {
  const dashboardFeatures = [
    {
      icon: <BarChart className="text-blue-400" />,
      title: "Campaign Overview",
      description: "Real-time metrics showing emails sent, delivered, opened, and responded to"
    },
    {
      icon: <Mail className="text-green-400" />,
      title: "Response Tracker",
      description: "Monitor all positive responses with contact details and conversation history"
    },
    {
      icon: <LineChart className="text-purple-400" />,
      title: "A/B Test Results",
      description: "Compare different messaging approaches with statistical significance"
    },
    {
      icon: <ListChecks className="text-amber-400" />,
      title: "List Health",
      description: "View prospect list quality metrics and verification status"
    },
    {
      icon: <FileText className="text-rose-400" />,
      title: "Weekly Reports",
      description: "Access archived weekly reports and performance trends"
    },
    {
      icon: <Calendar className="text-teal-400" />,
      title: "Calendar",
      description: "Schedule review calls and access past call notes"
    }
  ];

  return (
    <section id="dashboard" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-caption font-medium mb-6">
              Dashboard Concept
            </div>
            <h2 className="text-h2 font-bold tracking-tight mb-6">
              Complete visibility into your campaign performance
            </h2>
            <p className="text-body-large text-white/70 mb-10 leading-body">
              Our client dashboard provides complete transparency into your campaign metrics, responses, and optimization opportunities.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {dashboardFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mr-4 shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-body font-semibold mb-1">{feature.title}</h3>
                    <p className="text-caption text-white/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="text-body text-white/70 mb-6">
              All clients receive login credentials to access their campaign dashboard after the initial test campaign proves successful.
            </p>
            
            <CustomButton onClick={() => window.open('https://calendly.com/veogrowth', '_blank')}>
              Launch my free campaign
            </CustomButton>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-primary rounded-3xl blur-xl opacity-20 animate-pulse"></div>
            <div className="glass-card rounded-3xl p-1 bg-black/40 relative">
              <div className="bg-black/60 backdrop-blur-sm rounded-3xl p-4 overflow-hidden">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <LayoutDashboard className="text-blue-400 mr-3" />
                    <h3 className="text-body font-semibold">Campaign Dashboard</h3>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-caption text-white/60 mb-1">Emails Sent</p>
                    <p className="text-h3 font-bold">8,472</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-caption text-white/60 mb-1">Reply Rate</p>
                    <p className="text-h3 font-bold">3.2%</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-caption text-white/60 mb-1">Positive Responses</p>
                    <p className="text-h3 font-bold text-green-400">116</p>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-body font-medium">Campaign Performance</p>
                    <div className="text-caption text-white/60">Last 30 days</div>
                  </div>
                  <div className="h-32 relative">
                    {/* Stylized line chart */}
                    <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                      <path
                        d="M0,90 C50,80 100,40 150,30 C180,25 250,50 300,10"
                        fill="none"
                        stroke="url(#blue-gradient)"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#3B82F6" />
                          <stop offset="100%" stopColor="#8B5CF6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-lg p-4 mb-4">
                  <p className="text-body font-medium mb-3">Recent Responses</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 border-b border-white/10">
                      <div>
                        <p className="text-body font-medium">Sarah Chen</p>
                        <p className="text-caption text-white/60">CTO, InnovaTech</p>
                      </div>
                      <div className="flex items-center text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                        <Check size={14} className="mr-1" />
                        <span className="text-caption">Positive</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/10">
                      <div>
                        <p className="text-body font-medium">Michael Rodriguez</p>
                        <p className="text-caption text-white/60">Head of Growth, NextWave</p>
                      </div>
                      <div className="flex items-center text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                        <Check size={14} className="mr-1" />
                        <span className="text-caption">Positive</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/10">
                      <div>
                        <p className="text-body font-medium">Priya Sharma</p>
                        <p className="text-caption text-white/60">COO, GreenSolutions</p>
                      </div>
                      <div className="flex items-center text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                        <Check size={14} className="mr-1" />
                        <span className="text-caption">Positive</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between text-caption text-white/40">
                  <span>Updated: Today at 2:45 PM</span>
                  <span>Next report: Friday</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
