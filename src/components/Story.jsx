import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive'

const interSans = Inter({
    variable: "--font-inter-sans",
    subsets: ["latin"],
});


const Story = () => {


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



    const storyData = [
        {
            title: "Foot Shape Scanning",
            subTitle: "Upon receiving the foot impression box, we scan it to obtain the client's preliminary foot shape data.",
            url: "/images/story-icons/foot-shape.svg"
        },
        {
            title: "Podiatrist-Approved Materials",
            subTitle: "A podiatrist analyzes data to identify areas for improvement and specifies materials needed, communicated to the designer.",
            url: "/images/story-icons/materials.svg"
        },
        {
            title: "Insole Design",
            subTitle: "The designer uses advanced software to create a custom insole design, sent to CNC milling for fabrication.",
            url: "/images/story-icons/insole-design.svg"
        },
        {
            title: "Finalization & Delivery",
            subTitle: "After the orthotics are cleaned, packed, and prepared, they are shipped directly to your door via courier.",
            url: "/images/story-icons/delivery.svg"
        }
    ]

    return (
        <div className={`w-full mt-10 h-fit font-helveticaNeue bg-[#FAFAFA] `}>
            <div className={`container mx-auto 2xl:py-[80px] xl:py-[80px] lg:py-[60px] md:py-[40px] sm:py-[26px] 2xl:px-7 xl:px-7 lg:px-7 md:px-4 sm:px-4 ${isSmallScreen ? "px-4 py-8" : ""} ${isSmallestScreen ? "px-4 py-4" : "" }`}>
                <div className='flex flex-col items-center justify-center w-full'>
                    <button className={`py-[20px] px-[28px] sm:py-[25px] sm:px-[34px] rounded-[40px] bg-[#19737A17] text-primary font-bold  ${isSmallestScreen ? "text-[14px] py-4 px-4" : ""} leading-[17.91px] mb-10`}>
                        Steps
                    </button>
                    <h1 className={`font-bold 2xl:text-[48px] 2xl:leading-[57.6px] xl:text-[48px] xl:leading-[54px] 
                        lg:text-[42px] lg:leading-[46px] md:text-[40px] md:leading-[48px] sm:text-[40px] sm:leading-[40px] 
                        ${isSmallestScreen ? "text-[20px] leading-6" : isSmallScreen ? "text-[32px] leading-8" : ""} 
                        text-center tracking-[1%] text-[#161413] 2xl:w-[661px]`}>
                        The story and values behind our company
                    </h1>

                </div>

                <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 grid-cols-1 sm:grid-cols-1 gap-6  lg:gap-8 2xl:p-4 xl:p-4 md:p-6 sm:p-2 mt-5">
                    {storyData.map((story, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-6 bg-white rounded-[20px] p-6 shadow-sm hover:shadow-md transition-shadow"
                        >

                            <div className={`flex-shrink-0 2xl:w-20 2xl:h-20 xl:w-16 xl:h-16 lg:w-16 lg:h-16 md:w-16 md:h-16 sm:w-14 sm:h-14 bg-primary rounded-xl flex items-center justify-center p-4 
                            2xl:self-center xl:self-center lg:self-center md:self-center sm:self-center 
                            ${isSmallestScreen ? "w-12 h-12  p-2 self-center" : isSmallScreen ? "w-14 h-14 p-3 self-center" : ""}`}>
                                <img
                                    src={story.url}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <h2 className={`font-bold text-xl 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base 
                            ${isSmallestScreen ? "text-xs" : isSmallScreen ? "text-sm" : ""} text-[#242331] leading-tight`}>
                                    {story.title}
                                </h2>
                                <p className={`text-[#797979] text-sm md:text-base leading-relaxed 
                                        ${isSmallestScreen ? "text-xs break-all" : isSmallScreen ? "text-xs " : ""}`}>
                                    {story.subTitle}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>


                <div className='flex justify-center items-center'>
                    <button className={`${interSans.variable} text-[#252525] font-semibold 2xl:text-[14px] sm:text-[16px] mt-6
                    ${isSmallestScreen ? "px-4 py-2 text-[12px]" : "px-6 py-3"} 
                    border border-[#252525] tracking-0 sm:px-8 sm:py-3 rounded-full hover:cursor-pointer`}>
                        Shop Now
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Story