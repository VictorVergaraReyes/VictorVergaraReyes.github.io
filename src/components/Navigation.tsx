// Navigation.tsx
// Barra de navegación con efecto glassmorphism

import { useDarkMode } from '../context/DarkModeContext';

interface MenuItem {
  label: string;
  href: string;
}

interface NavigationProps {
  menuItems?: MenuItem[];
}

const Navigation = ({ menuItems = [] }: NavigationProps) => {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <nav className="fixed top-0 left-0 right-0 z-30 p-6 flex justify-between items-center bg-white/5 dark:bg-black/20 backdrop-blur-md border-b border-white/10 dark:border-primary/20">
      {/* Logo */}
      <div className="font-display font-black text-2xl">
        <span className="text-primary">{'<'}</span>
        <span className="text-white">DIGITAL</span>
        <span className="text-secondary">{'/>'}</span>
      </div>

      {/* Menu Items */}
      <div className="hidden md:flex gap-8 font-mono text-sm uppercase tracking-wider">
        {menuItems.length > 0 ? (
          menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-gray-400 hover:text-secondary transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-secondary group-hover:w-full transition-all duration-300" />
            </a>
          ))
        ) : (
          <>
            <a
              href="#work"
              className="text-gray-400 hover:text-secondary transition-colors duration-300 relative group"
            >
              Work
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-secondary group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-secondary transition-colors duration-300 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-secondary group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-secondary transition-colors duration-300 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-secondary group-hover:w-full transition-all duration-300" />
            </a>
          </>
        )}
      </div>

      <div className="flex items-center gap-4">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-lg bg-surface-dark/50 border border-primary/30 hover:border-secondary/50 transition-all duration-300 group"
          aria-label="Toggle dark mode"
        >
          {isDark ? (
            // Icono de sol para modo claro
            <svg
              className="w-5 h-5 text-secondary group-hover:text-primary transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            // Icono de luna para modo oscuro
            <svg
              className="w-5 h-5 text-primary group-hover:text-secondary transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </button>

        {/* CTA Button */}
        <button className="px-6 py-2 bg-primary text-white font-display font-bold text-sm tracking-wider uppercase hover:bg-primary/80 transition-colors duration-300">
          Hire Me
        </button>
      </div>
    </nav>
  );
};

export default Navigation;