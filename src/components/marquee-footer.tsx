// MarqueeFooter.tsx
// Barra inferior con texto en movimiento tipo marquesina

interface MarqueeFooterProps {
  messages?: string[];
}

const MarqueeFooter = ({ messages = [] }: MarqueeFooterProps) => {
  const defaultMessages = [
    '/// System Warning: Aesthetic Overload Detected',
    '/// User: Unidentified',
    '/// Location: Cyberspace Sector 7',
    '/// Vaporwave Protocol: Active',
  ];

  const displayMessages = messages.length > 0 ? messages : defaultMessages;

  return (
    <div className="fixed bottom-0 left-0 right-0 h-10 bg-surface-dark border-t border-primary/30 flex items-center overflow-hidden z-20">
      <div className="animate-marquee whitespace-nowrap font-mono text-sm text-primary uppercase tracking-[0.2em] flex gap-12">
        {/* Duplicamos los mensajes para crear el efecto de loop infinito */}
        {[...displayMessages, ...displayMessages].map((message, index) => (
          <span key={index}>{message}</span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeFooter;