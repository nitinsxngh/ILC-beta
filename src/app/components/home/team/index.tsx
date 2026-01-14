
"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Team = (props: {teamdataNumber: string}) => {
    const { teamdataNumber } = props;
    const [teamData, setTeamData] = useState<any>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
          const fetchData = async () => {
            try {
              const res = await fetch('/api/page-data')
              if (!res.ok) throw new Error('Failed to fetch')
              const data = await res.json()        
              setTeamData(data?.teamData)
            } catch (error) {
              console.error('Error fetching services:', error)
            }
          }
          fetchData()
        }, [])

    useEffect(() => {
        if (!teamData?.data || !carouselRef.current || !sectionRef.current) return;

        const totalCards = teamData.data.length;
        const visibleCards = 4;
        const cardsToScroll = Math.max(0, totalCards - visibleCards);
        
        if (cardsToScroll === 0) return; // No scrolling needed if all cards fit

        // Calculate scroll distance: we need to move by (totalCards - visibleCards) card widths
        // Each card + gap takes up 25% of viewport (100% / 4 = 25%)
        const scrollPercent = ((totalCards - visibleCards) / visibleCards) * 100;

        const container = carouselRef.current;
        const carousel = container.querySelector('.team-carousel') as HTMLElement;
        if (!container || !carousel) return;

        // Pin the carousel container and animate the carousel
        const scrollTween = gsap.to(carousel, {
            xPercent: -scrollPercent,
            ease: "none",
            scrollTrigger: {
                trigger: container,
                pin: container,
                pinSpacing: true,
                anticipatePin: 1,
                scrub: 0.1,
                start: "top top",
                end: `+=${2000 + (cardsToScroll * 400)}`,
                invalidateOnRefresh: true
            }
        });

        return () => {
            scrollTween.kill();
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.vars.trigger === container) {
                    trigger.kill();
                }
            });
        };
    }, [teamData]);

    return (
        <section ref={sectionRef} className="dark:bg-darkblack py-20 md:py-40 overflow-x-hidden">
            <div className="flex flex-col gap-24">
                <div className="container">
                    <div className="flex flex-col gap-14 xl:gap-24">
                        <div className="flex flex-col xl:flex xl:flex-row items-start gap-8">
                            <div className="flex items-center py-3 gap-4 md:gap-8 w-full max-w-xl">
                                <span className="bg-primary dark:text-secondary py-1.5 px-2.5 text-base font-medium rounded-full">{teamdataNumber ? teamdataNumber : teamData?.number}</span>
                                <div className="h-px w-16 bg-black/12 dark:bg-white/12"/>
                                <p className="section-bedge py-1.5 px-4 rounded-full">The team</p>
                            </div>
                            <div className="flex flex-col gap-11">
                                <div className="flex flex-col gap-5 ">
                                    <h2 className="max-w-3xl">Meet our team</h2>
                                    <p className="max-w-2xl text-secondary/70 dark:text-white/70">Our team is committed to redefining digital experiences through innovative web solutions while fostering a diverse and collaborative environment.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="team-carousel-wrapper w-full" ref={carouselRef}>
                    <div className="team-carousel">
                        {teamData?.data?.map((data:any, index:any) => {
                            return (
                                <div key={index} className="team-case-item">
                                    <div className="group flex flex-col gap-6 h-full">
                                        <div className="relative w-full h-full overflow-hidden rounded-lg">
                                            <Image 
                                                src={data?.image} 
                                                alt={data?.name || "team member"} 
                                                width={390} 
                                                height={470} 
                                                className="team-case-image w-full h-full object-cover"
                                            />
                                            <div className="absolute hidden bg-secondary/40 bottom-0 left-0 w-full h-full group-hover:flex items-end justify-end p-8">
                                                {(() => {
                                                    const linkedin = data?.socialLinks?.find(
                                                        (socialdata: any) =>
                                                            socialdata?.link?.includes("linkedin") ||
                                                            socialdata?.icon?.includes("linkedin")
                                                    );
                                                    if (!linkedin) return null;
                                                    return (
                                                        <a
                                                            href={linkedin.link}
                                                            className="block w-fit bg-white hover:bg-primary p-3 rounded-full"
                                                        >
                                                            <Image src={linkedin.icon} alt="LinkedIn" width={20} height={20} />
                                                        </a>
                                                    );
                                                })()}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Team;
