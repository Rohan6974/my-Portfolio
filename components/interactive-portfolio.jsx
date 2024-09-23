'use client'

import React, { useState, useEffect } from 'react';
import { FileText, Github, Linkedin, Menu, X, ChevronDown, ChevronUp, Sun, Moon, Mail, Phone, MapPin } from 'lucide-react';

export function InteractivePortfolioJsx() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background-100 text-foreground">
      {/* Navbar */}
      <nav className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container flex items-center justify-between p-4">
          <a href="/" className="text-2xl font-bold text-primary text-white">
            John Doe
          </a>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md transition-colors ${
                  activeSection === item.href.slice(1)
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-black"
                }`}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-muted"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>
          </div>
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-muted"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-muted"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2 hover:bg-muted"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="container py-16 sm:py-32 mx-990" style={{marginLeft: '100px'}}>
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary blur-2xl opacity-75"></div>
            <img
              src="/placeholder.svg?height=200&width=200"
              className="relative rounded-full w-48 h-48 object-cover border-4 border-background"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-8xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              John Doe
            </h1>
            <p className="text-xl text-muted-foreground max-w-[600px] mx-300">
              Full-stack Developer | UI/UX Enthusiast | Open Source Contributor
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 ">
              <FileText className="mr-2 h-4 w-4" /> Resume
            </button>
            <button className="flex items-center px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/10">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </button>
            <button className="flex items-center px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/10">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </button>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="bg-muted py-24 sm:py-32">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <p className="text-lg">
                Hello! I'm John, a passionate full-stack developer with a keen eye for creating 
                elegant, efficient, and user-friendly solutions. With over 5 years of experience 
                in web development, I've had the pleasure of working on a diverse range of projects 
                that have honed my skills in both front-end and back-end technologies.
              </p>
              <p className="text-lg">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or enjoying a good book on software architecture. I'm always 
                eager to take on new challenges and collaborate with like-minded individuals to 
                create impactful digital experiences.
              </p>
              {isAboutExpanded && (
                <div className="space-y-4 animate-fadeIn">
                  <p className="text-lg">
                    My journey in tech began when I built my first website at the age of 15. Since then, 
                    I've been on a continuous learning path, always staying up-to-date with the latest 
                    industry trends and best practices. I hold a Bachelor's degree in Computer Science 
                    from Tech University and have completed numerous certifications in cloud computing 
                    and agile methodologies.
                  </p>
                  <p className="text-lg">
                    In my professional career, I've had the opportunity to work with startups and 
                    established companies alike, helping them build scalable web applications and 
                    optimize their development processes. I'm particularly passionate about creating 
                    accessible and performant web experiences that delight users and solve real-world problems.
                  </p>
                  <p className="text-lg">
                    Outside of work, I'm an avid hiker and amateur photographer. I believe that 
                    stepping away from the screen and immersing myself in nature helps me maintain 
                    a fresh perspective and fuels my creativity in problem-solving.
                  </p>
                </div>
              )}
              <button 
                onClick={() => setIsAboutExpanded(!isAboutExpanded)}
                className="flex items-center px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/10"
              >
                {isAboutExpanded ? 'Show Less' : 'Learn More'}
                {isAboutExpanded ? (
                  <ChevronUp className="ml-2 h-4 w-4" />
                ) : (
                  <ChevronDown className="ml-2 h-4 w-4" />
                )}
              </button>
            </div>
            <div className="bg-gradient-to-br from-primary to-secondary p-1 rounded-lg shadow-2xl">
              <div className="bg-background h-full rounded-lg p-6">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="John working"
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container py-24 sm:py-32">
        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {["React", "Node.js", "TypeScript", "Python", "AWS", "Docker", "GraphQL", "MongoDB"].map((skill) => (
            <div key={skill} className="bg-muted rounded-lg p-4 text-center hover:shadow-md transition-shadow">
              <div className="text-4xl mb-2">🚀</div>
              <h3 className="font-semibold">{skill}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-muted py-24 sm:py-32">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={`/placeholder.svg?height=200&width=400&text=Project+${project}`}
                  alt={`Project ${project}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">Project {project}</h3>
                  <p className="text-muted-foreground mb-4">
                    A brief description of project {project} and its key features.
                  </p>
                  <button className="px-4 py-2 text-sm border border-primary text-primary rounded-md hover:bg-primary/10">
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Me Section */}
      <section id="contact" className="container py-24 sm:py-32">
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"></textarea>
            </div>
            <button type="submit" className="w-full bg-primary text-primary-foreground rounded-md py-2 px-4 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
              Send Message
            </button>
          </form>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="flex items-center space-x-3">
              <Mail className="text-primary" />
              <span>john.doe@example.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-primary" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-primary" />
              <span>San Francisco, CA</span>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Connect with me:</h4>
              <div className="flex space-x-4">
                <button className="p-2 border border-primary text-primary rounded-md hover:bg-primary/10">
                  <Linkedin className="h-4 w-4" />
                </button>
                <button className="p-2 border border-primary text-primary rounded-md hover:bg-primary/10">
                  <Github className="h-4 w-4" />
                </button>
                <button className="p-2 border border-primary text-primary rounded-md hover:bg-primary/10">
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-6">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}











