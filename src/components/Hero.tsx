import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Hero = ({ isDark, toggleTheme }: HeroProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

      {/* Navigation Bar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-teal-500 bg-clip-text text-transparent">
                IBK Digital Tech
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Services', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  {item}
                </a>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors"
              >
                {isDark ? '🌞' : '🌙'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20">
            <motion.div 
              className="text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-purple-500 to-teal-500 bg-clip-text text-transparent">
                  Transforming Ideas
                </span>
                <br />
                <span className="text-gray-100">Into Digital Reality</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-lg">
                We craft innovative digital solutions that help businesses thrive in the modern world. Your vision, our expertise.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#services"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-teal-500 text-white rounded-full font-semibold hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Services
                </motion.a>
                <motion.a
                  href="#contact"
                  className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-full font-semibold hover:bg-purple-500/10 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/my.png"
                  alt="IBK Digital Tech"
                  className="w-full h-auto object-cover"
                />
                {/* Simple gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-teal-500/10"></div>
              </div>
              {/* Simple glow effects */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 