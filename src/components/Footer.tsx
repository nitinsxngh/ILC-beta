'use client'
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export function Footer() {
    const listItemsRef = useRef<(HTMLLIElement | null)[]>([]);
    const spanItemsRef = useRef<(HTMLSpanElement | null)[]>([]);

    const links = [
        { label: "Courses", url: "/courses" },
        { label: "Terms of Service", url: "/terms-of-services" },
        { label: "Terms and Conditions", url: "/terms-and-conditions" },
        { label: "Privacy Policy", url: "/privacy" },
    ];

    const socialLinks = [
        { title: "Facebook", href: "https://www.facebook.com/share/1DHS7KLwdv/" },
        { title: "LinkedIn", href: "https://www.linkedin.com/company/integratedlearningcircle/" },
        { title: "Instagram", href: "https://www.instagram.com/integratedlearningcircle/" },
        { title: "Twitter", href: "https://x.com/ILCindia_2024" },
    ];

    useEffect(() => {
        const handleMouseEnter = (item: HTMLElement) => {
            const textInitial = item.querySelector('.initial');
            const textHover = item.querySelector('.hover');
            gsap.to(textInitial, {
                yPercent: -100,
                perspective: 1000,
                rotationX: 90,
                duration: 1,
                ease: 'power4.out',
            });
            gsap.to(textHover, {
                yPercent: 0,
                perspective: 1000,
                rotationX: 0,
                duration: 1,
                ease: 'power4.out',
            });
        };

        const handleMouseLeave = (item: HTMLElement) => {
            const textInitial = item.querySelector('.initial');
            const textHover = item.querySelector('.hover');
            gsap.to(textInitial, {
                yPercent: 0,
                perspective: 1000,
                rotationX: 0,
                duration: 1,
                ease: 'power4.out',
            });
            gsap.to(textHover, {
                yPercent: 100,
                perspective: 1000,
                rotationX: -90,
                duration: 1,
                ease: 'power4.out',
            });
        };

        const addEventListeners = (item: HTMLElement | null) => {
            if (!item) return;
            const textHover = item.querySelector('.hover');
            gsap.set(textHover, { yPercent: 100, perspective: 1000, rotationX: -90 });

            const enterHandler = () => handleMouseEnter(item);
            const leaveHandler = () => handleMouseLeave(item);

            item.addEventListener('mouseenter', enterHandler);
            item.addEventListener('mouseleave', leaveHandler);

            // Store handlers to remove them later
            (item as any).__enterHandler = enterHandler;
            (item as any).__leaveHandler = leaveHandler;
        };

        const removeEventListeners = (item: HTMLElement | null) => {
            if (!item) return;
            item.removeEventListener('mouseenter', (item as any).__enterHandler);
            item.removeEventListener('mouseleave', (item as any).__leaveHandler);
        };

        listItemsRef.current.forEach(addEventListeners);
        spanItemsRef.current.forEach(addEventListeners);

        return () => {
            listItemsRef.current.forEach(removeEventListeners);
            spanItemsRef.current.forEach(removeEventListeners);
        };
    }, []);

    return (
        <footer className="flex relative flex-col container py-12 h-screen justify-evenly">
            <div className='flex flex-col'>
                <ul className="flex flex-col gap-5 uppercase w-24">
                    {links.map((link, index) => (
                        <li
                            key={index}
                            ref={(el) => { listItemsRef.current[index] = el; }}
                            className="relative overflow-hidden h-5 cursor-pointer"
                        >
                            <a href={link.url} className="block">
                                <span className="initial absolute top-0 left-0 w-full h-full">{link.label}</span>
                                <span className="hover absolute top-0 left-0 w-full h-full">{link.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div
  className='relative overflow-hidden group/line py-12 mx-auto w-fit cursor-pointer'
  onClick={() => window.location.href = "https://ai.ilc.limited/"} // Redirect on click
>
  <h1 className='w-full text-[12vw] uppercase leading-none'>Let&apos;s Talk</h1>
  <span className='block w-full bg-white h-3 -translate-x-full group-hover/line:translate-x-0 duration-500 opacity-0 group-hover/line:opacity-100' />
</div>

            <div className='w-full flex flex-col md:flex-row gap-10 justify-between'>
                <div className='flex gap-10 uppercase'>
                    {socialLinks.map((social, index) => (
                        <div key={index} className='relative overflow-hidden group/line cursor-pointer'>
                            <a href={social.href} target="_blank" rel="noopener noreferrer">
                                <h1 className='leading-none pb-2'>{social.title}</h1>
                                <span className='block bg-white h-[2px] -translate-x-full group-hover/line:translate-x-0 group-hover/line:opacity-100 opacity-0 duration-500' />
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
