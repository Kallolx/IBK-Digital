import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  image: string;
}

const TestimonialCard = ({ name, role, company, testimonial, image }: TestimonialCardProps) => {
  return (
    <motion.div 
      className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 min-w-[350px] mx-4 hover:bg-white/10 transition-colors duration-300"
      whileHover={{ y: -5 }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-teal-500/5 rounded-2xl"></div>
      
      {/* Quote Icon */}
      <div className="absolute -top-4 -left-2">
        <div className="bg-gradient-to-br from-purple-400 to-teal-400 rounded-full p-3">
          <FaQuoteLeft className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        <p className="text-gray-200 mb-6 mt-4 italic leading-relaxed">
          "{testimonial}"
        </p>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-purple-400/20">
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-semibold text-white">{name}</h4>
            <p className="text-sm text-gray-300">{role} at {company}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    testimonial: "IBK Digital Tech transformed our online presence completely. Their web development expertise and attention to detail are unmatched.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60"
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "StartupX",
    testimonial: "The streaming service quality is exceptional. Their technical support and customer service have been outstanding throughout our partnership.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60"
  },
  {
    name: "Emily Rodriguez",
    role: "Creative Director",
    company: "DesignHub",
    testimonial: "Their graphic design work exceeded our expectations. They captured our brand essence perfectly and delivered beyond our requirements.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=60"
  },
  {
    name: "James Wilson",
    role: "HR Manager",
    company: "GlobalTech",
    testimonial: "The resume design service helped our candidates stand out. Professional, modern, and exactly what we were looking for.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=60"
  },
  {
    name: "Lisa Zhang",
    role: "Product Manager",
    company: "InnovateCo",
    testimonial: "Outstanding service from start to finish. Their team's dedication to quality and innovation is remarkable.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60"
  }
];

export default TestimonialCard; 