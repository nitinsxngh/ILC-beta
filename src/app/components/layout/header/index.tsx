import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggler from "./ThemeToggle";
import { usePathname } from "next/navigation";
 
import Logo from "../logo";

const Header = () => {
    const [menuData, setMenuData] = useState<any>(null);
    const [sticky, setSticky] = useState(false);
    const pathname = usePathname();

    const handleScroll = () => {
        setSticky(window.scrollY >= 80);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [pathname]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/layout-data')
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                setMenuData(data?.MenuData)
            } catch (error) {
                console.error('Error fetching services:', error)
            }
        }
        fetchData()
    }, []);

    return (
        <header className={`fixed top-0 z-50 w-full border-t-4 border-primary transition-all duration-500 ease-in-out before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-0 before:bg-white before:transition-all before:duration-500 before:ease-in-out ${sticky ? "before:h-full" : "before:h-0"}`}>
            <div className="container">
                <nav className={`relative flex item-center justify-between ${sticky ? 'py-2' : 'py-3'}`}>
                    <div className='flex items-center'>
                        <Logo sticky={sticky} />
                    </div>
                    <div className="flex items-center gap-6">
                        <ul className="hidden lg:flex items-center gap-6">
                            {menuData?.map((menuItem: any, index: any) => (
                                <li key={index}>
                                    <Link
                                        href={menuItem.path}
                                        target={menuItem.newTab ? "_blank" : "_self"}
                                        className={`text-base font-semibold transition-colors ${
                                            sticky ? "text-secondary hover:text-secondary/80" : "text-white hover:text-white/80"
                                        }`}
                                    >
                                        {menuItem.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="flex items-center gap-3">
                            <ThemeToggler />
                            <Link
                                href="https://explore.ilc.limited/authentication/login"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex justify-center items-center text-white text-sm md:text-base font-bold rounded-full bg-secondary py-2 px-4.5 hover:bg-secondary/90 transition-all duration-200"
                            >
                                Signup
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
