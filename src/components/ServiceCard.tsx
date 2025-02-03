import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { FaCode, FaPaintBrush, FaFileAlt, FaPlay } from 'react-icons/fa';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: IconType;
  color: string;
}

const ServiceCard = ({ title, description, icon: Icon, color }: ServiceCardProps) => {
  return (
    <motion.div
      className="relative group"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className={`absolute inset-0 ${color} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
      <div className="relative p-8 bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
        <div className="flex items-center justify-between mb-6">
          <div className={`p-3 rounded-xl ${color} bg-opacity-10`}>
            <Icon className={`w-8 h-8 ${color.replace('bg-', 'text-')}`} />
          </div>
          <motion.div
            className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-800 to-gray-700"
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`mt-6 px-6 py-2 rounded-lg ${color} bg-opacity-10 text-white font-medium 
            hover:bg-opacity-20 transition-all duration-300 flex items-center gap-2`}
        >
          Learn More
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
};

export const services = [
  {
    icon: FaCode,
    title: "Website Development",
    description: "Responsive, modern, and user-focused designs to grow your business.",
    color: "bg-blue-500"
  },
  {
    icon: FaPaintBrush,
    title: "Graphic Design",
    description: "High-quality logos, branding, and visuals that leave an impact.",
    color: "bg-purple-500"
  },
  {
    icon: FaFileAlt,
    title: "Resume Design",
    description: "Professional resumes that help you stand out and succeed.",
    color: "bg-teal-500"
  },
  {
    icon: FaPlay,
    title: "Streaming Services",
    description: "FREE movie/series, all sports live streaming channels.",
    color: "bg-pink-500"
  }
];

export default ServiceCard; 