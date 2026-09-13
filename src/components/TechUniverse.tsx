import React, { useState } from 'react';
import {
  FileCode, Coffee, Binary, Table, Zap, Plug, Layers, Code, Palette,
  Database, Brain, Cpu, MessageSquare, Sparkles, GitBranch, Send,
  Triangle, Box, Terminal, ArrowRight
} from 'lucide-react';
import { SKILLS_DATA, SKILL_CATEGORIES } from '../data/portfolioData';

export const TechUniverse: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === activeCategory);

  const getSkillIcon = (icon: string) => {
    const props = { size: 20, className: "text-[#C87A3E]" };
    switch (icon) {
      case 'FileCode': return <FileCode {...props} />;
      case 'Coffee': return <Coffee {...props} />;
      case 'Binary': return <Binary {...props} />;
      case 'Table': return <Table {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Plug': return <Plug {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Code': return <Code {...props} />;
      case 'Palette': return <Palette {...props} />;
      case 'Database': return <Database {...props} />;
      case 'Brain': return <Brain {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'MessageSquare': return <MessageSquare {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'GitBranch': return <GitBranch {...props} />;
      case 'Send': return <Send {...props} />;
      case 'Triangle': return <Triangle {...props} />;
      case 'Box': return <Box {...props} />;
      case 'Terminal': return <Terminal {...props} />;
      default: return <Code {...props} />;
    }
  };

  return (
    <section id="skills" className="py-24 sm:py-36 px-6 sm:px-14 max-w-7xl mx-auto border-t border-black/10">
      {/* Top Chrome */}
      <div className="w-full flex items-center justify-between text-xs font-mono uppercase tracking-[0.25em] text-[#666666] mb-8 sm:mb-12">
        <span className="font-bold text-[#222222] tracking-widest">[ 05 ] TECHNOLOGY STACK &amp; TOOLS</span>
        <span className="text-[#C87A3E] font-bold">HYDERABAD, INDIA</span>
      </div>

      {/* Section Header */}
      <div className="mb-14">
        <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-[4.8rem] tracking-tight leading-none uppercase text-[#111111]">
          TECHNICAL <span className="text-[#C87A3E]">UNIVERSE</span>
        </h2>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2.5 mb-12">
        {SKILL_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-[#C87A3E] text-white font-bold shadow-sm'
                : 'bg-white text-[#555555] border border-black/10 hover:border-[#C87A3E] hover:text-[#111111]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((s) => (
          <div
            key={s.name}
            className="p-5 rounded-2xl bg-white border border-black/10 hover:border-[#C87A3E] transition-all duration-300 shadow-sm flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 bg-[#C87A3E]/10 rounded-xl">
                  {getSkillIcon(s.icon)}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#888888]">
                  {s.category.toUpperCase()}
                </span>
              </div>

              <div>
                <h3 className="font-sans font-bold text-base text-[#111111] group-hover:text-[#C87A3E] transition-colors">
                  {s.name}
                </h3>
                <p className="text-xs text-[#666666] font-normal leading-relaxed mt-1">
                  {s.desc}
                </p>
              </div>
            </div>

            {/* Proficiency Bar */}
            <div className="pt-4 mt-3 border-t border-black/5">
              <div className="flex justify-between items-center text-[10px] font-mono text-[#888888] mb-1.5">
                <span>PROFICIENCY</span>
                <span className="font-bold text-[#C87A3E]">{s.level}%</span>
              </div>
              <div className="w-full bg-black/5 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#C87A3E] h-full rounded-full transition-all duration-500"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
