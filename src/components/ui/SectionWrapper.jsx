import { motion } from 'framer-motion';

export default function SectionWrapper({ id, children, className = '' }) {
  return (
    <section id={id} className={`relative ${className}`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className="section-container"
      >
        {children}
      </motion.div>
    </section>
  );
}
