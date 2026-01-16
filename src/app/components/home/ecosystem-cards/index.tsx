"use client";

const ecosystemCards = [
    {
        title: "For Students",
        intro: "Learn skills. Build proof. Get chosen.",
        subIntro: "No more random courses. No more guessing what you're good at.",
        sectionTitle: "What you actually get",
        points: [
            "DigiLocker verified CV that recruiters trust",
            "Psychometric test to understand career interests & strengths",
            "Real projects",
            "Exposure to real work environment",
        ],
        cta: "Join as a Student",
    },
    {
        title: "For Startups/Employers",
        intro: "Get work done — not excuses.",
        subIntro:
            "We connect you with pre-assessed motivated talent that's trained to execute, not baby sit.",
        sectionTitle: "What startups work with ILC",
        points: [
            "Test talent before you commit",
            "Skill based matching",
            "Lower hiring risk",
            "Faster execution",
        ],
        cta: "Collaborate with ILC",
    },
    {
        title: "For Professors",
        intro: "Teach what actually matters.",
        subIntro: "Extend your impact beyond the classrooms.",
        sectionTitle: "Why professors associate with ILC",
        points: [
            "Guide high intent learners",
            "Build academic influence beyond examination",
            "Contribute to measurable student outcome",
        ],
        cta: "Associate as a professor",
    },
];

export default function EcosystemCards() {
    return (
        <section className="bg-lightgray dark:bg-darkblack py-20 md:py-40">
            <div className="container">
                <div className="flex flex-col gap-6 md:gap-8 mb-10 md:mb-16">
                    <h2 className="text-secondary dark:text-white text-3xl md:text-5xl font-bold">
                        ILC Ecosystem
                    </h2>
                    <div className="flex flex-col gap-3 max-w-4xl">
                        <p className="text-secondary/70 dark:text-white/70">
                            Choose the path that fits you best and discover how ILC helps students, startups, and professors
                            achieve meaningful outcomes.
                        </p>
                        <p className="text-secondary/70 dark:text-white/70">
                            ILC turns learning into real-world impact through psychometric insights, hands-on training,
                            verified resumes, and a lifelong career ecosystem—supporting learners from the classroom to
                            their careers and beyond.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {ecosystemCards.map((card) => (
                        <div
                            key={card.title}
                            className="bg-white dark:bg-lightgray/10 rounded-2xl border border-secondary/10 dark:border-white/10 p-6 md:p-8 flex flex-col gap-6 h-full"
                        >
                            <div className="flex flex-col gap-2">
                                <h3 className="text-xl md:text-2xl font-bold text-secondary dark:text-white">
                                    {card.title}
                                </h3>
                                <p className="text-secondary dark:text-white font-semibold">
                                    {card.intro}
                                </p>
                                <p className="text-secondary/70 dark:text-white/70">
                                    {card.subIntro}
                                </p>
                            </div>

                            <div className="flex flex-col gap-3">
                                <p className="text-secondary dark:text-white font-semibold">
                                    {card.sectionTitle}
                                </p>
                                <ul className="list-disc pl-5 text-secondary/70 dark:text-white/70 flex flex-col gap-2">
                                    {card.points.map((point) => (
                                        <li key={point}>{point}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-auto">
                                <button className="w-full border border-secondary/20 dark:border-white/20 text-secondary dark:text-white font-semibold rounded-xl px-4 py-3 hover:border-primary hover:text-primary transition-colors">
                                    {card.cta}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

