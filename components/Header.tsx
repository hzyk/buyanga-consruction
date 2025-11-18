import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-deep-navy shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-serif font-bold text-off-white">
          Buyunga Group
        </NavLink>
        <nav className="hidden md:flex space-x-8">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative text-off-white font-semibold tracking-wide hover:text-teal-accent transition-colors after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-teal-accent after:transform after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100 ${isActive ? 'text-teal-accent after:scale-x-100' : ''}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-off-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-deep-navy pb-4">
          <nav className="flex flex-col items-center space-y-4">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-semibold tracking-wide text-off-white hover:text-teal-accent transition-colors ${isActive ? 'text-teal-accent' : ''}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;