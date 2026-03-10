// SideDecorations.jsx
// Elementos decorativos laterales con texto japonés vertical

const SideDecorations = ({ leftText = 'サイバーパンク', rightText = '未来は今' }) => {
  return (
    <>
      {/* Decoración izquierda */}
      <div className="fixed top-1/2 left-4 -translate-y-1/2 hidden xl:flex flex-col gap-8 pointer-events-none z-0 opacity-40">
        <span className="writing-vertical text-4xl font-black text-purple-500 dark:text-gray-600 bg-clip-text bg-gradient-to-b from-primary to-transparent font-display">
          {leftText}
        </span>
      </div>

      {/* Decoración derecha */}
      <div className="fixed top-1/2 right-4 -translate-y-1/2 hidden xl:flex flex-col gap-8 pointer-events-none z-0 opacity-40">
        <span className="writing-vertical text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary filter drop-shadow-[0_0_10px_rgba(217,0,255,0.5)]">
          {rightText}
        </span>
      </div>
    </>
  );
};

export default SideDecorations;