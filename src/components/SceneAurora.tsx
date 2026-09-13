import React from 'react';

export const SceneAurora: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
      <div
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full filter blur-[100px] opacity-40 animate-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(110, 155, 255, 0.4) 0%, rgba(20, 20, 28, 0) 70%)',
          animationDuration: '8s'
        }}
      />
      <div
        className="absolute top-[30%] -right-[15%] w-[60vw] h-[60vw] rounded-full filter blur-[120px] opacity-30 animate-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(239, 238, 233, 0.3) 0%, rgba(10, 10, 13, 0) 70%)',
          animationDuration: '12s',
          animationDelay: '2s'
        }}
      />
      <div
        className="absolute -bottom-[20%] left-[20%] w-[80vw] h-[50vw] rounded-full filter blur-[110px] opacity-35"
        style={{
          background: 'radial-gradient(circle, rgba(111, 227, 255, 0.25) 0%, rgba(10, 10, 13, 0) 70%)'
        }}
      />
    </div>
  );
};
