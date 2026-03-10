// GlitchTitle.jsx
// Título con efecto de aberración cromática y glitch

const GlitchTitle = ({ 
  topText = 'VICTOR',
  bottomText = 'VERGARA',
  useGlitch = true,
  className = ''
}) => {
  return (
    <h1 className={`text-6xl md:text-8xl font-display font-black leading-tight mb-2 tracking-tighter ${className}`}>
      {useGlitch ? (
        <span className="block chromatic-aberration" data-text={topText}>
          {topText}
        </span>
      ) : (
        <span className="block text-white">
          {topText}
        </span>
      )}
      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary filter drop-shadow-[0_0_10px_rgba(217,0,255,0.5)]">
        {bottomText}
      </span>
    </h1>
  );
};

export default GlitchTitle;
