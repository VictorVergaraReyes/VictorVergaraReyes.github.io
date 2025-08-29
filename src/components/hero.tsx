import { ArrowRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

type LetterByLetterTypingProps = {
  text: string;
  delay?: number;
};

const LetterByLetterTyping = ({ text, delay = 0 }: LetterByLetterTypingProps) => {
    const letters = text.split('');
    
    return (
      <div className="inline-block">
        {letters.map((letter: string, index: number) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: delay + index * 0.1,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 2
            }}
            className="inline-block"
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </div>
    );
  };

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden min-w-full bg-gray-900">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#1a2332] to-[#273677]">
        {/* Animated gradient overlay for more depth */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#273677]/20 to-[#3d4a8a]/30 animate-pulse"></div>
        
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-32 right-32 w-24 h-24 border border-white/15 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/10 rounded-full"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight">
          {/* <span className="block">Victor Vergara</span> */}
          <LetterByLetterTyping text="Victor Vergara" delay={0.3} />
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 font-light tracking-wide">
          Full Stack Developer
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Contact Button */}
          <button className="group bg-[#273677] hover:bg-[#1e2a5a] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2 min-w-[160px] justify-center">
            <Mail className="w-5 h-5" />
            Contact
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          {/* View Work Button */}
          <button className="group bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2 min-w-[160px] justify-center border border-gray-600 hover:border-gray-500">
            View Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements for Visual Interest */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-white/20 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-20 w-1 h-1 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white/25 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
      </div>
    </section>
  );
};

export default HeroSection;