// lib/analytics.js

export const GA_MEASUREMENT_ID = 'G-TPH1VDFXZW';

// สั่งส่ง pageview
export const pageview = (url) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
