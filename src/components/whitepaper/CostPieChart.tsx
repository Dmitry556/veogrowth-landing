
import React from 'react';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer,
  Legend,
  Tooltip
} from 'recharts';
import { Card, CardContent } from '@/components/ui/card';

const data = [
  { name: 'Direct Compensation', value: 45, color: '#3B82F6' },
  { name: 'Tech & Infrastructure', value: 15, color: '#10B981' },
  { name: 'Management Overhead', value: 25, color: '#8B5CF6' },
  { name: 'Productivity Gaps & Turnover', value: 15, color: '#F59E0B' },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <Card className="text-white border border-white/10 bg-black/80 backdrop-blur-md px-3 py-2 shadow-xl">
        <CardContent className="p-0">
          <p className="font-medium">{payload[0].name}</p>
          <p className="text-lg font-bold text-white">
            {payload[0].value}%
          </p>
        </CardContent>
      </Card>
    );
  }

  return null;
};

const CostPieChart = () => {
  return (
    <div className="glass-card p-6">
      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={120}
              fill="#8884d8"
              paddingAngle={2}
              dataKey="value"
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              layout="horizontal" 
              verticalAlign="bottom" 
              align="center"
              formatter={(value) => <span className="text-white">{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CostPieChart;
