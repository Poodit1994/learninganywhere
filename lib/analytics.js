// lib/analytics.js
export const GA_MEASUREMENT_ID = 'G-TPH1VDFXZW'; // เปลี่ยนเป็นรหัสของคุณจริง

// ฟังก์ชันสำหรับส่ง pageview ไปยัง GA
export const pageview = (url) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
