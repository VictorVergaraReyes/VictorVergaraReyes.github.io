import { Code, Database, HardDrive, GitBranch, Briefcase, User } from 'lucide-react';

const ResumeSection = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8 text-[#273677]" />,
      title: "Front-end",
      technologies: "React, React Native, Next, JavaScript, TypeScript"
    },
    {
      icon: <Database className="w-8 h-8 text-[#273677]" />,
      title: "Back-end",
      technologies: "Node.js, Express"
    },
    {
      icon: <HardDrive className="w-8 h-8 text-[#273677]" />,
      title: "Databases",
      technologies: "MySQL, PostgreSQL"
    },
    {
      icon: <GitBranch className="w-8 h-8 text-[#273677]" />,
      title: "Version Control",
      technologies: "Git, GitHub"
    }
  ];

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Drodat inc.",
      period: "april 2025 - august 2025",
      icon: <Briefcase className="w-5 h-5 text-[#273677]" />
    },
    {
      title: "Front end Developer",
      company: "Kapital Bank",
      period: "june 2024 - april 2025",
      icon: <Briefcase className="w-5 h-5 text-[#273677]" />
    },
    {
      title: "Front end Developer",
      company: "Ahorra Seguros",
      period: "march 2023 - june 2024",
      icon: <Briefcase className="w-5 h-5 text-[#273677]" />
    },
  ];

  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Avatar Placeholder */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative w-80 h-80 bg-surface-dark rounded-2xl flex items-center justify-center border border-white/10 overflow-hidden">
                <User className="w-32 h-32 text-secondary/80" />

                {/* Decorative cyber elements */}
                <div className="absolute top-0 left-0 w-full h-full bg-cyber-grid opacity-30"></div>
                <div className="absolute top-2 right-2 w-20 h-1 bg-secondary/50"></div>
                <div className="absolute bottom-2 left-2 w-20 h-1 bg-primary/50"></div>

                {/* Glitch Overlay on hover */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-100"></div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-surface-dark border border-secondary/30 rounded text-secondary font-mono text-xs tracking-widest mb-2">
              SYSTEM :: ID_VERIFIED
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 text-shadow-neon">
              Hi, I'm Vic, a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Full Stack Developer</span>
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed font-body border-l-2 border-primary/50 pl-4 bg-white/5 py-2">
              I'm a passionate full stack developer with a focus on creating innovative and user-friendly web applications. With a strong foundation in both front-end and back-end technologies, I enjoy tackling complex challenges and delivering high-quality solutions. My goal is to build impactful software that makes a difference.
            </p>

            <button className="bg-primary hover:bg-white text-white hover:text-primary px-8 py-3 rounded-none font-display font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_0_15px_rgba(217,0,255,0.4)] hover:shadow-[0_0_25px_rgba(217,0,255,0.7)] clip-path-slant" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects
            </button>
          </div>
        </div>

        {/* Skills Section */}
        <div id="skills" className="mb-20">
          <h3 className="text-3xl font-display font-bold text-white mb-12 text-center text-shadow-neon">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="glass-panel p-6 rounded-lg hover:border-secondary/50 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 w-16 h-16 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform"></div>

                <div className="flex flex-col items-center text-center space-y-4 relative z-10">
                  <div className="group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]">
                    {skill.icon}
                  </div>
                  <h4 className="text-xl font-display font-bold text-white group-hover:text-secondary transition-colors">{skill.title}</h4>
                  <p className="text-sm text-gray-300 font-mono leading-relaxed">{skill.technologies}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div id="experience" className="w-full" >
          <h3 className="text-3xl font-display font-bold text-white mb-12 text-center text-shadow-neon">Experience</h3>
          <div className="space-y-8 max-w-3xl mx-auto py-4">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 glass-panel rounded-lg hover:border-primary/50 transition-all duration-300 relative group"
              >
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="flex-shrink-0 w-12 h-12 bg-surface-dark border border-white/10 rounded-full flex items-center justify-center text-secondary shadow-[0_0_10px_rgba(0,229,255,0.2)]">
                  {exp.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-display font-bold text-white mb-1">{exp.title}</h4>
                  <p className="text-primary font-mono font-medium mb-1 tracking-wider">{exp.company}</p>
                  <p className="text-gray-400 text-sm font-mono bg-black/20 inline-block px-2 py-1 rounded">{exp.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;