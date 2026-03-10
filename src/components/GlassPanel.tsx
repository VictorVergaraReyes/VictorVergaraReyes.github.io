import React from 'react';

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  borderColor?: 'primary' | 'secondary' | 'accent-red';
  hover?: boolean;
}

const GlassPanel = ({ 
  children, 
  className = '', 
  borderColor = 'primary',
  hover = false 
}: GlassPanelProps) => {
  const borderColorClasses = {
    primary: 'border-primary/20',
    secondary: 'border-secondary/30',
    'accent-red': 'border-accent-red/30',
  };

  const hoverClass = hover ? 'hover:scale-[1.02] transition-transform duration-500' : '';

  return (
    <div className={`glass-panel rounded-lg ${borderColorClasses[borderColor]} ${hoverClass} ${className}`}>
      {children}
    </div>
  );
};

export default GlassPanel;
