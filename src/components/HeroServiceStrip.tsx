import React from 'react';
import { MapPin, Truck, Plane, Globe } from 'lucide-react';

interface ServiceStripItem {
  icon: React.ElementType;
  title: string;
  subtitle: string;
}

const SERVICE_ITEMS: ServiceStripItem[] = [
  {
    icon: MapPin,
    title: "LOCAL PICKUP",
    subtitle: "Thoothukudi, Tamil Nadu",
  },
  {
    icon: Truck,
    title: "DOMESTIC DELIVERY",
    subtitle: "Across India",
  },
  {
    icon: Plane,
    title: "AIR EXPRESS",
    subtitle: "Fast & Secure",
  },
  {
    icon: Globe,
    title: "WORLDWIDE DELIVERY",
    subtitle: "Global Reach",
  },
];

export const HeroServiceStrip: React.FC = () => {
  return (
    <div className="w-full bg-[#071A2B] text-white border-y border-white/[0.08] relative z-10 shadow-sm">
      <div className="w-full max-w-[1680px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 divide-white/10 sm:divide-x lg:divide-white/10">
          {SERVICE_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="py-4 sm:py-5 lg:py-0 lg:h-[88px] px-3 sm:px-6 xl:px-8 flex items-center gap-3 sm:gap-4 transition-colors hover:bg-white/[0.02]"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[4px] bg-spl-navy-secondary/90 flex items-center justify-center flex-shrink-0 text-spl-yellow border border-white/10 shadow-xs">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.9]" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-spl-yellow/70 tracking-wider">
                      0{index + 1}
                    </span>
                    <h4 className="font-heading font-bold text-[12px] sm:text-[13px] tracking-[0.05em] uppercase text-white truncate">
                      {item.title}
                    </h4>
                  </div>
                  <p className="font-body text-[12px] sm:text-[12.5px] text-slate-300 truncate">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
