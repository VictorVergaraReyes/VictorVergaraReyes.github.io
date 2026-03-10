// Navigation.tsx
// Barra de navegación con efecto glassmorphism

interface MenuItem {
  label: string;
  href: string;
}

interface NavigationProps {
  menuItems?: MenuItem[];
}

const Navigation = ({ menuItems = [] }: NavigationProps) => {

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
        {/* CTA Button */}
        <button className="px-6 py-2 bg-primary text-white font-display font-bold text-sm tracking-wider uppercase hover:bg-primary/80 transition-colors duration-300">
          Hire Me
        </button>
      </div>
    </nav>
  );
};

export default Navigation;