import { Mail, Facebook, Twitter, Instagram, Phone, ArrowUpRight, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const socialLinks = [
  {
    icon: Facebook,
    href: 'https://www.facebook.com/ibrahim.khazri.12',
    label: 'Facebook Profile',
    color: 'hover:bg-blue-600'
  },
  {
    icon: Twitter,
    href: 'https://twitter.com/Ibrahimke_11',
    label: 'Twitter',
    color: 'hover:bg-sky-500'
  },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/officialahim11.ke',
    label: 'Instagram',
    color: 'hover:bg-pink-600'
  },
  {
    icon: Mail,
    href: 'mailto:Khazriibrahim11@gmail.com',
    label: 'Email',
    color: 'hover:bg-red-600'
  }
];

const contactInfo = [
  {
    icon: Phone,
    label: '+254757033657',
    href: 'tel:+254757033657'
  },
  {
    icon: Mail,
    label: 'Khazriibrahim11@gmail.com',
    href: 'mailto:Khazriibrahim11@gmail.com'
  },
  {
    icon: Clock,
    label: '24/7 Support Available',
    href: '#'
  }
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/254757033657?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20your%20services', '_blank');
  };

  return (
    <footer className="relative bg-black text-white pt-20 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-950/20" />
      
      <div className="container relative mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            IBK Digital Tech is dedicated to providing high-quality digital solutions for all your entertainment needs.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="group inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Chat with us on WhatsApp</span>
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {contactInfo.map((info) => (
            <a
              key={info.label}
              href={info.href}
              className="group flex items-center gap-4 hover:text-red-500 transition-all duration-300"
            >
              <div className="p-4 bg-white/5 rounded-xl group-hover:bg-white/10 transition-all duration-300 group-hover:scale-110">
                <info.icon className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-sm text-gray-400">Contact via</span>
                <span className="font-medium">{info.label}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-4 bg-white/5 rounded-xl transition-all duration-300 hover:scale-110 ${link.color}`}
            >
              <link.icon className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {link.label}
              </span>
            </a>
          ))}
        </div>

        <div className="max-w-xl mx-auto mb-16">
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email for updates"
              className="w-full bg-white/5 rounded-full px-6 py-4 pr-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-red-500 rounded-full hover:bg-red-600 transition-colors">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-8 border-t border-white/10">
          <p className="text-gray-400">
            &copy; 2025 IBK Digital Tech. All Rights Reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm font-medium hover:text-red-500 transition-all duration-300"
          >
            Back to top
            <span className="p-2 bg-white/5 rounded-full group-hover:bg-white/10 transition-all duration-300 group-hover:scale-110">
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}