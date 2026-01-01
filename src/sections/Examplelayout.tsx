// ExampleLayout.tsx
// Ejemplo completo de cómo usar todos los componentes juntos

import BackgroundEffects from '../components/BackgroundEffects';
import Navigation from '../components/Navigation';
import HeroSection from '../components/Herosection';
import MarqueeFooter from '../components/marquee-footer';
import SideDecorations from '../components/Sidedecorations';
import GlassPanel from '../components/GlassPanel';
import StatsDisplay from '../components/StatsDisplay';
import ProjectCard from '../components/ProjectCard';
import StatusBadge from '../components/StatusBadge';
import GlitchTitle from '../components/GlitchTitle';
import { PrimaryButton, GlitchButton } from '../components/Buttons';

type StatColor = 'primary' | 'secondary' | 'accent-red';

interface Stat {
  value: string;
  label: string;
  color: StatColor;
}

interface MenuItem {
  label: string;
  href: string;
}

const ExampleLayout: React.FC = () => {
  // Configuración de navegación
  const menuItems: MenuItem[] = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  // Mensajes para el marquee
  const marqueeMessages: string[] = [
    '/// System Warning: Aesthetic Overload Detected',
    '/// User: Authenticated',
    '/// Location: Cyberspace Sector 7',
    '/// Vaporwave Protocol: Active',
  ];

  // Estadísticas personalizadas
  const customStats: Stat[] = [
    { value: '150+', label: 'PROJECTS_COMPLETED', color: 'secondary' },
    { value: '10Y', label: 'EXPERIENCE', color: 'primary' },
    { value: '100%', label: 'CLIENT_SATISFACTION', color: 'accent-red' },
  ];

  return (
    <div className="bg-background-dark text-white min-h-screen relative overflow-x-hidden">
      {/* Efectos de fondo */}
      <BackgroundEffects />
      
      {/* Decoraciones laterales */}
      <SideDecorations 
        leftText="サイバーパンク" 
        rightText="未来は今" 
      />
      
      {/* Navegación */}
      <Navigation menuItems={menuItems} />
      
      {/* Sección Hero */}
      <HeroSection />
      
      {/* Ejemplo de sección adicional con componentes individuales */}
      <section className="relative py-20 px-6 md:px-12 lg:px-20">
        <div className="container mx-auto max-w-6xl">
          {/* Badge de estado */}
          <StatusBadge 
            status="FEATURED" 
            message="NEW_PROJECTS" 
            variant="primary" 
          />
          
          {/* Título de sección */}
          <div className="mt-8 mb-12">
            <GlitchTitle 
              topText="RECENT" 
              bottomText="PROJECTS" 
              useGlitch={false}
            />
          </div>
          
          {/* Grid de proyectos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <ProjectCard
              imageSrc="https://via.placeholder.com/400x500"
              title="CYBER DREAMS"
              subtitle="WEB_DESIGN"
              progress={100}
              hoverText="VIEW PROJECT"
            />
            
            <ProjectCard
              imageSrc="https://via.placeholder.com/400x500"
              title="NEON NIGHTS"
              subtitle="UI/UX_DESIGN"
              progress={85}
              hoverText="EXPLORE"
              codeSnippet={
                <>
                  <span className="text-primary">const</span> future = <span className="text-secondary">'now'</span>;
                </>
              }
            />
          </div>
          
          {/* Panel de información */}
          <GlassPanel borderColor="secondary" hover={true} className="p-8">
            <h3 className="font-display text-3xl font-bold text-white mb-4">
              ABOUT <span className="text-secondary">ME</span>
            </h3>
            <p className="font-body text-gray-300 leading-relaxed mb-6">
              I'm a digital artist specializing in cyberpunk aesthetics and immersive web experiences. 
              My work blends cutting-edge technology with retro-futuristic design to create unique digital landscapes.
            </p>
            
            {/* Estadísticas */}
            <StatsDisplay stats={customStats} />
            
            {/* Botones de acción */}
            <div className="flex gap-4 mt-8">
              <PrimaryButton onClick={(): void => console.log('Hire clicked')}>
                Hire Me
              </PrimaryButton>
              <GlitchButton
                normalText="Download_CV"
                hoverText="<Get_Resume/>"
                onClick={(): void => console.log('CV download')}
              />
            </div>
          </GlassPanel>
        </div>
      </section>
      
      {/* Footer con marquee */}
      <MarqueeFooter messages={marqueeMessages} />
    </div>
  );
};

export default ExampleLayout;