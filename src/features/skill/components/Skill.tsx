import TechItem from './tech';

const SkillUI = ({ isDark } : { isDark: boolean }) => {

    return (
        <section id='skills' className='section-container dark:text-slate-400'>
            <h2 className='section-title'>Skills & Technologies</h2>
            <span className='flex flex-wrap max-w-7xl gap-10'>
            <article className='flex flex-col grow-1 shrink-1 basis-full md:basis-1/3 xl:basis-1/4 gap-5'>
                <h3 className='text-2xl font-semibold text-center'>Data Analysis</h3>
                <ul className='flex flex-wrap justify-center items-center gap-5'>
                    <TechItem icon='/icons/python.png' color='yellow' text='Python' />
                    <TechItem icon='/icons/mysql.png' color='sky' text='MySQL' />
                    <TechItem icon='/icons/postgresql.png' color='blue' text='PostgreSQL' />
                    <TechItem icon='/icons/pandas.png' color='indigo' text='Pandas' />
                    <TechItem icon='/icons/numpy.png' color='cyan' text='Numpy' />
                    <TechItem icon='/icons/jupyter.png' color='orange' text='Jupyter' />
                    <TechItem icon='/icons/plotly.png' color='fuchsia' text='Plotly' />
                    <TechItem icon='/icons/matplotlib.png' color='violet' text='Matplotlib' />
                    <TechItem icon='/icons/seaborn.png' color='blue' text='Seaborn' />
                    <TechItem icon='/icons/scikitlearn.png' color='orange' text='ScikitLearn' />
                    <TechItem icon='/icons/streamlit.png' color='red' text='Streamlit' />
                    <TechItem icon='/icons/powerbi.png' color='yellow' text='Power BI' />
                </ul>
            </article>
            <article className='flex flex-col grow-1 shrink-1 basis-full md:basis-1/3 xl:basis-1/4 gap-5'>
                <h3 className='text-2xl font-semibold text-center'>Software Development</h3>
                <ul className='flex flex-wrap justify-center items-center gap-5'>
                    <TechItem icon='/icons/html.png' color='orange' text='HTML' />
                    <TechItem icon='/icons/css.png' color='purple' text='CSS' />
                    <TechItem icon='/icons/javascript.png' color='yellow' text='JavaScript' />
                    <TechItem icon='/icons/typescript.png' color='blue' text='TypeScript' />
                    <TechItem icon='/icons/sass.png' color='pink' text='Sass' />
                    <TechItem icon='/icons/tailwindcss.png' color='cyan' text='TailwindCSS' />
                    <TechItem icon='/icons/react.png' color='blue' text='React' />
                    <TechItem icon='/icons/nodejs.png' color='green' text='Node.js' />
                    <TechItem icon='/icons/nextjs.png' color='slate' text='Next.js' />
                    <TechItem icon='/icons/django.png' color='green' text='Django' />
                </ul>
            </article>
            <article className='flex flex-col grow-1 shrink-1 basis-full xl:basis-1/4 gap-5'>
                <h3 className='text-2xl font-semibold text-center'>Others</h3>
                <ul className='flex flex-wrap justify-center items-center gap-5'>
                    <TechItem icon='/icons/java.png' color='orange' text='Java' />
                    <TechItem icon='/icons/junit5.png' color='red' text='JUnit5' />
                    <TechItem icon='/icons/git.png' color='orange' text='Git' />
                    <TechItem icon='/icons/github.png' color='slate' text='GitHub' changeMode={isDark} />
                    <TechItem icon='/icons/markdown.png' color='slate' text='Markdown' changeMode={isDark} />
                    <TechItem icon='/icons/c.png' color='indigo' text='C' />
                    <TechItem icon='/icons/figma.png' color='purple' text='Figma' />
                    <TechItem icon='/icons/dataspell.png' color='slate' text='DataSpell' />
                    <TechItem icon='/icons/lovable.png' color='pink' text='Lovable' />
                    <TechItem icon='/icons/visualstudiocode.png' color='blue' text='Visual Studio' />
                </ul>
            </article>
            </span>
        </section>
    )
}

export default SkillUI;