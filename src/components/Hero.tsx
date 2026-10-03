import React from 'react';
import { ArrowUpRight, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from './Button';
import { HeroHighlights } from './HeroHighlights';
import { BrushStroke } from './BrushStroke';

interface HeroProps {
  onOpenBookingModal: () => void;
  onViewServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal, onViewServices }) => {
  return (
    <section
      id="home"
      className="relative w-full min-h-0 lg:min-h-[calc(100vh-200px)] xl:min-h-[580px] bg-white text-spl-navy-deep overflow-hidden flex flex-col justify-center"
    >
      {/* ========================================================================= */}
      {/* FULL-WIDTH RESPONSIVE HERO CONTAINER (EDGE-TO-EDGE DESKTOP VIEWPORT) */}
      {/* ========================================================================= */}
      <div className="w-full flex-1 flex flex-col justify-center relative py-6 sm:py-8 lg:py-4 xl:py-6">

        {/* ========================================================================= */}
        {/* 1. RIGHT-SIDE HERO VISUAL (EXPANDS ALL THE WAY TO THE BROWSER'S RIGHT EDGE) */}
        {/* ========================================================================= */}
        <div
          className="hidden lg:block absolute top-0 right-0 bottom-0 w-[68%] xl:w-[72%] 2xl:w-[75%] overflow-hidden pointer-events-none select-none z-0"
        >
          <div className="relative w-full h-full">
            {/* Main Logistics Photograph with Broad Organic Left Alpha-Fade Mask */}
            <div
              className="w-full h-full"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 12%, rgba(0,0,0,0.32) 26%, rgba(0,0,0,0.75) 46%, black 66%, black 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 12%, rgba(0,0,0,0.32) 26%, rgba(0,0,0,0.75) 46%, black 66%, black 100%)',
              }}
            >
              <img
                src="/images/spl-hero-logistics.jpg"
                alt="SPL International Courier Solution cargo aircraft, courier van, worker, and parcels"
                className="w-full h-full object-cover object-[right_35%] xl:object-[right_36%] filter brightness-[1.01] contrast-[1.02]"
                loading="eager"
              />
            </div>

            {/* Broad soft inner atmospheric left dissolve */}
            <div className="absolute inset-y-0 left-0 w-64 xl:w-96 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />

            {/* Top subtle fade under header */}
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white via-white/40 to-transparent z-10" />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. LEFT HERO CONTENT (OCCUPIES 44-48% WITH RESPONSIVE CLAMP PADDING) */}
        {/* ========================================================================= */}
        <div className="w-full max-w-[1440px] mx-auto relative z-10 flex items-center px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="w-full lg:w-[48%] xl:w-[46%] pt-6 sm:pt-10 lg:pt-8 xl:pt-10 pb-6 sm:pb-10 pr-0 lg:pr-4">
            <div className="max-w-[590px] relative">
              
              {/* Subtle soft white readability gradient behind text if image overlaps */}
              <div
                className="hidden lg:block absolute -inset-y-8 -left-12 -right-20 pointer-events-none -z-10"
                style={{
                  background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.98) 55%, rgba(255,255,255,0.85) 75%, rgba(255,255,255,0) 100%)',
                }}
              />

              {/* Main Headline: Begins directly with the content (NO EYEBROW) */}
              <h1 className="select-none tracking-tight mb-5">
                {/* Line 1: "From" in elegant serif italic */}
                <span className="block font-serif italic font-normal text-[32px] min-[360px]:text-[38px] sm:text-[56px] lg:text-[62px] xl:text-[72px] text-slate-700 leading-none mb-1">
                  From
                </span>

                {/* Line 2: "THOOTHUKUDI," in strong uppercase sans-serif with hand-painted yellow stroke */}
                <span className="relative inline-block leading-[0.88] pt-1 pb-2">
                  <span className="font-display font-extrabold text-[32px] min-[360px]:text-[42px] sm:text-[64px] lg:text-[76px] xl:text-[88px] tracking-[-0.01em] uppercase text-spl-navy-deep block">
                    THOOTHUKUDI,
                  </span>
                  {/* Hand-painted yellow brush stroke highlight */}
                  <BrushStroke className="absolute -bottom-1 left-0 w-full h-[12px] min-[360px]:h-[16px] sm:h-[22px] xl:h-[24px] -z-10" />
                </span>

                {/* Line 3: "to every" in serif italic */}
                <span className="block font-serif italic font-normal text-[26px] min-[360px]:text-[32px] sm:text-[46px] lg:text-[52px] xl:text-[60px] text-slate-700 leading-tight pt-1">
                  to every
                </span>

                {/* Line 4: "destination." in strong sans-serif */}
                <span className="block font-display font-extrabold text-[32px] min-[360px]:text-[40px] sm:text-[56px] lg:text-[64px] xl:text-[74px] text-spl-navy-deep leading-[1] mt-0.5">
                  destination.
                </span>
              </h1>

              {/* Hero Supporting Copy: Natural, professional business writing */}
              <div className="space-y-3 font-body text-slate-700 text-[15.5px] sm:text-[16px] xl:text-[16.5px] leading-[1.65] max-w-[590px] mb-6">
                <p>
                  From a document leaving Thoothukudi to a commercial shipment moving across borders,{' '}
                  <strong className="font-semibold text-spl-navy-deep">SPL International Courier Solution</strong> helps individuals and businesses move consignments with dependable pickup, careful handling and coordinated delivery.
                </p>
                <p className="text-slate-600 text-[14.5px] sm:text-[15px]">
                  Local pickup support from Thoothukudi, domestic movement across India and international express solutions for destinations worldwide.
                </p>
              </div>

              {/* Service Highlights: Clean 2-column feature arrangement */}
              <div className="pt-2 border-t border-slate-200/80 mb-6 max-w-[590px]">
                <HeroHighlights />
              </div>

              {/* CTA Buttons: Real functional buttons with architectural styling */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 max-w-[520px]">
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
                  onClick={onViewServices}
                  icon={<ArrowRight className="w-4 h-4 stroke-[2.2]" />}
                  className="font-heading font-semibold"
                >
                  VIEW OUR SERVICES
                </Button>
              </div>

              {/* Supporting Line: Directly below CTA buttons */}
              <div className="mt-6 sm:mt-7 flex items-center gap-2.5 text-[13px] sm:text-[13.5px] font-body text-slate-600 font-normal">
                <ShieldCheck className="w-4 h-4 text-spl-navy-deep flex-shrink-0" />
                <span className="leading-normal">
                  Direct documentation assistance &amp; daily dispatches from Thoothukudi, Tamil Nadu
                </span>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 3. MOBILE & TABLET VISUAL (<768px): Normal vertical flow, cleanly below content */}
      {/* ========================================================================= */}
      <div className="lg:hidden w-full relative overflow-hidden pointer-events-none select-none mt-4 -mb-1">
        <div className="relative w-full h-[300px] sm:h-[380px]">
          <div
            className="w-full h-full"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
            }}
          >
            <img
              src="/images/spl-hero-logistics.jpg"
              alt="SPL International Courier Solution logistics operations"
              className="w-full h-full object-cover object-[center_35%]"
              loading="eager"
            />
          </div>
          {/* Top and bottom subtle dissolves on mobile */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-spl-navy-deep to-transparent" />
        </div>
      </div>
    </section>
  );
};
