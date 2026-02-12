import { motion } from 'framer-motion';
import { useScrollProgress } from '../../hooks/useAnimations';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-primary-500 z-[60] origin-left"
      style={{ scaleX: progress / 100 }}
      initial={{ scaleX: 0 }}
    />
  );
}
