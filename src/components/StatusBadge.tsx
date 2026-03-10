// StatusBadge.tsx
// Badge de estado con indicador animado

type BadgeVariant = 'primary' | 'secondary' | 'accent-red';

interface StatusBadgeProps {
  status?: string;
  message?: string;
  variant?: BadgeVariant;
}

const StatusBadge = ({ status = 'ONLINE', message = 'SYSTEM_READY', variant = 'secondary' }: StatusBadgeProps) => {
  const colorClasses: Record<BadgeVariant, string> = {
    primary: 'text-primary border-primary/30',
    secondary: 'text-secondary border-secondary/30',
    'accent-red': 'text-accent-red border-accent-red/30',
  };

  const pulseColorClasses: Record<BadgeVariant, string> = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    'accent-red': 'bg-accent-red',
  };

  return (
    <div className={`inline-flex items-center gap-2 self-start px-3 py-1 bg-surface-dark/50 border rounded font-mono text-sm tracking-widest backdrop-blur-sm ${colorClasses[variant]}`}>
      <span className="relative flex h-2 w-2">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${pulseColorClasses[variant]}`} />
        <span className={`relative inline-flex rounded-full h-2 w-2 ${pulseColorClasses[variant]}`} />
      </span>
      {status} :: {message}
    </div>
  );
};

export default StatusBadge;
