import { LuCalendar } from "react-icons/lu";
import getExperiences from "../data/experiences";

const ExperienceUI = () => {

    const experiences = getExperiences();

    return (
        <section id='experience' className='layout-section bg-section color-text'>
            <h2 className='text-title gradient-title'>Education & Experience</h2>
            {/* Content */}
            <div className="max-w-7xl w-full">
                {experiences.map((exp, key) => (
                    <article key={key} className='size-button border rounded-md border-button bg-button transitions gap-3'>
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
                ))}
            </div>
        </section>
    );
};

export default ExperienceUI;