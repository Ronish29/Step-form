import { Inter } from 'next/font/google';
import { useState, useEffect } from 'react';

const interSans = Inter({
    variable: "--font-inter-sans",
    subsets: ["latin"],
});

const HomePageBanner = () => {
    
    
    return (
        <div className="w-full mt-10 flex flex-col justify-center items-center h-fit">
            <div className="mx-auto container relative 2xl:px-7 xl:px-7 lg:px-7 md:px-7 sm:px-4 px-4">
                <div className="mx-auto flex justify-center">
                    <span className="text-primaryBlack py-2 px-4 rounded-full bg-[#FFFBEF] inline font-helveticaNeue font-medium text-sm sm:text-base leading-[17.6px] text-center">
                        Discover Our Exquisite Selections
                    </span>
                </div>

                <div className="flex lg:flex-row flex-col lg:items-end items-center justify-evenly px-7 relative">
                    <span className="font-helveticaNeue font-extrabold inline lg:mb-[25px] sm:mb-0 lg:mt-0 mt-4 
                        2xl:text-[40px] xl:text-[40px] lg:text-[36px] md:text-[35px] sm:text-[32px] text-homepage-banner-title-375 max-[640]:text-homepage-banner-title-640 tracking-[-2%] text-primary mb-0">
                        Get Your Custom
                    </span>
                    <div className="relative flex justify-center items-center">
                        <span
                            className="absolute top-4 font-extrabold 2xl:text-[200px] xl:text-[200px] lg:text-[150px] md:text-[100px] 
                                sm:text-[100px] text-homepage-banner-stroke-375 max-[640]:text-homepage-banner-stroke-640 block tracking-[-6%] text-transparent opacity-60 custom-text-stroke"
                        >
                            STEPFORM
                        </span>

                        <img
                            src="/images/homepage-banner/banner-image.webp"
                            alt="Stepform product"
                            className="mt-6 sm:mt-4 w-homepage-banner-image-375 sm:w-homepage-banner-image-640 md:w-homepage-banner-image-default 2xl:w-[509px] 2xl:h-[437px] xl:w-[509px] xl:h-[437px] lg:w-auto lg:h-auto"
                        />
                    </div>
                    <span className="font-helveticaNeue font-bold inline 
                        2xl:text-[40px] xl:text-[40px] lg:text-[36px] md:text-[35px] sm:text-[32px] text-homepage-banner-title-375 max-[640]:text-homepage-banner-title-640 sm:md-0 lg:mt-0 mt-4 tracking-[-2%] text-primary lg:mb-[25px] mb-0">
                        Orthotics Today
                    </span>
                </div>

                <div className="flex flex-col justify-center items-center gap-4 mt-5">
                    <p className="text-[#6B7280] font-normal font-helveticaNeue text-sm sm:text-base leading-[25.6px] text-center mt-10">
                        Providing comfort, support, mobility, and confidence with tailor-made solutions.
                    </p>

                    <button className={`${interSans.variable} text-primaryBlack font-semibold text-homepage-banner-button-375 sm:text-sm md:text-base mt-2
                     sm:px-6 sm:py-3 md:px-8 md:py-3 px-6 py-3
                    border border-primaryBlack tracking-0 rounded-full hover:cursor-pointer`}>
                        Shop Now
                    </button>
                </div>

                <div className="absolute bottom-4 right-7 sm:bottom-0 border rounded-full 
                    border-solid border-[rgba(15,_64,_38,_0.2)] px-homepage-banner-icon-padding-375 py-homepage-banner-icon-padding-375 sm:px-2 sm:py-2 md:px-4 md:py-4 
                    max-[375]:right-homepage-banner-icon-position-375 sm:right-4">
                    <img 
                        src="/images/homepage-banner/mouse-icon.svg" 
                        alt="Mouse icon" 
                        className="w-homepage-banner-icon-375 sm:w-homepage-banner-icon-640" 
                    />
                </div>
            </div>
        </div>
    );
};

export default HomePageBanner;