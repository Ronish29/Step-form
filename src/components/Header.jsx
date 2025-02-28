import { useEffect, useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi";
import { useMediaQuery } from "react-responsive";
import { IoClose } from "react-icons/io5";
import Image from "next/image";



export default function Header() {

    const [activeIndex, setActiveIndex] = useState(0);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);





    const handleToggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    }

    const headerData = [
        { name: "Home" },
        { name: "Shop" },
        { name: "Delivery" },
        { name: "How It Works" },
        { name: "Contact us" }
    ]


    const sideHeaderData = [
        { icon: "/images/header/heart.svg", label: "Liked" },
        { icon: "/images/header/shipment.svg", label: "Delivery" },
        { icon: "/images/header/cart.svg", label: "Cart (1)" }
    ]


    const handleActiveIndexToggle = (index) => {
        setActiveIndex(index);
    }


    return (
        <header className="relative w-full">
            <div>
                <div className="mx-auto flex justify-between items-center container 2xl:px-7 2xl:py-7 xl:px-7 xl:py-7 lg:px-7 lg:py-7 md:px-7 md:py-7 sm:px-4 sm:py-4 px-4 py-4 ">
                    <button
                        onClick={handleToggleDrawer}
                        className={`2xl:hidden xl:hidden lg:hidden md:block   sm:text-xl text-lg `}
                    >
                        <GiHamburgerMenu />
                    </button>
                    <img
                        src="/images/header/main-logo.webp"
                        alt="logo"
                        className={`2xl:pl-0 xl:pl-0 lg:pl-0 md:pl-12 sm:pl-12 pl-12
                        w-header-logo-default sm:w-header-logo-default  max-[375px]:w-logo-image-375 mx-0`}
                    />



                    <div className={`2xl:flex xl:flex lg:flex md:hidden sm:hidden hidden w-fit bg-[#F0F0F0] rounded-[46px] border border-[#D2D3CE] gap-x-6 items-center font-bauhaus`}>
                        {headerData.map((item, index) => (
                            <div key={index} className="px-1">
                                <div className={` text-[16px] leading-[17.6px] font-normal hover:cursor-pointer
                                ${activeIndex === index ? "text-[#ffffff] bg-primary px-[20.04px] py-3 rounded-[46px] text-[18px] leading-[19.8px] tracking-[0px] border border-[#D2D3CE]"
                                        : "px-[20.04px] py-4 rounded-[46px] text-[18px] leading-[19.8px] text-primaryBlack"}`}
                                    onClick={() => handleActiveIndexToggle(index)}
                                >
                                    {item.name}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center 2xl:gap-x-3 xl:gap-x-3 lg:gap-x-[4px] md:gap-x-[4px] sm:gap-x-[2px] ">
                        {sideHeaderData.map((item, index) => (
                            <div key={index} className="flex items-center">
                                <img
                                    src={item.icon}
                                    alt={item.label}
                                    className="bg-[#F0F0F0] object-center scale-100 aspect-square rounded-full 2xl:w-8 xl:w-8 lg:w-8 md:w-8 sm:w-8 
                                        max-[640px]:w-header-icon-640 max-[640px]:px-2 px-1 w-6"
                                />

                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {isDrawerOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={handleToggleDrawer}></div>
            )}

            <aside
                className={`fixed top-0 left-0 h-full bg-white shadow-lg w-[80%] 
                transform transition-transform duration-300 ease-in-out z-50 py-8
                ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <button className="absolute top-4 right-4 text-4xl" onClick={handleToggleDrawer} >
                    <IoClose />
                </button>

                <div className="flex justify-center items-center">
                    <img src="/images/header/main-logo.svg" alt="" />
                </div>


                <div className="flex flex-col gap-4 mt-8 px-4">
                    {
                        headerData.map((item, index) => (
                            <div key={index}
                                onClick={() => handleActiveIndexToggle(index)}
                                className={` text-[16px] leading-[17.6px] font-normal hover:cursor-pointer
                                    ${activeIndex === index ? "text-[#ffffff]  bg-primary px-[20.04px] py-3 rounded-[12px] text-[18px] leading-[19.8px] tracking-[0px] border border-[#D2D3CE]"
                                        : "px-[20.04px] py-4 rounded-[46px] text-[18px] leading-[19.8px] text-primaryBlack"}`}>
                                {item.name}
                            </div>
                        ))
                    }
                </div>
            </aside>
        </header >
    )
}