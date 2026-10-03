import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  ArrowUpRight, 
  ExternalLink,
  Send,
  CheckCircle2,
  Navigation
} from 'lucide-react';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';
import { COMPANY_CONFIG } from '../config/constants';
import { SEOHead } from '../components/SEOHead';

interface ContactPageProps {
  onOpenBookingModal: (service?: string, destination?: string, requirement?: string) => void;
  onOpenContactModal?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onOpenBookingModal,
  onOpenContactModal,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const fadeInVariant: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const imageVariant: Variants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      "Hi SPL Worldwide Express, I would like to enquire about sending a shipment from Thoothukudi."
    );
    window.open(`https://wa.me/${COMPANY_CONFIG.primaryContactPhoneClean}?text=${text}`, '_blank');
  };

  return (
    <div className="w-full bg-white text-spl-navy-deep min-h-screen flex flex-col">
      {/* Dynamic SEO Meta & Structured Data */}
      <SEOHead
        title="Contact SPL Courier Thoothukudi | Courier Office & Dispatch Hub Tuticorin"
        description="Contact SPL International Courier in Thoothukudi (Tuticorin), Tamil Nadu. Call +91 98945 90600 or WhatsApp for express parcel pickup, international shipping rates, and dispatch support."
        canonicalPath="/contact"
        keywords="spl courier thoothukudi, courier service tuticorin, courier near me thoothukudi, courier near me tuticorin, courier office thoothukudi, courier pickup service thoothukudi, spl international courier contact"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Contact', item: '/contact' },
        ]}
        structuredData={{
          '@type': 'ContactPage',
          '@id': 'https://splexpress.in/contact#webpage',
          'url': 'https://splexpress.in/contact',
          'name': 'Contact SPL International Courier Thoothukudi',
          'description': 'Contact SPL International Courier in Thoothukudi (Tuticorin), Tamil Nadu. Direct phone +91 98945 90600, WhatsApp booking, and courier office address.',
          'mainEntity': {
            '@type': 'CourierService',
            'name': 'SPL International Courier',
            'alternateName': ['SPL Worldwide Express', 'SPL Courier Thoothukudi', 'SPL Courier Tuticorin'],
            'telephone': '+919894590600',
            'email': 'ind.splogistics@gmail.com',
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': 'Q4WW+RMQ',
              'addressLocality': 'Thoothukudi',
              'addressRegion': 'Tamil Nadu',
              'postalCode': '628001',
              'addressCountry': 'IN',
            },
            'geo': {
              '@type': 'GeoCoordinates',
              'latitude': 8.7642,
              'longitude': 78.1348,
            },
            'openingHoursSpecification': {
              '@type': 'OpeningHoursSpecification',
              'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              'opens': '10:00',
              'closes': '22:00',
            },
          },
        }}
      />
      
      {/* ========================================================================= */}
      {/* 01. CONTACT EDITORIAL HERO */}
      {/* Left text container, right-side large photograph breakout */}
      {/* ========================================================================= */}
      <section className="w-full bg-white relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 lg:py-20 lg:min-h-[620px] xl:min-h-[680px] flex items-center border-b border-slate-200/80">
        
        {/* RIGHT-SIDE DESKTOP MEDIA BREAKOUT (EXPANDS TO BROWSER RIGHT EDGE) */}
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[56%] xl:w-[60%] 2xl:w-[63%] overflow-hidden pointer-events-none select-none z-0">
          <div className="relative w-full h-full">
            <div
              className="w-full h-full"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 12%, rgba(0,0,0,0.85) 30%, black 50%, black 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 12%, rgba(0,0,0,0.85) 30%, black 50%, black 100%)',
              }}
            >
              <img
                src="/images/spl-contact-hero.jpg"
                alt="SPL Worldwide Express customer service counter and shipment handover in Thoothukudi"
                className="w-full h-full object-cover object-[80%_center] xl:object-[82%_center] filter brightness-[1.01] contrast-[1.02]"
                loading="eager"
              />
            </div>
            {/* Soft left white fade merging naturally with text */}
            <div className="absolute inset-y-0 left-0 w-36 xl:w-52 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent z-10" />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent z-10" />
          </div>
        </div>

        {/* CONTAINER CONTENT */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between">
          
          {/* Left: Contact Text & CTAs (w-full lg:w-[48%] xl:w-[45%]) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariant}
            className="w-full lg:w-[48%] xl:w-[45%] flex flex-col space-y-4 sm:space-y-5 text-left"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-[4px] bg-slate-50 border border-slate-200 flex items-center justify-center text-spl-navy-deep">
                <MapPin className="w-4 h-4 text-spl-navy-deep" />
              </span>
              <span className="font-heading font-bold text-[11.5px] tracking-[0.18em] uppercase text-slate-500">
                GET IN TOUCH • THOOTHUKUDI &amp; TUTICORIN COURIER HUB
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-extrabold text-[28px] min-[360px]:text-[34px] sm:text-[44px] lg:text-[48px] xl:text-[52px] text-spl-navy-deep leading-[1.12]">
              <span>Contact </span>
              <span className="font-serif italic font-normal text-slate-700">SPL International Courier.</span>
            </h1>

            {/* Introductory Business Copy */}
            <p className="font-body text-[#46515C] text-[15px] sm:text-[16px] leading-relaxed max-w-[560px]">
              Based in Thoothukudi (Tuticorin), Tamil Nadu, SPL International Courier coordinates reliable domestic parcel deliveries across India and international express shipping worldwide. Connect with our local dispatch team for doorstep courier pickup requests, overseas shipping rates, or consignment tracking.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <Button
                variant="primary"
                size="md"
                onClick={() => onOpenBookingModal()}
                icon={<ArrowUpRight className="w-4 h-4 stroke-[2.5]" />}
                className="font-heading font-bold shadow-xs justify-center"
              >
                BOOK A SHIPMENT
              </Button>

              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[4px] bg-[#25D366]/10 border border-[#25D366]/30 text-[#128C7E] hover:bg-[#25D366]/20 font-heading font-bold text-[13px] tracking-wide transition-all shadow-2xs cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>CHAT ON WHATSAPP</span>
              </button>

              <a
                href="tel:+919894590600"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-[4px] border border-slate-200 bg-white hover:bg-slate-50 text-spl-navy-deep font-heading font-semibold text-[13px] transition-colors shadow-2xs"
              >
                <PhoneCall className="w-4 h-4 text-spl-navy-deep" />
                <span>CALL DISPATCH</span>
              </a>
            </div>

            {/* Quick Metadata Row */}
            <div className="pt-2 border-t border-slate-200/90 grid grid-cols-1 sm:grid-cols-3 gap-3 text-[12.5px] font-body text-slate-600">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-spl-yellow shrink-0" />
                <a
                  href="tel:+919894590600"
                  className="font-semibold text-spl-navy-deep hover:text-spl-yellow transition-colors"
                >
                  +91 98945 90600
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-spl-yellow shrink-0" />
                <a
                  href="mailto:ind.splogistics@gmail.com"
                  className="truncate hover:text-spl-yellow transition-colors"
                >
                  ind.splogistics@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-spl-yellow shrink-0" />
                <span>Daily: 10 AM – 10 PM</span>
              </div>
            </div>

          </motion.div>

          {/* Mobile Visual (<1024px) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageVariant}
            className="lg:hidden w-full select-none relative mt-8 sm:mt-10"
          >
            <div className="relative w-full h-[240px] min-[360px]:h-[280px] sm:h-[340px] rounded-xl overflow-hidden shadow-sm">
              <img
                src="/images/spl-contact-hero.jpg"
                alt="SPL Worldwide Express customer service counter and shipment handover in Thoothukudi"
                className="w-full h-full object-cover object-[85%_center]"
                loading="eager"
              />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none z-10" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02. QUICK CONTACT CHANNELS (4 EDITORIAL CARDS) */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#F8F7F2] py-14 sm:py-16 lg:py-20 border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          <div className="max-w-[700px] mb-10 text-left">
            <span className="font-heading font-bold text-[11px] tracking-[0.18em] uppercase text-slate-500 block mb-2">
              DIRECT REACHABILITY
            </span>
            <h2 className="font-heading font-bold text-[24px] sm:text-[32px] text-spl-navy-deep leading-tight mb-2">
              Multiple ways to reach our dispatch team.
            </h2>
            <p className="font-body text-[#46515C] text-[15px] leading-relaxed">
              Whether you need an immediate parcel pickup in Thoothukudi, rate information for domestic delivery across India, or customs advice for international express, reach out through your preferred channel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            {/* Card 1: Direct Phone */}
            <div className="p-6 rounded-lg bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between hover:shadow-xs transition-shadow">
              <div>
                <div className="w-10 h-10 rounded-[4px] bg-slate-50 border border-slate-200 flex items-center justify-center text-spl-navy-deep mb-4">
                  <PhoneCall className="w-5 h-5 text-spl-navy-deep" />
                </div>
                <h3 className="font-heading font-bold text-[14px] uppercase tracking-wider text-spl-navy-deep mb-1">
                  DIRECT PHONE
                </h3>
                <p className="font-body text-[13.5px] text-[#46515C] leading-relaxed mb-4">
                  Speak directly with our local Thoothukudi counter team for parcel queries and urgent pickups.
                </p>
              </div>
              <a
                href="tel:+919894590600"
                className="font-heading font-bold text-[15px] text-spl-navy-deep hover:text-spl-yellow transition-colors inline-flex items-center gap-1.5"
              >
                <span>+91 98945 90600</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>
            </div>

            {/* Card 2: WhatsApp Chat */}
            <div className="p-6 rounded-lg bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between hover:shadow-xs transition-shadow">
              <div>
                <div className="w-10 h-10 rounded-[4px] bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#128C7E] mb-4">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                </div>
                <h3 className="font-heading font-bold text-[14px] uppercase tracking-wider text-spl-navy-deep mb-1">
                  WHATSAPP CHAT
                </h3>
                <p className="font-body text-[13.5px] text-[#46515C] leading-relaxed mb-4">
                  Send parcel weight, photos and destination pin for fast rates and doorstep courier pickup in Thoothukudi &amp; Tuticorin.
                </p>
              </div>
              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="font-heading font-bold text-[14px] text-[#128C7E] hover:text-[#075E54] transition-colors inline-flex items-center gap-1.5 text-left cursor-pointer"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>

            {/* Card 3: Email Dispatch */}
            <div className="p-6 rounded-lg bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between hover:shadow-xs transition-shadow">
              <div>
                <div className="w-10 h-10 rounded-[4px] bg-slate-50 border border-slate-200 flex items-center justify-center text-spl-navy-deep mb-4">
                  <Mail className="w-5 h-5 text-spl-navy-deep" />
                </div>
                <h3 className="font-heading font-bold text-[14px] uppercase tracking-wider text-spl-navy-deep mb-1">
                  EMAIL DISPATCH
                </h3>
                <p className="font-body text-[13.5px] text-[#46515C] leading-relaxed mb-4">
                  Send commercial invoices, consignee addresses, KYC documents or business inquiries.
                </p>
              </div>
              <a
                href={`mailto:${COMPANY_CONFIG.primaryEmail}`}
                className="font-heading font-semibold text-[13px] text-spl-navy-deep hover:text-spl-yellow transition-colors break-all inline-flex items-center gap-1"
              >
                <span>{COMPANY_CONFIG.primaryEmail}</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] shrink-0" />
              </a>
            </div>

            {/* Card 4: Operating Hours */}
            <div className="p-6 rounded-lg bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between hover:shadow-xs transition-shadow">
              <div>
                <div className="w-10 h-10 rounded-[4px] bg-slate-50 border border-slate-200 flex items-center justify-center text-spl-navy-deep mb-4">
                  <Clock className="w-5 h-5 text-spl-navy-deep" />
                </div>
                <h3 className="font-heading font-bold text-[14px] uppercase tracking-wider text-spl-navy-deep mb-1">
                  DISPATCH HOURS
                </h3>
                <p className="font-body text-[13.5px] text-[#46515C] leading-relaxed mb-4">
                  Open every day for walk-ins, counter booking, parcel drop-offs and express courier service in Thoothukudi.
                </p>
              </div>
              <div className="flex items-center gap-2 text-[13px] font-heading font-bold text-spl-navy-deep">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span>{COMPANY_CONFIG.dispatchHours}</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03. THOOTHUKUDI DISPATCH LOCATION & MAP */}
      {/* ========================================================================= */}
      <section className="w-full bg-white py-14 sm:py-16 lg:py-20 border-b border-slate-200/80">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          
          {/* Left Column: Office Location Details (46% width) */}
          <div className="w-full lg:w-[46%] flex flex-col space-y-4 text-left">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-spl-yellow inline-block" />
              <span className="font-heading font-bold text-[11px] tracking-[0.18em] uppercase text-slate-500">
                PHYSICAL LOCATION
              </span>
            </div>

            <h2 className="font-display font-extrabold text-[24px] min-[360px]:text-[28px] sm:text-[34px] text-spl-navy-deep leading-tight">
              <span>Visit our counter in </span>
              <span className="font-serif italic font-normal text-slate-700">Thoothukudi (Tuticorin).</span>
            </h2>

            <p className="font-body text-[#46515C] text-[15px] leading-relaxed">
              Customers and businesses in Thoothukudi and Tuticorin are welcome to visit our courier counter directly for urgent parcel handovers, packaging guidance, rate comparisons, or booking doorstep courier pickup.
            </p>

            <div className="p-5 rounded-lg bg-[#F8F7F2] border border-slate-200/90 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-spl-yellow shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-heading font-bold text-[14px] uppercase text-spl-navy-deep">
                    SPL Worldwide Express
                  </h3>
                  <p className="font-body text-[14px] text-slate-700 mt-0.5">
                    {COMPANY_CONFIG.address}
                  </p>
                  <p className="text-[12.5px] font-heading text-slate-500 mt-1">
                    Thoothukudi, Tamil Nadu 628001, India
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[13px] text-slate-600 font-body">
                <span>Working Days: Monday – Sunday</span>
                <span className="font-semibold text-spl-navy-deep">10:00 AM – 10:00 PM</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={COMPANY_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[4px] bg-spl-navy-deep text-white hover:bg-spl-navy-secondary font-heading font-bold text-[13px] uppercase tracking-wider transition-colors shadow-2xs"
              >
                <span>OPEN IN GOOGLE MAPS</span>
                <ExternalLink className="w-3.5 h-3.5 text-spl-yellow stroke-[2.5]" />
              </a>

              <Button
                variant="secondary"
                size="md"
                onClick={() => onOpenBookingModal()}
                icon={<ArrowUpRight className="w-4 h-4 stroke-[2.5]" />}
                className="font-heading font-semibold justify-center"
              >
                REQUEST PICKUP INSTEAD
              </Button>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive/Card Graphic (54% width) */}
          <div className="w-full lg:w-[54%]">
            <div className="rounded-xl overflow-hidden border border-slate-200/90 bg-[#F8F7F2] shadow-xs relative">
              {/* Map Container / Embed */}
              <div className="relative w-full h-[340px] sm:h-[400px] bg-slate-100 flex items-center justify-center overflow-hidden">
                <iframe
                  title="SPL Worldwide Express Thoothukudi Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.4682057999824!2d78.140889!3d8.810556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03ee66b44776e7%3A0xb2db4150df882d9a!2sQ4WW%2BRMQ%2C%20Thoothukudi%2C%20Tamil%20Nadu%20628001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter saturate-[0.95]"
                />

                {/* Floating location card badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-[340px] bg-white/95 backdrop-blur-md p-3.5 rounded-lg border border-slate-200/90 shadow-md flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="font-heading font-bold text-[12.5px] uppercase tracking-wide text-spl-navy-deep truncate">
                      Thoothukudi Dispatch Hub
                    </p>
                    <p className="font-body text-[11.5px] text-slate-500 truncate">
                      Tamil Nadu 628001, India
                    </p>
                  </div>
                  <a
                    href={COMPANY_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 px-3 py-1.5 rounded bg-spl-navy-deep text-white font-heading font-bold text-[11px] uppercase tracking-wider hover:bg-spl-navy-secondary transition-colors inline-flex items-center gap-1"
                  >
                    <span>Directions</span>
                    <ExternalLink className="w-3 h-3 text-spl-yellow" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04. SHIPMENT ENQUIRY GUIDANCE (3-STEP SUBMISSION FLOW) */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#F8F7F2] pt-14 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
            <div className="max-w-[620px] text-left">
              <span className="font-heading font-bold text-[11px] tracking-[0.18em] uppercase text-slate-500 block mb-2">
                COORDINATION WORKFLOW
              </span>
              <h2 className="font-heading font-bold text-[24px] sm:text-[32px] text-spl-navy-deep leading-tight mb-2">
                How we coordinate your shipment enquiry.
              </h2>
              <p className="font-body text-[#46515C] text-[15px] leading-relaxed">
                Whether sending across Tamil Nadu, pan-India, or overseas, here is how our dispatch team assists you from first contact to delivery.
              </p>
            </div>

            <div className="shrink-0">
              <Button
                variant="primary"
                size="md"
                onClick={() => onOpenBookingModal()}
                icon={<ArrowUpRight className="w-4 h-4 stroke-[2.5]" />}
                className="font-heading font-bold shadow-xs"
              >
                SUBMIT AN ENQUIRY NOW
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-lg bg-white border border-slate-200/80 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading font-extrabold text-[18px] text-spl-yellow">01</span>
                  <Send className="w-5 h-5 text-spl-navy-deep" />
                </div>
                <h3 className="font-heading font-bold text-[14px] uppercase tracking-wider text-spl-navy-deep mb-2">
                  SHARE SHIPMENT DETAILS
                </h3>
                <p className="font-body text-[13.5px] text-[#46515C] leading-relaxed">
                  Provide your pickup location in Thoothukudi, destination pincode or country, estimated package weight, dimensions and consignment category.
                </p>
              </div>
              <p className="text-[12px] font-heading font-semibold text-slate-500 mt-4 pt-3 border-t border-slate-100">
                Via Booking Modal, Phone, or WhatsApp
              </p>
            </div>

            <div className="p-6 rounded-lg bg-white border border-slate-200/80 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading font-extrabold text-[18px] text-spl-yellow">02</span>
                  <Navigation className="w-5 h-5 text-spl-navy-deep" />
                </div>
                <h3 className="font-heading font-bold text-[14px] uppercase tracking-wider text-spl-navy-deep mb-2">
                  NETWORK &amp; RATE GUIDANCE
                </h3>
                <p className="font-body text-[13.5px] text-[#46515C] leading-relaxed">
                  Our team assesses available courier networks, delivery transit estimates, and applicable customs documentation for international destinations.
                </p>
              </div>
              <p className="text-[12px] font-heading font-semibold text-slate-500 mt-4 pt-3 border-t border-slate-100">
                Clear transit timelines &amp; options
              </p>
            </div>

            <div className="p-6 rounded-lg bg-white border border-slate-200/80 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading font-extrabold text-[18px] text-spl-yellow">03</span>
                  <CheckCircle2 className="w-5 h-5 text-spl-navy-deep" />
                </div>
                <h3 className="font-heading font-bold text-[14px] uppercase tracking-wider text-spl-navy-deep mb-2">
                  PICKUP &amp; DISPATCH
                </h3>
                <p className="font-body text-[13.5px] text-[#46515C] leading-relaxed">
                  We schedule doorstep pickup or receive your parcel at our counter, verify packaging and labeling, and hand over to the coordinated network.
                </p>
              </div>
              <p className="text-[12px] font-heading font-semibold text-slate-500 mt-4 pt-3 border-t border-slate-100">
                Tracking guidance provided
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05. ACTUAL WEBSITE FOOTER (Corporate Navy #0B2236) */}
      {/* ========================================================================= */}
      <Footer
        onOpenBookingModal={() => onOpenBookingModal()}
        onOpenContactModal={onOpenContactModal}
      />

    </div>
  );
};
