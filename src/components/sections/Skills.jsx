import { motion } from 'framer-motion';
import { FiPenTool, FiCode, FiTool } from 'react-icons/fi';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeading from '../ui/SectionHeading';
import { skills } from '../../data/constants';
import { fadeInUp, staggerContainer } from '../../utils/motionVariants';

const categories = [
  {
    id: 'uiux',
    title: 'UI/UX Skills',
    icon: FiPenTool,
    data: skills.uiux,
    gradient: 'from-purple-500 to-pink-500',
    glow: 'shadow-purple-500/10 hover:shadow-purple-500/20',
    bar: 'from-purple-500 to-pink-500',
    badge: 'bg-purple-500/10 text-purple-500',
  },
  {
    id: 'development',
    title: 'Development Skills',
    icon: FiCode,
    data: skills.development,
    gradient: 'from-primary-500 to-cyan-500',
    glow: 'shadow-primary-500/10 hover:shadow-primary-500/20',
    bar: 'from-primary-500 to-cyan-500',
    badge: 'bg-primary-500/10 text-primary-500',
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: FiTool,
    data: skills.tools,
    gradient: 'from-amber-500 to-orange-500',
    glow: 'shadow-amber-500/10 hover:shadow-amber-500/20',
    bar: 'from-amber-500 to-orange-500',
    badge: 'bg-amber-500/10 text-amber-500',
  },
];

function SkillBar({ skill, barGradient, delay = 0 }) {
  return (
    <div className="group">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
          {skill.name}
        </span>
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
          {skill.level}%
        </span>
      </div>
      <div className="w-full h-2 bg-gray-200 dark:bg-dark-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay * 0.1 + 0.2, ease: 'easeOut' }}
          className={`h-full bg-gradient-to-r ${barGradient} rounded-full relative`}
        >
          <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      </div>
    </div>
  );
}

function SkillCard({ category }) {
  const Icon = category.icon;

  return (
    <motion.div
      variants={fadeInUp}
      className={`glass-card p-6 shadow-lg ${category.glow} hover:border-primary-500/20 transition-all duration-300`}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-2.5 rounded-xl bg-gradient-to-br ${category.gradient} text-white`}>
          <Icon size={20} />
        </div>
        <h3 className="font-display font-semibold text-gray-900 dark:text-white">
          {category.title}
        </h3>
      </div>

      <div className="space-y-4">
        {category.data.map((skill, i) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            barGradient={category.bar}
            delay={i}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-gray-50/50 dark:bg-dark-100/30">
      <SectionHeading
        title="Skills & Expertise"
        subtitle="Technologies and tools I work with to bring ideas to life."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6"
      >
        {categories.map((cat) => (
          <SkillCard key={cat.id} category={cat} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
