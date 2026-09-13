import React, { useState, useEffect } from 'react';

interface IntroPreloaderProps {
  onComplete: () => void;
}

export const IntroPreloader: React.FC<IntroPreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Fast, smooth 1.2s reveal
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(onComplete, 500);
          }, 200);
          return 100;
        }
        return prev + 4;
      });
    }, 35);

    return () => clearInterval(timer);
  }, [onComplete]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(onComplete, 200);
  };

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#ECEAE5] flex flex-col items-center justify-center p-6 text-[#111111] transition-all duration-500 select-none ${
        isExiting ? 'opacity-0 filter blur-md pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="max-w-lg w-full text-center space-y-6">
        {/* Editorial Init Header */}
        <div className="space-y-2">
          <p className="text-[11px] font-mono uppercase tracking-[0.4em] text-[#C87A3E] font-bold">
            PORTFOLIO 2026
          </p>
          <h1 className="font-display font-black text-5xl sm:text-7xl tracking-tight leading-[0.9] text-[#111111] uppercase">
            SURENDRA BATIKIRI
          </h1>
          <p className="text-xs sm:text-sm font-mono text-[#666666] tracking-widest uppercase">
            FULL STACK DEVELOPER · BACKEND &amp; AI/ML
          </p>
        </div>

        {/* Minimal Terracotta Accent Line */}
        <div className="w-48 sm:w-64 mx-auto bg-black/10 h-1 rounded-full overflow-hidden">
          <div
            className="bg-[#C87A3E] h-full transition-all duration-75 ease-out shadow-[0_0_12px_rgba(200,122,62,0.4)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Action Button */}
        <div>
          <button
            onClick={handleSkip}
            className="px-6 py-2 rounded-full border border-black/20 text-[#333333] hover:text-[#C87A3E] hover:border-[#C87A3E] text-xs font-mono uppercase tracking-widest transition-colors cursor-pointer"
          >
            Enter Experience →
          </button>
        </div>
      </div>
    </div>
  );
};
