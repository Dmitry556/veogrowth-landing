
import React from 'react';
import CustomCard from '../ui/CustomCard';

const DecisionFlowDiagram = () => {
  return (
    <div className="glass-card p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-center mb-4">In-House SDR Model</h4>
          
          <div className="flex flex-col space-y-2">
            <div className="bg-blue-600/20 text-white rounded-lg p-4 text-center font-medium">
              Technical Product Complexity
            </div>
            <div className="flex justify-center">
              <div className="h-8 w-0.5 bg-white/20"></div>
            </div>
            <div className="bg-blue-600/20 text-white rounded-lg p-4 text-center font-medium">
              Stable Growth Trajectory
            </div>
            <div className="flex justify-center">
              <div className="h-8 w-0.5 bg-white/20"></div>
            </div>
            <div className="bg-blue-600/20 text-white rounded-lg p-4 text-center font-medium">
              Strong Management Bandwidth
            </div>
            <div className="flex justify-center">
              <div className="h-8 w-0.5 bg-white/20"></div>
            </div>
            <div className="bg-blue-600/20 text-white rounded-lg p-4 text-center font-medium">
              AE Talent Pipeline Needed
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-center mb-4">Outsourced SDR Model</h4>
          
          <div className="flex flex-col space-y-2">
            <div className="bg-purple-600/20 text-white rounded-lg p-4 text-center font-medium">
              Fast Scaling Required
            </div>
            <div className="flex justify-center">
              <div className="h-8 w-0.5 bg-white/20"></div>
            </div>
            <div className="bg-purple-600/20 text-white rounded-lg p-4 text-center font-medium">
              Management Resources Limited
            </div>
            <div className="flex justify-center">
              <div className="h-8 w-0.5 bg-white/20"></div>
            </div>
            <div className="bg-purple-600/20 text-white rounded-lg p-4 text-center font-medium">
              New Market Expansion
            </div>
            <div className="flex justify-center">
              <div className="h-8 w-0.5 bg-white/20"></div>
            </div>
            <div className="bg-purple-600/20 text-white rounded-lg p-4 text-center font-medium">
              Budget Predictability Critical
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-8">
        <CustomCard variant="glass" className="max-w-lg bg-gradient-to-br from-blue-900/20 to-purple-900/20">
          <h4 className="text-xl font-semibold text-center mb-4">Hybrid Model Considerations</h4>
          <ul className="list-disc space-y-2 pl-5">
            <li>In-house for strategic/complex accounts</li>
            <li>Outsource for new market exploration</li>
            <li>Use AI tools to amplify both approaches</li>
            <li>Maintain flexibility to adjust mix as needed</li>
          </ul>
        </CustomCard>
      </div>
    </div>
  );
};

export default DecisionFlowDiagram;
