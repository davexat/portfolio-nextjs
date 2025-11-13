export type Experience = {
    title: string;
    institution: string;
    dateRange: string;
    description: string;
}

export const getExperiences = (): Experience[] => [
    {
        title: "Teaching Assistant - Programming Fundamentals",
        institution: "Escuela Superior Politécnica del Litoral (ESPOL)",
        dateRange: "May 2025 - Feb 2026",
        description:
            "Supported over 100 students in mastering foundational programming concepts. Responsibilities included grading assignments, providing constructive feedback, clarifying theoretical and practical topics during office hours, and contributing to the improvement of course materials."
    },
    {
        title: "Teaching Assistant - Software Design",
        institution: "Escuela Superior Politécnica del Litoral (ESPOL)",
        dateRange: "Sep 2024 - Jan 2025",
        description:
            "Assisted students in understanding object-oriented design principles, UML modeling, and software architecture. Reviewed and evaluated practices, guided students through best practices in code structure and design patterns, and supported instructors in course delivery."
    },
];

export const getEducation = (): Experience[] => [
    {
        title: "Bachelor's Degree in Computer Science",
        institution: "Escuela Superior Politécnica del Litoral (ESPOL)",
        dateRange: "May 2023 - Present",
        description:
            "Undergraduate program focused on software engineering, algorithms, data structures, and computer systems. Coursework includes databases, artificial intelligence, and data analysis. Expected graduation: Dec 2027."
    },
];