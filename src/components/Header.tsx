import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Button } from './Button';
import { Menu, X, ArrowRight, PhoneCall } from 'lucide-react';
import { NAVIGATION_LINKS, COMPANY_CONFIG } from '../config/constants';

interface HeaderProps {
  onOpenBookingModal: () => void;
  onOpenContactModal?: () => void;
  activeSection?: string;
  onNavigate?: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBookingModal,
  onOpenContactModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Monitor scroll for sticky header shrinkage and elevation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Navigate with optional native View Transition API support
  const navigateTo = (path: string) => {
    setMobileMenuOpen(false);
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if ('startViewTransition' in document) {
      (document as any).startViewTransition(() => {
        navigate(path);
      });
    } else {
      navigate(path);
    }
  };

  return (
    <>
      <header
        className={`w-full bg-white/95 backdrop-blur-md transition-all duration-300 ${
          isScrolled
            ? 'h-[72px] border-b border-spl-border'
            : 'h-[80px] sm:h-[84px] border-b border-spl-border/80'
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto h-full flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* LEFT: SPL Logo */}
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/');
            }}
            className="flex items-center transition-opacity hover:opacity-95 focus-visible:ring-2 focus-visible:ring-spl-navy-deep rounded-[3px]"
            aria-label="SPL Worldwide Express Home"
          >
            <Logo className="w-[130px] min-[360px]:w-[155px] sm:w-[170px]" />
          </Link>

          {/* CENTER: Corporate Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8" aria-label="Main Navigation">
            {NAVIGATION_LINKS.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo(link.path);
                  }}
                  className={`relative py-2 text-[14px] xl:text-[14.5px] font-heading font-medium tracking-wide transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spl-yellow rounded ${
                    isActive
                      ? 'text-spl-navy-deep font-bold'
                      : 'text-slate-700 hover:text-spl-navy-deep'
                  }`}
                >
                  {link.label}

                  {/* Active / Hover indicator: Thin yellow underline */}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[2px] bg-spl-yellow rounded-full transition-all duration-200 ${
                      isActive
                        ? 'opacity-100 scale-x-100'
                        : 'opacity-0 scale-x-50 group-hover:opacity-100 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* RIGHT: Phone Contact & Book Shipment Buttons */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Phone/Contact Button */}
            <button
              type="button"
              onClick={() => {
                if (onOpenContactModal) {
                  onOpenContactModal();
                } else {
                  window.location.href = `tel:${COMPANY_CONFIG.primaryContactPhoneClean}`;
                }
              }}
              className="hidden md:flex items-center gap-2 text-[13px] font-heading font-semibold text-slate-800 hover:text-spl-navy-deep px-3 py-1.5 rounded-[4px] border border-spl-border hover:border-slate-400 bg-spl-offwhite transition-colors"
              title="Call SPL Thoothukudi Dispatch Hub"
            >
              <PhoneCall className="w-3.5 h-3.5 text-spl-navy-deep" />
              <span>{COMPANY_CONFIG.primaryContactPhone}</span>
            </button>

            {/* Main CTA: Book a Shipment */}
            <div className="hidden sm:block">
              <Button
                variant="primary"
                size={isScrolled ? 'sm' : 'md'}
                onClick={onOpenBookingModal}
                icon={<ArrowRight className="w-4 h-4 stroke-[2.4]" />}
                className="shadow-2xs font-heading font-bold"
              >
                Book a Shipment
              </Button>
            </div>

            {/* Mobile / Tablet Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded-[4px] text-spl-navy-deep hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spl-navy-deep"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 stroke-[2]" />
              ) : (
                <Menu className="w-6 h-6 stroke-[2]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER NAVIGATION */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-spl-navy-deep/60 backdrop-blur-xs transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer Panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-full max-w-[290px] min-[360px]:max-w-[340px] bg-white shadow-2xl flex flex-col justify-between p-5 min-[360px]:p-6 transition-transform duration-300 ease-out border-l border-spl-border ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            paddingTop: 'max(1.25rem, env(safe-area-inset-top, 1.25rem))',
            paddingBottom: 'max(1.25rem, env(safe-area-inset-bottom, 1.25rem))',
          }}
        >
          <div>
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-spl-border">
              <Logo className="w-[130px] min-[360px]:w-[140px]" />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="min-w-[40px] min-h-[40px] flex items-center justify-center p-1.5 rounded-[4px] text-slate-500 hover:text-spl-navy-deep"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col space-y-1">
              {NAVIGATION_LINKS.map((link) => {
                const isActive = location.pathname === link.path;

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo(link.path);
                    }}
                    className={`flex items-center justify-between px-3.5 py-3 rounded-[4px] text-[15px] font-heading font-medium transition-colors ${
                      isActive
                        ? 'bg-spl-offwhite text-spl-navy-deep font-bold border-l-3 border-spl-yellow'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-spl-navy-deep'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-spl-yellow" />}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Drawer Footer Actions */}
          <div className="pt-6 border-t border-spl-border flex flex-col gap-3">
            <Button
              variant="primary"
              size="lg"
              fullWidth
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              icon={<ArrowRight className="w-4 h-4 stroke-[2.4]" />}
            >
              Book a Shipment
            </Button>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenContactModal) {
                  onOpenContactModal();
                } else {
                  window.location.href = `tel:${COMPANY_CONFIG.primaryContactPhoneClean}`;
                }
              }}
              className="flex items-center justify-center gap-2 py-2.5 text-[14px] font-heading font-semibold text-slate-700 hover:text-spl-navy-deep rounded-[4px] border border-spl-border bg-spl-offwhite"
            >
              <PhoneCall className="w-4 h-4 text-spl-navy-deep" />
              <span>Call {COMPANY_CONFIG.primaryContactPhone}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
