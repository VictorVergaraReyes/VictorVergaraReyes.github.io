import { ExternalLink, Monitor, Smartphone, DollarSign } from 'lucide-react';
import { useState } from 'react';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web Development', 'Mobile Apps'];

  const projects = [
    {
      id: 1,
      title: "Glow app",
      description: "A managment mobile app for schedule in beauty salons",
      category: "Mobile Apps",
      image: "Smartphone",
      technologies: ["React Native", "Supabase", "Stripe"],
      gradient: "from-orange-200 to-pink-200"
    },
    {
      id: 2,
      title: "Barrel Sauna Website",
      description: "A responsive website for a barrel sauna business, featuring product showcases, booking system, and customer testimonials.",
      category: "Web Development",
      image: "social",
      technologies: ["Astro"],
      gradient: "from-blue-200 to-cyan-200"
    },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const getProjectIcon = (category: any) => {
    switch (category) {
      case 'Web Development': return <Monitor className="w-16 h-16 text-gray-400" />;
      case 'Mobile Apps': return <Smartphone className="w-16 h-16 text-gray-400" />;
      default: return <DollarSign className="w-16 h-16 text-gray-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 text-shadow-neon">Projects</h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto font-body">
            Explore a selection of my most <span className="text-secondary">impactful projects</span>, showcasing my skills in full-stack development and vaporwave engineering.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 border border-secondary/30 font-mono tracking-wider transition-all duration-300 ${activeFilter === filter
                  ? 'bg-secondary text-black shadow-[0_0_15px_rgba(0,229,255,0.5)]'
                  : 'bg-surface-dark/50 text-secondary hover:bg-secondary/20 hover:border-secondary'
                } clip-path-slant`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="max-w-sm group glass-panel rounded-lg overflow-hidden hover:shadow-[0_0_25px_rgba(217,0,255,0.2)] transition-all duration-500 transform hover:-translate-y-2 border border-primary/20"
            >
              {/* Project Image Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="relative z-10 p-4 bg-black/40 backdrop-blur-sm rounded-full border border-white/20">
                  {getProjectIcon(project.category)}
                </div>

                {/* Overlay with actions */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 backdrop-blur-[2px]">
                  <button className="p-3 border border-secondary text-secondary hover:bg-secondary hover:text-black transition-all rounded-none clip-path-slant">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>

                {/* Glitch overlay line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-secondary/50 transform -translate-y-full group-hover:animate-scanline"></div>
              </div>

              {/* Project Info */}
              <div className="p-6 relative">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 font-body border-l-2 border-secondary/30 pl-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-surface-dark border border-primary/30 text-primary text-xs font-mono rounded-none"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <button className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 font-display font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_0_10px_rgba(217,0,255,0.3)] hover:shadow-[0_0_20px_rgba(217,0,255,0.6)]">
            View All Projects :: GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;