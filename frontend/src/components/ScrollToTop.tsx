import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const location = useLocation();
  const prevPathname = useRef(location.pathname);

  useEffect(() => {
    // Only scroll if pathname actually changed
    if (prevPathname.current !== location.pathname) {
      // Wait for exit animation to complete (300ms) + small buffer
      // This ensures scroll happens when screen is fully faded out
      const timer = setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        });
      }, 320); // After exit completes, before enter starts showing content
      
      prevPathname.current = location.pathname;
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return null;
}

