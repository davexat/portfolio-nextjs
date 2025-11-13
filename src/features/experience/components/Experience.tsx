import { LuLayers, LuGraduationCap } from "react-icons/lu";
import { getExperiences, getEducation } from "../data/experiences";
import TimelineSection from './timelineSection';

const ExperienceUI = () => {
    const experiences = getExperiences();
    const education = getEducation();

    const timelineSections = [
        {
            title: "Experience",
            items: experiences,
            icon: <LuLayers className='size-icon' />
        },
        {
            title: "Education",
            items: education,
            icon: <LuGraduationCap className='size-icon' />
        }
    ];

    return (
        <section id='experience' className='layout-section bg-section color-text'>
            <h2 className='text-title gradient-title'>Education & Experience</h2>
            <span className='max-w-7xl lg:max-w-5xl w-full flex flex-col gap-4'>
                {timelineSections.map((section) => (
                    <TimelineSection
                        key={section.title}
                        title={section.title}
                        items={section.items}
                        icon={section.icon}
                    />
                ))}
            </span>
        </section>
    );
};

export default ExperienceUI;