import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com",
      live: "https://example.com",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, team workspaces, and advanced filtering capabilities.",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Socket.io"],
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com",
      live: "https://example.com",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather application with location-based forecasts, historical data visualization, and customizable alerts.",
      technologies: ["React", "Tailwind CSS", "Weather API"],
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    },
    {
      title: "Portfolio CMS",
      description: "Content management system specifically designed for creative professionals to showcase their work with customizable themes.",
      technologies: ["Next.js", "Supabase", "Tailwind CSS"],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    },
    {
      title: "Social Media Analytics",
      description: "Analytics dashboard for social media metrics with data visualization, export capabilities, and automated reporting.",
      technologies: ["React", "D3.js", "Express", "MySQL"],
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    },
    {
      title: "Fitness Tracker",
      description: "Mobile-responsive fitness tracking application with workout logs, progress charts, and personalized recommendations.",
      technologies: ["React Native", "Firebase", "Redux"],
      image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary-bg">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-accent-1 mx-auto mb-6"></div>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-primary-bg rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group border border-secondary-bg"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-accent-1 rounded-full text-primary-bg hover:bg-accent-2 transition-colors duration-300"
                    aria-label="View on GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-accent-1 rounded-full text-primary-bg hover:bg-accent-2 transition-colors duration-300"
                    aria-label="View live demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-accent-1 text-primary-bg text-xs font-semibold rounded-full">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-3">
                  {project.title}
                </h3>
                <p className="text-text-secondary mb-4 text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-secondary-bg text-text-secondary rounded-full text-xs md:text-sm font-medium hover:bg-accent-1 hover:text-primary-bg transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-accent-1 text-accent-1 font-semibold rounded-lg hover:bg-accent-1 hover:text-primary-bg transition-colors"
          >
            View More Projects
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
