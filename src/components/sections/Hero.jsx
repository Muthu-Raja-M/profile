import { motion } from 'framer-motion';
import { FiDownload, FiChevronDown } from 'react-icons/fi';
import { personalInfo } from '../../data/constants';
import { useTypingEffect } from '../../hooks/useAnimations';
import { fadeInUp, staggerContainer } from '../../utils/motionVariants';

export default function Hero() {
  const typedText = useTypingEffect(personalInfo.typingTexts, 100, 60, 2000);

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-dark dark:via-dark dark:to-primary-950/20" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary-500/5 dark:bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-primary-400/5 dark:bg-primary-400/10 rounded-full blur-3xl" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-3xl mx-auto"
      >
        {/* Greeting */}
        <motion.p
          variants={fadeInUp}
          className="text-sm md:text-base font-medium text-primary-500 mb-4 tracking-wide uppercase"
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={fadeInUp}
          className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-gray-900 dark:text-white mb-4"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Typing Effect */}
        <motion.div variants={fadeInUp} className="h-10 md:h-12 mb-6">
          <span className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300">
            {typedText}
          </span>
          <span className="inline-block w-0.5 h-6 md:h-7 bg-primary-500 ml-1 animate-pulse align-middle" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeInUp}
          className="text-gray-500 dark:text-gray-400 text-sm md:text-base max-w-lg mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-center"
        >
          <a
            href="/resume.pdf"
            download="Muthu_Raja_Resume.pdf"
            className="group flex items-center gap-2 px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
          >
            <FiDownload
              size={16}
              className="group-hover:-translate-y-0.5 transition-transform"
            />
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500 hover:text-primary-500 transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
