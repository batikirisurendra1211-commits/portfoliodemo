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
      <header className="absolute top-0 inset-x-0 z-30 w-full px-6 sm:px-12 md:px-16 pt-6 sm:pt-8 flex items-center justify-between pointer-events-auto">
        {/* Top-Left: Clean Location Badge (No Date) */}
        <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm uppercase tracking-widest text-[#222222]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#C87A3E]" />
          <span className="font-bold">HYDERABAD, INDIA</span>
        </div>

        {/* Top-Right: Role / Tagline & Minimal Nav */}
        <div className="flex items-center gap-6 sm:gap-8">
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

          <span className="font-sans font-black text-xs sm:text-sm md:text-base tracking-wider uppercase text-[#222222]">
            FULL STACK DEVELOPER
          </span>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1 text-[#222222]"
            aria-label="Open Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* 2. BACKGROUND TYPOGRAPHY (Increased Font Size & Width, Spanning Across Viewport) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden px-2 sm:px-6">
        <h1 
          className="w-full flex items-center justify-center gap-10 sm:gap-16 md:gap-24 lg:gap-32 font-display font-black text-[#C87A3E] uppercase select-none whitespace-nowrap drop-shadow-sm"
          style={{
            fontSize: 'min(27vw, 68vh)',
            lineHeight: 0.85,
          }}
        >
          <span style={{ letterSpacing: '0.07em' }}>HEY</span>
          <span style={{ letterSpacing: '0.07em' }}>YOU</span>
        </h1>
      </div>

      {/* 3. FOREGROUND CHARACTER: FLUSH TO ABSOLUTE BOTTOM VIEWPORT (Full Head & Complete Both Shoulders) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none h-[76vh] sm:h-[82vh] md:h-[85vh] max-h-[880px] w-auto flex items-end justify-center">
        <img
          src="/assets/surendra_gameon_full.png"
          alt="Surendra Batikiri"
          className="h-full w-auto object-contain object-bottom filter contrast-[1.08]"
        />
      </div>

      {/* 4. BOTTOM BAR: FLUSH TO ABSOLUTE BOTTOM VIEWPORT (Corners Unobstructed) */}
      <footer className="absolute bottom-0 inset-x-0 z-20 w-full px-6 sm:px-12 md:px-16 pb-6 sm:pb-8 flex items-end justify-between pointer-events-none">
        {/* Bottom-Left: Stacked Role Callout */}
        <div className="space-y-0.5 text-left pointer-events-auto">
          <div className="font-sans font-black text-sm sm:text-base md:text-xl tracking-wider uppercase text-[#C87A3E] leading-tight">
            CREATIVE
          </div>
          <div className="font-sans font-black text-sm sm:text-base md:text-xl tracking-wider uppercase text-[#222222] leading-tight">
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
        <div className="flex flex-col items-end gap-2 sm:gap-3 text-right pointer-events-auto">
          <div className="space-y-0.5">
            <div className="font-sans font-black text-sm sm:text-base md:text-xl tracking-wider uppercase text-[#C87A3E] leading-tight">
              SURENDRA
            </div>
            <div className="font-sans font-black text-sm sm:text-base md:text-xl tracking-wider uppercase text-[#C87A3E] leading-tight">
              BATIKIRI
            </div>
          </div>

          {/* Solid Terracotta Square Accent (Exact Reference Detail) */}
          <div 
            className="w-5 h-5 sm:w-6 sm:h-6 bg-[#C87A3E] rounded-[2px] shadow-sm cursor-pointer hover:scale-110 transition-transform"
            onClick={() => onSelectSection('projects')}
            title="View Featured Projects"
          />
        </div>
      </footer>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col justify-between p-8 md:hidden bg-[#ECEAE5]/98 backdrop-blur-xl text-[#222222]"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="flex justify-between items-center border-b border-black/10 pb-4">
            <div>
              <span className="font-sans font-black text-xl text-[#C87A3E] tracking-wider uppercase">
                SURENDRA BATIKIRI
              </span>
              <p className="text-xs font-mono text-black/60">FULL STACK DEVELOPER</p>
            </div>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-[#222222]">
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-6 text-4xl font-display font-black uppercase text-[#222222]">
            {[
              { label: '01. ABOUT', id: 'about' },
              { label: '02. EDUCATION', id: 'education' },
              { label: '03. PROJECTS', id: 'projects' },
              { label: '04. TERMINAL', id: 'terminal' },
              { label: '05. CONTACT', id: 'contact' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="text-left hover:text-[#C87A3E] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="space-y-3 font-mono text-xs pt-4 border-t border-black/10">
            <button
              onClick={() => { setIsMobileMenuOpen(false); onOpenResume(); }}
              className="w-full py-3.5 rounded-xl font-bold uppercase bg-[#C87A3E] text-white hover:bg-[#b06730] transition-colors"
            >
              Open Resume OS
            </button>
            <div className="flex justify-between text-[11px] text-black/60 pt-2">
              <a href="https://sssilksarees.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:underline">
                sssilksarees.vercel.app ↗
              </a>
              <button onClick={onOpenAdmin} className="hover:underline">
                Admin Portal
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
