import React from 'react';

export const SceneGrid: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(239, 238, 233, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(239, 238, 233, 0.08) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at 50% 50%, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 20%, transparent 80%)'
        }}
      />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#0a0a0d] to-transparent" />
    </div>
  );
};
