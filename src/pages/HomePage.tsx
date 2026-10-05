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
        title="SPL Worldwide Express | Courier Service in Thoothukudi | Domestic & International"
        description="SPL Worldwide Express provides domestic and international courier services from Thoothukudi, Tamil Nadu, for documents, parcels, personal shipments and business consignments, with suitable courier and logistics options for destinations worldwide."
        canonicalPath="/"
        keywords="courier service in thoothukudi, courier service in tuticorin, courier service thoothukudi, domestic courier thoothukudi, international courier thoothukudi, domestic parcel delivery, international parcel delivery, worldwide courier service, document courier thoothukudi, parcel booking thoothukudi, courier pickup thoothukudi, business courier thoothukudi, spl worldwide express"
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
