const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB, onCLS, onFID, onLCP }) => {
      // Report to console in development
      if (process.env.NODE_ENV === 'development') {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      }
      
      // Report to analytics in production
      if (process.env.NODE_ENV === 'production') {
        // Send to Google Analytics
        const sendToGoogleAnalytics = ({ name, delta, value, id }) => {
          if (window.gtag) {
            window.gtag('event', name, {
              event_category: 'Web Vitals',
              event_label: id,
              value: Math.round(name === 'CLS' ? delta * 1000 : delta),
              non_interaction: true,
            });
          }
        };

        onCLS(sendToGoogleAnalytics);
        onFID(sendToGoogleAnalytics);
        onLCP(sendToGoogleAnalytics);
      }
      
      // Custom callback
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;