// src/pages/GripSocks/GripSocksPage.jsx
import React from 'react';
import Features from '../GripSocks/Features/Features';
import Pricing from '../GripSocks/Pricing/Pricing';
import OrderForm from '../GripSocks/OrderForm/OrderForm';
import Testemonials from '../GripSocks/Testimonials/Testimonials';

const GripSocksPage = () => {
  return (
    <div>
      <Features />
      <Pricing />
      <OrderForm />
      <Testemonials />
    </div>
  );
};

export default GripSocksPage;
