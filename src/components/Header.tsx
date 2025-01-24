import React, { useState, useEffect } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';

interface NavLink {
  title: string;
  href: string;
}

const navLinks: NavLink[] = [
  { title: 'Movies and Series', href: 'https://wa.me/254757033657?text=I%20am%20interested%20in%20Movies%20and%20Series' },
  { title: 'Supersport App', href: 'https://wa.me/254757033657?text=I%20am%20interested%20in%20Supersport%20App' },
  { title: 'DStv Channels', href: 'https://wa.me/254757033657?text=I%20am%20interested%20in%20DStv%20Channels' },
  { title: 'Local Channels', href: 'https://wa.me/254757033657?text=I%20am%20interested%20in%20Local%20Channels' }
];

export default function Header({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="relative">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto flex items-center justify-between px-4">
          <h1 className="text-2xl font-bold text-white">IBK Digital</h1>
          
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-6 h-6 text-white" /> : <Moon className="w-6 h-6 text-white" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-20">
            <div className="grid gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="text-2xl font-medium text-white hover:text-red-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="relative bg-gradient-to-r from-red-600 via-blue-600 to-black text-white">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        <div className="container mx-auto px-4 pt-32 pb-20 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Welcome to IBK Digital Tech
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-200 animate-fade-in-delay">
              Your One-Stop Shop for Digital Entertainment Solutions
            </p>
            <a
              href="#services"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-medium transition-colors animate-fade-in-delay-2"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
      
      <div className="bg-black text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl font-medium mb-8 leading-relaxed">
              Enjoy FREE and UNLIMITED access to all popular SPORTS, MOVIES/SERIES channels INC. Supersports, Skysports, Nbc plus all popular streaming platforms like netflix, prime and hulu Direct on your smart tv/smartphone all at onetime purchase;
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full" />
                    No monthly payments, install & enjoy forever
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full" />
                    Full HD, no buffering
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full" />
                    No ads, smooth streaming
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full" />
                    Works on all android devices
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}