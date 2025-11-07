import { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { scrollToSection } from '@/lib/utils';
import Button from '@/components/ui/button';

type Props = {
  isDark: boolean;
  toggleTheme: () => void;
};

export default function Header({ isDark, toggleTheme }: Props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleScrollToSection = (href: string) => {
    scrollToSection(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-header layout-header style-header transitions">
      <div className="flex justify-between items-center mx-auto px-5 md:px-10 py-4 max-w-7xl color-text">
        <p className="text-header gradient-title">
          David Sandoval
        </p>
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Button
              className="group relative opacity-80-100 transitions"
              key={item.href}
              onClick={() => handleScrollToSection(item.href)}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pc transitions group-hover:w-full"></span>
            </Button>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button onClick={toggleTheme}>
            {isDark ? <Sun className="size-icon opacity-80-100 transitions" /> : <Moon className="size-icon opacity-80-100 transitions" />}
          </Button>
          <Button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden">
            {isMobileMenuOpen ? <X className="size-icon opacity-80-100 transitions" /> : <Menu className="size-icon opacity-80-100 transitions" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden p-4 flex flex-col gap-1 color-text">
          {navItems.map((item) => (
            <Button
              className="text-left opacity-80-100 rounded-sm  py-2 px-4 transitions"
              key={item.href}
              onClick={() => handleScrollToSection(item.href)}
            >
              {item.label}
            </Button>
          ))}
        </nav>
      )}
    </header>
  );
}
