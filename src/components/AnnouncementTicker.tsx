import React from 'react';

const TICKER_ITEMS = [
  { text: "SPL WORLDWIDE EXPRESS", isYellow: true },
  { text: "LOCAL PICKUP FROM THOOTHUKUDI", isYellow: false },
  { text: "DOMESTIC DELIVERY ACROSS INDIA", isYellow: false },
  { text: "INTERNATIONAL AIR EXPRESS", isYellow: true },
  { text: "RELIABLE AIR FREIGHT & COMMERCIAL SHIPMENTS", isYellow: false },
  { text: "DAILY DISPATCH SUPPORT", isYellow: true },
];

export const AnnouncementTicker: React.FC = () => {
  // Render one single contiguous content unit containing 3 sequence repetitions
  // so that one copy is wide enough (~4800px) to exceed any 4K screen width without gaps
  const renderContentUnit = (keyPrefix: string) => (
    <div key={keyPrefix} className="flex items-center shrink-0">
      {[1, 2, 3].map((round) => (
        <React.Fragment key={`${keyPrefix}-round-${round}`}>
          {TICKER_ITEMS.map((item, idx) => (
            <React.Fragment key={`${keyPrefix}-${round}-${idx}`}>
              <span
                className={`font-heading font-semibold text-[11px] sm:text-[11.5px] tracking-[0.11em] uppercase shrink-0 whitespace-nowrap ${
                  item.isYellow ? 'text-spl-yellow' : 'text-slate-200'
                }`}
              >
                {item.text}
              </span>
              <span className="mx-3.5 text-slate-400 select-none shrink-0" aria-hidden="true">
                •
              </span>
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <aside
      aria-label="Service Announcements"
      className="w-full bg-[#071A2B] text-slate-200 border-b border-[#0D2638] h-[32px] sm:h-[34px] overflow-hidden select-none relative z-30"
    >
      {/* Continuous marquee track with two identical copies (translate3d 0 -> -50%) */}
      <div className="marquee-track flex w-max shrink-0">
        {renderContentUnit("copy-1")}
        {renderContentUnit("copy-2")}
      </div>
    </aside>
  );
};
