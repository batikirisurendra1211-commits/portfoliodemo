import React from 'react';
import { ArrowUp, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenAdmin }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-black/10 bg-[#ECEAE5] text-[#222222] py-16 px-6 sm:px-14">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-3">
            <h3 className="font-display font-black text-3xl sm:text-4xl tracking-tight text-[#111111] uppercase">
              SURENDRA BATIKIRI<span className="text-[#C87A3E]">.</span>
            </h3>
            <p className="text-xs font-mono text-[#666666] leading-relaxed max-w-sm">
              FULL STACK DEVELOPER · BACKEND ENGINEER · AI/ML BUILDER
              <br />
              HYDERABAD, TELANGANA, INDIA
            </p>
            <div className="pt-2">
              <a 
                href="https://sssilksarees.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs font-mono text-[#C87A3E] font-bold hover:underline inline-flex items-center gap-1"
              >
                sssilksarees.vercel.app <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-2 text-xs font-mono">
            <p className="uppercase tracking-widest text-[#C87A3E] text-[10px] mb-3 font-bold">// Navigation</p>
            <p><a href="#about" className="text-[#555555] hover:text-[#111111] transition-colors">01. About Me</a></p>
            <p><a href="#education" className="text-[#555555] hover:text-[#111111] transition-colors">02. Education &amp; Degrees</a></p>
            <p><a href="#projects" className="text-[#555555] hover:text-[#111111] transition-colors">03. Selected Projects</a></p>
            <p><a href="#mind" className="text-[#555555] hover:text-[#111111] transition-colors">04. Engineering Mind</a></p>
            <p><a href="#skills" className="text-[#555555] hover:text-[#111111] transition-colors">05. Tech Universe</a></p>
            <p><a href="#terminal" className="text-[#555555] hover:text-[#111111] transition-colors">06. Developer Terminal</a></p>
            <p><a href="#contact" className="text-[#555555] hover:text-[#111111] transition-colors">07. Contact</a></p>
          </div>

          {/* Direct Connect */}
          <div className="md:col-span-3 space-y-3 text-xs font-mono">
            <p className="uppercase tracking-widest text-[#C87A3E] text-[10px] mb-3 font-bold">// Direct Contact</p>
            <p className="text-[#444444] break-all">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-[#C87A3E] transition-colors">
                {PERSONAL_INFO.email}
              </a>
            </p>
            <p className="text-[#444444]">
              <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-[#C87A3E] transition-colors">
                {PERSONAL_INFO.phone}
              </a>
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={onOpenResume}
                className="w-fit text-xs font-mono text-[#111111] font-bold hover:text-[#C87A3E] transition-colors cursor-pointer"
              >
                → View Resume OS
              </button>
              <button
                onClick={onOpenAdmin}
                className="w-fit text-[11px] font-mono text-[#888888] hover:text-[#111111] transition-colors cursor-pointer"
              >
                → Admin &amp; Analytics Portal
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#666666]">
          <p>© 2025 Surendra Batikiri. Built with React, TypeScript &amp; FastAPI.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#222222] hover:text-[#C87A3E] transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
