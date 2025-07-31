import React, { useEffect } from 'react';

const ROICalculator = () => {
  useEffect(() => {
    // Redirect to the public ROI calculator page
    window.location.href = '/roi-calculator/';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600">
      <div className="text-center text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
        <p className="text-lg">Redirecting to ROI Calculator...</p>
      </div>
    </div>
  );
};

export default ROICalculator;