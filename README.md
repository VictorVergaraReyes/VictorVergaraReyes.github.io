# Componentes React Cyberpunk/Vaporwave

Componentes de React con Tailwind CSS basados en un diseño cyberpunk/vaporwave.

## 📁 Archivos incluidos

### Configuración
- `tailwind.config.js` - Configuración de Tailwind con colores y animaciones personalizadas
- `cyberpunk-styles.css` - Estilos CSS globales necesarios

### Componentes

1. **BackgroundEffects.jsx** - Efectos de fondo (CRT overlay, grid, scanline)
2. **Navigation.jsx** - Barra de navegación con glassmorphism
3. **HeroSection.jsx** - Sección hero principal completa
4. **MarqueeFooter.jsx** - Barra inferior con texto en movimiento
5. **SideDecorations.jsx** - Decoraciones laterales con texto japonés
6. **Buttons.jsx** - Componentes de botones reutilizables
7. **StatusBadge.jsx** - Badge de estado con indicador animado
8. **GlassPanel.jsx** - Panel con efecto glassmorphism
9. **StatsDisplay.jsx** - Componente de estadísticas
10. **ProjectCard.jsx** - Card de proyecto con efectos 3D
11. **GlitchTitle.jsx** - Título con efecto glitch

## 🚀 Instalación

### 1. Configuración de Tailwind

Copia la configuración de `tailwind.config.js` a tu archivo de configuración existente, fusionando las propiedades:

```javascript
// Agrega estos colores, fuentes y animaciones a tu configuración existente
theme: {
  extend: {
    colors: {
      primary: '#D900FF',
      secondary: '#00E5FF',
      'background-dark': '#050014',
      'surface-dark': '#120526',
      'accent-red': '#FF003C',
    },
    // ... resto de la configuración
  }
}
```

### 2. Estilos CSS Globales

Importa el archivo `cyberpunk-styles.css` en tu archivo CSS principal o en tu componente raíz:

```javascript
import './cyberpunk-styles.css';
```

### 3. Fuentes necesarias

Agrega estas fuentes a tu `index.html` o componente principal:

```html
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=VT323&family=Rajdhani:wght@300;500;700&display=swap" rel="stylesheet" />
```

## 💻 Uso de los componentes

### Ejemplo de uso completo

```jsx
import BackgroundEffects from './components/BackgroundEffects';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import MarqueeFooter from './components/MarqueeFooter';
import SideDecorations from './components/SideDecorations';

function App() {
  const menuItems = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="bg-background-dark text-white min-h-screen">
      <BackgroundEffects />
      <Navigation menuItems={menuItems} />
      <HeroSection />
      <MarqueeFooter />
      <SideDecorations />
    </div>
  );
}
```

### Uso individual de componentes

#### StatusBadge
```jsx
import StatusBadge from './components/StatusBadge';

<StatusBadge 
  status="ONLINE" 
  message="SYSTEM_READY" 
  variant="secondary" 
/>
```

#### Botones
```jsx
import { PrimaryButton, GlitchButton } from './components/Buttons';

<PrimaryButton onClick={() => console.log('clicked')}>
  View Portfolio
</PrimaryButton>

<GlitchButton 
  normalText="Initialize_Contact"
  hoverText="<Send_Signal/>"
  onClick={() => console.log('contact')}
/>
```

#### ProjectCard
```jsx
import ProjectCard from './components/ProjectCard';

<ProjectCard
  imageSrc="/path/to/image.jpg"
  title="MY PROJECT"
  subtitle="FEATURED_WORK"
  progress={85}
  hoverText="VIEW MORE"
  codeSnippet={
    <>
      <span className="text-primary">const</span> reality = <span className="text-accent-red">null</span>;
    </>
  }
/>
```

#### StatsDisplay
```jsx
import StatsDisplay from './components/StatsDisplay';

const stats = [
  { value: '100+', label: 'PROJECTS', color: 'secondary' },
  { value: '5Y', label: 'EXPERIENCE', color: 'primary' },
  { value: '99%', label: 'SATISFACTION', color: 'accent-red' },
];

<StatsDisplay stats={stats} />
```

#### GlassPanel
```jsx
import GlassPanel from './components/GlassPanel';

<GlassPanel borderColor="secondary" hover={true}>
  <div className="p-6">
    Tu contenido aquí
  </div>
</GlassPanel>
```

## 🎨 Personalización

### Colores
Los colores principales están definidos en `tailwind.config.js`:
- `primary`: #D900FF (Magenta neón)
- `secondary`: #00E5FF (Cyan neón)
- `accent-red`: #FF003C (Rojo de acento)

### Fuentes
- `font-display`: Orbitron (títulos)
- `font-mono`: VT323 (código/monospace)
- `font-body`: Rajdhani (texto general)

### Animaciones disponibles
- `animate-glitch`: Efecto glitch
- `animate-pulse-slow`: Pulso lento
- `animate-scanline`: Línea de escaneo
- `animate-marquee`: Texto en movimiento
- `animate-bounce-slow`: Rebote lento

## 📝 Notas importantes

1. **Modo oscuro**: Los componentes están optimizados para modo oscuro. Asegúrate de tener la clase `dark` en tu elemento raíz si usas el modo oscuro de Tailwind.

2. **Responsive**: Todos los componentes son responsive y se adaptan a diferentes tamaños de pantalla.

3. **Efectos de fondo**: El componente `BackgroundEffects` debe estar al mismo nivel que el contenido principal para que los efectos se vean correctamente.

4. **Performance**: Los efectos como el CRT overlay y el grid pueden afectar el rendimiento en dispositivos de gama baja. Considera hacerlos opcionales.

## 🛠️ Dependencias

- React 16.8+ (para hooks)
- Tailwind CSS 3.0+
- Navegador compatible con backdrop-filter (para efectos glass)

## 📄 Licencia

Estos componentes son de uso libre para tu proyecto.