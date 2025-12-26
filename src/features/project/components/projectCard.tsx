import { LuGithub, LuExternalLink } from 'react-icons/lu';
import Button from '../../shared/components/ui/Button';
import { Project } from '../data/projects';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <article className='gap-4 flex flex-col justify-between my-container my-container-hover hover:translate-y-[-5px] active:translate-y-[-5px] transitions'>
            <span className='flex justify-between gap-4 items-center'>
                <h3 className='gradient subheading-section'>{project.title}</h3>
                <span className={`text-xs px-3 py-1 font-medium rounded-xl shrink-0 ${project.status.style}`}>
                    {project.status.status}
                </span>
            </span>
            <p className='detail-text'>{project.description}</p>
            <ul className='flex flex-wrap gap-2'>
                {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex} className='text-xs sm:text-sm border border-slate-200 dark:border-slate-800 bg-blue-200 dark:bg-black rounded-xl px-2'>
                        {tech}
                    </li>
                ))}
            </ul>
            <div className='flex gap-2'>
                {project.repoLink && (
                    <Button
                        className='flex-center w-full bg-button-repo transitions gap-1'
                        href={project.repoLink}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <LuGithub className='h-4 w-4' />
                        <p>Repository</p>
                    </Button>
                )}
                {project.liveLink && (
                    <Button
                        className='flex-center w-full bg-button-live transitions gap-1'
                        href={project.liveLink}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <LuExternalLink className="h-4 w-4" />
                        <p>Live Demo</p>
                    </Button>
                )}
            </div>
        </article>
    );
};

export default ProjectCard;