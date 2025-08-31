import { useState, useEffect, use } from 'react';
import { Sun, Moon, Menu, X } from "lucide-react";
import { scrollToSection } from '@/lib/utils';
import Button from './ui/button';

const HeaderUI = () => {
    const [isDark, setIsDark] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const isDarkMode = localStorage.getItem('theme') === 'dark' ||
            (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
        setIsDark(isDarkMode);
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
        if (newTheme) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    const navItems = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#experience', label: 'Experience' },
        { href: '#contact', label: 'Contact' }
    ];

    const handleScrollToSection = (href: string) => {
        scrollToSection(href);
        setIsMobileMenuOpen(false);
    };

    return (
        <header className='fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b bg-white/80 dark:bg-neutral-950/80'>
            <div className='flex justify-between items-center mx-auto px-4 py-4 text-slate-700 dark:text-neutral-100 max-w-7xl'>
                <p className='text-2xl font-bold bg-gradient-to-r from-blue-500 via-blue-400 to-violet-600 bg-clip-text text-transparent'>
                    David Sandoval
                </p>
                {/* Desktop Navigation */}
                <nav className='hidden md:flex items-center space-x-8'>
                    {navItems.map((item) => (
                        <Button
                            className='relative group text-foreground transition-colors duration-300'
                            key={item.href}
                            onClick={() => handleScrollToSection(item.href)}
                        >
                            {item.label}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
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
                        className='md:hidden p-2'
                    >
                        {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <nav className='md:hidden p-4 border-t border-border/50 animate-fade-in flex flex-col space-y-4'>
                    {navItems.map((item) => (
                        <Button
                            className='text-left text-foreground-80 hover:text-foreground transition-colors duration-300 py-2'
                            key={item.href}
                            onClick={() => handleScrollToSection(item.href)}
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