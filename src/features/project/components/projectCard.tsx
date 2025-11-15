import { LuGithub, LuExternalLink } from 'react-icons/lu';
import Button from '../../../components/ui/button';
import { Project } from '../data/projects';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <article className='hover:shadow-md gap-4 flex flex-col justify-between size-button border rounded-md border-button border-button-hover bg-button hover:translate-y-[-5px] transitions'>
            <span className='flex justify-between gap-4 items-center'>
                <h3 className='text-2xl gradient-title'>{project.title}</h3>
                <span className={`text-xs px-3 py-1 font-medium rounded-xl shrink-0 ${project.status.style}`}>
                    {project.status.status}
                </span>
            </span>
            <p className='color-text'>{project.description}</p>
            <ul className='flex flex-wrap gap-2'>
                {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex} className='text-sm border border-button bg-blue-200 color-text dark:bg-black rounded-xl px-2'>
                        {tech}
                    </li>
                ))}
            </ul>
            <div className='flex gap-2'>
                {project.repoLink && (
                    <Button 
                        className='flex items-center justify-center w-full border rounded-md py-1 text-black border-gray-400/80 bg-white hover:bg-gray-400/20 dark:bg-black dark:border-transparent dark:text-white dark:hover:bg-blue-400/20 transitions' 
                        href={project.repoLink} 
                        target='_blank' 
                        rel='noopener noreferrer'
                    >
                        <LuGithub className='inline h-4 w-4 mr-1' /> 
                        <p className='text-sm'>Repository</p>
                    </Button>
                )}
                {project.liveLink && (
                    <Button 
                        className='flex items-center justify-center w-full rounded-md py-1 overflow-hidden bg-button-contrast bg-button-contrast-hover transitions text-white' 
                        href={project.liveLink} 
                        target='_blank' 
                        rel='noopener noreferrer'
                    >
                        <span className="flex items-center gap-1">
                            <LuExternalLink className="h-4 w-4 mr-1" /> 
                            <p className='text-sm'>Live Demo</p>
                        </span>
                    </Button>
                )}
            </div>
        </article>
    );
};

export default ProjectCard;