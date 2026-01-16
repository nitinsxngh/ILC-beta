"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

function Services() {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [imagePosition, setImagePosition] = useState<number>(0);
    const [isMdScreen, setIsMdScreen] = useState(false);
    const [servicesData, setServicesData] = useState<any>(null);

    useEffect(() => {
        const checkScreenSize = () => setIsMdScreen(window.innerWidth >= 768);
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        const fetchData = async () => {
            try {
                const res = await fetch('/api/page-data')
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                setServicesData(data?.servicesData)
            } catch (error) {
                console.error('Error fetching services:', error)
            }
        }
        fetchData()

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    const handleMouseEnter = (index: number, event: React.MouseEvent<HTMLDivElement>) => {
        setActiveIndex(index);

        // Get hovered service div position
        const serviceDiv = event.currentTarget;
        const container = serviceDiv.parentElement;

        if (container) {
            const serviceRect = serviceDiv.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();

            // Calculate the center position of the hovered div relative to the container
            const topOffset = serviceRect.top - containerRect.top + serviceRect.height / 2;
            setImagePosition(topOffset);
        }
    };


    return (
        <section id="services" className="bg-secondary py-20 md:py-40">
            <div className="flex flex-col gap-24">
                <div className="container">
                    <div className="flex flex-col gap-24">
                        <div className="flex flex-col xl:flex xl:flex-row items-start gap-8">
                            <div className="flex items-center py-3 gap-4 md:gap-8 w-full max-w-xl">
                                <span className="bg-primary py-1.5 px-2.5 text-base font-medium rounded-full dark:text-secondary">
                                    {servicesData?.number}
                                </span>
                                <div className="h-px w-16 bg-white/12" />
                                <p className="text-base font-medium text-secondary bg-white py-1.5 px-4 rounded-full">
                                    {servicesData?.name}
                                </p>
                            </div>
                            <div className="flex flex-col gap-11">
                                <div className="flex flex-col gap-5">
                                    <h2 className="max-w-3xl text-white">{servicesData?.heading}</h2>
                                    <p className="max-w-2xl text-white/70">{servicesData?.description}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row relative gap-10 2xl:gap-56">
                            <div className="relative w-full md:max-w-sm">
                                <div
                                    className={`relative md:absolute md:right-0 xl:left-0 transition-all duration-300 z-10 h-80`}
                                    style={isMdScreen ? { top: `${imagePosition}px`, transform: "translateY(-40%)" } : {}}
                                >
                                    {servicesData?.data[activeIndex]?.image && (
                                        <Image
                                            src={servicesData?.data[activeIndex]?.image}
                                            alt="Service Image"
                                            width={400}
                                            height={250}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>
                            </div>

                            <div className="w-full flex flex-col gap-16">
                                <div>
                                    {servicesData?.data.map((value: any, index: any) => (
                                        <div
                                            key={index}
                                            onMouseEnter={(e) => handleMouseEnter(index, e)}
                                            className="group py-6 xl:py-10 border-t border-white/12 cursor-pointer flex xl:flex-row flex-col xl:items-center items-start justify-between xl:gap-10 gap-1 relative">
                                            <h3 className="text-white group-hover:text-primary 2xl:w-full 2xl:max-w-sm py-1">
                                                {value.heading}
                                            </h3>
                                            {activeIndex === index && (
                                                <p className="text-white/70 text-base transition-all duration-300 flex-1">
                                                    {value.descp}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
