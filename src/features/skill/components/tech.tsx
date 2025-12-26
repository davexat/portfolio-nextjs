import clsx from "clsx";
import React from 'react';
import { hoverBorderColor, backgroundColor, hoverShadowColor } from "@/lib/utils";
import Image from 'next/image';

interface TechItemProps {
    icon: string;
    color: string;
    text: string;
    changeMode?: boolean;
}

const TechItem = ({ icon, color, text, changeMode }: TechItemProps) => {
    return (
        <li className={clsx('group relative flex-center flex-col my-container transitions', hoverBorderColor(color), hoverShadowColor(color))}>
            <span className="relative group-hover:-translate-y-8 transitions">
                <Image src={icon} alt={text} width={56} height={56} className={clsx('h-14 w-14', changeMode && 'invert')} />
                <span className={clsx("absolute inset-0 rounded-md opacity-0 group-hover:opacity-30 blur-md -z-1 transitions", backgroundColor(color))}></span>
            </span>
            <p className='opacity-0 w-full text-center group-hover:opacity-80 absolute top-15 text-sm transitions color-text'>{text}</p>
        </li>
    );
};

export default TechItem;