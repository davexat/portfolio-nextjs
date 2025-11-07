import { LuCalendar } from "react-icons/lu";

const ExperienceUI = () => {
    return (
        <section id='experience' className='p-10 gap-15 w-full flex flex-col items-center justify-center relative bg-white dark:bg-black'>
            <h1 className='text-4xl font-bold bg-gradient-to-r from-blue-500 via-blue-400 to-violet-600 bg-clip-text text-transparent text-center'>Education & Experience</h1>
            {/* Content */}
            <div className="max-w-7xl w-full">
                <article className='grid grid-cols-[1fr_auto] auto-cols-max'>
                    <div className="col-span-1">
                        <h3 className='text-xl font-semibold'>Teaching Assistant - Software Design</h3>
                        <span className='text-md'>Escuela Superior Politécnica del Litoral (ESPOL)</span>
                    </div>
                    <div className="col-span-1 w-fit text-slate-500 flex items-center">
                        <LuCalendar className='inline h-5 w-5 mr-1' />
                        <span className='text-md'>Sep 2024 - Jan 2025</span>
                    </div>
                    <p className='text-md col-span-2'>Assisted students in the Software Design course by reviewing and grading assignments, providing feedback, and offering support on programming and design principles during office hours.</p>
                </article>
            </div>
        </section>
    );
};

export default ExperienceUI;