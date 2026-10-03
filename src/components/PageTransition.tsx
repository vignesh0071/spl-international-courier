import React, { useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ROUTE_ORDER: Record<string, number> = {
  '/': 0,
  '/about': 1,
  '/services': 2,
  '/domestic-international': 3,
  '/contact': 4,
};

interface PageTransitionProps {
  children: React.ReactNode;
}

/**
 * Polished Page Transition Container
 * Applies subtle Slide + Fade + Elevation with cubic-bezier(0.22, 1, 0.36, 1)
 * Distinguishes forward vs backward navigation for natural directional elevation.
 */
export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);
  const [transitionClass, setTransitionClass] = useState('page-transition-forward');

  useEffect(() => {
    const prevOrder = ROUTE_ORDER[prevPathRef.current] ?? 0;
    const currentOrder = ROUTE_ORDER[location.pathname] ?? 0;

    if (currentOrder < prevOrder) {
      setTransitionClass('page-transition-backward');
    } else {
      setTransitionClass('page-transition-forward');
    }

    prevPathRef.current = location.pathname;
  }, [location.pathname]);

  return (
    <div key={location.pathname} className={`w-full ${transitionClass}`}>
      {children}
    </div>
  );
};
