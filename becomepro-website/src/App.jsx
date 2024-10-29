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
      </Routes>
    </Router>
  );
}

export default App;
