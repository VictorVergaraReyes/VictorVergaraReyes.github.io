// tailwind.config.js
// Configuración de Tailwind para el tema cyberpunk/vaporwave

module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D900FF', // Neon Magenta
        secondary: '#00E5FF', // Neon Cyan
        'background-light': '#f3f4f6',
        'background-dark': '#050014', // Deep dark purple/black
        'surface-dark': '#120526',
        'accent-red': '#FF003C',
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        mono: ['VT323', 'monospace'],
        body: ['Rajdhani', 'sans-serif'],
      },
      backgroundImage: {
        'cyber-grid': "linear-gradient(to right, rgba(217, 0, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(217, 0, 255, 0.1) 1px, transparent 1px)",
        'vignette': 'radial-gradient(circle, transparent 50%, #050014 100%)',
      },
      animation: {
        'glitch': 'glitch 2s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
        'marquee': 'marquee 20s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      }
    },
  },
  plugins: [],
}