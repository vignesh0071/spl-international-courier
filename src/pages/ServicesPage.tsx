import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowUpRight,
  ArrowRight,
  CheckCircle,
  Truck,
  Plane,
  Building2,
  FileText,
  ShieldCheck,
  Clock,
  MapPin,
  PhoneCall,
  Mail,
  ExternalLink,
} from 'lucide-react';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';
import { CourierLogosRow } from '../components/CourierLogos';
import { COMPANY_CONFIG } from '../config/constants';

interface ServicesPageProps {
  onOpenBookingModal: (service?: string) => void;
  onOpenContactModal?: () => void;
}

const QUICK_NAV = [
  { id: "domestic-express", num: "01", label: "Domestic Express" },
  { id: "international-air-express", num: "02", label: "International Air Express" },
  { id: "business-commercial", num: "03", label: "Business & Commercial" },
  { id: "documents-parcel", num: "04", label: "Documents & Parcel" },
  { id: "careful-handling", num: "05", label: "Careful Handling" },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "CONTACT SPL",
    desc: "Share shipment details, origin pickup point, and destination address with our team.",
  },
  {
    num: "02",
    title: "SHIPMENT DETAILS REVIEW",
    desc: "We review weight, commodity type, packaging, and specific transit requirements.",
  },
  {
    num: "03",
    title: "COURIER / NETWORK COORDINATION",
    desc: "SPL coordinates the appropriate courier or logistics network suited for the route.",
  },
  {
    num: "04",
    title: "DISPATCH & DELIVERY SUPPORT",
    desc: "Assisting through dispatch, documentation handoff, and tracking coordination.",
  },
];

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onOpenBookingModal,
  onOpenContactModal,
}) => {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-[#F8F7F2] text-spl-navy-deep min-h-screen flex flex-col">

      {/* ========================================================================= */}
      {/* 1. SERVICES HERO OPENING */}
      {/* ========================================================================= */}
      <section className="w-full border-b border-spl-border/80 relative overflow-hidden bg-white lg:min-h-[580px] xl:min-h-[640px] flex flex-col justify-center">

        {/* Right Column: Dedicated Logistics Dispatch Photograph (Edge-to-Edge) */}
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[56%] xl:w-[58%] 2xl:w-[60%] overflow-hidden pointer-events-none select-none z-0">
          <div className="relative w-full h-full">
            <div
              className="w-full h-full"
              style={{
                maskImage: 'linear-gradient(108deg, transparent 0%, rgba(0,0,0,0.15) 12%, rgba(0,0,0,0.8) 28%, black 44%, black 100%)',
                WebkitMaskImage: 'linear-gradient(108deg, transparent 0%, rgba(0,0,0,0.15) 12%, rgba(0,0,0,0.8) 28%, black 44%, black 100%)',
              }}
            >
              <img
                src="/images/spl-services-hero.jpg"
                alt="SPL Worldwide Express parcel sorting and dispatch preparation"
                className="w-full h-full object-cover object-[center_35%] filter brightness-[1.01] contrast-[1.02]"
                loading="eager"
              />
            </div>

            {/* Soft left white fade merging naturally with text */}
            <div className="absolute inset-y-0 left-0 w-36 sm:w-48 xl:w-56 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />

            {/* Subtle top and bottom edge dissolves */}
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent z-10" />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent z-10" />
          </div>
        </div>
        <div className="w-full max-w-[1440px] mx-auto relative flex items-center px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Left Column: Editorial Story (46% width) */}
          <div className="w-full lg:w-[48%] xl:w-[46%] pt-8 sm:pt-12 lg:pt-14 pb-8 sm:pb-12 lg:pb-16 z-10 relative">
            <div className="max-w-[560px]">
              
              {/* Eyebrow Label */}
              <div className="flex items-center gap-2 mb-4 select-none">
                <span className="w-2 h-2 rounded-full bg-spl-yellow inline-block" />
                <span className="font-heading font-bold text-[11px] sm:text-[12px] tracking-[0.16em] uppercase text-spl-navy-deep">
                  SERVICES
                </span>
                <span className="text-slate-300 font-normal">|</span>
                <span className="font-heading font-semibold text-[10.5px] sm:text-[11.5px] tracking-[0.12em] uppercase text-slate-500">
                  COURIER + EXPRESS LOGISTICS
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="select-none tracking-tight mb-4 sm:mb-5">
                <span className="block font-display font-extrabold text-[28px] min-[360px]:text-[34px] sm:text-[44px] lg:text-[50px] xl:text-[58px] text-spl-navy-deep leading-tight">
                  Moving{' '}
                  <span className="relative inline-block">
                    <span className="font-serif italic font-normal text-slate-700">documents</span>,{' '}
                    <span className="text-spl-navy-deep underline decoration-spl-yellow decoration-4 underline-offset-4">
                      parcels
                    </span>
                  </span>
                </span>
                <span className="block font-display font-extrabold text-[26px] min-[360px]:text-[30px] sm:text-[40px] lg:text-[46px] xl:text-[54px] text-spl-navy-deep leading-tight mt-1">
                  and business shipments.
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="font-body text-slate-700 text-[14.5px] sm:text-[16px] leading-[1.68] mb-5 sm:mb-6">
                From local shipments in Thoothukudi to domestic and international deliveries, SPL Worldwide Express helps customers coordinate the right courier solution for their shipment.
              </p>

              {/* Compact Information Line */}
              <div className="pt-3.5 sm:pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-y-2 gap-x-5 text-[12px] sm:text-[12.5px] font-heading text-slate-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-spl-yellow shrink-0" />
                  <span className="font-semibold text-spl-navy-deep">Daily operations: 10:00 AM – 10:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-spl-yellow shrink-0" />
                  <span>Thoothukudi, Tamil Nadu</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Mobile Visual */}
        <div className="lg:hidden w-full px-4 sm:px-6 pb-8 sm:pb-10 select-none">
          <div className="relative w-full h-[280px] sm:h-[360px] rounded-xl overflow-hidden border border-slate-200 shadow-2xs">
            <img
              src="/images/spl-services-hero.jpg"
              alt="SPL parcel preparation"
              className="w-full h-full object-cover object-[center_35%]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. QUICK SERVICE NAVIGATION ROW */}
      {/* ========================================================================= */}
      <nav
        aria-label="Services Navigation"
        className="w-full bg-white border-b border-spl-border sticky top-[114px] z-30 shadow-2xs"
      >
        <div className="w-full max-w-[1440px] mx-auto py-2.5 sm:py-3.5 flex items-center justify-between overflow-x-auto no-scrollbar gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8 xl:px-12">
          {QUICK_NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="flex items-center gap-2 text-[12px] sm:text-[13px] font-heading font-semibold text-slate-700 hover:text-spl-navy-deep transition-colors shrink-0 group py-1"
            >
              <span className="text-spl-yellow font-bold text-[11px] group-hover:underline">
                {item.num}
              </span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* ========================================================================= */}
      {/* 3. SERVICE 01: DOMESTIC EXPRESS DELIVERY (Text Left, Image Right) */}
      {/* ========================================================================= */}
      <section id="domestic-express" className="w-full bg-white py-12 sm:py-16 lg:py-20 border-b border-spl-border/80 scroll-mt-36">
        <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Text Left (7 cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-[4px] bg-slate-50 border border-slate-200 flex items-center justify-center text-spl-navy-deep">
                <Truck className="w-4 h-4 text-spl-navy-deep" />
              </span>
              <span className="font-heading font-bold text-[11px] tracking-[0.16em] uppercase text-slate-500">
                SERVICE 01 • INDIA MOVEMENT
              </span>
            </div>

            <h2 className="font-display font-extrabold text-[24px] min-[360px]:text-[28px] sm:text-[34px] lg:text-[36px] text-spl-navy-deep leading-tight">
              Domestic Express Delivery
            </h2>

            <p className="font-body text-slate-700 text-[14.5px] sm:text-[15.5px] leading-relaxed">
              Send documents, personal parcels and business shipments across India through established courier and logistics networks.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-body text-[14px] text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-spl-yellow shrink-0 mt-0.5" />
                <span>Document shipments</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-spl-yellow shrink-0 mt-0.5" />
                <span>Personal parcels</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-spl-yellow shrink-0 mt-0.5" />
                <span>Business packages</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-spl-yellow shrink-0 mt-0.5" />
                <span>Door-to-door options where available</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-spl-yellow shrink-0 mt-0.5" />
                <span>Pickup coordination in Thoothukudi</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-spl-yellow shrink-0 mt-0.5" />
                <span>Tracking support where applicable</span>
              </li>
            </ul>

            <div className="pt-4">
              <Button
                variant="primary"
                size="md"
                onClick={() => onOpenBookingModal('Domestic Parcel')}
                icon={<ArrowRight className="w-4 h-4 stroke-[2.4]" />}
                className="shadow-2xs font-heading font-bold"
              >
                BOOK DOMESTIC SHIPMENT
              </Button>
            </div>
          </div>

          {/* Image Right (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full h-[300px] sm:h-[380px] rounded-[4px] overflow-hidden border border-slate-200/90 shadow-2xs">
              <img
                src="/images/spl-domestic-courier.jpg"
                alt="Domestic express courier delivery staff and vehicle"
                className="w-full h-full object-cover object-[center_35%]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SERVICE 02: INTERNATIONAL AIR EXPRESS (Image Left, Text Right) */}
      {/* ========================================================================= */}
      <section id="international-air-express" className="w-full bg-[#F8F7F2] py-12 sm:py-16 lg:py-20 border-b border-spl-border/80 scroll-mt-36">
        <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Image Left on Desktop (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative w-full h-[280px] sm:h-[380px] rounded-[4px] overflow-hidden border border-slate-200/90 shadow-2xs">
              <img
                src="/images/spl-international-air.jpg"
                alt="International air cargo export parcels at freight terminal"
                className="w-full h-full object-cover object-[center_40%]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text Right (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-4 sm:space-y-5">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-[4px] bg-white border border-slate-200 flex items-center justify-center text-spl-navy-deep">
                <Plane className="w-4 h-4 text-spl-navy-deep" />
              </span>
              <span className="font-heading font-bold text-[11px] tracking-[0.16em] uppercase text-slate-500">
                SERVICE 02 • WORLDWIDE DISPATCH
              </span>
            </div>

            <h2 className="font-display font-extrabold text-[24px] min-[360px]:text-[28px] sm:text-[34px] lg:text-[36px] text-spl-navy-deep leading-tight">
              International Air Express
            </h2>

            <p className="font-body text-slate-700 text-[14.5px] sm:text-[15.5px] leading-relaxed">
              For international shipments, SPL coordinates courier movement based on destination, shipment type, required service and available carrier options.
            </p>

            <div className="p-4 rounded-[4px] bg-white border border-slate-200 text-[13.5px] font-body text-slate-600">
              <p>
                International consignments may be routed through established courier networks including <strong className="font-semibold text-spl-navy-deep">DHL, UPS, FedEx, and Aramex</strong>. Available carrier options depend on destination and shipment requirements.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 font-body text-[14px] text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-spl-yellow shrink-0 mt-0.5" />
                <span>Documents &amp; Certificates</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-spl-yellow shrink-0 mt-0.5" />
                <span>Personal parcels</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-spl-yellow shrink-0 mt-0.5" />
                <span>International courier shipments</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-spl-yellow shrink-0 mt-0.5" />
                <span>Commercial shipments</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-spl-yellow shrink-0 mt-0.5" />
                <span>Shipment coordination</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-spl-yellow shrink-0 mt-0.5" />
                <span>Customs documentation guidance where applicable</span>
              </li>
            </ul>

            <div className="pt-4">
              <Button
                variant="primary"
                size="md"
                onClick={() => onOpenBookingModal('International Parcel')}
                icon={<ArrowRight className="w-4 h-4 stroke-[2.4]" />}
                className="shadow-2xs font-heading font-bold"
              >
                SHIP INTERNATIONALLY
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SERVICE 03: BUSINESS & COMMERCIAL SHIPMENTS (Text Left, Image Right) */}
      {/* ========================================================================= */}
      <section id="business-commercial" className="w-full bg-white py-12 sm:py-16 lg:py-20 border-b border-spl-border/80 scroll-mt-36">
        <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Text Left (7 cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-[4px] bg-slate-50 border border-slate-200 flex items-center justify-center text-spl-navy-deep">
                <Building2 className="w-4 h-4 text-spl-navy-deep" />
              </span>
              <span className="font-heading font-bold text-[11px] tracking-[0.16em] uppercase text-slate-500">
                SERVICE 03 • B2B &amp; TRADE
              </span>
            </div>

            <h2 className="font-display font-extrabold text-[24px] min-[360px]:text-[28px] sm:text-[34px] lg:text-[36px] text-spl-navy-deep leading-tight">
              Business &amp; Commercial Shipments
            </h2>

            <p className="font-body text-slate-700 text-[14.5px] sm:text-[15.5px] leading-relaxed">
              SPL supports businesses that need to move documents, samples, parts, products and commercial consignments through suitable courier and logistics networks.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-body text-[14px] text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-spl-yellow shrink-0 mt-0.5" />
                <span>Business documents &amp; contracts</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-spl-yellow shrink-0 mt-0.5" />
                <span>Commercial parcels</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-spl-yellow shrink-0 mt-0.5" />
                <span>Export &amp; commercial samples</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-spl-yellow shrink-0 mt-0.5" />
                <span>Spare parts &amp; industrial supplies</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-spl-yellow shrink-0 mt-0.5" />
                <span>Small commercial consignments</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-spl-yellow shrink-0 mt-0.5" />
                <span>Repeat shipping requirements</span>
              </li>
            </ul>

            <div className="pt-4">
              <Button
                variant="primary"
                size="md"
                onClick={() => onOpenBookingModal('Commercial Shipment')}
                icon={<ArrowRight className="w-4 h-4 stroke-[2.4]" />}
                className="shadow-2xs font-heading font-bold"
              >
                REQUEST BUSINESS ENQUIRY
              </Button>
            </div>
          </div>

          {/* Image Right (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full h-[300px] sm:h-[380px] rounded-[4px] overflow-hidden border border-slate-200/90 shadow-2xs">
              <img
                src="/images/spl-business-cargo.jpg"
                alt="Commercial B2B logistics warehouse palletized export boxes"
                className="w-full h-full object-cover object-[center_35%]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SERVICE 04: DOCUMENTS & PERSONAL PARCELS (Image Left, Text Right) */}
      {/* ========================================================================= */}
      <section id="documents-parcel" className="w-full bg-[#F8F7F2] py-12 sm:py-16 lg:py-20 border-b border-spl-border/80 scroll-mt-36">
        <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Image Left on Desktop (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative w-full h-[280px] sm:h-[380px] rounded-[4px] overflow-hidden border border-slate-200/90 shadow-2xs">
              <img
                src="/images/spl-documents-fragile.jpg"
                alt="Documents and parcel courier packaging"
                className="w-full h-full object-cover object-[center_40%]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text Right (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-4 sm:space-y-5">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-[4px] bg-white border border-slate-200 flex items-center justify-center text-spl-navy-deep">
                <FileText className="w-4 h-4 text-spl-navy-deep" />
              </span>
              <span className="font-heading font-bold text-[11px] tracking-[0.16em] uppercase text-slate-500">
                SERVICE 04 • ESSENTIAL DISPATCH
              </span>
            </div>

            <h2 className="font-display font-extrabold text-[24px] min-[360px]:text-[28px] sm:text-[34px] lg:text-[36px] text-spl-navy-deep leading-tight">
              Documents &amp; Personal Parcels
            </h2>

            <p className="font-body text-slate-700 text-[14.5px] sm:text-[15.5px] leading-relaxed">
              From important documents to personal parcels, SPL supports everyday shipments that require careful handling and reliable coordination.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-body text-[14px] text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-spl-yellow shrink-0 mt-0.5" />
                <span>Important documents &amp; legal files</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-spl-yellow shrink-0 mt-0.5" />
                <span>University certificates &amp; records</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-spl-yellow shrink-0 mt-0.5" />
                <span>Personal belongings &amp; gifts</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-spl-yellow shrink-0 mt-0.5" />
                <span>Small parcels &amp; packages</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-spl-yellow shrink-0 mt-0.5" />
                <span>Pickup coordination from Thoothukudi</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-spl-yellow shrink-0 mt-0.5" />
                <span>Clear delivery communication</span>
              </li>
            </ul>

            <div className="pt-4">
              <Button
                variant="primary"
                size="md"
                onClick={() => onOpenBookingModal('Document')}
                icon={<ArrowRight className="w-4 h-4 stroke-[2.4]" />}
                className="shadow-2xs font-heading font-bold"
              >
                BOOK A PARCEL
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. SERVICE 05: CAREFUL HANDLING (Text Left, Card Right) */}
      {/* ========================================================================= */}
      <section id="careful-handling" className="w-full bg-white py-12 sm:py-16 lg:py-20 border-b border-spl-border/80 scroll-mt-36">
        <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Text Left (7 cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-[4px] bg-slate-50 border border-slate-200 flex items-center justify-center text-spl-navy-deep">
                <ShieldCheck className="w-4 h-4 text-spl-navy-deep" />
              </span>
              <span className="font-heading font-bold text-[11px] tracking-[0.16em] uppercase text-slate-500">
                SERVICE 05 • SPECIAL CARE
              </span>
            </div>

            <h2 className="font-display font-extrabold text-[24px] min-[360px]:text-[28px] sm:text-[34px] lg:text-[36px] text-spl-navy-deep leading-tight">
              Careful Handling
            </h2>

            <p className="font-body text-slate-700 text-[14.5px] sm:text-[15.5px] leading-relaxed">
              Shipment requirements are reviewed before dispatch so the appropriate packing, handling and courier option can be considered.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-body text-[14px] text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-spl-yellow shrink-0 mt-0.5" />
                <span>Fragile shipment requirements</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-spl-yellow shrink-0 mt-0.5" />
                <span>Packing guidance &amp; recommendations</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-spl-yellow shrink-0 mt-0.5" />
                <span>Shipment information checklist</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-spl-yellow shrink-0 mt-0.5" />
                <span>Destination requirement check</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-spl-yellow shrink-0 mt-0.5" />
                <span>Appropriate courier selection</span>
              </li>
            </ul>

            <div className="pt-4">
              <Button
                variant="primary"
                size="md"
                onClick={() => onOpenBookingModal('Commercial Shipment')}
                icon={<ArrowRight className="w-4 h-4 stroke-[2.4]" />}
                className="shadow-2xs font-heading font-bold"
              >
                DISCUSS YOUR SHIPMENT
              </Button>
            </div>
          </div>

          {/* Right Column: Grounded Guidance Box */}
          <div className="lg:col-span-5 p-7 rounded-[4px] bg-spl-navy-deep text-white shadow-2xs space-y-4">
            <span className="font-heading font-bold text-[11px] tracking-[0.16em] uppercase text-spl-yellow block">
              PRACTICAL HANDLING GUIDANCE
            </span>
            <h3 className="font-display font-extrabold text-[22px] leading-snug">
              Every parcel starts with sound packaging.
            </h3>
            <p className="font-body text-slate-300 text-[14px] leading-relaxed">
              We assist customers in Thoothukudi with practical suggestions on boxing, cushioning, and labeling so goods remain protected throughout carriage.
            </p>
            <div className="pt-2 border-t border-slate-700 text-[13px] text-slate-400 font-heading">
              Daily inspection &amp; booking support: 10:00 AM – 10:00 PM
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. HOW SPL WORKS (VISUAL 4-STEP PROCESS) */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#F8F7F2] py-12 sm:py-16 lg:py-20 border-b border-spl-border/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-[720px] mb-8 sm:mb-12">
            <span className="font-heading font-bold text-[11px] tracking-[0.16em] uppercase text-slate-500 block mb-2">
              OUR COORDINATION PROCESS
            </span>
            <h2 className="font-display font-extrabold text-[24px] sm:text-[30px] lg:text-[36px] text-spl-navy-deep leading-tight">
              How SPL Works
            </h2>
            <p className="font-body text-[14.5px] sm:text-[15.5px] text-slate-600 mt-2 leading-relaxed">
              Customers contact SPL with their shipment details. The shipment is reviewed based on destination, type and requirements. SPL coordinates the appropriate courier or logistics network and supports the shipment through the dispatch process.
            </p>
          </div>

          {/* 4-Step Horizontal Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-[4px] bg-white border border-slate-200/90 flex flex-col justify-between hover:border-slate-300 transition-colors group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <span className="font-display font-extrabold text-[26px] sm:text-[32px] text-spl-navy-deep group-hover:text-spl-yellow transition-colors leading-none">
                      {step.num}
                    </span>
                    <div className="h-[2px] flex-1 bg-slate-200 group-hover:bg-spl-yellow transition-colors" />
                  </div>
                  <h3 className="font-heading font-bold text-[13.5px] sm:text-[14px] uppercase tracking-wide text-spl-navy-deep mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-[13px] sm:text-[13.5px] text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. OUR COURIER NETWORK (COURIER & SERVICE NETWORKS) */}
      {/* ========================================================================= */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20 border-b border-spl-border/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-[800px] mb-8">
            <span className="font-heading font-bold text-[11px] tracking-[0.16em] uppercase text-slate-500 block mb-2">
              COURIER &amp; SERVICE NETWORKS
            </span>
            <h2 className="font-display font-extrabold text-[24px] sm:text-[30px] lg:text-[34px] text-spl-navy-deep leading-tight">
              One local point of contact. Multiple shipping networks.
            </h2>
            <p className="font-body text-[14.5px] sm:text-[15.5px] text-slate-600 mt-2.5 sm:mt-3 leading-relaxed">
              From Thoothukudi, SPL coordinates domestic and international shipments through established courier and logistics networks. Depending on the destination, shipment type and service requirement, shipments may be routed through DHL, UPS, FedEx, Aramex and other available service networks.
            </p>
          </div>

          <CourierLogosRow className="mb-4" />

          <p className="font-body text-[12px] sm:text-[12.5px] text-slate-500 italic mt-3">
            Carrier selection depends on destination, shipment type, service requirement and availability.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. CONTACT SPL & GOOGLE MAPS SECTION */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#F8F7F2] py-12 sm:py-16 lg:py-20 border-b border-spl-border/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-[720px] mb-8 sm:mb-10">
            <span className="font-heading font-bold text-[11px] tracking-[0.16em] uppercase text-slate-500 block mb-2">
              THOOTHUKUDI LOCATION
            </span>
            <h2 className="font-display font-extrabold text-[24px] sm:text-[30px] lg:text-[34px] text-spl-navy-deep leading-tight">
              Need to send a shipment?
            </h2>
            <p className="font-body text-[14.5px] sm:text-[15.5px] text-slate-600 mt-2 leading-relaxed">
              Share your pickup, destination and shipment details with SPL. Our team can help identify a suitable courier or logistics option for your requirement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {/* Contact Details Card */}
            <div className="p-6 sm:p-8 rounded-[4px] bg-white border border-slate-200/90 shadow-2xs space-y-6 flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-bold text-[15px] sm:text-[16px] tracking-wide uppercase text-spl-navy-deep mb-4">
                  Thoothukudi Contact Details
                </h3>

                <div className="space-y-4 font-body text-[14px] sm:text-[14.5px] text-slate-700">
                  <div className="flex items-start gap-3">
                    <PhoneCall className="w-5 h-5 text-spl-yellow shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-500 text-[12px] sm:text-[12.5px] block font-heading">Phone / WhatsApp:</span>
                      <a
                        href={`tel:${COMPANY_CONFIG.primaryContactPhoneClean}`}
                        className="font-heading font-bold text-spl-navy-deep hover:underline text-[15px] sm:text-[16px]"
                      >
                        {COMPANY_CONFIG.primaryContactPhone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-spl-yellow shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-500 text-[12px] sm:text-[12.5px] block font-heading">Email:</span>
                      <a
                        href={`mailto:${COMPANY_CONFIG.primaryEmail}`}
                        className="font-medium text-spl-navy-deep hover:underline break-all"
                      >
                        {COMPANY_CONFIG.primaryEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-spl-yellow shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-500 text-[12px] sm:text-[12.5px] block font-heading">Operating Hours:</span>
                      <span className="font-medium text-spl-navy-deep">{COMPANY_CONFIG.dispatchHours}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-spl-yellow shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-500 text-[12px] sm:text-[12.5px] block font-heading">Address:</span>
                      <span className="font-medium text-spl-navy-deep break-words">{COMPANY_CONFIG.address}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-col min-[380px]:flex-row gap-3">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => onOpenBookingModal()}
                  className="font-heading font-bold"
                >
                  Book a Shipment
                </Button>
                <a
                  href={`tel:${COMPANY_CONFIG.primaryContactPhoneClean}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-[4px] border border-slate-300 font-heading font-semibold text-[13px] text-spl-navy-deep hover:bg-slate-50 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call {COMPANY_CONFIG.primaryContactPhone}</span>
                </a>
              </div>
            </div>

            {/* Real Google Maps Location Block */}
            <div className="p-6 sm:p-8 rounded-[4px] bg-white border border-slate-200/90 shadow-2xs space-y-5 flex flex-col justify-between">
              <div>
                <span className="font-heading font-bold text-[11px] tracking-[0.16em] uppercase text-spl-yellow block mb-1">
                  OFFICE / SERVICE LOCATION
                </span>
                <h3 className="font-display font-extrabold text-[20px] sm:text-[22px] text-spl-navy-deep mb-2">
                  Find SPL in Thoothukudi
                </h3>
                <p className="font-body text-slate-600 text-[13.5px] sm:text-[14px] leading-relaxed mb-4">
                  Visit our Thoothukudi service location for shipment drop-offs, parcel enquiries, rate calculations, and dispatch coordination.
                </p>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-[4px] text-[13px] sm:text-[13.5px] font-heading font-semibold text-spl-navy-deep flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-spl-yellow shrink-0 mt-0.5" />
                  <span className="break-words">{COMPANY_CONFIG.address}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <a
                  href={COMPANY_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 w-full py-3 px-5 rounded-[4px] bg-spl-navy-deep text-white font-heading font-bold text-[13px] sm:text-[13.5px] uppercase tracking-wider hover:bg-spl-navy-secondary transition-colors shadow-2xs"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-4 h-4 text-spl-yellow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. FINAL SERVICES CTA */}
      {/* ========================================================================= */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20 border-b border-spl-border/80">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-[620px]">
            <h2 className="font-display font-extrabold text-[24px] sm:text-[30px] lg:text-[34px] text-spl-navy-deep leading-tight mb-2.5">
              Planning your next shipment?
            </h2>
            <p className="font-body text-[14.5px] sm:text-[16px] text-slate-600 leading-relaxed">
              Tell us what you're sending, where it needs to go and our team can help you choose the appropriate courier option.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 shrink-0">
            <Button
              variant="primary"
              size="lg"
              onClick={() => onOpenBookingModal()}
              icon={<ArrowUpRight className="w-4 h-4 stroke-[2.5]" />}
              className="shadow-2xs font-heading font-bold"
            >
              BOOK A SHIPMENT
            </Button>

            <Button
              variant="secondary"
              size="lg"
              onClick={onOpenContactModal ? onOpenContactModal : () => navigate('/contact')}
              icon={<ArrowRight className="w-4 h-4 stroke-[2.2]" />}
              className="font-heading font-semibold"
            >
              CONTACT SPL
            </Button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12. SHARED FOOTER */}
      {/* ========================================================================= */}
      <Footer
        onOpenBookingModal={() => onOpenBookingModal()}
        onOpenContactModal={onOpenContactModal}
      />

    </div>
  );
};
