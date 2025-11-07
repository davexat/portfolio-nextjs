import clsx from "clsx";
import React from 'react';
import { hoverBorderColor, backgroundColor, hoverShadowColor } from "@/lib/utils";

interface TechItemProps {
    icon: string;
    color: string;
    text: string;
    changeMode?: boolean;
}

const TechItem = ({ icon, color, text, changeMode } : TechItemProps) => {
    return (
        <li className={clsx('group relative flex flex-col transition-all duration-300 justify-center items-center p-4 border rounded-md border-gray-400/20 hover:shadow-md bg-white dark:bg-zinc-900', hoverBorderColor(color), hoverShadowColor(color))}>
            <span className="relative group-hover:-translate-y-8 transition-transform duration-300">
                <img src={icon} alt={text} className={clsx('h-14 w-14', changeMode && 'invert')} />
                <span className={clsx("absolute inset-0 rounded-md opacity-0 group-hover:opacity-30 blur-md transition-all duration-300 -z-1", backgroundColor(color))}></span>
            </span>
            <p className='opacity-0 group-hover:opacity-100 absolute top-15 text-sm transition-opacity duration-300 text-slate-500 dark:text-gray-300'>{text}</p>
        </li>
    );
};

export default TechItem;