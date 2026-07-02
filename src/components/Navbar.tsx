import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf, LayoutDashboard } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  if (location.pathname.startsWith('/admin')) {
    return null; // Don't show navbar in admin section
  }

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Strategy', path: '/strategy' },
    { name: 'Community', path: '/community' },
    { name: 'Partnerships', path: '/partnerships' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-terra-brown text-terra-cream sticky top-0 z-50 border-b-4 border-terra-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <img src="https://i.ibb.co/fzs8ZVD2/Whats-App-Image-2026-04-26-at-9-23-04-AM-2.jpg" alt="TerraNova Energy Ltd Logo" className="h-14 w-auto object-contain bg-white p-1 rounded-sm" />
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight leading-none text-white">TERRANOVA</span>
                <span className="text-[10px] uppercase tracking-widest text-terra-yellow">Energy Limited</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`pb-1 text-sm font-medium uppercase tracking-wide transition-colors ${
                  location.pathname === link.path 
                    ? 'text-terra-yellow border-b-2 border-terra-yellow' 
                    : 'text-terra-cream/80 hover:text-terra-yellow border-b-2 border-transparent hover:border-terra-yellow/30'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/admin"
              className="text-terra-cream/80 hover:text-terra-yellow transition-colors"
              title="Admin Dashboard"
            >
              <LayoutDashboard className="w-5 h-5" />
            </Link>
          </div>

          <div className="flex items-center md:hidden space-x-4">
            <Link
              to="/admin"
              className="text-terra-cream/80 hover:text-terra-yellow transition-colors"
              title="Admin Dashboard"
            >
              <LayoutDashboard className="w-5 h-5" />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-terra-cream hover:text-terra-yellow focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-terra-brown/10 bg-terra-cream overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === link.path 
                      ? 'text-terra-green bg-terra-green/10' 
                      : 'text-terra-brown hover:text-terra-green hover:bg-terra-brown/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
