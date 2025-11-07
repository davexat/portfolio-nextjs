export default function About() {
    return (
        <section id='about' className='p-10 gap-15 w-full flex flex-col items-center justify-center relative bg-white dark:bg-black'>
            <h1 className='title-size title-gradient text-center'>About Me</h1>
            {/* Content */}
            <div className='flex flex-col w-full xl:flex-row max-w-7xl text-xl text-justify justify-center items-center text-slate-500 gap-10'>
                <div className="max-w-xs xl:max-w-1/2 xl:pr-15">
                    <div className="shadow-lg xl:max-w-md items-stretch">
                        <img src='/sample.jpg' alt='Profile Picture' className='object-cover flex-1'/>
                    </div>
                </div>
                <div className="flex flex-col gap-5 w-full xl:max-w-1/2">
                    <p className=''>I'm David Sandoval, a Computer Science student at the Escuela Superior Politécnica del Litoral (ESPOL), a university internationally accredited by ABET and EUR-ACE. I'm passionate about data, artificial intelligence, and software development, and I've worked with technologies such as Python, Pandas, NumPy, Scikit-Learn, Streamlit, React, Node.js, and Django.</p>
                    <p>I've built projects focused on applied data science, including customer churn prediction models with XGBoost, interactive dashboards in Power BI, and modern web solutions using HTML, CSS, JavaScript, and TypeScript. I also have experience creating digital portfolios, institutional landing pages, and conversational bots.</p>
                    <p>Right now, I'm working toward certifications as a Data Engineer, Data Analyst, and Data Scientist through DataCamp, and I'm also exploring Google Cloud certifications. My goal is to grow into a well-rounded data professional, combining analysis, engineering, and science to deliver innovative solutions to real-world challenges.</p>
                </div>
            </div>
        </section>
    )
}