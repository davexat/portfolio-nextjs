 'use client';
import { Header } from '@/features/header';
import HeroUI from '@/components/HeroUI';
import { About } from '@/features/about';
import SkillUI from '@/components/SkillUI';
import ProjectUI from '@/components/ProjectUI';
import { useState, useEffect } from 'react';

export default function Home() {
    const [isDark, setIsDark] = useState(false);

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

    return (
        <>
            <Header isDark={isDark} toggleTheme={toggleTheme} />
            <HeroUI />
            <About />
            <SkillUI isDark={isDark} />
            <ProjectUI />
        </>
    );
}
