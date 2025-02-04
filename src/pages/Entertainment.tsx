import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import ProductCard from '../components/ProductCard';

const streamingProducts = [
  {
    title: 'Sports Entertainment',
    description: 'Experience live sports events in stunning quality. Never miss a moment of your favorite games.',
    features: ['Live Sports Events', 'HD Quality Streaming', 'Multi-device Support', 'Instant Replay'],
    images: {
      primary: '/sports/1.png',
      secondary: '/sports/2.png'
    },
    whatsappLink: 'https://wa.me/254757033657'
  },
  {
    title: 'Movies & Series',
    description: 'Access a vast library of movies and TV series. From classics to the latest releases.',
    features: ['4K Ultra HD', 'Offline Downloads', 'Multiple Profiles', 'No Ads'],
    images: {
      primary: '/movies/1.png',
      secondary: '/movies/2.png'
    },
    whatsappLink: 'https://wa.me/254757033657'
  },
  {
    title: 'Premium Channels',
    description: 'Get access to premium channels with exclusive content and live broadcasts.',
    features: ['Premium Content', 'Local Channels', 'EPG Guide', 'Cloud DVR'],
    images: {
      primary: '/dstv/1.png',
      secondary: '/dstv/2.png'
    },
    whatsappLink: 'https://wa.me/254757033657'
  },
  {
    title: 'Global Entertainment',
    description: 'Stream content from around the world with our comprehensive channel package.',
    features: ['2000+ Channels', 'VOD Library', 'Multi-language', '24/7 Support'],
    images: {
      primary: '/iptv/1.png',
      secondary: '/iptv/2.png'
    },
    whatsappLink: 'https://wa.me/254757033657'
  }
];

const Entertainment = () => {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute top-0 left-0 w-[500px] h-[500px] rounded-full filter blur-3xl ${
            isDark ? 'bg-purple-500/10' : 'bg-purple-500/20'
          }`} />
          <div className={`absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full filter blur-3xl ${
            isDark ? 'bg-teal-500/10' : 'bg-teal-500/20'
          }`} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={`inline-block px-4 py-2 rounded-full mb-4 ${
              isDark
                ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-purple-400'
                : 'bg-purple-50 text-purple-600'
            }`}>
              Premium Entertainment
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Unlimited Entertainment
            </h1>
            <p className={`text-xl mb-8 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Access a world of entertainment with our premium streaming packages. From live sports to the latest movies and TV shows.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {streamingProducts.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ProductCard {...product} isDark={isDark} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className={`text-xl mb-8 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Contact us now to access premium entertainment packages
            </p>
            <motion.a
              href="https://wa.me/254757033657"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-teal-500 text-white rounded-full font-semibold hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact via WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Entertainment; 