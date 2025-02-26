import React, { useEffect, useState } from 'react'

const BriefIntro = () => {


    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isSmallestScreen, setIsSmallestScreen] = useState(false);

    useEffect(() => {
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
        <div className={`w-full 2xl:mt-5 xl:mt-5 lg:mt-5 md:mt-5 sm:mt-5 ${isSmallestScreen ? "mt-0" : isSmallScreen ? "mt-2" : ""} h-fit font-helveticaNeue`}>
            <div className={`container mx-auto py-10  border-b border-b-[#E5E7EB] 2xl:px-7 xl:px-7 lg:px-7 md:px-4 sm:px-4  ${ isSmallScreen ? "px-4" : ""}`}>
                <div className='flex justify-between flex-wrap px-7 lg:px-4 md:px-4 sm:px-4'>
                    <div className={`2xl:w-[301px] xl:w-[301px] lg:w-full flex  lg:justify-center md:justify-center md:w-full sm:w-full sm:justify-center ${isSmallestScreen ? "text-center justify-center w-full" : isSmallScreen ? "text-center justify-center w-full" : ""}`}>
                        <h1 className={`text-[#000000] font-bold 2xl:text-[32px] xl:text-[32px] lg:text-[32px] md:text-[32px] sm:text-[30px] leading-[38.4px] tracking-[0%]  ${isSmallestScreen ? "text-[20px] text-center leading-8 " : isSmallScreen ? "text-[26px] leading-10" : ""} `}>A Brief Introduction to Who We Are</h1>
                    </div>
                    <div className='flex flex-col justify-between items-start gap-x-10 gap-y-10 2xl:w-[820px] xl:w-[820px] lg:w-full '>
                        <p className={`text-[#6B7280] 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] sm:text-[22px] leading-[33.6px] tracking-[-2%] font-medium 2xl:mt-0 xl:mt-0 lg:mt-6 md:mt-6 sm:mt-6 ${isSmallestScreen ? "text-[16px] mt-5 text-center  " : isSmallScreen ? "text-[18px]  mt-5" : ""}`}>
                            We specialize in providing custom orthotics, focused on comfort, mobility, and support to improve your health and lifestyle.
                        </p>
                        <div className={`flex gap-x-6 w-full lg:justify-around md:justify-around sm:justify-around  ${isSmallestScreen ? "justify-evenly " : isSmallScreen ? "justify-center" : ""}`}>
                            <div className={`flex flex-col gap-y-4 2xl:w-[390px] xl:w-[390px] 
                                ${isSmallestScreen ? "w-1/2 gap-y-0" : isSmallScreen ? "w-1/2 gap-y-0" : ""}`}>
                                <p className={`text-[#1F2937] font-bold 2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[40px] leading-[48px] tracking-[0%]  ${isSmallestScreen ? "text-[20px] text-center leading-8 " : isSmallScreen ? "text-[26px] text-center leading-10" : ""} `}>
                                    150K
                                </p>
                                <p className={`text-[16px] leading-[25.6px] tracking-[0%] font-medium text-[#6B7280] ${isSmallestScreen ? "text-[16px]  text-center  " : isSmallScreen ? "text-[18px] text-center " : ""}`}>
                                    Happy Customer
                                </p>
                            </div>
                            <div className={`flex flex-col gap-y-4 2xl:w-[390px] xl:w-[390px] 
                                ${isSmallestScreen ? "w-1/2 gap-y-0" : isSmallScreen ? "w-1/2  gap-y-0" : ""}`}>
                                <p className={`text-[#1F2937] font-bold 2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[40px] leading-[48px] tracking-[0%]  ${isSmallestScreen ? "text-[20px] text-center leading-8 " : isSmallScreen ? "text-[26px] text-center leading-10" : ""} `}>
                                    99%
                                </p>
                                <p className={`text-[16px] leading-[25.6px] tracking-[0%] font-medium text-[#6B7280] 2xl:w-[182px]
                                xl:w-[182px] lg:w-[182px] md:w-[182px] sm:w-full
                                ${isSmallestScreen ? "w-full text-[16px]  text-center  " : isSmallScreen ? " w-full text-[18px] text-center " : ""}
                                `}>
                                    The quality of the goods is very good
                                </p>
                            </div>
                        </div>

                    </div>
                </div>


            </div>

        </div>
    )
}

export default BriefIntro