import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const Analytics = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-7HDFZ713WB';

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(args1: string, args2: Date | string) {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-7HDFZ713WB');
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div></div>;
};

export default Analytics;
