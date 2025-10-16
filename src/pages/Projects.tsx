import { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Loader2, Code2, Cpu } from 'lucide-react';
import { supabase, Project } from '../lib/supabase';
import SEO from '../components/SEO';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = useMemo(() => {
    if (!projects?.length) return ['all'];
    const cats = projects.map(p => p.category).filter(Boolean);
    return ['all', ...new Set(cats)];
  }, [projects]);

  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('order');

      if (error) {
        console.error('Error fetching projects:', error);
      } else {
        setProjects(data || []);
      }
      setLoading(false);
    }

    fetchProjects();
  }, []);

  return (
    <>
      <SEO
        title="Projects"
        description="Explore my portfolio of web development projects including restaurant automation, school management systems, e-commerce apps, and business dashboards."
        canonical="https://jaganwebsolutions.netlify.app/projects"
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
              My Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A showcase of web applications I've built for businesses and organizations
            </p>
          </motion.div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            </div>
          ) : (
            <div className="space-y-8">
            <div className="mb-8">
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {category && typeof category === 'string' 
                      ? category.charAt(0).toUpperCase() + category.slice(1)
                      : 'All'}
                  </button>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects?.length > 0 && projects
                  .filter((project) => selectedCategory === 'all' || project.category === selectedCategory)
                  .map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700"
                    >
                      <div className="relative h-48 overflow-hidden">
                        {project.image_url ? (
                          <>
                            <img
                              src={project.image_url}
                              alt={project.title}
                              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          </>
                        ) : (
                          <div className="h-full bg-gradient-to-br from-blue-500 to-cyan-500">
                            <div className="absolute inset-0 flex items-center justify-center">
                              {project.category === 'IoT' ? (
                                <Cpu className="w-16 h-16 text-white/20" />
                              ) : (
                                <Code2 className="w-16 h-16 text-white/20" />
                              )}
                            </div>
                          </div>
                        )}
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 text-xs font-medium bg-black/20 backdrop-blur-sm text-white rounded-full">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold group"
                        >
                          View Project
                          <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
