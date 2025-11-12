import { LuCalendar, LuLayers } from "react-icons/lu";
import getExperiences from "../data/experiences";

const ExperienceUI = () => {

    const experiences = getExperiences();

    return (
        <section id='experience' className='layout-section bg-section color-text'>
            <h2 className='text-title gradient-title'>Education & Experience</h2>
            {/* Content */}
            <div className="max-w-7xl w-full flex flex-col gap-4 relative before:content-[''] .bg-gradient before:absolute before:w-[0.5] before:left-[29] before:bg-red-50 before:top-0 before:bottom-0 before:z-0">
                {experiences.map((exp, key) => (
                    <span key={key} className='flex items-start gap-3'>
                        <span className='border self-start p-4 rounded-full bg-button z-1'><LuLayers className='size-icon' /></span>
                        <article className='flex flex-col size-button border rounded-md border-button bg-button transitions gap-2'>
                            <span className='flex justify-between items-center'>
                                <span className=''>
                                    <h3 className='text-xl'>{exp.title}</h3>
                                    <span className='text-lg'>{exp.institution}</span>
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <LuCalendar className='size-icon' />
                                    <span className=''>{exp.dateRange}</span>
                                </span>
                            </span>
                            <p className='text-md col-span-2'>{exp.description}</p>
                        </article>
                    </span>
                ))}
            </div>
        </section>
    );
};

export default ExperienceUI;