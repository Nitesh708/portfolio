import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    // { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary-bg/95 backdrop-blur-lg shadow-lg shadow-accent-1/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#home"
            className="text-xl md:text-2xl font-bold text-text-primary hover:text-accent-1 transition-colors duration-300"
          >
            <span className="text-accent-1">
              Nitesh Jain
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-text-secondary hover:text-accent-1 transition-colors duration-300 font-medium relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-1 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text-primary hover:text-accent-1 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="bg-primary-bg/95 backdrop-blur-lg border-t border-secondary-bg">
          <div className="container mx-auto px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="block text-text-secondary hover:text-accent-1 transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-secondary-bg"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
