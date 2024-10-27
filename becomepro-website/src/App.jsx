// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grip-socks/features" element={<div>Характеристики</div>} />
        <Route path="/grip-socks/pricing" element={<div>Цени</div>} />
        <Route path="/grip-socks/order" element={<div>Поръчай сега</div>} />
        <Route path="/grip-socks/reviews" element={<div>Отзиви</div>} />
        <Route path="/training/fitness" element={<div>Фитнес режими</div>} />
        {/* Add other routes for training services as needed */}
      </Routes>
    </Router>
  );
}

export default App;
