import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Target, Heart, Lightbulb } from 'lucide-react';


const About = () => {
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

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Profile Image */}
<div className="relative">
  <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden">
    <img
      src="C:\Users\BH.KOWSHIK VARMA\Downloads\WhatsApp Image 2025-09-09 at 9.27.09 PM.jpeg"
      alt="Mani Chokkara"
      className="w-full h-full object-cover"
    />
  </div>
</div>

   

            {/* About Content */}
            <div className="space-y-6">
              <h4 className="text-3xl font-bold text-gray-900 mb-4">
                TECH INNOVATOR & DATA ANALYST
              </h4>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Currently contributing to GradXpert as a Content Researcher, utilizing Python, LangChain, and Streamlit to deliver actionable insights derived from data. Academic pursuits at Godavari Global University in B.Tech Computer Science & Data Science reinforce this professional role, fostering a strong foundation in analytics and visualization. 
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Collaborated with Accenture and Tata Group through virtual projects, analyzing datasets and creating impactful visual presentations to address business challenges. Motivated to harness AI and data-driven solutions, with aspirations to drive innovation and strategic impact in tech industries.
              </p>

              {/* Key Points */}
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <GraduationCap className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Education</h4>
                    <p className="text-gray-600">Computer Science Student</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Target className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Focus</h4>
                    <p className="text-gray-600">Data Science & GEN-AI/ML</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <Heart className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Passion</h4>
                    <p className="text-gray-600">Teaching & Mentoring</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Lightbulb className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Innovation</h4>
                    <p className="text-gray-600">AI & Tech Solutions</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Let's Collaborate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;