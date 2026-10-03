import React from 'react';
import { MapPin, Package, Plane, Building2 } from 'lucide-react';

interface HighlightItem {
  icon: React.ElementType;
  title: string;
  subtitle: string;
}

const HIGHLIGHTS: HighlightItem[] = [
  {
    icon: MapPin,
    title: "LOCAL PICKUP",
    subtitle: "From Thoothukudi",
  },
  {
    icon: Package,
    title: "DOMESTIC DELIVERY",
    subtitle: "Across India",
  },
  {
    icon: Plane,
    title: "INTERNATIONAL AIR EXPRESS",
    subtitle: "Worldwide destinations",
  },
  {
    icon: Building2,
    title: "BUSINESS & COMMERCIAL",
    subtitle: "Shipments",
  },
];

export const HeroHighlights: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pt-1 max-w-[560px]">
      {HIGHLIGHTS.map((item, idx) => {
        const IconComponent = item.icon;
        return (
          <div
            key={idx}
            className="flex items-start gap-3 select-none group"
          >
            {/* Clean line icon with yellow/navy styling */}
            <div className="w-8 h-8 rounded-[4px] bg-slate-50 border border-slate-200/80 flex items-center justify-center flex-shrink-0 text-spl-navy-deep group-hover:border-spl-yellow group-hover:bg-white transition-colors">
              <IconComponent className="w-4 h-4 stroke-[1.8] text-spl-navy-deep" />
            </div>

            <div className="flex flex-col">
              <span className="font-heading font-bold text-[12px] sm:text-[12.5px] tracking-[0.06em] text-spl-navy-deep uppercase leading-tight">
                {item.title}
              </span>
              <span className="font-body text-[13px] text-slate-600 leading-snug mt-0.5">
                {item.subtitle}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
