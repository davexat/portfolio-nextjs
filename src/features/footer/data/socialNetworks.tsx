import React from 'react';
import { LuGithub, LuLinkedin, LuYoutube } from 'react-icons/lu';

export interface SocialNetwork {
    name: string;
    url: string;
    icon: React.ReactNode;
}

export const socialNetworks: SocialNetwork[] = [
    {
        name: 'GitHub',
        url: 'https://github.com/davexat',
        icon: <LuGithub className='size-icon' />,
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/david-sandoval-bernitta/',
        icon: <LuLinkedin className='size-icon' />,
    },
    {
        name: 'YouTube',
        url: 'https://www.youtube.com/@davexat',
        icon: <LuYoutube className='size-icon' />,
    },
];