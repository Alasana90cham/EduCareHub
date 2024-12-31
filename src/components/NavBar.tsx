import React, { useState } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";


const NavBar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
 
  }

  return (
    <div className="sm:flex gap-2 items-center md:px-4 p-2 bg-white/65 backdrop-blur-sm w-full fixed top-0 left-0 z-20">
      <nav className="w-full flex justify-between mx-4">
        <Link to="/" className="text-sky-700 bold hover:text-blue-400 transition text-3xl sm:text-4xl font-bold font-mouse">
          EduCareHub
        </Link>

        <ul className="hidden sm:flex justify-self-end items-center gap-4 space-x-2 font-semibold mx-5">
          <li>
            <Link to="/" className="text-sky-900 hover:text-sky-600 p-2 sm:p-4 rounded-full">
              Home
            </Link>
          </li>
          <li>
            <Link to="/uniforms-and-accessories" className="text-sky-900 hover:text-sky-600 p-2 sm:p-4 rounded-full">
              Uniforms & Accessories
            </Link>
          </li>
          <li>
            <Link to="/services" className="text-sky-900 hover:text-sky-600 p-2 sm:p-4 rounded-full">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-sky-900 hover:text-sky-600 p-2 sm:p-4 rounded-full">
              Contact
            </Link>
          </li>
        </ul>

        <button onClick={toggleMenu} className="sm:hidden text-sky-900 hover:text-blue-400 transition text-2xl px-5">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {isMenuOpen && (
        <nav className="flex w-full backdrop-blur-sm fixed mt-2 z-20 outline-none left-0 bg-white/65">
          <ul className="flex flex-col gap-4 font-semibold w-full items-center">
            <li>
              <Link to="/" className="text-sky-700 hover:text-sky-600 p-2 rounded-full">
                Home
              </Link>
            </li>
            <li>
              <Link to="/uniforms-and-accessories" className="text-sky-700 hover:text-sky-600 p-2 rounded-full">
                Uniforms & Accessories
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-sky-700 hover:text-sky-600 p-2 rounded-full">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-sky-700 hover:text-sky-600 p-2 rounded-full">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};


 
export default NavBar;
