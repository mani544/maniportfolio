import React from 'react';
import { Github, Linkedin, Youtube, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    sections: [
      {
        title: "Navigation",
        links: [
          { name: "Home", href: "#home" },
          { name: "About", href: "#about" },
          { name: "Projects", href: "#projects" },
          { name: "Skills", href: "#skills" }
        ]
      },
      {
        title: "Content",
        links: [
          { name: "Certifications", href: "#certifications" },
          { name: "YouTube Channel", href: "#youtube" },
          { name: "Blog", href: "#blog" },
          { name: "Contact", href: "#contact" }
        ]
      },
      {
        title: "Resources",
        links: [
          { name: "Resume", href: "#" },
          { name: "Portfolio PDF", href: "#" },
          { name: "Newsletter", href: "#" },
          { name: "Speaking", href: "#" }
        ]
      }
    ]
  };

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/mani544",
      label: "GitHub",
      color: "hover:text-gray-900"
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/manichokkara/",
      label: "LinkedIn",
      color: "hover:text-blue-600"
    },
    {
      icon: <Youtube size={20} />,
      href: "https://www.youtube.com/@techinnovatorsnetworkofficial",
      label: "YouTube",
      color: "hover:text-red-600"
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:manichokkara2438@email.com",
      label: "Email",
      color: "hover:text-green-600"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  MANI CHOKKRA
                </h3>
                <p className="text-gray-400 mt-2">
                  Building Tech for the Next Generation
                </p>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Computer Science Student, Tech Innovator, and Content Creator passionate about 
                empowering students through coding education and industry insights.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`text-gray-400 ${social.color} transition-colors duration-300 hover:scale-110 transform`}
                    aria-label={social.label}
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            {footerLinks.sections.map((section, index) => (
              <div key={index} className="lg:col-span-1">
                <h4 className="text-lg font-semibold mb-4 text-white">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="max-w-md">
              <h4 className="text-lg font-semibold mb-4 text-white">
                Stay Updated
              </h4>
              <p className="text-gray-400 mb-4">
                Get the latest tech insights and tutorials delivered to your inbox.
              </p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium transition-colors duration-300 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

      {/* Bottom Bar */}
<div className="py-6 border-t border-gray-800">
  <div className="flex justify-center items-center">
    <div className="flex items-center text-gray-400 text-sm">
      <span>© {currentYear} Mani Chokkara. Made with</span>
      <Heart size={16} className="mx-2 text-red-500 animate-pulse" />
      <span>and lots of coffee ☕</span>
    </div>
  </div>
</div>

            
     
              
              {/* Scroll to Top Button */}
              <button
                onClick={scrollToTop}
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors duration-300 group"
                aria-label="Scroll to top"
              >
                <ArrowUp size={16} className="text-gray-400 group-hover:text-white transform group-hover:-translate-y-1 transition-all duration-300" />
              </button>
      </div>
    </footer>
  );
};

export default Footer;