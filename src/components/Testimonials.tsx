import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import TestimonialCard, { testimonials } from './TestimonialCard';

const Testimonials = () => {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef);
  const controls = useAnimation();

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isInView) {
      const animate = async () => {
        await controls.start({
          x: [0, -1920],
          transition: {
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }
        });
      };
      
      timeout = setTimeout(animate, 1000);
    }

    return () => clearTimeout(timeout);
  }, [isInView, controls]);

  return (
    <section className="relative py-20 overflow-hidden bg-gray-900/30 backdrop-blur-sm" id="testimonials">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block"
          >
            <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-400 mb-4 inline-block">
              Testimonials
            </span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6 bg-gradient-to-r from-purple-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative" ref={scrollRef}>
          {/* Subtle Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-gray-900/10 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-gray-900/10 to-transparent z-10"></div>
          
          {/* Sliding Content */}
          <motion.div 
            className="flex gap-6 py-8"
            animate={controls}
          >
            {/* First Set */}
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={`first-${index}`} {...testimonial} />
            ))}
            {/* Duplicate Set for Infinite Loop */}
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={`second-${index}`} {...testimonial} />
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-teal-500 text-white rounded-full font-semibold hover:shadow-lg transition-all group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
            <svg 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
          <p className="mt-4 text-gray-300">Join our satisfied clients today!</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 