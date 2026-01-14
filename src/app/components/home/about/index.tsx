"use client";
import Image from "next/image";

function About() {
    return (
        <section className="relative bg-white dark:bg-secondary overflow-hidden">
            <div className="relative py-20 md:py-40 z-10">
                <div className="container">
                    <div className="flex flex-col xl:flex-row items-start gap-8">
                        <div className="flex items-center py-3 gap-4 md:gap-8 w-full max-w-xl">
                            <span className="bg-primary py-1.5 px-2.5 text-base font-medium rounded-full dark:text-secondary">02</span>
                            <div className="h-px w-16 bg-black/12 dark:bg-white/12" />
                            <p className="section-bedge py-1.5 px-4 rounded-full">About</p>
                        </div>
                        <div className="flex flex-col gap-11">
                            <div className="flex flex-col gap-5">
                                <h2 className="max-w-3xl">Where Education Ends and Real Careers Begin</h2>
                                <p className="max-w-xl text-secondary/70 dark:text-white/70">
                                    ILC turns learning into real-world impact through psychometric insights, hands-on training, verified resumes, and a lifelong career ecosystem—supporting learners from the classroom to their careers and beyond.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute -bottom-28 -left-20">
                <Image src={"/images/home/statsfact/sectionbg.png"} alt="image" height={590} width={590} className="dark:hidden" />
                <Image src={"/images/home/statsfact/sectionbgdark.png"} alt="image" height={590} width={590} className="hidden dark:block" />
            </div>
        </section>
    );
}

export default About;

