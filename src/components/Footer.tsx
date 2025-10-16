import { Link } from 'react-router-dom';
import { Code2, Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold text-white">
                Jagan Web Solutions
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Professional Web Developer in Odisha | Web Automation & Business Software
            </p>
            <p className="text-sm text-gray-400">
              Building powerful and intelligent web applications for businesses.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:jaganbehera63@gmail.com"
                className="flex items-center space-x-2 text-sm text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>jaganbehera63@gmail.com</span>
              </a>
              <a
                href="tel:+917978966065"
                className="flex items-center space-x-2 text-sm text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+91 79789 66065</span>
              </a>
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://github.com/Jaganbehera1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/feed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Jagan Web Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
