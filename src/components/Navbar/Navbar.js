import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Navbar = () => (
  <Router>
    <header className="text-center">
      <nav>
        <Link to="/">
          <h1>Meals</h1>
        </Link>
      </nav>
    </header>
  </Router>
);

export default Navbar;
