'use client';
import * as React from 'react';
import { useState } from 'react';
import { GlobeAltIcon, StarIcon } from '@heroicons/react/24/outline';
// Import Swiper styles and components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

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

const NamesList = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('Legal');

    // Filter courses based on category selection
    const filteredNames = names.filter((name) =>
        selectedCategory === 'Legal'
            ? name.category === 'Law'
            : selectedCategory === 'Drone'
            ? name.category === 'Drone'
            : selectedCategory === 'Engineering'
            ? name.category === 'Engineering'
            : name.category === selectedCategory
    );

    // Redirect function for Explore Classes
    const redirectToExploreClasses = () => {
        window.location.href = 'https://ai.ilc.limited';
    };

    // Redirect function for individual courses
    const redirectToCourseDetails = () => {
        window.location.href = 'https://ai.ilc.limited';
    };

    return (
        <div>
            <div id="courses-section" className="mx-auto max-w-2xl py-18 px-4 sm:py-36 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="sm:flex justify-between items-center pt-24 pb-12">
                    <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white my-4">
                        Integrated{' '}
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="bg-transparent text-[#a47c38] font-medium py-2 px-4 rounded focus:outline-none focus:ring-0 border border-gray-400 min-w-[150px] max-h-[200px] overflow-y-auto"
                        >
                            <option value="Legal">Legal</option>
                            <option value="Drone">Drone</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Management">Management</option>
                            <option value="AI">AI</option>
                            <option value="Finance">Finance</option>
                        </select>{' '}
                        Circle
                    </h2>

                    <button
                        onClick={redirectToExploreClasses}
                        className="bg-transparent hover:bg-purple text-purple font-medium hover:text-white py-3 px-4 border border-purple hover:border-transparent rounded"
                    >
                        Explore Classes
                    </button>
                </div>

                <div>
                    <div className="mx-auto max-w-7xl">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 4,
                                },
                            }}
                        >
                            {filteredNames.length > 0 ? (
                                filteredNames.map((name, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="text-lg sm:text-sm bg-black p-2 rounded-xl py-5 lg:py-4">
                                            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-xl bg-gray-100 group-hover:opacity-75">
                                                <img
                                                    src={name.imageSrc}
                                                    alt={name.imageSrc}
                                                    className="h-full w-full rounded-xl object-cover object-center"
                                                />
                                            </div>
                                            <div className="flex justify-between">
                                                <div className="mt-6 block font-normal text-gray-900">{name.category}</div>
                                            </div>
                                            <p aria-hidden="true" className="mt-2 mb-5 text-2xl font-semibold">
                                                {name.course}
                                            </p>
                                            <div className="flex justify-between border-solid border-2 border-grey500 rounded-md p-2">
                                                <div className="flex flex-row space-x-4">
                                                    <a
                                                        href="#"
                                                        className="text-purple-600 hover:underline font-medium"
                                                        onClick={redirectToCourseDetails}
                                                    >
                                                        Syllabus
                                                    </a>
                                                </div>
                                                <div className="flex border-lg flex-row space-x-4">
                                                    <p className="text-purple-600 font-semibold">₹{name.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            ) : (
                                <SwiperSlide>
                                    <p>No courses available</p>
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NamesList;