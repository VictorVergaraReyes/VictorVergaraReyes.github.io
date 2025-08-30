import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: 'About', href: 'about' },
    { name: 'Skills', href: 'skills' },
    { name: 'Experience', href: 'experience' },
    { name: 'Projects', href: 'projects' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">Portfolio</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  onClick={() => scrollToSection(item.href.substring(1))}
                  className="text-gray-700 hover:text-[#273677] px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </div>
              ))}
              <a
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#273677] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-[#1e2a5a] transition-colors duration-200"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#273677] hover:bg-gray-100 transition-colors duration-200"
              aria-expanded="false"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  onClick={() => {scrollToSection(item.href); setIsMenuOpen(false);}}
                  className="text-gray-700 hover:text-[#273677] px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </div>
              ))}
              <a
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#273677] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-[#1e2a5a] transition-colors duration-200"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;