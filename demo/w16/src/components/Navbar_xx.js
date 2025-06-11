import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const Navbar_xx = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <a href="index.html"
        ><img src={logo} alt="cocktail db logo" className="logo"
          /></a>
        <ul className="nav-links">
          <li><Link to="/">home</Link></li>
          <li><Link to="/about">about</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar_xx;
