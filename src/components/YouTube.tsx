import React, { useEffect, useRef, useState } from 'react';
import { Youtube, Play, Users, Eye, Clock, TrendingUp } from 'lucide-react';

const YouTubeSection = () => {
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

  const videos = [
    {
      title: "Complete Python Tutorial for Beginners",
      views: "45K",
      duration: "2:30:15",
      thumbnail: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
      description: "Master Python programming from scratch with practical examples and projects."
    },
    {
      title: "Data Science Career Roadmap 2024",
      views: "28K",
      duration: "25:40",
      thumbnail: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
      description: "Complete guide to starting your data science career with industry insights."
    },
    {
      title: "Power BI Dashboard Tutorial",
      views: "62K",
      duration: "45:20",
      thumbnail: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
      description: "Build professional dashboards with Power BI step by step."
    },
    {
      title: "Student Interview Preparation Guide",
      views: "18K",
      duration: "35:15",
      thumbnail: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      description: "Ace your tech interviews with these proven strategies and tips."
    }
  ];

  const stats = [
    { label: "Subscribers", value: "25K+", icon: <Users className="text-red-600" size={24} /> },
    { label: "Total Views", value: "500K+", icon: <Eye className="text-blue-600" size={24} /> },
    { label: "Videos", value: "120+", icon: <Play className="text-green-600" size={24} /> },
    { label: "Watch Time", value: "50K+ hrs", icon: <Clock className="text-purple-600" size={24} /> },
  ];

  return (
    <section id="youtube" ref={sectionRef} className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Youtube className="text-red-600 mr-3" size={48} />
              <h2 className="text-4xl md:text-5xl font-bold">
                Tech Innovators Network
              </h2>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Empowering students with coding tutorials, career guidance, and industry insights
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto"></div>
          </div>

          {/* Channel Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex justify-center mb-3">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Featured Videos */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">Featured Content</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className={`bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-700 transition-all duration-500 group ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${300 + (index * 200)}ms` }}
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play className="text-white bg-red-600 rounded-full p-3" size={48} />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-sm px-2 py-1 rounded">
                      {video.duration}
                    </div>
                    <div className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded">
                      {video.views} views
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-3 group-hover:text-red-400 transition-colors">
                      {video.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {video.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Channel Topics */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">Content Categories</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gray-800 rounded-2xl hover:bg-gray-700 transition-colors duration-300">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play size={28} />
                </div>
                <h4 className="text-xl font-bold mb-3">Coding Tutorials</h4>
                <p className="text-gray-400">
                  Step-by-step programming tutorials covering Python, JavaScript, and more
                </p>
              </div>
              
              <div className="text-center p-8 bg-gray-800 rounded-2xl hover:bg-gray-700 transition-colors duration-300">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp size={28} />
                </div>
                <h4 className="text-xl font-bold mb-3">Career Guidance</h4>
                <p className="text-gray-400">
                  Industry insights, interview tips, and career roadmaps for tech professionals
                </p>
              </div>
              
              <div className="text-center p-8 bg-gray-800 rounded-2xl hover:bg-gray-700 transition-colors duration-300">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={28} />
                </div>
                <h4 className="text-xl font-bold mb-3">Student Success</h4>
                <p className="text-gray-400">
                  Study tips, project showcases, and motivation for computer science students
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-4">Join the Community</h3>
            <p className="text-xl mb-8 opacity-90">
              Subscribe to stay updated with the latest tutorials and tech insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <Youtube className="mr-2" size={20} />
                Subscribe Now
              </a>
              <a
                href="#"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-red-600 transition-colors"
              >
                Watch Latest Video
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;