import { LuArrowDown, LuMail, LuGithub, LuLinkedin } from 'react-icons/lu';
import Button from '../../shared/components/ui/Button';
import { scrollToSection } from '@/lib/utils';
import ParticlesBackground from './ParticlesBackground';

const HeroUI = ({ isDark }: { isDark: boolean }) => {
    return (
        <section id='home' className='hero'>
            <ParticlesBackground isDark={isDark} />
            <span className='flex-center flex-col gap-10 z-1 w-8/10'>
                <h1 className='gradient title-hero'>David Sandoval</h1>

                <p className='hero-text'>Full Stack Developer, Data Analyst & AI Enthusiast. I enjoy learning about new technologies and applying them to solve real-world problems.</p>

                <div className='flex-center gap-3'>
                    <Button onClick={() => scrollToSection('#about')} className='button-hero-principal transitions'>
                        <p className='text-button'>Learn More</p>
                        <LuArrowDown className="size-icon" />
                    </Button>
                    <Button href='https://github.com/davexat' target='_blank' rel='noopener noreferrer' className='button-hero-icon transitions'>
                        <LuGithub className='size-icon' />
                    </Button>
                    <Button href='https://www.linkedin.com/in/david-sandoval-bernitta/' target='_blank' rel='noopener noreferrer' className='button-hero-icon transitions'>
                        <LuLinkedin className='size-icon' />
                    </Button>
                    <Button onClick={() => scrollToSection('#contact')} className='button-hero-icon transitions'>
                        <LuMail className='size-icon' />
                    </Button>
                </div>
            </span>
        </section>
    )
}

export default HeroUI;