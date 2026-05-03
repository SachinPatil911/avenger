import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, Shield, Search } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Categories', path: '/categories' },
    { name: 'About', path: '/about' },
    { name: 'Iron Man History', path: '/blog/iron-man-history' },
    { name: 'Strategy', path: '/strategy' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-red-700 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-white p-1 rounded-md">
                <Shield className="text-red-700 h-6 w-6" />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase italic">AvengerVault</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wide transition-colors ${
                    isActive(link.path) ? 'bg-red-800 text-white' : 'text-red-100 hover:bg-red-600 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <button className="p-2 rounded-full hover:bg-red-600">
              <Search className="h-5 w-5" />
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-red-100 hover:text-white hover:bg-red-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-red-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-bold uppercase ${
                  isActive(link.path) ? 'bg-red-900 text-white' : 'text-red-100 hover:bg-red-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
