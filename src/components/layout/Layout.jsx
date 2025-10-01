import React from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from '../common/WhatsAppButton';
import PerformanceMonitor from '../common/PerformanceMonitor';
import { useAnalytics } from '../../utils/useAnalytics';

const Layout = ({ children }) => {
  // Track page views automatically
  useAnalytics();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="pt-20 flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      {process.env.NODE_ENV === 'development' && <PerformanceMonitor />}
    </div>
  );
};

export default Layout;