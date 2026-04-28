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

function SkillBadge({ skill, badgeClass, delay = 0 }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: delay * 0.05 }}
      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all hover:shadow-md ${badgeClass}`}
    >
      {skill.name}
    </motion.span>
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

      <div className="flex flex-wrap gap-2">
        {category.data.map((skill, i) => (
          <SkillBadge
            key={skill.name}
            skill={skill}
            badgeClass={category.badge}
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
