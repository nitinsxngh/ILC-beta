"use client";

import Image from "next/image";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

function HeroSection() {
    return (
        <ParallaxProvider>
            <Parallax speed={-25}>
                <section className="relative flex items-end text-white bg-black h-full min-h-screen">
                    {/* Background Video */}
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        loop
                        autoPlay
                        muted
                        playsInline
                    >
                        <source src="/images/home/banner/poster.mp4" type="video/mp4" />
                    </video>

                    {/* Overlay to improve text readability */}
                    <div className="absolute inset-0 bg-black/50"></div>

                    {/* Content */}
                    <div className="relative z-10 container text-left">
                        <div className="flex flex-col gap-8 Xxl:pb-20 pb-10">
                            <div className="flex items-start gap-2 md:gap-6">
                                <div className="w-11 h-11 flex-shrink-0">
                                    <Image
                                        src={"/images/Icon/primary-leaf.svg"}
                                        alt="icon"
                                        width={44}
                                        height={44}
                                        className="animate-spin"
                                    />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold text-white">
                                        Degrees don’t build careers. Proof does
                                    </h1>
                                    <p className="text-white/70 max-w-2xl">
                                        ILC helps you stop guessing your future and start building it with real skills,
                                        real work, and verified outcomes.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 items-start text-left">
                                <h2 className="text-xl md:text-2xl font-semibold text-white">
                                    Integrated Learning Circle
                                </h2>
                                <div className="flex flex-wrap items-center justify-start gap-4">
                                    <a
                                        href="https://www.youtube.com/watch?v=pZHrgIybfo8"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-primary text-secondary font-bold rounded-full px-6 py-3 hover:bg-primary/90 transition-colors"
                                    >
                                        Watch Tutorial
                                    </a>
                                    <a
                                        href="https://drive.google.com/file/d/1zonnN2mSaLPoWlE5UdcQHKuFHlISwAGB/view?usp=sharing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border border-white/40 text-white font-semibold rounded-full px-6 py-3 hover:border-white hover:text-white transition-colors"
                                    >
                                        Download Broch.
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* DigiLocker Verified Badge - Bottom Right */}
                    <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-10 bg-black/40 backdrop-blur-sm rounded-2xl p-3 md:p-4 ring-1 ring-white/10 shadow-2xl">
                        <Image
                            src="/images/logo/digilocker-verified.svg"
                            alt="DigiLocker Verified"
                            width={260}
                            height={180}
                            className="w-40 md:w-56 lg:w-64 h-auto drop-shadow-xl"
                        />
                    </div>
                </section>
            </Parallax>
        </ParallaxProvider>
    );
}

export default HeroSection;
