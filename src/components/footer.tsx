import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-100 p-10 mt-4">
      {" "}
      {/* Base styles */}
      <div className="container mx-auto flex flex-wrap  justify-between">
        {" "}
        {/* Container and flex layout */}
        <div className="footer-section w-full md:w-1/3 mb-6 md:mb-0">
          {" "}
          {/* About section */}
          <h5 className="text-xl font-bold mb-2 ">About EducareHub</h5>
          <p className="text-base pr-6">
            Streamlining the educational journey for busy parents with a
            comprehensive online marketplace.Your partner in parenting,
            providing a seamless educational experience and Revolutionizing
            parental convenience through a comprehensive educational platform.
          </p>
        </div>
        <div className="footer-section w-full md:w-1/3 mb-6 md:mb-0">
          {" "}
          {/* Quick Links section */}
          <h5 className="text-xl font-bold mb-2">Quick Links</h5>
          <ul className="list-none pl-0">
            <li className="mb-2">
              <a href="/" className="text-gray-100 hover:underline">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/uniforms-and-accessories"
                className="text-gray-100 hover:underline"
              >
                uniforms & accessories
              </a>
            </li>
            <li className="mb-2">
              <a href="/services" className="text-gray-100 hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-100 hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section w-full md:w-1/3 mb-6 md:mb-0">
          {" "}
          {/* Contact section */}
          <h5 className="text-xl font-bold mb-2">Contact Us</h5>
          <p className="text-base">
            fajara, The Gambia
            <br />
            educarehub@gmail.com
            <br />
            0220-3445690
          </p>
          <div className="social-media flex mt-4">
            {" "}
            {/* Social media icons */}
            <a
              href="https://www.facebook.com/your-facebook-page"
              className="mr-4"
            >
              <i className="fab fa-facebook-f text-2xl hover:text-blue-500"></i>
            </a>
            <a
              href="https://www.twitter.com/your-twitter-handle"
              className="mr-4"
            >
              <i className="fab fa-twitter text-2xl hover:text-blue-400"></i>
            </a>
            <a href="https://www.instagram.com/your-instagram-handle">
              <i className="fab fa-instagram text-2xl hover:text-red-500"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="copyright text-center mt-8">
        {" "}
        {/* Copyright */}
        &copy; {new Date().getFullYear()} EducareHub. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
