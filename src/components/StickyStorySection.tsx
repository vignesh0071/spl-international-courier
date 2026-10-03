import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface StoryStep {
  num: string;
  title: string;
  description: string;
}

const STORY_STEPS: StoryStep[] = [
  {
    num: "01",
    title: "START WITH THE SHIPMENT",
    description: "Every shipment begins with understanding what needs to move, where it needs to go and what service is required.",
  },
  {
    num: "02",
    title: "REVIEW THE REQUIREMENT",
    description: "Documents, parcels and business consignments are reviewed before the suitable courier option is coordinated.",
  },
  {
    num: "03",
    title: "COORDINATE THE NETWORK",
    description: "Domestic and international shipments are coordinated through established courier and logistics networks.",
  },
  {
    num: "04",
    title: "SUPPORT THE DISPATCH",
    description: "We provide practical support through the shipment's dispatch and delivery process.",
  },
];

export const StickyStorySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const bottomFadeRef = useRef<HTMLDivElement>(null);

  // Dynamic header/ticker offset measurement (Section 1)
  useEffect(() => {
    const updateHeaderOffset = () => {
      const navEl = document.querySelector('.shadow-nav') || document.querySelector('header');
      if (navEl) {
        const height = Math.round(navEl.getBoundingClientRect().height);
        if (height > 0) {
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

  // GSAP 3 + ScrollTrigger Reversible Story Progression (Sections 6–10, 15–18)
  useEffect(() => {
    if (!containerRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      // Create master scrubbed timeline linked to section scroll distance
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8, // Smooth scroll-linked interpolation (Section 16)
          invalidateOnRefresh: true,
        },
      });

      // Initial visual states for the 4 story steps (Section 6)
      // Step 1: Active
      gsap.set('.story-step-1', {
        opacity: 1,
        x: 0,
        y: 0,
        filter: 'blur(0px)',
      });
      gsap.set('.story-indicator-1', {
        height: 38,
        opacity: 1,
      });
      gsap.set('.story-counter-1', {
        opacity: 1,
      });

      // Steps 2, 3, 4: Inactive, primed for forward entrance
      const inactiveInitial = prefersReducedMotion
        ? { opacity: 0, x: 0, y: 0, filter: 'none' }
        : { opacity: 0, x: 28, y: 10, filter: 'blur(3px)' };

      gsap.set(['.story-step-2', '.story-step-3', '.story-step-4'], inactiveInitial);
      gsap.set(['.story-indicator-2', '.story-indicator-3', '.story-indicator-4'], {
        height: 0,
        opacity: 0,
      });
      gsap.set(['.story-counter-2', '.story-counter-3', '.story-counter-4'], {
        opacity: 0,
      });

      if (overlayRef.current) {
        gsap.set(overlayRef.current, { opacity: 0.42 }); // Step 01 shade: brighter
      }

      // -----------------------------------------------------------------------
      // Master Timeline Choreography (Total duration: 10 units)
      // 0.0 – 1.8: Step 01 Active viewing window
      // 1.8 – 2.8: Transition 01 -> 02 (Crossfade, reversible)
      // 2.8 – 4.6: Step 02 Active viewing window
      // 4.6 – 5.6: Transition 02 -> 03 (Crossfade, reversible)
      // 5.6 – 7.4: Step 03 Active viewing window
      // 7.4 – 8.4: Transition 03 -> 04 (Crossfade, reversible)
      // 8.4 – 9.4: Step 04 Active viewing window
      // 9.4 – 10.0: Gentle exit release (Section 21)
      // -----------------------------------------------------------------------

      // Background image subtle movement across whole journey (Section 2)
      if (!prefersReducedMotion && imageRef.current) {
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
        tl.fromTo(
          imageRef.current,
          { scale: 1.0, x: 0, y: 0 },
          {
            scale: isMobile ? 1.01 : 1.02,
            x: isMobile ? 0 : -8,
            y: isMobile ? -2 : -3,
            duration: 10,
            ease: "none",
          },
          0
        );
      }

      // Transition 01 -> 02 (Section 7: 01 leaves, 02 arrives simultaneously)
      tl.to(
        '.story-step-1',
        prefersReducedMotion
          ? { opacity: 0, duration: 1 }
          : { opacity: 0, x: -18, y: -4, filter: 'blur(2px)', duration: 1, ease: "power2.inOut" },
        1.8
      );
      tl.to('.story-indicator-1', { height: 0, opacity: 0, duration: 0.7 }, 1.8);
      tl.to('.story-counter-1', { opacity: 0, duration: 0.5 }, 1.8);

      tl.to(
        '.story-step-2',
        prefersReducedMotion
          ? { opacity: 1, duration: 1 }
          : { opacity: 1, x: 0, y: 0, filter: 'blur(0px)', duration: 1, ease: "power2.out" },
        2.0
      );
      tl.to('.story-indicator-2', { height: 38, opacity: 1, duration: 0.7 }, 2.0);
      tl.to('.story-counter-2', { opacity: 1, duration: 0.5 }, 2.0);

      // Shade 02: neutral
      if (overlayRef.current) {
        tl.to(overlayRef.current, { opacity: 0.54, duration: 1, ease: "power1.inOut" }, 1.8);
      }

      // Transition 02 -> 03 (02 leaves, 03 arrives simultaneously)
      tl.to(
        '.story-step-2',
        prefersReducedMotion
          ? { opacity: 0, duration: 1 }
          : { opacity: 0, x: -18, y: -4, filter: 'blur(2px)', duration: 1, ease: "power2.inOut" },
        4.6
      );
      tl.to('.story-indicator-2', { height: 0, opacity: 0, duration: 0.7 }, 4.6);
      tl.to('.story-counter-2', { opacity: 0, duration: 0.5 }, 4.6);

      tl.to(
        '.story-step-3',
        prefersReducedMotion
          ? { opacity: 1, duration: 1 }
          : { opacity: 1, x: 0, y: 0, filter: 'blur(0px)', duration: 1, ease: "power2.out" },
        4.8
      );
      tl.to('.story-indicator-3', { height: 38, opacity: 1, duration: 0.7 }, 4.8);
      tl.to('.story-counter-3', { opacity: 1, duration: 0.5 }, 4.8);

      // Shade 03: deeper
      if (overlayRef.current) {
        tl.to(overlayRef.current, { opacity: 0.50, duration: 1, ease: "power1.inOut" }, 4.6);
      }

      // Transition 03 -> 04 (03 leaves, 04 arrives simultaneously)
      tl.to(
        '.story-step-3',
        prefersReducedMotion
          ? { opacity: 0, duration: 1 }
          : { opacity: 0, x: -18, y: -4, filter: 'blur(2px)', duration: 1, ease: "power2.inOut" },
        7.4
      );
      tl.to('.story-indicator-3', { height: 0, opacity: 0, duration: 0.7 }, 7.4);
      tl.to('.story-counter-3', { opacity: 0, duration: 0.5 }, 7.4);

      tl.to(
        '.story-step-4',
        prefersReducedMotion
          ? { opacity: 1, duration: 1 }
          : { opacity: 1, x: 0, y: 0, filter: 'blur(0px)', duration: 1, ease: "power2.out" },
        7.6
      );
      tl.to('.story-indicator-4', { height: 38, opacity: 1, duration: 0.7 }, 7.6);
      tl.to('.story-counter-4', { opacity: 1, duration: 0.5 }, 7.6);

      // Shade 04: brighter again
      if (overlayRef.current) {
        tl.to(overlayRef.current, { opacity: 0.44, duration: 1, ease: "power1.inOut" }, 7.4);
      }

      // Section Exit (Section 21: image opacity 1 -> 0.88, bottom fade strengthens)
      if (imageRef.current) {
        tl.to(imageRef.current, { opacity: 0.88, duration: 0.6, ease: "power1.out" }, 9.4);
      }
      if (bottomFadeRef.current) {
        tl.to(bottomFadeRef.current, { opacity: 1, duration: 0.6 }, 9.4);
      }
    }, containerRef);

    return () => {
      ctx.revert(); // Complete GSAP cleanup (Section 9)
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full relative select-none bg-[#071A2B]"
      style={{
        // Desktop parent: ~240vh (Section 1). Mobile parent: ~300vh (Section 19).
        minHeight: 'clamp(240vh, 280vh, 300vh)',
      }}
    >
      {/* ========================================================================= */}
      {/* STICKY VIEWPORT CONTAINER (Common Anchor for Desktop & Dedicated Mobile) */}
      {/* ========================================================================= */}
      <div
        ref={viewportRef}
        className="sticky w-full overflow-hidden z-20 pointer-events-none"
        style={{
          top: 'var(--sticky-top-offset, 88px)',
          height: 'calc(100svh - var(--sticky-top-offset, 88px))',
          boxShadow: '0 24px 70px rgba(7,26,43,0.12)',
        }}
      >
        {/* ----------------------------------------------------------------------- */}
        {/* LAYER 01: Continuous Background Photograph (Section 2, 22) */}
        {/* ----------------------------------------------------------------------- */}
        <img
          ref={imageRef}
          src="/images/spl-di-shipment-journey.jpg"
          alt="SPL shipment preparation and dispatch coordination"
          className="absolute inset-0 w-full h-full object-cover will-change-transform object-[80%_44%] lg:object-[60%_35%]"
        />

        {/* ----------------------------------------------------------------------- */}
        {/* LAYER 02: Readability Gradients (Desktop Section 3, Mobile Section 19) */}
        {/* ----------------------------------------------------------------------- */}
        {/* Desktop Left-to-Right Navy Readability Gradient */}
        <div
          className="hidden lg:block absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(7,26,43,0.92) 0%, rgba(7,26,43,0.76) 24%, rgba(7,26,43,0.44) 48%, rgba(7,26,43,0.14) 70%, transparent 100%)',
          }}
        />

        {/* Dedicated Mobile Vertical Readability Gradient */}
        <div
          className="block lg:hidden absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(7,26,43,0.88) 0%, rgba(7,26,43,0.40) 22%, rgba(7,26,43,0.10) 45%, rgba(7,26,43,0.78) 65%, rgba(7,26,43,0.96) 88%, #071A2B 100%)',
          }}
        />

        {/* ----------------------------------------------------------------------- */}
        {/* LAYER 03: Top Atmospheric Fade (blends from previous section #F6F5F1) */}
        {/* ----------------------------------------------------------------------- */}
        <div
          className="absolute inset-x-0 top-0 h-24 sm:h-32 pointer-events-none z-10"
          style={{
            background: 'linear-gradient(to bottom, #F6F5F1 0%, rgba(246,245,241,0.65) 45%, transparent 100%)',
          }}
        />

        {/* ----------------------------------------------------------------------- */}
        {/* LAYER 04: Bottom Section Transition Fade (blends toward next section #FFFFFF) */}
        {/* ----------------------------------------------------------------------- */}
        <div
          ref={bottomFadeRef}
          className="absolute inset-x-0 bottom-0 h-24 sm:h-32 pointer-events-none z-10"
          style={{
            background: 'linear-gradient(to top, #FFFFFF 0%, rgba(255,255,255,0.7) 45%, transparent 100%)',
          }}
        />

        {/* ----------------------------------------------------------------------- */}
        {/* LAYER 05: Dynamic Image Shade Overlay (Driven smoothly by GSAP Timeline) */}
        {/* ----------------------------------------------------------------------- */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-[#071A2B] pointer-events-none z-[5]"
          style={{
            opacity: 0.42,
          }}
        />

        {/* ----------------------------------------------------------------------- */}
        {/* LAYER 06 & 07: DESKTOP EDITORIAL STORY CONTENT (>= 1024px) */}
        {/* Only ONE story is visually active at a time (Section 6) */}
        {/* ----------------------------------------------------------------------- */}
        <div className="hidden lg:flex absolute inset-0 z-20 pointer-events-auto items-center">
          <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-12">
            {/* Left Column: Fixed / Anchored Editorial Text Block */}
            <div className="w-full max-w-[540px] text-left">
              
              {/* Upper Section Intro (~30-35% from top per Section 11) */}
              <div className="mb-6">
                {/* Eyebrow & Smooth Dynamic Step Counter */}
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="w-2 h-2 rounded-full bg-spl-yellow inline-block" />
                  <span className="font-heading font-bold text-[11.5px] tracking-[0.2em] uppercase text-spl-yellow">
                    THE SHIPMENT JOURNEY
                  </span>
                  <span className="text-white/20">|</span>
                  <div className="relative inline-block w-16 h-4 overflow-hidden">
                    <span className="story-counter-1 absolute inset-0 font-heading font-bold text-[11px] tracking-[0.16em] uppercase text-slate-300">
                      01 / 04
                    </span>
                    <span className="story-counter-2 absolute inset-0 font-heading font-bold text-[11px] tracking-[0.16em] uppercase text-slate-300">
                      02 / 04
                    </span>
                    <span className="story-counter-3 absolute inset-0 font-heading font-bold text-[11px] tracking-[0.16em] uppercase text-slate-300">
                      03 / 04
                    </span>
                    <span className="story-counter-4 absolute inset-0 font-heading font-bold text-[11px] tracking-[0.16em] uppercase text-slate-300">
                      04 / 04
                    </span>
                  </div>
                </div>

                {/* Headline (Section 5) */}
                <h2 className="font-display font-extrabold text-[30px] xl:text-[36px] text-white leading-[1.18] mb-2.5">
                  <span className="font-serif italic font-normal text-slate-200">From pickup </span>
                  <span className="block">to delivery,</span>
                  <span className="block text-white">we coordinate the process.</span>
                </h2>

                {/* Supporting Copy */}
                <p className="font-body text-slate-300 text-[13.5px] xl:text-[14px] leading-relaxed max-w-[480px]">
                  We make the shipment process simple by coordinating suitable courier and logistics networks based on your requirements.
                </p>
              </div>

              {/* Story Stage: Fixed Absolute Stage Box where ONLY ONE story is visible at a time (Section 6, 11) */}
              <div className="relative w-full min-h-[160px] sm:min-h-[175px]">
                {STORY_STEPS.map((step, idx) => {
                  const stepIndex = idx + 1;
                  return (
                    <div
                      key={step.num}
                      className={`story-step-${stepIndex} absolute inset-0 flex flex-col justify-start pointer-events-auto`}
                    >
                      <div className="relative pl-6 py-1">
                        {/* Active Slim Yellow Indicator Line (Section 12: #FFCC00, 2.5px width, 0 -> 38px height) */}
                        <div
                          className={`story-indicator-${stepIndex} absolute left-0 top-1.5 w-[2.5px] bg-spl-yellow origin-top`}
                        />

                        {/* Step Number + Title */}
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="font-heading font-extrabold text-[13px] tracking-wider text-spl-yellow">
                            {step.num}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-spl-yellow" />
                          <h3 className="font-heading font-bold text-[17px] xl:text-[18px] tracking-wide text-white">
                            {step.title}
                          </h3>
                        </div>

                        {/* Description (Section 4) */}
                        <p
                          className="font-body text-[14px] text-slate-200 leading-[1.68]"
                          style={{
                            textShadow: '0 2px 14px rgba(7,26,43,0.5)',
                          }}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Right Column: Open Photographic Negative Space (Keeps specialist & packages visible) */}
            <div className="hidden xl:block w-[42%] pointer-events-none" />
          </div>
        </div>

        {/* ----------------------------------------------------------------------- */}
        {/* LAYER 06 & 07: DEDICATED MOBILE COMPOSITION (< 1024px, Section 19, 20) */}
        {/* Only ONE story is active at a time, positioned at 58–72% viewport height */}
        {/* ----------------------------------------------------------------------- */}
        <div className="flex lg:hidden absolute inset-0 z-20 pointer-events-auto flex-col justify-between p-4 min-[360px]:p-5 sm:p-7 text-left">
          
          {/* Top Safe Area: Section Intro & Dynamic Step Counter */}
          <div className="pt-2 sm:pt-4 max-w-[480px]">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-spl-yellow inline-block" />
                <span className="font-heading font-bold text-[10.5px] min-[360px]:text-[11px] tracking-[0.18em] uppercase text-spl-yellow">
                  THE SHIPMENT JOURNEY
                </span>
              </div>
              <div className="relative w-16 h-4 overflow-hidden text-right">
                <span className="story-counter-1 absolute inset-0 text-spl-yellow text-[11px] min-[360px]:text-[11.5px] font-heading font-bold tracking-wider">
                  01 / 04
                </span>
                <span className="story-counter-2 absolute inset-0 text-spl-yellow text-[11px] min-[360px]:text-[11.5px] font-heading font-bold tracking-wider">
                  02 / 04
                </span>
                <span className="story-counter-3 absolute inset-0 text-spl-yellow text-[11px] min-[360px]:text-[11.5px] font-heading font-bold tracking-wider">
                  03 / 04
                </span>
                <span className="story-counter-4 absolute inset-0 text-spl-yellow text-[11px] min-[360px]:text-[11.5px] font-heading font-bold tracking-wider">
                  04 / 04
                </span>
              </div>
            </div>

            <h2 className="font-display font-extrabold text-[20px] min-[360px]:text-[22px] sm:text-[26px] text-white leading-tight">
              <span className="font-serif italic font-normal text-slate-200">From pickup </span>
              <span>to delivery.</span>
            </h2>
          </div>

          {/* Lower-Middle Safe Area: Active Story (58–72% viewport height per Section 19) */}
          <div className="pb-6 min-[360px]:pb-8 sm:pb-10 max-w-[500px]">
            <div className="relative w-full min-h-[145px]">
              {STORY_STEPS.map((step, idx) => {
                const stepIndex = idx + 1;
                return (
                  <div
                    key={step.num}
                    className={`story-step-${stepIndex} absolute inset-0 flex flex-col justify-start pointer-events-auto`}
                  >
                    <div
                      className="relative pl-4 sm:pl-5 h-full flex flex-col justify-start"
                      style={{
                        textShadow: '0 2px 10px rgba(7,26,43,0.6)',
                      }}
                    >
                      {/* Active Slim Yellow Indicator Line */}
                      <div
                        className={`story-indicator-${stepIndex} absolute left-0 top-1 w-[2.5px] bg-spl-yellow origin-top`}
                      />

                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="font-heading font-extrabold text-[13.5px] text-spl-yellow tracking-wider">
                          {step.num}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-spl-yellow" />
                        <h3 className="font-heading font-bold text-[16.5px] sm:text-[18px] text-white tracking-wide">
                          {step.title}
                        </h3>
                      </div>

                      <p className="font-body text-[13.5px] sm:text-[14px] text-slate-200 leading-[1.65]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
