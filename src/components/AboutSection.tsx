import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="relative min-h-[100dvh] w-full bg-[#ECEAE5] text-[#222222] py-14 sm:py-24 px-4 sm:px-14 flex flex-col justify-between border-b border-black/10 select-none">
      {/* 1. Top Section Chrome */}
      <div className="w-full flex items-center justify-between text-[11px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-[0.25em] text-[#666666] mb-6 sm:mb-12">
        <span className="font-bold text-[#222222] tracking-wider sm:tracking-widest">[ 01 ] BIOGRAPHY &amp; CAPABILITIES</span>
        <span className="text-[#C87A3E] font-bold">HYDERABAD, INDIA</span>
      </div>

      {/* 2. Main Two-Column Editorial Layout (Image 3 Reference Style, Tightly Grouped) */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-1 my-auto py-4 sm:py-6">
        {/* Left Column: Single Line Bold Heading + Narrative */}
        <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-[4.8rem] tracking-[0.05em] leading-none uppercase text-[#111111]">
            HELLO, I'M <span className="text-[#C87A3E]">SURENDRA</span>
          </h2>

          <div className="max-w-xl text-[#333333] font-normal text-xs sm:text-base leading-relaxed space-y-3 font-sans">
            <p>
              Motivated Computer Science graduate and aspiring Full Stack Developer with hands-on Python programming, SQL database design, and backend development fundamentals. Demonstrated ability to build end-to-end systems through academic projects and a self-built, deployed e-commerce web application spanning machine learning, AI integration, and data-driven application design.
            </p>
            <p className="text-[#666666] text-[11px] sm:text-sm font-mono">
              Certified in Java Full Stack Development (Pentagon Coaching Center, Bangalore). Quick learner with a strong problem-solving mindset, eager to contribute to AI-powered product engineering.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <button
              onClick={onOpenResume}
              className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#111111] text-white font-mono font-bold text-xs uppercase tracking-widest hover:bg-[#C87A3E] transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-sm"
            >
              Resume OS <ArrowUpRight size={13} />
            </button>
            <a
              href="https://sssilksarees.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full border border-black/20 text-[#111111] font-mono font-bold text-xs uppercase tracking-widest hover:border-[#C87A3E] hover:text-[#C87A3E] transition-colors flex items-center justify-center gap-2"
            >
              Live E-Commerce ↗
            </a>
          </div>
        </div>

        {/* Right Column: Solid Circular Graphic with Cutout Layered */}
        <div className="lg:col-span-5 flex items-center justify-center lg:justify-end relative">
          <div className="relative w-full max-w-[260px] sm:max-w-[360px] lg:max-w-[440px] flex items-end justify-center transition-transform duration-500 hover:scale-[1.02]">
            <img
              src="/assets/surendra_about_circle.png?v=3"
              alt="Surendra"
              className="relative z-10 w-full h-auto object-contain object-bottom drop-shadow-[0_20px_45px_rgba(0,0,0,0.12)] filter contrast-[1.04]"
            />
          </div>
        </div>
      </div>

      {/* 3. Bottom Meta Row */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-3 pt-5 sm:pt-6 border-t border-black/10 text-[#666666] text-[11px] sm:text-xs font-mono mt-6 sm:mt-8">
        <div className="flex flex-wrap items-center gap-4 sm:gap-10">
          <a href="https://sssilksarees.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#111111] font-bold hover:text-[#C87A3E] hover:underline">
            sssilksarees.vercel.app
          </a>
          <span>@batikirisurendra</span>
          <span className="hidden md:inline">Hyderabad, Telangana, India</span>
        </div>
        <div className="text-[#888888] text-[10px] sm:text-[11px]">
          <span>Full Stack &amp; Backend Engineer</span>
        </div>
      </div>
    </section>
  );
};
