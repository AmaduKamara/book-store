/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="py-3 md:py-6 shadow-md bg-white px-6 md:p-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="container mx-auto flex items-center">
          <Link
            to="/"
            className="mr-3 md:mr-16 uppercase text-sky-500 font-bold text-sm md:text-3xl"
          >
            Bookstore CMS
          </Link>
          <ul className="flex">
            <li className="mx-2 md:mx-6 text-gray-500">
              <Link
                to="/"
                className="text-gray-700 font-bold uppercase text-xs"
              >
                Books
              </Link>
            </li>
            <li className="mx-2 md:mx-6 text-gray-500">
              <Link to="/categories" className="uppercase text-xs">
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
