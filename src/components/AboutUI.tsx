const AboutUI = () => {
    return (
        <section id='about' className='p-15 flex flex-col items-center justify-center relative bg-white dark:bg-black space-y-5'>
            <h1 className='text-4xl font-bold bg-gradient-to-r from-blue-500 via-blue-400 to-violet-600 bg-clip-text text-transparent text-center'>About Me</h1>
            {/* Content */}
            <div className='flex max-w-7xl items-center space-x-10'>
                <div className="hidden md:flex items-center justify-center shadow-lg aspect-auto m-10">
                    <img src='/sample.jpg' alt='Profile Picture' className='object-cover'/>
                </div>
                <div className="flex flex-col space-y-5 w-full md:min-w-2/3">
                    <p className=''>I'm David Sandoval, a Computer Science student at the Escuela Superior Politécnica del Litoral (ESPOL), a university internationally accredited by ABET and EUR-ACE. I'm passionate about data, artificial intelligence, and software development, and I've worked with technologies such as Python, Pandas, NumPy, Scikit-Learn, Streamlit, React, Node.js, and Django.</p>
                    <p>I've built projects focused on applied data science, including customer churn prediction models with XGBoost, interactive dashboards in Power BI, and modern web solutions using HTML, CSS, JavaScript, and TypeScript. I also have experience creating digital portfolios, institutional landing pages, and conversational bots.</p>
                    <p>Right now, I'm working toward certifications as a Data Engineer, Data Analyst, and Data Scientist through DataCamp, and I'm also exploring Google Cloud certifications. My goal is to grow into a well-rounded data professional, combining analysis, engineering, and science to deliver innovative solutions to real-world challenges.</p>
                </div>
            </div>
        </section>
    )
}

export default AboutUI;