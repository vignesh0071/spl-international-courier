import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';

export const PageLoader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Quick, professional page load transition (~450ms)
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 400);

    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-white flex flex-col items-center justify-center transition-opacity duration-300 pointer-events-none select-none ${
        fading ? 'opacity-0' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-4 animate-pulse">
        <Logo size="lg" />
        {/* Subtle Brand Yellow Progress Indicator */}
        <div className="w-36 h-[2.5px] bg-slate-100 rounded-full overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 bg-spl-yellow w-full animate-ticker" />
        </div>
      </div>
    </div>
  );
};
