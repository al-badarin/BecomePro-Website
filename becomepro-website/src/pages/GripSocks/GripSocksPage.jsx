// src/pages/GripSocks/GripSocksPage.jsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Features from './Features/Features';
import Pricing from './Pricing/Pricing';
import OrderForm from './OrderForm/OrderForm';
import Testimonials from './Testimonials/Testimonials';
import { scroller } from 'react-scroll';

const GripSocksPage = ({ section }) => {
  const location = useLocation();

  useEffect(() => {
    if (section) {
      // Smooth scroll to the specific section when `section` prop is provided
      scroller.scrollTo(section, {
        duration: 500,
        smooth: true,
        offset: -70, // Offset for sticky navbar height
      });
    }
  }, [location, section]); // Trigger scroll when location or section changes

  return (
    <div>
      <section id="features">
        <Features />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="order">
        <OrderForm />
      </section>
      <section id="reviews">
        <Testimonials />
      </section>
    </div>
  );
};

export default GripSocksPage;
