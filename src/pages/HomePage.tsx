import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { HeroServiceStrip } from '../components/HeroServiceStrip';
import { Footer } from '../components/Footer';

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
