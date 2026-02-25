import React, { useState, useMemo, useEffect } from 'react';
import { Calculator, TrendingUp, Users, DollarSign, Clock, AlertCircle, CheckCircle2, XCircle } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const ROI: React.FC = () => {
  // Current State inputs
  const [annualRevenue, setAnnualRevenue] = useState(3000000);
  const [inboundPercent, setInboundPercent] = useState(80);
  const [acv, setAcv] = useState(15000);
  const [closeRate, setCloseRate] = useState(20);
  const [salesCycle, setSalesCycle] = useState(3);

  // TAM inputs
  const [tamSize, setTamSize] = useState('medium'); // small: 30-50K, medium: 50-100K, large: 100K+
  const [industry, setIndustry] = useState('saas');

  // Veogrowth pricing
  const [setupFee, setSetupFee] = useState(4000);
  const [pricePerMeeting, setPricePerMeeting] = useState(450);

  // Calculate TAM-based meeting projections
  const meetingProjections = useMemo(() => {
    const projections = {
      small: { min: 10, max: 15, avg: 12, tam: '30-50K' },
      medium: { min: 20, max: 30, avg: 25, tam: '50-100K' },
      large: { min: 40, max: 50, avg: 45, tam: '100K+' }
    };
    return projections[tamSize];
  }, [tamSize]);

  const [meetingsPerMonth, setMeetingsPerMonth] = useState(25);

  // Update meetings when TAM changes
  useEffect(() => {
    setMeetingsPerMonth(meetingProjections.avg);
  }, [meetingProjections]);

  // Set document title and scroll to top
  useEffect(() => {
    document.title = "No B.S. ROI Calculator | Veogrowth";
    window.scrollTo(0, 0);
  }, []);

  // ROI Calculations
  const calculations = useMemo(() => {
    const monthlyMeetingCost = meetingsPerMonth * pricePerMeeting;
    const sixMonthMeetings = meetingsPerMonth * 6;
    const sixMonthMeetingCost = monthlyMeetingCost * 6;
    const totalInvestment = setupFee + sixMonthMeetingCost;

    // Assuming sales cycle length affects when revenue hits
    const effectiveMonthsForRevenue = Math.max(1, 6 - salesCycle);
    const closedDeals = (sixMonthMeetings * (closeRate / 100));
    const pipelineValue = sixMonthMeetings * acv;
    const actualRevenue = closedDeals * acv;

    // Assume 70% margin (conservative for SaaS/services)
    const netProfit = actualRevenue * 0.7;
    const roi = totalInvestment > 0 ? ((netProfit - totalInvestment) / totalInvestment * 100) : 0;
    const breakEvenDeals = Math.ceil(totalInvestment / acv);
    const paybackMonths = closedDeals > 0 ? (totalInvestment / (actualRevenue / 6)).toFixed(1) : 'N/A';

    // Alternative calculations
    const sdrAnnualCost = 70000;
    const sdrSixMonthCost = 35000;
    const sdrOnboardingCost = 15000;
    const sdrTotalSixMonth = sdrSixMonthCost + sdrOnboardingCost;
    const sdrMeetingsPerMonth = 15; // conservative estimate
    const sdrSixMonthMeetings = sdrMeetingsPerMonth * 3; // only 3 months productive after ramp

    const agencyRetainer = 8000;
    const agencySixMonth = agencyRetainer * 6;
    const agencyMeetingsPerMonth = 12; // typical agency performance
    const agencySixMonthMeetings = agencyMeetingsPerMonth * 6;

    return {
      monthlyMeetingCost,
      sixMonthMeetings,
      sixMonthMeetingCost,
      totalInvestment,
      closedDeals,
      pipelineValue,
      actualRevenue,
      netProfit,
      roi,
      breakEvenDeals,
      paybackMonths,
      sdrTotalSixMonth,
      sdrSixMonthMeetings,
      agencySixMonth,
      agencySixMonthMeetings
    };
  }, [meetingsPerMonth, pricePerMeeting, closeRate, acv, salesCycle, setupFee]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const opportunityLoss = useMemo(() => {
    // If they're 80% inbound, they're missing 20% potential
    const potentialFromOutbound = annualRevenue * (1 - inboundPercent / 100) * 2; // conservative 2x multiplier
    return potentialFromOutbound;
  }, [annualRevenue, inboundPercent]);

  return (
    <div className="min-h-screen bg-slate-950">
        <Header />

        <div className="pt-24 pb-16 px-4">
          <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Calculator className="w-8 h-8 text-blue-600" />
                <h1 className="text-3xl font-bold text-gray-900">Outbound ROI Calculator</h1>
              </div>
              <p className="text-lg text-gray-600">Honest math on what outbound will actually cost and return.</p>
              <p className="text-sm text-gray-500 mt-2">No BS. Just the numbers you need to make a decision.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* LEFT COLUMN - INPUTS */}
              <div className="space-y-6">

                {/* Section 1: Current State */}
                <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Your Current State
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Annual Revenue
                      </label>
                      <input
                        type="number"
                        value={annualRevenue}
                        onChange={(e) => setAnnualRevenue(Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900"
                        step="100000"
                      />
                      <p className="text-xs text-gray-500 mt-1">{formatCurrency(annualRevenue)}</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        % from Inbound: {inboundPercent}%
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={inboundPercent}
                        onChange={(e) => setInboundPercent(Number(e.target.value))}
                        className="w-full"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        You're leaving ~{formatCurrency(opportunityLoss)} on the table annually
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Average Deal Size (ACV)
                      </label>
                      <input
                        type="number"
                        value={acv}
                        onChange={(e) => setAcv(Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900"
                        step="1000"
                      />
                      <p className="text-xs text-gray-500 mt-1">{formatCurrency(acv)}</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Sales Close Rate: {closeRate}%
                      </label>
                      <input
                        type="range"
                        min="5"
                        max="50"
                        value={closeRate}
                        onChange={(e) => setCloseRate(Number(e.target.value))}
                        className="w-full"
                      />
                      <p className="text-xs text-gray-500 mt-1">Be honest - use your actual inbound close rate</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Sales Cycle: {salesCycle} months
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="12"
                        value={salesCycle}
                        onChange={(e) => setSalesCycle(Number(e.target.value))}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: TAM Size */}
                <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Your TAM Size</h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        How many companies match your ICP?
                      </label>
                      <select
                        value={tamSize}
                        onChange={(e) => setTamSize(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      >
                        <option value="small">30-50K companies (Niche vertical/segment)</option>
                        <option value="medium">50-100K companies (Broad SMB/Mid-market)</option>
                        <option value="large">100K+ companies (Large TAM)</option>
                      </select>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                      <p className="text-sm font-medium text-blue-900">
                        Realistic Meeting Range: {meetingProjections.min}-{meetingProjections.max} per month
                      </p>
                      <p className="text-xs text-blue-700 mt-1">
                        TAM Size: {meetingProjections.tam} companies
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Expected Meetings/Month: {meetingsPerMonth}
                      </label>
                      <input
                        type="range"
                        min={meetingProjections.min}
                        max={meetingProjections.max}
                        value={meetingsPerMonth}
                        onChange={(e) => setMeetingsPerMonth(Number(e.target.value))}
                        className="w-full"
                      />
                      <p className="text-xs text-gray-500 mt-1">We'll validate this on the scoping call</p>
                    </div>
                  </div>
                </div>

                {/* Section 3: Pricing */}
                <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    Veogrowth Investment
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Setup Fee (one-time): {formatCurrency(setupFee)}
                      </label>
                      <input
                        type="range"
                        min="3000"
                        max="5000"
                        step="500"
                        value={setupFee}
                        onChange={(e) => setSetupFee(Number(e.target.value))}
                        className="w-full"
                      />
                      <p className="text-xs text-gray-500 mt-1">TAM build, infrastructure, campaign dev ($3-5K range)</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Price per Qualified Meeting: {formatCurrency(pricePerMeeting)}
                      </label>
                      <input
                        type="range"
                        min="150"
                        max="600"
                        step="50"
                        value={pricePerMeeting}
                        onChange={(e) => setPricePerMeeting(Number(e.target.value))}
                        className="w-full"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Set on scoping call based on your ACV and economics
                      </p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-md p-3">
                      <p className="text-sm text-gray-600">Monthly Investment</p>
                      <p className="text-2xl font-bold text-gray-900">{formatCurrency(calculations.monthlyMeetingCost)}</p>
                      <p className="text-xs text-gray-500 mt-1">{meetingsPerMonth} meetings × {formatCurrency(pricePerMeeting)}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN - RESULTS */}
              <div className="space-y-6">

                {/* ROI Summary - Big Numbers */}
                <div className="border-2 border-blue-600 rounded-lg p-6 bg-blue-50">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">6-Month Projection</h2>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600">Total Investment</p>
                      <p className="text-3xl font-bold text-gray-900">{formatCurrency(calculations.totalInvestment)}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Setup: {formatCurrency(setupFee)} + Meetings: {formatCurrency(calculations.sixMonthMeetingCost)}
                      </p>
                    </div>

                    <div className="border-t border-blue-200 pt-4">
                      <p className="text-sm text-gray-600">Meetings Booked</p>
                      <p className="text-3xl font-bold text-gray-900">{calculations.sixMonthMeetings}</p>
                      <p className="text-xs text-gray-500 mt-1">{meetingsPerMonth} per month × 6 months</p>
                    </div>

                    <div className="border-t border-blue-200 pt-4">
                      <p className="text-sm text-gray-600">Pipeline Created</p>
                      <p className="text-3xl font-bold text-gray-900">{formatCurrency(calculations.pipelineValue)}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {calculations.sixMonthMeetings} meetings × {formatCurrency(acv)} ACV
                      </p>
                    </div>

                    <div className="border-t border-blue-200 pt-4">
                      <p className="text-sm text-gray-600">Expected Closed Revenue</p>
                      <p className="text-3xl font-bold text-green-600">{formatCurrency(calculations.actualRevenue)}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        ~{calculations.closedDeals.toFixed(1)} deals at {closeRate}% close rate
                      </p>
                    </div>

                    <div className="border-t border-blue-200 pt-4">
                      <p className="text-sm text-gray-600">Net Profit (70% margin)</p>
                      <p className="text-3xl font-bold text-green-700">{formatCurrency(calculations.netProfit)}</p>
                    </div>

                    <div className="border-t-2 border-blue-300 pt-4">
                      <p className="text-sm text-gray-600">ROI</p>
                      <p className={`text-4xl font-bold ${calculations.roi > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {calculations.roi.toFixed(0)}%
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Payback period: {calculations.paybackMonths} months
                      </p>
                    </div>
                  </div>
                </div>

                {/* Reality Check */}
                <div className="border border-amber-400 rounded-lg p-6 bg-amber-50">
                  <div className="flex items-start gap-3 mb-4">
                    <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Reality Check</h3>
                      <p className="text-sm text-gray-600 mt-1">Break-even analysis (be honest with yourself)</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-white rounded-md p-3 border border-amber-200">
                      <p className="text-sm font-medium text-gray-900">
                        You need to close <span className="text-xl font-bold text-amber-600">{calculations.breakEvenDeals}</span> deals to break even
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        That's {((calculations.breakEvenDeals / calculations.sixMonthMeetings) * 100).toFixed(1)}% close rate on {calculations.sixMonthMeetings} meetings
                      </p>
                    </div>

                    <div className="text-sm space-y-2 text-gray-700">
                      <p className="font-medium">Does that feel realistic?</p>
                      <ul className="space-y-1 text-xs">
                        <li>✓ If your inbound closes at {closeRate}%, expect similar from outbound</li>
                        <li>✓ If you're closing {closeRate}% now, {calculations.breakEvenDeals} deals is {calculations.breakEvenDeals <= calculations.closedDeals ? 'achievable' : 'aggressive'}</li>
                        <li>✓ Sales cycle affects when revenue hits (you said {salesCycle} months)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* What We Control vs What You Control */}
                <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                  <h3 className="font-bold text-gray-900 mb-4">Honest Truth: Who Controls What</h3>

                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <p className="text-sm font-medium text-gray-900">What Veogrowth Controls:</p>
                      </div>
                      <ul className="text-xs text-gray-600 space-y-1 ml-6">
                        <li>• Meeting quality (ICP match, budget, authority)</li>
                        <li>• Meeting volume (based on TAM and offer)</li>
                        <li>• Reply rates and booking efficiency</li>
                        <li>• Campaign quality and messaging</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <XCircle className="w-4 h-4 text-red-600" />
                        <p className="text-sm font-medium text-gray-900">What You Control:</p>
                      </div>
                      <ul className="text-xs text-gray-600 space-y-1 ml-6">
                        <li>• Close rate (your sales process)</li>
                        <li>• Product-market fit</li>
                        <li>• Pricing and offer strength</li>
                        <li>• Sales cycle length</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-300 rounded-md p-3 text-xs text-gray-700">
                      <p className="font-medium mb-1">Bottom line:</p>
                      <p>We book qualified meetings. Your team closes them. If meetings aren't converting, it's usually the offer/pricing/sales process - not the meeting quality.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="mt-8 border border-gray-200 rounded-lg p-6 bg-white">
              <h2 className="text-xl font-bold text-gray-900 mb-6">vs Your Other Options</h2>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Metric</th>
                      <th className="text-left py-3 px-4 font-semibold text-blue-600 bg-blue-50">Veogrowth</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Hire SDR</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Traditional Agency</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 font-medium">6-Month Cost</td>
                      <td className="py-3 px-4 bg-blue-50 font-semibold">{formatCurrency(calculations.totalInvestment)}</td>
                      <td className="py-3 px-4">{formatCurrency(calculations.sdrTotalSixMonth)}</td>
                      <td className="py-3 px-4">{formatCurrency(calculations.agencySixMonth)}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 font-medium">Upfront Risk</td>
                      <td className="py-3 px-4 bg-blue-50">{formatCurrency(setupFee)} + pay per meeting</td>
                      <td className="py-3 px-4">{formatCurrency(calculations.sdrTotalSixMonth)} guaranteed</td>
                      <td className="py-3 px-4">{formatCurrency(calculations.agencySixMonth)} guaranteed</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 font-medium">Ramp Time</td>
                      <td className="py-3 px-4 bg-blue-50 font-semibold">2 weeks</td>
                      <td className="py-3 px-4">3-6 months</td>
                      <td className="py-3 px-4">4-8 weeks</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 font-medium">6-Month Meetings</td>
                      <td className="py-3 px-4 bg-blue-50 font-semibold">{calculations.sixMonthMeetings}</td>
                      <td className="py-3 px-4">{calculations.sdrSixMonthMeetings} (3mo productive)</td>
                      <td className="py-3 px-4">{calculations.agencySixMonthMeetings}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 font-medium">Cost per Meeting</td>
                      <td className="py-3 px-4 bg-blue-50 font-semibold">{formatCurrency(pricePerMeeting)}</td>
                      <td className="py-3 px-4">{formatCurrency(calculations.sdrTotalSixMonth / calculations.sdrSixMonthMeetings)}</td>
                      <td className="py-3 px-4">{formatCurrency(calculations.agencySixMonth / calculations.agencySixMonthMeetings)}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 font-medium">Who Manages</td>
                      <td className="py-3 px-4 bg-blue-50 font-semibold">Veogrowth</td>
                      <td className="py-3 px-4">You (recruiting, training, managing)</td>
                      <td className="py-3 px-4">Them (but still need oversight)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Contract</td>
                      <td className="py-3 px-4 bg-blue-50 font-semibold">None (cancel anytime)</td>
                      <td className="py-3 px-4">Employment commitment</td>
                      <td className="py-3 px-4">3-6 month minimum</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-md p-4">
                <p className="text-sm font-medium text-blue-900">
                  The Real Comparison: Veogrowth costs {formatCurrency(calculations.totalInvestment)} with {calculations.sixMonthMeetings} meetings vs an SDR at {formatCurrency(calculations.sdrTotalSixMonth)} with {calculations.sdrSixMonthMeetings} meetings
                </p>
                <p className="text-xs text-blue-700 mt-2">
                  You save {formatCurrency(calculations.sdrTotalSixMonth - calculations.totalInvestment)} and get {calculations.sixMonthMeetings - calculations.sdrSixMonthMeetings} more meetings in 6 months
                </p>
              </div>
            </div>

            {/* Timeline Visualization */}
            <div className="mt-8 border border-gray-200 rounded-lg p-6 bg-white">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                When Do You Break Even?
              </h2>

              <div className="space-y-4">
                {[1, 2, 3, 4, 5, 6].map((month) => {
                  const cumulativeMeetings = meetingsPerMonth * month;
                  const cumulativeClosedDeals = (cumulativeMeetings * (closeRate / 100));
                  const cumulativeRevenue = cumulativeClosedDeals * acv;
                  const cumulativeCost = setupFee + (meetingsPerMonth * pricePerMeeting * month);
                  const isBreakEven = cumulativeRevenue >= cumulativeCost;
                  const netPosition = cumulativeRevenue - cumulativeCost;

                  return (
                    <div key={month} className={`flex items-center gap-4 p-4 rounded-lg border ${isBreakEven ? 'bg-green-50 border-green-300' : 'bg-gray-50 border-gray-200'}`}>
                      <div className="w-20 font-bold text-gray-700">Month {month}</div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-gray-600">
                            {cumulativeMeetings} meetings • ~{cumulativeClosedDeals.toFixed(1)} deals
                          </span>
                          <span className={`text-sm font-medium ${isBreakEven ? 'text-green-700' : 'text-gray-600'}`}>
                            {formatCurrency(netPosition)}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${isBreakEven ? 'bg-green-500' : 'bg-blue-500'}`}
                            style={{ width: `${Math.min(100, (cumulativeRevenue / cumulativeCost) * 100)}%` }}
                          />
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>Cost: {formatCurrency(cumulativeCost)}</span>
                          <span>Revenue: {formatCurrency(cumulativeRevenue)}</span>
                        </div>
                      </div>
                      {isBreakEven && (
                        <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Final CTA */}
            <div className="mt-8 border-2 border-blue-600 rounded-lg p-8 bg-gradient-to-br from-blue-50 to-white text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Based on These Numbers...</h2>
              <p className="text-lg text-gray-700 mb-6">
                Your 6-month investment: <span className="font-bold text-blue-600">{formatCurrency(calculations.totalInvestment)}</span> →
                Expected return: <span className="font-bold text-green-600">{formatCurrency(calculations.actualRevenue)}</span>
                ({calculations.roi.toFixed(0)}% ROI)
              </p>

              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 text-left max-w-2xl mx-auto">
                <p className="text-sm text-gray-700 mb-3">
                  <span className="font-semibold">Next step:</span> Book a scoping call and we'll:
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Validate if your TAM actually supports {meetingsPerMonth} meetings/month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Set the exact per-meeting price based on your economics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Tell you honestly if cold email won't work for your market</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => window.open('https://calendly.com/veogrowth/discovery', '_blank')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                Book Scoping Call → Validate These Numbers
              </button>

              <p className="text-sm text-gray-500 mt-4">
                No commitment. We'll tell you if it won't work.
              </p>
            </div>

            {/* Footer Note */}
            <div className="mt-6 text-center text-xs text-gray-500">
              <p>These projections assume your sales process can close at {closeRate}% (your input).</p>
              <p className="mt-1">If meetings aren't converting, it's not the meeting quality - it's your offer, pricing, or sales process.</p>
            </div>
          </div>
        </div>

        <Footer />
    </div>
  );
};

export default ROI;
