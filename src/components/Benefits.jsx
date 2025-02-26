import React, { useEffect, useState } from 'react'
import { Inter } from 'next/font/google';
import { useMediaQuery } from 'react-responsive';

const interSans = Inter({
    variable: "--font-inter-sans",
    subsets: ["latin"],
});

const Benefits = () => {

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




    const benefitsData = [
        {
            title: "Personalized for You",
            subTitle: "Each pair is handcrafted to fit your feet perfectly, providing superior comfort and support.",
            url: "/images/benefits/personalized-logo.svg"
        },
        {
            title: "Pain Relief & Comfort",
            subTitle: "Say goodbye to foot, knee, and back pain. Our orthotics help alleviate discomfort and promote movement.",
            url: "/images/benefits/pain-relief-logo.svg"
        },
        {
            title: "Affordable & Risk-Free",
            subTitle: "Enjoy high-quality custom orthotics at a fraction of the cost of providers. Plus, we offer a money-back guarantee.",
            url: "/images/benefits/affordable-logo.svg"
        }
    ]


    return (
        <div className="w-full mt-10 h-fit relative bg-primary">

            <div className="absolute inset-0 bg-[url('/images/benefits/benefits-bg.png')] bg-cover bg-center bg-no-repeat opacity-[0.06] scale-[1]"></div>

            <div className={`relative z-10 container mx-auto flex  2xl:py-[114px] xl:py-[114px] lg:py-[80px] md:py-[80px] sm:py-[80px] justify-evenly items-center font-helveticaNeue 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap md:flex-wrap-reverse sm:flex-wrap-reverse 2xl:px-7  xl:px-7  lg:px-7  md:px-7  sm:px-4  ${isSmallScreen ? "px-4 py-4" : ""} ${isSmallestScreen ? "px-4 py-4" : ""}  ${isSmallScreen ? "flex-wrap-reverse" : ""}`}>

                <div className={`flex flex-col 2xl:mt-0 xl:mt-0 lg:mt-0  md:mt-10 ${isSmallScreen ? "mt-10" :""}`}>
                    <div className='max-w-[698px] w-full flex flex-col items-center'>
                        <p className={`font-bold text-[45px] leading-[54px] tracking-[0%] text-white text-left w-full  ${isSmallestScreen ? "text-[40px] leading-8 " : isSmallScreen ? "text-[30px] leading-10" : ""} `}>Benefits</p>
                        <p className='font-normal text-[16px] leading-[25.6px] tracking-[0px] text-white 2xl:w-[698px]  w-full text-left'>
                            Discover the benefits of custom orthotics, including improved posture, pain relief, mobility, foot health, balance, reduced strain, comfort, and support for a healthier lifestyle.
                        </p>
                        <div className='flex flex-col justify-start items-start mt-10 gap-y-4 gap-x-4 w-full'>
                            {benefitsData.map((benefit, index) => (
                                <div key={index} className={`grid  items-center bg-[#F9F9F9] rounded-[15px] 2xl:w-[671px] p-6 gap-x-4 xl:grid-cols-[70px_auto] xl:p-4 lg:grid-cols-[60px_auto]   w-full    grid-cols-[80px_auto]`}>
                                    <div className={`bg-[#FFFFFF] rounded-[15px] px-4 py-4 `}>
                                        <img src={benefit.url} alt={benefit.title} className={`w-[50px] h-[50px] xl:w-[40px] xl:h-[40px] lg:w-[30px] lg:h-[30px] object-center scale-100 aspect-square ${isSmallestScreen ? "w-[24px] h-[24px] " : isSmallScreen ? "w-[40px] h-[40px]" : ""}`} />
                                    </div>

                                    <div className="grid grid-cols-[1px_auto] items-center gap-x-4">
                                        <div className="w-[1px] h-full bg-primary"></div>
                                        <div className="flex flex-col gap-y-4">
                                            <h2 className="font-bold 2xl:text-[28px] 2xl:leading-[33.6px] tracking-[0%] text-black xl:text-[24px] xl:leading-[30px] lg:text-[20px] lg:leading-[26px]">{benefit.title}</h2>
                                            <p className="font-semibold 2xl:text-[20px] 2xl:leading-7 xl:text-[16px] xl:leading-5 lg:text-[14px] lg:leading-4 text-[#6B7280] tracking-[-2%]">{benefit.subTitle}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={`flex justify-start w-full 2xl:flex xl:flex lg:flex md:flex-col md:items-center sm:flex-col sm:items-center ${ isSmallScreen ? "flex-col items-center" : ""} `}>
                            <button className={`${interSans.variable} text-[#FFFFFF] font-semibold text-[14px] sm:text-[16px] mt-10
                                border border-[#FFFFFF] tracking-0 px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:cursor-pointer`}>
                                Shop Now
                            </button>
                        </div>


                    </div>
                </div>
                <div className="relative flex justify-center items-center">
                    <div className={`absolute bg-[#E6F9FB] rounded-full 
                            2xl:w-[645px] 2xl:h-[645px] 
                            xl:w-[500px] xl:h-[500px] 
                            lg:w-[400px] lg:h-[400px] 
                            md:w-[300px] md:h-[300px]
                            sm:w-[250px] sm:h-[250px]
                            ${isSmallestScreen ? "w-[180px] h-[180px] " : isSmallScreen ? "w-[250px] h-[250px] mt-10" : ""}
                            `}>
                    </div>

                    <img src="/images/benefits/product.png" alt="" className={`relative z-10 2xl:w-[100%] xl:w-[80%] lg:w-[70%] md:w-[50%] sm:w-[50%] ${isSmallestScreen ? "w-[60%]" : isSmallScreen ? "w-[60%]" : ""}`} />
                </div>

            </div>
        </div>

    )
}

export default Benefits