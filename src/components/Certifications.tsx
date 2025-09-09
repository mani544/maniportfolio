import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';

const Certifications = () => {
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

  const certifications = [
    {
      title: "Introduction to Career Skills in Data Analytics",
      issuer: "Linked In & Microsoft",
      date: "2025-Aug",
      description: "Introduction to Career Skills in Data Analytics",
      skills: ["Data Analytics", "Tech Career Skills", "Dashboards"],
      image: "public/Career Linked In.jpg", // ✅ add your image here
      credential: "https://www.linkedin.com/learning/certificates/3b65cf91238616c9dbacadd413df370cbc9483beebda9f24c58acbd28935aab3",
      featured: false,
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      issuer: "Oracle",
      date: "2025-Aug",
      description: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      skills: ["AI/ML", "Generative AI", "Transformers", "Deep Learning"],
      image: "/certificates/oracle-genai.png",
      credential: "https://catalog-education.oracle.com/pls/certview/sharebadgeid=747CB6A1FFB1B869A1FE9DD679C4A80ACBFDA0B60D231B312E5A8A5E69B806AA",
      featured: false,
    },
    {
      title: "Excel: Mother of Business Intelligence",
      issuer: "Codebasics",
      date: "2025-Feb",
      description: "Excel: Mother of Business Intelligence",
      skills: ["Business Intelligence", "Microsoft Power Query", "Power Pivot", "V/X-Look UP", "Index-Match"],
      image: "/certificates/excel.png",
      credential: "https://codebasics.io/certificate/CB-51-345464",
      featured: false,
    },
    // ... your other certificates
  ];

  const otherCerts = certifications.filter(cert => !cert.featured);

  return (
    <section id="certifications" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Certifications & Learning
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Continuous learning through industry-recognized programs and certifications
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
          </div>

          {/* Certification Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {otherCerts.map((cert, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${400 + index * 150}ms` }}
              >
                {/* Date */}
                <div className="text-base text-gray-500 mb-3">{cert.date}</div>

                {/* Title */}
                <h4 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h4>

                {/* Issuer */}
                <p className="text-blue-600 font-medium mb-6">{cert.issuer}</p>

                {/* Certificate Image */}
                {cert.image && (
                  <div className="flex justify-center mb-6">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-64 h-64 object-cover border shadow-sm rounded-lg"
                    />
                  </div>
                )}

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.slice(0, 3).map((skill, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-700 text-sm px-3 py-2 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="text-sm text-gray-500">
                      +{cert.skills.length - 3} more
                    </span>
                  )}
                </div>

                {/* Credential Link */}
                <a
                  href={cert.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors text-base font-medium"
                >
                  <span className="mr-1">View</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              <div className="text-3xl font-bold text-blue-600">10+</div>
              <div className="text-gray-600">Certifications</div>
            </div>
            <div
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '900ms' }}
            >
              <div className="text-3xl font-bold text-purple-600">500+</div>
              <div className="text-gray-600">Learning Hours</div>
            </div>
            <div
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '1000ms' }}
            >
              <div className="text-3xl font-bold text-green-600">15+</div>
              <div className="text-gray-600">Skills Mastered</div>
            </div>
            <div
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '1100ms' }}
            >
              <div className="text-3xl font-bold text-red-600">2025</div>
              <div className="text-gray-600">Latest Cert</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
