import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Virtual Memory Dashboard</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/memory-usage">Memory Usage</Link></li>
        <li><Link to="/page-faults">Page Faults</Link></li>
        <li><Link to="/swap-usage">Swap Usage</Link></li>
        <li><Link to="/algorithms">Algorithms</Link></li> {/* Added link to algorithms page */}
      </ul>
    </nav>
  );
};

export default Navbar;
