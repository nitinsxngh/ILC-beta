"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ParallaxHero() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current || !containerRef.current) return;

    let timeline: gsap.core.Timeline | null = null;
    let scrollTriggerInstance: ScrollTrigger | null = null;

    // Wait for window load and ensure all other ScrollTriggers are set up
    const initAnimation = () => {
      if (!wrapperRef.current || !containerRef.current) return;

      // Find the Team section to check if its ScrollTrigger is active
      const teamSection = document.querySelector('section[class*="dark:bg-darkblack"]') as HTMLElement;
      const teamCarousel = teamSection?.querySelector('.team-carousel-wrapper') as HTMLElement;
      
      // Find the Pricing section to use as reference
      const pricingSection = containerRef.current.previousElementSibling as HTMLElement;
      
      // Function to check if Team section's ScrollTrigger is still active
      const isTeamScrollActive = () => {
        if (!teamCarousel) return false;
        const teamTriggers = ScrollTrigger.getAll().filter(
          (trigger) => trigger.vars.trigger === teamCarousel
        );
        if (teamTriggers.length === 0) return false;
        const teamTrigger = teamTriggers[0];
        const scrollY = window.scrollY || window.pageYOffset;
        // Check if we're still within the Team section's scroll range
        return scrollY >= teamTrigger.start && scrollY < teamTrigger.end;
      };

      // Use multiple requestAnimationFrame calls to ensure everything is ready
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (!wrapperRef.current || !containerRef.current) return;
            
            // First, refresh all existing ScrollTriggers to get accurate positions
            ScrollTrigger.refresh();
            
            // Wait longer for all ScrollTriggers to be fully initialized
            setTimeout(() => {
              if (!wrapperRef.current || !containerRef.current) return;
              
              // Refresh again after delay
              ScrollTrigger.refresh();
              
              // Check if Team section's scroll is still active
              if (isTeamScrollActive()) {
                // Wait for Team section to finish, then create our trigger
                const checkTeamScroll = () => {
                  if (!isTeamScrollActive()) {
                    window.removeEventListener("scroll", checkTeamScroll);
                    // Wait a bit more to ensure positions are stable
                    setTimeout(() => {
                      ScrollTrigger.refresh();
                      createScrollTrigger();
                    }, 100);
                  }
                };
                window.addEventListener("scroll", checkTeamScroll, { passive: true });
                // Also check immediately
                checkTeamScroll();
                return;
              }
              
              // Team section is done, create our trigger
              createScrollTrigger();
            }, 1000); // Increased delay to ensure Team section's ScrollTrigger is fully set up
          });
        });
      });

      const createScrollTrigger = () => {
        if (!wrapperRef.current || !containerRef.current) return;
        
        // Refresh again before creating to ensure all positions are accurate
        ScrollTrigger.refresh();

        timeline = gsap
          .timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "+=150%",
              pin: wrapperRef.current,
              pinSpacing: true,
              scrub: true,
              markers: false, // Set to true for debugging - enable to see trigger points
              invalidateOnRefresh: true,
              anticipatePin: 1,
            },
          })
          .to(wrapperRef.current.querySelector(".parallax-image-container img"), {
            scale: 2,
            z: 350,
            transformOrigin: "center center",
            ease: "power1.inOut",
          })
          .to(
            wrapperRef.current.querySelector(".parallax-content .parallax-section-hero"),
            {
              scale: 1.1,
              transformOrigin: "center center",
              ease: "power1.inOut",
            },
            "<"
          );

        // Store the ScrollTrigger instance for cleanup
        const triggers = ScrollTrigger.getAll();
        scrollTriggerInstance = triggers.find(
          (trigger) => trigger.vars.trigger === containerRef.current
        ) || null;

        // Final refresh after creating this ScrollTrigger
        ScrollTrigger.refresh();
      };
    };

    if (document.readyState === "complete") {
      initAnimation();
    } else {
      window.addEventListener("load", initAnimation);
    }

    return () => {
      if (timeline) {
        timeline.kill();
      }
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }
      // Clean up ScrollTrigger instances for this component
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === containerRef.current || trigger.vars.trigger === wrapperRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <div className="parallax-container" ref={containerRef}>
      <div className="parallax-wrapper" ref={wrapperRef}>
        <div className="parallax-content">
          <section className="parallax-section parallax-section-hero"></section>
        </div>
        <div className="parallax-image-container">
          <img
            src="/images/paralax/laptop.svg"
            alt="Parallax hero image"
          />
        </div>
      </div>
    </div>
  );
}

