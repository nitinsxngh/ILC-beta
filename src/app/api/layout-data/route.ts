import { NextResponse } from "next/server";

const MenuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "CV Builder",
    path: "https://resumebuilder.ilc.limited/",
    newTab: true,
  },
  {
    id: 3,
    title: "Personality Test",
    path: "https://personalitytest.ilc.limited/",
    newTab: true,
  },
  {
    id: 4,
    title: "Forum",
    path: "https://forum.ilc.limited/",
    newTab: true,
  },
  {
    id: 5,
    title: "Sign in/Signup",
    path: "https://explore.ilc.limited/",
    newTab: true,
  }
];


const footerData = {
    name: "ILC",
    tagline: "Build something together?",
    info: [
        {
            icon: "/images/footer/email-arrow.svg",
            link: "info@ilc.limited",
            href: "mailto:info@ilc.limited"
        },
        {
            icon: "/images/footer/Location.svg",
            link: "Sector 56, Gurgaon, Haryana",
            href: "https://maps.app.goo.gl/search?q=Sector+56,+Gurgaon,+Haryana"
        },
        {
            icon: "/images/footer/email-arrow.svg",
            link: "+91-7303031659",
            href: "tel:+917303031659"
        }
    ],
    socialLinks: [
        { name: "Facebook", href: "https://www.facebook.com/" },
        { name: "Instagram", href: "https://www.instagram.com/" },
        { name: "Twitter", href: "https://x.com/" }
    ],
    whatWeProvide: {
        title: "What We Provide?",
        items: [
            { name: "Practical Courses", href: "#" },
            { name: "Library", href: "#" },
            { name: "HR Recruitment", href: "#" },
            { name: "Seminars & Conferences", href: "#" },
            { name: "Internship Opportunities", href: "#" }
        ]
    },
    toolsByILC: {
        title: "Tools By ILC",
        items: [
            { name: "AI Powered", href: "#" },
            { name: "Study Companion", href: "#" },
            { name: "Resume Builder", href: "#" },
            { name: "Integrated Portal", href: "#" },
            { name: "Networking Directory for Candidates", href: "#" }
        ]
    },
    buildConnections: {
        title: "Build Connections With",
        items: [
            { name: "MNCs", href: "#" },
            { name: "Universities", href: "#" },
            { name: "Professionals", href: "#" },
            { name: "Professors", href: "#" },
            { name: "Student Pool", href: "#" }
        ]
    },
    copyright: "© ILC copyright 2025"
};

export const GET = async () => {
    return NextResponse.json({
        footerData,
        MenuData
    });
};