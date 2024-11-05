'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Facebook, Twitter, Linkedin, Instagram, Code, Palette, Megaphone, BarChart } from 'lucide-react'

export default function IQventionWebsite() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true'
    setIsDarkMode(isDark)
    document.documentElement.classList.toggle('dark', isDark)

    const intervalId = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(intervalId)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode
    setIsDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
    document.documentElement.classList.toggle('dark', newDarkMode)
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const accomplishments = [
    { number: 50, text: 'Happy Customers' },
    { number: 200, text: 'Projects Completed' },
    { number: 5, text: 'Years of Experience' },
    { number: 100, text: 'Client Satisfaction' },
  ]

  const testimonials = [
    {
      quote: "IQvention transformed our online presence. Their expertise in web development and digital marketing has been invaluable to our business growth.",
      author: "John Doe, CEO of TechCorp"
    },
    {
      quote: "The team at IQvention is incredibly talented and professional. They delivered a stunning website that exceeded our expectations.",
      author: "Jane Smith, Founder of CreativeMinds"
    },
    {
      quote: "Working with IQvention was a game-changer for our company. Their innovative solutions helped us reach new heights in our industry.",
      author: "Mike Johnson, Marketing Director at InnovateCo"
    }
  ]

  const services = [
    { icon: <Code className="w-12 h-12 mb-4 text-blue-500" />, name: 'Web Development', description: 'Custom websites tailored to your business needs' },
    { icon: <Palette className="w-12 h-12 mb-4 text-blue-500" />, name: 'UI/UX Design', description: 'Intuitive and engaging user experiences' },
    { icon: <Megaphone className="w-12 h-12 mb-4 text-blue-500" />, name: 'Digital Marketing', description: 'Strategies to boost your online presence' },
    { icon: <BarChart className="w-12 h-12 mb-4 text-blue-500" />, name: 'Analytics', description: 'Data-driven insights for your business' },
  ]

  const packages = [
    {
      name: 'Starter',
      price: '$999',
      features: [
        'Basic Website Design',
        '5 Pages',
        'Mobile Responsive',
        'Basic SEO',
      ],
    },
    {
      name: 'Professional',
      price: '$2,499',
      features: [
        'Advanced Website Design',
        '10 Pages',
        'Mobile Responsive',
        'Advanced SEO',
        'E-commerce Integration',
      ],
    },
    {
      name: 'Enterprise',
      price: '$4,999',
      features: [
        'Custom Website Design',
        'Unlimited Pages',
        'Mobile Responsive',
        'Advanced SEO',
        'E-commerce Integration',
        'Custom Functionality',
      ],
    },
    {
      name: 'Marketing',
      price: 'Custom',
      features: [
        'Digital Marketing Strategy',
        'Social Media Management',
        'Content Creation',
        'PPC Advertising',
        'Analytics & Reporting',
      ],
    },
  ]

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md transition-all duration-300">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <a href="#hero" onClick={() => scrollToSection('hero')} className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            IQvention
          </a>
          <div className="flex items-center space-x-4">
            <ul className="hidden md:flex space-x-6">
              <li><a href="#hero" onClick={() => scrollToSection('hero')} className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#accomplishments" onClick={() => scrollToSection('accomplishments')} className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">Achievements</a></li>
              <li><a href="#services" onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#testimonials" onClick={() => scrollToSection('testimonials')} className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">Testimonials</a></li>
              <li><a href="#packages" onClick={() => scrollToSection('packages')} className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">Packages</a></li>
            </ul>
            <a
              href="#contact"
              onClick={() => scrollToSection('contact')}
              className="hidden md:inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Contact
            </a>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-blue-50 dark:bg-blue-900">
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-200 dark:text-gray-700" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              <rect width="100%" height="100%" fill="url(#grid)">
                <animate attributeName="x" from="-40" to="0" dur="20s" repeatCount="indefinite" />
                <animate attributeName="y" from="-40" to="0" dur="20s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;0.5;0" dur="10s" repeatCount="indefinite" />
              </rect>
            </svg>
          </div>
          <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-blue-900 dark:to-purple-900 dark:opacity-80">
            <div className="absolute inset-0">
              <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjODg4Ij48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMjIiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')]"></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent"></div>
          </div>
          <div className="relative z-10 text-center px-6">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Elevate Your Business with IQvention
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Modern web development and digital marketing solutions
            </motion.p>
            <motion.a
              href="#contact"
              onClick={() => scrollToSection('contact')}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Contact
            </motion.a>
          </div>
        </section>

        <section id="accomplishments" className="py-20 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Our Achievements
            </motion.h2>
            <motion.p
              className="text-center text-gray-600 dark:text-gray-400 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Milestones that showcase our commitment to excellence
            </motion.p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {accomplishments.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.25 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <motion.h3
                    className="text-4xl md:text-5xl font-bold mb-2 text-blue-600 dark:text-blue-400"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                  >
                    {item.number}+
                  </motion.h3>
                  <p className="text-gray-700 dark:text-gray-300">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Our Services
            </motion.h2>
            <motion.p
              className="text-center text-gray-600 dark:text-gray-400 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive solutions to drive your business forward
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.25 }}
                  viewport={{ once: true }}
                  
                  className="text-center"
                >
                  <div className="flex justify-center items-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{service.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              What Our Clients Say
            </motion.h2>
            <motion.p
              className="text-center text-gray-600 dark:text-gray-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Real stories from satisfied customers
            </motion.p>
            <div className="relative h-64 md:h-48 flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
                >
                  <p className="text-xl md:text-2xl mb-6 text-gray-700 dark:text-gray-300">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    - {testimonials[currentTestimonial].author}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        <section id="packages" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Our Packages
            </motion.h2>
            <motion.p
              className="text-center text-gray-600 dark:text-gray-400 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Tailored solutions to fit your business needs
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.25 }}
                  viewport={{ once: true }}
                  className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col transition-all duration-300"
                >
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{pkg.name}</h3>
                    <p className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">{pkg.price}</p>
                    <ul className="mb-6 space-y-2">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                          <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-6 pb-6 mt-auto">
                    <a
                      href="#contact"
                      onClick={() => scrollToSection('contact')}
                      className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 transform hover:scale-105"
                    >
                      Choose Plan
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Get in Touch
            </motion.h2>
            <motion.p
              className="text-center text-gray-600 dark:text-gray-400 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's discuss how we can help your business grow
            </motion.p>
            <motion.form
              className="max-w-lg mx-auto space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all duration-300"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all duration-300"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all duration-300"
                rows={4}
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
              <a href="#hero" onClick={() => scrollToSection('hero')} className="text-2xl font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors">IQvention</a>
            </div>
            <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
              <p>&copy; {new Date().getFullYear()} IQvention. All rights reserved.</p>
            </div>
            <div className="w-full md:w-1/3 flex justify-center md:justify-end space-x-4">
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110"><Facebook /></a>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110"><Twitter /></a>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110"><Linkedin /></a>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110"><Instagram /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}