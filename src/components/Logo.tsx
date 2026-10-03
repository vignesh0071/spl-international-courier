import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'header' | 'footer';
  size?: 'sm' | 'md' | 'lg' | 'footer';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'header',
  size = 'md',
}) => {
  const isDark = variant === 'dark';

  // Sizing configurations based on 3:1 aspect ratio
  const sizeStyles = {
    sm: "h-[32px] w-auto max-w-[125px]",
    md: "h-[38px] sm:h-[44px] w-auto max-w-[150px] sm:max-w-[175px]",
    lg: "h-[48px] sm:h-[54px] w-auto max-w-[180px] sm:max-w-[210px]",
    footer: "w-[220px] sm:w-[260px] lg:w-[280px] xl:w-[300px] h-auto max-w-full",
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {isDark ? (
        // High-contrast clean white enclosure for dark surfaces
        <div className="bg-white px-2.5 py-1 rounded-[4px] shadow-xs flex items-center justify-center">
          <img
            src="/spl-official-logo-transparent.png"
            alt="SPL International Courier Solution"
            className={`${sizeStyles[size]} object-contain`}
            loading="eager"
            fetchPriority="high"
          />
        </div>
      ) : (
        // Standard transparent presentation on light/header canvas
        <img
          src="/spl-official-logo-transparent.png"
          alt="SPL International Courier Solution"
          className={`${sizeStyles[size]} object-contain drop-shadow-2xs`}
          loading="eager"
          fetchPriority="high"
        />
      )}
    </div>
  );
};
