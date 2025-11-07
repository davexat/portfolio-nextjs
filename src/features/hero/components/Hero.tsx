import { LuArrowDown, LuMail, LuGithub, LuLinkedin } from 'react-icons/lu';
import Button from '../../../components/ui/button';
import { scrollToSection } from '@/lib/utils';

const Class = 'flex items-center rounded-md';

const HeroUI = () => {
    return (
        <section id='home' className='min-h-screen flex flex-col items-center justify-center gap-10 bg-hero color-text'>
            {/* Content */}
            <div className='flex flex-col text-center items-center max-w-6xl mx-auto gap-5 px-10'>
                <h1 className='text-hero gradient-title'>David Sandoval</h1>
                <p className='text-2xl max-w-5xl'>Full Stack Developer, Data Analyst & AI Enthusiast. I enjoy learning about new technologies and applying them to solve real-world problems.</p>
            </div>
            {/* Buttons */}
            <div className='flex gap-3'>
                <Button onClick={() => scrollToSection('#about')} className='layout-button border border-button gap-2 bg-pc size-button color-text-invert bg-button-contrast-hover transitions'>
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
        </section>
    )
}

export default HeroUI;