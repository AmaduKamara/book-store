/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/" exact>
        Book Store
      </Link>
      <ul>
        <li>
          <Link to="/" exact>
            BOOKS
          </Link>
        </li>
        <li>
          <Link to="/categories" exact>
            CATEGORIES
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
