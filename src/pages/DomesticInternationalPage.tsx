import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion, type Variants } from 'framer-motion';
import {
  ArrowUpRight,
  ArrowRight,
  Truck,
  Plane,
  Globe2,
  Package,
  FileText,
  Clock,
  MapPin,
  ShieldCheck,
  Navigation,
  MessageCircle,
  Search,
} from 'lucide-react';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';
import { StickyStorySection } from '../components/StickyStorySection';
import { WHATSAPP_NUMBER } from '../config/constants';
import { SEOHead } from '../components/SEOHead';

interface DomesticInternationalPageProps {
  onOpenBookingModal: (service?: string, destination?: string, requirement?: string) => void;
  onOpenContactModal?: () => void;
}

interface HeroSlide {
  id: number;
  eyebrowBadge: string;
  eyebrowSub: string;
  headlineSerif: string;
  headlineBold: string;
  headlineAccent: string;
  descriptionPrimary: string;
  descriptionSecondary: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    eyebrowBadge: "NETWORK COVERAGE",
    eyebrowSub: "DOMESTIC + INTERNATIONAL",
    headlineSerif: "From Thoothukudi,",
    headlineBold: "across India and ",
    headlineAccent: "beyond.",
    descriptionPrimary:
      "SPL International Courier connects doorstep pickup in Thoothukudi and Tuticorin with express domestic parcel delivery across India and worldwide international courier networks.",
    descriptionSecondary:
      "From urgent documents and personal parcels to commercial cargo, we provide reliable courier solutions tailored to your destination.",
  },
  {
    id: 2,
    eyebrowBadge: "GLOBAL LOGISTICS",
    eyebrowSub: "COMMERCIAL & COURIER DISPATCH",
    headlineSerif: "Connecting Tamil Nadu,",
    headlineBold: "to key global ",
    headlineAccent: "destinations.",
    descriptionPrimary:
      "Coordinating international parcel delivery, urgent document couriers, and commercial cargo from Thoothukudi to USA, UK, UAE (Dubai), Canada, Singapore, Australia, and Europe.",
    descriptionSecondary:
      "Providing professional customs guidance, packing support, and end-to-end transit tracking from our Thoothukudi dispatch hub.",
  },
];

export const DomesticInternationalPage: React.FC<DomesticInternationalPageProps> = ({
  onOpenBookingModal,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Dynamic header + ticker offset measurement (Section 1)
  useEffect(() => {
    const updateHeaderOffset = () => {
      const navEl = document.querySelector('.shadow-nav') || document.querySelector('header');
      if (navEl) {
        const height = Math.round(navEl.getBoundingClientRect().height);
        if (height > 0) {
          document.documentElement.style.setProperty('--header-and-ticker-offset', `${height}px`);
          document.documentElement.style.setProperty('--sticky-top-offset', `${height}px`);
        }
      }
    };

    updateHeaderOffset();
    window.addEventListener('resize', updateHeaderOffset, { passive: true });
    window.addEventListener('orientationchange', updateHeaderOffset, { passive: true });
    return () => {
      window.removeEventListener('resize', updateHeaderOffset);
      window.removeEventListener('orientationchange', updateHeaderOffset);
    };
  }, []);

  // Subtle auto-advance every 8 seconds, pausing on hover (Section 19)
  useEffect(() => {
    if (isHovered || shouldReduceMotion) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [isHovered, shouldReduceMotion]);

  const handleWhatsAppInquiry = () => {
    const message = encodeURIComponent(
      "Hello SPL Worldwide Express, I would like to inquire about domestic and international courier shipping options from Thoothukudi."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  // Motion variants for standard UI reveals
  const fadeInVariant: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const imageVariant: Variants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <div className="w-full bg-white text-spl-navy-deep min-h-screen flex flex-col font-body selection:bg-spl-yellow selection:text-spl-navy-deep">
      {/* Dynamic SEO Meta & Structured Data */}
      <SEOHead
        title="Domestic & International Courier Service | Thoothukudi | SPL"
        description="SPL Worldwide Express provides domestic courier services across India and international courier solutions from Thoothukudi to destinations worldwide."
        canonicalPath="/domestic-international"
        keywords="domestic courier thoothukudi, international courier thoothukudi, courier service thoothukudi, courier service across india, international shipping thoothukudi, spl worldwide express"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Domestic & International', item: '/domestic-international' },
        ]}
        structuredData={[
          {
            '@type': 'Service',
            '@id': 'https://splexpress.in/domestic-international#domestic-courier',
            'name': 'Domestic Courier Services',
            'serviceType': 'Domestic Courier & Parcel Delivery',
            'provider': {
              '@type': 'CourierService',
              'name': 'SPL Worldwide Express',
              'url': 'https://splexpress.in/',
              'telephone': '+91 98945 90600',
              'address': {
                '@type': 'PostalAddress',
                'streetAddress': 'Q4WW+RMQ',
                'addressLocality': 'Thoothukudi',
                'addressRegion': 'Tamil Nadu',
                'postalCode': '628001',
                'addressCountry': 'IN',
              },
            },
            'areaServed': {
              '@type': 'Country',
              'name': 'India',
            },
            'description': 'Reliable pan-India domestic parcel delivery and document courier service from Thoothukudi and Tuticorin.',
          },
          {
            '@type': 'Service',
            '@id': 'https://splexpress.in/domestic-international#international-courier',
            'name': 'International Courier Services',
            'serviceType': 'International Courier & Logistics Coordination',
            'provider': {
              '@type': 'CourierService',
              'name': 'SPL Worldwide Express',
              'url': 'https://splexpress.in/',
              'telephone': '+91 98945 90600',
              'address': {
                '@type': 'PostalAddress',
                'streetAddress': 'Q4WW+RMQ',
                'addressLocality': 'Thoothukudi',
                'addressRegion': 'Tamil Nadu',
                'postalCode': '628001',
                'addressCountry': 'IN',
              },
            },
            'areaServed': {
              '@type': 'Place',
              'name': 'Worldwide',
            },
            'description': 'Worldwide express parcel and document delivery from Thoothukudi to USA, UK, UAE, Canada, Australia, Singapore, Malaysia, Europe and global destinations. SPL Worldwide Express coordinates suitable courier and logistics options through established service networks, including DHL, UPS, FedEx and Aramex, depending on destination, shipment type, service requirements and availability.',
          },
        ]}
      />

      {/* ========================================================================= */}
      {/* ========================================================================= */}
      {/* 01. FULL-SCREEN DESKTOP HERO WITH IDENTICAL GEOMETRY SLIDES */}
      {/* Height: calc(100svh - var(--header-and-ticker-offset, 108px)) */}
      {/* Left: controlled editorial text (44-46%). Right: edge-to-edge immersive photo (58-64%) */}
      {/* ========================================================================= */}
      <section
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-full relative overflow-hidden bg-[#071A2B] text-white flex flex-col justify-center min-h-[calc(100svh-var(--header-and-ticker-offset,96px))] lg:h-[calc(100svh-var(--header-and-ticker-offset,108px))] lg:min-h-[640px]"
      >
        {/* ========================================================================= */}
        {/* DESKTOP RIGHT-SIDE HERO VISUAL (BREAKOUT EXPANDING TO BROWSER RIGHT EDGE) */}
        {/* ========================================================================= */}
        <div
          className="hidden lg:block absolute top-0 right-0 bottom-0 w-[58%] xl:w-[62%] 2xl:w-[64%] overflow-hidden pointer-events-none select-none z-0"
        >
          <div className="relative w-full h-full">
            {/* Main Ocean Container Logistics Vessel Photograph with Organic Left Alpha-Fade Mask */}
            <div
              className="w-full h-full"
              style={{
                maskImage:
                  'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.18) 12%, rgba(0,0,0,0.78) 26%, black 40%, black 100%), linear-gradient(to bottom, transparent 0%, black 6%, black 92%, transparent 100%)',
                WebkitMaskImage:
                  'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.18) 12%, rgba(0,0,0,0.78) 26%, black 40%, black 100%), linear-gradient(to bottom, transparent 0%, black 6%, black 92%, transparent 100%)',
                maskComposite: 'intersect',
                WebkitMaskComposite: 'destination-in',
              }}
            >
              <img
                src="/images/spl-di-hero.jpg"
                alt="SPL Worldwide Express commercial port container logistics and ocean cargo operations"
                className="w-full h-full object-cover object-[center_center] xl:object-[70%_center] filter brightness-[1.02] contrast-[1.03]"
                loading="eager"
                fetchPriority="high"
              />
            </div>

            {/* Soft inner atmospheric left dissolve into dark navy background */}
            <div className="absolute inset-y-0 left-0 w-36 sm:w-48 xl:w-64 bg-gradient-to-r from-[#071A2B] via-[#071A2B]/85 to-transparent z-10" />

            {/* Top subtle fade under header */}
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#071A2B] via-[#071A2B]/40 to-transparent z-10" />

            {/* Bottom transition dissolve */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#071A2B] via-[#071A2B]/60 to-transparent z-10" />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE / TABLET BACKGROUND HERO VISUAL (<1024px) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden absolute inset-0 pointer-events-none z-0">
          <img
            src="/images/spl-di-hero.jpg"
            alt="SPL Worldwide Express commercial port container logistics and ocean cargo operations"
            className="w-full h-full object-cover object-[75%_center]"
            loading="eager"
            fetchPriority="high"
          />
          {/* Mobile Directional Readability Gradient (Dark left, progressively reveals logistics scene) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(90deg, rgba(7,26,43,0.95) 0%, rgba(7,26,43,0.85) 30%, rgba(7,26,43,0.60) 58%, rgba(7,26,43,0.25) 80%, rgba(7,26,43,0.08) 100%)',
            }}
          />
        </div>

        {/* Subtle Bottom Transition Fade into Domestic section #FFFFFF */}
        <div
          className="absolute inset-x-0 bottom-0 h-10 sm:h-14 pointer-events-none z-10"
          style={{
            background: 'linear-gradient(to top, #FFFFFF 0%, rgba(255,255,255,0.3) 40%, transparent 100%)',
          }}
        />

        {/* Hero Foreground Content: Vertically Centered in Available Viewport */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between py-8 sm:py-10 lg:py-0">
          
          {/* Left Column: Fixed Responsive Slide Frame (~44-46% width) */}
          <div className="w-full lg:w-[46%] xl:w-[44%] text-left">
            <div className="max-w-[580px] relative">
              
              {/* Animated Slide Content (Crossfade with 0 layout shift) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -6 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full"
                >
                  {/* Eyebrow Label */}
                  <div className="flex items-center gap-2 mb-3.5 select-none">
                    <span className="w-2 h-2 rounded-full bg-spl-yellow inline-block" />
                    <span className="font-heading font-bold text-[11.5px] tracking-[0.2em] uppercase text-spl-yellow">
                      {HERO_SLIDES[currentSlide].eyebrowBadge}
                    </span>
                    <span className="text-white/30 font-normal">|</span>
                    <span className="font-heading font-semibold text-[11px] tracking-[0.14em] uppercase text-slate-300">
                      {HERO_SLIDES[currentSlide].eyebrowSub}
                    </span>
                  </div>

                  {/* Main Headline: Editorial Serif + Strong Modern Sans */}
                  <h1 className="select-none tracking-tight mb-4 min-h-[90px] sm:min-h-[110px] lg:min-h-[120px] flex flex-col justify-center">
                    <span className="block font-serif italic font-normal text-[28px] min-[360px]:text-[34px] sm:text-[44px] lg:text-[50px] text-slate-100 leading-tight">
                      {HERO_SLIDES[currentSlide].headlineSerif}
                    </span>
                    <span className="block font-display font-extrabold text-[26px] min-[360px]:text-[32px] sm:text-[42px] lg:text-[48px] text-white leading-tight mt-1">
                      {HERO_SLIDES[currentSlide].headlineBold}
                      <span className="underline decoration-spl-yellow decoration-4 underline-offset-4">
                        {HERO_SLIDES[currentSlide].headlineAccent}
                      </span>
                    </span>
                  </h1>

                  {/* Descriptions */}
                  <p className="font-body text-slate-200 text-[15px] sm:text-[15.5px] leading-relaxed mb-2.5 min-h-[48px] sm:min-h-[50px]">
                    {HERO_SLIDES[currentSlide].descriptionPrimary}
                  </p>
                  <p className="font-body text-slate-300 text-[13.5px] sm:text-[14px] leading-relaxed mb-6 min-h-[42px] sm:min-h-[44px]">
                    {HERO_SLIDES[currentSlide].descriptionSecondary}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Fixed CTA Buttons (Identical Geometry Across Both Slides) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => onOpenBookingModal()}
                    icon={<ArrowUpRight className="w-4 h-4 stroke-[2.5]" />}
                    className="font-heading font-bold shadow-md whitespace-nowrap w-full sm:w-auto"
                  >
                    BOOK A SHIPMENT
                  </Button>
                </motion.div>

                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[4px] border border-white/30 bg-white/5 hover:bg-white/10 text-white text-[13.5px] font-heading font-bold transition-all shadow-2xs whitespace-nowrap w-full sm:w-auto"
                  >
                    <span>VIEW OUR SERVICES</span>
                    <ArrowRight className="w-4 h-4 text-slate-300" />
                  </Link>
                </motion.div>
              </div>

              {/* Support Details Strip & Slide Indicator Bar */}
              <div className="pt-3.5 border-t border-white/15 flex flex-wrap items-center justify-between gap-y-2 gap-x-4 text-[12px] sm:text-[12.5px] font-heading text-slate-300">
                <div className="flex flex-wrap items-center gap-y-1 gap-x-5">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-spl-yellow shrink-0" />
                    <span className="font-semibold text-white">Daily Operations: 10:00 AM – 10:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-spl-yellow shrink-0" />
                    <span>Origin: Thoothukudi, Tamil Nadu</span>
                  </div>
                </div>

                {/* Refined Slide Indicator Pills */}
                <div className="flex items-center gap-2 shrink-0 select-none">
                  {HERO_SLIDES.map((slide, idx) => (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => setCurrentSlide(idx)}
                      aria-label={`Switch to hero slide ${idx + 1}`}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-all cursor-pointer ${
                        currentSlide === idx ? 'bg-white/15 text-white' : 'text-slate-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full transition-all ${
                        currentSlide === idx ? 'bg-spl-yellow scale-125' : 'bg-white/40'
                      }`} />
                      <span className="font-heading font-bold text-[11px] tracking-wider">
                        0{slide.id}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column Spacer for Desktop Vista */}
          <div className="hidden lg:block lg:w-[52%] xl:w-[54%] pointer-events-none select-none" />

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02. DOMESTIC SECTION — INDIA MOVEMENT */}
      {/* Architecture: Left editorial text inside container, Right image breaking out to browser right edge */}
      {/* ========================================================================= */}
      <section className="w-full bg-white relative overflow-hidden py-14 sm:py-18 lg:py-20 lg:min-h-[600px] xl:min-h-[660px] flex items-center border-b border-slate-200/80">
        
        {/* RIGHT-SIDE DESKTOP MEDIA BREAKOUT (EXPANDS TO BROWSER RIGHT EDGE) */}
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[50%] xl:w-[52%] 2xl:w-[54%] overflow-hidden pointer-events-none select-none z-0">
          <div className="relative w-full h-full">
            <div
              className="w-full h-full"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 10%, rgba(0,0,0,0.8) 26%, black 42%, black 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 10%, rgba(0,0,0,0.8) 26%, black 42%, black 100%)',
              }}
            >
              <img
                src="/images/spl-di-domestic.jpg"
                alt="SPL Worldwide Express commercial delivery truck and courier handover with SPL parcel box"
                className="w-full h-full object-cover object-[center_35%] filter brightness-[1.01] contrast-[1.02]"
                loading="lazy"
              />
            </div>
            {/* Soft left white fade merging naturally with text */}
            <div className="absolute inset-y-0 left-0 w-32 xl:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent z-10" />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent z-10" />
          </div>
        </div>

        {/* CONTAINER CONTENT */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between">
          
          {/* Left: Domestic Content (48% - 50% width) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInVariant}
            className="w-full lg:w-[48%] xl:w-[46%] flex flex-col space-y-4 sm:space-y-5 text-left"
          >
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-[4px] bg-slate-50 border border-slate-200 flex items-center justify-center text-spl-navy-deep">
                <Truck className="w-4 h-4 text-spl-navy-deep" />
              </span>
              <span className="font-heading font-bold text-[11.5px] tracking-[0.18em] uppercase text-slate-500">
                SERVICE SCOPE 01 • INDIA MOVEMENT
              </span>
            </div>

            <h2 className="font-display font-extrabold text-[24px] min-[360px]:text-[28px] sm:text-[34px] lg:text-[38px] text-spl-navy-deep leading-tight">
              <span>Across India, </span>
              <span className="font-serif italic font-normal text-slate-700">starting from Thoothukudi.</span>
            </h2>

            {/* Introductory Business Copy */}
            <p className="font-body text-[#46515C] text-[15px] sm:text-[15.5px] leading-relaxed max-w-[600px]">
              From doorstep courier pickup in Thoothukudi and Tuticorin to destinations across India, SPL International Courier provides fast domestic parcel delivery, express document shipping, and cargo transport through coordinated logistics networks.
            </p>

            {/* Compact Editorial 2x2 Service Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 pt-1">
              <div className="p-3.5 sm:p-4 rounded-lg bg-[#F6F5F1] border border-slate-200/80">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-spl-yellow shrink-0" />
                  <h3 className="font-heading font-bold text-[12px] sm:text-[12.5px] tracking-wider uppercase text-spl-navy-deep">
                    LOCAL COURIER PICKUP
                  </h3>
                </div>
                <p className="text-[13px] text-[#46515C] leading-relaxed">
                  Convenient courier pickup service from your doorstep in Thoothukudi &amp; Tuticorin.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-lg bg-[#F6F5F1] border border-slate-200/80">
                <div className="flex items-center gap-2 mb-1">
                  <Truck className="w-4 h-4 text-spl-yellow shrink-0" />
                  <h3 className="font-heading font-bold text-[12px] sm:text-[12.5px] tracking-wider uppercase text-spl-navy-deep">
                    PAN-INDIA COURIER
                  </h3>
                </div>
                <p className="text-[13px] text-[#46515C] leading-relaxed">
                  Fast parcel delivery across India through premier domestic express logistics channels.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-lg bg-[#F6F5F1] border border-slate-200/80">
                <div className="flex items-center gap-2 mb-1">
                  <Package className="w-4 h-4 text-spl-yellow shrink-0" />
                  <h3 className="font-heading font-bold text-[12px] sm:text-[12.5px] tracking-wider uppercase text-spl-navy-deep">
                    DOCUMENTS & PARCELS
                  </h3>
                </div>
                <p className="text-[13px] text-[#46515C] leading-relaxed">
                  Suitable for everyday documents, personal parcels and general commercial consignments.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-lg bg-[#F6F5F1] border border-slate-200/80">
                <div className="flex items-center gap-2 mb-1">
                  <FileText className="w-4 h-4 text-spl-yellow shrink-0" />
                  <h3 className="font-heading font-bold text-[12px] sm:text-[12.5px] tracking-wider uppercase text-spl-navy-deep">
                    BUSINESS SHIPMENTS
                  </h3>
                </div>
                <p className="text-[13px] text-[#46515C] leading-relaxed">
                  Support for commercial samples, distributor dispatches and recurring B2B consignment needs.
                </p>
              </div>
            </div>

            {/* Domestic Booking Action */}
            <div className="pt-1">
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="inline-block">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => onOpenBookingModal('Domestic Parcel', 'Within India')}
                  icon={<ArrowUpRight className="w-4 h-4 stroke-[2.5]" />}
                  className="font-heading font-bold shadow-xs"
                >
                  BOOK DOMESTIC SHIPMENT
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Mobile Domestic Visual (<1024px) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={imageVariant}
            className="lg:hidden w-full select-none relative mt-8 sm:mt-10"
          >
            <div className="relative w-full h-[320px] sm:h-[400px] rounded-xl overflow-hidden shadow-sm">
              <img
                src="/images/spl-di-domestic.jpg"
                alt="SPL Worldwide Express commercial delivery truck and courier handover with SPL parcel box"
                className="w-full h-full object-cover object-[center_35%]"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none z-10" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03. PAN-INDIA COVERAGE (#F6F5F1 - Left Text ~40%, Right Map ~60%) */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#F6F5F1] py-12 sm:py-14 lg:py-16 border-b border-slate-200/80">
        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Left Column: Headline, Explanation & Representative Cities (42% width) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInVariant}
            className="w-full lg:w-[42%] flex flex-col space-y-3.5 sm:space-y-4 text-left"
          >
            <span className="font-heading font-bold text-[11px] tracking-[0.18em] uppercase text-slate-500 block">
              DOMESTIC DESTINATION NETWORK
            </span>

            <h3 className="font-heading font-bold text-[20px] min-[360px]:text-[24px] sm:text-[30px] text-spl-navy-deep leading-tight">
              Pan-India destination coverage.
            </h3>

            <p className="font-body text-[14.5px] text-[#46515C] leading-relaxed">
              Representative destinations across India. Routing depends on destination, shipment requirements and available courier networks.
            </p>

            {/* Added Supporting Context */}
            <p className="font-body text-[13.5px] text-[#5A6572] leading-relaxed">
              Representative destinations include Chennai, Bengaluru, Hyderabad, Mumbai and Delhi. Actual routing depends on destination, shipment requirements and available courier networks.
            </p>
            
            {/* Editorial Line Above Destination Chips */}
            <div className="pt-1.5 space-y-2.5">
              <span className="font-heading font-semibold text-[11.5px] tracking-wider uppercase text-slate-500 block">
                Representative destinations across major Indian cities
              </span>

              <div className="flex flex-wrap items-center gap-2 text-[12px] font-heading">
                <span className="px-3 py-1 rounded-full bg-spl-yellow text-spl-navy-deep font-bold inline-flex items-center gap-1.5 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-spl-navy-deep" />
                  Origin: Thoothukudi
                </span>
                {['Chennai', 'Bengaluru', 'Hyderabad', 'Mumbai', 'Delhi'].map((city) => (
                  <span key={city} className="px-3 py-1 rounded-full bg-white border border-slate-200/90 text-spl-navy-deep font-medium">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean Map Graphic (58% width) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={imageVariant}
            className="w-full lg:w-[58%]"
          >
            <div className="rounded-xl overflow-hidden border border-slate-200 bg-white p-3 sm:p-5 shadow-xs">
              <img
                src="/images/spl-domestic-destination-map.png"
                alt="Illustrative pan-India destination coverage from Thoothukudi"
                className="w-full h-auto max-h-[420px] object-contain mx-auto"
                loading="lazy"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04. BRIDGE SECTION — HOW WE SUPPORT THE SHIPMENT */}
      {/* Compact editorial introduction to the 4-step coordination process */}
      {/* ========================================================================= */}
      <section className="w-full bg-white py-12 sm:py-14 lg:py-16 border-b border-slate-200/80">
        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col gap-8 text-left">
          
          {/* Header Block */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInVariant}
            className="max-w-[720px] space-y-3"
          >
            <div className="flex items-center gap-2 select-none">
              <span className="w-2 h-2 rounded-full bg-spl-yellow inline-block" />
              <span className="font-heading font-bold text-[11.5px] tracking-[0.18em] uppercase text-spl-navy-deep">
                HOW WE SUPPORT THE SHIPMENT
              </span>
            </div>

            <h2 className="font-display font-extrabold text-[24px] min-[360px]:text-[28px] sm:text-[34px] lg:text-[38px] text-spl-navy-deep leading-tight">
              The right service starts with understanding the shipment.
            </h2>

            <p className="font-body text-[#46515C] text-[15px] sm:text-[15.5px] leading-relaxed max-w-[680px]">
              Every shipment has different requirements. We consider the destination, shipment type, size, weight and documentation before coordinating a suitable courier or logistics option.
            </p>
          </motion.div>

          {/* Simple Compact Horizontal Sequence (4 Steps) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeInVariant}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
          >
            {/* Step 1: UNDERSTAND */}
            <div className="p-5 rounded-lg bg-[#F6F5F1] border border-slate-200/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-heading font-extrabold text-[15px] text-spl-yellow tracking-wider">
                    01
                  </span>
                  <div className="w-7 h-7 rounded-md bg-white border border-slate-200 flex items-center justify-center text-spl-navy-deep">
                    <Search className="w-3.5 h-3.5 text-spl-navy-deep" />
                  </div>
                </div>
                <h3 className="font-heading font-bold text-[13.5px] uppercase tracking-wider text-spl-navy-deep mb-1">
                  UNDERSTAND
                </h3>
                <p className="text-[13px] text-[#46515C] leading-relaxed">
                  Shipment details and destination
                </p>
              </div>
            </div>

            {/* Step 2: REVIEW */}
            <div className="p-5 rounded-lg bg-[#F6F5F1] border border-slate-200/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-heading font-extrabold text-[15px] text-spl-yellow tracking-wider">
                    02
                  </span>
                  <div className="w-7 h-7 rounded-md bg-white border border-slate-200 flex items-center justify-center text-spl-navy-deep">
                    <FileText className="w-3.5 h-3.5 text-spl-navy-deep" />
                  </div>
                </div>
                <h3 className="font-heading font-bold text-[13.5px] uppercase tracking-wider text-spl-navy-deep mb-1">
                  REVIEW
                </h3>
                <p className="text-[13px] text-[#46515C] leading-relaxed">
                  Documents and service requirements
                </p>
              </div>
            </div>

            {/* Step 3: COORDINATE */}
            <div className="p-5 rounded-lg bg-[#F6F5F1] border border-slate-200/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-heading font-extrabold text-[15px] text-spl-yellow tracking-wider">
                    03
                  </span>
                  <div className="w-7 h-7 rounded-md bg-white border border-slate-200 flex items-center justify-center text-spl-navy-deep">
                    <Navigation className="w-3.5 h-3.5 text-spl-navy-deep" />
                  </div>
                </div>
                <h3 className="font-heading font-bold text-[13.5px] uppercase tracking-wider text-spl-navy-deep mb-1">
                  COORDINATE
                </h3>
                <p className="text-[13px] text-[#46515C] leading-relaxed">
                  Suitable courier or logistics network
                </p>
              </div>
            </div>

            {/* Step 4: DISPATCH */}
            <div className="p-5 rounded-lg bg-[#F6F5F1] border border-slate-200/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-heading font-extrabold text-[15px] text-spl-yellow tracking-wider">
                    04
                  </span>
                  <div className="w-7 h-7 rounded-md bg-white border border-slate-200 flex items-center justify-center text-spl-navy-deep">
                    <Truck className="w-3.5 h-3.5 text-spl-navy-deep" />
                  </div>
                </div>
                <h3 className="font-heading font-bold text-[13.5px] uppercase tracking-wider text-spl-navy-deep mb-1">
                  DISPATCH
                </h3>
                <p className="text-[13px] text-[#46515C] leading-relaxed">
                  Support through the shipment process
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05. SIGNATURE STICKY SHIPMENT EXPERIENCE (GSAP ScrollTrigger Engine) */}
      {/* ========================================================================= */}
      <StickyStorySection />

      {/* ========================================================================= */}
      {/* 06. INTERNATIONAL MOVEMENT — GLOBAL COORDINATION */}
      {/* Architecture: Left image breaking out to browser left edge, Right editorial text inside container */}
      {/* ========================================================================= */}
      <section id="international-movement" className="w-full bg-white relative overflow-hidden py-14 sm:py-18 lg:py-20 lg:min-h-[600px] xl:min-h-[660px] flex items-center border-b border-slate-200/80">
        
        {/* LEFT-SIDE DESKTOP MEDIA BREAKOUT (EXPANDS TO BROWSER LEFT EDGE) */}
        <div className="hidden lg:block absolute top-0 left-0 bottom-0 w-[52%] xl:w-[54%] 2xl:w-[56%] overflow-hidden pointer-events-none select-none z-0">
          <div className="relative w-full h-full">
            <div
              className="w-full h-full"
              style={{
                maskImage: 'linear-gradient(to right, black 0%, black 65%, rgba(0,0,0,0.85) 78%, rgba(0,0,0,0.2) 92%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, black 0%, black 65%, rgba(0,0,0,0.85) 78%, rgba(0,0,0,0.2) 92%, transparent 100%)',
              }}
            >
              <img
                src="/images/spl-di-international.jpg"
                alt="International air cargo ground handling with SPL marked parcels and cargo aircraft"
                className="w-full h-full object-cover object-[72%_center] xl:object-[70%_55%] filter brightness-[1.01] contrast-[1.02]"
                loading="lazy"
              />
            </div>
            {/* Soft right white fade merging naturally with text */}
            <div className="absolute inset-y-0 right-0 w-32 xl:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent z-10" />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent z-10" />
          </div>
        </div>

        {/* CONTAINER CONTENT */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between">
          
          {/* Mobile International Visual (<1024px) - Appears FIRST on mobile */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={imageVariant}
            className="lg:hidden w-full select-none relative mb-8 sm:mb-10"
          >
            <div className="relative w-full h-[320px] sm:h-[400px] rounded-xl overflow-hidden shadow-sm">
              <img
                src="/images/spl-di-international.jpg"
                alt="International air cargo ground handling with SPL marked parcels and cargo aircraft"
                className="w-full h-full object-cover object-[70%_center]"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none z-10" />
            </div>
          </motion.div>

          {/* Left Column Spacer for Desktop Vista (occupies left area where image sits) */}
          <div className="hidden lg:block lg:w-[48%] xl:w-[50%] pointer-events-none select-none" />

          {/* Right: International Text Content (48% - 46% width) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInVariant}
            className="w-full lg:w-[48%] xl:w-[46%] flex flex-col space-y-4 sm:space-y-5 text-left"
          >
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-[4px] bg-slate-50 border border-slate-200 flex items-center justify-center text-spl-navy-deep">
                <Plane className="w-4 h-4 text-spl-navy-deep" />
              </span>
              <span className="font-heading font-bold text-[11.5px] tracking-[0.18em] uppercase text-slate-500">
                SERVICE SCOPE 02 • INTERNATIONAL MOVEMENT
              </span>
            </div>

            <h2 className="font-display font-extrabold text-[24px] min-[360px]:text-[28px] sm:text-[34px] lg:text-[38px] text-spl-navy-deep leading-tight">
              <span className="font-serif italic font-normal text-slate-700">From Thoothukudi </span>
              <span>to destinations worldwide.</span>
            </h2>

            {/* Introductory Copy */}
            <p className="font-body text-[#46515C] text-[15px] sm:text-[15.5px] leading-relaxed max-w-[600px]">
              International courier service from Thoothukudi (Tuticorin) for documents, personal parcels, and commercial cargo. Fast air express connections to the USA, UK, UAE (Dubai), Canada, Singapore, Australia, Europe, and over 220 countries worldwide.
            </p>

            {/* Added International Supporting Copy */}
            <p className="font-body text-[#5A6572] text-[13.5px] sm:text-[14px] leading-relaxed max-w-[600px]">
              We coordinate international document delivery and overseas parcel shipping with complete customs paperwork guidance and trusted carrier handoffs right from our Thoothukudi hub.
            </p>

            {/* Compact Editorial Service Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 pt-1">
              <div className="p-3.5 sm:p-4 rounded-lg bg-[#F6F5F1] border border-slate-200/80">
                <div className="flex items-center gap-2 mb-1">
                  <FileText className="w-4 h-4 text-spl-yellow shrink-0" />
                  <h3 className="font-heading font-bold text-[12px] sm:text-[12.5px] tracking-wider uppercase text-spl-navy-deep">
                    DOCUMENT COURIER
                  </h3>
                </div>
                <p className="text-[13px] text-[#46515C] leading-relaxed">
                  International document courier for certificates, visas, and legal papers.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-lg bg-[#F6F5F1] border border-slate-200/80">
                <div className="flex items-center gap-2 mb-1">
                  <Package className="w-4 h-4 text-spl-yellow shrink-0" />
                  <h3 className="font-heading font-bold text-[12px] sm:text-[12.5px] tracking-wider uppercase text-spl-navy-deep">
                    PARCEL SHIPPING
                  </h3>
                </div>
                <p className="text-[13px] text-[#46515C] leading-relaxed">
                  International parcel shipping to USA, UK, UAE, Canada, and global destinations.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-lg bg-[#F6F5F1] border border-slate-200/80">
                <div className="flex items-center gap-2 mb-1">
                  <Globe2 className="w-4 h-4 text-spl-yellow shrink-0" />
                  <h3 className="font-heading font-bold text-[12px] sm:text-[12.5px] tracking-wider uppercase text-spl-navy-deep">
                    BUSINESS & COMMERCIAL
                  </h3>
                </div>
                <p className="text-[13px] text-[#46515C] leading-relaxed">
                  Commercial samples, business parcels and shipment requirements.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-lg bg-[#F6F5F1] border border-slate-200/80">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-spl-yellow shrink-0" />
                  <h3 className="font-heading font-bold text-[12px] sm:text-[12.5px] tracking-wider uppercase text-spl-navy-deep">
                    CUSTOMS / DOCUMENTATION
                  </h3>
                </div>
                <p className="text-[13px] text-[#46515C] leading-relaxed">
                  Support with shipment information, commercial invoices, KYC guidelines and documentation requirements where applicable.
                </p>
              </div>
            </div>

            {/* Courier Network Coordination Note */}
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 text-[12.5px] text-[#6B7580] flex items-center gap-2.5">
              <Navigation className="w-4 h-4 text-spl-navy-deep shrink-0" />
              <span>
                Movement coordinated through established courier and logistics networks based on destination and service availability.
              </span>
            </div>

            {/* International Booking Action */}
            <div className="pt-1">
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="inline-block">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => onOpenBookingModal('International Parcel', 'Outside India')}
                  icon={<ArrowUpRight className="w-4 h-4 stroke-[2.5]" />}
                  className="font-heading font-bold shadow-xs"
                >
                  BOOK INTERNATIONAL SHIPMENT
                </Button>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 07. GLOBAL DESTINATION SUPPORT (#F6F5F1 - Left Text ~40%, Right Map ~60%) */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#F6F5F1] py-12 sm:py-14 lg:py-16 border-b border-slate-200/80">
        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Left Column: Headline, Explanation & Regional Coverage Badges (42% width) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInVariant}
            className="w-full lg:w-[42%] flex flex-col space-y-3.5 sm:space-y-4 text-left"
          >
            <span className="font-heading font-bold text-[11px] tracking-[0.18em] uppercase text-slate-500 block">
              GLOBAL DESTINATION SUPPORT
            </span>

            <h3 className="font-heading font-bold text-[20px] min-[360px]:text-[24px] sm:text-[30px] text-spl-navy-deep leading-tight">
              Worldwide destination coverage.
            </h3>

            <p className="font-body text-[14.5px] text-[#46515C] leading-relaxed">
              Illustrative destination coverage. International services depend on destination, shipment type, service requirements and available courier networks.
            </p>

            {/* Added Supporting Copy */}
            <p className="font-body text-[13.5px] text-[#5A6572] leading-relaxed">
              Global courier and air logistics coordination connecting Thoothukudi with international destinations through established carrier networks.
            </p>

            {/* Editorial Line Above Regional Badges */}
            <div className="pt-1.5 space-y-2.5">
              <span className="font-heading font-semibold text-[11.5px] tracking-wider uppercase text-slate-500 block">
                Global destination coverage across major international regions
              </span>

              <div className="flex flex-wrap items-center gap-2 text-[12px] font-heading">
                <span className="px-3 py-1 rounded-full bg-spl-yellow text-spl-navy-deep font-bold inline-flex items-center gap-1.5 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-spl-navy-deep" />
                  Origin: Thoothukudi
                </span>
                {['Europe', 'Middle East', 'Southeast Asia', 'North America'].map((region) => (
                  <span key={region} className="px-3 py-1 rounded-full bg-white border border-slate-200/90 text-spl-navy-deep font-medium">
                    {region}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean World Map Graphic (58% width) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={imageVariant}
            className="w-full lg:w-[58%]"
          >
            <div className="rounded-xl overflow-hidden border border-slate-200 bg-white p-3 sm:p-5 shadow-xs">
              <img
                src="/images/spl-international-destination-map.png"
                alt="Illustrative worldwide destination coverage from Thoothukudi"
                className="w-full h-auto max-h-[420px] object-contain mx-auto"
                loading="lazy"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 08. FINAL BOOKING CTA (Dark Navy #071A2B Section) */}
      {/* ========================================================================= */}
      <section className="w-full bg-spl-navy-deep text-white py-14 sm:py-18 lg:py-20 select-none">
        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col items-center text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeInVariant}
            className="max-w-[620px]"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-spl-yellow inline-block" />
              <span className="font-heading font-bold text-[11.5px] tracking-[0.2em] uppercase text-spl-yellow">
                START YOUR SHIPMENT
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-display font-extrabold text-[26px] min-[360px]:text-[32px] sm:text-[40px] text-white leading-tight mb-3">
              Ready to send your shipment?
            </h2>

            {/* Description */}
            <p className="font-body text-slate-300 text-[15px] sm:text-[15.5px] leading-relaxed mb-7">
              Share your pickup, destination and shipment details with SPL.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => onOpenBookingModal()}
                  icon={<ArrowUpRight className="w-4 h-4 stroke-[2.5]" />}
                  className="w-full sm:w-auto font-heading font-bold whitespace-nowrap shadow-md"
                >
                  BOOK A SHIPMENT
                </Button>
              </motion.div>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={handleWhatsAppInquiry}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white font-heading font-bold text-[13.5px] transition-all shadow-2xs whitespace-nowrap cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>CHAT ON WHATSAPP</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 09. FOOTER (Shared Infrastructure) */}
      {/* ========================================================================= */}
      <Footer onOpenBookingModal={() => onOpenBookingModal()} />

    </div>
  );
};
