import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
} from 'react-icons/fi';

export const personalInfo = {
  name: 'Muthu Raja',
  role: 'Computer Science Student | Web Developer | UI/UX Designer',
  location: 'Tirunelveli, Tamil Nadu',
  tagline: 'Building clean, user-friendly, and efficient digital solutions.',
  email: 'muthuraja240405@gmail.com',
  phone: '+91 95853 31980',
  typingTexts: ['Web Developer', 'UI/UX Designer', 'Problem Solver'],
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export const aboutText = `I'm a Computer Science Engineering graduate (2022–2026) passionate about crafting clean, intuitive digital experiences. With hands-on internship experience in web development and UI/UX design, I bridge the gap between beautiful design and functional code. I love solving real-world problems through technology and continuously strive to improve my craft.`;

export const skills = {
  uiux: [
    { name: 'UI Design' },
    { name: 'Wireframing' },
    { name: 'Prototyping' },
    { name: 'User Flow Planning' },
    { name: 'Responsive Design' },
  ],
  development: [
    { name: 'Python' },
    { name: 'MySQL' },
    { name: 'Java' },
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'JavaScript' },
  ],
  tools: [
    { name: 'Figma' },
    { name: 'Git' },
    { name: 'VS Code' },
    { name: 'XAMPP' },
  ],
};

export const projects = [
  {
    id: 1,
    title: 'Vehicle Management System',
    category: 'development',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    github: 'https://github.com/Muthu-Raja-M/Vehicle-Management-System',
    image: null,
    description: 'A comprehensive system to manage vehicle records, bookings, and maintenance schedules with an intuitive dashboard.',
    problem:
      'Manual vehicle management was time-consuming and error-prone, leading to scheduling conflicts and poor maintenance tracking.',
    solution:
      'Built a full-stack web application with real-time dashboard, automated scheduling, and comprehensive reporting to streamline fleet operations.',
    features: [
      'Interactive admin dashboard with real-time analytics',
      'Vehicle registration and tracking module',
      'Maintenance scheduling with automated reminders',
      'User authentication and role-based access control',
      'Report generation and data export functionality',
    ],
  },
  {
    id: 2,
    title: 'Food Delivery App',
    category: 'uiux',
    tech: ['Figma', 'UI/UX', 'Prototyping'],
    image: null,
    description: 'A clean, intuitive mobile app design focused on seamless food ordering experience with thoughtful UX decisions.',
    problem:
      'Existing food delivery apps had cluttered interfaces, confusing navigation, and lengthy checkout processes hurting conversion rates.',
    solution:
      'Designed a streamlined mobile experience with clear visual hierarchy, minimal-step ordering flow, and intuitive navigation patterns.',
    features: [
      'Clean onboarding flow with minimal friction',
      'Smart search with filters and categories',
      'Streamlined 3-step checkout process',
      'Real-time order tracking with map integration',
      'Personalized recommendations based on preferences',
    ],
  },
  {
    id: 3,
    title: 'Smart Pharmacy Management System',
    category: 'development',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Recharts', 'FastAPI', 'Python', 'MongoDB', 'Scikit-learn', 'Docker'],
    github: 'https://github.com/Muthu-Raja-M/pharmacy-management-system',
    image: null,
    description: 'A full-stack AI-based pharmacy management system for inventory, billing, and customer management with demand forecasting and real-time analytics.',
    problem:
      'Traditional pharmacies relied on manual inventory tracking, leading to stock-outs, expired medicines going unnoticed, and inefficient billing workflows without data-driven insights.',
    solution:
      'Developed a comprehensive full-stack application with AI-powered demand forecasting, real-time analytics dashboard, and GST-enabled billing to automate and optimize pharmacy operations end-to-end.',
    features: [
      'AI-powered demand forecasting using Scikit-learn to optimize stock levels',
      'Role-based authentication system (Admin, Pharmacist, Cashier)',
      'Real-time analytics dashboard with sales trends and revenue visualization',
      'GST-enabled billing with invoice generation and multiple payment modes (Cash, Card, UPI)',
      'Inventory management with low-stock alerts, expiry tracking, and category filters',
      'AI ChatBot assistant for medicine queries, stock checking, and billing help',
      'Dark/Light theme support with responsive mobile-first UI',
      'Containerized with Docker & Docker Compose for scalable deployment',
    ],
  },
];

export const experiences = [
  {
    id: 1,
    company: 'Web Walk Infosys',
    role: 'Web Development Intern',
    period: '2024',
    points: [
      'Developed responsive web modules using HTML, CSS, and JavaScript',
      'Collaborated with senior developers on real-time project workflows',
      'Implemented RESTful API integrations for dynamic content delivery',
      'Participated in code reviews and agile sprint planning sessions',
    ],
  },
  {
    id: 2,
    company: 'Brassy Technologies',
    role: 'UI/UX Design Intern',
    period: '2024',
    points: [
      'Designed responsive UI screens for client web applications',
      'Improved user navigation flows reducing bounce rate by 25%',
      'Created wireframes, prototypes, and design systems in Figma',
      'Conducted usability testing and iterated on user feedback',
    ],
  },
];

export const achievements = [
  {
    id: 1,
    title: 'International Conference Attendee',
    subtitle: 'Vellore Institute of Technology (VIT)',
    description:
      'Attended and participated in an international conference, gaining exposure to cutting-edge research and industry trends in technology.',
    icon: '🎓',
  },
  {
    id: 2,
    title: 'Microsoft Azure Fundamentals',
    subtitle: 'Microsoft Certification',
    description:
      'Earned the AZ-900 certification demonstrating foundational knowledge of cloud services and Microsoft Azure infrastructure.',
    icon: '☁️',
  },
];

export const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/Muthu-Raja-M', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/muthuraja2026', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:muthuraja240405@gmail.com', label: 'Email' },
];
