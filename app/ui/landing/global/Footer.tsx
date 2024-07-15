import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-800 via-gold-300 to-blue-500 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">JOSTUM JOURNAL OF ENGINEERING</h2>
            <p className="text-gray-200">Joseph Sarwuan Tarka University Makurdi, Benue State, Nigeria.</p>
            <p className="text-gray-200">Email: jostum_je@uam.edu.ng</p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <Link href="/about" className="text-gray-200 hover:text-white transition-colors duration-200">About Us</Link>
              </li>
              <li className="mb-2">
                <Link href="/services" className="text-gray-200 hover:text-white transition-colors duration-200">Services</Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="text-gray-200 hover:text-white transition-colors duration-200">Contact</Link>
              </li>
              <li className="mb-2">
                <Link href="/privacy" className="text-gray-200 hover:text-white transition-colors duration-200">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-bold mb-2">Follow Us</h2>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-gray-200 hover:text-white transition-colors duration-200">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link href="https://twitter.com" className="text-gray-200 hover:text-white transition-colors duration-200">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link href="https://instagram.com" className="text-gray-200 hover:text-white transition-colors duration-200">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link href="https://linkedin.com" className="text-gray-200 hover:text-white transition-colors duration-200">
                <i className="fab fa-linkedin"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-gray-200">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
