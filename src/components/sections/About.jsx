import { motion } from 'framer-motion';
import { FiUser, FiMapPin, FiCalendar } from 'react-icons/fi';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeading from '../ui/SectionHeading';
import { aboutText, personalInfo } from '../../data/constants';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../utils/motionVariants';

const highlights = [
  { icon: FiUser, label: 'CSE Student', value: 'B.Tech 2022–2026' },
  { icon: FiMapPin, label: 'Location', value: personalInfo.location },
  { icon: FiCalendar, label: 'Experience', value: '2 Internships' },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        title="About Me"
        subtitle="A glimpse into who I am and what drives my passion for technology."
      />

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Text */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base mb-8">
            {aboutText}
          </p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {highlights.map((item) => (
              <motion.div
                key={item.label}
                variants={fadeInUp}
                className="glass-card p-4 text-center accent-glow hover:border-primary-500/30 transition-all duration-300"
              >
                <item.icon className="mx-auto mb-2 text-primary-500" size={20} />
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{item.label}</p>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Quick stats / visual */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-card p-6 md:p-8 accent-glow"
        >
          <h3 className="text-lg font-display font-semibold mb-6 text-gray-800 dark:text-gray-200">
            Quick Overview
          </h3>
          <div className="space-y-5">
            {[
              { label: 'Frontend Development', value: 88 },
              { label: 'UI/UX Design', value: 85 },
              { label: 'Backend Development', value: 72 },
              { label: 'Problem Solving', value: 80 },
            ].map((skill) => (
              <div key={skill.label}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-700 dark:text-gray-300">{skill.label}</span>
                  <span className="text-sm font-medium text-primary-500">{skill.value}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 dark:bg-dark-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
