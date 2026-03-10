import { type ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export const PrimaryButton = ({ children, onClick, className = '' }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`relative px-8 py-4 bg-primary text-white font-display font-bold text-lg tracking-wider uppercase group overflow-hidden ${className}`}
    >
      <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      <span className="relative flex items-center gap-2">
        {children}
      </span>
    </button>
  );
};

export const SecondaryButton = ({ children, onClick, className = '' }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-4 bg-transparent border border-white/20 dark:border-white/20 text-gray-800 dark:text-white font-mono text-lg tracking-wider uppercase hover:bg-white/5 hover:border-secondary hover:text-secondary transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

interface GlitchButtonProps {
  normalText: string;
  hoverText: string;
  onClick?: () => void;
  className?: string;
}

export const GlitchButton = ({ normalText, hoverText, onClick, className = '' }: GlitchButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-4 bg-transparent border border-white/20 dark:border-white/20 text-gray-800 dark:text-white font-mono text-lg tracking-wider uppercase hover:bg-white/5 hover:border-secondary hover:text-secondary transition-all duration-300 group ${className}`}
    >
      <span className="group-hover:hidden">{normalText}</span>
      <span className="hidden group-hover:inline">{hoverText}</span>
    </button>
  );
};

interface IconButtonProps {
  children: ReactNode;
  icon?: boolean;
  onClick?: () => void;
  className?: string;
}

export const IconButton = ({ children, icon, onClick, className = '' }: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`relative px-8 py-4 bg-primary text-white font-display font-bold text-lg tracking-wider uppercase group overflow-hidden ${className}`}
    >
      <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      <span className="relative flex items-center gap-2">
        {children}
        {icon && (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        )}
      </span>
    </button>
  );
};