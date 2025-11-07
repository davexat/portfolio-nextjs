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
        <section id='projects' className='section-container'>
            <h1 className='section-title'>Projects</h1>
            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-7xl w-full">
                {projects.map((project, index) => (
                    <article key={index} className='project-card'>
                        <h2 className='col-span-1 text-xl'>{project.title}</h2>
                        <span className={`col-span-1 text-xs w-fit px-3 py-1 font-medium rounded-xl ${project.status.style} h-fit`}>{project.status.status}</span>
                        <p className='col-span-2 text-md text-slate-500'>{project.description}</p>
                        <ul className='col-span-2 flex flex-wrap gap-2 h-fit'>
                            {project.technologies.map((tech, techIndex) => (
                                <li key={techIndex} className="tech-item">{tech}</li>
                            ))}
                        </ul>
                        <div className='col-span-2 flex gap-2'>
                            {project.repoLink && (
                                <Button className="btn-repo" href={project.repoLink} target='_blank' rel='noopener noreferrer'>
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