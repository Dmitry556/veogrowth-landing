import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { motion, animate } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { trackCalendlyClick } from '@/utils/analytics';

/* ═══════════════════════════════════════════════════════════
   STYLES
   ═══════════════════════════════════════════════════════════ */

const CSS = `
  .roi-page {
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }
  .font-data {
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-variant-numeric: tabular-nums;
    font-weight: 600;
  }
  .roi-slider {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 5px;
    border-radius: 3px;
    outline: none;
    cursor: pointer;
  }
  .roi-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #34d399;
    cursor: pointer;
    box-shadow: 0 0 0 4px rgba(52, 211, 153, 0.1), 0 2px 8px rgba(0,0,0,0.4);
    transition: box-shadow 0.2s, transform 0.15s;
  }
  .roi-slider::-webkit-slider-thumb:hover {
    box-shadow: 0 0 0 6px rgba(52, 211, 153, 0.16), 0 2px 14px rgba(0,0,0,0.5);
    transform: scale(1.1);
  }
  .roi-slider::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #34d399;
    border: none;
    cursor: pointer;
    box-shadow: 0 0 0 4px rgba(52, 211, 153, 0.1), 0 2px 8px rgba(0,0,0,0.4);
  }
  .roi-slider::-moz-range-track {
    background: rgba(255,255,255,0.08);
    height: 5px;
    border-radius: 3px;
  }
  .roi-slider::-moz-range-progress {
    background: #34d399;
    height: 5px;
    border-radius: 3px;
  }
  .roi-number::-webkit-inner-spin-button,
  .roi-number::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .roi-number { -moz-appearance: textfield; }
  .roi-select {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23e2e8f0' d='M2.5 4.5L6 8l3.5-3.5'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 14px center;
    background-size: 14px;
  }
`;

/* ═══════════════════════════════════════════════════════════
   ANIMATED NUMBER
   ═══════════════════════════════════════════════════════════ */

const AnimNum: React.FC<{
  value: number;
  formatter?: (n: number) => string;
  className?: string;
}> = ({ value, formatter, className = '' }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const prev = useRef(value);
  const stableFmt = useCallback(
    (n: number) => (formatter ? formatter(n) : Math.round(n).toLocaleString()),
    [formatter]
  );
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const from = prev.current;
    const ctrl = animate(from, value, {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => { node.textContent = stableFmt(v); },
    });
    prev.current = value;
    return () => ctrl.stop();
  }, [value, stableFmt]);
  return <span ref={ref} className={`font-data ${className}`}>{stableFmt(value)}</span>;
};

/* ═══════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════ */

const fmtCurrency = (n: number): string =>
  '$' + Math.round(Math.abs(n)).toLocaleString();

const sliderFill = (val: number, min: number, max: number): React.CSSProperties => ({
  background: `linear-gradient(to right, #34d399 0%, #34d399 ${((val - min) / (max - min)) * 100}%, rgba(255,255,255,0.08) ${((val - min) / (max - min)) * 100}%)`,
});

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

/* ═══════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════ */

const ROI: React.FC = () => {
  const [acv, setAcv] = useState(15000);
  const [closeRate, setCloseRate] = useState(20);
  const [tamSize, setTamSize] = useState('medium');
  const [pricePerMeeting, setPricePerMeeting] = useState(450);

  const SETUP_FEE = 4000;

  const tam = useMemo(() => {
    const t: Record<string, { min: number; max: number; avg: number; label: string }> = {
      small: { min: 10, max: 15, avg: 12, label: '10–30K' },
      medium: { min: 20, max: 30, avg: 25, label: '40–100K' },
      large: { min: 40, max: 50, avg: 45, label: '100K+' },
    };
    return t[tamSize];
  }, [tamSize]);

  const [meetingsPerMonth, setMeetingsPerMonth] = useState(25);
  useEffect(() => { setMeetingsPerMonth(tam.avg); }, [tam]);

  useEffect(() => {
    document.title = 'No B.S. ROI Calculator | Veogrowth';
    window.scrollTo(0, 0);
  }, []);

  const calc = useMemo(() => {
    const monthly = meetingsPerMonth * pricePerMeeting;
    const sixMoMeetings = meetingsPerMonth * 6;
    const sixMoCost = monthly * 6;
    const totalInvestment = SETUP_FEE + sixMoCost;
    const closedDeals = sixMoMeetings * (closeRate / 100);
    const revenue = closedDeals * acv;
    const roi = totalInvestment > 0 ? ((revenue - totalInvestment) / totalInvestment) * 100 : 0;
    const breakEvenDeals = Math.ceil(totalInvestment / acv);
    const sdrCost = 50000;
    const sdrMeetings = 45;

    return {
      monthly, sixMoMeetings, totalInvestment,
      closedDeals, revenue, roi, breakEvenDeals,
      sdrCost, sdrMeetings,
    };
  }, [meetingsPerMonth, pricePerMeeting, closeRate, acv]);

  const card = 'rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6';

  return (
    <div className="min-h-screen bg-slate-950 relative roi-page">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      {/* Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% -5%, rgba(52, 211, 153, 0.04) 0%, transparent 60%)',
        }} />
      </div>

      <Header />

      <main className="relative z-10 pt-28 pb-24 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">

          <motion.div variants={stagger} initial="hidden" animate="visible">

            {/* ── Title ── */}
            <motion.div variants={fadeUp} className="text-center mb-10">
              <h1 className="text-[clamp(28px,5vw,38px)] font-semibold text-white leading-tight mb-2 tracking-[-0.02em]">
                Outbound ROI Calculator
              </h1>
              <p className="text-slate-300 text-[16px]">
                Plug in your numbers. See if it works.
              </p>
            </motion.div>

            {/* ── Inputs ── */}
            <motion.div variants={fadeUp} className={`${card} mb-4`}>
              <div className="space-y-6">

                {/* ACV */}
                <div>
                  <label className="text-[14px] font-medium text-slate-200 block mb-1.5">
                    Average Deal Size (ACV)
                  </label>
                  <input
                    type="number"
                    value={acv}
                    onChange={(e) => setAcv(Number(e.target.value))}
                    className="w-full px-4 py-2.5 rounded-lg bg-white/[0.05] border border-white/[0.1] text-white font-data text-[16px] outline-none focus:border-emerald-500/40 focus:ring-1 focus:ring-emerald-500/15 transition-all roi-number"
                    step="1000"
                  />
                  <p className="text-[13px] text-slate-400 mt-1.5">{fmtCurrency(acv)}</p>
                </div>

                {/* Close Rate */}
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <label className="text-[14px] font-medium text-slate-200">Close Rate</label>
                    <span className="font-data text-[15px] text-white">{closeRate}%</span>
                  </div>
                  <input
                    type="range" min="5" max="50"
                    value={closeRate}
                    onChange={(e) => setCloseRate(Number(e.target.value))}
                    className="roi-slider"
                    style={sliderFill(closeRate, 5, 50)}
                  />
                  <p className="text-[13px] text-slate-400 mt-1.5">% of meetings that become paying customers</p>
                </div>

                {/* TAM → Meetings */}
                <div>
                  <label className="text-[14px] font-medium text-slate-200 mb-2 block">Market Size</label>
                  <select
                    value={tamSize}
                    onChange={(e) => setTamSize(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg bg-white/[0.05] border border-white/[0.1] text-slate-100 text-[14px] outline-none focus:border-emerald-500/40 cursor-pointer appearance-none roi-select pr-10"
                  >
                    <option value="small">10–30K companies (niche vertical)</option>
                    <option value="medium">40–100K companies (broad SMB / mid-market)</option>
                    <option value="large">100K+ companies (large TAM)</option>
                  </select>
                </div>

                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <label className="text-[14px] font-medium text-slate-200">Meetings / Month</label>
                    <span className="font-data text-[15px] text-white">{meetingsPerMonth}</span>
                  </div>
                  <input
                    type="range"
                    min={tam.min} max={tam.max}
                    value={meetingsPerMonth}
                    onChange={(e) => setMeetingsPerMonth(Number(e.target.value))}
                    className="roi-slider"
                    style={sliderFill(meetingsPerMonth, tam.min, tam.max)}
                  />
                  <p className="text-[13px] text-slate-400 mt-1.5">
                    Realistic range for {tam.label} TAM. Validated on scoping call.
                  </p>
                </div>

              </div>
            </motion.div>

            {/* ── Pricing context ── */}
            <motion.div variants={fadeUp} className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 mb-6">
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-[13px] text-slate-300 font-medium">Per meeting price</span>
                <span className="font-data text-[15px] text-white">{fmtCurrency(pricePerMeeting)}</span>
              </div>
              <input
                type="range" min="150" max="600" step="50"
                value={pricePerMeeting}
                onChange={(e) => setPricePerMeeting(Number(e.target.value))}
                className="roi-slider"
                style={sliderFill(pricePerMeeting, 150, 600)}
              />
              <p className="text-[13px] text-slate-400 mt-1.5">
                Exact price set on scoping call based on your ACV.
              </p>
            </motion.div>

            {/* ══════════════════════════════════════════════
                THE RESULT
               ══════════════════════════════════════════════ */}
            <motion.div
              variants={fadeUp}
              className={`${card} border-emerald-500/[0.15] mb-6`}
            >
              {/* ROI Hero */}
              <div className="text-center mb-6 pb-6 border-b border-white/[0.06]">
                <p className="text-[13px] font-medium text-slate-300 mb-2">
                  6-Month ROI
                </p>
                <div
                  className={`text-[clamp(48px,12vw,72px)] leading-none font-data font-bold ${
                    calc.roi > 0 ? 'text-emerald-400' : 'text-rose-400'
                  }`}
                  style={{
                    textShadow: calc.roi > 0
                      ? '0 0 50px rgba(52, 211, 153, 0.12)'
                      : '0 0 50px rgba(251, 113, 133, 0.12)',
                  }}
                >
                  <AnimNum
                    value={calc.roi}
                    formatter={(n) => Math.round(n).toLocaleString() + '%'}
                  />
                </div>
              </div>

              {/* Key numbers */}
              <div className="space-y-0">
                <div className="flex justify-between items-baseline py-3 border-b border-white/[0.05]">
                  <span className="text-[14px] text-slate-300">You invest</span>
                  <span className="font-data text-[18px] text-white">
                    <AnimNum value={calc.totalInvestment} formatter={fmtCurrency} />
                  </span>
                </div>
                <div className="flex justify-between items-baseline py-3 border-b border-white/[0.05]">
                  <span className="text-[14px] text-slate-300">Meetings booked</span>
                  <span className="font-data text-[18px] text-white">
                    <AnimNum value={calc.sixMoMeetings} />
                  </span>
                </div>
                <div className="flex justify-between items-baseline py-3 border-b border-white/[0.05]">
                  <span className="text-[14px] text-slate-300">Deals closed (~{calc.closedDeals.toFixed(0)})</span>
                  <span className="font-data text-[18px] text-emerald-400">
                    <AnimNum value={calc.revenue} formatter={fmtCurrency} />
                  </span>
                </div>
                <div className="flex justify-between items-baseline py-3">
                  <span className="text-[14px] text-slate-300">Break even after</span>
                  <span className="font-data text-[18px] text-white">
                    {calc.breakEvenDeals} {calc.breakEvenDeals === 1 ? 'deal' : 'deals'}
                  </span>
                </div>
              </div>

              <p className="text-[13px] text-slate-400 mt-4">
                {fmtCurrency(calc.monthly)}/mo · {meetingsPerMonth} meetings × {fmtCurrency(pricePerMeeting)}
              </p>
            </motion.div>

            {/* ── SDR Comparison ── */}
            <motion.div
              variants={fadeUp}
              className="rounded-xl bg-white/[0.025] border border-white/[0.06] px-5 py-4 mb-8"
            >
              <p className="text-[14px] text-slate-300">
                <span className="text-white font-medium">For comparison:</span>{' '}
                a full-time SDR costs ~{fmtCurrency(calc.sdrCost)} and books ~{calc.sdrMeetings} meetings
                over the same period. That's{' '}
                {fmtCurrency(calc.sdrCost / calc.sdrMeetings)}/meeting with 3–6 months of ramp.
              </p>
            </motion.div>

            {/* ── CTA ── */}
            <motion.div variants={fadeUp} className={`${card} border-emerald-500/[0.12] text-center py-8`}>
              <h2 className="text-[22px] font-semibold text-white mb-2 tracking-[-0.01em]">
                Want to validate these numbers?
              </h2>
              <p className="text-[15px] text-slate-300 mb-6 max-w-sm mx-auto leading-relaxed">
                Book a scoping call. We'll tell you if your TAM actually supports{' '}
                {meetingsPerMonth} meetings/month — or if cold email isn't the right channel.
              </p>

              <button
                onClick={() => {
                  trackCalendlyClick('roi-calculator');
                  window.open('https://calendly.com/veogrowth/discovery', '_blank');
                }}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-7 py-3 text-[15px] transition-all hover:shadow-[0_0_24px_rgba(52,211,153,0.25)] active:scale-[0.98]"
              >
                Book Scoping Call
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[13px] text-slate-400 mt-4">
                No commitment. We'll tell you if it won't work.
              </p>
            </motion.div>

            {/* Disclaimer */}
            <motion.p variants={fadeUp} className="text-center text-[13px] text-slate-400 mt-8">
              Projections assume your team closes at {closeRate}% (your input).
            </motion.p>

          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ROI;
