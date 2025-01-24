import { ExternalLink, Star, Tv, Wifi, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  images?: {
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
    <div className="group bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100 dark:border-gray-700">
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white px-3 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">
          {getIcon()}
          <span>Premium</span>
        </div>
        
        <img
          src={currentImage === 'primary' ? primaryImage : secondaryImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {hasMultipleImages && (
          <div className="absolute inset-0 flex items-center justify-between px-3 sm:px-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={toggleImage}
              className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-800 backdrop-blur-sm"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={toggleImage}
              className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-800 backdrop-blur-sm"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        )}
      </div>
      
      <div className="p-4 sm:p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white leading-tight">
            {title}
          </h3>
          <div className="flex-shrink-0">
            <span className="inline-flex items-center px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 font-bold text-sm border border-red-100 dark:border-red-800">
              {price}
            </span>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        <div className="space-y-2 mb-6">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
              <span className="line-clamp-1">{feature}</span>
            </div>
          ))}
        </div>
        
        <button
          onClick={handleWhatsAppClick}
          className="group/btn flex items-center justify-between w-full bg-green-600 dark:bg-green-500 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-medium transition-all duration-300 hover:bg-green-700 dark:hover:bg-green-600 hover:scale-[0.98] active:scale-[0.97]"
        >
          <span>Contact via WhatsApp</span>
          <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover/btn:rotate-45" />
        </button>
      </div>
    </div>
  );
}