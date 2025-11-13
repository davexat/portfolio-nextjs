export interface ProjectStatus {
    status: string;
    style: string;
}

export const statuses: ProjectStatus[] = [
    { status: "Completed", style: "text-green-200 bg-green-800/90" },
    { status: "In Progress", style: "text-purple-200 bg-purple-800/90" },
    { status: "Planned", style: "text-blue-200 bg-blue-800/90" },
];

export interface Project {
    title: string;
    description: string;
    technologies: string[];
    repoLink?: string;
    liveLink?: string;
    status: ProjectStatus;
}

export const projects: Project[] = [
    {
        title: "Customer Segmentation Dashboard",
        description: "Interactive dashboard that visualizes customer segments to support targeted marketing and business decisions.",
        technologies: ["Python", "Pandas", "ScikitLearn", "Seaborn", "Streamlit"],
        repoLink: "https://github.com/davexat/Customer_Segmentation_Dashboard",
        status: statuses[0],
    },
    {
        title: "Weather Dashboard AI",
        description: "A PWA that provides real-time and forecasted weather data, interactive charts, alerts, and an AI assistant for any city.",
        technologies: ["React", "TypeScript", "Openweather API", "Vite", "MUI"],
        repoLink: "https://github.com/davexat/dashboard",
        liveLink: "https://davexat.github.io/dashboard/",
        status: statuses[0],
    },
    {
        title: "Curriculum Vitae Website",
        description: "Personal portfolio website showcasing skills, projects, and professional experience.",
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        liveLink: "https://davexat.vercel.app",
        repoLink: "https://github.com/davexat/portfolio-nextjs",
        status: statuses[1],
    },
    {
        title: "Telco Churn Predictor",
        description: "A predictive analytics dashboard that identifies at-risk customers, visualizes churn patterns, and provides actionable insights for retention.",
        technologies: ["Pandas", "XGBoost", "SHAP", "Power BI", "Seaborn"],
        repoLink: "https://github.com/davexat/telco-churn-prediction-powerbi",
        status: statuses[1],
    },
    {
        title: "Django API Suite",
        description: "Django REST API with user management, Firebase integration, and a responsive homepage for modern web apps.",
        technologies: ["Django", "Python", "Firebase", "REST API", "HTML", "Tailwind CSS", "JavaScript"],
        repoLink: "https://github.com/davexat/django_api_suite",
        liveLink: "https://davexat.pythonanywhere.com/",
        status: statuses[0],
    }
];