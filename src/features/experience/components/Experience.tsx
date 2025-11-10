import { LuCalendar } from "react-icons/lu";

const ExperienceUI = () => {
    return (
        <section id='experience' className='layout-section bg-section color-text'>
            <h2 className='text-title gradient-title'>Education & Experience</h2>
            {/* Content */}
            <div className="max-w-7xl w-full">
                <article className='size-button border rounded-md border-button bg-button transitions'>
                    <span className='flex justify-between items-center'>
                        <span className=''>
                            <h3 className='text-xl'>Teaching Assistant - Software Design</h3>
                            <span className='text-lg'>Escuela Superior Politécnica del Litoral (ESPOL)</span>
                        </span>
                        <span className='flex gap-2 items-center'>
                            <LuCalendar className='size-icon' />
                            <span className=''>Sep 2024 - Jan 2025</span>
                        </span>
                    </span>
                    <p className='text-md col-span-2'>Assisted students in the Software Design course by reviewing and grading assignments, providing feedback, and offering support on programming and design principles during office hours.</p>
                </article>
            </div>
        </section>
    );
};

export default ExperienceUI;