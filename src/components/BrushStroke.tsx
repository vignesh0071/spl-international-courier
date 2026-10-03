import React from 'react';

interface BrushStrokeProps {
  className?: string;
  color?: string;
}

export const BrushStroke: React.FC<BrushStrokeProps> = ({
  className = '',
  color = '#FFCC00',
}) => {
  return (
    <svg
      viewBox="0 0 340 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* Hand-painted organic brush stroke with natural tapered ends and bristle pressure variation */}
      <path
        d="M2.5 13.8C28.2 11.4 75.8 8.7 132.4 8.2C188.9 7.6 254.3 9.1 315.6 13.1C325.2 13.7 334.8 14.4 338.2 15.2C337.5 16.6 331.4 17.8 322.8 18.2C281.5 20.3 226.7 20.8 171.2 20.5C115.8 20.1 59.7 18.9 14.3 16.4C8.6 16.1 4.1 15.2 2.5 13.8Z"
        fill={color}
        fillOpacity="0.88"
      />
      {/* Secondary bristle trail for authentic human painted feel */}
      <path
        d="M18 17.5C65 19.8 142 20.6 218 19.9C265 19.4 308 18.2 331 16.5C320 18.8 260 21.2 195 21.5C130 21.8 55 20.5 18 17.5Z"
        fill={color}
        fillOpacity="0.6"
      />
      <path
        d="M6 10.5C45 8.2 110 6.5 185 6.8C245 7.1 305 9.5 330 11.8C295 9.8 230 7.8 165 7.6C100 7.4 35 9.2 6 10.5Z"
        fill={color}
        fillOpacity="0.4"
      />
    </svg>
  );
};
