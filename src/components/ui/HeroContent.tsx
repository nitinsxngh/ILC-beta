'use client'
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

export default function HeroContent() {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [isActive, setIsActive] = useState(false);
    const [showKeywords, setShowKeywords] = useState(false);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(".hero-text-1", { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.5, ease: "power1.out" })
          .fromTo(".hero-text-2", { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.5, delay: 0.1, ease: "power1.out" })
          .fromTo(".hero-button", { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.5, delay: 0.15, ease: "power1.out" });
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleTap = () => {
        setIsActive(true);
        setTimeout(() => setIsActive(false), 500);
    };

    const handleShowKeywords = () => {
        // Trigger the animation for "Get Started" button
        const tl = gsap.timeline();
        tl.to(".hero-button", { opacity: 0, scale: 0.5, duration: 0.3, ease: "power1.out" })
          .to(".hero-button", { opacity: 1, scale: 1, duration: 0.3, delay: 0.2, ease: "power1.out" });

        // Trigger the keyword animations and wait for all of them to finish before redirecting
        const keywordAnimationTimeline = gsap.timeline({
            onComplete: () => {
                // Adding more delay before redirecting
                setTimeout(() => {
                    window.location.href = "/courses"; // Redirect to /courses after animation and delay
                }, 1000); // Increased delay to 1000ms (1 second) after animation finishes
            }
        });

        keywordAnimationTimeline.to(".hero-keywords", {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.5,
            stagger: 0.3, // Increased stagger time for smoother effect
            delay: 0.8 // Increased delay to make sure the button animation is done before starting keyword animation
        });
        
        setShowKeywords(true); // Show the keywords once the button animation is triggered
    };

    return (
        <div className="w-full h-screen flex items-center justify-center px-6 md:px-16 relative" onMouseMove={handleMouseMove}>
            {/* Custom Cursor */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 bg-white/20 rounded-full pointer-events-none backdrop-blur-md"
                animate={{ x: cursorPos.x - 20, y: cursorPos.y - 20, scale: isActive ? 2 : 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
            />

            {/* Centered Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
                <p className="hero-text-1 text-4xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b text-white max-w-4xl mix-blend-difference">
                    Integrated Learning Circle
                </p>
                <p className="hero-text-2 text-sm lg:text-lg py-4 max-w-md font-semibold">
                    <span className="bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-400 bg-clip-text text-transparent animate-pulse drop-shadow-lg">
                        CV BUILDER | PYSCHOMETRIC TEST | PRACTICAL | EMPLOYMENT ASSISTANCE | PUBLICATION
                    </span>
                </p>
                <a
                    href="https://explore.ilc.limited/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-button text-sm px-4 py-2 bg-white text-black rounded-full creativeBtn w-fit inline-block"
                    onClick={handleShowKeywords}
                >
                    <span>Get Started</span>
                </a>
            </div>

            {/* Keywords Hovering Around Content */}
            {showKeywords && (
                <div className="absolute inset-0 flex items-center justify-center">
                    {['Integrated Legal Circle', 'Integrated Drone Circle', 'Integrated Engineering Circle', 'Integrated Management Circle', 'Integrated AI Circle', 'Integrated Finance Circle'].map((keyword, index) => {
                        const angle = (360 / 6) * index; // Evenly distribute keywords in a circle
                        const radius = 300; // Increased radius to make keywords farther apart
                        const x = Math.cos((angle * Math.PI) / 180) * radius;
                        const y = Math.sin((angle * Math.PI) / 180) * radius;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 0, y: 0 }}
                                animate={{ opacity: 1, x, y }}
                                transition={{ delay: index * 0.3, duration: 0.6 }} // Longer delay and duration for smoother transition
                                className="absolute p-4 bg-white/10 rounded-full backdrop-blur-sm group transition-all duration-300 hover:bg-white/20 cursor-pointer"
                                style={{ x, y }}
                            >
                                <span className="hero-keywords block text-white transition-transform text-sm duration-300">
                                    {keyword}
                                </span>
                            </motion.div>
                        );
                    })}
                </div>
            )}

            {/* Background Mask */}
            <div className="absolute h-full pointer-events-none inset-0 flex items-center justify-center bg-slate-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
    );
}
