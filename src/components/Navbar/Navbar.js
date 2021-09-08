import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="text-center">
    <nav>
      <Link to="/"> Meals </Link>
    </nav>
  </header>
);

export default Navbar;
