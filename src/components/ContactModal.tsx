import React, { useEffect, useRef } from 'react';
import { X, PhoneCall, MessageSquare, MapPin, Mail, Clock, ShieldCheck } from 'lucide-react';
import { COMPANY_CONFIG, WHATSAPP_NUMBER } from '../config/constants';
import { Button } from './Button';
import { Logo } from './Logo';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBookingModal: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  onOpenBookingModal,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 md:p-6 bg-spl-navy-deep/75 backdrop-blur-xs transition-opacity duration-200 animate-fade-in"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        ref={modalRef}
        data-lenis-prevent
        className="w-full max-w-[540px] bg-white rounded-xl sm:rounded-2xl shadow-modal border border-slate-200/80 overflow-hidden flex flex-col transition-all transform duration-300 my-auto"
        style={{
          maxHeight: 'min(calc(100dvh - 24px), calc(100svh - 24px), 880px)',
        }}
      >
        {/* Header */}
        <div className="px-4 sm:px-6 py-3.5 sm:py-5 bg-spl-navy-deep text-white flex items-center justify-between border-b border-spl-navy-secondary shrink-0">
          <div className="flex items-center gap-3">
            <Logo variant="dark" size="sm" />
            <div className="h-7 w-[1px] bg-white/20 hidden sm:block" />
            <div>
              <h2 id="contact-modal-title" className="font-heading font-bold text-[16px] sm:text-[18px] leading-tight text-white">
                Contact & Hub Info
              </h2>
              <p className="text-[11.5px] sm:text-[12px] text-slate-300 font-body">
                Thoothukudi Central Dispatch Hub
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spl-yellow"
            aria-label="Close contact modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div
          data-lenis-prevent
          className="p-4 sm:p-6 space-y-4 sm:space-y-5 flex-1 min-h-0 overflow-y-auto overscroll-contain no-scrollbar"
          style={{
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {/* Main Direct Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Phone Call Card */}
            <a
              href="tel:+919894590600"
              className="p-4 rounded-xl border-2 border-spl-navy-deep bg-spl-offwhite hover:bg-white transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Booking & Queries
                </span>
                <span className="font-heading font-extrabold text-[17px] text-spl-navy-deep group-hover:text-spl-yellow block transition-colors">
                  {COMPANY_CONFIG.primaryContactPhone}
                </span>
              </div>
              <div className="mt-3 flex items-center gap-1.5 text-[12px] font-heading font-bold text-spl-navy-deep">
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Dispatch Now →</span>
              </div>
            </a>

            {/* WhatsApp Chat Card */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello SPL Worldwide Express, I would like to enquire about a courier shipment from Thoothukudi.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl border border-emerald-600/30 bg-emerald-50/60 hover:bg-emerald-50 transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                  Official WhatsApp
                </span>
                <span className="font-heading font-extrabold text-[17px] text-emerald-900 block">
                  {COMPANY_CONFIG.primaryContactPhone}
                </span>
              </div>
              <div className="mt-3 flex items-center gap-1.5 text-[12px] font-heading font-bold text-emerald-800">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp →</span>
              </div>
            </a>
          </div>

          {/* Hub Operational Details */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 space-y-3">
            <div className="flex items-start gap-3 text-[13.5px]">
              <MapPin className="w-4 h-4 text-spl-navy-deep mt-0.5 flex-shrink-0" />
              <div>
                <strong className="font-heading font-semibold text-spl-navy-deep block">
                  Central Dispatch Hub
                </strong>
                <span className="text-slate-600 font-body">
                  Thoothukudi, Tamil Nadu, India (Domestic & International Express)
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 text-[13.5px]">
              <Clock className="w-4 h-4 text-spl-navy-deep mt-0.5 flex-shrink-0" />
              <div>
                <strong className="font-heading font-semibold text-spl-navy-deep block">
                  Operating & Dispatch Hours
                </strong>
                <span className="text-slate-600 font-body">
                  {COMPANY_CONFIG.dispatchHours}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 text-[13.5px]">
              <Mail className="w-4 h-4 text-spl-navy-deep mt-0.5 flex-shrink-0" />
              <div>
                <strong className="font-heading font-semibold text-spl-navy-deep block">
                  Email Enquiries
                </strong>
                <a
                  href={`mailto:${COMPANY_CONFIG.primaryEmail}`}
                  className="text-spl-navy-deep hover:underline font-body"
                >
                  {COMPANY_CONFIG.primaryEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Guarantee / Trust pill */}
          <div className="flex items-center gap-2 text-[12px] text-slate-500 font-body">
            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Dedicated local customer service and immediate booking confirmation.</span>
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <Button
              variant="primary"
              size="md"
              fullWidth
              onClick={() => {
                onClose();
                onOpenBookingModal();
              }}
            >
              Open Booking Form
            </Button>
            <Button
              variant="outline"
              size="md"
              onClick={onClose}
              className="sm:w-auto px-6"
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
