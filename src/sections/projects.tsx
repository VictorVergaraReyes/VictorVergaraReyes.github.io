import { ExternalLink, Monitor, Smartphone, BarChart3, DollarSign } from 'lucide-react';
import { useState } from 'react';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web Development', 'Mobile Apps', 'Data Science'];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with user authentication, product management, and payment integration.",
      category: "Web Development",
      image: "ecommerce",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      gradient: "from-orange-200 to-pink-200"
    },
    {
      id: 2,
      title: "Social Media App",
      description: "A social media application with user profiles, posts, and real-time updates.",
      category: "Mobile Apps", 
      image: "social",
      technologies: ["React Native", "Firebase", "Redux"],
      gradient: "from-blue-200 to-cyan-200"
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "A dashboard for analyzing large datasets and visualizing key metrics.",
      category: "Data Science",
      image: "analytics",
      technologies: ["Python", "Django", "PostgreSQL", "D3.js"],
      gradient: "from-green-200 to-teal-200"
    },
    {
      id: 4,
      title: "Finance Tracker",
      description: "A personal finance tracker for managing budgets, expenses, and investments.",
      category: "Web Development", 
      image: "finance",
      technologies: ["Vue.js", "Express", "MySQL"],
      gradient: "from-purple-200 to-pink-200"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getProjectIcon = (category:any) => {
    switch(category) {
      case 'Web Development': return <Monitor className="w-16 h-16 text-gray-400" />;
      case 'Mobile Apps': return <Smartphone className="w-16 h-16 text-gray-400" />;
      case 'Data Science': return <BarChart3 className="w-16 h-16 text-gray-400" />;
      default: return <DollarSign className="w-16 h-16 text-gray-400" />;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Explore a selection of my most impactful projects, showcasing my skills in full-stack development and innovative problem-solving.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-[#273677] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl hover:border-[#273677]/20 transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Project Image Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                {getProjectIcon(project.category)}
                
                {/* Mockup Elements */}
                <div className="absolute inset-4 bg-white/90 rounded-lg shadow-lg flex flex-col">
                  <div className="h-3 bg-gray-200 rounded-t-lg flex items-center px-2 space-x-1">
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 p-3 space-y-2">
                    <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                    <div className="grid grid-cols-2 gap-1 mt-3">
                      <div className="h-8 bg-[#273677]/20 rounded"></div>
                      <div className="h-8 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>

                {/* Overlay with actions */}
                <div className="absolute inset-0 bg-[#273677]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <button className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </button>
                  <button className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                    
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#273677] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#273677]/10 text-[#273677] text-xs font-medium rounded-full"
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
          <button className="bg-[#273677] hover:bg-[#1e2a5a] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            View All Projects on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;