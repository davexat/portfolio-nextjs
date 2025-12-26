import Image from 'next/image';

export default function About() {
    return (
        <section id='about' className='base-section'>
            <h2 className='gradient title-section'>About Me</h2>
            {/* Content */}
            <div className='flex-center flex-col w-full xl:flex-row max-w-7xl text-xl text-center xl:text-justify gap-10'>
                <div className="max-w-xs flex-center overflow-hidden xl:max-w-2/5 xl:pr-15">
                    <span className="shadow-lg rounded-full overflow-hidden xl:rounded-xl xl:max-w-sm items-stretch">
                        <Image src='/me.jpg' alt='Profile Picture' width={400} height={400} />
                    </span>
                </div>
                <div className="flex flex-col gap-5 w-full xl:max-w-1/2">
                    <p>I&apos;m David Sandoval, a Computer Science student at the Escuela Superior Politécnica del Litoral (ESPOL), a university internationally accredited by ABET and EUR-ACE. I&apos;m passionate about data, artificial intelligence, and software development, and I&apos;ve worked with Pandas, NumPy, Scikit-Learn, Seaborn, Streamlit, Node.js, Django and n8n.</p>
                    <p>Right now, I&apos;m working toward certifications as a Data Engineer, Data Analyst, and Data Scientist through DataCamp, and I&apos;m also exploring Google Cloud certifications. My goal is to grow into a well-rounded data professional, combining analysis, engineering, and science to deliver innovative solutions to real-world challenges.</p>
                </div>
            </div>
        </section>
    )
}