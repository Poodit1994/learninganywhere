// lib/analytics.js
export const GA_MEASUREMENT_ID = 'G-TPH1VDFXZW'; // เปลี่ยนเป็นของคุณ

// ติดตามการเข้าหน้า (Pageview)
export const pageview = (url) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// ติดตาม event เช่นคลิกเลือก
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
