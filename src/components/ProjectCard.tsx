// ProjectCard.tsx
// Card de proyecto con efectos 3D y glassmorphism

interface ProjectCardProps {
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  subtitle?: string;
  progress?: number;
  hoverText?: string;
  codeSnippet?: React.ReactNode;
}

const ProjectCard = ({
  imageSrc = 'https://via.placeholder.com/400x500',
  imageAlt = 'Project image',
  title = 'NEON GENESIS',
  subtitle = 'CURRENT_PROJECT',
  progress = 75,
  hoverText = 'WAKE UP',
  codeSnippet = null
}: ProjectCardProps) => {
  return (
    <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
      {/* Capas de fondo con efecto 3D */}
      <div className="absolute inset-0 translate-x-4 translate-y-4 bg-gradient-to-br from-accent-red/20 to-primary/20 border border-accent-red/50 rounded-lg transform -rotate-6 z-0" />
      <div className="absolute inset-0 -translate-x-4 -translate-y-4 bg-gradient-to-tl from-secondary/20 to-primary/20 border border-secondary/50 rounded-lg transform rotate-3 z-10 backdrop-blur-sm" />
      
      {/* Card principal */}
      <div className="absolute inset-0 glass-panel rounded-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-500 z-20 flex flex-col">
        {/* Barra de título tipo ventana */}
        <div className="h-8 bg-surface-dark border-b border-primary/20 flex items-center px-3 gap-2">
          <div className="w-2 h-2 rounded-full bg-accent-red" />
          <div className="w-2 h-2 rounded-full bg-yellow-500" />
          <div className="w-2 h-2 rounded-full bg-secondary" />
          <div className="ml-auto font-mono text-[10px] text-primary/70">IMG_SOURCE: EVA_01</div>
        </div>

        {/* Contenido de la imagen */}
        <div className="flex-1 relative group overflow-hidden bg-black">
          <img
            alt={imageAlt}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 mix-blend-screen"
            src={imageSrc}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-secondary/20 mix-blend-overlay" />
          {hoverText && (
            <div className="absolute bottom-6 left-6 font-display font-bold text-4xl text-white mix-blend-difference opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {hoverText}
            </div>
          )}
        </div>

        {/* Footer del card */}
        <div className="p-4 border-t border-primary/20 bg-surface-dark/80">
          <div className="font-mono text-xs text-secondary mb-1">{subtitle}</div>
          <div className="font-display font-bold text-white text-lg">{title}</div>
          <div className="w-full bg-gray-700 h-1 mt-3 rounded-full overflow-hidden">
            <div 
              className="bg-gradient-to-r from-primary to-secondary h-full animate-pulse" 
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Código flotante opcional */}
      {codeSnippet && (
        <div className="absolute -bottom-6 -right-4 glass-panel p-4 rounded border border-secondary/30 hidden md:block animate-bounce-slow">
          <code className="font-mono text-xs text-secondary">
            {codeSnippet}
          </code>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
