"use client";

import Image from "next/image";

interface CardData {
  id: number;
  title: string;
  description: string;
  image: string;
  tag?: string;
  visitUrl: string;
}

const cardData: CardData[] = [
  {
    id: 1,
    title: "DigiLocker-Verified CV Builder",
    description: "Build resumes with government-verified credentials for complete authenticity. Students gain credibility, and recruiters instantly verify details for faster, fraud-free hiring.",
    image: "/images/products/cv-builder.png",
    tag: "CV Builder",
    visitUrl: "https://resumebuilder.ilc.limited/",
  },
  {
    id: 2,
    title: "ILC Personality Assessment",
    description: "AI-powered, scientifically validated personality assessment that guides career choices and helps recruiters find candidates with the right cultural and role fit.",
    image: "/images/products/psyometrics-test.png",
    tag: "Assessment",
    visitUrl: "https://personalitytest.ilc.limited/",
  },
  {
    id: 3,
    title: "Training Slot Booking",
    description: "Book training sessions with top industry experts and start learning through structured, career-focused courses.",
    image: "/images/products/slot-booking.png",
    tag: "Training",
    visitUrl: "https://explore.ilc.limited/",
  },
  {
    id: 4,
    title: "Library / Publication",
    description: "Access curated learning resources and publish your research or content to share knowledge and grow professionally.",
    image: "/images/products/library-publication.png",
    tag: "Resources",
    visitUrl: "https://explore.ilc.limited/",
  },
];

function StackedCards() {

  return (
    <section className="stacked-cards-section relative w-full bg-lightgray dark:bg-darkblack py-20 md:py-40">
      <div className="container mx-auto px-5">
        {/* Section Header */}
        <div className="flex flex-col gap-11 mb-16 md:mb-24">
          <div className="flex items-center gap-4 md:gap-8">
            <span className="bg-primary py-1.5 px-2.5 text-base font-medium rounded-full dark:text-secondary">
              03
            </span>
            <div className="h-px w-16 bg-black/12 dark:bg-white/12" />
            <p className="section-bedge py-1.5 px-4 rounded-full">Featured</p>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="max-w-3xl text-secondary dark:text-white">
              Our Products
            </h2>
            <p className="max-w-2xl text-secondary/70 dark:text-white/70">
              Discover our key capabilities through an interactive exploration of what makes us unique.
            </p>
          </div>
        </div>

        {/* Desktop: Stacked Cards with CSS-only animation */}
        <div className="hidden lg:block">
          <ul className="stacked-cards-list grid gap-10 md:gap-16">
            {cardData.map((card, index) => (
              <article
                key={card.id}
                className={`stacked-card-item ${
                  index !== cardData.length - 1 ? "stacked-card-animated" : ""
                }`}
              >
                <figure className="stacked-card-figure">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {card.tag && (
                    <div className="absolute top-4 right-4 bg-primary text-secondary px-4 py-2 rounded-full text-sm font-medium z-10">
                      {card.tag}
                    </div>
                  )}
                </figure>

                <div className="stacked-card-info">
                  <h3 className="stacked-card-title text-secondary dark:text-white">
                    {card.title}
                  </h3>
                  {card.tag && (
                    <p className="stacked-card-subtitle text-secondary/70 dark:text-white/70">
                      {card.tag}
                    </p>
                  )}
                  <p className="stacked-card-excerpt text-secondary/70 dark:text-white/70">
                    {card.description}
                  </p>
                  <a href={card.visitUrl} target="_blank" rel="noopener noreferrer" className="stacked-card-link">
                    Visit
                  </a>
                </div>
              </article>
            ))}
          </ul>
        </div>

        {/* Mobile: Vertical Stack */}
        <div className="lg:hidden">
          <div className="flex flex-col gap-8">
            {cardData.map((card) => (
              <article
                key={card.id}
                className="relative bg-white dark:bg-lightgray/10 rounded-2xl overflow-hidden shadow-lg border border-secondary/10 dark:border-white/10"
              >
                <figure className="relative h-[300px] w-full overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                  {card.tag && (
                    <div className="absolute top-4 right-4 bg-primary text-secondary px-4 py-2 rounded-full text-sm font-medium z-10">
                      {card.tag}
                    </div>
                  )}
                </figure>

                <div className="p-6 flex flex-col gap-3">
                  <h3 className="text-2xl font-bold text-secondary dark:text-white">
                    {card.title}
                  </h3>
                  {card.tag && (
                    <p className="text-base text-secondary/70 dark:text-white/70 uppercase">
                      {card.tag}
                    </p>
                  )}
                  <p className="text-base text-secondary/70 dark:text-white/70 leading-relaxed">
                    {card.description}
                  </p>
                  <a
                    href={card.visitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-fit mt-4 px-6 py-3 text-secondary dark:text-white border border-secondary dark:border-white/30 rounded-full hover:bg-secondary hover:text-white dark:hover:bg-white/10 dark:hover:text-white transition-all duration-300"
                  >
                    Visit
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StackedCards;

