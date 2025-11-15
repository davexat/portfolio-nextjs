import { LuArrowDown, LuMail, LuGithub, LuLinkedin } from 'react-icons/lu';
import Button from '../../shared/components/ui/Button';
import { scrollToSection } from '@/lib/utils';
import ParticlesBackground from './ParticlesBackground';

const HeroUI = ({ isDark }: { isDark: boolean }) => {
    return (
        <section id='home' className='min-h-screen flex relative justify-center items-center bg-hero'>
            <ParticlesBackground isDark={isDark} />
            <span className='flex flex-col items-center justify-center gap-10 color-text z-1'>
                {/* Content */}
                <div className='flex flex-col text-center items-center max-w-6xl mx-auto gap-5 px-10'>
                    <span className='bg-white/50 dark:bg-white/0 p-2'>
                        <h1 className='text-hero gradient-title'>David Sandoval</h1>
                    </span>
                    <p className='text-2xl max-w-5xl bg-white/50 dark:bg-white/0 p-2'>Full Stack Developer, Data Analyst & AI Enthusiast. I enjoy learning about new technologies and applying them to solve real-world problems.</p>
                </div>
                {/* Buttons */}
                <div className='flex gap-3'>
                    <Button onClick={() => scrollToSection('#about')} className='layout-button border border-button border-button-hover gap-2 bg-button-contrast bg-button-contrast-hover size-button text-white transitions'>
                        <p className='text-xl leading-none'>Learn More</p>
                        <LuArrowDown className="size-icon" />
                    </Button>
                    <Button href='https://github.com/tuusuario' target='_blank' rel='noopener noreferrer' className='layout-button size-button border border-button border-button-hover bg-button bg-button-hover transitions'>
                        <LuGithub className='size-icon' />
                    </Button>
                    <Button href='https://linkedin.com/in/tuusuario' target='_blank' rel='noopener noreferrer' className='layout-button size-button border border-button border-button-hover bg-button bg-button-hover transitions'>
                        <LuLinkedin className='size-icon' />
                    </Button>
                    <Button onClick={() => scrollToSection('#contact')} className='layout-button size-button border border-button border-button-hover bg-button bg-button-hover transitions'>
                        <LuMail className='size-icon' />
                    </Button>
                </div>
            </span>
        </section>
    )
}

export default HeroUI;