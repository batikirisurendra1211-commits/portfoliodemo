import React, { useState } from 'react';
import { Lightbulb, Code2, Network, Database, BrainCircuit, Rocket, Smartphone, ArrowLeft, ArrowRight } from 'lucide-react';
import { MIND_STAGES } from '../data/portfolioData';

export const EngineeringMind: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = MIND_STAGES[activeIdx];

  const getIcon = (iconName: string) => {
    const props = { className: "w-8 h-8 text-[#C87A3E]" };
    switch (iconName) {
      case 'Lightbulb': return <Lightbulb {...props} />;
      case 'Code2': return <Code2 {...props} />;
      case 'Network': return <Network {...props} />;
      case 'Database': return <Database {...props} />;
      case 'BrainCircuit': return <BrainCircuit {...props} />;
      case 'Rocket': return <Rocket {...props} />;
      case 'Smartphone': return <Smartphone {...props} />;
      default: return <Lightbulb {...props} />;
    }
  };

  const nextStage = () => {
    setActiveIdx((prev) => (prev < MIND_STAGES.length - 1 ? prev + 1 : 0));
  };

  const prevStage = () => {
    setActiveIdx((prev) => (prev > 0 ? prev - 1 : MIND_STAGES.length - 1));
  };

  return (
    <section id="mind" className="py-24 sm:py-36 px-6 sm:px-14 max-w-7xl mx-auto border-t border-black/10">
      {/* Top Chrome */}
      <div className="w-full flex items-center justify-between text-xs font-mono uppercase tracking-[0.25em] text-[#666666] mb-8 sm:mb-12">
        <span className="font-bold text-[#222222] tracking-widest">[ 04 ] SIGNATURE ENGINEERING PROCESS</span>
        <span className="text-[#C87A3E] font-bold">HYDERABAD, INDIA</span>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-16">
        <div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-[4.8rem] tracking-tight leading-none uppercase text-[#111111]">
            HOW I THINK &amp; <span className="text-[#C87A3E]">BUILD</span>
          </h2>
        </div>

        {/* Progress Tracker */}
        <div className="flex items-center gap-4 text-xs font-mono text-[#555555] bg-white border border-black/10 px-5 py-2.5 rounded-full shadow-sm">
          <span className="text-[#C87A3E] font-bold text-sm">0{activeIdx + 1}</span>
          <div className="w-24 bg-black/10 h-2 rounded-full overflow-hidden">
            <div
              className="bg-[#C87A3E] h-full transition-all duration-300"
              style={{ width: `${((activeIdx + 1) / MIND_STAGES.length) * 100}%` }}
            />
          </div>
          <span>0{MIND_STAGES.length}</span>
        </div>
      </div>

      {/* Main Stage Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 bg-white border border-black/10 rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-sm min-h-[400px] flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="p-4 bg-[#C87A3E]/10 rounded-2xl border border-[#C87A3E]/20 w-fit">
                {getIcon(current.icon)}
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#C87A3E] font-bold bg-[#ECEAE5] px-3 py-1 rounded-full">
                STAGE 0{activeIdx + 1} / 0{MIND_STAGES.length}
              </span>
            </div>

            <div>
              <h3 className="font-display font-black text-4xl sm:text-6xl text-[#111111] uppercase tracking-tight">
                {current.w}
              </h3>
              <p className="text-sm font-mono text-[#888888] uppercase tracking-wider mt-1">
                // {current.code}
              </p>
            </div>

            <p className="text-base sm:text-lg text-[#333333] font-normal leading-relaxed">
              {current.sub}
            </p>

            <div className="p-4 rounded-xl bg-[#ECEAE5] border border-black/5 text-xs font-mono text-[#555555]">
              <strong className="text-[#111111] font-bold uppercase">Implementation Note:</strong> {current.details}
            </div>
          </div>

          {/* Nav Controls */}
          <div className="flex items-center justify-between pt-8 mt-8 border-t border-black/10">
            <div className="flex gap-3">
              <button
                onClick={prevStage}
                className="p-3 rounded-xl bg-[#ECEAE5] hover:bg-[#C87A3E] hover:text-white transition-colors cursor-pointer text-[#111111]"
                aria-label="Previous Stage"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={nextStage}
                className="p-3 rounded-xl bg-[#111111] text-white hover:bg-[#C87A3E] transition-colors cursor-pointer"
                aria-label="Next Stage"
              >
                <ArrowRight size={18} />
              </button>
            </div>

            <span className="text-xs font-mono text-[#888888]">
              Press arrows to step through architecture
            </span>
          </div>
        </div>

        {/* Right Stage List */}
        <div className="lg:col-span-4 space-y-2">
          {MIND_STAGES.map((s, idx) => (
            <button
              key={s.w}
              onClick={() => setActiveIdx(idx)}
              className={`w-full p-4 rounded-2xl text-left transition-all cursor-pointer flex items-center justify-between border ${
                activeIdx === idx
                  ? 'bg-white border-[#C87A3E] shadow-sm text-[#111111]'
                  : 'bg-transparent border-transparent hover:bg-white/50 text-[#666666]'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`text-xs font-mono font-bold ${activeIdx === idx ? 'text-[#C87A3E]' : 'text-[#999999]'}`}>
                  0{idx + 1}
                </span>
                <span className="font-display font-black text-xl uppercase tracking-tight">
                  {s.w}
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#999999] uppercase">
                {activeIdx === idx ? 'Active' : 'Stage'}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
