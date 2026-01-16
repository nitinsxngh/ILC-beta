
"use client";

import Image from "next/image";
import Link from "next/link";
import Logoslider from "./Logoslider";
import Slider from "react-infinite-logo-slider";
import { useEffect, useState } from "react";

function Pricing() {
const [pricingData, setPricingData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/page-data')
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                setPricingData(data?.pricingData)
            } catch (error) {
                console.error('Error fetching services:', error)
            }
        }
        fetchData()
    }, [])
   

    return (
        <section className="bg-lightgray dark:bg-secondary py-20 md:py-40">
            <div className="flex flex-col gap-24">
                <div className="container">
                    <div className="flex flex-col gap-20">
                        <div className="flex flex-col gap-14 xl:gap-24">
                            <div className="flex flex-col xl:flex xl:flex-row items-start gap-8">
                                <div className="flex items-center py-3 gap-4 md:gap-8 w-full max-w-xl">
                                    <span className="bg-primary dark:text-secondary py-1.5 px-2.5 text-base font-medium rounded-full">07</span>
                                    <div className="h-px w-16 bg-black/12 dark:bg-white/12" />
                                    <p className="section-bedge py-1.5 px-4 rounded-full">{pricingData?.name || "Integrated Learning Circle"}</p>
                                </div>
                                <div className="flex flex-col gap-11">
                                    <div className="flex flex-col gap-5 ">
                                        <h2 className="max-w-3xl">{pricingData?.heading || "Join Integrated Learning Circle"}</h2>
                                        <p
                                            className="max-w-2xl text-secondary/70 dark:text-white/70"
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    pricingData?.description ||
                                                    "Become part of our comprehensive ecosystem designed to connect students, startups, mentors, and professors for collaborative growth and learning.",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
                                {pricingData?.data?.map((value:any, index:any) => {
                                    return (
                                        <div key={index} className="bg-white dark:bg-lightgray/10 p-3 sm:p-5 xl:p-12 flex flex-col gap-10">
                                            <div className="flex flex-col gap-5">
                                                <div className="flex items-center gap-4">
                                                    <p className="font-medium text-xl">{value?.roleName}</p>
                                                </div>
                                                <p className="text-base text-secondary/70 dark:text-white/70">{value?.roleDescription}</p>
                                            </div>
                                            <div>
                                                <Link
                                                    href={value?.signupUrl || "https://explore.ilc.limited/authentication/login"}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group relative flex justify-center items-center w-full bg-primary hover:bg-secondary rounded-full transition-all duration-300 ease-in-out"
                                                >
                                                    <span className="py-4 px-2 text-sm font-bold text-secondary group-hover:text-white transition-all duration-300 ease-in-out">
                                                        Sign up as {value?.roleName}
                                                    </span>
                                                    <div className="absolute top-0.5 right-0.5 transition-all duration-300 ease-in-out group-hover:left-0">
                                                        <svg className="flex items-center transition-transform duration-300 ease-in-out group-hover:rotate-45" width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g filter="url(#filter0_d_1_873)">
                                                                <rect x="3" y="2" width="52" height="52" rx="26" fill="white" />
                                                                <path d="M24 23H34M34 23V33M34 23L24 33" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </g>
                                                            <defs>
                                                                <filter id="filter0_d_1_873" x="0" y="0" width="58" height="58" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                    <feOffset dy="1" />
                                                                    <feGaussianBlur stdDeviation="1.5" />
                                                                    <feComposite in2="hardAlpha" operator="out" />
                                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_873" />
                                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_873" result="shape" />
                                                                </filter>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        {/* <div className="flex flex-col gap-10">
                            <p className="text-secondary dark:text-white text-center">More than 320 trusted partners & clients</p>
                            <Slider duration={20} pauseOnHover={true} blurBorders={false}>
                                {(pricingData?.partnerLogo || []).map((items: any, index: any) => (
                                    <Logoslider key={index} logo={items} />
                                ))}
                            </Slider>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Pricing;
