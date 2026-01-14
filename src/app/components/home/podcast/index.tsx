"use client";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useState } from "react";
import Image from "next/image";

const podcastVideos = [
    {
        id: "Uf6_sDzw6tM",
        title: "Podcast Episode 1",
        embedUrl: "https://www.youtube.com/embed/Uf6_sDzw6tM?si=NBuf6spABE4TQkgI"
    },
    {
        id: "7dhz3XaPNbE",
        title: "Podcast Episode 2",
        embedUrl: "https://www.youtube.com/embed/7dhz3XaPNbE?si=WppS1N8gPGW841L9"
    },
    {
        id: "4-WBFiIgHPY",
        title: "Podcast Episode 3",
        embedUrl: "https://www.youtube.com/embed/4-WBFiIgHPY?si=IPOMSSHpJFT2HaTb"
    },
    {
        id: "sqlY4tQrMM8",
        title: "Podcast Episode 4",
        embedUrl: "https://www.youtube.com/embed/sqlY4tQrMM8?si=_hV1RDM7R8BK2ke6"
    },
    {
        id: "Uf6_sDzw6tM-2",
        title: "Podcast Episode 5",
        embedUrl: "https://www.youtube.com/embed/Uf6_sDzw6tM?si=FxVXfJEYhoL33qvx"
    }
];

function PodcastVideo({ video, index }: { video: typeof podcastVideos[0]; index: number }) {
    const [showVideo, setShowVideo] = useState(false);
    const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;

    const handleVideoClick = () => {
        if (showVideo) {
            setShowVideo(false);
        } else {
            setShowVideo(true);
        }
    };

    return (
        <div className="relative group flex flex-col gap-3 lg:gap-5">
            <div className="relative">
                <div className="w-[530px] h-80">
                    <div className="relative w-full h-full bg-black/5 dark:bg-black/20">
                        {!showVideo ? (
                            <div 
                                className="absolute inset-0 cursor-pointer"
                                onClick={() => setShowVideo(true)}
                            >
                                <Image
                                    src={thumbnailUrl}
                                    alt={video.title}
                                    fill
                                    className="object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 transition-colors">
                                    <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="absolute inset-0">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={video.embedUrl}
                                    title={`YouTube video player ${index + 1}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen={true}
                                    loading="lazy"
                                    style={{ width: "100%", maxWidth: "100%", height: "100%", objectFit: "cover" }}
                                />
                                <button
                                    onClick={handleVideoClick}
                                    className="absolute top-4 right-4 bg-black/70 hover:bg-black/90 rounded-full p-2 transition-colors z-10 cursor-pointer"
                                    aria-label="Close video"
                                >
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function Podcast() {
    return (
        <section className="bg-lightgray dark:bg-darkblack py-20 md:py-40">
            <div className="flex flex-col gap-24">
                <div className="container">
                    <div className="flex flex-col gap-24">
                        <div className="flex flex-col xl:flex xl:flex-row items-start gap-8">
                            <div className="flex items-center py-3 gap-4 md:gap-8 w-full max-w-xl">
                                <span className="bg-primary py-1.5 px-2.5 text-base font-medium rounded-full dark:text-secondary">03</span>
                                <div className="h-px w-16 bg-black/12 dark:bg-white/12" />
                                <p className="section-bedge py-1.5 px-4 rounded-full">Podcast</p>
                            </div>
                            <div className="flex flex-col gap-11">
                                <div className="flex flex-col gap-5">
                                    <h2 className="max-w-3xl">Featured Podcasts</h2>
                                    <p className="max-w-2xl text-secondary/70 dark:text-white/70">
                                        Explore our collection of insightful podcasts covering education, career development, and professional growth.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-3.5">
                    <Swiper
                        loop
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        slidesPerView={"auto"}
                        breakpoints={{
                            320: { spaceBetween: 0 },
                            640: { spaceBetween: 10 },
                            768: { spaceBetween: 20 },
                            1024: { spaceBetween: 20 },
                            1920: { spaceBetween: 30 },
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        {podcastVideos.map((video, index) => (
                            <SwiperSlide key={video.id}>
                                <PodcastVideo video={video} index={index} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Podcast;

