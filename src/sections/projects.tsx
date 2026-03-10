import { useState } from 'react';
import CyberpunkProjectCard from '../components/CyberpunkProjectCard';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web Development', 'Mobile Apps'];

  const projects = [
    {
      id: 1,
      title: "GLOW_APP",
      description: "A management mobile app for schedule in beauty salons with real-time booking system.",
      category: "Mobile Apps",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIgEPfwgTeESCSy05TbZL9TrIVUY0rpZn5onIWLBOC9g6rqKZe1-cuZkBXUu2ZPDWiCcOGa14nvTCWrndpELyfb-hUI-PxskhQnxYx74Tro3AFcmzDzHsaHvLeNVSquo6Io3q8WPz3ndncAbk6C7jMZoFFD0SLhV-ceIxypJqZikwXH_x-XYBYg-R6Gg96Jxv-a0hois-_CgHB7rh-UbLDMy_VcFDC_2j3xLBkOWIPXL4dmupPi5UBN_bWr2VzaUVkxblRb3NeU-E",
      imageAlt: "Mobile app interface with neon aesthetic",
      version: "VER. 2.0",
      categoryIcon: "smartphone",
      categoryLabel: "MOBILE_APPS",
      technologies: ["React Native", "Supabase", "Stripe"],
    },
    {
      id: 2,
      title: "BARREL_SAUNA",
      description: "A responsive website for a barrel sauna business, featuring product showcases and booking system.",
      category: "Web Development",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsLqR5dMyA7LKgAr4fFCkbG3-AlDEaDA9JmapDLixE7KZlE5CDcUVS9m01rup1zkNM-Hmo4ndiLfbwQ_EAWfbg8WzFiMeQohXHxj4yHA7w-Cs0a2a7u7lQhXVo3zdhAtgp0JdiVIGpppUxPfTsy3ug5ik-oQgfiGhWtEzCw2gdQbB7ngU-ZC6-YuBhantUqpHC9xlxsZ3eqmskSkWLkGCAETV-kY7Bi1gyEqCg7QDRcwbA3vdy81ViEtv1WpLDRVp9tbKoDgtAlnw",
      imageAlt: "Responsive website with modern design",
      version: "LIVE",
      categoryIcon: "public",
      categoryLabel: "WEB_DEVELOPMENT",
      technologies: ["Astro"],
    },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 text-shadow-neon">Projects</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto font-body">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <CyberpunkProjectCard
              key={project.id}
              imageUrl={project.imageUrl}
              imageAlt={project.imageAlt}
              version={project.version}
              category={project.categoryLabel}
              categoryIcon={project.categoryIcon}
              title={project.title}
              description={project.description}
              tags={project.technologies}
            />
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