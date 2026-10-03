import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageLoader } from './components/PageLoader';
import { Header } from './components/Header';
import { AnnouncementTicker } from './components/AnnouncementTicker';
import { ScrollToTop } from './components/ScrollToTop';
import { SmoothScroll } from './components/SmoothScroll';
import { PageTransition } from './components/PageTransition';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { DomesticInternationalPage } from './pages/DomesticInternationalPage';
import { ContactPage } from './pages/ContactPage';
import { BookingModal } from './components/BookingModal';
import { ContactModal } from './components/ContactModal';
import { useImageProtection } from './hooks/useImageProtection';

export function App() {
  // Reusable client-side image protection (prevents native drag & right-click Save Image on <img> elements)
  useImageProtection();

  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>();
  const [preselectedDestination, setPreselectedDestination] = useState<string | undefined>();
  const [preselectedRequirement, setPreselectedRequirement] = useState<string | undefined>();

  const handleOpenBookingModal = (service?: string, destination?: string, requirement?: string) => {
    setPreselectedService(service);
    setPreselectedDestination(destination);
    setPreselectedRequirement(requirement);
    setIsBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false);
    setPreselectedService(undefined);
    setPreselectedDestination(undefined);
    setPreselectedRequirement(undefined);
  };

  return (
    <BrowserRouter>
      {/* Short professional page loader */}
      <PageLoader />

      {/* Global Lenis Smooth Scroll Foundation synchronized with GSAP ScrollTrigger */}
      <SmoothScroll isModalOpen={isBookingModalOpen || isContactModalOpen}>
        {/* Route-change scroll restoration: starts new page at scrollY = 0 */}
        <ScrollToTop />

        <div className="min-h-screen bg-white flex flex-col font-body selection:bg-spl-yellow selection:text-spl-navy-deep antialiased">
        {/* Sticky Unified Global Header + Announcement Ticker Block */}
        <div className="sticky top-0 z-40 w-full bg-white shadow-nav">
          <Header
            onOpenBookingModal={() => handleOpenBookingModal()}
            onOpenContactModal={() => setIsContactModalOpen(true)}
          />
          <AnnouncementTicker />
        </div>

        {/* Polished Slide + Fade + Elevation Page Transition Container */}
        <main className="flex-1 flex flex-col">
          <PageTransition>
            <Routes>
              {/* Home: Hero + Service Strip + Courier Row only */}
              <Route
                path="/"
                element={
                  <HomePage
                    onOpenBookingModal={() => handleOpenBookingModal()}
                    onOpenContactModal={() => setIsContactModalOpen(true)}
                  />
                }
              />

              {/* Phase 02: Dedicated About Us Page */}
              <Route
                path="/about"
                element={
                  <AboutPage
                    onOpenBookingModal={() => handleOpenBookingModal()}
                    onOpenContactModal={() => setIsContactModalOpen(true)}
                  />
                }
              />

              {/* Phase 03: Dedicated Services Page */}
              <Route
                path="/services"
                element={
                  <ServicesPage
                    onOpenBookingModal={(service?: string) => handleOpenBookingModal(service)}
                    onOpenContactModal={() => setIsContactModalOpen(true)}
                  />
                }
              />

              {/* Phase 04: Dedicated Domestic & International Page */}
              <Route
                path="/domestic-international"
                element={
                  <DomesticInternationalPage
                    onOpenBookingModal={(service?: string, destination?: string, requirement?: string) =>
                      handleOpenBookingModal(service, destination, requirement)
                    }
                    onOpenContactModal={() => setIsContactModalOpen(true)}
                  />
                }
              />

              {/* Phase 05: Dedicated Contact Page */}
              <Route
                path="/contact"
                element={
                  <ContactPage
                    onOpenBookingModal={(service?: string, destination?: string, requirement?: string) =>
                      handleOpenBookingModal(service, destination, requirement)
                    }
                    onOpenContactModal={() => setIsContactModalOpen(true)}
                  />
                }
              />

              {/* Fallback to Home */}
              <Route
                path="*"
                element={
                  <HomePage
                    onOpenBookingModal={() => handleOpenBookingModal()}
                  />
                }
              />
            </Routes>
          </PageTransition>
        </main>

        {/* Booking / Enquiry Modal with WhatsApp Integration */}
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={handleCloseBookingModal}
          preselectedService={preselectedService}
          preselectedDestination={preselectedDestination}
          preselectedRequirement={preselectedRequirement}
        />

        {/* Contact & Dispatch Information Modal */}
        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
          onOpenBookingModal={() => setIsBookingModalOpen(true)}
        />
      </div>
      </SmoothScroll>
    </BrowserRouter>
  );
}

export default App;
