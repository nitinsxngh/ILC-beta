'use client'
import { useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation'; // 🆕 Import this hook
import { gsap } from 'gsap';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';

export function Footer() {
    const pathname = usePathname(); // 🆕 Get current path

    // 🛑 If you are on "/courses" page, don't render footer
    if (pathname === "/courses") {
        return null;
    }

    const columns = [
        { title: "Our Schools", items: ["IAIC", "IFC", "IMC", "IDC", "ILC", "IEC"] },
        { title: "What We Provide?", items: ["Practical Courses", "Library", "HR Recruitment", "Seminars & Conferences", "Internship Opportunities"] },
        { title: "Tools By ILC", items: ["AI Powered", "Study Companion", "Resume Builder", "Integrated Portal", "Networking Directory for Candidates"] },
        { title: "Build Connections With", items: ["MNCs", "Universities", "Professionals", "Professors", "Student Pool"] },
    ];

    const socialLinks = [
        { title: "Facebook", href: "https://www.facebook.com/share/1DHS7KLwdv/", Icon: FaFacebookF },
        { title: "LinkedIn", href: "https://www.linkedin.com/company/integratedlearningcircle/", Icon: FaLinkedinIn },
        { title: "Instagram", href: "https://www.instagram.com/integratedlearningcircle/", Icon: FaInstagram },
        { title: "Twitter", href: "https://x.com/ILCindia_2024", Icon: FaTwitter },
    ];

    return (
        <footer className="flex relative flex-col container py-12 justify-evenly">
            {/* Main columns section */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
                {columns.map((column, index) => (
                    <div key={index} className="flex flex-col gap-4">
                        <h3 className="text-lg font-semibold mb-2">{column.title}</h3>
                        <ul className="space-y-2">
                            {column.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="text-sm hover:text-gray-300 transition-colors">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Let's Talk section */}
            <div
                className='relative overflow-hidden group/line py-12 mx-auto w-fit cursor-pointer'
                onClick={() => window.location.href = "https://ai.ilc.limited/"}
            >
                <h1 className='w-full text-[12vw] uppercase leading-none'>Let&apos;s Talk</h1>
                <span className='block w-full bg-white h-3 -translate-x-full group-hover/line:translate-x-0 duration-500 opacity-0 group-hover/line:opacity-100' />
            </div>

            {/* Bottom section */}
            <div className='w-full flex flex-col md:flex-row gap-10 justify-between mt-12'>
                <div className='flex w-full justify-center md:justify-start gap-8 md:gap-10 uppercase'>
                    {socialLinks.map((social, index) => (
                        <div
                            key={index}
                            className='relative overflow-hidden group/line cursor-pointer flex-shrink-0'
                        >
                            <a
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.title}
                                className='flex flex-col items-center md:items-start'
                            >
                                <span className='md:hidden text-2xl flex items-center justify-center w-10 h-10'>
                                    <social.Icon />
                                </span>
                                <h1 className='hidden md:block leading-none pb-2'>{social.title}</h1>
                                <span className='hidden md:block bg-white h-[2px] -translate-x-full group-hover/line:translate-x-0 group-hover/line:opacity-100 opacity-0 duration-500 w-full' />
                            </a>
                        </div>
                    ))}
                </div>
                <div className='flex gap-10 uppercase'>
                    <span>2025 © ILC Limited</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
