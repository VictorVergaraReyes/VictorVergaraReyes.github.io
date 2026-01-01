const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-secondary/5 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 text-shadow-neon">
            INITIALIZE <span className="text-secondary">CONTACT</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-mono">
            Available for freelance missions. Transmit your data if you require assistance.
          </p>
        </div>

        <div className="max-w-lg mx-auto glass-panel p-8 rounded-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>

          <form className="grid grid-cols-1 gap-y-6">
            <div>
              <label htmlFor="name" className="sr-only">Full name</label>
              <input type="text" name="name" id="name" autoComplete="name" className="block w-full py-3 px-4 bg-background-dark/50 border border-secondary/30 rounded text-white placeholder-gray-500 focus:ring-secondary focus:border-secondary focus:ring-1 transition-all" placeholder="IDENTIFIER [Name]" />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" className="block w-full py-3 px-4 bg-background-dark/50 border border-secondary/30 rounded text-white placeholder-gray-500 focus:ring-secondary focus:border-secondary focus:ring-1 transition-all" placeholder="COMM_LINK [Email]" />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea id="message" name="message" rows={4} className="block w-full py-3 px-4 bg-background-dark/50 border border-secondary/30 rounded text-white placeholder-gray-500 focus:ring-secondary focus:border-secondary focus:ring-1 transition-all" placeholder="DATA_PACKET [Message]"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full py-3 px-6 border border-secondary text-secondary bg-transparent hover:bg-secondary hover:text-black font-mono font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_0_15px_rgba(0,229,255,0.2)] hover:shadow-[0_0_25px_rgba(0,229,255,0.5)]">
                &lt;TRANSMIT_DATA/&gt;
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
