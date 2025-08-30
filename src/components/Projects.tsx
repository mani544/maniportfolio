import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, BarChart3, Brain, Globe, TrendingUp } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Sales Analytics Dashboard",
      description: "Interactive Power BI dashboard analyzing sales trends, customer behavior, and revenue forecasting with real-time data integration.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
      tech: ["Power BI", "Excel", "SQL", "Python"],
      icon: <BarChart3 className="text-blue-600" size={32} />,
      github: "#",
      demo: "#",
      category: "Data Science"
    },
    {
      title: "AI-Powered Content Analyzer",
      description: "Machine learning tool that analyzes YouTube content performance, suggests optimization strategies, and predicts viral potential.",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg",
      tech: ["Python", "TensorFlow", "Pandas", "Streamlit"],
      icon: <Brain className="text-purple-600" size={32} />,
      github: "#",
      demo: "#",
      category: "AI/ML"
    },
    {
      title: "Student Portfolio Platform",
      description: "Full-stack web application helping students showcase their projects, skills, and achievements with integrated blog functionality.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      icon: <Globe className="text-green-600" size={32} />,
      github: "#",
      demo: "#",
      category: "Web Development"
    },
    {
      title: "YouTube Analytics Tracker",
      description: "Comprehensive analytics tool tracking channel growth, engagement metrics, and content performance with automated reporting.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
      tech: ["JavaScript", "Chart.js", "YouTube API", "Firebase"],
      icon: <TrendingUp className="text-red-600" size={32} />,
      github: "#",
      demo: "#",
      category: "Analytics"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore some of my recent work in data science, web development, and AI innovation
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    {project.icon}
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <Github size={18} />
                        <span className="text-sm">Code</span>
                      </a>
                      <a
                        href={project.demo}
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <ExternalLink size={18} />
                        <span className="text-sm">Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              <Github className="mr-2" size={20} />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;