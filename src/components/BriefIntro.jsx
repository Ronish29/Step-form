import React from 'react'

const BriefIntro = () => {


    return (
        <div className={`w-full 2xl:mt-5 xl:mt-5 lg:mt-5 md:mt-5 sm:mt-5 mt-2 h-fit font-helveticaNeue`}>
            <div className="container mx-auto py-10  border-b border-b-[#E5E7EB] 2xl:px-7 xl:px-7 lg:px-7 md:px-4 sm:px-4 px-4">
                <div className='flex justify-between flex-wrap px-7 lg:px-4 md:px-4 sm:px-4'>
                    <div className="2xl:w-[301px] xl:w-[301px] lg:w-full flex  lg:justify-center md:justify-center md:w-full sm:w-full sm:justify-center  justify-center w-full">
                        <h1 className="text-[#000000] font-bold 2xl:text-[32px] xl:text-[32px] lg:text-[32px] md:text-[32px] sm:text-[30px] 2xl:leading-[38.4px] xl:leading-[38.4px] lg:leading-[38.4px] md:leading-[38.4px] sm:leading-[38.4px]  tracking-[0%] text-[20px]  leading-8 " >A Brief Introduction to Who We Are</h1>
                    </div>
                    <div className='flex flex-col w-full justify-between items-start gap-x-10 gap-y-10 2xl:w-[820px] xl:w-[820px] lg:w-full '>
                        <p className="text-[#6B7280] 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] sm:text-[22px] leading-[33.6px] tracking-[-2%] font-medium 2xl:mt-0 xl:mt-0 lg:mt-6 md:mt-6 sm:mt-6 2xl:text-left xl:text-left lg:text-left md:text-left sm:text-left  text-[16px] mt-5 text-center">
                            We specialize in providing custom orthotics, focused on comfort, mobility, and support to improve your health and lifestyle.
                        </p>
                        <div className="flex gap-x-6 w-full 2xl:justify-around xl:justify-around lg:justify-around md:justify-around sm:justify-around  justify-center ">
                            <div className="flex flex-col w-1/2 gap-y-0 2xl:gap-y-4 xl:gap-y-4 lg:gap-y-4 md:gap-y-4 sm:gap-y-4 2xl:w-[390px] xl:w-[390px] lg:w-[390px] md:w-[390px] sm:w-[390px] "
                               >
                                <p className="text-[#1F2937] font-bold 2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[40px] 2xl:leading-[48px] xl:leading-[48px] lg:leading-[48px] md:leading-[48px] tracking-[0%] text-[22px] 2xl:text-left xl:text-left lg:text-left md:text-left sm:text-left text-center leading-10" >
                                    150K
                                </p>
                                <p className="text-[16px] leading-[25.6px] tracking-[0%] font-medium text-[#6B7280]  2xl:text-left xl:text-left lg:text-left md:text-left sm:text-left    text-center ">
                                    Happy Customer
                                </p>
                            </div>
                            <div className="flex flex-col w-1/2 gap-y-0 2xl:gap-y-4 xl:gap-y-4 lg:gap-y-4 md:gap-y-4 sm:gap-y-4 2xl:w-[390px] xl:w-[390px] lg:w-[390px] md:w-[390px] sm:w-[390px] "
                               >
                                <p className="text-[#1F2937] font-bold 2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[40px] 2xl:leading-[48px] xl:leading-[48px] lg:leading-[48px] md:leading-[48px] tracking-[0%] text-[22px] 2xl:text-left xl:text-left lg:text-left md:text-left sm:text-left text-center leading-10" >
                                    99%
                                </p>
                                <p className="text-[16px] leading-[25.6px] tracking-[0%] font-medium text-[#6B7280]  2xl:text-left xl:text-left lg:text-left md:text-left sm:text-left    text-center ">
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