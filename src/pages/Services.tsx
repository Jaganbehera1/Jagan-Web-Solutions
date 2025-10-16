import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe,
  Zap,
  Database,
  ShoppingCart,
  Smartphone,
  Code2,
  Layers,
  Settings,
  ArrowRight,
} from 'lucide-react';
import SEO from '../components/SEO';

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Custom Website Design',
      description:
        'Beautiful, responsive websites tailored to your brand identity and business goals. Built with modern technologies for optimal performance.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile-First'],
    },
    {
      icon: Zap,
      title: 'Automation Apps',
      description:
        'Streamline your business operations with custom automation solutions that save time and reduce errors.',
      features: ['Process Automation', 'Task Scheduling', 'Workflow Management', 'Integration APIs'],
    },
    {
      icon: Database,
      title: 'Dashboard Systems',
      description:
        'Data-driven dashboards that provide real-time insights and analytics for better business decisions.',
      features: ['Real-time Data', 'Custom Reports', 'Analytics', 'Data Visualization'],
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description:
        'Complete e-commerce platforms with secure payment gateways, inventory management, and order tracking.',
      features: ['Payment Integration', 'Order Management', 'Inventory System', 'Customer Portal'],
    },
    {
      icon: Smartphone,
      title: 'Progressive Web Apps',
      description:
        'Modern web applications that work seamlessly across all devices with offline capabilities.',
      features: ['Offline Support', 'Push Notifications', 'App-like Experience', 'Fast Performance'],
    },
    {
      icon: Code2,
      title: 'API Development',
      description:
        'RESTful APIs and backend services for seamless integration between different systems and platforms.',
      features: ['RESTful APIs', 'Authentication', 'Database Design', 'Scalable Architecture'],
    },
    {
      icon: Layers,
      title: 'CMS Integration',
      description:
        'Content management systems that empower you to manage your website content without technical knowledge.',
      features: ['Easy Content Updates', 'User Management', 'Media Library', 'Custom Fields'],
    },
    {
      icon: Settings,
      title: 'Maintenance & Support',
      description:
        'Ongoing maintenance, updates, and technical support to keep your applications running smoothly.',
      features: ['Bug Fixes', 'Performance Optimization', 'Security Updates', '24/7 Support'],
    },
  ];

  return (
    <>
      <SEO
        title="Services"
        description="Professional web development services including custom website design, automation apps, dashboard systems, e-commerce solutions, and API development."
        canonical="/services"
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
              Services I Offer
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive web development solutions to transform your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-sm text-gray-700 dark:text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-br from-blue-600 to-cyan-600 dark:from-blue-900 dark:to-cyan-900 rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a solution that perfectly fits your needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
            >
              Get a Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}
