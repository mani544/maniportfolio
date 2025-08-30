import React, { useEffect, useRef, useState } from 'react';
import { Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react';

const Blog = () => {
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

  const blogPosts = [
    {
      title: "The Future of AI in Education: Transforming Learning for Students",
      excerpt: "Explore how artificial intelligence is revolutionizing education, from personalized learning paths to automated assessment systems, and what it means for the next generation of learners.",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "AI & Technology",
      author: "Mani Chokkara",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg",
      tags: ["AI", "Education", "Technology", "Future"]
    },
    {
      title: "Data Science Career Guide: From Student to Professional",
      excerpt: "A comprehensive roadmap for computer science students looking to break into data science, including essential skills, projects, and industry insights from my own journey.",
      date: "March 10, 2024",
      readTime: "12 min read",
      category: "Career",
      author: "Mani Chokkara",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
      tags: ["Data Science", "Career", "Students", "Guide"]
    },
    
    
    {
      title: "YouTube Content Creation for Tech Educators: Lessons Learned",
      excerpt: "Insights from growing Tech Innovators Network to 25K+ subscribers, including content strategy, audience engagement, and monetization tips for educational channels.",
      date: "February 20, 2024",
      readTime: "7 min read",
      category: "Content Creation",
      author: "Mani Chokkara",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      tags: ["YouTube", "Content Creation", "Education", "Growth"]
    },
    {
      title: "Essential Excel Skills Every Data Analyst Needs",
      excerpt: "Master advanced Excel techniques including pivot tables, VBA automation, and statistical functions that will set you apart in data analysis roles.",
      date: "February 15, 2024",
      readTime: "9 min read",
      category: "Tutorial",
      author: "Mani Chokkara",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      tags: ["Excel", "Data Analysis", "Tutorial", "Skills"]
    }
  ];

  const categories = ["All", "AI & Technology", "Career", "Programming", "Content Creation"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <section id="blog" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tech Blog & Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Latest thoughts on technology, programming, career development, and industry trends
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src={filteredPosts[0]?.image}
                    alt={filteredPosts[0]?.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 text-white">
                  <div className="flex items-center text-blue-200 text-sm mb-4">
                    <Calendar size={16} className="mr-2" />
                    {filteredPosts[0]?.date}
                    <Clock size={16} className="ml-4 mr-2" />
                    {filteredPosts[0]?.readTime}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                    {filteredPosts[0]?.title}
                  </h3>
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    {filteredPosts[0]?.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {filteredPosts[0]?.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                  >
                    Read Full Article
                    <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <article
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${400 + (index * 150)}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar size={14} className="mr-2" />
                    {post.date}
                    <Clock size={14} className="ml-4 mr-2" />
                    {post.readTime}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span key={tagIndex} className="flex items-center bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                        <Tag size={10} className="mr-1" />
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="text-xs text-gray-500">+{post.tags.length - 2}</span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <User size={14} className="mr-2" />
                      {post.author}
                    </div>
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
            <p className="text-xl mb-8 opacity-90">
              Get the latest tech insights and tutorials delivered to your inbox
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your mail here"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;