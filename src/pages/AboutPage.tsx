import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, MapPin, Globe, ShieldCheck, Headphones, Anchor } from 'lucide-react';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';
import { SEOHead } from '../components/SEOHead';

interface AboutPageProps {
  onOpenBookingModal: () => void;
  onOpenContactModal?: () => void;
}

const CORE_STRENGTHS = [
  {
    icon: MapPin,
    title: "LOCAL EXPERTISE",
    description: "Strong presence in Thoothukudi and Tuticorin with local courier pickup and packing assistance.",
  },
  {
    icon: Globe,
    title: "NETWORK REACH",
    description: "Pan-India domestic parcel delivery and international express courier connections to 220+ countries.",
  },
  {
    icon: ShieldCheck,
    title: "CAREFUL HANDLING",
    description: "Urgent documents, parcels and commercial cargo handled with dedicated protection.",
  },
  {
    icon: Headphones,
    title: "CUSTOMER FOCUS",
    description: "Doorstep courier pickup coordination, prompt communication, and full shipment support.",
  },
];

const WORK_STEPS = [
  {
    number: "01",
    title: "UNDERSTAND",
    description: "Understand the shipment, destination and customer requirement.",
  },
  {
    number: "02",
    title: "COORDINATE",
    description: "Coordinate pickup, transit and the appropriate delivery route.",
  },
  {
    number: "03",
    title: "SUPPORT",
    description: "Keep the customer informed and assist through the shipment process.",
  },
];

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenBookingModal,
  onOpenContactModal,
}) => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#F8F7F2] text-spl-navy-deep min-h-screen flex flex-col">
      {/* Dynamic SEO Meta & Structured Data */}
      <SEOHead
        title="About SPL Worldwide Express | Courier Service in Thoothukudi"
        description="Learn about SPL Worldwide Express, a courier and logistics service based in Thoothukudi, Tamil Nadu, supporting domestic and international document, parcel and business shipments."
        canonicalPath="/about"
        keywords="about spl worldwide express, courier service in thoothukudi, courier company thoothukudi, spl courier thoothukudi, domestic courier thoothukudi, international courier thoothukudi, parcel service thoothukudi"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'About Us', item: '/about' },
        ]}
        structuredData={{
          '@type': 'AboutPage',
          '@id': 'https://splexpress.in/about#webpage',
          'url': 'https://splexpress.in/about',
          'name': 'About SPL Worldwide Express',
          'description': 'Learn about SPL Worldwide Express, a courier and logistics service based in Thoothukudi, Tamil Nadu, supporting domestic and international document, parcel and business shipments.',
          'mainEntity': {
            '@type': 'CourierService',
            'name': 'SPL Worldwide Express',
            'alternateName': ['SPL Worldwide Express', 'SPL Courier Thoothukudi'],
            'telephone': '+91 98945 90600',
            'email': 'ind.splogistics@gmail.com',
            'url': 'https://splexpress.in/',
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': 'Q4WW+RMQ',
              'addressLocality': 'Thoothukudi',
              'addressRegion': 'Tamil Nadu',
              'postalCode': '628001',
              'addressCountry': 'IN',
            },
            'sameAs': [
              'https://maps.app.goo.gl/DDnbJCcJZ99QLiQ46'
            ],
          },
        }}
      />
      
      {/* ========================================================================= */}
      {/* 1. ABOUT HERO: LOCAL ROOTS & EDITORIAL COMPOSITION */}
      {/* ========================================================================= */}
      {/* ========================================================================= */}
      {/* 1. ABOUT HERO: LOCAL ROOTS & EDITORIAL COMPOSITION */}
      {/* ========================================================================= */}
      <section className="w-full border-b border-spl-border/80 relative overflow-hidden bg-white lg:min-h-[580px] xl:min-h-[640px] flex flex-col justify-center">
        
        {/* RIGHT COLUMN: Dedicated Asymmetric Thoothukudi Harbor & Dispatch Visual (Edge-to-Edge) */}
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[56%] xl:w-[58%] 2xl:w-[60%] overflow-hidden pointer-events-none select-none z-0">
          <div className="relative w-full h-full">
            {/* Organic curved transition mask */}
            <div
              className="w-full h-full"
              style={{
                maskImage: 'linear-gradient(108deg, transparent 0%, rgba(0,0,0,0.15) 12%, rgba(0,0,0,0.8) 28%, black 44%, black 100%)',
                WebkitMaskImage: 'linear-gradient(108deg, transparent 0%, rgba(0,0,0,0.15) 12%, rgba(0,0,0,0.8) 28%, black 44%, black 100%)',
              }}
            >
              <img
                src="/images/spl-about-thoothukudi.jpg"
                alt="SPL Worldwide Express courier vehicle and cargo parcels in Thoothukudi"
                className="w-full h-full object-cover object-[65%_center] filter brightness-[1.01] contrast-[1.02]"
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

        {/* LEFT COLUMN: Editorial Story (Inside responsive grid container) */}
        <div className="w-full max-w-[1440px] mx-auto relative z-10 flex items-center px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="w-full lg:w-[48%] xl:w-[46%] pt-8 sm:pt-12 lg:pt-14 pb-8 sm:pb-12 lg:pb-16">
            <div className="max-w-[560px]">
              
              {/* Eyebrow Label */}
              <div className="flex items-center gap-2 mb-4 sm:mb-5 select-none">
                <span className="w-2 h-2 rounded-full bg-spl-yellow inline-block" />
                <span className="font-heading font-bold text-[11px] sm:text-[12px] tracking-[0.16em] uppercase text-spl-navy-deep">
                  ABOUT SPL
                </span>
                <span className="text-slate-300 font-normal">|</span>
                <span className="font-heading font-semibold text-[10.5px] sm:text-[11.5px] tracking-[0.12em] uppercase text-slate-500">
                  LOCAL ROOTS / GLOBAL MOVEMENT
                </span>
              </div>

              {/* Headline with mixed typography */}
              <h1 className="select-none tracking-tight mb-5 sm:mb-6">
                <span className="block font-serif italic text-[28px] min-[360px]:text-[34px] sm:text-[46px] lg:text-[54px] xl:text-[60px] text-slate-700 leading-tight">
                  Built in{' '}
                  <span className="not-italic font-display font-extrabold text-spl-navy-deep relative inline-block">
                    Thoothukudi.
                    <span className="absolute bottom-1 sm:bottom-1.5 left-0 right-0 h-[4px] sm:h-[5px] bg-spl-yellow -z-10 rounded-full" />
                  </span>
                </span>
                <span className="block font-display font-extrabold text-[26px] min-[360px]:text-[32px] sm:text-[42px] lg:text-[50px] xl:text-[56px] text-spl-navy-deep leading-tight mt-1.5">
                  Delivering{' '}
                  <span className="font-serif italic font-normal text-slate-700">
                    beyond
                  </span>{' '}
                  borders.
                </span>
              </h1>

              {/* Core Company Description */}
              <div className="space-y-3.5 sm:space-y-4 font-body text-slate-700 text-[14.5px] sm:text-[16px] leading-[1.68]">
                <p>
                  <strong className="font-semibold text-spl-navy-deep">SPL International Courier (SPL Worldwide Express)</strong> is a trusted courier company based in Thoothukudi (Tuticorin), Tamil Nadu. We specialize in express document delivery, personal parcel shipping, and commercial cargo logistics with doorstep courier pickup and dedicated delivery support across India and worldwide.
                </p>
                <p className="text-slate-600 text-[14px] sm:text-[15.5px]">
                  Our approach is simple: understand what needs to move, coordinate the right domestic or international courier network, and keep the customer informed throughout the journey.
                </p>
              </div>

              {/* Editorial Anchor Metadata Tag */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-slate-200/80 flex items-center gap-3 text-[12px] sm:text-[12.5px] font-heading text-slate-600">
                <div className="w-7 h-7 rounded-[4px] bg-slate-100 flex items-center justify-center text-spl-navy-deep shrink-0">
                  <Anchor className="w-4 h-4 text-spl-navy-deep" />
                </div>
                <span>
                  Port City Dispatch Hub • Domestic Hubs Across India &amp; 220+ Overseas Destinations
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* Mobile About Visual (Cleanly positioned below text on mobile/tablet) */}
        <div className="lg:hidden w-full relative overflow-hidden pointer-events-none select-none px-4 sm:px-6 pb-8 sm:pb-10">
          <div className="relative w-full h-[280px] sm:h-[360px] rounded-xl overflow-hidden border border-slate-200/80 shadow-2xs">
            <img
              src="/images/spl-about-thoothukudi.jpg"
              alt="SPL Worldwide Express courier vehicle and cargo parcels in Thoothukudi"
              className="w-full h-full object-cover object-[65%_center]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FOUR CORE STRENGTHS (EDITORIAL 4-COLUMN GRID) */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#F8F7F2] py-12 sm:py-16 lg:py-20 border-b border-spl-border/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Section Subhead */}
          <div className="mb-8 sm:mb-10 max-w-[620px]">
            <span className="font-heading font-bold text-[11px] tracking-[0.16em] uppercase text-slate-500 block mb-2">
              OUR OPERATING CAPABILITIES
            </span>
            <h2 className="font-display font-extrabold text-[24px] sm:text-[30px] lg:text-[34px] text-spl-navy-deep leading-tight">
              Four Core Strengths Grounded in Delivery Precision
            </h2>
          </div>

          {/* 4 Equal Columns Grid with subtle dividers: 4 on desktop, 2x2 on tablet, 1 on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200/90 bg-white border border-slate-200/90 rounded-[4px] shadow-2xs">
            {CORE_STRENGTHS.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <div
                  key={index}
                  className="p-6 sm:p-7 xl:p-8 flex flex-col justify-between hover:bg-slate-50/50 transition-colors group"
                >
                  <div>
                    {/* Restrained line icon with subtle yellow accent on hover */}
                    <div className="w-10 h-10 rounded-[4px] bg-slate-50 border border-slate-200 flex items-center justify-center text-spl-navy-deep mb-5 group-hover:bg-spl-yellow group-hover:border-spl-yellow transition-colors">
                      <Icon className="w-5 h-5 stroke-[1.8] text-spl-navy-deep" />
                    </div>

                    {/* Heading */}
                    <h3 className="font-heading font-bold text-[14px] sm:text-[14.5px] tracking-[0.06em] uppercase text-spl-navy-deep mb-2.5">
                      {strength.title}
                    </h3>

                    {/* Description */}
                    <p className="font-body text-[13.5px] sm:text-[14px] text-slate-600 leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SPL COMMITMENT SECTION (DEEP NAVY EDITORIAL STATEMENT) */}
      {/* ========================================================================= */}
      <section className="w-full bg-spl-navy-deep text-white py-14 sm:py-18 lg:py-24 relative overflow-hidden">
        {/* Subtle background ambient dotted pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />

        <div className="w-full max-w-[1440px] mx-auto relative z-10 px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-[960px]">
            <span className="font-heading font-bold text-[11px] tracking-[0.2em] uppercase text-spl-yellow block mb-4">
              THE SPL COMMITMENT
            </span>

            <blockquote className="font-serif italic text-[26px] min-[360px]:text-[30px] sm:text-[40px] lg:text-[48px] leading-[1.2] text-slate-100">
              “Picked up in{' '}
              <span className="text-spl-yellow not-italic font-bold">
                Thoothukudi
              </span>
              . Delivered across India and around the{' '}
              <span className="text-spl-yellow not-italic font-bold">
                World
              </span>
              .”
            </blockquote>

            <p className="mt-5 sm:mt-6 text-[14px] sm:text-[15.5px] text-slate-300 font-body max-w-[640px] leading-relaxed">
              Every shipment represents a business commitment or a personal connection. Our role is to coordinate the movement carefully from pickup through dispatch and onward delivery.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. HOW WE WORK (OPERATING PHILOSOPHY: 3-STAGE TIMELINE) */}
      {/* ========================================================================= */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20 border-b border-spl-border/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Section Heading */}
          <div className="mb-10 sm:mb-12 max-w-[580px]">
            <span className="font-heading font-bold text-[11px] tracking-[0.16em] uppercase text-slate-500 block mb-2">
              OPERATING PHILOSOPHY
            </span>
            <h2 className="font-display font-extrabold text-[24px] sm:text-[30px] lg:text-[34px] text-spl-navy-deep leading-tight">
              How We Work
            </h2>
            <p className="font-body text-[14px] sm:text-[14.5px] text-slate-600 mt-2">
              A transparent, dependable three-stage execution process for every consignment.
            </p>
          </div>

          {/* 3 Steps Process: Horizontal on desktop, stacked on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 relative">
            {WORK_STEPS.map((step, idx) => (
              <div key={idx} className="relative flex flex-col justify-between group">
                <div>
                  {/* Step Number & Connector Line */}
                  <div className="flex items-center gap-4 mb-3 sm:mb-4">
                    <span className="font-display font-extrabold text-[28px] sm:text-[36px] text-spl-navy-deep leading-none group-hover:text-spl-yellow transition-colors">
                      {step.number}
                    </span>
                    <div className="h-[2px] flex-1 bg-slate-200 group-hover:bg-spl-yellow transition-colors" />
                  </div>

                  {/* Step Title */}
                  <h3 className="font-heading font-bold text-[14.5px] sm:text-[16px] tracking-wider uppercase text-spl-navy-deep mb-2">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="font-body text-[13.5px] sm:text-[14.5px] text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. FINAL ABOUT CTA SECTION */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#F8F7F2] py-12 sm:py-16 lg:py-20 border-b border-spl-border/80">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* CTA Text */}
          <div className="max-w-[620px]">
            <h2 className="font-display font-extrabold text-[24px] sm:text-[30px] lg:text-[36px] text-spl-navy-deep leading-tight mb-2.5">
              Planning your next shipment?
            </h2>
            <p className="font-body text-[14.5px] sm:text-[16px] text-slate-600 leading-relaxed">
              Tell us what you need to send, where it needs to go and our team can help you choose the right service.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 shrink-0">
            <Button
              variant="primary"
              size="lg"
              onClick={onOpenBookingModal}
              icon={<ArrowUpRight className="w-4 h-4 stroke-[2.5]" />}
              className="shadow-2xs font-heading font-bold"
            >
              BOOK A SHIPMENT
            </Button>

            <Button
              variant="secondary"
              size="lg"
              onClick={() => navigate('/services')}
              icon={<ArrowRight className="w-4 h-4 stroke-[2.2]" />}
              className="font-heading font-semibold"
            >
              VIEW OUR SERVICES
            </Button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SHARED CORPORATE FOOTER */}
      {/* ========================================================================= */}
      <Footer
        onOpenBookingModal={onOpenBookingModal}
        onOpenContactModal={onOpenContactModal}
      />

    </div>
  );
};
