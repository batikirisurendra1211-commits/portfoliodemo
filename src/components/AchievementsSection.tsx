
import React from 'react';
import { Rocket, BrainCircuit, Sparkles, Award, Languages, BookOpen } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    const props = { size: 22, className: "text-white" };
    switch (iconName) {
      case 'Rocket': return <Rocket {...props} />;
      case 'BrainCircuit': return <BrainCircuit {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Award': return <Award {...props} />;
      case 'Languages': return <Languages {...props} />;
      case 'BookOpen': return <BookOpen {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section id="achievements" className="py-16 sm:py-36 px-4 sm:px-14 max-w-7xl mx-auto border-t border-black/10">
      {/* Top Chrome */}
      <div className="w-full flex items-center justify-between text-[11px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-[0.25em] text-[#666666] mb-6 sm:mb-12">
        <span className="font-bold text-[#222222] tracking-wider sm:tracking-widest">[ 07 ] WHAT I'M PROUD OF</span>
        <span className="text-[#C87A3E] font-bold">HYDERABAD, INDIA</span>
      </div>

      <div className="mb-8 sm:mb-14">
        <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-[4.8rem] tracking-[0.05em] leading-none uppercase text-[#111111]">
          HIGHLIGHTS &amp; <span className="text-[#C87A3E]">STRENGTHS</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {ACHIEVEMENTS_DATA.map((ach, idx) => (
          <div
            key={idx}
            className="bg-white border border-black/10 rounded-2xl p-5 sm:p-7 flex flex-col justify-between group hover:border-[#C87A3E] hover:shadow-md transition-all"
          >
            <div>
              <div className="p-3 bg-[#C87A3E] rounded-xl w-fit mb-5 shadow-sm">
                {getIcon(ach.icon)}
              </div>
              <h3 className="font-sans font-bold text-xl text-[#111111] mb-2 group-hover:text-[#C87A3E] transition-colors">
                {ach.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] font-normal leading-relaxed">
                {ach.desc}
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-black/10 text-[10px] font-mono text-[#888888] flex justify-between items-center">
              <span>HIGHLIGHT #{idx + 1}</span>
              <span className="text-[#C87A3E] font-bold">VERIFIED</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
