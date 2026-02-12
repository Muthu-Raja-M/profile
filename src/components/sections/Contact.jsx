import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiDownload } from 'react-icons/fi';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeading from '../ui/SectionHeading';
import { personalInfo, socialLinks } from '../../data/constants';
import { fadeInUp, staggerContainer } from '../../utils/motionVariants';

const contactInfo = [
  { icon: FiMail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: FiPhone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  { icon: FiMapPin, label: 'Location', value: personalInfo.location, href: null },
];

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="bg-gray-50/50 dark:bg-dark-100/30">
      <SectionHeading
        title="Contact Me"
        subtitle="Feel free to reach out through any of the channels below."
      />

      <div className="max-w-3xl mx-auto space-y-8">
        {/* Contact Info Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-3 gap-4"
        >
          {contactInfo.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeInUp}
              className="glass-card p-6 text-center accent-glow hover:border-primary-500/30 transition-all duration-300"
            >
              <div className="inline-flex p-3 rounded-xl bg-primary-500/10 text-primary-500 mb-4">
                <item.icon size={22} />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-primary-500 transition-colors break-all"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {item.value}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Social + Resume */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card p-8 accent-glow text-center"
        >
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-5">
            Connect with me
          </p>
          <div className="flex justify-center gap-3 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-3 rounded-xl bg-gray-100 dark:bg-dark-200 text-gray-600 dark:text-gray-400 hover:bg-primary-500 hover:text-white transition-all duration-300"
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>

          <div className="border-t border-gray-200 dark:border-dark-200 pt-6">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Want to know more about my experience?
            </p>
            <a
              href="/resume.pdf"
              download="Muthu_Raja_Resume.pdf"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
            >
              <FiDownload size={16} />
              Download My Resume
            </a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
