import { motion } from 'framer-motion';
import { ExternalLink, Star, Tv, Wifi, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  images: {
    primary: string;
    secondary: string;
  };
  imageUrl?: string;
  whatsappLink: string;
}

export default function ProductCard({ 
  title, 
  price, 
  description,
  features,
  images, 
  imageUrl, 
  whatsappLink 
}: ProductCardProps) {
  const [currentImage, setCurrentImage] = useState<'primary' | 'secondary'>('primary');

  // Handle both new images object and legacy imageUrl
  const hasMultipleImages = images && images.primary && images.secondary;
  const primaryImage = hasMultipleImages ? images.primary : (imageUrl || '/placeholder-image.jpg');
  const secondaryImage = hasMultipleImages ? images.secondary : (imageUrl || '/placeholder-image.jpg');

  const getIcon = () => {
    if (title.includes('Sports')) return <Star className="w-5 h-5" />;
    if (title.includes('Movies')) return <Tv className="w-5 h-5" />;
    if (title.includes('DStv')) return <Tv className="w-5 h-5" />;
    return <Wifi className="w-5 h-5" />;
  };

  const toggleImage = () => {
    setCurrentImage(current => current === 'primary' ? 'secondary' : 'primary');
  };

  const handleWhatsAppClick = () => {
    const message = `Hi, I'm interested in ${title} priced at ${price}. Please provide more information.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`${whatsappLink}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="group relative bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-700/50">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-teal-500/5 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={currentImage === 'primary' ? primaryImage : secondaryImage}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent opacity-60"></div>
      </div>

      {/* Content */}
      <div className="p-6 relative">
        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        
        {/* Features */}
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-300 text-sm">
              <svg className="w-4 h-4 mr-2 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        {/* Price */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-2xl font-bold text-white">{price}</span>
          <span className="text-sm text-gray-400">per month</span>
        </div>

        {/* CTA Button */}
        <motion.a
          onClick={handleWhatsAppClick}
          className="block w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-teal-500 text-white text-center rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)" }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Contact via WhatsApp</span>
        </motion.a>
      </div>
    </div>
  );
}