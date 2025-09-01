import { clsx } from "clsx";

export const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

export const hoverBorderColor = (color: string) => {
    return clsx({
        "hover:border-red-500": color === "red",
        "hover:border-orange-500": color === "orange",
        "hover:border-amber-500": color === "amber",
        "hover:border-yellow-500": color === "yellow",
        "hover:border-lime-500": color === "lime",
        "hover:border-green-500": color === "green",
        "hover:border-emerald-500": color === "emerald",
        "hover:border-teal-500": color === "teal",
        "hover:border-cyan-500": color === "cyan",
        "hover:border-sky-500": color === "sky",
        "hover:border-blue-500": color === "blue",
        "hover:border-indigo-500": color === "indigo",
        "hover:border-violet-500": color === "violet",
        "hover:border-purple-500": color === "purple",
        "hover:border-fuchsia-500": color === "fuchsia",
        "hover:border-pink-500": color === "pink",
        "hover:border-rose-500": color === "rose",
        "hover:border-slate-500": color === "slate",
        "hover:border-gray-500": color === "gray",
        "hover:border-zinc-500": color === "zinc",
        "hover:border-neutral-500": color === "neutral",
        "hover:border-stone-500": color === "stone",
    });
};

export const backgroundColor = (color: string) => {
    return clsx({
        "bg-red-500": color === "red",
        "bg-orange-500": color === "orange",
        "bg-amber-500": color === "amber",
        "bg-yellow-500": color === "yellow",
        "bg-lime-500": color === "lime",
        "bg-green-500": color === "green",
        "bg-emerald-500": color === "emerald",
        "bg-teal-500": color === "teal",
        "bg-cyan-500": color === "cyan",
        "bg-sky-500": color === "sky",
        "bg-blue-500": color === "blue",
        "bg-indigo-500": color === "indigo",
        "bg-violet-500": color === "violet",
        "bg-purple-500": color === "purple",
        "bg-fuchsia-500": color === "fuchsia",
        "bg-pink-500": color === "pink",
        "bg-rose-500": color === "rose",
        "bg-slate-500": color === "slate",
        "bg-gray-500": color === "gray",
        "bg-zinc-500": color === "zinc",
        "bg-neutral-500": color === "neutral",
        "bg-stone-500": color === "stone",
    });
};
