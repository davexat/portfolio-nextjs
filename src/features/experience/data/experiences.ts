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
        dateRange: "May 2025 - Jan 2026",
        description:
            "Supported over 100 students in mastering programming concepts. Responsibilities included grading assignments, providing feedback, clarifying theoretical and practical topics during office hours, and contributing to the improvement of course materials."
    },
    {
        title: "Teaching Assistant - Software Design",
        institution: "Escuela Superior Politécnica del Litoral (ESPOL)",
        dateRange: "Oct 2024 - Jan 2025",
        description:
            "Assisted students in understanding object-oriented SOLID principles, UML modeling, code refactoring and software architecture. Reviewed and evaluated practices, guided students through best practices in code structure and design patterns, and supported instructors in course delivery."
    },
];

export const getEducation = (): Experience[] => [
    {
        title: "Bachelor's Degree in Computer Science",
        institution: "Escuela Superior Politécnica del Litoral (ESPOL)",
        dateRange: "May 2023 - Present",
        description:
            "Undergraduate program focused on software engineering, algorithms, data structures, computer systems and artificial intelligence. Coursework includes databases, data analysis and machine learning. Expected graduation: May 2027."
    },
];