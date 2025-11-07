import { LuGithub, LuExternalLink } from 'react-icons/lu';
import Button from '../../../components/ui/button';

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
        title: "Customer Segmentation Dashboard",
        description: "Interactive dashboard that visualizes customer segments to support targeted marketing and business decisions.",
        technologies: ["Python", "Pandas", "ScikitLearn", "Seaborn", "Streamlit"],
        repoLink: "https://github.com/davexat/Customer_Segmentation_Dashboard",
        status: statuses[0],
    },
    {
        title: "Weather Dashboard AI",
        description: "A PWA that provides real-time and forecasted weather data, interactive charts, alerts, and an AI assistant for any city.",
        technologies: ["React", "TypeScript", "Openweather API", "Vite", "MUI"],
        repoLink: "https://github.com/davexat/dashboard",
        liveLink: "https://davexat.github.io/dashboard/",
        status: statuses[0],
    },
    {
        title: "Curriculum Vitae Website",
        description: "Personal portfolio website showcasing skills, projects, and professional experience.",
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        liveLink: "https://davexat.vercel.app",
        repoLink: "https://github.com/davexat/portfolio-nextjs",
        status: statuses[1],
    },
    {
        title: "Telco Churn Predictor",
        description: "A predictive analytics dashboard that identifies at-risk customers, visualizes churn patterns, and provides actionable insights for retention.",
        technologies: ["Pandas", "XGBoost", "SHAP", "Power BI", "Seaborn"],
        repoLink: "https://github.com/davexat/telco-churn-prediction-powerbi",
        status: statuses[1],
    },
    {
        title: "Django API Suite",
        description: "Django REST API with user management, Firebase integration, and a responsive homepage for modern web apps.",
        technologies: ["Django", "Python", "Firebase", "REST API", "HTML", "Tailwind CSS", "JavaScript"],
        repoLink: "https://github.com/davexat/django_api_suite",
        liveLink: "https://davexat.pythonanywhere.com/",
        status: statuses[0],
    }
];

const ProjectUI = () => {
    return (
        <section id='projects' className='layout-section bg-section color-text'>
            <h1 className='text-title gradient-title'>Projects</h1>
            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-7xl w-full">
                {projects.map((project, index) => (
                    <article key={index} className='hover:shadow-md gap-4 flex flex-col justify-between size-button border rounded-md border-button bg-button transitions'>
                        <span className='flex justify-between items-center'>
                            <h2 className='text-xl'>{project.title}</h2>
                            <span className={`text-xs px-3 py-1 font-medium rounded-xl ${project.status.style}`}>{project.status.status}</span>
                        </span>
                        <p className='color-text'>{project.description}</p>
                        <ul className='flex flex-wrap gap-2'>
                            {project.technologies.map((tech, techIndex) => (
                                <li key={techIndex} className='text-sm border border-button rounded-xl px-2'>{tech}</li>
                            ))}
                        </ul>
                        <div className='flex gap-2'>
                            {project.repoLink && (
                                <Button className='flex items-center justify-center w-full border rounded-md py-1 text-black border-gray-400/80 bg-white hover:bg-gray-300 dark:bg-black dark:border-transparent dark:text-white dark:hover:bg-gray-800 transitions' href={project.repoLink} target='_blank' rel='noopener noreferrer'>
                                    <LuGithub className='inline h-4 w-4 mr-1' /> <p className='text-sm'>Repository</p>
                                </Button>
                            )}
                            {project.liveLink && (
                                <Button className='flex items-center justify-center w-full rounded-md py-1 overflow-hidden bg-button-contrast bg-button-contrast-hover transitions text-white' href={project.liveLink} target='_blank' rel='noopener noreferrer'>
                                    <span className="flex items-center gap-1">
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