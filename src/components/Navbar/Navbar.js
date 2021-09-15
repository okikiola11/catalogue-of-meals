import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

import './Navbar.module.css';

const Navbar = () => (
  <header className="text-center bg-color">
    <nav className="">
      <Router>
        <Link to="/"> Meals </Link>
      </Router>
    </nav>
  </header>
);

export default Navbar;
