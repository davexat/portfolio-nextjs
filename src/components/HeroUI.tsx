import { LuArrowDown, LuMail, LuGithub, LuLinkedin } from 'react-icons/lu';
import Button from './ui/button';
import { scrollToSection } from '@/lib/utils';

const HeroUI = () => {
    return (
        <section id='home' className='min-h-screen flex items-center justify-center relative overflow-hidden'>

            {/* Buttons */}
            <div className='flex items-center space-x-4'>
                <Button onClick={() => window.open('https://github.com/tuusuario', '_blank')} className='py-2 px-3.5 bg-white/80 hover:bg-blue-300/80 dark:bg-slate-900/80 dark:hover:bg-blue-900/90 border rounded-md overflow-hidden border-blue-400/20 hover:border-blue-400 transition-all duration-300 text-slate-900 dark:text-white'>
                    <LuGithub className='h-5 w-5' />
                </Button>
                <Button onClick={() => window.open('https://linkedin.com/in/tuusuario', '_blank')} className='py-2 px-3.5 bg-white/80 hover:bg-blue-300/80 dark:bg-slate-900/80 dark:hover:bg-blue-900/90 border rounded-md overflow-hidden border-blue-400/20 hover:border-blue-400 transition-all duration-300 text-slate-900 dark:text-white'>
                    <LuLinkedin className='h-5 w-5' />
                </Button>
                <Button onClick={() => scrollToSection('contact')} className='py-2 px-3.5 bg-white/80 hover:bg-blue-300/80 dark:bg-slate-900/80 dark:hover:bg-blue-900/90 border rounded-md overflow-hidden border-blue-400/20 hover:border-blue-400 transition-all duration-300 text-slate-900 dark:text-white'>
                    <LuMail className='h-5 w-5' />
                </Button>
            </div>
        </section>
    )
}

export default HeroUI;