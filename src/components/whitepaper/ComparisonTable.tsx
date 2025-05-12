
import React from 'react';

const ComparisonTable = () => {
  return (
    <div className="overflow-x-auto glass-card">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-white/10">
            <th className="text-left p-4">Cost Category</th>
            <th className="text-center p-4">In-House (Year 1)</th>
            <th className="text-center p-4">In-House (Year 3)</th>
            <th className="text-center p-4">Outsourced (Year 1)</th>
            <th className="text-center p-4">Outsourced (Year 3)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-white/5">
            <td className="p-4">Base Compensation</td>
            <td className="text-center p-4">$50K-$65K</td>
            <td className="text-center p-4">$55K-$70K</td>
            <td className="text-center p-4">Included</td>
            <td className="text-center p-4">Included</td>
          </tr>
          <tr className="border-b border-white/5">
            <td className="p-4">Variable Compensation</td>
            <td className="text-center p-4">$20K-$25K</td>
            <td className="text-center p-4">$22K-$27K</td>
            <td className="text-center p-4">Included</td>
            <td className="text-center p-4">Included</td>
          </tr>
          <tr className="border-b border-white/5">
            <td className="p-4">Benefits</td>
            <td className="text-center p-4">$15K-$20K</td>
            <td className="text-center p-4">$17K-$22K</td>
            <td className="text-center p-4">Included</td>
            <td className="text-center p-4">Included</td>
          </tr>
          <tr className="border-b border-white/5">
            <td className="p-4">Technology Stack</td>
            <td className="text-center p-4">$12K-$25K</td>
            <td className="text-center p-4">$10K-$18K</td>
            <td className="text-center p-4">Included</td>
            <td className="text-center p-4">Included</td>
          </tr>
          <tr className="border-b border-white/5">
            <td className="p-4">Management Overhead</td>
            <td className="text-center p-4">$35K-$57K</td>
            <td className="text-center p-4">$25K-$40K</td>
            <td className="text-center p-4">Included</td>
            <td className="text-center p-4">Included</td>
          </tr>
          <tr className="border-b border-white/5">
            <td className="p-4">Productivity Gap</td>
            <td className="text-center p-4">$15K-$25K</td>
            <td className="text-center p-4">$5K-$10K</td>
            <td className="text-center p-4">$2K-$5K</td>
            <td className="text-center p-4">$0</td>
          </tr>
          <tr className="border-b border-white/5">
            <td className="p-4">Turnover Costs</td>
            <td className="text-center p-4">$7K-$20K</td>
            <td className="text-center p-4">$7K-$20K</td>
            <td className="text-center p-4">$0</td>
            <td className="text-center p-4">$0</td>
          </tr>
          <tr className="border-b border-white/5 font-semibold bg-white/5">
            <td className="p-4">Total Annual Cost</td>
            <td className="text-center p-4 text-blue-400">$154K-$222K</td>
            <td className="text-center p-4 text-blue-400">$105K-$142K</td>
            <td className="text-center p-4 text-green-400">$45K-$72K</td>
            <td className="text-center p-4 text-green-400">$45K-$72K</td>
          </tr>
          <tr>
            <td className="p-4">Cost Differential</td>
            <td colSpan={2} className="text-center p-4">Baseline</td>
            <td colSpan={2} className="text-center p-4 font-semibold text-green-400">55-70% Less</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
