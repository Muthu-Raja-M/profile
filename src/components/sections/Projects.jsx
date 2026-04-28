import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink, FiCode, FiLayout, FiGithub, FiCpu } from 'react-icons/fi';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeading from '../ui/SectionHeading';
import { projects } from '../../data/constants';
import { fadeInUp, staggerContainer, scaleIn } from '../../utils/motionVariants';

const filters = [
  { id: 'all', label: 'All' },
  { id: 'development', label: 'Development' },
  { id: 'uiux', label: 'UI/UX' },
];

function ProjectCard({ project, onOpen }) {
  const isDev = project.category === 'development';

  return (
    <motion.div
      variants={fadeInUp}
      layout
      className="glass-card overflow-hidden accent-glow group cursor-pointer hover:border-primary-500/30 transition-all duration-300"
      onClick={() => onOpen(project)}
    >
      {/* Card Header / Preview */}
      <div
        className={`relative h-48 flex items-center justify-center ${
          isDev
            ? 'bg-gradient-to-br from-primary-950 to-dark-100'
            : 'bg-gradient-to-br from-purple-950/50 to-dark-100'
        }`}
      >
        {isDev && project.id === 3 ? (
          <div className="text-center">
            <FiCpu className="mx-auto text-emerald-400 mb-3" size={40} />
            <div className="bg-dark-200/60 rounded-lg px-4 py-3 mx-6">
              <div className="flex gap-1.5 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <p className="text-xs text-emerald-400 font-mono text-left">
                AI + Full-Stack
              </p>
            </div>
          </div>
        ) : isDev ? (
          <div className="text-center">
            <FiCode className="mx-auto text-primary-400 mb-3" size={40} />
            <div className="bg-dark-200/60 rounded-lg px-4 py-3 mx-6">
              <div className="flex gap-1.5 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <p className="text-xs text-gray-400 font-mono text-left">
                &lt;Dashboard /&gt;
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <FiLayout className="mx-auto text-purple-400 mb-3" size={40} />
            <div className="bg-dark-200/60 rounded-2xl w-20 h-36 mx-auto flex items-center justify-center border border-dark-300/50">
              <div className="space-y-1.5 w-14">
                <div className="h-1.5 bg-purple-500/40 rounded-full" />
                <div className="h-1.5 bg-purple-500/30 rounded-full w-10" />
                <div className="h-6 bg-purple-500/20 rounded mt-2" />
                <div className="h-4 bg-purple-500/15 rounded" />
              </div>
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <span className="text-xs text-white bg-primary-500/80 backdrop-blur-sm px-3 py-1.5 rounded-full font-medium">
            View Case Study
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5">
        <h3 className="font-display font-semibold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 bg-primary-500/10 text-primary-500 rounded-md font-medium"
              >
                {t}
              </span>
            ))}
          </div>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-primary-500 hover:bg-gray-100 dark:hover:bg-dark-200 transition-colors"
              aria-label="View on GitHub"
            >
              <FiGithub size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white dark:bg-dark-100 rounded-2xl shadow-2xl border border-gray-200 dark:border-dark-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white/90 dark:bg-dark-100/90 backdrop-blur-md p-6 pb-4 border-b border-gray-200 dark:border-dark-200 flex items-start justify-between">
          <div>
            <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 bg-primary-500/10 text-primary-500 rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-200 text-gray-500 transition-colors"
            aria-label="Close modal"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div>
            <h4 className="text-sm font-semibold text-red-500 uppercase tracking-wide mb-2">
              Problem
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-green-500 uppercase tracking-wide mb-2">
              Solution
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {project.solution}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-primary-500 uppercase tracking-wide mb-2">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 bg-gray-100 dark:bg-dark-200 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-amber-500 uppercase tracking-wide mb-3">
              Key Features
            </h4>
            <ul className="space-y-2">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {project.github && (
            <div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <FiGithub size={16} />
                View on GitHub
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <SectionWrapper id="projects" className="bg-gray-50/50 dark:bg-dark-100/30">
      <SectionHeading
        title="Featured Projects"
        subtitle="A showcase of my recent work spanning development and design."
      />

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-center gap-2 mb-12"
      >
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
              activeFilter === filter.id
                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                : 'bg-gray-100 dark:bg-dark-200 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-dark-300'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        layout
      >
        <AnimatePresence mode="wait">
          {filtered.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={setSelectedProject}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
