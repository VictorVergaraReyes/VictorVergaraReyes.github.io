
import '../assets/CyberpunkHero.css';

interface CyberpunkHeroProps {
  spanText?: string;
}

const CyberpunkHero = ({ spanText }: CyberpunkHeroProps) => {

  return (
    <div className="text-gray-900 dark:text-gray-100 relative overflow-x-hidden custom-scrollbar font-['Rajdhani']">
      
      {/* Grid de fondo (Cyber-grid) usando clases arbitrarias */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(217, 0, 255, 0.1) 1px, transparent 1px), 
                            linear-gradient(to bottom, rgba(217, 0, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>
      <h1 
            className="text-6xl md:text-8xl font-['Orbitron'] font-black leading-tight mb-2 tracking-tighter animate-glitch"
            data-text="ALCHEMIST"
        >                    
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D900FF] via-white to-[#00E5FF] filter drop-shadow-[0_0_10px_rgba(217,0,255,0.5)]">
                {spanText || 'ALCHEMIST'}
            </span>
        </h1>            
    </div>
  );
};

export default CyberpunkHero;