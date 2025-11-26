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
        url: '',
        icon: <LuGithub className='size-icon' />,
    },
    {
        name: 'LinkedIn',
        url: '',
        icon: <LuLinkedin className='size-icon' />,
    },
    {
        name: 'YouTube',
        url: '',
        icon: <LuYoutube className='size-icon' />,
    },
];