import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Ensures that on any route navigation, the viewport always starts at the top (scrollY = 0).
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior,
    });
  }, [pathname]);

  return null;
}
