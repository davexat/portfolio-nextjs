export type Tech = {
    icon: string;
    color: string;
    text: string;
    changeMode?: boolean;
}

export type SkillSection = {
    title: string;
    items: Tech[];
    titleClass: string;
    articleClass: string;
    listClass: string;
}

const titleClassDefault = 'text-2xl text-center';

export const getSkillSections = (isDark: boolean): SkillSection[] => [
    {
        title: 'Data Analysis',
        titleClass: titleClassDefault,
        articleClass: "flex flex-col grow shrink basis-full md:basis-1/3 xl:basis-1/4 gap-5",
        listClass: "layout-list-skill",
        items: [
            { icon: "/icons/python.png", color: "yellow", text: "Python" },
            { icon: "/icons/mysql.png", color: "sky", text: "MySQL" },
            { icon: "/icons/postgresql.png", color: "blue", text: "PostgreSQL" },
            { icon: "/icons/pandas.png", color: "indigo", text: "Pandas" },
            { icon: "/icons/numpy.png", color: "cyan", text: "Numpy" },
            { icon: "/icons/jupyter.png", color: "orange", text: "Jupyter" },
            { icon: "/icons/plotly.png", color: "fuchsia", text: "Plotly" },
            { icon: "/icons/matplotlib.png", color: "violet", text: "Matplotlib" },
            { icon: "/icons/seaborn.png", color: "blue", text: "Seaborn" },
            { icon: "/icons/scikitlearn.png", color: "orange", text: "ScikitLearn" },
            { icon: "/icons/streamlit.png", color: "red", text: "Streamlit" },
            { icon: "/icons/powerbi.png", color: "yellow", text: "Power BI" },
        ]
    },
    {
        title: "Software Development",
        titleClass: titleClassDefault,
        articleClass: "flex flex-col grow shrink basis-full md:basis-1/3 xl:basis-1/4 gap-5",
        listClass: "layout-list-skill",
        items: [
            { icon: "/icons/html.png", color: "orange", text: "HTML" },
            { icon: "/icons/css.png", color: "purple", text: "CSS" },
            { icon: "/icons/javascript.png", color: "yellow", text: "JavaScript" },
            { icon: "/icons/typescript.png", color: "blue", text: "TypeScript" },
            { icon: "/icons/sass.png", color: "pink", text: "Sass" },
            { icon: "/icons/tailwindcss.png", color: "cyan", text: "TailwindCSS" },
            { icon: "/icons/react.png", color: "blue", text: "React" },
            { icon: "/icons/nodejs.png", color: "green", text: "Node.js" },
            { icon: "/icons/nextjs.png", color: "slate", text: "Next.js" },
            { icon: "/icons/django.png", color: "green", text: "Django" },
            { icon: "/icons/lovable.png", color: "pink", text: "Lovable" },
            { icon: "/icons/figma.png", color: "purple", text: "Figma" },
        ]
    },
    {
        title: "Others",
        titleClass: titleClassDefault,
        articleClass: "flex flex-col grow shrink basis-full xl:basis-1/4 gap-5",
        listClass: "layout-list-skill",
        items: [
            { icon: "/icons/java.png", color: "orange", text: "Java" },
            { icon: "/icons/junit5.png", color: "red", text: "JUnit5" },
            { icon: "/icons/git.png", color: "orange", text: "Git" },
            { icon: "/icons/github.png", color: "slate", text: "GitHub", changeMode: isDark },
            { icon: "/icons/markdown.png", color: "slate", text: "Markdown", changeMode: isDark },
            { icon: "/icons/c.png", color: "indigo", text: "C" },
            { icon: "/icons/dataspell.png", color: "slate", text: "DataSpell" },
            { icon: "/icons/visualstudiocode.png", color: "blue", text: "VSC" },
        ]
    }
];

export default getSkillSections;