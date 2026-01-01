const BackgroundEffects = () => {
    return (
        <>
            <div className="fixed inset-0 pointer-events-none z-50 crt-overlay opacity-30"></div>
            <div className="fixed inset-0 pointer-events-none z-40 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-[10px] w-full animate-scanline opacity-20"></div>
            <div className="fixed inset-0 bg-cyber-grid bg-[length:40px_40px] opacity-20 pointer-events-none perspective-[500px] transform-style-3d"></div>

            {/* Side Japanese Text - Left */}
            <div className="fixed top-1/2 left-4 -translate-y-1/2 hidden xl:flex flex-col gap-8 pointer-events-none z-0 opacity-40">
                <span className="writing-vertical text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-primary to-transparent font-display">
                    サイバーパンク
                </span>
            </div>

            {/* Side Japanese Text - Right */}
            <div className="fixed top-1/2 right-4 -translate-y-1/2 hidden xl:flex flex-col gap-8 pointer-events-none z-0 opacity-40">
                <span className="writing-vertical text-4xl font-black text-transparent bg-clip-text bg-gradient-to-t from-secondary to-transparent font-display">
                    未来は今
                </span>
            </div>
        </>
    );
};

export default BackgroundEffects;
