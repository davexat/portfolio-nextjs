 'use client';
import { Header } from '@/features/header';
import { Hero } from '@/features/hero';
import { About } from '@/features/about';
import { Skill } from '@/features/skill';
import { Project } from '@/features/project';
import { Experience } from '@/features/experience';
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
            <Hero />
            <About />
            <Skill isDark={isDark} />
            <Project />
            <Experience />
        </>
    );
}
