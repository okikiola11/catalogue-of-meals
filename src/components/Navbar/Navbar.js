import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.module.css';

const Navbar = () => (
  <header className="text-center bg-color">
    <nav className="">
      <Link to="/"> Meals </Link>
    </nav>
  </header>
);

export default Navbar;
