import { projects } from '../data/projects';
import ProjectCard from './projectCard';

const ProjectUI = () => {
    return (
        <section id='projects' className='layout-section bg-section color-text'>
            <h2 className='text-title gradient-title'>Projects</h2>
            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-7xl w-full">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    )
}

export default ProjectUI;