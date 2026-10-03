import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PhoneCall, Mail, MapPin, Clock, ArrowUpRight, ExternalLink } from 'lucide-react';
import { COMPANY_CONFIG, NAVIGATION_LINKS } from '../config/constants';
import { Logo } from './Logo';

interface FooterProps {
  onOpenBookingModal: () => void;
  onOpenContactModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBookingModal, onOpenContactModal }) => {
  const location = useLocation();

  // On HOME PAGE ONLY, do not render footer content block
  if (location.pathname === '/') {
    return null;
  }

  return (
    <footer className="w-full bg-[#0B2236] text-white border-t border-white/[0.07] relative z-20">
      <div className="w-full max-w-[1440px] mx-auto py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 sm:pb-14 border-b border-white/[0.06]">
          
          {/* Column 1: Brand & Thoothukudi Identity (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Official SPL Logo Asset (No text recreation, no white box) */}
            <div>
              <Link
                to="/"
                className="inline-block transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spl-yellow rounded"
                aria-label="SPL Worldwide Express Home"
              >
                <Logo size="footer" className="w-[180px] min-[360px]:w-[220px] sm:w-[250px] lg:w-[280px] xl:w-[300px]" />
              </Link>
            </div>

            <p className="font-body text-slate-400 text-[14px] leading-relaxed max-w-[420px]">
              Based in Thoothukudi, Tamil Nadu. Coordinating dependable domestic courier movement across India and international express connections through established logistics networks.
            </p>

            <div className="pt-2 flex flex-col min-[380px]:flex-row items-stretch min-[380px]:items-center gap-3">
              <button
                type="button"
                onClick={onOpenBookingModal}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-[3px] bg-spl-yellow text-spl-navy-deep font-heading font-bold text-[12.5px] uppercase tracking-wider hover:shadow-md hover:-translate-y-0.5 transition-all shadow-2xs"
              >
                <span>Book a Shipment</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>

              <button
                type="button"
                onClick={() => {
                  if (onOpenContactModal) {
                    onOpenContactModal();
                  } else {
                    window.location.href = `tel:${COMPANY_CONFIG.primaryContactPhoneClean}`;
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-[3px] border border-slate-700 text-slate-300 font-heading font-medium text-[12.5px] hover:text-white hover:border-slate-500 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-spl-yellow" />
                <span>Call Dispatch</span>
              </button>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-[12px] tracking-[0.16em] uppercase text-slate-300">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-heading text-[13.5px] text-slate-400 hover:text-spl-yellow transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Dispatch & Location Information (4 cols) */}
          <div className="lg:col-span-4 space-y-3.5">
            <h4 className="font-heading font-bold text-[12px] tracking-[0.16em] uppercase text-slate-300">
              Thoothukudi Location
            </h4>

            <div className="space-y-2.5 text-[13.5px] font-body text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-spl-yellow shrink-0 mt-0.5" />
                <a
                  href={COMPANY_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors group flex items-center gap-1.5"
                >
                  <span>{COMPANY_CONFIG.address}</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-spl-yellow shrink-0" />
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-spl-yellow shrink-0" />
                <a
                  href={`tel:${COMPANY_CONFIG.primaryContactPhoneClean}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_CONFIG.primaryContactPhone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-spl-yellow shrink-0" />
                <a
                  href={`mailto:${COMPANY_CONFIG.primaryEmail}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {COMPANY_CONFIG.primaryEmail}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-spl-yellow shrink-0" />
                <span>{COMPANY_CONFIG.dispatchHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12.5px] text-slate-400 font-body text-center sm:text-left">
          <p>© {new Date().getFullYear()} SPL International Courier Solution. All rights reserved.</p>
          <p className="flex items-center justify-center sm:justify-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block shrink-0" />
            <span>Open daily from 10:00 AM to 10:00 PM for courier and cargo coordination</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
