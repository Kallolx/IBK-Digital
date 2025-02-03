import { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';

const streamingProducts = [
  {
    title: 'Sports Channels',
    price: 'KSH 600',
    description: 'Live sports events including Premier League, Champions League, F1, and more',
    features: ['No Monthly Fees', 'HD Quality', 'All Sports Events'],
    images: {
      primary: '/sports/1.png',
      secondary: '/sports/2.png'
    },
    whatsappLink: 'https://wa.me/254757033657?text=I%20am%20interested%20in%20Sports%20Channels'
  },
  {
    title: 'Movies and Series',
    price: 'KSH 500',
    description: 'Latest movies and TV series from Netflix, Prime, and more',
    features: ['4K Quality', 'No Ads', 'Unlimited Access'],
    images: {
      primary: '/movies/1.png',
      secondary: '/movies/2.png'
    },
    whatsappLink: 'https://wa.me/254757033657?text=I%20am%20interested%20in%20Movies%20and%20Series'
  },
  {
    title: 'DStv Channels',
    price: 'KSH 1,200',
    description: 'Full DStv package including premium channels and local content',
    features: ['Premium Content', 'Local Channels', 'HD Streaming'],
    images: {
      primary: '/dstv/1.png',
      secondary: '/dstv/2.png'
    },
    whatsappLink: 'https://wa.me/254757033657?text=I%20am%20interested%20in%20DStv%20Channels'
  },
  {
    title: 'IPTV Channels',
    price: 'KSH 800',
    description: 'Global channels with VOD service and EPG guide included',
    features: ['2000+ Channels', 'VOD Included', 'EPG Support'],
    images: {
      primary: '/iptv/1.png',
      secondary: '/iptv/2.png'
    },
    whatsappLink: 'https://wa.me/254757033657?text=I%20am%20interested%20in%20IPTV%20Channels'
  }
];

function App() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen font-['DM_Sans'] ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <Hero isDark={isDark} toggleTheme={toggleTheme} />
      <Services />
      <Testimonials />
      
      {/* Streaming Products Section */}
      <section className="py-20" id="streaming">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 text-sm text-purple-400 mb-4 inline-block">
              Streaming Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Premium Entertainment
            </h2>
            <p className="text-lg sm:text-xl text-gray-400">
              Access unlimited entertainment with our premium streaming packages
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {streamingProducts.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;