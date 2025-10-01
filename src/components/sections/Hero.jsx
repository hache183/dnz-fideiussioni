import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = ({ title, subtitle, ctaText, ctaLink }) => {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-blue-200 mb-8"
          >
            {subtitle}
          </motion.p>
          {ctaText && ctaLink && (
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                to={ctaLink}
                className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all hover:scale-105 shadow-xl"
              >
                {ctaText}
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;