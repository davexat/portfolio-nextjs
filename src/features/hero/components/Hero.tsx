import { LuArrowDown, LuMail, LuGithub, LuLinkedin } from 'react-icons/lu';
import Button from '../../../components/ui/button';
import { scrollToSection } from '@/lib/utils';

const HeroUI = () => {
    return (
        <section id='home' className='min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-white dark:bg-black gap-10'>
            {/* Content */}
            <div className='flex flex-col text-center items-center max-w-6xl mx-auto gap-5 px-10'>
                <h1 className='text-7xl font-bold bg-gradient-to-r from-blue-500 via-blue-400 to-violet-600 bg-clip-text text-transparent'>David Sandoval</h1>
                <p className='text-2xl text-slate-700 dark:text-neutral-100 max-w-5xl'>Full Stack Developer, Data Analyst & AI Enthusiast. I enjoy learning about new technologies and applying them to solve real-world problems.</p>
            </div>
            {/* Buttons */}
            <div className='flex items-stretch gap-3'>
                <Button onClick={() => scrollToSection('#about')} className='relative flex items-center justify-center rounded-md py-2 px-4 overflow-hidden group border gap-2 border-blue-400/20 dark:hover:border-blue-400'>
                    <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-500 via-blue-400 to-violet-600 bg-[length:200%_200%] animate-gradient-move transition-opacity duration-300 group-hover:opacity-0" />
                    <div className="absolute inset-0 z-0 bg-blue-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="relative z-10 flex items-center gap-1 text-white">
                        <p className='text-lg'>Learn More</p>
                        <LuArrowDown className="h-5 w-5" />
                    </span>
                </Button>
                <Button href='https://github.com/tuusuario' target='_blank' rel='noopener noreferrer' className='flex items-center py-2 px-3.5 bg-white/80 hover:bg-blue-300/80 dark:bg-slate-900/80 dark:hover:bg-blue-900/90 border rounded-md overflow-hidden border-blue-400/20 hover:border-blue-400 transition-all duration-300 text-slate-900 dark:text-white'>
                    <LuGithub className='h-5 w-5' />
                </Button>
                <Button href='https://linkedin.com/in/tuusuario' target='_blank' rel='noopener noreferrer' className='flex items-center py-2 px-3.5 bg-white/80 hover:bg-blue-300/80 dark:bg-slate-900/80 dark:hover:bg-blue-900/90 border rounded-md overflow-hidden border-blue-400/20 hover:border-blue-400 transition-all duration-300 text-slate-900 dark:text-white'>
                    <LuLinkedin className='h-5 w-5' />
                </Button>
                <Button onClick={() => scrollToSection('#contact')} className='flex items-center py-2 px-3.5 bg-white/80 hover:bg-blue-300/80 dark:bg-slate-900/80 dark:hover:bg-blue-900/90 border rounded-md overflow-hidden border-blue-400/20 hover:border-blue-400 transition-all duration-300 text-slate-900 dark:text-white'>
                    <LuMail className='h-5 w-5' />
                </Button>
            </div>
        </section>
    )
}

export default HeroUI;