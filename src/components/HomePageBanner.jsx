import { Inter } from 'next/font/google';
import { useState, useEffect } from 'react';

const interSans = Inter({
    variable: "--font-inter-sans",
    subsets: ["latin"],
});

const HomePageBanner = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isSmallestScreen, setIsSmallestScreen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const checkMediaQueries = () => {
            setIsSmallScreen(window.matchMedia('(max-width: 640px)').matches);
            setIsSmallestScreen(window.matchMedia('(max-width: 375px)').matches);
        };
        
        checkMediaQueries();
        window.addEventListener('resize', checkMediaQueries);
        
        return () => {
            window.removeEventListener('resize', checkMediaQueries);
        };
    }, []);
    
    return (
        <div className="w-full mt-10 flex flex-col justify-center items-center h-fit">
            <div className={`mx-auto container relative ${mounted && isSmallScreen ? "px-4" : "px-7"}`}>
                <div className="mx-auto flex justify-center">
                    <span className="text-[#000000] py-2 px-4 rounded-full bg-[#FFFBEF] inline font-helveticaNeue font-medium text-[14px] sm:text-[16px] leading-[17.6px] text-center">
                        Discover Our Exquisite Selections
                    </span>
                </div>

                <div className="flex lg:flex-row flex-col lg:items-end items-center justify-evenly px-7 relative">
                    <span className={`font-helveticaNeue font-extrabold inline lg:mb-[25px]   sm:mb-0 lg:mt-0 mt-4 
                         2xl:text-[40px] xl:text-[40px] lg:text-[36px] md:text-[35px] sm:text-[32px] tracking-[-2%] text-primary mb-0 ${mounted && isSmallestScreen ? "text-[20px]" : isSmallScreen ? "text-[26px]" : ""}`}>
                        Get Your Custom
                    </span>
                    <div className="relative flex justify-center items-center">
                        <span
                            className="absolute top-4  font-extrabold 2xl:text-[200px] xl:text-[200px] lg:text-[150px]  md:text-[100px] 
                                 sm:text-[100px] block tracking-[-6%] text-transparent opacity-60 custom-text-stroke"
                            style={{
                                fontSize: mounted ? 
                                    (isSmallestScreen ? "clamp(2rem, 10vw, 6rem)" : 
                                     isSmallScreen ? "clamp(3rem, 12vw, min(10rem, 100% - 20px))" : "") 
                                    : ""
                            }}
                        >
                            STEPFORM
                        </span>

                        <img
                            src="/images/homepage-banner/banner-image.png"
                            alt="Stepform product"
                            className={`mt-6 ${mounted && isSmallScreen ? "mt-4 " : ""}`}
                        />
                    </div>
                    <span className={`font-helveticaNeue font-bold inline 
                         2xl:text-[40px] xl:text-[40px] lg:text-[36px] md:text-[35px] sm:text-[32px] sm:md-0 lg:mt-0 mt-4  tracking-[-2%] text-primary lg:mb-[25px] mb-0 ${mounted && isSmallestScreen ? "text-[20px]" : isSmallScreen ? "text-[26px]" : ""}`}>
                        Orthotics Today
                    </span>
                </div>

                <div className="flex flex-col justify-center items-center gap-4 mt-5">
                    <p className="text-[#6B7280] font-normal font-helveticaNeue text-[14px] sm:text-[16px] leading-[25.6px] text-center mt-10">
                        Providing comfort, support, mobility, and confidence with tailor-made solutions.
                    </p>

                    <button className={`${interSans.variable} text-[#252525] font-semibold text-[14px] sm:text-[16px] mt-2
                    ${mounted && isSmallestScreen ? "px-2 py-2 text-[12px]" : "px-6 py-3"}
                    border border-[#252525] tracking-0 px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:cursor-pointer`}>
                        Shop Now
                    </button>
                </div>

                <div className={`absolute bottom-4 right-7 border rounded-full sm:bottom-0 sm:px-2 sm:py-2
                     border-solid border-[rgba(15,_64,_38,_0.2)] ${mounted && isSmallScreen ? "bottom-0 right-4 px-2 py-2" : "px-4 py-4"} ${mounted && isSmallestScreen ? "right-0" : ""}`}>
                    <img 
                        src="/images/homepage-banner/mouse-icon.svg" 
                        alt="Mouse icon" 
                        className={`${mounted && isSmallestScreen ? "w-5" : ""}`} 
                    />
                </div>
            </div>
        </div>
    );
};

export default HomePageBanner;