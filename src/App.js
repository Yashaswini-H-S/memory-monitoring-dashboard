import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import MemoryUsage from './components/MemoryUsage';
import PageFaults from './components/PageFaults';
import SwapUsage from './components/SwapUsage';
import './App.css';
import Algorithms from './components/Algorithms';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/memory-usage" element={<MemoryUsage />} />
          <Route path="/page-faults" element={<PageFaults />} />
          <Route path="/swap-usage" element={<SwapUsage />} />
          <Route path="/algorithms" element={<Algorithms />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
