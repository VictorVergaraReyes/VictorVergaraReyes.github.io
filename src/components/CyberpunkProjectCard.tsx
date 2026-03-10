// CyberpunkProjectCard.tsx
// Componente de tarjeta de proyecto con estética cyberpunk

interface CyberpunkProjectCardProps {
  imageUrl: string;
  imageAlt: string;
  version: string;
  category: string;
  categoryIcon: string;
  title: string;
  description: string;
  tags: string[];
}

const CyberpunkProjectCard = ({
  imageUrl,
  imageAlt,
  version,
  category,
  categoryIcon,
  title,
  description,
  tags
}: CyberpunkProjectCardProps) => {
  return (
    <article className="group relative overflow-hidden rounded-lg bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-white/10 hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(185,13,242,0.25)] flex flex-col h-[420px]">
      {/* Image Container */}
      <div className="relative h-2/3 w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url("${imageUrl}")` }}
          data-alt={imageAlt}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent opacity-90" />
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm border border-primary/30 px-3 py-1 rounded text-xs font-mono text-primary">
          {version}
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 w-full p-6 flex flex-col gap-3 bg-gradient-to-t from-surface-light dark:from-surface-dark via-surface-light dark:via-surface-dark to-transparent">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-lg">
            {categoryIcon}
          </span>
          <span className="text-xs font-bold tracking-widest text-slate-500 dark:text-slate-400">
            {category}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2">
          {description}
        </p>

        <div className="pt-2 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-[10px] px-2 py-1 rounded bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-600 dark:text-slate-300 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default CyberpunkProjectCard;
