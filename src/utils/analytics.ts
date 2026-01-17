// Google Analytics Event Tracking Utilities

declare global {
  interface Window {
    gtag: (
      command: string,
      ...args: any[]
    ) => void;
  }
}

// Track custom events
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent('click', {
    event_category: 'engagement',
    event_label: buttonName,
    value: location,
  });
};

// Track Calendly clicks (high-value conversion)
export const trackCalendlyClick = (location: string) => {
  trackEvent('book_meeting_click', {
    event_category: 'conversion',
    event_label: location,
    value: 1,
  });
};

// Track email clicks
export const trackEmailClick = () => {
  trackEvent('email_click', {
    event_category: 'engagement',
    event_label: 'hello@veogrowth.com',
  });
};

// Track page views (for SPAs)
export const trackPageView = (path: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-CJ84LMHNB9', {
      page_path: path,
      page_title: title,
    });
  }
};

// Track case study views
export const trackCaseStudyView = (caseStudyTitle: string) => {
  trackEvent('view_case_study', {
    event_category: 'content',
    event_label: caseStudyTitle,
  });
};

// Track blog post views
export const trackBlogView = (postTitle: string) => {
  trackEvent('view_blog_post', {
    event_category: 'content',
    event_label: postTitle,
  });
};

// Track tool usage
export const trackToolUsage = (toolName: string) => {
  trackEvent('use_tool', {
    event_category: 'engagement',
    event_label: toolName,
  });
};

// Track scroll depth
export const trackScrollDepth = (percentage: number) => {
  trackEvent('scroll', {
    event_category: 'engagement',
    event_label: `${percentage}%`,
    value: percentage,
  });
};

// Enhanced Ecommerce - track when someone views pricing
export const trackPricingView = () => {
  trackEvent('view_item', {
    currency: 'USD',
    value: 350, // Your per-meeting price
    items: [{
      item_id: 'qualified-meeting',
      item_name: 'Qualified B2B Meeting',
      price: 350,
      quantity: 1,
      item_category: 'lead-generation',
    }]
  });
};

// Track form submissions
export const trackFormSubmit = (formName: string) => {
  trackEvent('generate_lead', {
    event_category: 'conversion',
    event_label: formName,
  });
};

// Track FAQ accordion opens
export const trackFaqOpen = (question: string, section: string) => {
  trackEvent('faq_open', {
    event_category: 'engagement',
    event_label: question,
    faq_section: section,
  });
};

// Track case study clicks from preview
export const trackCaseStudyClick = (caseStudyId: string, caseStudyTitle: string) => {
  trackEvent('case_study_click', {
    event_category: 'engagement',
    event_label: caseStudyTitle,
    case_study_id: caseStudyId,
  });
};

// Track section views (when section comes into viewport)
export const trackSectionView = (sectionId: string) => {
  trackEvent('section_view', {
    event_category: 'engagement',
    event_label: sectionId,
  });
};

// Track time on page thresholds (30s, 60s, 120s)
let timeThresholdsTracked: number[] = [];

export const initTimeOnPageTracking = () => {
  const thresholds = [30, 60, 120, 180, 300]; // seconds

  thresholds.forEach((seconds) => {
    setTimeout(() => {
      if (!timeThresholdsTracked.includes(seconds) && !document.hidden) {
        timeThresholdsTracked.push(seconds);
        trackEvent('time_on_page', {
          event_category: 'engagement',
          event_label: `${seconds}s`,
          value: seconds,
        });
      }
    }, seconds * 1000);
  });
};

// Reset time tracking (for SPA navigation)
export const resetTimeTracking = () => {
  timeThresholdsTracked = [];
};

// Track AI link clicks in FAQ
export const trackAskAiClick = (aiName: string) => {
  trackEvent('ask_ai_click', {
    event_category: 'engagement',
    event_label: aiName,
  });
};

// Track outbound link clicks
export const trackOutboundClick = (url: string, linkText: string) => {
  trackEvent('outbound_click', {
    event_category: 'engagement',
    event_label: linkText,
    outbound_url: url,
  });
};