import TechItem from './tech';
import getSkillSections from '../data/skills';

const SkillUI = ({ isDark }: { isDark: boolean }) => {

    const skillSections = getSkillSections(isDark);

    return (
        <section id='skills' className='layout-section bg-section color-text'>
            <h2 className='gradient-title text-title'>Skills & Tools</h2>
            <span className='flex flex-wrap max-w-7xl gap-10'>
                {skillSections.map((section, key) => (
                    <article key={key} className={section.articleClass}>
                        <h3 className={section.titleClass}>{section.title}</h3>
                        <ul className={section.listClass}>
                            {section.items.map((item, key) => (
                                <TechItem
                                    key={key}
                                    icon={item.icon}
                                    color={item.color}
                                    text={item.text}
                                    changeMode={item.changeMode}
                                />
                            ))}
                        </ul>
                    </article>
                ))}
            </span>
        </section>
    )
}

export default SkillUI;