import React from 'react';
import { Menu, X, Github, Linkedin, Mail, ChevronDown, Code, Palette, ArrowRight } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Telquel Magazine Website",
      description: "A modern, responsive news website for Telquel, a leading Moroccan magazine. Built with Next.js, React, and TypeScript to deliver a premium reading experience with server-side rendering and optimal performance.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800",
      liveUrl: "https://extraordinary-donut-20a358.netlify.app/",
      tags: [
        { name: "Next.js", className: "bg-violet-950/50 text-violet-400 border-violet-500/10" },
        { name: "React", className: "bg-indigo-950/50 text-indigo-400 border-indigo-500/10" },
        { name: "TypeScript", className: "bg-blue-950/50 text-blue-400 border-blue-500/10" },
        { name: "Tailwind", className: "bg-gray-800 text-gray-400 border-gray-700" }
      ]
    },
    {
      id: 2,
      title: "Project Title 2",
      description: "A modern web application built with React and TypeScript, featuring a clean UI and smooth interactions.",
      image: "https://images.unsplash.com/photo-1512349713-016e67600afa?auto=format&fit=crop&q=80&w=800",
      tags: [
        { name: "React", className: "bg-violet-950/50 text-violet-400 border-violet-500/10" },
        { name: "TypeScript", className: "bg-indigo-950/50 text-indigo-400 border-indigo-500/10" },
        { name: "Tailwind", className: "bg-gray-800 text-gray-400 border-gray-700" }
      ]
    },
    {
      id: 3,
      title: "Project Title 3",
      description: "A modern web application built with React and TypeScript, featuring a clean UI and smooth interactions.",
      image: "https://images.unsplash.com/photo-1513349713-016e67600afa?auto=format&fit=crop&q=80&w=800",
      tags: [
        { name: "React", className: "bg-violet-950/50 text-violet-400 border-violet-500/10" },
        { name: "TypeScript", className: "bg-indigo-950/50 text-indigo-400 border-indigo-500/10" },
        { name: "Tailwind", className: "bg-gray-800 text-gray-400 border-gray-700" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-950/90 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              HE.
            </span>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-12">
              <a href="#home" className="text-gray-300 hover:text-violet-400 transition-colors text-sm font-medium">Home</a>
              <a href="#about" className="text-gray-300 hover:text-violet-400 transition-colors text-sm font-medium">About</a>
              <a href="#projects" className="text-gray-300 hover:text-violet-400 transition-colors text-sm font-medium">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-violet-400 transition-colors text-sm font-medium">Contact</a>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-950/90 backdrop-blur-md border-b border-gray-800">
              <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-violet-400">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-violet-400">About</a>
              <a href="#projects" className="block px-3 py-2 text-gray-300 hover:text-violet-400">Projects</a>
              <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-violet-400">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#8b5cf615,transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="text-6xl sm:text-7xl font-bold text-white mb-8 leading-tight">
              Crafting Digital
              <br />
              <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                Experiences
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              I'm Hamza El Obaydy, a passionate creative who combines technical precision with 
              design elegance to build exceptional digital experiences.
            </p>
            <div className="flex gap-6">
              <a 
                href="#projects"
                className="group inline-flex items-center px-8 py-4 rounded-full bg-violet-600 text-white hover:bg-violet-700 transition-all duration-300 shadow-lg shadow-violet-500/20"
              >
                View Projects
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center px-8 py-4 rounded-full border-2 border-violet-400/20 text-violet-400 hover:bg-violet-400/10 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
              <div className="flex gap-4 mb-8">
                <div className="flex items-center gap-2 px-6 py-3 bg-violet-950/50 rounded-full border border-violet-500/10">
                  <Code size={20} className="text-violet-400" />
                  <span className="font-medium text-gray-300">Front-End Developer</span>
                </div>
                <div className="flex items-center gap-2 px-6 py-3 bg-indigo-950/50 rounded-full border border-indigo-500/10">
                  <Palette size={20} className="text-indigo-400" />
                  <span className="font-medium text-gray-300">UI/UX Designer</span>
                </div>
              </div>
              <p className="text-gray-400 mb-8 leading-relaxed">
                With a deep passion for creating seamless digital experiences, I combine my expertise 
                in front-end development with UI/UX design principles. My approach focuses on writing 
                clean, efficient code while ensuring the end product is both beautiful and user-friendly.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
                  <h3 className="font-semibold mb-4 text-white">Development</h3>
                  <div className="space-y-2 text-gray-400">
                    <p>React & TypeScript</p>
                    <p>Next.js & Tailwind</p>
                    <p>Node.js & Express</p>
                    <p>REST APIs & GraphQL</p>
                  </div>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
                  <h3 className="font-semibold mb-4 text-white">Design</h3>
                  <div className="space-y-2 text-gray-400">
                    <p>UI/UX Design</p>
                    <p>Figma & Adobe XD</p>
                    <p>User Research</p>
                    <p>Design Systems</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/10 to-indigo-600/10 rounded-3xl transform rotate-3" />
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072"
                alt="Workspace"
                className="relative rounded-3xl shadow-2xl border border-gray-800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="group bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-violet-500/20 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {project.liveUrl && (
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 text-sm font-medium hover:text-violet-400 transition-colors"
                      >
                        View Live Site <ArrowRight size={16} />
                      </a>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className={`px-4 py-1.5 text-sm rounded-full font-medium border ${tag.className}`}
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
            <p className="text-gray-400">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
                <h3 className="font-semibold text-xl mb-6 text-white">Connect With Me</h3>
                <div className="space-y-6">
                  <a 
                    href="https://github.com/heliberosis" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-400 hover:text-violet-400 transition-colors group"
                  >
                    <div className="p-3 bg-gray-900 rounded-xl shadow-sm group-hover:shadow group-hover:scale-105 transition-all border border-gray-700">
                      <Github size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-white">GitHub</p>
                      <p className="text-sm">@heliberosis</p>
                    </div>
                  </a>
                  <a 
                    href="mailto:contacthaeloba@gmail.com"
                    className="flex items-center gap-4 text-gray-400 hover:text-violet-400 transition-colors group"
                  >
                    <div className="p-3 bg-gray-900 rounded-xl shadow-sm group-hover:shadow group-hover:scale-105 transition-all border border-gray-700">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-white">Email</p>
                      <p className="text-sm">contacthaeloba@gmail.com</p>
                    </div>
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-400 hover:text-violet-400 transition-colors group"
                  >
                    <div className="p-3 bg-gray-900 rounded-xl shadow-sm group-hover:shadow group-hover:scale-105 transition-all border border-gray-700">
                      <Linkedin size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-white">LinkedIn</p>
                      <p className="text-sm">Connect with me</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-shadow"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-shadow"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-shadow"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-violet-600 text-white rounded-xl hover:bg-violet-700 transition-colors shadow-lg shadow-violet-500/20"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent mb-4 inline-block">
            HE.
          </span>
          <p className="text-gray-400 mt-4">© {new Date().getFullYear()} Hamza El Obaydy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;