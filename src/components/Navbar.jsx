/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="py-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="container mx-auto flex items-center">
          <Link
            to="/"
            exact
            className="mr-16 uppercase text-sky-500 font-bold text-3xl"
          >
            Bookstore CMS
          </Link>
          <ul className="flex">
            <li className="mx-6 text-gray-500">
              <Link
                to="/"
                exact
                className="text-gray-700 font-semibold uppercase"
              >
                Books
              </Link>
            </li>
            <li className="mx-6 text-gray-500">
              <Link to="/categories" exact className="uppercase">
                Categories
              </Link>
            </li>
          </ul>
        </div>
        <FaUser className="text-sky-600" />
      </div>
    </nav>
  );
}

export default Navbar;
