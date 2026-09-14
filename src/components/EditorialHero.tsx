import React, { useState } from 'react';
import { ArrowUpRight, Menu, X, ArrowDown } from 'lucide-react';

interface EditorialHeroProps {
  onOpenResume: () => void;
  onOpenAdmin: () => void;
  onSelectSection: (id: string) => void;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({
  onOpenResume,
  onOpenAdmin,
  onSelectSection,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNav = (id: string) => {
    setIsMobileMenuOpen(false);
    onSelectSection(id);
  };

  return (
    <section 
      id="hero" 
      className="relative h-[100dvh] w-full overflow-hidden select-none bg-[#ECEAE5] text-[#222222] border-b border-black/10"
    >
      {/* 1. TOP HEADER (Date Removed - Clean Location Badge Left | Full Stack Developer Right) */}
      <header className="absolute top-0 inset-x-0 z-30 w-full px-4 sm:px-12 md:px-16 pt-5 sm:pt-8 flex items-center justify-between pointer-events-auto">
        {/* Top-Left: Clean Location Badge (No Date) */}
        <div className="flex items-center gap-2 sm:gap-2.5 font-mono text-[11px] sm:text-sm uppercase tracking-wider sm:tracking-widest text-[#222222]">
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#C87A3E]" />
          <span className="font-bold">HYDERABAD, INDIA</span>
        </div>

        {/* Top-Right: Role / Tagline & Minimal Nav */}
        <div className="flex items-center gap-4 sm:gap-8">
          <nav className="hidden md:flex items-center gap-5 text-xs font-mono uppercase tracking-widest text-[#444444]">
            <button
              onClick={() => handleNav('about')}
              className="hover:text-[#C87A3E] transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => handleNav('education')}
              className="hover:text-[#C87A3E] transition-colors cursor-pointer"
            >
              Education
            </button>
            <button
              onClick={() => handleNav('projects')}
              className="hover:text-[#C87A3E] transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="hover:text-[#C87A3E] transition-colors cursor-pointer"
            >
              Contact
            </button>
            <button
              onClick={onOpenResume}
              className="hover:text-[#C87A3E] transition-colors cursor-pointer font-bold text-[#222222] flex items-center gap-0.5"
            >
              <span>Resume</span>
              <ArrowUpRight size={12} />
            </button>
          </nav>

          <span className="hidden sm:inline-block font-sans font-black text-xs sm:text-sm md:text-base tracking-wider uppercase text-[#222222]">
            FULL STACK DEVELOPER
          </span>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-black/5 active:bg-black/10 text-[#222222] transition-colors"
            aria-label="Open Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* 2. BACKGROUND TYPOGRAPHY (Increased Font Size & Width, Spanning Across Viewport) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden px-3 sm:px-6 -translate-y-[3.5vh] sm:translate-y-0">
        <h1 
          className="w-full flex items-center justify-between sm:justify-center sm:gap-16 md:gap-24 lg:gap-32 font-display font-black text-[#C87A3E] uppercase select-none whitespace-nowrap drop-shadow-sm px-1 sm:px-0"
          style={{
            fontSize: 'min(27vw, 68vh)',
            lineHeight: 0.85,
          }}
        >
          <span className="inline-block transform scale-y-[1.8] sm:scale-y-100 origin-center tracking-tight sm:tracking-[0.07em]">HEY</span>
          <span className="inline-block transform scale-y-[1.8] sm:scale-y-100 origin-center tracking-tight sm:tracking-[0.07em]">YOU</span>
        </h1>
      </div>

      {/* 3. FOREGROUND CHARACTER: FLUSH TO ABSOLUTE BOTTOM VIEWPORT (Full Head & Complete Both Shoulders) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-[65%] sm:-translate-x-1/2 z-10 pointer-events-none h-[72vh] sm:h-[82vh] md:h-[85vh] max-h-[880px] w-auto flex items-end justify-center">
        <img
          src="/assets/surendra_gameon_full.png"
          alt="Surendra Batikiri"
          className="h-full w-auto max-w-none object-contain object-bottom filter contrast-[1.08]"
        />
      </div>

      {/* 4. BOTTOM BAR: FLUSH TO ABSOLUTE BOTTOM VIEWPORT (Corners Unobstructed) */}
      <footer className="absolute bottom-0 inset-x-0 z-20 w-full px-4 sm:px-12 md:px-16 pb-5 sm:pb-8 flex items-end justify-between pointer-events-none">
        {/* Bottom-Left: Stacked Role Callout */}
        <div className="space-y-0.5 text-left pointer-events-auto bg-[#ECEAE5]/85 sm:bg-transparent backdrop-blur-[2px] sm:backdrop-blur-none px-2 py-1 sm:p-0 rounded-lg shadow-sm sm:shadow-none border border-black/5 sm:border-none">
          <div className="font-sans font-black text-xs sm:text-base md:text-xl tracking-wider uppercase text-[#C87A3E] leading-tight">
            CREATIVE
          </div>
          <div className="font-sans font-black text-xs sm:text-base md:text-xl tracking-wider uppercase text-[#222222] leading-tight">
            FULL STACK DEVELOPER
          </div>
        </div>

        {/* Center Quick Scroll Hint */}
        <button
          onClick={() => onSelectSection('about')}
          className="hidden xl:flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-[#666666] hover:text-[#C87A3E] transition-colors cursor-pointer pb-1 pointer-events-auto"
        >
          <span>Explore Work</span>
          <ArrowDown size={12} className="animate-bounce" />
        </button>

        {/* Bottom-Right: Creator Signature + Solid Terracotta Square */}
        <div className="flex flex-col items-end gap-1.5 sm:gap-3 text-right pointer-events-auto">
          <div className="space-y-0.5 bg-[#ECEAE5]/85 sm:bg-transparent backdrop-blur-[2px] sm:backdrop-blur-none px-2 py-1 sm:p-0 rounded-lg text-right shadow-sm sm:shadow-none border border-black/5 sm:border-none">
            <div className="font-sans font-black text-xs sm:text-base md:text-xl tracking-wider uppercase text-[#C87A3E] leading-tight">
              SURENDRA
            </div>
            <div className="font-sans font-black text-xs sm:text-base md:text-xl tracking-wider uppercase text-[#C87A3E] leading-tight">
              BATIKIRI
            </div>
          </div>

          {/* Solid Terracotta Square Accent (Exact Reference Detail) */}
          <div 
            className="w-4 h-4 sm:w-6 sm:h-6 bg-[#C87A3E] rounded-[2px] shadow-sm cursor-pointer hover:scale-110 transition-transform"
            onClick={() => onSelectSection('projects')}
            title="View Featured Projects"
          />
        </div>
      </footer>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col justify-between p-6 sm:p-8 md:hidden bg-[#ECEAE5]/98 backdrop-blur-xl text-[#222222] overflow-y-auto"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="flex justify-between items-center border-b border-black/10 pb-4">
            <div>
              <span className="font-sans font-black text-lg sm:text-xl text-[#C87A3E] tracking-wider uppercase">
                SURENDRA BATIKIRI
              </span>
              <p className="text-[11px] sm:text-xs font-mono text-black/60">FULL STACK DEVELOPER</p>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="p-2 rounded-lg bg-black/5 text-[#222222] hover:bg-black/10 transition-colors"
              aria-label="Close Navigation Menu"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="flex flex-col gap-3.5 sm:gap-5 py-6 text-2xl sm:text-3xl font-display font-black uppercase text-[#222222]">
            {[
              { label: '01. ABOUT', id: 'about' },
              { label: '02. EDUCATION', id: 'education' },
              { label: '03. PROJECTS', id: 'projects' },
              { label: '04. MIND & PROCESS', id: 'mind' },
              { label: '05. TECH STACK', id: 'skills' },
              { label: '06. TERMINAL', id: 'terminal' },
              { label: '07. ACHIEVEMENTS', id: 'achievements' },
              { label: '08. CONTACT', id: 'contact' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="text-left hover:text-[#C87A3E] transition-colors py-0.5"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="space-y-3 font-mono text-xs pt-4 border-t border-black/10">
            <button
              onClick={() => { setIsMobileMenuOpen(false); onOpenResume(); }}
              className="w-full py-3 rounded-xl font-bold uppercase bg-[#C87A3E] text-white hover:bg-[#b06730] transition-colors shadow-sm"
            >
              Open Resume OS
            </button>
            <div className="flex justify-between items-center text-[11px] text-black/60 pt-1">
              <a href="https://sssilksarees.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#C87A3E] font-bold">
                sssilksarees.vercel.app ↗
              </a>
              <button onClick={onOpenAdmin} className="hover:underline text-[#555555]">
                Admin Portal
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
