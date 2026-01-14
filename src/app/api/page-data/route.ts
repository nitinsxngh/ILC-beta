import { NextResponse } from "next/server";

const avatarList = [
    {
        image: "/images/avatar/avatar_1.jpg",
        title: "Sarah Johnson"
    },
    {
        image: "/images/avatar/avatar_2.jpg",
        title: "Olivia Miller"
    },
    {
        image: "/images/avatar/avatar_3.jpg",
        title: "Sophia Roberts"
    },
    {
        image: "/images/avatar/avatar_4.jpg",
        title: "Isabella Clark"
    },
];

const statsFactData = {
    number: '01',
    name: "Stats & facts",
    heading: "High quality web design solutions you can trust.",
    description: "When selecting a web design agency, it's essential to consider its reputation, experience, and the specific needs of your project.",
    scoreData: [
        {
            number: 40,
            numberValue: 'K',
            scoreDescp: "People who have launched their websites"
        },
        {
            number: 238,
            scoreDescp: "Experienced professionals ready to assist"
        },
        {
            number: 3,
            numberValue: 'M',
            scoreDescp: "Support through messages and live consultations"
        },
    ]
};

const servicesData = {
    number: '03',
    name: "ILC ecosystem",
    heading: "Discover Your True Potential",
    description: "Explore our comprehensive ecosystem designed to help you discover your strengths, build your career, learn from experts, and connect with opportunities for professional growth.",
    data: [
        {
            id: 1,
            image: "/images/ecosystem/1.png",
            heading: "Discover Your True Potential",
            descp: "Take a scientifically designed psychometric test to gain deep insights into your personality, strengths, interests, and career suitability."
        },
        {
            id: 2,
            image: "/images/ecosystem/2.png",
            heading: "Build a Trusted Professional CV",
            descp: "Design a professional, DigiLocker-verified CV that authenticates your credentials and increases visibility and trust among recruiters."
        },
        {
            id: 3,
            image: "/images/ecosystem/3.png",
            heading: "Learn by Doing with Industry Experts",
            descp: "Gain practical, hands-on experience through experiential learning programs guided by industry professionals and mentors."
        },
        {
            id: 4,
            image: "/images/ecosystem/4.png",
            heading: "Connect, Grow, and Succeed",
            descp: "Become part of a dynamic academic ecosystem and professional network to collaborate, share knowledge, and access career opportunities."
        },
    ]
};

const testimonialData = {
    data_1: {
        preTitle: "Hear from them",
        title: "Our website redesign was flawless. They understood our vision perfectly!",
        author: "Albert Flores",
        company: "MasterCard"
    },
    data_2: {
        preTitle: "Hear from them",
        title: "From concept to execution, they delivered outstanding results. Highly recommend their expertise!",
        author: "Robert Fox",
        company: "Mitsubishi"
    },
    data_3: {
        preTitle: "Hear from them",
        title: "Super smooth process with incredible results. highly recommend!",
        author: "Jenny Wilson",
        company: "Pizza Hut"
    },
};

const teamData = {
    number: '08',
    data: [
        {
            image: "/images/teams/IMG_4343.JPG",
            name: "Albert Flores",
            position: "UX/UI Developer",
            socialLinks: [
                {
                    icon: "/images/socialIcon/twitter.svg",
                    link: "https://twitter.com"
                },
                {
                    icon: "/images/socialIcon/Be.svg",
                    link: "https://www.behance.net/"
                },
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://linkedin.com"
                }
            ]
        },
        {
            image: "/images/teams/IMG_4344.JPG",
            name: "Sarah Johnson",
            position: "Frontend Developer",
            socialLinks: [
                {
                    icon: "/images/socialIcon/twitter.svg",
                    link: "https://twitter.com"
                },
                {
                    icon: "/images/socialIcon/Be.svg",
                    link: "https://www.behance.net/"
                },
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://linkedin.com"
                }
            ]
        },
        {
            image: "/images/teams/IMG_4345.JPG",
            name: "Michael Chen",
            position: "Backend Engineer",
            socialLinks: [
                {
                    icon: "/images/socialIcon/twitter.svg",
                    link: "https://twitter.com"
                },
                {
                    icon: "/images/socialIcon/Be.svg",
                    link: "https://www.behance.net/"
                },
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://linkedin.com"
                }
            ]
        },
        {
            image: "/images/teams/IMG_4346.JPG",
            name: "Emily Rodriguez",
            position: "Product Manager",
            socialLinks: [
                {
                    icon: "/images/socialIcon/twitter.svg",
                    link: "https://twitter.com"
                },
                {
                    icon: "/images/socialIcon/Be.svg",
                    link: "https://www.behance.net/"
                },
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://linkedin.com"
                }
            ]
        },
        {
            image: "/images/teams/IMG_4347.JPG",
            name: "David Kim",
            position: "DevOps Specialist",
            socialLinks: [
                {
                    icon: "/images/socialIcon/twitter.svg",
                    link: "https://twitter.com"
                },
                {
                    icon: "/images/socialIcon/Be.svg",
                    link: "https://www.behance.net/"
                },
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://linkedin.com"
                }
            ]
        },
        {
            image: "/images/teams/IMG_4343.JPG",
            name: "Albert Flores",
            position: "UX/UI Developer",
            socialLinks: [
                {
                    icon: "/images/socialIcon/twitter.svg",
                    link: "https://twitter.com"
                },
                {
                    icon: "/images/socialIcon/Be.svg",
                    link: "https://www.behance.net/"
                },
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://linkedin.com"
                }
            ]
        },
        {
            image: "/images/teams/IMG_4344.JPG",
            name: "Sarah Johnson",
            position: "Frontend Developer",
            socialLinks: [
                {
                    icon: "/images/socialIcon/twitter.svg",
                    link: "https://twitter.com"
                },
                {
                    icon: "/images/socialIcon/Be.svg",
                    link: "https://www.behance.net/"
                },
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://linkedin.com"
                }
            ]
        },
        {
            image: "/images/teams/IMG_4345.JPG",
            name: "Michael Chen",
            position: "Backend Engineer",
            socialLinks: [
                {
                    icon: "/images/socialIcon/twitter.svg",
                    link: "https://twitter.com"
                },
                {
                    icon: "/images/socialIcon/Be.svg",
                    link: "https://www.behance.net/"
                },
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://linkedin.com"
                }
            ]
        },
    ]
};

const pricingData = {
    name: "Integrated Learning Circle",
    heading: "Join Integrated Learning Circle",
    description: "Become part of our comprehensive ecosystem designed to connect <span class=\"font-semibold\">students</span>, <span class=\"font-semibold\">startups</span>, <span class=\"font-semibold\">mentors</span>, and <span class=\"font-semibold\">professors</span> for collaborative growth and learning.",
    data: [
        {
            id: 1,
            roleName: "STUDENT",
            roleDescription: "Students who want real-world exposure, Digitlocker verified resume & psychometric assessment through ILC ecosystem"
        },
        {
            id: 2,
            roleName: "STARTUP",
            roleDescription: "Startups looking for motivated students for internships, live projects within the ILC ecosystem"
        },
        {
            id: 3,
            roleName: "MENTORS",
            roleDescription: "Industry professionals with expertise & practical knowledge who want to train students through ILC ecosystem"
        },
        {
            id: 4,
            roleName: "PROFESSOR",
            roleDescription: "Academic professionals who wish to contribute to student development & curriculum support"
        },
    ],
    partnerLogo: [
        { light: "/images/home/pricing/partner-1.svg", dark: "/images/home/pricing/partner-dark-1.svg" },
        { light: "/images/home/pricing/partner-2.svg", dark: "/images/home/pricing/partner-dark-2.svg" },
        { light: "/images/home/pricing/partner-3.svg", dark: "/images/home/pricing/partner-dark-3.svg" },
        { light: "/images/home/pricing/partner-4.svg", dark: "/images/home/pricing/partner-dark-4.svg" },
        { light: "/images/home/pricing/partner-5.svg", dark: "/images/home/pricing/partner-dark-5.svg" },
      ],
};

const faqData = {
    data: [
        {
            faq_que: "What services does your agency offer?",
            faq_ans: 'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.'
        },
        {
            faq_que: "How long does a typical project take?",
            faq_ans: 'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.'
        },
        {
            faq_que: "Do you offer custom designs, or do you use templates?",
            faq_ans: 'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.'
        },
        {
            faq_que: "What’s the cost of a project?",
            faq_ans: 'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.'
        },
        {
            faq_que: "Do you provide ongoing support after project completion?",
            faq_ans: 'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.'
        }
    ]
};
const contactData = {
    keypoint:["Always-On Customer Support","Service Across the Globe"],
    managerProfile:{
        image:"/images/avatar/avatar_1.jpg",
        name:"Courtney Henry",
        position:"Onboarding & Success Manager"
    }
}

const aboutusStats = [
    {
        number: 45,
        postfix:"+",
        title: 'Presence in global markets',
        descp: "Expanding reach across international regions with localized expertise and worldwide impact."
    },
    {
        number: 15,
        prefix: "$",
        postfix: "M",
        title: 'In strategic investments',
        descp: "Driving growth with curated partnerships and high-performing, audience-driven initiatives."
    },
    {
        number: 158,
        postfix: "+",
        title: 'Trusted brand collaborations',
        descp: "Shaping industry conversations through innovation, creativity, and lasting influence."
    },
]

const servicesSliderData = [
    "Branding", "Web development", "Agency","Content creation","SaaS","Motion & 3d modeling","Photography"
]



export const GET = async () => {
    return NextResponse.json({
        avatarList,
        statsFactData,
        servicesData,
        testimonialData,
        teamData,
        pricingData,
        faqData,
        contactData,
        aboutusStats,
        servicesSliderData
    });
};