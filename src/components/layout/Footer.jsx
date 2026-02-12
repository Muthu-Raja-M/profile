import { FiHeart, FiArrowUp } from 'react-icons/fi';
import { socialLinks } from '../../data/constants';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-gray-200 dark:border-dark-200 bg-gray-50 dark:bg-dark-100/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-xl font-display font-bold text-primary-500">
              MR<span className="text-gray-900 dark:text-white">.</span>
            </span>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Building digital experiences that matter.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-2.5 rounded-lg text-gray-500 dark:text-gray-400 hover:text-primary-500 hover:bg-gray-100 dark:hover:bg-dark-200 transition-colors"
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-dark-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
            © {new Date().getFullYear()} Muthu Raja. Made with{' '}
            <FiHeart className="text-red-500 inline" size={14} /> in Tamil Nadu.
          </p>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-primary-500 hover:bg-gray-100 dark:hover:bg-dark-200 transition-colors"
            aria-label="Scroll to top"
          >
            <FiArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
