import React from 'react';
import { ArrowUpRight, PhoneCall, MapPin, Clock } from 'lucide-react';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';
import { COMPANY_CONFIG } from '../config/constants';

interface ContactPlaceholderProps {
  onOpenBookingModal: () => void;
  onOpenContactModal?: () => void;
}

export const ContactPlaceholder: React.FC<ContactPlaceholderProps> = ({
  onOpenBookingModal,
  onOpenContactModal,
}) => {
  return (
    <div className="w-full bg-[#F8F7F2] text-spl-navy-deep min-h-screen flex flex-col justify-between">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-10 sm:pt-12 lg:pt-14 pb-16 lg:pb-20">
        <div className="max-w-[760px]">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-spl-yellow inline-block" />
            <span className="font-heading font-bold text-[12px] tracking-[0.16em] uppercase text-spl-navy-deep">
              GET IN TOUCH
            </span>
            <span className="text-slate-300 font-normal">|</span>
            <span className="font-heading font-semibold text-[11.5px] tracking-[0.12em] uppercase text-slate-500">
              THOOTHUKUDI DISPATCH HUB
            </span>
          </div>

          <h1 className="font-display font-extrabold text-[28px] min-[360px]:text-[34px] sm:text-[44px] lg:text-[52px] text-spl-navy-deep leading-tight mb-5">
            Contact SPL Worldwide Express
          </h1>

          <p className="font-body text-slate-600 text-[16px] leading-relaxed mb-10">
            For parcel pick-ups, commercial cargo bookings, customs clearance advice, or rate calculations, connect directly with our Thoothukudi dispatch team.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="p-6 bg-white border border-slate-200/90 rounded-[4px] shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-[4px] bg-slate-50 border border-slate-200 flex items-center justify-center text-spl-navy-deep">
                <PhoneCall className="w-5 h-5 text-spl-navy-deep" />
              </div>
              <h3 className="font-heading font-bold text-[15px] uppercase tracking-wide text-spl-navy-deep">
                Phone &amp; WhatsApp
              </h3>
              <p className="font-body text-[14px] text-slate-600">
                Direct helpline for instant quotes and dispatch coordination.
              </p>
              <a
                href={`tel:${COMPANY_CONFIG.primaryContactPhoneClean}`}
                className="font-heading font-bold text-[16px] text-spl-navy-deep hover:underline decoration-spl-yellow inline-block pt-1"
              >
                {COMPANY_CONFIG.primaryContactPhone}
              </a>
            </div>

            <div className="p-6 bg-white border border-slate-200/90 rounded-[4px] shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-[4px] bg-slate-50 border border-slate-200 flex items-center justify-center text-spl-navy-deep">
                <MapPin className="w-5 h-5 text-spl-navy-deep" />
              </div>
              <h3 className="font-heading font-bold text-[15px] uppercase tracking-wide text-spl-navy-deep">
                Dispatch Hub Address
              </h3>
              <p className="font-body text-[14px] text-slate-600">
                {COMPANY_CONFIG.address}
              </p>
              <div className="flex items-center gap-2 pt-1 text-[13px] font-heading text-slate-500">
                <Clock className="w-3.5 h-3.5 text-spl-yellow" />
                <span>{COMPANY_CONFIG.dispatchHours}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={onOpenBookingModal}
              icon={<ArrowUpRight className="w-4 h-4 stroke-[2.5]" />}
              className="shadow-2xs font-heading font-bold"
            >
              BOOK A SHIPMENT NOW
            </Button>

            {onOpenContactModal && (
              <Button
                variant="secondary"
                size="lg"
                onClick={onOpenContactModal}
                className="font-heading font-semibold"
              >
                VIEW DISPATCH DETAILS
              </Button>
            )}
          </div>
        </div>
      </div>

      <Footer
        onOpenBookingModal={onOpenBookingModal}
        onOpenContactModal={onOpenContactModal}
      />
    </div>
  );
};
