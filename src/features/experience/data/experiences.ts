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
        description: "Assisted students in the Programming Fundamentals course by reviewing and grading assignments, providing feedback, and offering support on programming concepts and practices during office hours."
    },
    {
        title: "Teaching Assistant - Software Design",
        institution: "Escuela Superior Politécnica del Litoral (ESPOL)",
        dateRange: "Sep 2024 - Jan 2025",
        description: "Assisted students in the Software Design course by reviewing and grading assignments, providing feedback, and offering support on programming and design principles during office hours."
    },
];

export default getExperiences;