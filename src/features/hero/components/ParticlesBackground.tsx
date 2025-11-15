'use client';
import { useEffect } from 'react';
import { particlesConfigLight, particlesConfigDark } from '../particlesConfig';

const ParticlesBackground = ({ isDark }: { isDark: boolean }) => {
    useEffect(() => {
        if (typeof window !== 'undefined' && window.particlesJS) {
            window.particlesJS(
                'particles-js',
                isDark ? particlesConfigDark : particlesConfigLight
            );
        }
    }, [isDark]);

    return (
        <div id="particles-js" className="absolute inset-0 w-full h-full" />
    );
};

export default ParticlesBackground;