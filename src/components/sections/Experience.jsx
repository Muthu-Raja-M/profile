import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeading from '../ui/SectionHeading';
import { experiences } from '../../data/constants';
import { fadeInUp, fadeInLeft, staggerContainer } from '../../utils/motionVariants';

function TimelineItem({ experience, index }) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      variants={fadeInUp}
      className="relative flex items-start gap-6 md:gap-8"
    >
      {/* Timeline connector */}
      <div className="hidden md:flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center shadow-lg shadow-primary-500/30 z-10"
        >
          <FiBriefcase className="text-white" size={18} />
        </motion.div>
        {index < experiences.length - 1 && (
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-0.5 bg-gradient-to-b from-primary-500 to-primary-500/20 flex-1"
          />
        )}
      </div>

      {/* Mobile dot */}
      <div className="md:hidden flex flex-col items-center">
        <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center shadow-lg shadow-primary-500/30 z-10 flex-shrink-0">
          <FiBriefcase className="text-white" size={14} />
        </div>
        {index < experiences.length - 1 && (
          <div className="w-0.5 bg-gradient-to-b from-primary-500 to-primary-500/20 flex-1" />
        )}
      </div>

      {/* Content */}
      <div className="glass-card p-5 md:p-6 flex-1 mb-8 accent-glow hover:border-primary-500/30 transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
          <div>
            <h3 className="font-display font-semibold text-gray-900 dark:text-white">
              {experience.role}
            </h3>
            <p className="text-sm text-primary-500 font-medium">
              {experience.company}
            </p>
          </div>
          <span className="text-xs px-3 py-1 bg-primary-500/10 text-primary-500 rounded-full font-medium self-start">
            {experience.period}
          </span>
        </div>
        <ul className="space-y-2">
          {experience.points.map((point, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-400">
              <span className="mt-1.5 w-1.5 h-1.5 bg-primary-500/60 rounded-full flex-shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading
        title="Experience"
        subtitle="My professional journey and the companies I've contributed to."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        {experiences.map((exp, index) => (
          <TimelineItem key={exp.id} experience={exp} index={index} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
