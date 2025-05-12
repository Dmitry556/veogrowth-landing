
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Label
} from 'recharts';

const data = [
  { name: 'Visible Costs', value: 75000, fill: '#3B82F6' },
  { name: 'True Costs', value: 165000, fill: '#8B5CF6' }
];

const formatter = (value: number) => {
  return `$${(value / 1000)}K`;
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <Card className="text-white border border-white/10 bg-black/80 backdrop-blur-md px-3 py-2 shadow-xl">
        <CardContent className="p-0">
          <p className="font-medium">{payload[0].payload.name}</p>
          <p className="text-lg font-bold text-white">
            ${payload[0].value.toLocaleString()}
          </p>
          {payload[0].payload.name === 'True Costs' && (
            <p className="text-sm text-red-400">
              +{(((payload[0].value - 75000) / 75000) * 100).toFixed(0)}% higher
            </p>
          )}
        </CardContent>
      </Card>
    );
  }

  return null;
};

const CostBarChart = () => {
  return (
    <div className="glass-card p-6">
      <h3 className="text-lg font-medium mb-4 text-center">
        The SDR Cost Disparity: Visible vs. True Costs
      </h3>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 40, bottom: 30 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey="name" 
              tick={{ fill: 'white' }}
              axisLine={{ stroke: 'rgba(255,255,255,0.2)' }}
            />
            <YAxis 
              tickFormatter={formatter}
              tick={{ fill: 'white' }}
              axisLine={{ stroke: 'rgba(255,255,255,0.2)' }}
            >
              <Label 
                value="Annual Cost" 
                position="insideLeft" 
                angle={-90} 
                style={{ textAnchor: 'middle', fill: 'white', opacity: 0.7 }}
              />
            </YAxis>
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="value" 
              radius={[4, 4, 0, 0]}
              barSize={80}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="text-sm text-white/60 text-center mt-4">
        Most companies only see the visible costs, underestimating SDR expenses by more than 120%
      </p>
    </div>
  );
};

export default CostBarChart;
