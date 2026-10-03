import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall, ArrowUpRight } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/constants';

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    question: "What courier services are available in Thoothukudi through SPL?",
    answer: "SPL International Courier Solution provides comprehensive courier services in Thoothukudi (Tuticorin), including international air express delivery, domestic parcel shipping across India, urgent document couriers, commercial cargo dispatch, and convenient doorstep pickup coordination.",
  },
  {
    question: "Does SPL provide international courier services from Thoothukudi?",
    answer: "Yes. SPL coordinates international express courier services from Thoothukudi to over 220 countries and territories worldwide, including the USA, UK, UAE (Dubai), Canada, Singapore, Australia, and European destinations, utilizing established global carrier networks such as DHL, UPS, FedEx, and Aramex.",
  },
  {
    question: "Does SPL provide domestic courier services across India?",
    answer: "Yes. We offer pan-India domestic parcel delivery connecting Thoothukudi with major metropolitan cities, Tier-2 hubs, and regional addresses across India. Services include document express, personal parcel delivery, and commercial packages with door-to-door options.",
  },
  {
    question: "Can I send documents and certificates through courier from Thoothukudi?",
    answer: "Yes. We specialize in fast, secure document delivery for university certificates, legal records, commercial invoices, visa documents, and business contracts. All documents receive careful protective packaging and transit tracking.",
  },
  {
    question: "Can I send parcels internationally from Thoothukudi?",
    answer: "Yes. You can send personal parcels, gift items, commercial samples, and household goods internationally from our Thoothukudi counter or via doorstep pickup. We assist with packaging standards, weight verification, and required customs documentation.",
  },
  {
    question: "How can I contact SPL International Courier Solution or book a pickup?",
    answer: "You can reach our Thoothukudi dispatch office directly by phone at +91 98945 90600, chat with us on WhatsApp for instant rate guidance and pickup booking, or visit our central counter at Q4WW+RMQ, Thoothukudi, Tamil Nadu 628001 during operating hours (10:00 AM – 10:00 PM every day).",
  },
];

interface FAQSectionProps {
  onOpenBookingModal?: () => void;
  className?: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenBookingModal, className = '' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={`w-full bg-white py-14 sm:py-18 lg:py-20 border-b border-slate-200/80 scroll-mt-28 ${className}`}>
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-[820px] mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 mb-3 select-none">
            <HelpCircle className="w-3.5 h-3.5 text-spl-navy-deep" />
            <span className="font-heading font-bold text-[11px] tracking-[0.16em] uppercase text-slate-600">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          <h2 className="font-display font-extrabold text-[26px] min-[360px]:text-[30px] sm:text-[38px] lg:text-[42px] text-spl-navy-deep leading-tight">
            Courier Service FAQs —{' '}
            <span className="font-serif italic font-normal text-slate-700">Thoothukudi Hub</span>
          </h2>

          <p className="font-body text-[#46515C] text-[15px] sm:text-[16px] leading-relaxed mt-3">
            Find clear answers to common questions about domestic parcel shipping, international express deliveries, rates, and doorstep courier pickup in Thoothukudi.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-[860px] mx-auto space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-lg border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-spl-navy-deep/30 bg-[#FBFBFA] shadow-xs'
                    : 'border-slate-200/90 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spl-yellow rounded-lg"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-[15px] sm:text-[16px] text-spl-navy-deep leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-spl-navy-deep text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.2]" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 font-body text-[#46515C] text-[14.5px] leading-relaxed border-t border-slate-100 mt-1">
                    <p className="pt-2">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Callout */}
        <div className="max-w-[860px] mx-auto mt-10 p-5 rounded-lg bg-[#F8F7F2] border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-heading font-bold text-[14px] text-spl-navy-deep">
              Have another question about your shipment?
            </p>
            <p className="font-body text-[13px] text-slate-600 mt-0.5">
              Call our Thoothukudi dispatch desk directly at {COMPANY_CONFIG.primaryContactPhone} or chat on WhatsApp.
            </p>
          </div>
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={`tel:${COMPANY_CONFIG.primaryContactPhoneClean}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[4px] border border-slate-300 text-spl-navy-deep font-heading font-bold text-[12.5px] hover:bg-white transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call Dispatch</span>
            </a>
            {onOpenBookingModal && (
              <button
                type="button"
                onClick={onOpenBookingModal}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[4px] bg-spl-yellow text-spl-navy-deep font-heading font-bold text-[12.5px] hover:shadow-xs transition-shadow cursor-pointer"
              >
                <span>Book Shipment</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
