import React, { useEffect, useRef, useState } from 'react';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

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
  <div className="relative w-80 p-4 bg-white rounded-xl shadow-md">
  {/* Date */}
  <p className="text-gray-400 text-sm mb-2">2025-Aug</p>

  {/* Title */}
  <h3 className="text-lg font-semibold mb-1">
    Introduction to Career Skills in Data Analytics
  </h3>

  {/* Issuer */}
  <p className="text-blue-600 mb-3">Linked In & Microsoft</p>

  {/* Certificate Image in middle (Square) */}
  <div className="flex justify-center mb-3">
    <img
      src="/path-to-your-image/8eecc53f-455e-432d-9bfa-bee81421143a.png"
      alt="Certificate"
      className="w-56 h-56 object-cover shadow" 
    />
  </div>

  {/* Skills */}
  <div className="flex flex-wrap gap-2 mb-3">
    <span className="px-2 py-1 bg-gray-100 rounded-md text-sm">
      Data Analytics
    </span>
    <span className="px-2 py-1 bg-gray-100 rounded-md text-sm">
      Tech Career Skills
    </span>
    <span className="px-2 py-1 bg-gray-100 rounded-md text-sm">
      Dashboards
    </span>
  </div>

  {/* Credential Link */}
  <a
    href="https://www.linkedin.com/learning/certificates/3b65cf91238616c9dbacadd413df370cbc9483beebda9f24c58acbd28935aab3"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 underline"
  >
    View →
  </a>
</div>

    {
      title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      issuer: "Oracle",
      date: "2025-Aug",
      description: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      skills: ["AI/ML","Generative AI","Transformers","Deep Learning"],
      credential: "https://catalog-education.oracle.com/pls/certview/sharebadgeid=747CB6A1FFB1B869A1FE9DD679C4A80ACBFDA0B60D231B312E5A8A5E69B806AA",
      featured: false
    },
    {
      title: "Excel: Mother of Business Intelligence",
      issuer: "Codebasics",
      date: "2025-Feb",
      description: "Excel: Mother of Business Intelligence",
      skills: ["Businees Intelligence","Microsoft Power Query","Power Piot","V/X-Look UP","Index-Match"],
      credential: "https://codebasics.io/certificate/CB-51-345464",
      featured: false
    },
 {
      title: "Perform analytics in Power BI",
      issuer: "Microsoft",
      date: "2024-Oct",
      description: "Google Looker Data Studio",
      skills: ["Businees Intelligence","Microsoft Power BI","Dashboard Development"],
      credential: "https://learn.microsoft.com/en-us/users/manichokkara-3315/achievements#badges-section",
      featured: false
    },
  {
      title: "Looker Studio /Google Data Studio Complete Advanced Tutorial",
      issuer: "Udemy",
      date: "2024-Sep",
      description: "Google Looker Data Studio",
      skills: ["Businees Intelligence","Report Automation","Dashboard Development"],
      credential: "https://www.udemy.com/certificate/UC-4b99fd40-d6b8-4d0f-8fb6-3305ad305b90/",
      featured: false
    },
   {
      title: "Accenture North America - Data Analytics and Visualization Job Simulation",
      issuer: "Forage",
      date: "2024-Aug",
      description: "Complete data analytics program covering data cleaning, analysis, visualization, and dashboards",
      skills: ["Data Analysis", "Excel", "Python", "SQL","Power BI"],
      credential: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_iXRKqABRoYMXBtocL_1724996917716_completion_certificate.pdf",
      featured: false
    },
    {
      title: "Tata Group - Data Visualisation: Empowering Business with Effective Insights Job Simulation",
      issuer: "Forage",
      date: "2024-July",
      description: "Complete data analytics program covering data cleaning, analysis, visualization, and storytelling",
      skills: ["Data Analysis", "Excel", "Python", "SQL","Power BI"],
      credential: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Tata/MyXvBcppsW2FkNYCX_Tata%20Group_iXRKqABRoYMXBtocL_1720205723027_completion_certificate.pdf",
      featured: false
    },
    {
      title: "Unlocking the Power of ChatGPT in Data Science : A-Z Guide",
      issuer: "Udemy",
      date: "2024-Feb",
      description: "Unlocking the Power of ChatGPT in Data Science : A-Z Guide",
      skills: ["Promptng","Researching"],
      credential: "https://www.udemy.com/certificate/UC-9b75cbee-0a48-41dd-a09a-118505fcf3fa/",
      featured: false
    },
{
  title: "Most Effective Tips to Get Your Dream Data Science Job",
  issuer: "Udemy",
  date: "Nov 2023",
  description: "Completed a course on effective strategies for landing a Data Science job, including resume building, interview preparation, and skill development.",
  skills: ["Data Science", "Model Development"],
  credential: "https://www.udemy.com/certificate/UC-08ae5306-cb38-49d0-b81c-632a340a1f8b/",
  featured: false
}

    
  ];

  
  const otherCerts = certifications.filter(cert => !cert.featured);

  return (
    <section id="certifications" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Certifications & Learning
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Continuous learning through industry-recognized programs and certifications
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
          </div>

          

          {/* Certifications */}
          <div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherCerts.map((cert, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${400 + (index * 150)}ms` }}
                >
                  <div className="flex items-center mb-4">
  <div className="bg-gray-100 p-2 rounded-lg mr-3">
    <img 
      src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AGoogle_%2522G%2522_logo.svg&psig=AOvVaw1LYeQFcuMpxPW2dkMp9zJF&ust=1756623010172000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIjE_uf4sY8DFQAAAAAdAAAAABAE" 
      alt="Google Logo" 
      className="w-5 h-5 object-contain" 
    />
  </div>
  <div className="text-sm text-gray-500">{cert.date}</div>
</div>


                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-blue-600 font-medium mb-3">{cert.issuer}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="text-xs text-gray-500">+{cert.skills.length - 3} more</span>
                    )}
                  </div>

                  <a
                    href={cert.credential}
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm"
                  >
                    <span className="mr-1">View</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
              <div className="text-3xl font-bold text-blue-600">10+</div>
              <div className="text-gray-600">Certifications</div>
            </div>
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '900ms' }}>
              <div className="text-3xl font-bold text-purple-600">500+</div>
              <div className="text-gray-600">Learning Hours</div>
            </div>
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1000ms' }}>
              <div className="text-3xl font-bold text-green-600">15+</div>
              <div className="text-gray-600">Skills Mastered</div>
            </div>
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1100ms' }}>
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