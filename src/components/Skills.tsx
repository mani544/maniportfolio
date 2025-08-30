import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Brain, Globe, BarChart, Video } from 'lucide-react';

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-blue-600" size={32} />,
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Java", level: 80 },
        { name: "HTML/CSS", level: 88 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      title: "Data Science & Analytics",
      icon: <Database className="text-purple-600" size={32} />,
      skills: [
        { name: "Power BI", level: 92 },
        { name: "Excel Advanced", level: 95 },
        { name: "Pandas", level: 85 },
        { name: "NumPy", level: 82 },
        { name: "Data Visualization", level: 88 }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="text-green-600" size={32} />,
      skills: [
        { name: "TensorFlow", level: 75 },
        { name: "Scikit-learn", level: 80 },
        { name: "Natural Language Processing", level: 70 },
        { name: "Computer Vision", level: 65 },
        { name: "Deep Learning", level: 72 }
      ]
    },
    {
      title: "Web Development",
      icon: <Globe className="text-red-600" size={32} />,
      skills: [
        { name: "React", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 78 },
        { name: "MongoDB", level: 75 },
        { name: "REST APIs", level: 82 }
      ]
    },
    {
      title: "Analytics Tools",
      icon: <BarChart className="text-orange-600" size={32} />,
      skills: [
        { name: "Google Analytics", level: 85 },
        { name: "YouTube Analytics", level: 90 },
        { name: "Tableau", level: 75 },
        { name: "Excel VBA", level: 80 },
        { name: "Statistical Analysis", level: 78 }
      ]
    },
    {
      title: "Content Creation",
      icon: <Video className="text-pink-600" size={32} />,
      skills: [
        { name: "Video Editing", level: 88 },
        { name: "Content Strategy", level: 90 },
        { name: "YouTube Optimization", level: 92 },
        { name: "Technical Writing", level: 85 },
        { name: "Public Speaking", level: 82 }
      ]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive toolkit spanning development, data science, and content creation
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${categoryIndex * 150}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-white p-3 rounded-xl shadow-sm mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 150) + (skillIndex * 100)}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Badges */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Python', 'JavaScript', 'React', 'Node.js', 'Power BI', 'Excel',
                'TensorFlow', 'MongoDB', 'SQL', 'HTML/CSS', 'Java', 'Git'
              ].map((tech, index) => (
                <span
                  key={index}
                  className={`bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full font-medium transition-all duration-500 hover:scale-105 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: `${800 + (index * 100)}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;