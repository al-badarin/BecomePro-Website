// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Features from './pages/GripSocks/Features/Features';
import Pricing from './pages/GripSocks/Pricing/Pricing';
import OrderForm from './pages/GripSocks/OrderForm/OrderForm';
import Reviews from './pages/GripSocks/Testimonials/Testimonials';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grip-socks/features" element={<Features />} />
        <Route path="/grip-socks/pricing" element={<Pricing />} />
        <Route path="/grip-socks/order" element={<OrderForm />} />
        <Route path="/grip-socks/reviews" element={<Reviews />} />
      </Routes>
    </Router>
  );
}

export default App;
