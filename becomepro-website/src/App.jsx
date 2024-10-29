// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import GripSocksPage from './pages/GripSocks/GripSocksPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grip-socks" element={<GripSocksPage />} />
        <Route path="/grip-socks/features" element={<GripSocksPage section="features" />} />
        <Route path="/grip-socks/pricing" element={<GripSocksPage section="pricing" />} />
        <Route path="/grip-socks/order" element={<GripSocksPage section="order" />} />
        <Route path="/grip-socks/reviews" element={<GripSocksPage section="reviews" />} />
      </Routes>
    </Router>
  );
}

export default App;
