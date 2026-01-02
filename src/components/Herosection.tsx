import { useDarkMode } from "../context/DarkModeContext";
import CyberpunkHero from "./Cyberpunkhero";

const HeroSection = () => {
  const { isDark } = useDarkMode();

  return (
    <main className="relative min-h-screen flex items-center pt-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Contenido de texto */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left relative">
          {/* Badge de estado */}
          <div className="inline-flex items-center gap-2 self-start px-3 py-1 bg-surface-dark/50 border border-secondary/30 rounded text-secondary font-mono text-sm tracking-widest backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
            </span>
            ONLINE :: SYSTEM_READY
          </div>

          {/* Título principal con efecto chromatic aberration */}
          {/* <h1 className="text-6xl md:text-8xl font-display font-black leading-tight mb-2 tracking-tighter">
          <span className={`block ${isDark ? 'dark-chromatic-aberration' : 'chromatic-aberration'}`} data-text="VICTOR">
              VICTOR
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary filter drop-shadow-[0_0_10px_rgba(217,0,255,0.5)]">
              VERGARA
            </span>            
          </h1>
          <h1 className="text-6xl md:text-8xl font-display font-black leading-tight mb-2 tracking-tighter" data-text="REALITY_SHIFT">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary filter drop-shadow-[0_0_10px_rgba(217,0,255,0.5)]">ALCHEMIST</span>
          </h1> */}

          <CyberpunkHero spanText="VICTOR" />
          <CyberpunkHero spanText="VERGARA" />

          {/* Descripción */}
          <p className="text-lg md:text-xl text-purple-500 dark:text-gray-600 font-body max-w-2xl leading-relaxed pl-6 py-2 bg-gradient-to-r from-accent-red/10 to-transparent">
            Crafting immersive web experiences at the intersection of design and code.
            Specializing in <span className="text-secondary font-bold">vaporwave aesthetics</span> and next-gen
            interfaces.
            Let's break the simulation together.
          </p>

          {/* Botones CTA */}
          <div className="flex flex-wrap gap-4 mt-8">
            <button className="relative px-8 py-4 bg-primary text-white font-display font-bold text-lg tracking-wider uppercase group overflow-hidden">
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center gap-2">
                View Portfolio
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            
            <button className="px-8 py-4 bg-transparent border border-white/20 dark:border-white/20 text-gray-800 dark:text-white font-mono text-lg tracking-wider uppercase hover:bg-white/5 hover:border-secondary hover:text-secondary transition-all duration-300 group">
              <span className="group-hover:hidden">Initialize_Contact</span>
              <span className="hidden group-hover:inline">&lt;Send_Signal/&gt;</span>
            </button>
          </div>

          {/* Estadísticas */}
          <div className="mt-12 flex gap-8 font-mono text-sm text-gray-500 dark:text-gray-400">
            <div>
              <span className="block text-2xl text-secondary font-bold">98%</span>
              SYNC_RATE
            </div>
            <div>
              <span className="block text-2xl text-primary font-bold">404</span>
              REALITY_ERRORS
            </div>
            <div>
              <span className="block text-2xl text-accent-red font-bold">24/7</span>
              UPTIME
            </div>
          </div>
        </div>

        {/* Imagen/Card del proyecto */}
        <div className="lg:col-span-5 relative">
          <ProjectCard />
        </div>
      </div>
    </main>
  );
};

// Componente interno del card de proyecto
const ProjectCard = () => {
  return (
    <div className="relative w-full aspect-[4/5] max-w-md mx-auto perspective-1000">
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
            alt="Cyberpunk neon city figure"
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 mix-blend-screen"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB623pk0iv8oFlAlTrWqpLRaMpGLnROsgIhBCaxo-oxxdHqvFcp_EQDjvq1Oli8SbKEOD-ZycibGfPOZEM1lNCuDYhKRtmo4ZVLmYQH2ev_wVtnnjTqYrcbHBwc_fo2-c7wFrV3tMIBcp5Xqx9bU5NLdOdomIkMcX_Q7yitDPd765nkXqA8oP8RNFhTHwxuQxVEO_Yv5fZ2hjF1NXXl-yCZEW-Tratd8N1NvUgyaHeQwXMSbY3nKDr7O_H50TYFAj5DLR0J2BpSlQ"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-secondary/20 mix-blend-overlay" />
          <div className="absolute bottom-6 left-6 font-display font-bold text-4xl text-white mix-blend-difference opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            WAKE UP
          </div>
        </div>

        {/* Footer del card */}
        <div className="p-4 border-t border-primary/20 bg-surface-dark/80">
          <div className="font-mono text-xs text-secondary mb-1">CURRENT_PROJECT</div>
          <div className="font-display font-bold text-white text-lg">NEON GENESIS</div>
          <div className="w-full bg-gray-700 h-1 mt-3 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-secondary w-3/4 h-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* Código flotante */}
      <div className="absolute -bottom-6 -right-4 glass-panel p-4 rounded border border-secondary/30 hidden md:block animate-bounce-slow">
        <code className="font-mono text-xs text-secondary">
          <span className="text-primary">const</span> reality = <span className="text-accent-red">null</span>;<br />
          <span className="text-primary">while</span>(true) {'{'}<br />
          {'  '}dream();<br />
          {'}'}
        </code>
      </div>
    </div>
  );
};

export default HeroSection;