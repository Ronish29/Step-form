import { Inter } from 'next/font/google';

const interSans = Inter({
    variable: "--font-inter-sans",
    subsets: ["latin"],
});


const Story = () => {

    const storyData = [
        {
            title: "Foot Shape Scanning",
            subTitle: "Upon receiving the foot impression box, we scan it to obtain the client's preliminary foot shape data.",
            url: "/images/story-icons/foot-shape.webp"
        },
        {
            title: "Podiatrist-Approved Materials",
            subTitle: "A podiatrist analyzes data to identify areas for improvement and specifies materials needed, communicated to the designer.",
            url: "/images/story-icons/materials.webp"
        },
        {
            title: "Insole Design",
            subTitle: "The designer uses advanced software to create a custom insole design, sent to CNC milling for fabrication.",
            url: "/images/story-icons/insole-design.webp"
        },
        {
            title: "Finalization & Delivery",
            subTitle: "After the orthotics are cleaned, packed, and prepared, they are shipped directly to your door via courier.",
            url: "/images/story-icons/delivery.webp"
        }
    ]

    return (
        <div className={`w-full mt-10 h-fit font-helveticaNeue bg-[#FAFAFA] `}>
            <div className="container mx-auto 2xl:py-[80px] xl:py-[80px] lg:py-[60px] md:py-[40px] sm:py-[26px] 2xl:px-7 xl:px-7 lg:px-7 md:px-4 sm:px-4 px-4 py-6">
                <div className='flex flex-col items-center justify-center w-full'>
                    <button className="2xl:py-[20px] 2xl:px-[28px] xl:py-[20px] xl:px-[28px] sm:py-[25px] sm:px-[34px] rounded-[40px] bg-[#19737A17] text-primary font-bold  text-[14px] py-4 px-6 leading-[17.91px] mb-10">
                        Steps
                    </button>
                    <h1 className={`font-bold 2xl:text-[48px] 2xl:leading-[57.6px] xl:text-[48px] xl:leading-[54px] 
                        lg:text-[42px] lg:leading-[46px] md:text-[40px] md:leading-[48px] sm:text-[40px] sm:leading-[40px] 
                       text-2xl leading-6
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

                            <div className="flex-shrink-0 2xl:w-20 2xl:h-20 xl:w-16 xl:h-16 lg:w-16 lg:h-16 md:w-16 md:h-16 sm:w-14 sm:h-14 bg-primary rounded-xl flex items-center justify-center 2xl:p-4 xl:p-4 lg:p-4 md:p-4 sm:p-4 
                            2xl:self-center xl:self-center lg:self-center md:self-center sm:self-center 
                            w-12 h-12  p-2 self-center">
                                <img
                                    src={story.url}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <h2 className={`font-bold  2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base 
                            text-sm text-[#242331] leading-tight`}>
                                    {story.title}
                                </h2>
                                <p className="text-[#797979] 2xl:text-sm xl:text-sm lg:text-sm md:text-base sm:text-base leading-relaxed
                                        text-xs ">
                                    {story.subTitle}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>


                <div className='flex justify-center items-center'>
                <button className={`${interSans.variable} text-primaryBlack font-semibold text-homepage-banner-button-375 sm:text-sm md:text-base mt-4 sm:px-6 sm:py-3 md:px-8 md:py-3 px-6 py-3 
                    border border-primaryBlack tracking-0 rounded-full hover:cursor-pointer`}>
                        Shop Now
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Story