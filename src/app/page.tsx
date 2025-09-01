'use client';
import FlowBackground from '@/components/FlowBackground';
import HeaderUI from '@/components/HeaderUI';
import HeroUI from '@/components/HeroUI';
import AboutUI from '@/components/AboutUI';
import SkillUI from '@/components/SkillUI';
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
            <HeaderUI isDark={isDark} toggleTheme={toggleTheme} />
            <HeroUI />
            <AboutUI />
            <SkillUI isDark={isDark} />
        </>
    );
}
