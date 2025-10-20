import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Zap, Globe, Database } from 'lucide-react';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

export default function Home() {
  const services = [
    {
      icon: Globe,
      title: 'Web App Development',
      description: 'Custom web applications built with modern technologies',
    },
    {
      icon: Zap,
      title: 'Automation Systems',
      description: 'Streamline your business processes with smart automation',
    },
    {
      icon: Database,
      title: 'Business Dashboards',
      description: 'Data-driven dashboards for better decision making',
    },
    {
      icon: Code2,
      title: 'E-commerce Apps',
      description: 'Scalable online stores with secure payment integration',
    },
  ];

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const [videoLoaded, setVideoLoaded] = useState<boolean | null>(null);

  const handleVideoLoaded = () => setVideoLoaded(true);
  const handleVideoError = () => setVideoLoaded(false);

  return (
    <>
      <SEO
        title="Professional Web Developer in Odisha | Expert Web Development Services"
        description="Top-rated Web Developer in Odisha specializing in modern web applications, business automation, and e-commerce solutions. Serving clients in Bhubaneswar and across Odisha with 5+ years of experience in creating powerful web solutions. Contact for free consultation."
        keywords="web developer in odisha, web development services bhubaneswar, best web developer odisha, react developer odisha, web application development odisha, business website developer bhubaneswar, ecommerce website development odisha"
        canonical="/"
      />
      <StructuredData type="organization" />
      <StructuredData type="person" />
      <StructuredData type="website" />

      <div className="min-h-screen">
        {/* Fullscreen video section */}
        <section className="relative w-screen h-screen flex items-center justify-center overflow-hidden bg-black">
          <video
            ref={videoRef}
            className={`absolute inset-0 w-full h-full ${videoLoaded === false ? 'hidden' : ''}`}
            autoPlay
            muted
            loop
            playsInline
            src={encodeURI('/videos/Grenton Smart Home system - 3D Animation.mp4')}
            poster="/icon-512.png"
            aria-hidden="true"
            onLoadedData={handleVideoLoaded}
            onError={handleVideoError}
            style={{
              objectFit: 'contain',
              width: '100vw',
              height: '100vh',
              background: 'black',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
          {/* Responsive object-fit: cover for desktop */}
          <style>{`
            @media (min-width: 640px) {
              video.fullscreen-video {
                object-fit: cover !important;
              }
            }
          `}</style>
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
          {/* Video load error message */}
          {videoLoaded === false && (
            <div className="absolute top-4 left-4 right-4 z-10">
              <div className="p-3 bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-md text-sm text-center">
                Video loading error. Please refresh or check your connection.
              </div>
            </div>
          )}
        </section>

        {/* Hero content below video */}
        <section className="w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 text-center bg-black">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              <span>Available for New Projects</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white/90 via-white/80 to-white/90">
                I Build Powerful
              </span>
              <br />
              <span className="text-white">Web Applications</span>
            </h1>

            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
              Transforming ideas into intelligent digital solutions for businesses.
              Web Developer 2025 App Builder 2025 Problem Solver
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/projects"
                className="group px-8 py-4 bg-white/90 hover:bg-white text-black rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              >
                View My Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/+917978966065"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/10 text-white border-2 border-white/20 hover:border-white rounded-lg font-semibold transition-all inline-flex items-center justify-center"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        </section>

        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                What I Do Best
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Specialized services to grow your business
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mt-12"
            >
              <Link
                to="/services"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold"
              >
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 dark:from-blue-900 dark:to-cyan-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how I can help bring your ideas to life with cutting-edge web solutions.
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
        </section>
      </div>
    </>
  );
}
