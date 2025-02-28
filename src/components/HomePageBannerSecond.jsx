import React from 'react';
import { Inter } from 'next/font/google';

const interSans = Inter({
    variable: "--font-inter-sans",
    subsets: ["latin"],
});

const HomePageBannerSecond = () => {
    const productData = [
        { url: "/images/homepage-banner-second/product-1.webp" },
        { url: "/images/homepage-banner-second/product-2.webp" },
        { url: "/images/homepage-banner-second/product-3.webp" },
    ];

    return (
        <div className="w-full flex flex-col mt-8">
            <div className="container mx-auto px-4 sm:px-7">
                <div className="hidden md:block">
                    <div className="flex flex-col md:flex-row justify-around w-full items-center h-full gap-8 md:gap-4 mb-12">
                        <span className="text-2xl sm:text-3xl md:text-4xl font-helveticaNeue lg:text-[48px] font-bold 2xl:text-left 2xl:w-1/2 2xl:leading-[58px] xl:text-left">
                            Unmatched Flavor – Truly A Must-Try Delight!
                        </span>
                        <span
                            className="font-extrabold 2xl:text-[180px] xl:text-[160px] lg:text-[140px] md:text-[120px] 
                                      sm:text-[100px] text-[80px] block tracking-[0%] text-transparent opacity-60 custom-text-stroke leading-none"
                        >
                            STEP
                        </span>
                    </div>
                    <div className="flex flex-col md:flex-row justify-around w-full items-center h-full gap-8 md:gap-4 mb-12">
                        <span
                            className="font-extrabold 2xl:text-[180px] xl:text-[160px] lg:text-[140px] md:text-[120px] 
                                      sm:text-[100px] text-[80px] block tracking-[0%] text-transparent opacity-60 custom-text-stroke leading-none"
                        >
                            Form
                        </span>
                        <span className="text-base sm:text-lg leading-[30px] tracking-normal text-[#6B7280] 2xl:w-[545px] text-center 2xl:text-left xl:text-left lg:text-left md:text-left">
                            Explore the Product in Detail – Get an Up-Close View of Features, Benefits, and Everything You Need to Know
                            Before Making Your Choice!
                        </span>
                    </div>
                </div>

                <div className="flex flex-col justify-around w-full items-center h-full gap-8 mb-12 md:hidden">
                    <span className="text-homepage-banner-title-375 max-w-sm:text-homepage-banner-title-640 font-helveticaNeue font-bold text-center">
                        Unmatched Flavor – Truly A Must-Try Delight!
                    </span>
                    <span
                        className="font-extrabold block tracking-[0%] text-transparent opacity-60 custom-text-stroke leading-none text-center
                                  text-homepage-banner-stroke-375 max-w-sm:text-homepage-banner-stroke-640"
                    >
                        STEPFORM
                    </span>
                    <span className="text-base leading-[30px] tracking-normal text-[#6B7280] text-center">
                        Explore the Product in Detail – Get an Up-Close View of Features, Benefits, and Everything You Need to Know
                        Before Making Your Choice!
                    </span>
                </div>

                <div className="flex flex-col 2xl:flex-row justify-evenly items-center 2xl:h-[500px] relative gap-12 2xl:gap-0 mb-12">
                    <div className="relative">
                        <img 
                            src="/images/homepage-banner/banner-image.webp" 
                            alt="" 
                            className="z-10 relative w-homepage-banner-image-375 max-w-sm:w-homepage-banner-image-640 sm:w-homepage-banner-image-default" 
                        />
                        <div className="bg-[#C8FFA6] absolute z-0 left-0 bottom-10 w-[90px] h-[92px] rounded-md"></div>
                    </div>

                    <div className="flex flex-col justify-around h-full relative gap-8 2xl:gap-0 w-full max-w-[458px]">
                        <div className="flex flex-col gap-y-4">
                            <p className="text-[#161413] text-xl sm:text-2xl leading-7 tracking-normal">Ridged energy drink</p>
                            <span className="font-bold text-6xl sm:text-7xl md:text-8xl lg:text-[100px] leading-none font-helveticaNeue text-[#161413] tracking-[-2%]">
                                $199
                            </span>
                            <div className="flex gap-x-4 items-center">
                                <button
                                    className={`${interSans.variable} text-[#252525] font-semibold text-homepage-banner-button-375 sm:text-base 
                                              border border-[#252525] tracking-0 px-6  py-3 rounded-full hover:cursor-pointer`}
                                >
                                    Shop Now
                                </button>
                                <button className="p-homepage-banner-icon-padding-375 sm:p-2 border border-black rounded-full">
                                    <img 
                                        src="/images/header/heart.svg" 
                                        alt="Favorite"  
                                    />
                                </button>
                            </div>
                        </div>

                        <div className="flex gap-x-5">
                            {productData.map((product, index) => (
                                <img key={index} src={product.url} alt="" className="w-[72px] h-[58px] rounded-md" />
                            ))}
                        </div>
                    </div>

                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[90px] h-[92px] bg-[#FFEBA6] rounded-md hidden 2xl:block"></div>
                </div>

                <div className="border-y border-gray-200 py-8 font-helveticaNeue">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0 text-center lg:text-left">
                        <div className="text-gray-800 space-y-2">
                            <p>Guaranteed Support, Quality, and Relief</p>
                            <p>Trusted Orthotics with Proven Results</p>
                        </div>
                        <p className="font-semibold text-lg sm:text-xl md:text-2xl max-w-2xl">
                            Rest Assured with Our Commitment to Excellence: Guaranteed Quality and Comfort That Surpasses Expectations
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageBannerSecond;