import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeading from '../ui/SectionHeading';
import { achievements } from '../../data/constants';
import { fadeInUp, staggerContainer } from '../../utils/motionVariants';

export default function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <SectionHeading
        title="Achievements"
        subtitle="Milestones and recognitions along my journey."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto"
      >
        {achievements.map((item) => (
          <motion.div
            key={item.id}
            variants={fadeInUp}
            whileHover={{ y: -4 }}
            className="glass-card p-6 accent-glow hover:border-primary-500/30 transition-all duration-300 group"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-primary-500/20 transition-colors">
                {item.icon}
              </div>
              <div>
                <h3 className="font-display font-semibold text-gray-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-primary-500 font-medium mb-2">
                  {item.subtitle}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
