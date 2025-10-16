import { motion } from 'framer-motion';
import { Code2, Lightbulb, Target, Users } from 'lucide-react';
import SEO from '../components/SEO';

export default function About() {
  const skills = [
    'React & TypeScript',
    'Node.js & Express',
    'IoT & Embedded Systems',
    'Home Automation',
    'Arduino & Raspberry Pi',
    'MQTT & IoT Protocols',
    'MongoDB & PostgreSQL',
    'Cloud Services (AWS/Azure)',
    'REST APIs & WebSockets',
    'Python & C/C++',
    'TailwindCSS & UI/UX',
    'Git & CI/CD',
    'SEO & Analytics',
    'Embedded Linux',
    'Sensor Integration',
  ];

  const timeline = [
    {
      year: '2025',
      title: 'JJ Shopping App',
      description: 'E-commerce platform with shopping cart and payment integration',
    },
    {
      year: '2024',
      title: 'Asset Management System',
      description: 'Smart inventory and asset tracking dashboard',
    },
    {
      year: '2024',
      title: 'Jagan Construction',
      description: 'Project tracking system for construction management',
    },
    {
      year: '2025',
      title: 'JJ Meeting Scheduler',
      description: 'Team collaboration and meeting scheduling app',
    },
    {
      year: '2025',
      title: 'School Automation',
      description: 'Complete school management platform',
    },
    {
      year: '2025',
      title: 'Mechanics Finder',
      description: 'Location-based mechanic finder with booking system',
    },
    {
      year: '2025',
      title: 'Restaurant Automation',
      description: 'Smart restaurant management and billing system',
    },
  ];

  const values = [
    {
      icon: Code2,
      title: 'Quality Code',
      description: 'Writing clean, maintainable, and efficient code is my priority',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always exploring new technologies and best practices',
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on delivering solutions that achieve business objectives',
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Your success is my success, building lasting partnerships',
    },
  ];

  return (
    <>
      <SEO
        title="About"
        description="Learn about my journey as a web developer, skills in React, Node.js, and experience building automation systems, dashboards, and e-commerce applications."
        canonical="https://jaganwebsolutions.netlify.app/about"
      />

      <div className="min-h-screen pt-24 pb-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Passionate web developer creating intelligent solutions for businesses
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl mb-16 border border-gray-200 dark:border-gray-700"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  My Journey
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  I'm a versatile developer based in Odisha, specializing in full-stack web development
                  and IoT solutions. My expertise spans from creating powerful web applications
                  to implementing sophisticated home automation systems.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  With deep knowledge in both software and embedded systems, I bridge the gap
                  between web technologies and IoT devices. I've successfully delivered projects
                  ranging from smart home solutions to large-scale industrial automation systems.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  My technical stack includes modern web frameworks, IoT protocols, and embedded
                  systems programming. I work with Arduino, Raspberry Pi, and various sensors
                  to create integrated solutions that bring automation to life.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  My approach combines innovation with reliability, ensuring each project
                  delivers tangible value while maintaining high security and performance standards.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Project Timeline
            </h2>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900"></div>
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    className="relative pl-20"
                  >
                    <div className="absolute left-5 top-2 w-6 h-6 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-white dark:border-gray-800"></div>
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
