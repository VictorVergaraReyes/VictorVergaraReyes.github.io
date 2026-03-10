import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: 'PROJECTS', href: 'projects' },
    { name: 'ABOUT', href: 'about' },
    { name: 'CONTACT', href: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-30 p-4 md:p-6 flex justify-between items-center bg-white/5 dark:bg-black/20 backdrop-blur-md border-b border-white/10 dark:border-primary/20 transition-all duration-300">
      {/* Logo */}
      <div className="text-2xl font-display font-black tracking-widest text-primary hover:text-secondary transition-colors cursor-pointer group">
        <span className="inline-block group-hover:skew-x-12 transition-transform">NEO</span>
        <span className="text-secondary group-hover:-skew-x-12 inline-block transition-transform">_DEV</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8 font-mono text-lg tracking-wider">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => scrollToSection(item.href)}
            className="relative group bg-transparent border-none p-0 cursor-pointer text-gray-800 dark:text-gray-100"
          >
            <span className="group-hover:text-primary transition-colors">{item.name}</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
          </button>
        ))}
      </div>

      {/* Login / Action Button */}
      <div className="hidden md:block">
        <button
          className="bg-transparent border border-secondary text-secondary hover:bg-secondary hover:text-black px-6 py-2 rounded-none font-mono uppercase tracking-widest transition-all duration-300 shadow-[0_0_10px_rgba(0,229,255,0.3)] hover:shadow-[0_0_20px_rgba(0,229,255,0.6)] clip-path-slant"
        >
          System.Login()
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-secondary hover:text-primary transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background-dark/95 backdrop-blur-xl border-b border-primary/20 p-4 flex flex-col gap-4 shadow-2xl animate-glitch">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                scrollToSection(item.href);
                setIsMenuOpen(false);
              }}
              className="text-left font-mono text-xl text-gray-100 hover:text-secondary py-2 border-l-2 border-transparent hover:border-primary pl-4 transition-all"
            >
              {item.name}
            </button>
          ))}
          <button
            className="mt-4 w-full bg-secondary/10 border border-secondary text-secondary hover:bg-secondary hover:text-black px-6 py-3 font-mono uppercase tracking-widest transition-all text-center"
          >
            System.Login()
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;