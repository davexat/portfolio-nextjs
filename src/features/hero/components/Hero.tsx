import { LuArrowDown, LuMail, LuGithub, LuLinkedin } from 'react-icons/lu';
import Button from '../../shared/components/ui/Button';
import { scrollToSection } from '@/lib/utils';
import ParticlesBackground from './ParticlesBackground';

const HeroUI = ({ isDark }: { isDark: boolean }) => {
    return (
        <section id='home' className='hero'>
            <ParticlesBackground isDark={isDark} />
            <span className='flex-center flex-col gap-10  z-1'>
                <h1 className='text-hero gradient-title'>David Sandoval</h1>

                <p className='text-center text-2xl max-w-5xl p-2'>Full Stack Developer, Data Analyst & AI Enthusiast. I enjoy learning about new technologies and applying them to solve real-world problems.</p>

                <div className='flex-center gap-3'>
                    <Button onClick={() => scrollToSection('#about')} className='layout-button gap-2 size-button bg-button-live transitions'>
                        <p className='text-xl leading-none'>Learn More</p>
                        <LuArrowDown className="size-icon" />
                    </Button>
                    <Button href='https://github.com/tuusuario' target='_blank' rel='noopener noreferrer' className='layout-button size-button border-button border-button-hover bg-button bg-button-hero-hover transitions'>
                        <LuGithub className='size-icon' />
                    </Button>
                    <Button href='https://linkedin.com/in/tuusuario' target='_blank' rel='noopener noreferrer' className='layout-button size-button border-button border-button-hover bg-button bg-button-hero-hover transitions'>
                        <LuLinkedin className='size-icon' />
                    </Button>
                    <Button onClick={() => scrollToSection('#contact')} className='layout-button size-button border-button border-button-hover bg-button bg-button-hero-hover transitions'>
                        <LuMail className='size-icon' />
                    </Button>
                </div>
            </span>
        </section>
    )
}

export default HeroUI;