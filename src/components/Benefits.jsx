import React, { useEffect, useState } from 'react'
import { Inter } from 'next/font/google';

const interSans = Inter({
    variable: "--font-inter-sans",
    subsets: ["latin"],
});

const Benefits = () => {

    const benefitsData = [
        {
            title: "Personalized for You",
            subTitle: "Each pair is handcrafted to fit your feet perfectly, providing superior comfort and support.",
            url: "/images/benefits/personalized-logo.webp"
        },
        {
            title: "Pain Relief & Comfort",
            subTitle: "Say goodbye to foot, knee, and back pain. Our orthotics help alleviate discomfort and promote movement.",
            url: "/images/benefits/pain-relief-logo.webp"
        },
        {
            title: "Affordable & Risk-Free",
            subTitle: "Enjoy high-quality custom orthotics at a fraction of the cost of providers. Plus, we offer a money-back guarantee.",
            url: "/images/benefits/affordable-logo.webp"
        }
    ]

    return (
        <div className="w-full mt-10 h-fit relative bg-primary">
            <div className="absolute inset-0 bg-[url('/images/benefits/benefits-bg.png')] bg-cover bg-center bg-no-repeat opacity-[0.06] scale-[1]"></div>

            <div className="relative z-10 container mx-auto flex py-4 sm:py-[80px] md:py-[80px] lg:py-[80px] xl:py-[114px] 2xl:py-[114px] 
                      justify-evenly items-center font-helveticaNeue
                      flex-wrap-reverse sm:flex-wrap-reverse md:flex-wrap-reverse lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap
                      px-4 sm:px-4 md:px-7 lg:px-7 xl:px-7 2xl:px-7">

                <div className="flex flex-col mt-10 md:mt-10 lg:mt-0 xl:mt-0 2xl:mt-0">
                    <div className='max-w-[698px] w-full flex flex-col items-center'>
                        <p className="font-bold text-benefits-title-375 sm:text-benefits-title-640 md:text-[45px] leading-8 sm:leading-10 md:leading-[54px] tracking-[0%] text-white text-left w-full">
                            Benefits
                        </p>
                        <p className='font-normal text-base leading-[25.6px] tracking-[0px] text-white 2xl:w-[698px] w-full text-left'>
                            Discover the benefits of custom orthotics, including improved posture, pain relief, mobility, foot health, balance, reduced strain, comfort, and support for a healthier lifestyle.
                        </p>
                        <div className='flex flex-col justify-start items-start mt-10 gap-y-4 gap-x-4 w-full'>
                            {benefitsData.map((benefit, index) => (
                                <div key={index} className="grid items-center bg-[#F9F9F9] rounded-[15px] w-full 2xl:w-[671px] p-6 gap-x-4 
                                      grid-cols-[80px_auto] lg:grid-cols-[60px_auto] xl:grid-cols-[70px_auto]">
                                    <div className="bg-white rounded-[15px] flex justify-center items-center p-4   sm:p-4 lg:p-3 xl:p-4">
                                        <img
                                            src={benefit.url}
                                            alt={benefit.title}
                                            className="w-[30px] h-[30px] 
                                                  lg:w-[30px] lg:h-[30px] xl:w-[40px] xl:h-[40px] 2xl:w-[50px] 2xl:h-[50px]  
                                                  object-contain"
                                        />
                                    </div>

                                    <div className="grid grid-cols-[1px_auto] items-center gap-x-4">
                                        <div className="w-[1px] h-full bg-primary"></div>
                                        <div className="flex flex-col gap-y-4">
                                            <h2 className="font-bold text-benefits-heading-375 sm:text-benefits-heading-640 
                                                  lg:text-[20px] lg:leading-[26px] xl:text-[24px] xl:leading-[30px] 2xl:text-[28px] 2xl:leading-[33.6px] 
                                                  tracking-[0%] text-black">
                                                {benefit.title}
                                            </h2>
                                            <p className="font-semibold text-benefits-subtext-375 sm:text-benefits-subtext-640 
                                                  lg:text-[14px] lg:leading-4 xl:text-[16px] xl:leading-5 2xl:text-[20px] 2xl:leading-7 
                                                  text-[#6B7280] tracking-[-2%]">
                                                {benefit.subTitle}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col items-center sm:flex-col sm:items-center md:flex-col md:items-center 
                                  lg:flex lg:justify-start xl:flex xl:justify-start 2xl:flex 2xl:justify-start w-full">
                            <button className={`${interSans.variable} text-white font-semibold text-sm sm:text-base mt-10
                                border border-white tracking-0 px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:cursor-pointer`}>
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>

                <div className="relative flex justify-center items-center w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2">
                    <div className="absolute bg-[#E6F9FB] rounded-full 
                          w-benefits-circle-375 h-benefits-circle-375 
                          sm:w-[250px] sm:h-[250px] 
                          md:w-[300px] md:h-[300px]
                          lg:w-[350px] lg:h-[350px] 
                          xl:w-[500px] xl:h-[500px] 
                          2xl:w-[645px] 2xl:h-[645px]">
                    </div>

                    <img
                        src="/images/benefits/benefit-product.webp"
                        alt="Benefits product"
                        className="relative z-10 w-benefits-product-375 sm:w-[50%] md:w-[50%] lg:w-[90%] xl:w-[80%] 2xl:w-[100%]"
                    />
                </div>
            </div>
        </div>
    )
}

export default Benefits