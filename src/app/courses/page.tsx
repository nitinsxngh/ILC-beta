'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface Name {
    course: string;
    imageSrc: string;
    profession: string;
    price: string;
    category: 'Law' | 'Other' | 'Management' | 'AI' | 'Finance' | 'Drone' | 'Engineering';
    subCategory?: string;
}

const names: Name[] = [
    // Law Courses
    { course: 'Practical Mastery in Constitutional Law: Bridging Theory with Legal Practice', imageSrc: '/assets/courses/law/1.jpg', profession: 'Master the essentials of constitutional law with a focus on practical applications.', price: '6000', category: 'Law' },
    { course: 'Mastering Civil Law Practice: Comprehensive Training in Litigation, Remedies & Dispute Resolution', imageSrc: '/assets/courses/law/2.jpg', profession: 'Gain practical experience in civil law practice, including litigation and dispute resolution.', price: '6500', category: 'Law' },
    { course: 'Practical Expertise in Criminal Law & Procedure', imageSrc: '/assets/courses/law/1.jpg', profession: 'Get hands-on training in criminal law procedures and practice.', price: '7000', category: 'Law' },
    { course: 'Corporate & Business Law Mastery: Practical training for Legal Professionals', imageSrc: '/assets/courses/law/2.jpg', profession: 'Specialize in corporate and business law with practical legal training.', price: '7500', category: 'Law' },
    { course: 'Navigating Digital Frontiers: Practical Training in Information Technology & Cyber Laws', imageSrc: '/assets/courses/law/1.jpg', profession: 'Master the intersection of IT and cyber law for modern legal practice.', price: '7000', category: 'Law' },
    { course: 'Global Paralegal Excellence: Mastering International Laws & Practice', imageSrc: '/assets/courses/law/2.jpg', profession: 'Develop expertise in international law and practice as a global paralegal.', price: '8000', category: 'Law' },
    { course: 'Comprehensive Practical Training in Commercial Law: Contracts, Property & Modern Trade Practices', imageSrc: '/assets/courses/law/1.jpg', profession: 'Master commercial law, including contracts and property law for modern trade.', price: '7500', category: 'Law' },
    { course: 'Mastering Intellectual Property Rights: Practical Training in Law, Strategy & Enforcement', imageSrc: '/assets/courses/law/2.jpg', profession: 'Master the strategic management and enforcement of intellectual property rights.', price: '8000', category: 'Law' },
    { course: 'Mastering Arbitration: Practical Training in Domestic, International & Cross-Border Dispute Resolution', imageSrc: '/assets/courses/law/1.jpg', profession: 'Develop practical skills in arbitration for resolving disputes at various levels.', price: '8500', category: 'Law' },
    { course: 'Mastering Family Law: A Practical Approach to Rights, Relationships & Remedies', imageSrc: '/assets/courses/law/2.jpg', profession: 'Get practical training in family law including rights, relationships, and remedies.', price: '7000', category: 'Law' },
    { course: 'Mastering Property Laws & RERA Laws: Practical Training for Legal and Real Estate Excellence', imageSrc: '/assets/courses/law/1.jpg', profession: 'Specialize in property and RERA laws for real estate professionals.', price: '7500', category: 'Law' },
    { course: 'Practical Training in Municipal Law: Governance, Urban Development & Legal Frameworks', imageSrc: '/assets/courses/law/2.jpg', profession: 'Master municipal law and its applications in urban governance and development.', price: '6000', category: 'Law' },
    { course: 'Practical training in Education Law: Rights, Policies & Legal Frameworks', imageSrc: '/assets/courses/law/1.jpg', profession: 'Gain practical training in education law, focusing on policies and legal frameworks.', price: '6500', category: 'Law' },
    { course: 'Practical Training in Environmental & Natural Resources Law: Legal Frameworks', imageSrc: '/assets/courses/law/2.jpg', profession: 'Master legal frameworks for environmental protection and natural resource management.', price: '7000', category: 'Law' },
    { course: 'Championing Animal Rights: Practical Training in Indian Animal Laws & Welfare', imageSrc: '/assets/courses/law/1.jpg', profession: 'Specialize in Indian animal laws and welfare, with a focus on practical applications.', price: '6000', category: 'Law' },
    { course: 'Mastering Alternate Dispute Resolution: Practical Skills & Legal Frameworks for Effective Dispute Settlement', imageSrc: '/assets/courses/law/2.jpg', profession: 'Gain practical skills in alternative dispute resolution methods and legal frameworks.', price: '7500', category: 'Law' },
    { course: 'Mastering Governance: Practical training in Administrative Law', imageSrc: '/assets/courses/law/1.jpg', profession: 'Master the legal principles of governance and administrative law.', price: '7000', category: 'Law' },
    { course: 'Wildlife Law & Conservation: Legal Frameworks, Enforcement & Advocacy in India', imageSrc: '/assets/courses/law/2.jpg', profession: 'Gain expertise in wildlife law and conservation with a focus on India.', price: '8000', category: 'Law' },
    
    // Drone Courses
    { course: 'Drone Service Technician', imageSrc: '/assets/courses/drone/1.jpg', profession: 'Learn the skills to maintain and repair drones.', price: '5500', category: 'Drone', subCategory: 'Drone' },
    { course: 'Drone Manufacturing & Assembly Technician', imageSrc: '/assets/courses/drone/2.jpg', profession: 'Master drone assembly and manufacturing processes.', price: '6000', category: 'Drone', subCategory: 'Drone' },
    { course: 'Drone Developer (Software)', imageSrc: '/assets/courses/drone/1.jpg', profession: 'Develop software solutions for drones.', price: '6500', category: 'Drone', subCategory: 'Drone' },
    { course: 'Drone Operator over Dimensional Cargo', imageSrc: '/assets/courses/drone/2.jpg', profession: 'Operate drones for transporting oversized cargo.', price: '7000', category: 'Drone', subCategory: 'Drone' },
    { course: 'Drone Operator - Warehouse', imageSrc: '/assets/courses/drone/1.jpg', profession: 'Use drones to manage warehouse logistics and inventory.', price: '5500', category: 'Drone', subCategory: 'Drone' },
    { course: 'Drone Monitoring and Maintenance Associate', imageSrc: '/assets/courses/drone/2.jpg', profession: 'Monitor and maintain drones in the field.', price: '6000', category: 'Drone', subCategory: 'Drone' },
    { course: 'Dronographer', imageSrc: '/assets/courses/drone/1.jpg', profession: 'Capture stunning aerial photography and videography with drones.', price: '5000', category: 'Drone', subCategory: 'Drone' },
    { course: 'Drone Operator- Multi Rotor', imageSrc: '/assets/courses/drone/2.jpg', profession: 'Operate multi-rotor drones for various commercial applications.', price: '5500', category: 'Drone', subCategory: 'Drone' },

    // Engineering Courses
    { course: 'Mechanical Engineering Basics', imageSrc: '/assets/courses/engineer/1.jpg', profession: 'Learn the fundamentals of mechanical engineering.', price: '5000', category: 'Engineering', subCategory: 'Engineering' },
    { course: 'Electrical Engineering Concepts', imageSrc: '/assets/courses/engineer/2.jpg', profession: 'Understand electrical systems and circuits.', price: '5000', category: 'Engineering', subCategory: 'Engineering' },
    { course: 'Mechanical Engineering and Plumbing General Manager', imageSrc: '/assets/courses/engineer/1.jpg', profession: 'Manage mechanical engineering and plumbing operations.', price: '7000', category: 'Engineering', subCategory: 'Engineering' },
    { course: 'Search Engine Optimization Executive', imageSrc: '/assets/courses/engineer/2.jpg', profession: 'Optimize websites for search engines to increase visibility and traffic.', price: '6000', category: 'Engineering', subCategory: 'Engineering' },
    { course: 'Application Developer - Web & Mobile', imageSrc: '/assets/courses/engineer/1.jpg', profession: 'Develop web and mobile applications using the latest technologies.', price: '7500', category: 'Engineering', subCategory: 'Engineering' },
    { course: 'Database Administrator', imageSrc: '/assets/courses/engineer/2.jpg', profession: 'Manage and maintain databases to ensure security and availability.', price: '8000', category: 'Engineering', subCategory: 'Engineering' },
    { course: 'Junior Software Development Course', imageSrc: '/assets/courses/engineer/1.jpg', profession: 'Get hands-on experience in software development for beginners.', price: '4500', category: 'Engineering', subCategory: 'Engineering' },

    // Management Courses
    { course: 'Secretary', imageSrc: '/assets/courses/management/1.png', profession: 'Master the essential skills of office management and administration.', price: '5000', category: 'Management' },
    { course: 'Multifunctional Office Executive', imageSrc: '/assets/courses/management/2.png', profession: 'Learn to manage multiple office functions and lead administrative teams.', price: '5000', category: 'Management' },
    { course: 'Public Accountant', imageSrc: '/assets/courses/management/1.png', profession: 'Gain expertise in accounting, tax, and financial reporting.', price: '5500', category: 'Management' },

    // AI Courses
    { course: 'Data Quality Analyst', imageSrc: '/assets/courses/ai/1.png', profession: 'Ensure data accuracy, consistency, and quality within an organization.', price: '6500', category: 'AI' },
    { course: 'Business Intelligence Analyst', imageSrc: '/assets/courses/ai/2.png', profession: 'Analyze business data to help organizations make strategic decisions.', price: '7000', category: 'AI' },
    { course: 'Data Engineer', imageSrc: '/assets/courses/ai/1.png', profession: 'Design, develop, and manage systems that collect and process data.', price: '7500', category: 'AI' },
    { course: 'Data Architect', imageSrc: '/assets/courses/ai/2.png', profession: 'Design the structure of data systems and ensure efficient data storage.', price: '8000', category: 'AI' },
    { course: 'Solution Architect', imageSrc: '/assets/courses/ai/1.png', profession: 'Design and implement technical solutions that meet business needs.', price: '8500', category: 'AI' },
    { course: 'Database Administration', imageSrc: '/assets/courses/ai/2.png', profession: 'Oversee and manage databases to ensure secure and efficient data storage.', price: '9000', category: 'AI' },
    { course: 'Machine Learning Engineer', imageSrc: '/assets/courses/ai/1.png', profession: 'Develop machine learning models and algorithms for data analysis.', price: '9500', category: 'AI' },
    { course: 'DevOps Engineer', imageSrc: '/assets/courses/ai/2.png', profession: 'Work on automating and improving the development and deployment processes.', price: '10000', category: 'AI' },

    // Finance Courses
    { course: 'Financial Management Basics', imageSrc: '/assets/courses/finance/1.png', profession: 'Understand financial systems and business operations.', price: '5000', category: 'Finance' },
    { course: 'Investment Strategies', imageSrc: '/assets/courses/finance/2.png', profession: 'Learn the art of managing investments effectively.', price: '5000', category: 'Finance' },
    { course: 'Key Accounts Sales Manager', imageSrc: '/assets/courses/finance/1.png', profession: 'Manage and nurture relationships with key accounts in finance.', price: '5500', category: 'Finance' },
    { course: 'Key Accounts Service Manager', imageSrc: '/assets/courses/finance/2.png', profession: 'Provide service and support to key finance accounts.', price: '5500', category: 'Finance' },
    { course: 'Accounts Executive', imageSrc: '/assets/courses/finance/1.png', profession: 'Manage day-to-day financial operations and bookkeeping.', price: '4500', category: 'Finance' },
    { course: 'Goods and Service Tax (GST) Accounts Assistant', imageSrc: '/assets/courses/finance/2.png', profession: 'Assist with GST-related financial transactions and compliance.', price: '4000', category: 'Finance' },
    { course: 'Regional Retail Finance & Service Manager', imageSrc: '/assets/courses/finance/1.png', profession: 'Manage finance and services in regional retail operations.', price: '6000', category: 'Finance' },
    { course: 'Finance, Insurance and Registration Coordinator', imageSrc: '/assets/courses/finance/2.png', profession: 'Coordinate finance, insurance, and registration processes.', price: '5800', category: 'Finance' },
    { course: 'Associate Finance and Accounting', imageSrc: '/assets/courses/finance/1.png', profession: 'Assist in accounting and financial management tasks.', price: '4500', category: 'Finance' },
    { course: 'Sales Consultant (Automotive Finance)', imageSrc: '/assets/courses/finance/2.png', profession: 'Consult in automotive finance solutions and sales.', price: '5000', category: 'Finance' },
    { course: 'Account Executive (Advertising Agency)', imageSrc: '/assets/courses/finance/1.png', profession: 'Manage client accounts and financials in advertising agencies.', price: '5200', category: 'Finance' },
    { course: 'Microfinance Executive', imageSrc: '/assets/courses/finance/2.png', profession: 'Assist with the management of microfinance services.', price: '4700', category: 'Finance' },
    { course: 'Basics of Accounts and Finance', imageSrc: '/assets/courses/finance/1.png', profession: 'Learn foundational accounting and finance principles.', price: '3000', category: 'Finance' },
    { course: 'Financial Modeling', imageSrc: '/assets/courses/finance/2.png', profession: 'Learn to create financial models for business analysis.', price: '6500', category: 'Finance' },
    { course: 'Banking Financial Services and Insurance Sector', imageSrc: '/assets/courses/finance/1.png', profession: 'Explore financial services within banking and insurance sectors.', price: '7000', category: 'Finance' },
    { course: 'Fintech Innovations: From Blockchain to AI', imageSrc: '/assets/courses/finance/2.png', profession: 'Understand the role of fintech in modern finance, from blockchain to AI.', price: '7500', category: 'Finance' },
];

// Navigation icons array
const navigationIcons = [
    { icon: "/ilc-icon/legal.png", alt: "Legal", category: 'Law' },
    { icon: "/ilc-icon/drone.png", alt: "Drone", category: 'Drone' },
    { icon: "/ilc-icon/engineering.png", alt: "Engineering", category: 'Engineering' },
    { icon: "/ilc-icon/management.png", alt: "Management", category: 'Management' },
    { icon: "/ilc-icon/aii.png", alt: "AI", category: 'AI' },
    { icon: "/ilc-icon/finance.png", alt: "Finance", category: 'Finance' },
];

const professors = [
    "Rajesh Sharma (Faculty ENGL/SAR)",
    "Priya Desai (Faculty TECH/ENG)",
    "Ananya Gupta (Faculty INNO/SAR)",
];

const professionals = [
    "Amit Verma (Industry EXPERT)",
    "Neha Patel (Lead ENGINEER)",
    "Vikram Reddy (Senior DESIGNER)",
];


const CoursesPage = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('Law');
    const [activeIndex, setActiveIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const [visibleCards, setVisibleCards] = useState(1);
    
    const filteredNames = names.filter((name) => name.category === selectedCategory);

    // Update cards visibility based on window size
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setVisibleCards(1);
            } else if (width < 1024) {
                setVisibleCards(2);
            } else if (width < 1280) {
                setVisibleCards(3);
            } else {
                setVisibleCards(4);
            }
        };
        
        handleResize(); // Initial call
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Touch/mouse event handlers for dragging slider
    const startDrag = (e: React.TouchEvent | React.MouseEvent) => {
        setIsDragging(true);
        const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX;
        setStartX(pageX - (sliderRef.current?.offsetLeft || 0));
        setScrollLeft(sliderRef.current?.scrollLeft || 0);
    };

    const duringDrag = (e: React.TouchEvent | React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX;
        const x = pageX - (sliderRef.current?.offsetLeft || 0);
        const walk = (x - startX) * 2;
        if (sliderRef.current) sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    const endDrag = () => {
        setIsDragging(false);
        snapToSlide();
    };

    // Snap to nearest slide after dragging
    const snapToSlide = () => {
        if (!sliderRef.current) return;
        const slider = sliderRef.current;
        const slideWidth = slider.querySelector('.course-card')?.clientWidth || 0;
        const gapWidth = 16; // 1rem gap
        const totalSlideWidth = slideWidth + gapWidth;
        
        const newIndex = Math.round(slider.scrollLeft / totalSlideWidth);
        setActiveIndex(Math.min(Math.max(newIndex, 0), filteredNames.length - 1));
    };

    // Navigation controls
    const goToSlide = (index: number) => {
        if (!sliderRef.current) return;
        const slideWidth = sliderRef.current.querySelector('.course-card')?.clientWidth || 0;
        const gapWidth = 16; // 1rem gap
        const totalSlideWidth = slideWidth + gapWidth;
        
        sliderRef.current.scrollTo({
            left: index * totalSlideWidth,
            behavior: 'smooth'
        });
        setActiveIndex(index);
    };

    const handlePrev = () => {
        goToSlide(Math.max(activeIndex - visibleCards, 0));
    };

    const handleNext = () => {
        const maxIndex = filteredNames.length - visibleCards;
        goToSlide(Math.min(activeIndex + visibleCards, maxIndex));
    };

    // Calculate number of pagination dots needed
    const totalDots = Math.ceil(filteredNames.length / visibleCards);

    return (
        <div className="flex flex-col md:flex-row bg-[#0d0f2b] text-white overflow-hidden">
            {/* Left Navigation - Hidden on mobile, visible on larger screens */}
            <div className="hidden md:flex w-20 flex-col items-center py-8 space-y-8 bg-[#0d0f2b] border-r border-gray-700 z-10">
                {navigationIcons.map((nav, index) => (
                    <button 
                        key={index} 
                        onClick={() => {
                            setSelectedCategory(nav.category);
                            setActiveIndex(0); // Reset slider position when category changes
                        }}
                        className="text-3xl hover:text-[#a47c38] transition-all"
                    >
                        <Image 
                            src={nav.icon} 
                            alt={nav.alt} 
                            width={50}
                            height={50}
                            className={`transition-opacity ${
                                selectedCategory === nav.category ? 'opacity-100' : 'opacity-50 hover:opacity-75'
                            }`}
                        />
                    </button>
                ))}
            </div>

            {/* Mobile Navigation - Visible only on mobile */}
            <div className="flex md:hidden px-4 py-3 overflow-x-auto space-x-4 bg-[#0d0f2b] border-b border-gray-700 no-scrollbar">
                {navigationIcons.map((nav, index) => (
                    <button 
                        key={index} 
                        onClick={() => {
                            setSelectedCategory(nav.category);
                            setActiveIndex(0);
                        }}
                        className="flex flex-col items-center min-w-[60px]"
                    >
                        <Image 
                            src={nav.icon} 
                            alt={nav.alt} 
                            width={40}
                            height={40}
                            className={`transition-opacity ${
                                selectedCategory === nav.category ? 'opacity-100' : 'opacity-50'
                            }`}
                        />
                        <span className={`text-xs mt-1 ${
                            selectedCategory === nav.category ? 'text-[#a47c38]' : 'text-gray-400'
                        }`}>
                            {nav.alt}
                        </span>
                    </button>
                ))}
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <div className="flex justify-between items-center px-4 md:px-10 py-4 bg-[#0d0f2b] border-b border-gray-700">
                    <h1 className="text-2xl md:text-3xl font-bold">
                        Integrated{' '}
                        <span className="text-[#a47c38]">
                            {selectedCategory === 'Law' ? 'Legal' : selectedCategory} Circle
                        </span>
                    </h1>
                    <button className="bg-[#a47c38] text-white px-4 py-2 md:px-5 md:py-2 rounded-xl font-semibold hover:bg-[#916d31] transition text-sm md:text-base">
                        Download Brochure
                    </button>
                </div>

                {/* Slider Container */}
                <div className="relative flex-1 px-4 md:px-10 py-6">
                    {/* Slider Track */}
                    <div 
                        ref={sliderRef}
                        className={`flex gap-4 transition-transform no-scrollbar ${
                            isDragging ? 'cursor-grabbing' : 'cursor-grab'
                        }`}
                        onTouchStart={startDrag}
                        onTouchMove={duringDrag}
                        onTouchEnd={endDrag}
                        onMouseDown={startDrag}
                        onMouseMove={duringDrag}
                        onMouseUp={endDrag}
                        onMouseLeave={endDrag}
                        style={{ 
                            overflowX: 'scroll',
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                    >
                        {filteredNames.map((name, index) => (
                            <div 
                                key={index}
                                className="course-card flex-shrink-0 bg-white text-black rounded-2xl p-5 shadow-2xl transition-transform"
                                style={{ 
                                    width: `calc(${100 / visibleCards}% - ${(visibleCards - 1) * 16 / visibleCards}px)`,
                                    minWidth: visibleCards === 1 ? '280px' : '240px',
                                }}
                            >
                                <div className="h-48 bg-gray-200 rounded-xl mb-4 overflow-hidden">
                                    <img
                                        src={name.imageSrc}
                                        alt={name.course}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h2 className="font-bold mb-2 text-lg line-clamp-2">{name.course}</h2>
                                <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
                                    {name.profession}
                                </p>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-[#a47c38] font-bold">₹{name.price}</span>
                                    <div className="flex items-center">
                                        <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
                                        <span className="text-gray-600">4.8 (25)</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <button 
                        onClick={handlePrev}
                        className={`absolute left-6 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full hover:bg-black/75 transition z-10 ${
                            activeIndex === 0 ? 'opacity-50 pointer-events-none' : ''
                        }`}
                    >
                        ←
                    </button>
                    <button 
                        onClick={handleNext}
                        className={`absolute right-6 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full hover:bg-black/75 transition z-10 ${
                            activeIndex >= filteredNames.length - visibleCards ? 'opacity-50 pointer-events-none' : ''
                        }`}
                    >
                        →
                    </button>

                    {/* Pagination Dots */}
                    {/*
                    {totalDots > 1 && (
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 pb-4">
                            {Array.from({ length: totalDots }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index * visibleCards)}
                                    className={`w-3 h-3 rounded-full transition ${
                                        Math.floor(activeIndex / visibleCards) === index ? 'bg-[#a47c38]' : 'bg-white/50'
                                    }`}
                                />
                            ))}
                        </div>
                    )}
                        */}
                </div>

                {/* Experts Section */}
                <div className="bg-black rounded-t-3xl py-4 px-4 md:px-8 mt-6">
                    <h2 className="text-xl font-semibold mb-4 text-center">Our Experts</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        <div className="max-h-60 overflow-y-auto no-scrollbar">
                            <h3 className="text-md font-semibold mb-4">Professors</h3>
                            <ul className="space-y-3">
                                {professors.map((professor, index) => (
                                    <li key={index} className="bg-gray-700 p-3 rounded-lg flex items-center justify-between hover:bg-gray-600 transition">
                                        {professor}
                                        <button className="bg-[#a47c38] text-white text-xs px-2 py-1 rounded hover:bg-[#916d31] transition">
                                            View
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="max-h-60 overflow-y-auto no-scrollbar">
                            <h3 className="text-md font-semibold mb-4">Professionals</h3>
                            <ul className="space-y-3">
                                {professionals.map((professional, index) => (
                                    <li key={index} className="bg-gray-700 p-3 rounded-lg flex items-center justify-between hover:bg-gray-600 transition">
                                        {professional}
                                        <button className="bg-[#a47c38] text-white text-xs px-2 py-1 rounded hover:bg-[#916d31] transition">
                                            View
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fixed Start Button */}
            <div className="fixed bottom-6 right-6 z-50">
    <Link href="https://ai.ilc.limited" target="_blank" rel="noopener noreferrer">
        <button className="bg-[#a47c38] text-white px-6 py-2 rounded-2xl font-bold text-lg hover:bg-[#916d31] transition shadow-lg md:text-xl md:px-8 md:py-3">
            START
        </button>
    </Link>
</div>

            <style jsx global>{`
                /* Hide scrollbar but keep functionality */
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};

export default CoursesPage;