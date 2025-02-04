import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

interface FooterProps {
  isDark: boolean;
}

const Footer = ({ isDark }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub className="w-5 h-5" />, href: '#', label: 'GitHub' },
    { icon: <FaTwitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <FaInstagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <FaLinkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <FaWhatsapp className="w-5 h-5" />, href: '#', label: 'WhatsApp' },
    { icon: <HiMail className="w-5 h-5" />, href: '#', label: 'Email' },
  ];

  const footerLinks = {
    Services: [
      { label: 'Web Development', href: '#' },
      { label: 'Mobile Development', href: '#' },
      { label: 'UI/UX Design', href: '#' },
      { label: 'Backend Development', href: '#' },
    ],
    Company: [
      { label: 'About Us', href: '#' },
      { label: 'Our Team', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    Support: [
      { label: 'Help Center', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'FAQ', href: '#' },
    ],
  };

  return (
    <footer className={`transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <img src="/images/logo.png" alt="IBK Digital Tech" className="h-10 w-auto" />
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Transforming ideas into digital reality. We create innovative solutions for businesses worldwide.
              </p>
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className={`p-2 rounded-full transition-colors ${
                      isDark
                        ? 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links], sectionIndex) => (
            <div key={title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                className="space-y-4"
              >
                <h3 className={`font-semibold text-lg ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {title}
                </h3>
                <ul className="space-y-2">
                  {links.map((link, index) => (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <a
                        href={link.href}
                        className={`hover:underline transition-colors ${
                          isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-12 pt-8 border-t ${
            isDark ? 'border-white/10' : 'border-gray-200'
          }`}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              © {currentYear} IBK Digital Tech. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className={`text-sm hover:underline ${
                  isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className={`text-sm hover:underline ${
                  isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;