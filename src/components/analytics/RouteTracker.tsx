import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '@/utils/analytics';

const RouteTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view whenever route changes
    trackPageView(location.pathname, document.title);
  }, [location]);

  return null;
};

export default RouteTracker;