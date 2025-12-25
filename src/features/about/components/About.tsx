export default function About() {
    return (
        <section id='about' className='base-section'>
            <h2 className='gradient title-section'>About Me</h2>
            {/* Content */}
            <div className='flex flex-col w-full xl:flex-row max-w-7xl text-xl text-center xl:text-justify justify-center items-center gap-10'>
                <span className="max-w-xs xl:max-w-2/5 xl:pr-15">
                    <span className="shadow-lg xl:max-w-sm items-stretch">
                        <img src='https://placehold.co/400x400' alt='Profile Picture' />
                    </span>
                </span>
                <span className="flex flex-col gap-5 w-full xl:max-w-1/2">
                    <p>I'm David Sandoval, a Computer Science student at the Escuela Superior Politécnica del Litoral (ESPOL), a university internationally accredited by ABET and EUR-ACE. I'm passionate about data, artificial intelligence, and software development, and I've worked with Pandas, NumPy, Scikit-Learn, Seaborn, Streamlit, Node.js, Django and n8n.</p>
                    <p>Right now, I'm working toward certifications as a Data Engineer, Data Analyst, and Data Scientist through DataCamp, and I'm also exploring Google Cloud certifications. My goal is to grow into a well-rounded data professional, combining analysis, engineering, and science to deliver innovative solutions to real-world challenges.</p>
                </span>
            </div>
        </section>
    )
}