
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'py-4 bg-background/80 backdrop-blur-lg shadow-sm' : 'py-6 bg-transparent'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-secondary dark:text-white">
          Bianca<span className="text-primary">.dev</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link dark:text-white">
              {link.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        <button
          className="md:hidden text-secondary dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 dark:bg-secondary backdrop-blur-lg shadow-lg py-4 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 px-6 nav-link dark:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="px-6 pt-2">
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
