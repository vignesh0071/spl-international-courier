import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, PhoneCall, Navigation, ArrowUpRight, ArrowRight, Package, Clock, ShieldCheck } from 'lucide-react';
import { Button } from './Button';
import { COMPANY_CONFIG } from '../config/constants';

interface LocalPresenceSectionProps {
  onOpenBookingModal: () => void;
  onOpenContactModal?: () => void;
}

export const LocalPresenceSection: React.FC<LocalPresenceSectionProps> = ({
  onOpenBookingModal,
  onOpenContactModal,
}) => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#F8F7F2] py-14 sm:py-18 lg:py-20 border-b border-spl-border/80">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header Block */}
        <div className="max-w-[760px] mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200/90 mb-3 select-none shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-spl-yellow shrink-0" />
            <span className="font-heading font-bold text-[11px] tracking-[0.16em] uppercase text-slate-600">
              LOCAL COURIER OFFICE &amp; DISPATCH SERVICES
            </span>
          </div>

          <h2 className="font-display font-extrabold text-[26px] min-[360px]:text-[30px] sm:text-[38px] lg:text-[42px] text-spl-navy-deep leading-tight mb-4">
            SPL Worldwide Express in Thoothukudi
          </h2>

          <p className="font-body text-slate-700 text-[15px] sm:text-[16px] leading-relaxed">
            Based in Thoothukudi, Tamil Nadu, SPL Worldwide Express provides reliable courier solutions for individuals, students, families, and commercial businesses. Customers can visit our Thoothukudi counter directly or contact our team for convenient doorstep courier pickup.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-12">
          {/* Card 1: Domestic */}
          <div className="p-6 sm:p-7 rounded-lg bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between hover:shadow-xs transition-shadow">
            <div>
              <div className="w-11 h-11 rounded-[4px] bg-slate-50 border border-slate-200 flex items-center justify-center text-spl-navy-deep mb-4">
                <Package className="w-5 h-5 text-spl-navy-deep" />
              </div>
              <h3 className="font-heading font-bold text-[15px] sm:text-[16px] text-spl-navy-deep uppercase tracking-wide mb-2">
                Domestic Courier Shipping
              </h3>
              <p className="font-body text-[13.5px] sm:text-[14px] text-[#46515C] leading-relaxed">
                Dependable parcel delivery and express document dispatches connecting Thoothukudi with Chennai, Bangalore, Mumbai, Hyderabad, Delhi, and all regional destinations across India.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[12.5px] font-heading font-semibold text-spl-navy-deep">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-spl-yellow shrink-0" />
                <span>Door-to-door across India</span>
              </div>
              <button
                type="button"
                onClick={() => navigate('/domestic-international')}
                className="text-spl-navy-deep hover:text-slate-600 inline-flex items-center gap-1 text-[12px] uppercase font-bold tracking-wider cursor-pointer"
              >
                <span>Explore</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: International */}
          <div className="p-6 sm:p-7 rounded-lg bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between hover:shadow-xs transition-shadow">
            <div>
              <div className="w-11 h-11 rounded-[4px] bg-slate-50 border border-slate-200 flex items-center justify-center text-spl-navy-deep mb-4">
                <Navigation className="w-5 h-5 text-spl-navy-deep" />
              </div>
              <h3 className="font-heading font-bold text-[15px] sm:text-[16px] text-spl-navy-deep uppercase tracking-wide mb-2">
                International Air Courier
              </h3>
              <p className="font-body text-[13.5px] sm:text-[14px] text-[#46515C] leading-relaxed">
                Cost-effective overseas courier services connecting Thoothukudi to the USA, UK, UAE, Canada, Singapore, Australia, and Europe through established global logistics networks.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[12.5px] font-heading font-semibold text-spl-navy-deep">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-spl-yellow shrink-0" />
                <span>Customs support</span>
              </div>
              <button
                type="button"
                onClick={() => navigate('/domestic-international')}
                className="text-spl-navy-deep hover:text-slate-600 inline-flex items-center gap-1 text-[12px] uppercase font-bold tracking-wider cursor-pointer"
              >
                <span>Worldwide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: Counter & Office */}
          <div className="p-6 sm:p-7 rounded-lg bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between hover:shadow-xs transition-shadow">
            <div>
              <div className="w-11 h-11 rounded-[4px] bg-slate-50 border border-slate-200 flex items-center justify-center text-spl-navy-deep mb-4">
                <MapPin className="w-5 h-5 text-spl-yellow" />
              </div>
              <h3 className="font-heading font-bold text-[15px] sm:text-[16px] text-spl-navy-deep uppercase tracking-wide mb-2">
                Thoothukudi Courier Counter
              </h3>
              <p className="font-body text-[13.5px] sm:text-[14px] text-[#46515C] leading-relaxed">
                Visit our office for parcel drop-offs, weight checks, rate calculations, and packing guidance. We handle personal packages, legal records, student certificates, and commercial consignments.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[12.5px] font-heading font-semibold text-spl-navy-deep">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-spl-yellow shrink-0" />
                <span>10 AM – 10 PM daily</span>
              </div>
              <button
                type="button"
                onClick={() => onOpenContactModal ? onOpenContactModal() : navigate('/contact')}
                className="text-spl-navy-deep hover:text-slate-600 inline-flex items-center gap-1 text-[12px] uppercase font-bold tracking-wider cursor-pointer"
              >
                <span>Contact</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Location & Action Banner */}
        <div className="p-6 sm:p-8 rounded-lg bg-white border border-slate-200/90 shadow-2xs flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-[12px] font-heading font-bold uppercase tracking-wider text-slate-500">
              <MapPin className="w-4 h-4 text-spl-yellow shrink-0" />
              <span>OFFICE LOCATION</span>
            </div>
            <p className="font-heading font-bold text-[16px] sm:text-[17px] text-spl-navy-deep">
              {COMPANY_CONFIG.address}
            </p>
            <p className="font-body text-[13.5px] text-slate-600">
              Direct counter service, phone assistance, and doorstep courier pickup across Thoothukudi.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <Button
              variant="primary"
              size="md"
              onClick={onOpenBookingModal}
              icon={<ArrowUpRight className="w-4 h-4 stroke-[2.5]" />}
              className="font-heading font-bold justify-center"
            >
              BOOK A SHIPMENT
            </Button>

            <a
              href={`tel:${COMPANY_CONFIG.primaryContactPhoneClean}`}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-[4px] border border-slate-300 font-heading font-bold text-[13px] text-spl-navy-deep hover:bg-slate-50 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-spl-navy-deep" />
              <span>CALL {COMPANY_CONFIG.primaryContactPhone}</span>
            </a>

            <a
              href={COMPANY_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-[4px] bg-spl-navy-deep text-white font-heading font-bold text-[13px] hover:bg-spl-navy-secondary transition-colors"
            >
              <Navigation className="w-3.5 h-3.5 text-spl-yellow" />
              <span>GET DIRECTIONS</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
