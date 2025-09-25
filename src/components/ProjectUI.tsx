import { LuGithub, LuExternalLink } from 'react-icons/lu';
import Button from './ui/button';

interface ProjectStatus {
    status: string;
    style: string;
}

const statuses: ProjectStatus[] = [
    { status: "Completed", style: "text-green-200 bg-green-800/90" },
    { status: "In Progress", style: "text-purple-200 bg-purple-800/90" },
    { status: "Planned", style: "text-blue-200 bg-blue-800/90" },
];

interface Project {
    title: string;
    description: string;
    technologies: string[];
    repoLink?: string;
    liveLink?: string;
    status: ProjectStatus;
}

const projects: Project[] = [
    {
        title: "Project 1",
        description: "Description for Project 1",
        technologies: ["React", "TypeScript", "TailwindCSS"],
        repoLink: "https://github.com/user/project1",
        liveLink: "https://project1.com",
        status: statuses[0],
    },
    {
        title: "Project 2",
        description: "Description for Project 2",
        technologies: ["Node.js", "Express"],
        liveLink: "https://project2.com",
        status: statuses[1],
    },
    {
        title: "Project 3",
        description: "Description for Project 3",
        technologies: ["Python", "Django"],
        repoLink: "https://github.com/user/project3",
        status: statuses[2],
    },
    {
        title: "Project 4",
        description: "Description for Project 4",
        technologies: ["Java", "Spring Boot"],
        status: statuses[0],
    }
];

const ProjectUI = () => {
    return (
        <section id='projects' className='p-10 gap-15 w-full flex flex-col items-center justify-center relative bg-white dark:bg-black'>
            <h1 className='text-4xl font-bold bg-gradient-to-r from-blue-500 via-blue-400 to-violet-600 bg-clip-text text-transparent text-center'>Projects</h1>
            {/* Content */}
            <div className='flex flex-wrap gap-5'>
                {projects.map((project, index) => (
                    <article key={index} className='grow-1 shrink-1 basis-full lg:basis-1/3 gap-4 grid grid-cols-[1fr_auto] auto-cols-max dark:bg-zinc-900 hover:text-blue-500 dark:text-white transition-all duration-300 px-5 py-5 border rounded-md border-gray-400/20'>
                        <h2 className='col-span-1 text-xl'>{project.title}</h2>
                        <span className={`col-span-1 text-xs w-fit px-3 py-1 font-medium rounded-xl ${project.status.style} h-fit`}>{project.status.status}</span>
                        <p className='col-span-2 text-md text-slate-500'>{project.description}</p>
                        <ul className='col-span-2 flex flex-wrap gap-2 h-fit'>
                            {project.technologies.map((tech, techIndex) => (
                                <li key={techIndex} className='text-sm text-blue-700 bg-blue-200 border border-blue-400 rounded-xl px-2 dark:text-white dark:bg-zinc-950 dark:border-transparent'>{tech}</li>
                            ))}
                        </ul>
                        <div className='col-span-2 flex gap-2'>
                            {project.repoLink && (
                                <Button className='flex items-center justify-center w-full border rounded-md py-1 text-black border-gray-400/80 bg-white hover:bg-gray-300 dark:bg-black dark:border-transparent dark:text-white dark:hover:bg-gray-800 transition-all duration-300' href={project.repoLink} target='_blank' rel='noopener noreferrer'>
                                    <LuGithub className='inline h-4 w-4 mr-1' /> <p className='text-sm'>Repository</p>
                                </Button>
                            )}
                            {project.liveLink && (
                                <Button className='relative flex items-center justify-center w-full rounded-md py-1 overflow-hidden group text-black hover:text-white' href={project.liveLink} target='_blank' rel='noopener noreferrer'>
                                    <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-500 via-blue-400 to-violet-600 group-hover:opacity-0" />
                                    <div className="absolute inset-0 z-0 bg-blue-900 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                    <span className="relative z-10 flex items-center gap-1">
                                        <LuExternalLink className="h-4 w-4 mr-1" /> <p className='text-sm'>Live Demo</p>
                                    </span>
                                </Button>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default ProjectUI;