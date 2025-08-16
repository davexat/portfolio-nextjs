import {useState, useEffect, use} from 'react';
import { Sun, Moon, Menu, X } from "lucide-react";
import Button from './ui/button';

const HeaderUI = () => {
    const [isDark, setIsDark] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const isDarkMode = localStorage.getItem('theme') === 'dark' ||
            (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
        setIsDark(isDarkMode);
        document.documentElement.classList.toggle('dark', isDarkMode);
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark', newTheme);
    };

    const navItems = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#experience', label: 'Experience' },
        { href: '#contact', label: 'Contact' }
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <header className='flex'>
            <p className='bg-gradient-to-r from-blue-600 via-purple-400 to-orange-600  bg-clip-text text-transparent'>
                David Sandoval
            </p>
            {/* Desktop Navigation */}
            <nav>
                {navItems.map((item) => (
                    <Button 
                        className=''
                        key={item.href}
                        onClick={() => scrollToSection(item.href)}
                    >
                        {item.label}
                    </Button>
                ))}
            </nav>

            <div className='flex items-center space-x-4'>
                <Button 
                    onClick={toggleTheme}
                    className='p-2'
                >
                    {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>

                <Button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className='p-2'
                >
                    {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>

            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <nav className='fixed left-0 right-0 z-50 mt-4 py-4 border-t border-border/50 animate-fade-in'>
                    {navItems.map((item) => (
                        <Button 
                            className='text-left text-foreground-80 hover:text-foreground transition-colors duration-300 py-2'
                            key={item.href}
                            onClick={() => scrollToSection(item.href)}
                        >
                            {item.label}
                        </Button>
                    ))}
                </nav>
            )}
        </header>
    )
}

export default HeaderUI;