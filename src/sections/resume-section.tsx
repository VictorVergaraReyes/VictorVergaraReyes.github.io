import { Code, Database, HardDrive, GitBranch, Briefcase, User } from 'lucide-react';

const ResumeSection = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8 text-[#273677]" />,
      title: "Front-end",
      technologies: "React, React Native, Next, HTML, CSS, JavaScript, TypeScript"
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Avatar Placeholder */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-[#273677] to-[#3d4a8a] rounded-2xl flex items-center justify-center shadow-2xl">
                <User className="w-32 h-32 text-white/80" />
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#5a6bb8] rounded-full opacity-70"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-[#3d4a8a] rounded-full opacity-60"></div>
                <div className="absolute top-1/4 -right-8 w-4 h-4 bg-white/30 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hi, I'm Alex, a Full Stack Developer
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate full stack developer with a focus on creating innovative and user-friendly web applications. With a strong foundation in both front-end and back-end technologies, I enjoy tackling complex challenges and delivering high-quality solutions. My goal is to build impactful software that makes a difference.
            </p>

            <button className="bg-[#273677] hover:bg-[#1e2a5a] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              View Projects
            </button>
          </div>
        </div>

        {/* Skills Section */}
        <div id="skills" className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl hover:border-[#273677]/20 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">{skill.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{skill.technologies}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div id="experience" className="w-full" >
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Experience</h3>
          <div className="space-y-8 max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  {exp.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">{exp.title}</h4>
                  <p className="text-[#273677] font-medium mb-1">{exp.company}</p>
                  <p className="text-gray-600 text-sm">{exp.period}</p>
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