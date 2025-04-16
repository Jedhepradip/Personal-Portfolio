// src/App.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, Send } from 'lucide-react';
import {
  SiLinkedin, SiGithub, SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs,
  SiExpress, SiMongodb, SiBootstrap, SiTailwindcss, SiRedux, SiTypescript,
  SiGit, SiPostman, SiFramer, SiMysql, SiCplusplus, SiC, SiJson
} from 'react-icons/si';

import resume from "../../../Pradip Jedhe Full Stack Resume 3.pdf"

const App = () => {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert(`Thank you for your message, ${formData.name}! I'll get back to you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="skills">
          <SkillCards />
          <TechnologiesSection />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="contact">
          <ContactSection handleFormChange={handleFormChange} handleFormSubmit={handleFormSubmit} formData={formData} />
        </section>
        <SocialProfiles />
      </main>
      <Footer />
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="w-64 h-8 bg-gray-800 rounded-md mb-6"
      />
      <div className="space-y-4 w-full max-w-2xl px-4">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.15
            }}
            className="h-48 bg-gray-800 rounded-lg w-full"
          />
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse", delay: 0.6 }}
          className="h-64 bg-gray-800 rounded-lg w-full"
        />
      </div>
    </div>
  );
}

function Header({ activeSection, setActiveSection }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="py-4 px-6 flex justify-between items-center sticky top-0 bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-xl font-bold"
      >
        Pradip
      </motion.div>
      <motion.nav
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ul className="flex space-x-6">
          {navItems.map(item => (
            <li
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`cursor-pointer transition-colors ${activeSection === item.id ? 'text-blue-400' : 'hover:text-blue-400'
                }`}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="py-20 px-6 flex flex-col items-center justify-center text-center min-h-screen">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-bold mb-4"
      >
        Hi, I'm Pradip
      </motion.h1>
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-3xl text-blue-400 mb-8"
      >
        Full Stack Developer
      </motion.h2>
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="max-w-2xl text-gray-300 mb-8"
      >
        I create responsive and dynamic web applications using modern technologies.
        Passionate about crafting clean, efficient code and delivering exceptional user experiences.
      </motion.p>
      <div className="flex flex-wrap justify-center gap-4">
        <motion.a
          href="#contact"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <span>Contact Me</span>
        </motion.a>
        <motion.a
          href="resume"
          download="pradip_resume.pdf"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors flex items-center gap-2"
        >
          <Download size={18} />
          <span>Download Resume</span>
        </motion.a>
      </div>
    </section>
  );
}

function SkillCards() {
  const skills = [
    {
      title: "UI/UX Designer",
      description: "Creating beautiful, intuitive interfaces with a focus on user experience and accessibility.",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Full Stack Web Developer",
      description: "Building end-to-end web applications with modern frontend and backend technologies.",
      color: "from-blue-500 to-teal-500"
    },
    {
      title: "Software Engineer",
      description: "Developing robust, scalable software solutions to solve complex problems.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-16 px-6">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-12"
      >
        My Skills
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -10 }}
            className={`p-6 rounded-lg bg-gradient-to-br ${skill.color} shadow-lg`}
          >
            <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
            <p className="text-gray-100">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function TechnologiesSection() {
  const technologies = [
    { icon: SiHtml5, name: "HTML5", color: "text-orange-500" },
    { icon: SiCss3, name: "CSS3", color: "text-blue-400" },
    { icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
    { icon: SiReact, name: "React.js", color: "text-blue-300" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-teal-400" },
    { icon: SiRedux, name: "Redux Toolkit", color: "text-purple-400" },
    { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
    { icon: SiExpress, name: "Express.js", color: "text-gray-400" },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-400" },
    { icon: SiBootstrap, name: "Bootstrap", color: "text-purple-500" },
    { icon: SiTypescript, name: "TypeScript", color: "text-blue-500" },
    { icon: SiGit, name: "Git", color: "text-orange-600" },
    { icon: SiGithub, name: "GitHub", color: "text-gray-300" },
    { icon: SiPostman, name: "Postman API", color: "text-orange-500" },
    { icon: SiFramer, name: "Framer Motion", color: "text-pink-400" },
    { icon: SiMysql, name: "MySQL", color: "text-blue-600" },
    { icon: SiCplusplus, name: "C++", color: "text-blue-500" },
    { icon: SiC, name: "C", color: "text-blue-400" },
    { icon: SiJson, name: "JSON", color: "text-yellow-300" },
  ];

  return (
    <section className="py-16 px-6 bg-gray-800">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-12"
      >
        Technologies I Work With
      </motion.h2>
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -5, scale: 1.1 }}
            className="flex flex-col items-center justify-center bg-gray-700 p-4 rounded-lg"
          >
            <tech.icon className={`text-4xl ${tech.color} mb-2`} />
            <span className="text-sm text-center">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="py-16 px-6 bg-gray-900">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-12"
      >
        Work Experience
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto bg-gray-700 rounded-lg p-8"
      >
        <h3 className="text-2xl font-bold text-blue-400">Full Stack Web Developer</h3>
        <h4 className="text-xl mb-4">A2Z IT HUB</h4>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start">
            <div className="mr-2 mt-1 text-blue-400">•</div>
            <span>Developed and maintained responsive web applications using modern technologies like React, Next.js, and Node.js.</span>
          </li>
          <li className="flex items-start">
            <div className="mr-2 mt-1 text-blue-400">•</div>
            <span>Implemented RESTful APIs and integrated third-party services to enhance application functionality.</span>
          </li>
          <li className="flex items-start">
            <div className="mr-2 mt-1 text-blue-400">•</div>
            <span>Ensured website security and best practices by implementing authentication, authorization, and data protection techniques.</span>
          </li>
          <li className="flex items-start">
            <div className="mr-2 mt-1 text-blue-400">•</div>
            <span>Deployed and managed applications using cloud platforms, improving scalability and reliability.</span>
          </li>
          <li className="flex items-start">
            <div className="mr-2 mt-1 text-blue-400">•</div>
            <span>Contributed to business growth by delivering high-quality web solutions that enhanced client engagement and user retention.</span>
          </li>
        </ul>
      </motion.div>
    </section>
  );
}

function ContactSection({ handleFormChange, handleFormSubmit, formData }) {
  return (
    <section className="py-16 px-6">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-12"
      >
        Contact Me
      </motion.h2>
      <div className="max-w-2xl mx-auto">
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gray-800 p-8 rounded-lg"
          onSubmit={handleFormSubmit}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              required
              className="w-full p-3 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              required
              className="w-full p-3 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              placeholder="your@email.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleFormChange}
              required
              rows="5"
              className="w-full p-3 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white resize-none"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <Send size={18} />
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function SocialProfiles() {
  return (
    <section className="py-16 px-6 bg-gray-800">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-6"
      >
        Social Profiles
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center text-gray-300 mb-8"
      >
        Click on social media icons to check out..
      </motion.p>

      <div className="flex justify-center space-x-8 mb-12">
        <motion.a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ y: -5, scale: 1.1 }}
          className="bg-blue-700 p-4 rounded-full">
          <SiLinkedin size={24} />
        </motion.a>

        <motion.a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ y: -5, scale: 1.1 }}
          className="bg-gray-700 p-4 rounded-full"
        >
          <SiGithub size={24} />
        </motion.a>
        <motion.a
          href="mailto:contact@example.com"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ y: -5, scale: 1.1 }}
          className="bg-red-600 p-4 rounded-full"
        >
          <Mail size={24} />
        </motion.a>
      </div>
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gray-900 p-6 rounded-lg mb-8"
        >
          <p className="italic mb-4">
            "LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps."
          </p>
          <p className="font-bold">@Pradip</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-gray-900 p-6 rounded-lg"
        >
          <p className="italic mb-4">
            "Also do check out my Github Profile where I have shared all my codes from basic to advanced."
          </p>
          <p className="font-bold">@Pradip</p>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-6 bg-gray-900 text-center">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-gray-400"
      >
        © {new Date().getFullYear()} Pradip. All rights reserved.
      </motion.p>
    </footer>
  );
}

export default App;