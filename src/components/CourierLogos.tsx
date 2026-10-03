import React from 'react';

/**
 * Official Courier Network Brand Logos for DHL, UPS, FedEx, and Aramex.
 * Uses the authentic image assets provided for each carrier.
 * No text recreation, no font substitutes, no recoloring.
 */

export const DHLLogo: React.FC<{ className?: string }> = ({
  className = "max-h-[36px] sm:max-h-[40px] max-w-[130px] sm:max-w-[140px] w-auto h-auto object-contain",
}) => (
  <img
    src="/images/logos/dhl.png"
    alt="DHL"
    className={`object-contain select-none ${className}`}
    loading="lazy"
  />
);

export const UPSLogo: React.FC<{ className?: string }> = ({
  className = "max-h-[46px] sm:max-h-[50px] max-w-[50px] sm:max-w-[55px] w-auto h-auto object-contain",
}) => (
  <img
    src="/images/logos/ups.png"
    alt="UPS"
    className={`object-contain select-none ${className}`}
    loading="lazy"
  />
);

export const FedExLogo: React.FC<{ className?: string }> = ({
  className = "max-h-[32px] sm:max-h-[36px] max-w-[125px] sm:max-w-[135px] w-auto h-auto object-contain",
}) => (
  <img
    src="/images/logos/fedex.png"
    alt="FedEx"
    className={`object-contain select-none ${className}`}
    loading="lazy"
  />
);

export const AramexLogo: React.FC<{ className?: string }> = ({
  className = "max-h-[22px] sm:max-h-[26px] max-w-[135px] sm:max-w-[145px] w-auto h-auto object-contain",
}) => (
  <img
    src="/images/logos/aramex.png"
    alt="Aramex"
    className={`object-contain select-none ${className}`}
    loading="lazy"
  />
);

interface CourierLogosRowProps {
  className?: string;
}

export const CourierLogosRow: React.FC<CourierLogosRowProps> = ({ className = '' }) => {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-center justify-items-center ${className}`}>
      {/* 1. DHL Card */}
      <div className="w-full h-20 sm:h-22 px-5 rounded-[4px] bg-slate-50/80 border border-slate-200/90 flex items-center justify-center hover:bg-white hover:border-slate-300 transition-colors shadow-2xs">
        <DHLLogo />
      </div>

      {/* 2. UPS Card */}
      <div className="w-full h-20 sm:h-22 px-5 rounded-[4px] bg-slate-50/80 border border-slate-200/90 flex items-center justify-center hover:bg-white hover:border-slate-300 transition-colors shadow-2xs">
        <UPSLogo />
      </div>

      {/* 3. FedEx Card */}
      <div className="w-full h-20 sm:h-22 px-5 rounded-[4px] bg-slate-50/80 border border-slate-200/90 flex items-center justify-center hover:bg-white hover:border-slate-300 transition-colors shadow-2xs">
        <FedExLogo />
      </div>

      {/* 4. Aramex Card */}
      <div className="w-full h-20 sm:h-22 px-5 rounded-[4px] bg-slate-50/80 border border-slate-200/90 flex items-center justify-center hover:bg-white hover:border-slate-300 transition-colors shadow-2xs">
        <AramexLogo />
      </div>
    </div>
  );
};
