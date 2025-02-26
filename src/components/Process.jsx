import React from 'react'
import { Inter } from 'next/font/google';

const interSans = Inter({
    variable: "--font-inter-sans",
    subsets: ["latin"],
});


const Process = () => {

    const processData = [
        {
            title: "Order Online",
            subTitle: "Select your custom orthotic type and place your order from the comfort of your home.",
            icon: "/images/process/order.svg"
        },
        {
            title: "Get Your Impression Kit",
            subTitle: "Receive a simple, easy-to-use foot impression kit with clear instructions.",
            icon: "/images/process/impression-kit.svg"
        },
        {
            title: "Send It Back",
            subTitle: "Make your foot impressions and return them using the prepaid shipping label.",
            icon: "/images/process/return-item.svg"
        },
        {
            title: "Expert Crafting",
            subTitle: "Our top podiatrists design and craft your custom orthotics for the perfect fit.",
            icon: "/images/process/crafting.svg"
        },
        {
            title: "Receive & Enjoy",
            subTitle: "Get your orthotics delivered to your door and step into comfort with every move!",
            icon: "/images/process/receive.svg"
        }
    ]

    return (
        <div className="w-full mt-10 h-fit relative bg-primary">

            <div className="absolute inset-0 bg-[url('/images/benefits/benefits-bg.png')] bg-cover bg-center bg-no-repeat opacity-[0.06] scale-[1]"></div>

            <div className={`relative z-10 container mx-auto flex flex-col font-helveticaNeue`}>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-white text-[45px] leading-[54px] tracking-normal text-center'>How the Upform Process Works</p>
                    <p className='text-center text-base leading-[25.6px] text-white'>
                        Discover the benefits of custom orthotics, including improved posture, pain relief, mobility, foot health, balance, reduced strain, comfort, and support for a healthier lifestyle.
                    </p>
                </div>

                <div className=''>
                    
                </div>




                <div className='flex justify-center items-center'>
                    <button className={`${interSans.variable} text-[#FFFFFF] font-semibold text-[14px] sm:text-[16px] mt-10
                                border border-[#FFFFFF] tracking-0 px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:cursor-pointer`}>
                        How it works
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Process