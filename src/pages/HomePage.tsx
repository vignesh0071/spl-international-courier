import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { HeroServiceStrip } from '../components/HeroServiceStrip';
import { Footer } from '../components/Footer';
import { SEOHead } from '../components/SEOHead';

interface HomePageProps {
  onOpenBookingModal: () => void;
  onOpenContactModal?: () => void;
}

/**
 * SPL Worldwide Express - Approved Homepage
 * Comprises the approved Hero + Service Strip + Footer.
 */
export const HomePage: React.FC<HomePageProps> = ({ onOpenBookingModal, onOpenContactModal }) => {
  const navigate = useNavigate();

  const handleViewServices = () => {
    navigate('/services');
  };

  return (
    <div className="w-full flex flex-col">
      {/* Dynamic SEO Meta & Structured Data */}
      <SEOHead
        title="SPL International Courier | Best Courier Service in Thoothukudi (Tuticorin)"
        description="SPL International Courier is the trusted domestic and international courier service in Thoothukudi (Tuticorin). Express parcel delivery, document shipping, and doorstep pickup across India and worldwide."
        canonicalPath="/"
        keywords="courier service in thoothukudi, courier services in thoothukudi, courier company in thoothukudi, best courier service in thoothukudi, international courier service in thoothukudi, domestic courier service in thoothukudi, express courier service in thoothukudi, courier service tuticorin, spl international courier, spl courier thoothukudi, parcel delivery thoothukudi"
      />

      {/* 1. Approved Hero Section */}
      <Hero
        onOpenBookingModal={onOpenBookingModal}
        onViewServices={handleViewServices}
      />

      {/* 2. Approved Service Strip */}
      <HeroServiceStrip />

      {/* 3. Website Footer */}
      <Footer
        onOpenBookingModal={onOpenBookingModal}
        onOpenContactModal={onOpenContactModal}
      />
    </div>
  );
};
