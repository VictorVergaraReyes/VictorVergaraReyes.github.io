// StatsDisplay.tsx
// Componente para mostrar estadísticas con estilo cyberpunk

type StatColor = 'primary' | 'secondary' | 'accent-red';

interface Stat {
  value: string;
  label: string;
  color: StatColor;
}

interface StatsDisplayProps {
  stats?: Stat[];
}

const StatsDisplay = ({ stats = [] }: StatsDisplayProps) => {
  const defaultStats: Stat[] = [
    { value: '98%', label: 'SYNC_RATE', color: 'secondary' },
    { value: '404', label: 'REALITY_ERRORS', color: 'primary' },
    { value: '24/7', label: 'UPTIME', color: 'accent-red' },
  ];

  const displayStats = stats.length > 0 ? stats : defaultStats;

  const colorClasses: Record<StatColor, string> = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    'accent-red': 'text-accent-red',
  };

  return (
    <div className="flex gap-8 font-mono text-sm text-gray-500 dark:text-gray-400 flex-wrap">
      {displayStats.map((stat, index) => (
        <div key={index}>
          <span className={`block text-2xl font-bold ${colorClasses[stat.color]}`}>
            {stat.value}
          </span>
          {stat.label}
        </div>
      ))}
    </div>
  );
};

export default StatsDisplay;
